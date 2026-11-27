// 玩法（照成片的因果链改成能玩的）：
//   研磨机一直磨冰洞里的巨木，磨下来的木头飞到木材堆上；巨木磨细了沉下去，下一根从水下冒上来（「水下巨木」）
//   主角踩取木头的地贴，木头一根根飞到背上（横着摞，6 根）→ 走到烤炉左边，木头一根根扔进炉膛
//   烤炉有柴就烤：生肉从左边托板上一批两块飞上烤网，烤好落到托盘 → 主角走上托盘，熟肉飞到背上（6 块）
//   走到柜台前，熟肉一块块上桌；前排要肉的顾客接到肉（黄光）就「噗」地变成钞票，钞票撒在柜台外的雪地上 → 主角站在柜台前收钱
//   踩价格地块付钱：25 送柴传送带 → 25 送餐传送带（托盘 → 柜台 1）→ 50 第二个柜台 → 25 送餐传送带（托盘 → 柜台 2）→ 50 研磨机升 2 级，买完结束
import * as THREE from 'three';
import { L, T, ORDER } from './config.js';
import { scene } from './world.js';
import { Item, Stack, updateItems, SIZE } from './items.js';
import { makeChar } from './chars.js';
import { buildCrowd, updateCrowd, crowd } from './crowd.js';
import { makeGrinder, makeGiantLog, makeBackPosts, makeCounter2, makePadlock, makeBelt, along, BELT_Y, makeFire } from './props.js';
import { Tile, Zone, flash, puff, splash, goldGlow, updateFx, updateTarget, updatePath, iconTex } from './fx.js';
import { play } from '../../../shared/playable/audio.js';
import { report, query } from '../../../shared/playable/platform.js';
import { dist, clamp01, lerp, hash, inRect, wrapA, backOut, smooth } from '../../../shared/playable/util.js';

export const G = { t: 0, ended: false, endAt: Infinity, unlocked: {}, served: 0, target: null, first: {} };
const fwdOf = (h) => [Math.sin(h), Math.cos(h)];
let P = null, TX = null;
let hero, grinder, giant, posts, counter2, padlock, fire;
let pile, tray, counterSt = [], board = [];
const tiles = {}, zones = {}, belts = {};
export const front = [];          // 前排（row 0）和后一排（row 1）排队的人
const ground = [[], []];          // 柜台外雪地上的钞票
export const emo = [];
const oven = { fuel: 0, grill: [], busy: false, next: 0, flare: -9, inBelt: 0 };
const logSt = { i: 0, ph: 'rise', t0: 0, r: L.log.r0, rot: 0, nx: 0 };

// ------------------------------------------------------------------ 建场
export function build(protos, tex) {
  P = protos; TX = tex;
  hero = { c: makeChar(P.hero, P.heroTex, { look: { k: 1.18, sat: 1.1 } }), p: [...L.start], vel: [0, 0], heading: Math.PI * 0.8, sway: [0, 0], nx: {}, full: -9, kind: null };
  hero.c.play('idle'); scene.add(hero.c.obj); hero.c.obj.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const backY = 0.9;
  // 背上的东西放在身子外面：量过巴斯特蒙皮以后的轮廓（帽兜、毛领、跑起来往后甩的胳膊），腰到头这一段往后最多到 0.38 米，
  // 所以每摞靠身子那一边离身子中心 0.42 米（示例游戏也是 0.42），摞的中心再往后让半个进深。
  // 同时背着货和钞票：两摞左右并排（示例游戏的做法，并排系数 spr 用 0.1 秒缓到 1）。并排时都转成前后放、按各自的宽度排开、中间留 6 厘米；
  // 木头 1 米长转不了，钞票摞在木头后面
  hero.spr = 0;
  const BACK0 = 0.42, GAP = 0.06;
  const DIM = { cooked: [0.62, 0.485], raw: [0.62, 0.485], cash: [0.46, 0.242], log: [1.0, 0.16] };   // [长, 宽]（米）
  const side = (k) => {
    const f = fwdOf(hero.heading), r = [f[1], -f[0]], kind = hero.goods.n ? hero.goods.items[0].type : 'cooked', sp = hero.spr;
    const me = k > 0 ? kind : 'cash', [len, wid] = DIM[me] || [0.5, 0.4];
    let b, o = 0, rot = 0;
    if (kind === 'log') { b = k > 0 ? BACK0 + wid / 2 : BACK0 + DIM.log[1] + GAP * sp + wid / 2; }   // 横着背；钞票在木头后面
    else {
      b = BACK0 + (wid / 2) * (1 - sp) + (len / 2) * sp;   // 转成前后放以后进深是长边
      const wG = DIM[kind][1], wC = DIM.cash[1], W = wG + wC + GAP;
      o = (k > 0 ? W / 2 - wG / 2 : -(W / 2 - wC / 2)) * sp; rot = sp * Math.PI / 2;
    }
    return [hero.p[0] - f[0] * b + r[0] * o, hero.p[1] - f[1] * b + r[1] * o, hero.heading + rot];
  };
  // 垒起来要直：货不跟着跑动甩（原来上半截往后甩，看着是歪的），钞票柱只留一点点弹性
  hero.goods = new Stack(() => { const q = side(1); return [q[0], backY, q[1], q[2]]; }, SIZE.log.h, { gapOf: (it) => (it && it.type === 'log' ? SIZE.log.h * 0.92 : SIZE.cooked.h * 0.95) });
  hero.cash = new Stack(() => { const q = side(-1); return [q[0], backY + 0.02, q[1], q[2]]; }, SIZE.cash.h * 1.02, { sway: hero.sway, swayK: 0.25 });
  // 研磨机、巨木、后排木桩、柜台 2、锁、炉火
  grinder = makeGrinder(P.grinder1, P.grinder2, tex);
  giant = makeGiantLog(tex);
  posts = makeBackPosts(P, tex);
  counter2 = makeCounter2(P);
  padlock = makePadlock();
  fire = makeFire();
  // 木材堆：托板上横放，一层 5 根
  pile = new Stack(() => [L.pile.c[0], L.pile.top, L.pile.c[1], Math.PI / 2], SIZE.log.h * 0.92);
  pile.slot = (i) => () => {   // 木头顺着托板（z 方向）放，一层 7 / 6 / 5 根往上收，上一层落在下一层两根之间（成片 15 秒）
    let L0 = 0, k = i; while (L0 < 2 && k >= 7 - L0) { k -= 7 - L0; L0++; }
    const n = 7 - L0, gap = 0.17;
    return [L.pile.c[0] + (k - (n - 1) / 2) * gap, L.pile.top + L0 * SIZE.log.h * 0.85, L.pile.c[1], Math.PI / 2, 0];
  };
  for (let i = 0; i < 10; i++) pile.put(new Item('log', [L.pile.c[0], 0.2, L.pile.c[1]], { ry: 0 }));
  // 生肉托板：2 × 3 摞
  for (let k = 0; k < 6; k++) {
    const [a, f] = L.board.slot(k), st = new Stack(() => [L.board.c[0] + a, L.board.top, L.board.c[1] + f, Math.PI / 2], SIZE.raw.h * 0.9);
    for (let j = 0; j < 7; j++) st.put(new Item('raw', [L.board.c[0] + a, 0.2, L.board.c[1] + f], { ry: Math.PI / 2 }));
    board.push(st);
  }
  tray = new Stack(() => [L.tray.c[0], L.tray.top, L.tray.c[1], 0], SIZE.cooked.h * 0.95, { cols: [[-0.55, -0.42], [0.05, -0.42], [0.62, -0.42], [-0.55, 0.42], [0.05, 0.42], [0.62, 0.42]] });
  counterSt = L.counters.map((cn) => new Stack(() => [cn.c[0], L.counterTop, cn.c[1] + 0.05, 0], SIZE.cooked.h * 0.95, { cols: [[-0.5, 0], [0, 0], [0.5, 0]] }));
  // 地块
  for (const id of ORDER) { const d = L.pads[id]; tiles[id] = new Tile(id, d.c, d.price, d.icon, [d.c[0] - 0.42, d.c[1] - 0.9], 1.4); }
  tiles.wood.show(0);
  // 交接区圆圈：取木头、添柴、拿熟肉
  const logIcon = iconTex((g) => { g.fillStyle = 'rgba(255,255,255,0.85)'; for (const y of [42, 64, 86]) { g.beginPath(); g.ellipse(64, y, 40, 9, 0, 0, 7); g.fill(); } });
  const meatIcon = iconTex((g) => { g.globalAlpha = 0.9; g.drawImage(tex.meatIconImg, 14, 14, 100, 100); });
  zones.padA = new Zone(L.padA.c, 0.85, 0.035, logIcon, L.pile.c);
  zones.feed = new Zone(L.feed, 0.75, 0.035, logIcon, L.oven.c);
  zones.serve = L.serve.map((s) => new Zone(s, 0.85, 0.035, meatIcon, [s[0], s[1] - 1]));
  // 排队的人：每个柜台前 5 个位，两排
  for (let ci = 0; ci < 2; ci++) for (let row = 0; row < 2; row++) for (let i = 0; i < 5; i++) front.push(newCustomer(ci, row, i, 0, true));
  // 人群（让开排队位）
  const avoid = front.map((cu) => cu.slot);
  buildCrowd(P.crowd, tex, avoid);
}
const slotOf = (ci, row, i) => [L.counters[ci].c[0] + (i - 2) * 0.62 + (hash(ci * 7 + i * 3.3 + row) - 0.5) * 0.12, L.frontZ[row] + (hash(ci * 5 + i * 1.7 + row * 9) - 0.5) * 0.1];

// ------------------------------------------------------------------ 顾客（前排要肉的；后一排等着补位）
function newCustomer(ci, row, i, t, instant = false) {
  const c = makeChar(P.cust, P.custTex, { look: { k: 1.12, sat: 1.05 }, scale: 0.87 + hash(ci * 3 + row * 5 + i + t) * 0.05, colors: { 门框: 0xb4b8c2 } });
  const slot = slotOf(ci, row, i);
  const cu = { c, ci, row, i, slot, state: instant ? 'wait' : 'enter', t0: t, got: 0, inFly: 0, p: instant ? [...slot] : [slot[0] + (hash(t + i) - 0.5) * 0.6, slot[1] - 1.6], plate: null, nextAct: t + hash(i * 2.9 + ci) * 2 };
  const tb = L.counters[ci].c; c.face(Math.atan2(tb[0] - slot[0], tb[1] - slot[1]) * 0.6);
  c.play(instant ? (hash(i + row * 3 + ci * 7) < 0.6 ? 'protest' : 'idle') : 'walk'); c.phase(hash(i * 1.3 + ci + row) * 2);
  c.obj.position.set(cu.p[0], 0, cu.p[1]); scene.add(c.obj);
  return cu;
}
const active = (cu) => cu.row === 0 && (cu.ci === 0 || G.unlocked.c2);
function updateCustomers(t, dt) {
  for (let k = 0; k < front.length; k++) {
    const cu = front[k], s = cu.slot;
    if (cu.state === 'enter' || cu.state === 'step') {
      const d = dist(cu.p, s), sp = 2.4 * dt;
      if (d < sp) { cu.p = [...s]; cu.state = 'wait'; cu.c.play('protest'); } else { cu.p[0] += (s[0] - cu.p[0]) / d * sp; cu.p[1] += (s[1] - cu.p[1]) / d * sp; cu.c.face(Math.atan2(s[0] - cu.p[0], s[1] - cu.p[1]), Math.min(1, dt * 10)); }
    } else if (cu.state === 'wait') {
      const tb = L.counters[cu.ci].c; cu.c.face(Math.atan2(tb[0] - s[0], tb[1] - s[1]) * 0.6, Math.min(1, dt * 6));
      if (t > cu.nextAct) { cu.c.play(hash(t * 3.1 + k) < 0.7 ? 'protest' : 'idle', 0.25); cu.nextAct = t + 1.2 + hash(t + k * 1.9) * 2.4; }
      if (cu.got >= 1 && cu.inFly === 0) { cu.state = 'got'; cu.t0 = t; cu.c.play('give', 0.15, 1.2); goldGlow(cu.p, t); play('served', { vol: 0.35, gap: 0.15 }); }
    } else if (cu.state === 'got') {
      if (t - cu.t0 > 0.55) poofCustomer(cu, t, k);
    }
    cu.c.obj.position.set(cu.p[0], 0, cu.p[1]); cu.c.update(dt);
  }
}
function poofCustomer(cu, t, k) {
  puff([cu.p[0], 0.9, cu.p[1]], t, 1.3); play('pop', { vol: 0.5, gap: 0.04 });
  if (cu.plate) cu.plate.kill();
  scene.remove(cu.c.obj); cu.c.obj.traverse((o) => { if (o.isSkinnedMesh) o.skeleton.dispose(); });   // 骨骼贴图释放（几何体是共用的，不动）
  G.served++; report(2003);
  for (let j = 0; j < T.billPer; j++) {
    const b = new Item('cash', [cu.p[0], 1.0, cu.p[1]], { pop: true, ry: hash(t * 7 + j) * 6.28 });
    const gx = cu.p[0] + (hash(t * 3.3 + j * 1.7) - 0.5) * 1.0, gz = cu.p[1] + 0.25 + (hash(t * 5.1 + j * 2.3) - 0.5) * 0.7, gy = 0.03 + (j % 3) * 0.02;
    b.goto(() => [gx, gy, gz, b.ry], 0.45 + j * 0.05, 1.6, () => { b.landed = true; play('coin', { vol: 0.25, gap: 0.05 }); }, 2.5);
    ground[cu.ci].push(b);
  }
  // 后一排的人往前补，再从人群里走出来一个补后一排
  const back = front.findIndex((o) => o.ci === cu.ci && o.row === 1 && o.i === cu.i && o.state === 'wait');
  if (back >= 0) {
    const nb = front[back]; nb.row = 0; nb.slot = slotOf(cu.ci, 0, cu.i); nb.state = 'step'; nb.c.play('walk', 0.15);
    front[k] = nb; front[back] = newCustomer(cu.ci, 1, cu.i, t);
  } else front[k] = newCustomer(cu.ci, 0, cu.i, t);
}
const waitingFor = (ci) => { let best = null; for (const cu of front) if (cu.ci === ci && active(cu) && cu.state === 'wait' && cu.got + cu.inFly < 1) { if (!best || Math.abs(cu.i - 2) < Math.abs(best.i - 2)) best = cu; } return best; };
const waitingCount = (ci) => front.filter((cu) => cu.ci === ci && active(cu) && cu.state === 'wait' && cu.got + cu.inFly < 1).length;

// ------------------------------------------------------------------ 研磨机和巨木（源工程 events57 LV / grinderState）
// 巨木从冰洞里冒出来（水花）→ 磨鼓咬上去 → 上半截一圈圈磨细 → 只剩细柱沉回水里 → 下一根冒出来。研磨机不动，磨臂往里伸（ext）
const LV = { 1: { rise: 0.6, sink: 0.5, gap: 0.15, tg: 5.2, spin: 0.9, x: -7.5 }, 2: { rise: 0.45, sink: 0.35, gap: 0.08, tg: 2.4, spin: 1.6, x: -7.85 } };
const DRUM = { 1: { cx: -5.44, r: 0.34, dz: 0 }, 2: { cx: -5.72, r: 0.48, dz: 0.58 } };
const REST = -0.15;
const reach = (lv, R) => { const d = DRUM[lv]; return d.cx - (LV[lv].x + Math.sqrt(Math.max(0, (R + d.r - L.log.bite) ** 2 - d.dz * d.dz))); };
function updateLog(t, dt) {
  const lv = G.unlocked.up ? 2 : 1, Q = LV[lv], S = logSt, D = L.drum, r0 = L.log.r0, rm = lv === 2 ? L.log.rMin2 : L.log.rMin;
  const e = t - S.t0;
  let y = 0, grinding = false, ext = REST;
  if (S.ph === 'rise') { const k = smooth(e / Q.rise); y = -L.log.h - 0.4 + (L.log.h + 0.4) * k; S.r = r0; S.x = Q.x; ext = lerp(S.ext ?? REST, REST, k); if (e >= Q.rise) { S.ph = 'grind'; S.t0 = t; splash([Q.x, D.z], t, 4.4); play('wet', { vol: 0.4 }); } }
  else if (S.ph === 'grind') { grinding = true; const bite = smooth(e / 0.3); S.r = Math.max(rm, S.r - (r0 - rm) / Q.tg * dt * bite); ext = lerp(REST, reach(lv, S.r), bite); if (S.r <= rm + 1e-4) { S.ph = 'sink'; S.t0 = t; } }
  else if (S.ph === 'sink') { y = -(L.log.h + 0.6) * smooth(e / Q.sink); ext = lerp(reach(lv, rm), REST, smooth(e / Q.sink)); if (e >= Q.sink + Q.gap) { S.ph = 'rise'; S.t0 = t; S.i++; S.x = Q.x; } }
  S.ext = ext; S.rot += dt * Q.spin;
  giant.set(S.x ?? Q.x, D.z, S.r, y, S.rot);
  // 出木头：磨鼓咬着的时候，每隔一会儿飞出一根，落到木材堆上（堆满了就不出）
  const dX = DRUM[lv].cx;
  if (grinding && t >= S.nx && pile.n < T.pileCap) {
    S.nx = t + T.grindDt[lv - 1];
    const it = new Item('log', [dX - 0.3, 2.3, D.z], { ry: hash(t) * 6.28 });
    pile.add(it, 0.6, 1.5, () => play('wood', { vol: 0.25, gap: 0.08 }));
    if (hash(t * 1.7) < 0.5) puff([dX - 0.35, 2.1, D.z + 0.2], t, 0.55);
  }
  // 研磨机：1 级 / 2 级，升级时金光里换（旧机缩没、新机弹出来）
  const sp = dt * (grinding ? 1.3 : 0.4);
  if (!G.unlocked.up || !grinder.g2) grinder.step(grinder.g1, sp, ext, REST);
  else {
    const k = backOut((t - G.unlocked.up) / 0.45), k1 = 1 - smooth((t - G.unlocked.up) / 0.2);
    grinder.g1.obj.visible = k1 > 0.01; grinder.g1.obj.scale.setScalar(Math.max(0.01, k1)); if (grinder.g1.obj.visible) grinder.step(grinder.g1, sp, REST, REST);
    grinder.g2.obj.visible = true; grinder.g2.obj.scale.setScalar(Math.max(0.01, k)); grinder.step(grinder.g2, sp, ext, REST, Math.max(0.01, k));
  }
}

// ------------------------------------------------------------------ 烤炉：有柴就一批两块地烤，烤好落到托盘
function updateOven(t, dt) {
  const fast = G.unlocked.up ? 0.6 : 1;
  if (!oven.busy && oven.fuel >= T.logsPerBatch && tray.n + 2 <= T.trayCap && t >= oven.next) {
    oven.busy = true; oven.fuel -= T.logsPerBatch;
    for (let j = 0; j < 2; j++) {
      const k = (Math.floor(t * 3) + j * 3) % 6, st = board[k];
      const it = st.n ? st.pop() : new Item('raw', [L.board.c[0], 0.3, L.board.c[1]], { ry: Math.PI / 2 });
      const dx = j ? -L.oven.meatDX : L.oven.meatDX, gp = [L.oven.c[0] + dx, L.oven.rackY, L.oven.c[1]];
      it.goto(() => [gp[0], gp[1], gp[2], 0], 0.42, 1.2, null, 0.6);
      oven.grill.push(it);
      setTimeout0(t + 1.2, () => { const n = new Item('raw', [L.board.c[0], 0.2, L.board.c[1]], { pop: true, ry: Math.PI / 2 }); st.put(n); });
    }
    oven.cookAt = t + 0.42 + T.batch * 0.8 * fast; oven.outAt = t + 0.42 + T.batch * fast;
    play('fire', { vol: 0.25, gap: 0.5 });
  }
  if (oven.busy && t >= oven.cookAt && !oven.cooked) { oven.cooked = true; for (const it of oven.grill) it.type = 'cooked'; puff([L.oven.c[0], L.oven.rackY + 0.3, L.oven.c[1]], t, 1.1); }
  if (oven.busy && t >= oven.outAt) {
    for (const it of oven.grill) tray.add(it, 0.42, 1.1, () => play('drop', { vol: 0.3, gap: 0.06 }));
    oven.grill = []; oven.busy = false; oven.cooked = false; oven.next = t + 0.05;
  }
  const want = 0.35 + 0.55 * Math.min(1, oven.fuel / 4) + (oven.busy ? 0.2 : 0) + 0.5 * Math.max(0, 1 - (t - oven.flare) / 0.5);
  fire.set(want * (0.92 + 0.08 * Math.sin(t * 17)));
}
const timers = [];
function setTimeout0(at, f) { timers.push([at, f]); }

// ------------------------------------------------------------------ 传送带
function updateBelts(t, dt) {
  for (const [id, b] of Object.entries(belts)) {
    b.belt.set(smooth((t - b.t0) / 0.6)); const v = T.beltV * (G.unlocked.up ? 1.5 : 1); b.belt.scroll(dt, v);
    if (t - b.t0 < 0.6) continue;
    // 上货
    if (t >= b.next && b.ride.length < 12) {
      let it = null;
      if (id === 'wood' && pile.n && oven.fuel + oven.inBelt < 14) { it = pile.pop(); oven.inBelt++; }
      else if (id !== 'wood' && tray.n && b.ride.length < 6) { const ci = id === 'left' ? 0 : 1; if (counterSt[ci].n + b.ride.length < 6) it = tray.pop(); }
      if (it) { b.next = t + T.beltDt; const p0 = along(b.belt.P, 0), ro = it.type === 'log' ? 0 : Math.PI / 2; if (it.type === 'log') it.scale = 0.78; it.goto(() => [p0[0], BELT_Y + 0.02, p0[1], p0[2] + ro], 0.35, 0.7); b.ride.push({ it, s: -0.35 * v, ro }); }
    }
    for (let i = b.ride.length - 1; i >= 0; i--) {
      const r = b.ride[i]; r.s += v * dt;
      if (r.s >= 0 && !r.on) { r.on = true; r.it.stick(() => { const q = along(b.belt.P, r.s); return [q[0], BELT_Y + 0.02, q[1], q[2] + r.ro]; }); }
      if (r.s >= b.belt.P.total) {
        b.ride.splice(i, 1);
        if (id === 'wood') { oven.inBelt--; r.it.goto(() => [...L.oven.mouth, 0], 0.3, 0.6, (x) => { x.kill(); oven.fuel++; oven.flare = t; play('wood', { vol: 0.2, gap: 0.08 }); }); }
        else { r.it.scale = 1; counterSt[id === 'left' ? 0 : 1].add(r.it, 0.3, 0.6); }
      }
    }
  }
  // 柜台上的肉送给前排等着的人
  for (let ci = 0; ci < 2; ci++) {
    const st = counterSt[ci];
    if (!st.n || t < (st.nx || 0)) continue;
    const top = st.items[st.n - 1]; if (top.fly) continue;
    const cu = waitingFor(ci); if (!cu) continue;
    const it = st.pop(); cu.inFly++; st.nx = t + 0.12;
    it.goto(() => { const f = fwdOf(cu.c.heading); return [cu.p[0] + f[0] * 0.42, 0.98, cu.p[1] + f[1] * 0.42, cu.c.heading]; }, 0.38, 1.0, (x) => { cu.inFly--; cu.got++; cu.plate = x; const pp = [...cu.p], hh = cu.c.heading; x.stick(() => { const f = fwdOf(hh); return [pp[0] + f[0] * 0.42, 0.98, pp[1] + f[1] * 0.42, hh]; }); }, 0.5);
    play('whoosh', { vol: 0.25, gap: 0.1 });
  }
}

// ------------------------------------------------------------------ 走路和碰撞
// 挡路的矩形：随柜台 2 的锁在不在变，缓存起来（walkable 每步要调上千次）
let BL = null, BLk = -1;
const blockList = () => { const k = G.unlocked.c2 ? 1 : 0; if (k !== BLk) { BLk = k; BL = Object.values(L.blocks).concat(k ? [] : [[L.padlock[0] - 0.55, L.padlock[0] + 0.55, L.padlock[1] - 0.25, L.padlock[1] + 0.3]]); } return BL; };
// soft：这几个矩形只按原大小算（起点本来就贴着它们，外扩的边算进去就哪儿都走不了）
function walkable(p, m = 0, soft = null) { if (!inRect(p, L.walk)) return false; for (const b of blockList()) if (inRect(p, b, soft && soft.includes(b) ? 0 : m)) return false; return true; }
function moveChar(e, vx, vz, dt) {
  const nx = e.p[0] + vx * dt, nz = e.p[1] + vz * dt;
  if (!walkable(e.p)) { e.p[0] = Math.min(L.walk[1], Math.max(L.walk[0], nx)); e.p[1] = Math.min(L.walk[3], Math.max(L.walk[2], nz)); return; }   // 被新冒出来的东西罩住：让他自己走出来
  if (walkable([nx, nz])) { e.p[0] = nx; e.p[1] = nz; }
  else if (walkable([nx, e.p[1]])) e.p[0] = nx;
  else if (walkable([e.p[0], nz])) e.p[1] = nz;
}
// 绕路：挡路矩形外扩 0.45 米的四个角当路点，在「互相看得见」的角之间找最短路，几个角都能绕
// （玩家把主角丢在烤炉、箱子、生肉托板后面或木材堆南边，松手以后要能自己走出来；只绕一个角的话会一直顶着墙）
const CM = 0.45;
const segClear = (a, b, soft = null) => { for (let k = 1; k < 24; k++) { const u = k / 24; if (!walkable([lerp(a[0], b[0], u), lerp(a[1], b[1], u)], 0.25, soft)) return false; } return true; };
let CG = null;
function cornerGraph() {
  const bl = blockList(); if (CG && CG.bl === bl) return CG;
  const cs = []; for (const b of bl) for (const c of [[b[0] - CM, b[2] - CM], [b[1] + CM, b[2] - CM], [b[0] - CM, b[3] + CM], [b[1] + CM, b[3] + CM]]) if (walkable(c)) cs.push(c);
  const adj = cs.map(() => []);
  for (let i = 0; i < cs.length; i++) for (let j = i + 1; j < cs.length; j++) if (segClear(cs[i], cs[j])) { const l = dist(cs[i], cs[j]); adj[i].push([j, l]); adj[j].push([i, l]); }
  return (CG = { bl, cs, adj });
}
export function route(from, to) {
  const soft = blockList().filter((b) => inRect(from, b, 0.26));
  if (segClear(from, to, soft)) return [to];
  const { cs, adj } = cornerGraph(), n = cs.length, d = new Array(n).fill(Infinity), prev = new Array(n).fill(-1), done = new Array(n).fill(false);
  for (let i = 0; i < n; i++) if (segClear(from, cs[i], soft)) d[i] = dist(from, cs[i]);
  let best = Infinity, bi = -1;
  for (;;) {
    let u = -1; for (let i = 0; i < n; i++) if (!done[i] && d[i] < best && (u < 0 || d[i] < d[u])) u = i;
    if (u < 0) break; done[u] = true;
    const l = d[u] + dist(cs[u], to); if (l < best && segClear(cs[u], to)) { best = l; bi = u; }
    for (const [v, w] of adj[u]) if (d[u] + w < d[v]) { d[v] = d[u] + w; prev[v] = u; }
  }
  if (bi < 0) return [to];
  const path = [to]; for (let u = bi; u >= 0; u = prev[u]) path.unshift(cs[u]);
  return path;
}
function steer(e, tgt, speed, dt, r = 0.12) {
  if (!e.path || e.pathT < G.t || dist(e.pathTo || [1e9, 0], tgt) > 0.05) { e.path = route(e.p, tgt); e.pathT = G.t + 0.4; e.pathTo = [...tgt]; }
  let w = e.path[0]; if (e.path.length > 1 && dist(e.p, w) < 0.3) { e.path.shift(); w = e.path[0]; }
  const d = dist(e.p, w), last = e.path.length === 1;
  if (last && d < r) return false;
  const k = last ? Math.min(1, d / Math.max(0.05, speed * dt)) : 1;
  moveChar(e, (w[0] - e.p[0]) / d * speed * k, (w[1] - e.p[1]) / d * speed * k, dt); return true;
}

// ------------------------------------------------------------------ 主角每帧
export const input = { vx: 0, vz: 0, active: false };
export const POSE = query.pose ? { clip: query.pose, t: +(query.pt || 0), yaw: +(query.py || 0.6) } : null;
function updateHero(t, dt, auto) {
  const h = hero, sp = h.goods.n ? T.walkCarry : T.walk;
  let moving = false;
  const p0 = [...h.p];
  if (G.ended || POSE) { /* 站着 */ }
  else if (input.active) {
    const l = Math.hypot(input.vx, input.vz);
    if (l > 0.05) { const vx = input.vx / l * sp * Math.min(1, l), vz = input.vz / l * sp * Math.min(1, l); moveChar(h, vx, vz, dt); h.heading += wrapA(Math.atan2(vx, vz) - h.heading) * Math.min(1, dt * 14); }
  } else if (auto && G.target) steer(h, G.target.p, sp, dt, G.target.r || 0.15);
  h.vel = [(h.p[0] - p0[0]) / dt, (h.p[1] - p0[1]) / dt]; moving = Math.hypot(...h.vel) > 0.3;
  if (moving && !input.active) h.heading += wrapA(Math.atan2(h.vel[0], h.vel[1]) - h.heading) * Math.min(1, dt * 12);
  const tx = -h.vel[0] * 0.06, tz = -h.vel[1] * 0.06;
  h.sway[0] += (tx - h.sway[0]) * Math.min(1, dt * 6); h.sway[1] += (tz - h.sway[1]) * Math.min(1, dt * 6);
  h.spr += ((h.goods.n && h.cash.n ? 1 : 0) - h.spr) * (1 - Math.exp(-dt / 0.1));   // 两样都有才并排
  h.c.play(moving ? 'run' : 'idle', 0.15, moving ? 1.15 : 1);
  h.c.obj.position.set(h.p[0], 0, h.p[1]); h.c.obj.rotation.y = h.heading; h.c.update(dt);
  if (POSE) { const a = h.c.actions[POSE.clip]; for (const x of Object.values(h.c.actions)) if (x !== a) x.stop(); a.reset(); a.play(); a.setEffectiveWeight(1); a.time = POSE.t; h.c.mixer.update(0); h.c.obj.rotation.y = POSE.yaw; }   // ?pose=run&pt=0.3：定住一个姿势看手脚
  h.kind = h.goods.n ? h.goods.items[0].type : null;
  // 取木头（还没有送柴传送带的时候）
  if (!G.unlocked.wood && (!h.kind || h.kind === 'log') && dist(h.p, L.padA.c) < L.padA.r + 0.25 && pile.n && t >= (h.nx.pick || 0)) {
    const it = pile.pop(); h.goods.add(it, 0.32, 1.1); h.nx.pick = t + T.pickDt; play('wood', { vol: 0.4, gap: 0.05 }); first('log', 2002);   // 背木头不设上限
  }
  // 添柴
  if (h.kind === 'log' && dist(h.p, L.feed) < 0.95 && t >= (h.nx.feed || 0)) {
    const it = h.goods.pop(); h.nx.feed = t + T.feedDt;
    it.goto(() => [...L.oven.mouth, Math.PI / 2], 0.3, 0.8, (x) => { x.kill(); oven.fuel++; oven.flare = G.t; play('wood', { vol: 0.3, gap: 0.06, rate: 0.85 }); });
  }
  // 拿熟肉
  if ((!h.kind || h.kind === 'cooked') && inRect(h.p, [L.tray.c[0] - L.tray.size[0] / 2, L.tray.c[0] + L.tray.size[0] / 2, L.tray.c[1] - L.tray.size[1] / 2, L.tray.c[1] + L.tray.size[1] / 2], 0.15) && tray.n && t >= (h.nx.tray || 0)) {
    const top = tray.items[tray.n - 1];
    if (!top.fly) { tray.pop(); h.goods.add(top, 0.3, 1.0); h.nx.tray = t + T.pickDt; play('drop', { vol: 0.45, gap: 0.05 }); first('meat', 2004); }
  }
  // 上柜台、收钱
  for (let ci = 0; ci < 2; ci++) {
    if (ci === 1 && !G.unlocked.c2) continue;
    const s = L.serve[ci];
    if (h.kind === 'cooked' && dist(h.p, s) < 1.0 && t >= (h.nx.serve || 0) && counterSt[ci].n < 9) {
      const it = h.goods.pop(); counterSt[ci].add(it, 0.3, 0.9, () => play('drop', { vol: 0.3, gap: 0.06 })); h.nx.serve = t + T.serveDt;
    }
  }
  for (let ci = 0; ci < 2; ci++) {
    const s = L.serve[ci];
    if (Math.abs(h.p[0] - s[0]) < 2.3 && h.p[1] < -3.2 && t >= (h.nx.cash || 0)) {
      const j = ground[ci].findIndex((b) => b.landed); if (j < 0) continue;
      const b = ground[ci].splice(j, 1)[0]; hero.cash.add(b, 0.3, 1.2); h.nx.cash = t + T.cashDt; play('coin', { vol: 0.4, gap: 0.03 });
    }
  }
  // 付钱
  for (const id of ORDER) {
    const tl = tiles[id]; tl.on = false;
    if (!tl.visible || tl.done) continue;
    const on = dist(h.p, tl.c) < 0.78; tl.on = on && h.cash.n > 0;
    if (on && !G.ended && h.cash.n && t >= (h.nx.pay || 0) && tl.left > 0) {
      const it = h.cash.pop(); tl.left -= 1; h.nx.pay = t + T.payDt;
      it.goto(() => [tl.c[0], 0.08, tl.c[1], 0], 0.3, 1.0, (x) => { x.kill(); });
      play('pay', { vol: 0.45, gap: 0.035 });
      if (tl.left <= 0) unlock(id, t);
    }
  }
}
function first(k, code) { if (!G.first[k]) { G.first[k] = G.t; report(code); } }

// ------------------------------------------------------------------ 解锁
const UNLOCK_CODE = { wood: [1008, 2006], left: [1009, 2007], c2: [1010, 2008], right: [1010, 2009], up: [1010, 2010] };
function unlock(id, t) {
  const tl = tiles[id]; tl.done = true; G.unlocked[id] = t; console.log('[flow] unlock ' + id + ' t=' + t.toFixed(1) + ' served=' + G.served);
  flash(tl.c, t); play('bell', { vol: 0.8 }); play('full', { vol: 0.45 });
  report(UNLOCK_CODE[id][0]); report(UNLOCK_CODE[id][1]);
  const nxt = ORDER[ORDER.indexOf(id) + 1]; if (nxt) tiles[nxt].showAt = t + 0.7;
  if (L.belts[id]) belts[id] = { belt: makeBelt(L.belts[id], TX), t0: t + 0.2, next: 0, ride: [] };
  if (id === 'wood') { play('conv', { vol: 0.5 }); }
  if (id === 'c2') {
    flash(L.counters[1].c, t + 0.1); counter2.t0 = t;
  }
  if (id === 'up') {
    flash(L.grinder, t + 0.05); flash([L.drum.x - 1.2, L.drum.z], t + 0.15);
    G.endAt = t + T.endAfter; G.flood = t;
  }
}
function updateProps(t, dt) {
  if (counter2.t0 !== undefined) {
    const e = t - counter2.t0, k1 = 1 - smooth(e / 0.25), k2 = backOut((e - 0.25) / 0.4);
    counter2.gray.scale.setScalar(Math.max(0.001, k1)); padlock.scale.setScalar(Math.max(0.001, 1.5 * k1)); counter2.gray.visible = padlock.visible = k1 > 0.002;
    counter2.wood.visible = e > 0.25; counter2.wood.scale.setScalar(Math.max(0.001, k2));
  }
  // 后排木桩：前排顾客挤着要肉，面前那根往营地里晃
  for (const ps of posts.posts) {
    const near = front.find((cu) => cu.row === 0 && Math.abs(cu.p[0] - ps.x) < 0.35 && cu.state === 'wait' && (cu.ci === 0 || !G.unlocked.c2 || true));
    const w = near ? Math.max(0, Math.sin(t * 6.5 + ps.ph)) ** 3 : 0;
    ps.wob += (w - ps.wob) * Math.min(1, dt * 10);
  }
  posts.update(t);
  // 升级：人群一片片「噗」地变成钞票（成片 43–47 秒）
  if (G.flood !== undefined) {
    const e = t - G.flood;
    for (let i = 0; i < crowd.list.length; i++) {
      const c = crowd.list[i]; if (c.hidden || c.z < -12.5) continue;
      if (e > 0.25 + hash(i * 3.7) * 1.8) { c.hidden = true; puff([c.x, 0.9, c.z], t, 1.0); if (i % 2 === 0) goldGlow([c.x, c.z], t); for (let j = 0; j < 2; j++) { const b = new Item('cash', [c.x, 1.0, c.z], { pop: true, ry: hash(i + j) * 6 }); const gx = c.x + (hash(i * 2 + j) - 0.5) * 0.6, gz = c.z + (hash(i * 3 + j) - 0.5) * 0.6; b.goto(() => [gx, 0.03, gz, b.ry], 0.5, 1.4, null, 2.5); } play('pop', { vol: 0.3, gap: 0.05 }); }
    }
  }
}

// ------------------------------------------------------------------ 自动玩 / 引导的目标（手上有什么先交什么，钱够就去买地块）
function nextTile() { for (const id of ORDER) { const tl = tiles[id]; if (tl.visible && !tl.done) return tl; } return null; }
const groundN = (ci) => ground[ci].length;
const cashP = (ci) => (belts[ci ? 'right' : 'left'] && !hero.goods.n ? L.cashSpot[ci] : L.serve[ci]);
export function chooseTarget() {
  const h = hero, tl = nextTile(), money = h.cash.n, gAll = groundN(0) + groundN(1);
  if (G.ended) return null;
  if (tl && money >= tl.left) return { kind: 'tile', p: tl.c, r: 0.15 };
  const kind = h.goods.n ? h.goods.items[0].type : null;
  const serveCi = () => (G.unlocked.c2 && !G.unlocked.right && waitingCount(1) >= waitingCount(0) ? 1 : 0);
  if (kind === 'log') return !G.unlocked.wood && pile.n && dist(h.p, L.padA.c) < 1.0 ? { kind: 'padA', p: L.padA.c, r: 0.2 } : { kind: 'feed', p: L.feed, r: 0.2 };   // 木材堆拿空了再去添柴（有了送柴带就拿不了，直接去添）
  const cookingSoon = oven.busy || oven.fuel >= T.logsPerBatch || (G.unlocked.wood && (pile.n || belts.wood.ride.length));
  if (kind === 'cooked') {
    for (let ci = 0; ci < 2; ci++) if ((ci === 0 || G.unlocked.c2) && dist(h.p, L.serve[ci]) < 1.1) return { kind: 'serve', p: L.serve[ci], r: 0.25 };   // 到了柜台就放完再走
    if (G.lastK === 'serve' && G.target) return G.target;   // 已经往柜台走了就别回头
    const atTray = inRect(h.p, [L.tray.c[0] - 1.1, L.tray.c[0] + 1.1, L.tray.c[1] - 1.1, L.tray.c[1] + 1.1]);
    if (tray.n || (atTray && cookingSoon && h.goods.n < 4)) return { kind: 'tray', p: L.tray.c, r: 0.3 };   // 托盘空了、手上已经有 4 块就先去送
    const ci = serveCi(); return { kind: 'serve', p: L.serve[ci], r: 0.25 };
  }
  // 空手（或只背着钱）：在柜台前、这边还有人在吃肉 / 钱还在飞，就等着收完
  for (let ci = 0; ci < 2; ci++) if (Math.min(dist(h.p, L.serve[ci]), dist(h.p, L.cashSpot[ci])) < 1.3 && (counterSt[ci].n || ground[ci].length || front.some((cu) => cu.ci === ci && (cu.state === 'got' || cu.inFly)))) return { kind: 'cash', p: cashP(ci), r: 0.3 };
  const cashAt = groundN(1) > groundN(0) ? 1 : 0;
  if (gAll && tl && money + gAll >= tl.left) return { kind: 'cash', p: cashP(cashAt), r: 0.3 };
  const needMeat = !(G.unlocked.left && (G.unlocked.right || !G.unlocked.c2));
  if (needMeat) {
    if (tray.n >= 2 || (cookingSoon && tray.n)) return { kind: 'tray', p: L.tray.c, r: 0.3 };
    if (!G.unlocked.wood && !cookingSoon && pile.n) return { kind: 'padA', p: L.padA.c, r: 0.2 };
    if (cookingSoon || tray.n) return { kind: 'tray', p: L.tray.c, r: 0.3 };
    if (!G.unlocked.wood) return { kind: 'padA', p: L.padA.c, r: 0.2 };
  }
  if (gAll) return { kind: 'cash', p: cashP(cashAt), r: 0.3 };
  return { kind: 'cash', p: cashP(G.unlocked.c2 && waitingCount(1) > waitingCount(0) ? 1 : 0), r: 0.3 };
}

// ------------------------------------------------------------------ 每帧
export function update(t, dt, auto) {
  G.t = t;
  for (let i = timers.length - 1; i >= 0; i--) if (t >= timers[i][0]) { const f = timers[i][1]; timers.splice(i, 1); f(); }
  for (const id of ORDER) { const tl = tiles[id]; if (tl.showAt !== undefined && t >= tl.showAt && !tl.visible) { tl.show(t); play('pop', { vol: 0.6 }); } tl.update(t); }
  G.target = chooseTarget();
  { const k = G.target ? G.target.kind : '-'; if (k !== G.lastK) { (G.log || (G.log = [])).push(t.toFixed(1) + ' ' + k + ' g' + hero.goods.n + ' c' + hero.cash.n + ' f' + oven.fuel + ' tr' + tray.n + ' gr' + (ground[0].length + ground[1].length)); G.lastK = k; } }
  updateHero(t, dt, auto);
  updateLog(t, dt);
  updateOven(t, dt);
  updateBelts(t, dt);
  updateCustomers(t, dt);
  updateProps(t, dt);
  updateCrowd(t);
  updateItems(t);
  updateFx(t);
  const h = hero, kind = h.goods.n ? h.goods.items[0].type : null, tg = G.target;
  zones.padA.update(t, dt, !G.unlocked.wood, dist(h.p, L.padA.c) < L.padA.r + 0.25 && pile.n > 0 && (!kind || kind === 'log'), tg && tg.kind === 'padA');
  zones.feed.update(t, dt, !G.unlocked.wood && (kind === 'log' || oven.fuel > 0), kind === 'log' && dist(h.p, L.feed) < 0.95, tg && tg.kind === 'feed');
  zones.serve.forEach((z, ci) => z.update(t, dt, (ci === 0 || G.unlocked.c2) && (kind === 'cooked' || groundN(ci) > 0), dist(h.p, L.serve[ci]) < 1.0 && (kind === 'cooked' || groundN(ci) > 0), tg && (tg.kind === 'serve' || tg.kind === 'cash') && Math.min(dist(tg.p, L.serve[ci]), dist(tg.p, L.cashSpot[ci])) < 0.1));
  updateTarget(t, dt, tg ? { ...tg, y: 0.02 } : null, h.p);
  const pts = tg ? [h.p, ...route(h.p, tg.p)] : null;
  updatePath(t, dt, pts, () => 0.02, !!tg && !G.ended);
  for (let i = emo.length - 1; i >= 0; i--) if (t > emo[i].t0 + emo[i].dur) emo.splice(i, 1);
}
export const state = () => ({ hero, front, crowd, tiles, pile, tray, oven, ground, counterSt, belts, logSt });
export function heroFocus() { return [hero.p[0], 0.9, hero.p[1]]; }
