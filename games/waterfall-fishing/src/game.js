// 玩法（照成片的因果链改成能玩的）：
//   下塘：主角走出院门、跳进塘里，身前的红色扇形网扫到的鱼一条条跳到背上摞起来（摞满 10 条）
//   加工：背着鱼走到加工台，鱼一条条飞上台，厨师切好装盒，盒子码在台子出货位
//   卖货：拿上盒子走到柜台后的虚线框，盒子越过柜台飞到排队的人头上（人群里也跟着下一阵「肉雨」），满意了打钩离开，柜台边冒钞票
//   收钱：站在框里钞票飞到身上摞成绿柱，右上角现金跟着涨
//   升级：踩价格地块付钱 —— 200 雇渔工（自动往鱼框里捕鱼）→ 200 传送带（鱼框直送加工台）→ 400 售货员（自动送货），买完结束
import * as THREE from 'three';
import { L, T, ORDER, WATER_Y } from './config.js';
import { scene, camera, toUI, SUN, realLook, addCaster } from './world.js';
import { Item, Stack, items, updateItems, SIZE, bakedGeo } from './items.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeChar } from './chars.js';
import { actor, stepActor } from './custactions.js';
import { buildFence, updateFence } from './fence.js';
import { buildCrowdActs, updateCrowdActs } from './crowdacts.js';
import { Tile, Zone, StandBox, makeFan, flash, puff, splash, updateFx, updateTarget, updatePath, iconTex } from './fx.js';
import { play } from '../../../shared/playable/audio.js';
import { report } from '../../../shared/playable/platform.js';
import { dist, clamp01, lerp, hash, inRect, wrapA, backOut, smooth } from '../../../shared/playable/util.js';

export const G = { t: 0, ended: false, endT: Infinity, endAt: Infinity, unlocked: {}, served: 0, firstCatch: false };
const PIER_Y = 0.045;
const FISH_SPOT = [0.64, -6.4];
// 游泳：绕腰往前趴 63°，肩膀刚好露出水面（原来直着泡在水里，像溺水）
const SWIM_TILT = 1.1, SWIM_Y = WATER_Y - 0.72;
function swimTilt(c, on, dt) { c.tilt.rotation.x += ((on ? SWIM_TILT : 0) - c.tilt.rotation.x) * Math.min(1, dt * 8); }
const onPier = (x, z) => inRect([x, z], L.walk.pier);
const wet = (x, z) => !onPier(x, z) && z < -2.9;
export const yOf = (x, z) => (wet(x, z) ? WATER_Y : onPier(x, z) ? PIER_Y : 0.02);
const zone = (p) => (onPier(p[0], p[1]) ? 1 : p[1] < -2.9 ? 0 : 2);
const fwdOf = (h) => [Math.sin(h), Math.cos(h)];

let P = null;   // 原型
let hero, chef, fisher = null, helper = null;
let intake, outStack, strip, frameStack = null, frameMesh = null, beltMesh = null;
const tiles = {};
let zones = {}, stand, fanHero, fanFisher;
const front = [];
const crowd = { n: 0, mesh: null, pos: [], heads: [] };
const school = { n: 0, mesh: null, f: [] };
const beltItems = [];
const rain = [];   // 人群头上的「肉雨」
export const emo = [];   // 头顶表情（UI 层画）：{ kind, p:[x,y,z], t0, dur }

// ------------------------------------------------------------------ 建场
export function build(protos, tex) {
  P = protos;
  // 主角
  hero = { c: makeChar(P.hero, P.heroTex), p: [...L.start], v: [0, 0], vel: [0, 0], heading: Math.PI * 0.85, inWater: false, sway: [0, 0], nx: {}, full: -9, divedT: -9 };
  hero.c.play('idle'); scene.add(hero.c.obj);
  // 背上那摞贴着后背：岸上从腰往上摞，水里人是趴着游的，从水面上的后背直接摞
  const backY = () => (hero.inWater ? WATER_Y + 0.12 : 0.88), backD = () => (hero.inWater ? -0.02 : 0.32);   // 水里人往前趴，后背在身体中心上方
  hero.fish = new Stack(() => { const f = fwdOf(hero.heading), b = backD(); return [hero.p[0] - f[0] * b, backY(), hero.p[1] - f[1] * b, hero.heading]; }, SIZE.fish.thick, { sway: hero.sway });
  hero.hold = [0.45, 0.8];   // 手捧的位置（离身体中心往前多远、底多高），每帧按手腕骨骼更新
  hero.pack = new Stack(() => holdBase(hero), SIZE.pack.h, { sway: hero.sway });
  hero.cash = new Stack(() => { const f = fwdOf(hero.heading), back = backD() + (hero.fish.n ? 0.38 : 0); return [hero.p[0] - f[0] * back, backY(), hero.p[1] - f[1] * back, hero.heading]; }, SIZE.cash.h * 1.02, { sway: hero.sway });
  // 厨师
  chef = makeChar(P.chef, P.chefTex); chef.obj.position.set(L.chef[0], 0, L.chef[1]); chef.face(-Math.PI / 2); chef.play('idle'); scene.add(chef.obj); chef.busy = 0;
  // 加工台：进料、出货（两摞）
  const top = L.table.top;
  intake = new Stack(() => [L.intake[0], top, L.intake[1], Math.PI / 2], SIZE.fish.thick);
  outStack = new Stack(() => [L.outStack[0][0], top, L.outStack[0][1], Math.PI / 2], SIZE.pack.h, { cols: [[0, 0], [0, L.outStack[1][1] - L.outStack[0][1]]] });
  // 钱：柜台后沿一排排码
  const sx0 = L.cashStrip[0], sx1 = L.cashStrip[1], sz = (L.cashStrip[2] + L.cashStrip[3]) / 2;
  strip = new Stack(() => [sx0, 0.06, sz, 0], SIZE.cash.h, { cols: [0, 1, 2].map((i) => [(sx1 - sx0) * (i / 2), 0]).concat([0, 1, 2].map((i) => [(sx1 - sx0) * (i / 2), 0.32])) });
  // 地块
  for (const id of ORDER) { const d = L.pads[id]; tiles[id] = new Tile(id, d.c, d.price, d.icon, [d.c[0] - 0.5, d.c[1] - 0.866]); }
  tiles.hire.show(0);
  // 交接区圆圈
  const fishIcon = iconTex((g) => { g.save(); g.translate(64, 64); g.rotate(-0.4); g.fillStyle = 'rgba(255,255,255,0.75)'; g.beginPath(); g.ellipse(0, 0, 40, 16, 0, 0, 7); g.fill(); g.beginPath(); g.moveTo(34, 0); g.lineTo(56, -16); g.lineTo(56, 16); g.closePath(); g.fill(); g.restore(); });
  const packIcon = iconTex((g) => { g.globalAlpha = 0.85; g.drawImage(tex.packIconImg, 14, 14, 100, 100); });
  zones.drop = new Zone(L.dropSpot, 0.85, 0.035, fishIcon, L.intake);
  zones.pick = new Zone(L.pickSpot, 0.85, 0.035, packIcon, L.outStack[0]);
  stand = new StandBox(L.stand);
  // 渔网
  fanHero = makeFan(); fanFisher = makeFan();
  // 柜台外排队的三个人 + 后面一大片人群
  for (let i = 0; i < L.front.length; i++) front.push(newCustomer(i, 0, true));
  buildCrowd(tex);
  buildCrowdActs(P, tex, crowd);
  buildFence(P, emo);
  buildSchool(tex);
}

// ------------------------------------------------------------------ 手捧东西：盒子摞的底跟着两只手腕走（手托着最下面一个盒子），不会举在盒子上方、也不会插进胸口
const _hv = [0, 0, 0];
function holdBase(e) { const f = fwdOf(e.heading); return [e.p[0] + f[0] * e.hold[0], e.c.obj.position.y + e.hold[1], e.p[1] + f[1] * e.hold[0], e.heading]; }
function updateHold(e, dt) {
  if (!e.c.hands(_hv)) return;
  const f = fwdOf(e.heading), d = (_hv[0] - e.p[0]) * f[0] + (_hv[2] - e.p[1]) * f[1];
  const fw = Math.max(0.42, d + 0.06), y = _hv[1] - e.c.obj.position.y - SIZE.pack.h * 0.7;
  const k = Math.min(1, dt * 18); e.hold[0] += (fw - e.hold[0]) * k; e.hold[1] += (Math.max(0.35, y) - e.hold[1]) * k;
}

// ------------------------------------------------------------------ 顾客
function newCustomer(i, t, instant = false) {
  const c = makeChar(P.cust, P.custTex);
  const s = L.front[i];
  const cu = { c, i, need: T.need[0] + Math.floor(hash(i * 7.3 + t * 3.1) * (T.need[1] - T.need[0] + 1)), got: 0, inFly: 0, state: instant ? 'wait' : 'enter', t0: t, lastGot: -9,
    p: instant ? [s[0], s[1]] : [s[0] + (hash(t) - 0.5) * 0.8, s[1] + 1.4], head: null };
  cu.head = new Stack(() => [cu.p[0], 1.48, cu.p[1], Math.PI / 2], SIZE.pack.h * 0.95);
  c.obj.position.set(cu.p[0], 0, cu.p[1]); c.face(Math.PI); c.play(instant ? 'idle' : 'walk'); scene.add(c.obj);
  // 等货的时候不是干站着：举手抗议、招手催、双手举起、跺脚、换重心张望轮着来（原工程 custactions.js 的 URG 那组）
  const URG = ['raise', 'wave', 'bothUp', 'stomp', 'raise', 'shift', 'wave'];
  cu.act = actor(c, () => URG[Math.floor(Math.random() * URG.length)], () => 0.5 + 1.4 * Math.random(), t + 0.4 + 1.2 * hash(i * 2.9 + t));
  return cu;
}
function updateCustomers(t, dt) {
  for (let i = 0; i < front.length; i++) {
    const cu = front[i], s = L.front[i];
    if (cu.state === 'enter') {
      const k = clamp01((t - cu.t0) / 0.7); cu.p[0] = lerp(cu.p[0], s[0], Math.min(1, dt * 6)); cu.p[1] = lerp(s[1] + 1.4, s[1], smooth(k));
      if (k >= 1) { cu.state = 'wait'; cu.c.play('idle'); }
    } else if (cu.state === 'wait') {
      if (cu.got >= cu.need && cu.inFly === 0) { cu.state = 'done'; cu.t0 = t; play('served', { vol: 0.7 }); G.served++; report(2003); }
    } else if (cu.state === 'done') {   // 拿齐了：欢呼一下再走
      if (cu.c.anim !== 'cheer') cu.c.play('cheer', 0.15, 1.3);
      if (t - cu.t0 > 0.95) { cu.state = 'leave'; cu.t0 = t; cu.c.play('walk'); }
    } else if (cu.state === 'leave') {
      const k = (t - cu.t0); cu.c.face(0, Math.min(1, dt * 8)); cu.p[1] += dt * 2.0;
      if (k > 1.5) { scene.remove(cu.c.obj); for (const it of cu.head.items) it.kill(); front[i] = newCustomer(i, t); continue; }
    }
    const { off } = stepActor(cu.act, t, dt, cu.state === 'wait');
    let ox = 0, oy = 0, oz = 0;
    if (off) { const h = cu.c.heading; ox = off[0] * Math.cos(h) + off[2] * Math.sin(h); oy = off[1]; oz = -off[0] * Math.sin(h) + off[2] * Math.cos(h); }
    cu.c.obj.position.set(cu.p[0] + ox, oy, cu.p[1] + oz);
  }
}
const waitingSlot = () => { let best = null; for (const cu of front) if (cu.state === 'wait' && cu.got + cu.inFly < cu.need) { if (!best || cu.i < best.i) best = cu; } return best; };

// ------------------------------------------------------------------ 人群（静态站姿实例化 + 着色器里轻微呼吸摇晃）
function buildCrowd(tex) {
  const parts = []; P.crowd.scene.traverse((o) => { if (o.isMesh) parts.push([bakedGeo(o), o.material]); });
  parts.sort((a, b) => (a[1].name.includes('eye') ? 1 : 0) - (b[1].name.includes('eye') ? 1 : 0));
  for (const [g] of parts) for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
  const geo = mergeGeometries(parts.map((p) => p[0]), true), mats = parts.map((p) => p[1]);
  const ms = mats.map((m) => { const mm = realLook(new THREE.MeshLambertMaterial({ map: m.name.includes('eye') ? tex.custEye : tex.cust })); const prev = mm.onBeforeCompile;
    mm.onBeforeCompile = (sh, r) => { prev(sh, r); sh.uniforms.uT = CROWD_T;
      sh.vertexShader = sh.vertexShader.replace('void main() {', 'uniform float uT;\nvoid main() {').replace('#include <begin_vertex>', `#include <begin_vertex>
  { float ph = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    transformed.y *= 1.0 + 0.016 * sin(uT * 2.6 + ph);
    transformed.x += sin(uT * 1.6 + ph) * 0.035 * transformed.y; transformed.z += cos(uT * 1.3 + ph * 1.7) * 0.02 * transformed.y; }`); };
    const k = mm.customProgramCacheKey(); mm.customProgramCacheKey = () => k + '|crowd'; return mm; });
  const C = L.crowd, sp = 0.7, pts = [];
  for (let z = C.z0; z < C.z1; z += sp * 0.9) for (let x = C.x0; x < C.x1; x += sp) {
    const j = pts.length; pts.push([x + (hash(j * 1.7) - 0.5) * 0.36 + ((Math.round((z - C.z0) / sp) % 2) * sp) / 2, z + (hash(j * 3.1) - 0.5) * 0.3]);
  }
  crowd.n = pts.length; crowd.mesh = new THREE.InstancedMesh(geo, ms, crowd.n); crowd.mesh.castShadow = true; crowd.mesh.frustumCulled = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
  pts.forEach((pt, i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI + (hash(i * 5.7) - 0.5) * 0.9); const k = 0.94 + hash(i * 9.1) * 0.12; s.set(k, k, k); p.set(pt[0], 0, pt[1]);
    m.compose(p, q, s); crowd.mesh.setMatrixAt(i, m); col.setRGB(0.88 + hash(i * 2.3) * 0.2, 0.88 + hash(i * 4.1) * 0.18, 0.86 + hash(i * 6.7) * 0.2); crowd.mesh.setColorAt(i, col);
    crowd.pos.push(pt); crowd.heads.push([pt[0], 1.42 * k, pt[1]]);
  });
  scene.add(crowd.mesh); addCaster(crowd.mesh);
}
const CROWD_T = { value: 0 };

// ------------------------------------------------------------------ 塘里的鱼群（实例化 + 着色器摆尾，水下染水色；不写深度，人游过去盖在上面）
function buildSchool(tex) {
  const geo = P.fishGeo;
  const mat = new THREE.MeshLambertMaterial({ map: tex.fish });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = CROWD_T;
    sh.vertexShader = sh.vertexShader.replace('void main() {', 'uniform float uT;\nvoid main() {').replace('#include <begin_vertex>', `#include <begin_vertex>
  { float ph = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    float tail = smoothstep(0.35, -0.55, transformed.x); transformed.z += sin(transformed.x * 4.5 - uT * 11.0 + ph) * 0.11 * tail; }`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', `outgoingLight = mix(outgoingLight * vec3(0.7, 0.86, 0.95), vec3(0.04, 0.2, 0.27), 0.5);
#include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => 'school';
  
  school.mesh = new THREE.InstancedMesh(geo, mat, T.fishN); school.mesh.renderOrder = -5; school.mesh.frustumCulled = false; school.mesh.castShadow = false;
  const R = L.pondRect;
  for (let i = 0; i < T.fishN; i++) school.f.push({ x: lerp(R[0], R[1], hash(i * 1.3)), z: lerp(R[2], R[3], hash(i * 2.9)), h: hash(i * 4.4) * 6.28, sp: 0.8 + hash(i * 7.1) * 0.8, tx: 0, tz: 0, tt: -1, alive: true, back: 0, y: WATER_Y - 0.32 - hash(i) * 0.2, s: (0.85 + hash(i * 3.3) * 0.3) * 0.72 });
  scene.add(school.mesh);
}
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();
function updateSchool(t, dt) {
  const R = L.pondRect; let n = 0;
  for (let i = 0; i < school.f.length; i++) {
    const f = school.f[i];
    if (!f.alive) { if (t > f.back) { f.alive = true; f.x = hash(t + i) < 0.5 ? R[0] + 0.2 : R[1] - 0.2; f.z = lerp(R[2], R[3], hash(t * 3 + i)); } else continue; }
    if (t > f.tt) { f.tx = lerp(R[0] + 0.3, R[1] - 0.3, hash(i * 3.7 + Math.floor(t / 3) * 1.9)); f.tz = lerp(R[2] + 0.3, R[3] - 0.2, hash(i * 5.1 + Math.floor(t / 3) * 2.3)); f.tt = t + 2 + hash(i + t) * 2.5; }
    let dx = f.tx - f.x, dz = f.tz - f.z;
    // 躲开游泳的人（网扫过来鱼会跑，但跑不远）
    for (const sw of swimmers()) { const ax = f.x - sw[0], az = f.z - sw[1], d = Math.hypot(ax, az); if (d < 1.4) { dx += ax / d * 2.2; dz += az / d * 2.2; } }
    const want = Math.atan2(dx, dz); f.h += wrapA(want - f.h) * Math.min(1, dt * 2.2);
    f.x += Math.sin(f.h) * f.sp * dt; f.z += Math.cos(f.h) * f.sp * dt;
    f.x = Math.min(R[1], Math.max(R[0], f.x)); f.z = Math.min(R[3], Math.max(R[2], f.z));
    _e.set(0, f.h - Math.PI / 2, 0); _q.setFromEuler(_e); _p.set(f.x, f.y, f.z); _s.setScalar(f.s);
    _m.compose(_p, _q, _s); school.mesh.setMatrixAt(n++, _m); f.slot = n - 1;
  }
  school.mesh.count = n; school.mesh.instanceMatrix.needsUpdate = true;
}
const swimmers = () => { const a = []; if (hero.inWater) a.push(hero.p); if (fisher && fisher.inWater) a.push(fisher.p); return a; };
// 扇形网里最近的一条鱼
function fishInFan(p, h, R, ang) {
  let best = null, bd = 1e9;
  for (const f of school.f) {
    if (!f.alive) continue; const dx = f.x - p[0], dz = f.z - p[1], d = Math.hypot(dx, dz);
    if (d > R || d < 0.2) continue; if (Math.abs(wrapA(Math.atan2(dx, dz) - h)) > ang / 2) continue;
    if (d < bd) { bd = d; best = f; }
  }
  return best;
}
function catchFish(f, t) { f.alive = false; f.back = t + 2.5 + hash(t) * 2; return new Item('fish', [f.x, f.y + 0.2, f.z], { ry: f.h - Math.PI / 2 }); }

// ------------------------------------------------------------------ 走路和碰撞
const blocks = () => { const b = [L.tableBlock]; if (frameMesh) b.push([L.frame[0] - 0.75, L.frame[0] + 0.75, L.frame[1] - 0.6, L.frame[1] + 0.6]); if (beltMesh) b.push([L.belt[0][0] - 0.38, L.belt[0][0] + 0.38, L.belt[0][1], L.belt[1][1]]); return b; };
const inWalk = (p) => { for (const r of Object.values(L.walk)) if (inRect(p, r)) return true; return false; };
function walkable(p) {
  if (!inWalk(p)) return false;
  for (const b of blocks()) if (inRect(p, b)) return false;
  return true;
}
function moveChar(e, vx, vz, dt) {
  const nx = e.p[0] + vx * dt, nz = e.p[1] + vz * dt;
  // 站在地块上买下传送带 / 鱼框时，新冒出来的东西会把人罩在里面：罩住时不判这些东西，让他自己走出来
  if (!walkable(e.p)) { if (inWalk([nx, nz])) { e.p[0] = nx; e.p[1] = nz; } else if (inWalk([nx, e.p[1]])) e.p[0] = nx; else if (inWalk([e.p[0], nz])) e.p[1] = nz; return; }
  if (walkable([nx, nz])) { e.p[0] = nx; e.p[1] = nz; }
  else if (walkable([nx, e.p[1]])) e.p[0] = nx;
  else if (walkable([e.p[0], nz])) e.p[1] = nz;
}
// 跨区域走：塘 ↔ 栈桥 ↔ 院子 之间按院门、栈桥头、入水点走
export function route(from, to) {
  const a = zone(from), b = zone(to), x = L.gateX, pts = [];
  if (a < b) { if (a === 0) pts.push([x, -4.6]); if (b === 2) pts.push([x, -2.45]); }
  else if (a > b) { if (a === 2) pts.push([x, -2.7]); if (b === 0) pts.push([x, -4.98]); }
  pts.push(to);
  return pts;
}
function steer(e, tgt, speed, dt, r = 0.12) {
  const path = route(e.p, tgt), w = path[0], d = dist(e.p, w), last = path.length === 1;
  if (last && d < r) return false;
  const k = last ? Math.min(1, d / Math.max(0.05, speed * dt)) : 1;
  const vx = (w[0] - e.p[0]) / d * speed * k, vz = (w[1] - e.p[1]) / d * speed * k;
  moveChar(e, vx, vz, dt); return true;
}

// ------------------------------------------------------------------ 主角每帧
export const input = { vx: 0, vz: 0, active: false };
function heroCap() { return { fish: T.heroFishCap[G.unlocked.hire ? 1 : 0], pack: T.meatCap[G.unlocked.belt ? 2 : G.unlocked.hire ? 1 : 0] }; }
function updateHero(t, dt, auto) {
  const h = hero, sp = h.inWater ? T.swim : h.fish.n || h.pack.n ? T.walkCarry : T.walk;
  let moving = false;
  if (G.ended) { h.vel = [0, 0]; }
  else if (input.active) {
    const l = Math.hypot(input.vx, input.vz);
    if (l > 0.05) { const vx = input.vx / l * sp * Math.min(1, l), vz = input.vz / l * sp * Math.min(1, l); const p0 = [...h.p]; moveChar(h, vx, vz, dt); h.vel = [(h.p[0] - p0[0]) / dt, (h.p[1] - p0[1]) / dt]; moving = Math.hypot(...h.vel) > 0.3; if (!moving) h.vel = [vx * 0.0, vz * 0.0]; else h.heading = h.heading + wrapA(Math.atan2(vx, vz) - h.heading) * Math.min(1, dt * 14); }
    else h.vel = [0, 0];
  } else if (auto && G.target) {
    const p0 = [...h.p];
    const tg = G.target;
    if (tg.kind === 'fish' && h.inWater) {   // 在塘里：朝鱼多的地方慢慢游，扇形扫过去
      const f = nearestFish(h.p); if (f) { const d = Math.hypot(f.x - h.p[0], f.z - h.p[1]); if (d > 1.3) { const vx = (f.x - h.p[0]) / d * sp * 0.75, vz = (f.z - h.p[1]) / d * sp * 0.75; moveChar(h, vx, vz, dt); } else h.heading += wrapA(Math.atan2(f.x - h.p[0], f.z - h.p[1]) - h.heading) * Math.min(1, dt * 5); }
    } else steer(h, tg.p, sp, dt, tg.r || 0.15);
    h.vel = [(h.p[0] - p0[0]) / dt, (h.p[1] - p0[1]) / dt]; moving = Math.hypot(...h.vel) > 0.3;
    if (moving) h.heading += wrapA(Math.atan2(h.vel[0], h.vel[1]) - h.heading) * Math.min(1, dt * 12);
  }
  // 入水 / 上岸
  const wasIn = h.inWater; h.inWater = wet(h.p[0], h.p[1]);
  if (h.inWater && !wasIn) { splash(h.p, t, 2.0); play('wet', { vol: 0.8 }); h.divedT = t; report(2004); }
  if (!h.inWater && wasIn) { splash(h.p, t, 1.4); play('wet', { vol: 0.5 }); }
  // 晃：整摞跟着速度反方向甩（弹簧）
  const tx = -h.vel[0] * 0.07, tz = -h.vel[1] * 0.07;
  h.sway[0] += (tx - h.sway[0]) * Math.min(1, dt * 6); h.sway[1] += (tz - h.sway[1]) * Math.min(1, dt * 6);
  // 动作
  const carrying = h.pack.n > 0;
  h.c.play(h.inWater ? 'swim' : moving ? (carrying ? 'carry' : 'run') : carrying ? 'carryIdle' : 'idle', 0.15, h.inWater ? 1.2 : 1);
  const y = h.inWater ? SWIM_Y : yOf(h.p[0], h.p[1]);
  swimTilt(h.c, h.inWater, dt);
  h.c.obj.position.set(h.p[0], lerp(h.c.obj.position.y, y, Math.min(1, dt * 12)), h.p[1]); h.c.obj.rotation.y = h.heading; h.c.update(dt); updateHold(h, dt);
  // 捕鱼
  const cap = heroCap();
  fanHero.visible = h.inWater && !G.ended;
  if (fanHero.visible) {
    const sw = Math.sin(t * 2.4) * 0.3, R = T.netR;
    fanHero.position.set(h.p[0], WATER_Y + 0.07, h.p[1]); fanHero.rotation.y = h.heading + sw; fanHero.scale.setScalar(R);
    fanHero.material.uniforms.uA.value = h.fish.n < cap.fish ? 1 : 0.35; fanHero.material.uniforms.uT.value = t;
    if (h.fish.n < cap.fish && h.pack.n === 0 && t >= (h.nx.catch || 0) && t - h.divedT > 0.35) {
      const f = fishInFan(h.p, h.heading + sw, R, T.netAng);
      if (f) { const it = catchFish(f, t); h.fish.add(it, 0.42, 1.5); h.nx.catch = t + T.catchDt; play('pop', { vol: 0.55, gap: 0.05, rate: 0.9 + 0.2 * hash(t) }); if (!G.firstCatch) { G.firstCatch = true; report(2002); } }
    }
    if (h.fish.n >= cap.fish) markFull(t);
  }
  // 交鱼
  if (h.fish.n && dist(h.p, L.dropSpot) < 0.95 && t >= (h.nx.drop || 0)) {
    const it = h.fish.pop(); intake.add(it, 0.3, 0.9, () => play('wet', { vol: 0.35, gap: 0.05 })); h.nx.drop = t + T.dropDt;
  }
  // 拿货（背着鱼的时候拿不了）
  if (!h.fish.n && dist(h.p, L.pickSpot) < 0.95 && outStack.n && h.pack.n < cap.pack && t >= (h.nx.pick || 0)) {
    const it = outStack.pop(); h.pack.add(it, 0.28, 0.9); h.nx.pick = t + T.pickDt; play('drop', { vol: 0.5, gap: 0.05 });
    if (h.pack.n >= cap.pack) markFull(t);
  }
  // 从鱼框拿鱼（没传送带的时候）
  if (frameStack && !G.unlocked.belt && !h.pack.n && dist(h.p, L.frame) < 1.7 && frameStack.n && h.fish.n < cap.fish && t >= (h.nx.frame || 0)) {
    const it = frameStack.pop(); h.fish.add(it, 0.3, 1.0); h.nx.frame = t + T.pickDt * 0.7; play('pop', { vol: 0.4, gap: 0.05 });
    if (h.fish.n >= cap.fish) markFull(t);
  }
  // 柜台：送货、收钱
  const inStand = inRect(h.p, L.stand, 0.1);
  stand.update(dt, inStand && (h.pack.n > 0 || strip.n > 0));
  if (inStand) { serveFrom(h, t); collectCash(t); }
  // 付钱
  for (const id of ORDER) {
    const tl = tiles[id]; tl.on = false;
    if (!tl.visible || tl.done) continue;
    const on = dist(h.p, tl.c) < 0.8; tl.on = on && h.cash.n > 0;
    if (on && h.cash.n && t >= (h.nx.pay || 0) && tl.left > 0) {
      const it = h.cash.pop(); tl.left -= T.billVal; h.nx.pay = t + T.payDt;
      it.goto(() => [tl.c[0], 0.08, tl.c[1], 0], 0.32, 1.0, (x) => { x.kill(); });
      play('pay', { vol: 0.5, gap: 0.035 });
      if (tl.left <= 0) unlock(id, t);
    }
  }
}
function nearestFish(p) { let b = null, bd = 1e9; for (const f of school.f) { if (!f.alive) continue; const d = Math.hypot(f.x - p[0], f.z - p[1]); if (d < bd) { bd = d; b = f; } } return b; }
function markFull(t) { if (t - hero.full > 1.6) { hero.full = t; play('warn', { vol: 0.4 }); } }

// 把身上的货送给排队的人：盒子越过柜台飞到人头上；每送一盒，柜台后沿冒两捆钱，人群里也落一盒（肉雨）
function serveFrom(e, t) {
  if (!e.pack.n || t < (e.nx.serve || 0)) return;
  const cu = waitingSlot(); if (!cu) return;
  const it = e.pack.pop(); cu.inFly++; e.nx.serve = t + T.serveDt;
  const i = cu.head.items.length; cu.head.items.push(it);
  it.goto(cu.head.slot(i), 0.42, 1.7, () => {
    cu.inFly--; cu.got++; cu.lastGot = t; play('box', { vol: 0.35, gap: 0.09 });
    for (let k = 0; k < T.packPrice / T.billVal; k++) { if (strip.n >= 60) break; const b = new Item('cash', [cu.p[0], 1.2, cu.p[1] - 0.4], { pop: true }); strip.add(b, 0.35 + k * 0.06, 0.8); }
    play('coin', { vol: 0.3, gap: 0.06 });
    rainOnCrowd(t);
  });
  play('whoosh', { vol: 0.35, gap: 0.1 });
}
function rainOnCrowd(t) {
  // 画面里能看到的人群里随机挑一两个人，头上落一盒，冒笑脸 / 爱心眼
  for (let k = 0; k < 2; k++) {
    const j = Math.floor(hash(t * 13.1 + k * 7.7) * crowd.n), h = crowd.heads[j];
    if (rain.some((r) => r.j === j) || h[2] > L.front[0][1] + 5) continue;
    const it = new Item('pack', [L.counter.x0 + (L.counter.x1 - L.counter.x0) * hash(t + k), 1.0, L.counter.z]);
    it.goto(() => [h[0], h[1] + 0.06, h[2], 0.4], 0.5 + hash(t * 3 + k) * 0.2, 2.2);
    rain.push({ j, it, t0: t });
    emo.push({ kind: hash(t * 7 + k) < 0.6 ? 'smile1' : 'heart1', p: [h[0], h[1] + 0.6, h[2]], t0: t + 0.5, dur: 1.3 });
  }
}
function updateRain(t) {
  for (let i = rain.length - 1; i >= 0; i--) { const r = rain[i]; if (t - r.t0 > 2.6) { r.it.kill(); rain.splice(i, 1); } else if (t - r.t0 > 2.3) r.it.scale = Math.max(0.01, 1 - (t - r.t0 - 2.3) / 0.3); }
}
function collectCash(t) {
  if (!strip.n || t < (hero.nx.cash || 0)) return;
  const b = strip.items[strip.n - 1]; if (b.fly) return;
  strip.pop(); hero.cash.add(b, 0.26, 1.1); hero.nx.cash = t + T.cashDt; play('coin', { vol: 0.45, gap: 0.03 });
}

// ------------------------------------------------------------------ 加工台（厨师）
function updateChef(t, dt) {
  if (intake.n && outStack.n < 24 && t >= (chef.next || 0)) {
    const f = intake.pop(); chef.next = t + T.cutDt; chef.busy = t + 0.8;
    f.goto(() => [L.cutSpot[0], L.table.top + 0.05, L.cutSpot[1], Math.PI / 2], 0.14, 0.25, (x) => {
      x.kill(); puff([L.cutSpot[0], L.table.top + 0.25, L.cutSpot[1]], t, 0.6); play('chopW', { vol: 0.45, gap: 0.12 });
      const p = new Item('pack', [L.cutSpot[0], L.table.top, L.cutSpot[1]], { pop: true, ry: Math.PI / 2 });
      outStack.add(p, 0.26, 0.6);
    });
  }
  chef.play(t < chef.busy ? 'cut' : 'idle', 0.2, 1.6); chef.update(dt);
}

// ------------------------------------------------------------------ 解锁
function unlock(id, t) {
  const tl = tiles[id]; tl.done = true; G.unlocked[id] = t; console.log('[flow] unlock ' + id + ' t=' + t.toFixed(1) + ' served=' + G.served); flash(tl.c, t); play('bell', { vol: 0.8 }); play('full', { vol: 0.5 });
  report({ hire: 1008, belt: 1009, staff: 1010 }[id]); report({ hire: 2006, belt: 2007, staff: 2008 }[id]);
  const nxt = ORDER[ORDER.indexOf(id) + 1]; if (nxt) tiles[nxt].showAt = t + 0.7;
  if (id === 'hire') {
    // 渔工从地块上直接出现（同事：人从地贴处直接出现），跑出院门跳进塘里撒网；左边冒出鱼框
    fisher = { c: makeChar(P.hero, P.fisherTex), p: [...tl.c], vel: [0, 0], heading: 0, inWater: false, nx: {}, spot: [2.0, -7.2], t0: t };
    fisher.c.obj.scale.setScalar(0.001); scene.add(fisher.c.obj); fisher.c.play('run');
    frameStack = new Stack(() => [L.frame[0], 0.05, L.frame[1], 0], SIZE.fish.thick, { cols: [[0, -0.36], [0, 0], [0, 0.36]] });
    frameMesh = makeFrame(); frameMesh.userData.t0 = t + 0.3;
  }
  if (id === 'belt') { beltMesh = makeBelt(); beltMesh.userData.t0 = t; }
  if (id === 'staff') {
    helper = { c: makeChar(P.hero, P.fisherTex), p: [...tl.c], vel: [0, 0], heading: Math.PI, nx: {}, t0: t, state: 'toPick' };
    helper.hold = [0.45, 0.8]; helper.pack = new Stack(() => holdBase(helper), SIZE.pack.h);
    helper.c.obj.scale.setScalar(0.001); scene.add(helper.c.obj);
    G.endAt = t + T.endAfter;
  }
}
function makeFrame() {
  const g = new THREE.Group(), wood = realLook(new THREE.MeshLambertMaterial({ color: 0x8a6a4a }));
  const W = 1.5, D = 1.25, h = 0.22, th = 0.08;
  for (const [x, z, w, d] of [[0, -D / 2, W, th], [0, D / 2, W, th], [-W / 2, 0, th, D], [W / 2, 0, th, D]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wood); m.position.set(x, h / 2, z); m.castShadow = true; g.add(m); }
  const floor = new THREE.Mesh(new THREE.BoxGeometry(W, 0.04, D), realLook(new THREE.MeshLambertMaterial({ color: 0x6d5238 }))); floor.position.y = 0.02; g.add(floor);
  g.position.set(L.frame[0], 0, L.frame[1]); scene.add(g); addCaster(g); return g;
}
function makeBelt() {
  const a = L.belt[0], b = L.belt[1], len = b[1] - a[1], g = new THREE.Group();
  const blue = realLook(new THREE.MeshLambertMaterial({ color: 0x2f6fc8 })), dark = realLook(new THREE.MeshLambertMaterial({ color: 0x1f3f6a })), metal = realLook(new THREE.MeshLambertMaterial({ color: 0x5c5f66 }));
  const N = 10;
  for (let i = 0; i < N; i++) {
    const k = (i + 0.5) / N, y = beltY(k);
    const seg = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.05, len / N * 0.92), i % 2 ? blue : dark); seg.position.set(0, y, a[1] + len * k); seg.castShadow = true; g.add(seg);
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, y, 0.06), metal); leg.position.set(0.28, y / 2, a[1] + len * k); g.add(leg);
    const leg2 = leg.clone(); leg2.position.x = -0.28; g.add(leg2);
  }
  g.position.x = a[0]; g.scale.z = 0.001; scene.add(g); addCaster(g); return g;
}
const beltY = (k) => 0.18 + (L.table.top - 0.15) * smooth(Math.min(1, k / 0.8));

// ------------------------------------------------------------------ 渔工 / 传送带 / 售货员
function updateWorkers(t, dt) {
  if (frameMesh) { const k = backOut((t - frameMesh.userData.t0) / 0.35); frameMesh.scale.setScalar(Math.max(0.001, k)); }
  if (fisher) {
    const f = fisher, k = backOut((t - f.t0) / 0.3); f.c.obj.scale.setScalar(Math.max(0.001, k));
    if (!f.inWater || dist(f.p, f.spot) > 0.3) { const p0 = [...f.p]; steer(f, f.spot, f.inWater ? T.swim : T.walk * 1.05, dt, 0.25); const vx = (f.p[0] - p0[0]) / dt, vz = (f.p[1] - p0[1]) / dt; if (Math.hypot(vx, vz) > 0.2) f.heading += wrapA(Math.atan2(vx, vz) - f.heading) * Math.min(1, dt * 10); }
    else f.heading += dt * 0.5;
    const wasIn = f.inWater; f.inWater = wet(f.p[0], f.p[1]); if (f.inWater && !wasIn) { splash(f.p, t, 1.8); play('wet', { vol: 0.5 }); }
    f.c.play(f.inWater ? 'swim' : 'run', 0.15, f.inWater ? 1.1 : 1);
    f.c.obj.position.set(f.p[0], f.inWater ? SWIM_Y : yOf(f.p[0], f.p[1]), f.p[1]); swimTilt(f.c, f.inWater, dt); f.c.obj.rotation.y = f.heading; f.c.update(dt);
    fanFisher.visible = f.inWater;
    if (f.inWater) {
      const sw = Math.sin(t * 2.1 + 1) * 0.35; fanFisher.position.set(f.p[0], WATER_Y + 0.07, f.p[1]); fanFisher.rotation.y = f.heading + sw; fanFisher.scale.setScalar(T.netR * 0.9); fanFisher.material.uniforms.uA.value = 0.85; fanFisher.material.uniforms.uT.value = t;
      if (frameStack.n < T.frameCap && t >= (f.nx.catch || 0)) {
        const fish = fishInFan(f.p, f.heading + sw, T.netR * 1.2, Math.PI * 1.2) || nearestFish(f.p);
        if (fish) { const it = catchFish(fish, t); frameStack.add(it, 1.0, 3.2, () => play('wet', { vol: 0.25, gap: 0.08 })); f.nx.catch = t + T.workerCatchDt; }
      }
    }
  }
  if (beltMesh) {
    beltMesh.scale.z = Math.max(0.001, smooth((t - beltMesh.userData.t0) / 0.5));
    if (t - beltMesh.userData.t0 > 0.5 && frameStack.n && intake.n < 8 && t >= (G.beltNext || 0) && beltItems.length < 9) {
      const it = frameStack.pop(); G.beltNext = t + T.beltDt;
      const t0 = t + 0.45, a = L.belt[0], b = L.belt[1];
      it.goto(() => [a[0], beltY(0) + 0.15, a[1], 0], 0.45, 0.8);
      beltItems.push({ it, t0 });
      it._belt = (tt) => { const k = clamp01((tt - t0) / 2.2); return [a[0], beltY(k) + 0.15, lerp(a[1], b[1], k), 0]; };
    }
    for (let i = beltItems.length - 1; i >= 0; i--) {
      const bi = beltItems[i];
      if (t >= bi.t0 && !bi.on) { bi.on = true; bi.it.stick(() => bi.it._belt(G.t)); }
      if (bi.on && t - bi.t0 >= 2.2) { beltItems.splice(i, 1); intake.add(bi.it, 0.25, 0.5); }
    }
  }
  if (helper) {
    const hp = helper, k = backOut((t - hp.t0) / 0.3); hp.c.obj.scale.setScalar(Math.max(0.001, k));
    const tgt = hp.state === 'toPick' ? [L.pickSpot[0] + 0.25, L.pickSpot[1] + 0.35] : [L.stand[1] - 0.2, (L.stand[2] + L.stand[3]) / 2];
    const p0 = [...hp.p]; const going = steer(hp, tgt, T.walk * 0.9, dt, 0.2);
    const vx = (hp.p[0] - p0[0]) / dt, vz = (hp.p[1] - p0[1]) / dt; const mv = Math.hypot(vx, vz) > 0.2; if (mv) hp.heading += wrapA(Math.atan2(vx, vz) - hp.heading) * Math.min(1, dt * 10);
    if (hp.state === 'toPick' && !going) { if (outStack.n && hp.pack.n < 10 && t >= (hp.nx.pick || 0)) { hp.pack.add(outStack.pop(), 0.28, 0.9); hp.nx.pick = t + T.pickDt; } if (hp.pack.n >= 10 || (hp.pack.n >= 4 && !outStack.n)) hp.state = 'toStand'; }
    if (hp.state === 'toStand' && !going) { serveFrom(hp, t); if (!hp.pack.n) hp.state = 'toPick'; }
    hp.c.play(hp.pack.n ? (mv ? 'carry' : 'carryIdle') : (mv ? 'run' : 'idle'), 0.15); hp.c.obj.position.set(hp.p[0], 0, hp.p[1]); hp.c.obj.rotation.y = hp.heading; hp.c.update(dt); updateHold(hp, dt);
  }
}

// ------------------------------------------------------------------ 自动玩 / 引导的目标（手上有什么先交什么，钱够就去买地块）
function nextTile() { for (const id of ORDER) { const tl = tiles[id]; if (tl.visible && !tl.done) return tl; } return null; }
export function chooseTarget() {
  const h = hero, cap = heroCap(), tl = nextTile(), money = h.cash.n * T.billVal, standC = [(L.stand[0] + L.stand[1]) / 2, (L.stand[2] + L.stand[3]) / 2];
  if (G.ended) return null;
  if (tl && money >= tl.left) return { kind: 'tile', p: tl.c, r: 0.15 };
  if (h.fish.n) {
    if (h.inWater && h.fish.n < cap.fish) return { kind: 'fish', p: [h.p[0], h.p[1]], y: WATER_Y, r: 9 };
    if (!h.inWater && frameStack && frameStack.n && !G.unlocked.belt && h.fish.n < cap.fish && dist(h.p, L.frame) < 2.2) return { kind: 'frame', p: [L.frame[0] + 1.0, L.frame[1] + 0.2], r: 0.2 };
    return { kind: 'drop', p: L.dropSpot, r: 0.2 };
  }
  if (h.pack.n) {
    const atStand = inRect(h.p, L.stand, 0.1), atPick = dist(h.p, L.pickSpot) < 0.95;
    if (atStand) return { kind: 'stand', p: standC, r: 0.3 };   // 到了柜台就送完再走
    if (h.pack.n >= cap.pack || (!outStack.n && !(atPick && (intake.n || beltItems.length || chef.busy > G.t)))) return { kind: 'stand', p: standC, r: 0.3 };
    return { kind: 'pick', p: L.pickSpot, r: 0.2 };
  }
  if (strip.n && tl && money + strip.n * T.billVal >= tl.left) return { kind: 'stand', p: standC, r: 0.3 };
  if (outStack.n || intake.n || chef.busy > G.t) return { kind: 'pick', p: L.pickSpot, r: 0.2 };
  if (strip.n) return { kind: 'stand', p: standC, r: 0.3 };
  if (G.unlocked.belt) return { kind: 'pick', p: L.pickSpot, r: 0.2 };
  if (frameStack) return { kind: 'frame', p: [L.frame[0] + 1.0, L.frame[1] + 0.2], r: 0.2 };
  return { kind: 'fish', p: FISH_SPOT, y: WATER_Y, r: 0.6 };   // 固定的下网点（栈桥前面），引导圈不跟着鱼跳；下了水再去追鱼
}

// ------------------------------------------------------------------ 每帧
export function update(t, dt, auto) {
  G.t = t; CROWD_T.value = t;
  for (const id of ORDER) { const tl = tiles[id]; if (tl.showAt !== undefined && t >= tl.showAt && !tl.visible) { tl.show(t); play('pop', { vol: 0.6 }); } tl.update(t); }
  G.target = chooseTarget();
  updateHero(t, dt, auto);
  updateChef(t, dt);
  updateWorkers(t, dt);
  updateCustomers(t, dt);
  updateFence(t, dt);
  updateCrowdActs(t);
  updateSchool(t, dt);
  updateRain(t);
  updateItems(t);
  updateFx(t);
  zones.drop.update(t, dt, hero.fish.n > 0 || intake.n > 0, dist(hero.p, L.dropSpot) < 0.95 && hero.fish.n > 0, G.target && G.target.kind === 'drop');
  zones.pick.update(t, dt, outStack.n > 0 || hero.pack.n > 0 || intake.n > 0, dist(hero.p, L.pickSpot) < 0.95 && outStack.n > 0 && !hero.fish.n, G.target && G.target.kind === 'pick');
  const tg = G.target;
  updateTarget(t, dt, tg && tg.kind !== 'fish' ? { ...tg, y: yOf(tg.p[0], tg.p[1]) } : tg && !hero.inWater ? { ...tg, kind: 'fish', y: WATER_Y } : null, hero.p);
  const pts = tg ? [hero.p, ...route(hero.p, tg.p)] : null;
  updatePath(t, dt, pts, yOf, !!tg && !(tg.kind === 'fish' && hero.inWater) && !G.ended);
  for (let i = emo.length - 1; i >= 0; i--) if (t > emo[i].t0 + emo[i].dur) emo.splice(i, 1);
}
export const state = () => ({ hero, front, crowd, tiles, strip, outStack, intake, frameStack, school });
export function heroFocus() { return [hero.p[0], hero.inWater ? WATER_Y : 0.9, hero.p[1]]; }
