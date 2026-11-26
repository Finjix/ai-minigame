// 会动 / 会变的场景物件（烘焙时被当成「会动的」藏掉了，游戏里用 3D 补回来）：
//   研磨机（1 级、2 级，骨骼动画）、巨木（在冰洞里转着被磨细、沉下去、下一根冒上来）、柜台后排木桩（顾客挤的时候晃）、
//   柜台 2（锁着是灰的，解锁换木色）、锁、传送带、炉膛里的火。
import * as THREE from 'three';
import { scene, realLook, meta, envMat, U, GRADE_GLSL } from './world.js';
import { L } from './config.js';
import { propGeo, bakedGeo } from './items.js';
import { makeChar, proto } from './chars.js';
import { hash, clamp01, smooth, lerp } from '../../../shared/playable/util.js';
import { createCanvas } from '../../../shared/playable/platform.js';

const lam = (o, look) => realLook(new THREE.MeshLambertMaterial(o), look);

// ------------------------------------------------------------------ 借底图像素：游戏相机和烘焙相机同一个朝向，物体每个看得见的面在底图里同款物体身上都看得见。
// 新物体上的点 → 同款物体（ref 处）同一相对位置的点 → 烘焙相机投影 → 底图 UV（瀑布捞鱼 fence.js 的做法）
export function envUVMat({ offset, tint = [1, 1, 1], sat = 1 }) {
  const m = meta, Lk = new THREE.Vector3(...m.L), F = new THREE.Vector3(...m.F), R = new THREE.Vector3(...m.R), Up = new THREE.Vector3(...m.U), C = Lk.clone().addScaledVector(F, -m.D);
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { tEnv: { value: envMat.uniforms.tCol.value }, uOff: { value: new THREE.Vector3(...offset) }, uC: { value: C }, uF: { value: F }, uR: { value: R }, uU: { value: Up }, uWH: { value: new THREE.Vector2(m.Wm, m.Hm) }, uD: { value: m.D }, uTint: { value: new THREE.Vector3(...tint) }, uSat: { value: sat }, uGr: U.uGr });
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform vec3 uOff; uniform vec3 uC; uniform vec3 uF; uniform vec3 uR; uniform vec3 uU; uniform vec2 uWH; uniform float uD; varying vec2 vEnv;')
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
  { vec3 w = (modelMatrix * vec4(transformed, 1.0)).xyz + uOff, d = w - uC; float z = dot(d, uF); vec2 q = vec2(dot(d, uR), dot(d, uU)) * uD / z;
    vEnv = vec2(q.x / uWH.x + 0.5, q.y / uWH.y + 0.5); }`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D tEnv; uniform vec3 uTint; uniform float uSat; uniform vec4 uGr; varying vec2 vEnv;\n' + GRADE_GLSL)
      .replace('#include <opaque_fragment>', `{ vec3 e = texture2D(tEnv, vEnv).rgb; float l = dot(e, vec3(0.2126, 0.7152, 0.0722)); e = mix(vec3(l), e, uSat) * uTint;
    outgoingLight = pow(grade_(e, uGr), vec3(2.2)); }   // 底图像素本身就带着烘焙时的光照（底图是 NoColorSpace，按 sRGB 解回线性）
#include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => 'envuv' + offset.join(',') + tint.join(',') + sat;
  return mat;
}

// ------------------------------------------------------------------ 研磨机
// 磨臂（源工程 dyn_jumu ARM / telescope / poseArm 原样移植）：整条臂的网格都绑在肩骨上、弯不了，做成伸缩臂——
// 横杆那一段（模型 z 在 z0..z1）的蒙皮从肩骨渐变到肘骨；磨的时候整条臂往前倾 tilt、肘骨沿世界 -x 推 ext 米（横杆拉长），再把肘骨转回竖直。
const ARM = {
  1: { sh: 'joint1', el: 'joint2', z0: 0.32, z1: 0.70, hub: [-1.12, 1.05], tilt: 0.26 },
  2: { sh: 'joint8', el: 'joint9', z0: 0.40, z1: 0.80, hub: [-1.18, 1.06], tilt: 0.21 },
};
function telescope(root, arm) {
  const v = new THREE.Vector3();
  root.traverse((o) => {
    if (!o.isSkinnedMesh) return;
    const bones = o.skeleton.bones, ia = bones.findIndex((b) => b.name === arm.sh), ie = bones.findIndex((b) => b.name === arm.el);
    if (ia < 0 || ie < 0) { console.warn('arm bones missing', arm.sh); return; }
    o.updateMatrix();
    const Pp = o.geometry.attributes.position, SI = o.geometry.attributes.skinIndex, SW = o.geometry.attributes.skinWeight;
    // 量化过的 GLB：顶点是归一化的，反量化矩阵在网格节点上（源工程量 z0/z1 用的是原始模型坐标）
    const si = new Float32Array(SI.count * 4), sw = new Float32Array(SW.count * 4);
    for (let i = 0; i < SI.count; i++) for (let c = 0; c < 4; c++) { si[i * 4 + c] = SI.getComponent(i, c); sw[i * 4 + c] = SW.getComponent(i, c); }
    for (let i = 0; i < Pp.count; i++) {
      v.fromBufferAttribute(Pp, i).applyMatrix4(o.matrix); const z = v.z; if (z <= arm.z0) continue;
      let ka = -1, ke = -1;
      for (let c = 0; c < 4; c++) { const j = si[i * 4 + c], w = sw[i * 4 + c]; if (j === ia && w > 0) ka = c; if (j === ie) ke = c; }
      if (ka < 0) continue;
      const wa = sw[i * 4 + ka], mv = wa * smooth((z - arm.z0) / (arm.z1 - arm.z0));
      if (ke < 0) { let kmin = -1, wmin = Infinity; for (let c = 0; c < 4; c++) { const w = sw[i * 4 + c]; if (c !== ka && w < wmin) { wmin = w; kmin = c; } } sw[i * 4 + ka] = wa - mv + wmin; si[i * 4 + kmin] = ie; sw[i * 4 + kmin] = mv; }
      else { sw[i * 4 + ka] = wa - mv; sw[i * 4 + ke] += mv; }
    }
    o.geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4)); o.geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
  });
}
const _aw = new THREE.Vector3(), _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion(), _qz = new THREE.Quaternion(), _zAx = new THREE.Vector3(0, 0, 1);
function rotWorldZ(b, ang) { b.parent.getWorldQuaternion(_qa); _qb.copy(_qa).invert(); _qz.setFromAxisAngle(_zAx, ang); b.quaternion.premultiply(_qb.multiply(_qz).multiply(_qa)); b.updateMatrixWorld(true); }
export function makeGrinder(P1, P2, tx) {
  const mk = (P, map, lv) => {
    const c = makeChar(P, { '*': map }, { look: { k: 1.05 } }); c.obj.position.set(L.grinder[0], 0, L.grinder[1]); c.obj.rotation.y = L.grinderYaw; c.play('run', 0.1, 1); scene.add(c.obj);
    const arm = ARM[lv]; telescope(c.inner, arm); c.arm = arm; c.B = { sh: c.bones[arm.sh], el: c.bones[arm.el] }; return c;
  };
  const g1 = mk(P1, tx.grinder1, 1), g2 = P2 ? mk(P2, tx.grinder2, 2) : null;
  if (g2) g2.obj.visible = false;
  // 每帧：先撤掉上一帧的改动（动画轨道是常量、不会每帧重写骨骼），播动画，再按伸出量摆
  const unpose = (c) => { const S = c.save; if (!S) return; c.B.sh.quaternion.copy(S.shq); c.B.sh.position.copy(S.shp); c.B.el.quaternion.copy(S.elq); c.B.el.position.copy(S.elp); c.save = null; };
  const pose = (c, ext, rest, scale) => {
    const B = c.B; if (!B.sh || !B.el) return;
    c.save = { shq: B.sh.quaternion.clone(), shp: B.sh.position.clone(), elq: B.el.quaternion.clone(), elp: B.el.position.clone() };
    const arm = c.arm, a = arm.tilt * smooth((ext - rest) / 0.3), th = Math.atan2(arm.hub[1], arm.hub[0]), r = Math.hypot(arm.hub[0], arm.hub[1]);
    const dxTilt = r * (Math.cos(th) - Math.cos(th + a));
    c.obj.updateMatrixWorld(true);
    rotWorldZ(B.sh, a);
    B.el.getWorldPosition(_aw); _aw.x -= (ext - dxTilt) * scale; B.el.parent.worldToLocal(_aw); B.el.position.copy(_aw); B.el.updateMatrixWorld(true);
    rotWorldZ(B.el, -a);
  };
  return { g1, g2, step(c, dt, ext, rest, scale = 1) { unpose(c); c.update(dt); pose(c, ext, rest, scale); } };
}

// ------------------------------------------------------------------ 巨木（源工程 shaver.js：圆柱刮削）：贴水面那截底座磨鼓够不到、留原粗细和树皮；上半截被磨细、露出浅色木芯；
// 底座和细芯之间 0.58 米的坡（V15/V16）；顶面年轮跟着半径缩。绕竖轴转（只碰一侧也是整圈变细）
export function makeGiantLog(tx) {
  const R0 = L.log.r0, H = L.log.h, YB = 1.65, D = 3.6;
  const side = new THREE.CylinderGeometry(1, 1, H + D, 56, 40, true); side.translate(0, (H - D) / 2, 0);
  const uni = { uR: { value: R0 }, uR0: { value: R0 }, uYB: { value: YB }, uFade: { value: 0 } };
  const sm = lam({ map: tx.bark });
  const prev = sm.onBeforeCompile;
  sm.onBeforeCompile = (sh, r) => {
    Object.assign(sh.uniforms, uni, { tCore: { value: tx.giantCore } });
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uR; uniform float uR0; uniform float uYB; varying vec3 vW; varying vec2 vU2; varying float vSv;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
  float rr_ = mix(uR0, uR, smoothstep(uYB - 0.55, uYB + 0.03, position.y)); transformed.xz *= rr_;
  vSv = clamp((uR0 - rr_) / max(0.05, uR0 - uR), 0.0, 1.0) * step(0.02, uR0 - uR);`)
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvW = (modelMatrix * vec4(transformed, 1.0)).xyz; vU2 = uv;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform sampler2D tCore; uniform float uFade; varying vec3 vW; varying vec2 vU2; varying float vSv;')
      .replace('#include <map_fragment>', `{ vec4 b = texture2D(map, vec2(vU2.x * 3.0, vW.y * 0.45));
    float g = dot(texture2D(tCore, vec2(vU2.x * 2.0, vW.y * 0.6)).rgb, vec3(0.333));
    vec3 core = vec3(0.62, 0.46, 0.33) * (0.82 + 0.4 * g) * (0.93 + 0.07 * sin(vW.y * 46.0));   // 浅色木芯（成片：磨过的地方是浅黄棕、带一圈圈细纹）
    // 树皮慢慢淡出（成片 5.5–6.5 秒：新冒出来那根整圈树皮，磨鼓咬上以后约 1 秒里一片片褪掉，树皮深缝留得最久）：
    // uFade 按磨掉的深度涨（磨掉 0.4 米褪完，1 级约 1.6 秒），再拿树皮亮度打散，亮的先褪、深缝后褪
    float bl = dot(b.rgb, vec3(0.333)), s_ = smoothstep(0.08, 0.35, vSv) * uFade;
    float kk = smoothstep(0.0, 1.0, s_ * 1.15 - 0.075 + (bl - 0.42) * 1.3 * (1.0 - s_));
    diffuseColor.rgb *= mix(b.rgb * vec3(0.92, 0.88, 0.85), core, kk); }`)
      .replace('#include <opaque_fragment>', `if (vW.y < 0.02) { float k = smoothstep(0.02, -0.9, vW.y); outgoingLight = mix(outgoingLight, vec3(0.10, 0.20, 0.27), 0.5 + 0.48 * k); }
#include <opaque_fragment>`);
    if (prev) prev(sh, r);
  };
  sm.customProgramCacheKey = () => 'giantSide3';
  const cap = new THREE.CircleGeometry(1, 56); cap.rotateX(-Math.PI / 2); cap.translate(0, H, 0);
  const cm = lam({ map: tx.giantCap });
  const g = new THREE.Group(), sMesh = new THREE.Mesh(side, sm), capG = new THREE.Group(), cMesh = new THREE.Mesh(cap, cm);
  sMesh.castShadow = cMesh.castShadow = true; capG.add(cMesh); g.add(sMesh, capG); scene.add(g);
  // 贴水面那一圈白沫（源工程 logFoam）
  const foam = new THREE.Mesh(new THREE.TorusGeometry(R0 + 0.04, 0.08, 8, 64), lam({ color: 0xf4f8fb, emissive: 0x4a5a64 })); foam.rotation.x = Math.PI / 2; foam.scale.z = 0.45; foam.position.y = 0.05; scene.add(foam);
  return { g, uni, set(x, z, R, y, rot) { foam.visible = y > -0.6; foam.position.set(x, 0.05, z); foam.scale.set(1, 1, 0.45 * (0.8 + 0.2 * Math.sin(rot * 7))); g.position.set(x, y, z); g.rotation.y = rot; uni.uR.value = R; uni.uFade.value = Math.min(1, Math.max(0, (R0 - R) / 0.4)); capG.scale.set(R, 1, R); U.uLog.value.set(x, z, R0); } };
}

// ------------------------------------------------------------------ 柜台后排木桩（源工程 STUMP_ROWS「后排营地」，裂桩 2、3 号混着；顾客挤的时候面前那根往营地里晃）
export function makeBackPosts(models, tx) {
  const kinds = [['stump2', tx.stump2Top, tx.stump2Bark], ['stump3', tx.stump3Top, tx.stump3Bark]];
  const posts = [];
  for (let i = 0, x = -4.562; x <= 4.7; x += 0.42045, i++) {
    const id = Math.round(x * 31 + L.backRowZ * 17);
    if (x > 1.15 && x < 3.7) { /* 柜台 2 后面那几根照样有 */ }
    posts.push({ x, z: L.backRowZ, k: hash(id + 9) < 0.5 ? 0 : 1, yaw: hash(id) * 6.28, s: 1 + (hash(id + 3) - 0.5) * 0.06, wob: 0, ph: hash(i * 3.3) * 6 });
  }
  const groups = kinds.map(([name, top, bark]) => {
    const parts = []; models[name].scene.traverse((o) => { if (o.isMesh) parts.push([bakedGeo(o), o.material.name]); });
    // 统一尺寸：最长边 0.41（manifest targetLength）
    const bb = new THREE.Box3(); for (const [g] of parts) { g.computeBoundingBox(); bb.union(g.boundingBox); }
    const sz = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3()), s = 0.41 / Math.max(sz.x, sz.z);
    return parts.map(([g, mn]) => {
      g.translate(-c.x, -bb.min.y, -c.z); g.scale(s, s, s);
      const mat = /Inst2/.test(mn) ? lam({ map: bark, color: 0x8a6a4a }) : /Inst1/.test(mn) ? lam({ map: bark }) : lam({ map: top });
      const im = new THREE.InstancedMesh(g, mat, posts.length); im.castShadow = true; im.frustumCulled = false; scene.add(im); return im;
    });
  });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
  return {
    posts,
    update(t) {
      const cnt = [0, 0];
      for (const ps of posts) {
        const w = ps.wob; e.set(w * 0.16, ps.yaw, 0, 'XYZ'); q.setFromEuler(e); p.set(ps.x, 0, ps.z + w * 0.04); sc.setScalar(ps.s); m.compose(p, q, sc);
        for (const im of groups[ps.k]) im.setMatrixAt(cnt[ps.k], m); cnt[ps.k]++;
      }
      groups.forEach((gs, k) => gs.forEach((im) => { im.count = cnt[k]; im.instanceMatrix.needsUpdate = true; }));
    },
  };
}

// ------------------------------------------------------------------ 柜台 2：颜色借底图里柜台 1（同一个模型、同一个朝向）
export function makeCounter2(models) {
  const g = propGeo(models.counter, 2.3, {});
  const off = [L.counters[0].c[0] - L.counters[1].c[0], 0, 0];
  const wood = new THREE.Mesh(g, envUVMat({ offset: off })), gray = new THREE.Mesh(g, envUVMat({ offset: off, tint: [0.84, 0.86, 0.9], sat: 0.08 }));
  for (const o of [wood, gray]) { o.position.set(L.counters[1].c[0], 0, L.counters[1].c[1]); o.castShadow = true; scene.add(o); }
  wood.visible = false;
  return { wood, gray };
}
// 锁：圆角锁体 + 粗锁环 + 锁孔亮圈（源工程 makeRoundPadlock，放大 1.5 倍，立在灰柜台正前方地上）
export function makePadlock() {
  const g = new THREE.Group(), body = new THREE.Mesh(roundBox(0.62, 0.5, 0.22, 0.09), lam({ color: 0xc9ced8 }));
  body.position.y = 0.34; g.add(body);
  const sh = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.055, 12, 28, Math.PI), lam({ color: 0x9aa2ae })); sh.position.y = 0.6; g.add(sh);
  for (const x of [-0.2, 0.2]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.12, 12), sh.material); leg.position.set(x, 0.6, 0); g.add(leg); }
  const hole = new THREE.Mesh(new THREE.CircleGeometry(0.06, 20), new THREE.MeshBasicMaterial({ color: 0x1c1c22 })); hole.position.set(0, 0.33, 0.112); g.add(hole);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.06, 0.085, 24), lam({ color: 0xf4f6fa })); ring.position.set(0, 0.33, 0.111); g.add(ring);
  g.scale.setScalar(1.5); g.position.set(L.padlock[0], 0, L.padlock[1]); g.traverse((o) => { if (o.isMesh) o.castShadow = true; }); scene.add(g);
  return g;
}
function roundBox(w, h, d, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(s, { depth: d - 0.06, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 3, curveSegments: 6 }); g.translate(0, 0, -(d - 0.06) / 2); return g;
}

// ------------------------------------------------------------------ 传送带：沿折线（拐角倒圆）铺一条深色履带（贴图滚动）+ 两边钢架；从起点往终点铺开
export function smoothPath(pts, r = 0.7) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const a = pts[i - 1], b = pts[i], c = pts[i + 1];
    const la = Math.hypot(b[0] - a[0], b[1] - a[1]), lc = Math.hypot(c[0] - b[0], c[1] - b[1]), rr = Math.min(r, la / 2, lc / 2);
    const p0 = [b[0] - (b[0] - a[0]) / la * rr, b[1] - (b[1] - a[1]) / la * rr], p1 = [b[0] + (c[0] - b[0]) / lc * rr, b[1] + (c[1] - b[1]) / lc * rr];
    for (let k = 0; k <= 8; k++) { const u = k / 8, x = (1 - u) ** 2 * p0[0] + 2 * u * (1 - u) * b[0] + u * u * p1[0], z = (1 - u) ** 2 * p0[1] + 2 * u * (1 - u) * b[1] + u * u * p1[1]; out.push([x, z]); }
  }
  out.push(pts[pts.length - 1]);
  const len = [0]; for (let i = 1; i < out.length; i++) len.push(len[i - 1] + Math.hypot(out[i][0] - out[i - 1][0], out[i][1] - out[i - 1][1]));
  return { pts: out, len, total: len[len.length - 1] };
}
export function along(P, s) {
  s = Math.max(0, Math.min(P.total, s)); let i = 1; while (i < P.len.length - 1 && P.len[i] < s) i++;
  const a = P.pts[i - 1], b = P.pts[i], k = (s - P.len[i - 1]) / Math.max(1e-6, P.len[i] - P.len[i - 1]);
  return [lerp(a[0], b[0], k), lerp(a[1], b[1], k), Math.atan2(b[0] - a[0], b[1] - a[1])];
}
export const BELT_Y = 0.16;
// 履带贴图（成片 15、30 秒：炭灰色橡胶，一条条浅一点的横板，板缝深，两边压暗）。原来用源工程 GLB 里的履带贴图压暗，压出来几乎是纯黑
let beltTex = null;
function beltTexture() {
  if (beltTex) return beltTex;
  const W = 256, H = 128, c = createCanvas(W, H), g = c.getContext('2d');
  g.fillStyle = 'rgb(54,55,59)'; g.fillRect(0, 0, W, H);
  const N = 3, P = W / N;   // 一张贴图横向是带子宽那么长（0.82 米），3 块横板
  for (let k = 0; k < N; k++) {
    const x = k * P;
    const gr = g.createLinearGradient(x, 0, x + P, 0); gr.addColorStop(0, 'rgb(96,97,102)'); gr.addColorStop(0.18, 'rgb(84,85,90)'); gr.addColorStop(0.8, 'rgb(70,71,76)'); gr.addColorStop(1, 'rgb(62,63,67)');
    g.fillStyle = gr; g.fillRect(x + 4, 6, P - 10, H - 12);
    g.fillStyle = 'rgb(22,22,25)'; g.fillRect(x + P - 6, 0, 6, H);            // 板缝
    g.fillStyle = 'rgba(150,150,156,0.55)'; g.fillRect(x + 4, 6, 2, H - 12);   // 板前沿的亮边
  }
  const ed = g.createLinearGradient(0, 0, 0, H); ed.addColorStop(0, 'rgba(0,0,0,0.45)'); ed.addColorStop(0.12, 'rgba(0,0,0,0)'); ed.addColorStop(0.88, 'rgba(0,0,0,0)'); ed.addColorStop(1, 'rgba(0,0,0,0.45)');
  g.fillStyle = ed; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 1400; i++) { const v = hash(i * 1.37), x = hash(i * 2.71) * W, y = hash(i * 3.91) * H; g.fillStyle = v < 0.5 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.06)'; g.fillRect(x, y, 2, 1); }
  beltTex = new THREE.Texture(c); beltTex.colorSpace = THREE.SRGBColorSpace; beltTex.wrapS = beltTex.wrapT = THREE.RepeatWrapping; beltTex.anisotropy = 4; beltTex.needsUpdate = true;
  return beltTex;
}
export function makeBelt(path, tx, { w = 0.82 } = {}) {
  const P = smoothPath(path);
  const n = P.pts.length, pos = [], uv = [], ix = [], rail = [], railIx = [];
  for (let i = 0; i < n; i++) {
    const p = P.pts[i], q = P.pts[Math.min(n - 1, i + 1)], o = P.pts[Math.max(0, i - 1)];
    const dx = q[0] - o[0], dz = q[1] - o[1], dl = Math.hypot(dx, dz) || 1, nx = -dz / dl, nz = dx / dl;
    pos.push(p[0] + nx * w / 2, BELT_Y, p[1] + nz * w / 2, p[0] - nx * w / 2, BELT_Y, p[1] - nz * w / 2);
    uv.push(P.len[i] / w, 0, P.len[i] / w, 1);
    // 两边钢架：外侧面（地面到顶）+ 顶面（往里 0.07 米），顶面朝上受光就是成片里那条亮边
    for (const sd of [1, -1]) { const ox = p[0] + nx * sd * (w / 2 + 0.06), oz = p[1] + nz * sd * (w / 2 + 0.06), ix_ = p[0] + nx * sd * (w / 2 - 0.01), iz = p[1] + nz * sd * (w / 2 - 0.01); rail.push(ox, 0.0, oz, ox, BELT_Y + 0.05, oz, ix_, BELT_Y + 0.05, iz); }
    if (i < n - 1) { const r = i * 2; ix.push(r, r + 2, r + 1, r + 1, r + 2, r + 3); const k = i * 6;
      for (const o of [0, 3]) { const a = k + o, b = k + 6 + o; railIx.push(a, b, a + 1, a + 1, b, b + 1, a + 1, b + 1, a + 2, a + 2, b + 1, b + 2); } }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(ix); g.computeVertexNormals();
  const map = beltTexture().clone(); map.needsUpdate = true;
  const belt = new THREE.Mesh(g, lam({ map })); belt.castShadow = true;
  const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.Float32BufferAttribute(rail, 3)); rg.setIndex(railIx); rg.computeVertexNormals();
  const rails = new THREE.Mesh(rg, lam({ color: 0x5a554f, side: THREE.DoubleSide })); rails.castShadow = true;
  const grp = new THREE.Group(); grp.add(belt, rails); scene.add(grp);
  // 从起点往终点铺开：按 drawRange 露出前 k 段
  const segs = n - 1;
  return { P, grp, map, set(k) { const m = Math.max(0, Math.round(segs * k)); g.setDrawRange(0, m * 6); rg.setDrawRange(0, m * 24); grp.visible = m > 0; }, scroll(dt, v) { map.offset.x -= dt * v / w; } };
}

// ------------------------------------------------------------------ 炉膛的火：正面窗口里一层加色的噪声火苗（底图里已经有 AI 画的写实炭火当底），添柴时窜一下
export function makeFire() {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uT: U.uTime, uA: { value: 0.6 } },
    vertexShader: 'varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform float uT; uniform float uA; varying vec2 vU;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main(){
  vec2 p = vU; float f = n(vec2(p.x * 6.0, p.y * 3.0 - uT * 2.6)) * 0.6 + n(vec2(p.x * 13.0, p.y * 6.0 - uT * 4.1)) * 0.4;
  float shape = (1.0 - p.y) * smoothstep(0.0, 0.25, p.x) * smoothstep(1.0, 0.75, p.x);
  float fl = smoothstep(0.35, 0.95, f * shape * 1.6) * uA;
  vec3 c = mix(vec3(1.0, 0.32, 0.05), vec3(1.0, 0.82, 0.35), smoothstep(0.4, 1.0, fl));
  gl_FragColor = vec4(c * fl, 1.0);
}`, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.55), mat);
  m.position.set(L.oven.window[0], L.oven.window[1], L.oven.window[2]); m.renderOrder = 6; scene.add(m);
  return { m, set(a) { mat.uniforms.uA.value = a; } };
}
