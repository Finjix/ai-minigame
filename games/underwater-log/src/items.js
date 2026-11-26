// 物品：木头（源工程「小木头」）、生肉、熟肉（SM_肉 / SM_熟肉）、钞票（钱，$ 抹掉的 v06）。全部实例化画，每帧按逻辑位置重排矩阵。
// 每个物品挂在一个「槽」上（栈的第几层、传送带上、顾客盘子上……），换槽时沿抛物线飞过去，到了以后贴着槽走。（和瀑布捞鱼同一套）
import * as THREE from 'three';
import { scene, realLook } from './world.js';
import { arc, clamp01, lerp, smooth } from '../../../shared/playable/util.js';

// 归一以后的尺寸（米）：长边沿 x、底面在 y = 0、中心在原点
export const SIZE = { log: { len: 1.0, h: 0.15 }, raw: { len: 0.62, h: 0.075 }, cooked: { len: 0.62, h: 0.075 }, cash: { len: 0.46, h: 0.055 } };

class Pool {
  constructor(geo, mat, max, cast = true) {
    this.n = 0; this.max = max;
    this.mesh = new THREE.InstancedMesh(geo, mat, max); this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false; this.mesh.castShadow = cast; this.mesh.count = 0; scene.add(this.mesh);
  }
  push(m) { if (this.n < this.max) this.mesh.setMatrixAt(this.n++, m); }
  flush() { this.mesh.count = this.n; this.mesh.instanceMatrix.needsUpdate = true; this.n = 0; }
}
let pools = {};
// GLB 是量化过的（顶点存成归一化 int16，节点上挂反量化矩阵）：转回浮点，把节点矩阵烘进几何
export function bakedGeo(o) {
  o.updateWorldMatrix(true, false);
  const g = new THREE.BufferGeometry();
  for (const k of ['position', 'normal', 'uv']) {
    const a = o.geometry.attributes[k]; if (!a) continue;
    const n = a.count, s = a.itemSize, d = new Float32Array(n * s);
    for (let i = 0; i < n; i++) for (let c = 0; c < s; c++) d[i * s + c] = a.getComponent(i, c);
    g.setAttribute(k, new THREE.BufferAttribute(d, s));
  }
  if (o.geometry.index) g.setIndex(o.geometry.index.clone());
  g.applyMatrix4(o.matrixWorld); return g;
}
// 整个 GLB 合成一个几何（多个材质槽共用一张合好的贴图），长边转到 x，缩放到 len，底面中心到原点
export function propGeo(gltf, len, { flatY = true, keepAxis = false } = {}) {
  const gs = []; gltf.scene.traverse((o) => { if (o.isMesh) gs.push(bakedGeo(o)); });
  let g = gs.length === 1 ? gs[0] : mergeSimple(gs);
  g.computeBoundingBox(); let sz = g.boundingBox.getSize(new THREE.Vector3());
  if (!keepAxis && flatY) { if (sz.x < sz.y && sz.x < sz.z) g.rotateZ(Math.PI / 2); else if (sz.z < sz.y && sz.z < sz.x) g.rotateX(Math.PI / 2); g.computeBoundingBox(); sz = g.boundingBox.getSize(new THREE.Vector3()); }   // 最薄的轴朝上（肉、钞票平放）
  if (!keepAxis && sz.z > sz.x) { g.rotateY(Math.PI / 2); g.computeBoundingBox(); sz = g.boundingBox.getSize(new THREE.Vector3()); }
  const s = len / Math.max(sz.x, sz.z); g.scale(s, s, s); g.computeBoundingBox();
  const b = g.boundingBox, c = b.getCenter(new THREE.Vector3());
  g.translate(-c.x, flatY ? -b.min.y : -c.y, -c.z); g.computeBoundingBox(); g.computeBoundingSphere();
  return g;
}
function mergeSimple(gs) {
  let nv = 0, ni = 0; for (const g of gs) { nv += g.attributes.position.count; ni += g.index ? g.index.count : g.attributes.position.count; }
  const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), idx = new Uint32Array(ni);
  let ov = 0, oi = 0;
  for (const g of gs) {
    const n = g.attributes.position.count; pos.set(g.attributes.position.array, ov * 3);
    if (g.attributes.normal) nor.set(g.attributes.normal.array, ov * 3); if (g.attributes.uv) uv.set(g.attributes.uv.array, ov * 2);
    const ix = g.index ? g.index.array : [...Array(n).keys()]; for (let i = 0; i < ix.length; i++) idx[oi + i] = ix[i] + ov;
    ov += n; oi += ix.length;
  }
  const o = new THREE.BufferGeometry();
  o.setAttribute('position', new THREE.BufferAttribute(pos, 3)); o.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); o.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); o.setIndex(new THREE.BufferAttribute(idx, 1));
  return o;
}
// 熟肉：烤网对应的三道焦条（V20「熟肉要有和烤网对应的烤痕」，写实版用户挑的 D 档中棕：比肉皮深一截、不偏红），只在朝上那面
function grillMarks(mat) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOb; varying float vNy;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOb = position; vNy = normal.y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOb; varying float vNy;')
      .replace('#include <map_fragment>', `#include <map_fragment>
  { float u = vOb.x * 0.8 + vOb.z * 0.6, d = abs(fract(u / 0.16) - 0.5) * 0.16; float aa = fwidth(u) * 1.2 + 0.003;
    float mk = (1.0 - smoothstep(0.022 - aa, 0.022 + aa, d)) * smoothstep(0.4, 0.8, vNy) * step(abs(u), 0.27);
    float halo = (1.0 - smoothstep(0.022, 0.06, d)) * smoothstep(0.4, 0.8, vNy) * step(abs(u), 0.27);
    diffuseColor.rgb *= 1.0 - 0.1 * halo; diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.42, 0.36, 0.32), mk); }`);
    if (prev && prev !== THREE.Material.prototype.onBeforeCompile) prev(sh, r);
  };
  const k0 = mat.customProgramCacheKey(); mat.customProgramCacheKey = () => k0 + '|grill';   // 键一样 three 会拿别的材质的程序
  return mat;
}
export const GEO = {};
export function initItems(models, tx) {
  GEO.log = propGeo(models.log, SIZE.log.len);
  GEO.raw = propGeo(models.meatRaw, SIZE.raw.len);
  GEO.cooked = propGeo(models.meatCooked, SIZE.cooked.len);
  GEO.cash = propGeo(models.cash, SIZE.cash.len);
  for (const k of Object.keys(GEO)) { GEO[k].computeBoundingBox(); SIZE[k].h = GEO[k].boundingBox.max.y; }
  const M = (map, { k = 1, ...o } = {}) => realLook(new THREE.MeshLambertMaterial({ map, ...o }), { k });
  pools = {
    log: new Pool(GEO.log, M(tx.log), 260),
    raw: new Pool(GEO.raw, M(tx.meatRaw, { k: 0.82, color: 0xd8c4c4 }), 160),
    cooked: new Pool(GEO.cooked, grillMarks(M(tx.meatCooked)), 200),
    cash: new Pool(GEO.cash, M(tx.cash, { emissive: 0x061a06 }), 700),
  };
}

// ------------------------------------------------------------------ 物品
export const items = [];
let NOW = 0;
export class Item {
  constructor(type, p, opt = {}) {
    this.type = type; this.p = [...p]; this.ry = opt.ry || 0; this.rx = 0; this.rz = 0; this.scale = opt.scale ?? 1; this.pop = opt.pop ? NOW : -1;
    this.slot = null; this.fly = null; this.alive = true; this.spin = Math.random() < 0.5 ? 1 : -1;
    items.push(this);
  }
  // 飞到槽 slotFn()（每帧求值，目标会动）；dur 秒；h 弧高
  goto(slotFn, dur = 0.35, h = 1.2, onArrive = null, flip = 0.9) {
    this.fly = { from: [...this.p], ry0: this.ry, t0: NOW, dur, h, onArrive, flip };
    this.slot = slotFn;
  }
  stick(slotFn) { this.slot = slotFn; this.fly = null; }
  kill() { this.alive = false; }
}
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(), _p = new THREE.Vector3();
const tmp = [0, 0, 0];
export function updateItems(t) {
  NOW = t;
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i];
    if (!it.alive) { items.splice(i, 1); continue; }
    const s = it.slot ? it.slot() : null;
    if (it.fly && s) {
      const k = clamp01((t - it.fly.t0) / it.fly.dur);
      arc(tmp, it.fly.from, s, it.fly.h, smooth(k) * 0.35 + k * 0.65);
      it.p[0] = tmp[0]; it.p[1] = tmp[1]; it.p[2] = tmp[2];
      it.ry = lerp(it.fly.ry0, s[3] ?? 0, k); it.rx = Math.sin(Math.PI * k) * it.fly.flip * it.spin; it.rz = 0;
      if (k >= 1) { const f = it.fly.onArrive; it.fly = null; it.rx = 0; if (f) f(it); }
    } else if (s) { it.p[0] = s[0]; it.p[1] = s[1]; it.p[2] = s[2]; it.ry = s[3] ?? it.ry; it.rx = s[4] ?? 0; it.rz = s[5] ?? 0; }
    if (!it.alive) continue;
    const pk = it.pop >= 0 ? Math.min(1, 0.2 + 0.8 * ((t - it.pop) / 0.22)) : 1;
    const sc = it.scale * pk;
    _p.set(it.p[0], it.p[1], it.p[2]); _e.set(it.rx, it.ry, it.rz, 'YXZ');
    _q.setFromEuler(_e); _s.set(sc, sc, sc); _m.compose(_p, _q, _s);
    pools[it.type].push(_m);
  }
  for (const k in pools) pools[k].flush();
}

// ------------------------------------------------------------------ 栈：一摞东西（主角背上、木材堆、托盘、柜台……）
// base() → [x, y, z, ry]；第 i 层 = 底 + 层距 × i；cols：每层几个位（本地 [左右, 前后]，跟着 ry 转）；sway：[dx, dz]，顶上晃得最多
export class Stack {
  constructor(base, gap, { cols = null, sway = null, rx = 0, ryOff = 0, gapOf = null } = {}) { this.base = base; this.gap = gap; this.items = []; this.cols = cols; this.sway = sway; this.rx = rx; this.ryOff = ryOff; this.gapOf = gapOf; }
  get n() { return this.items.length; }
  slot(i) {
    return () => {
      const b = this.base(), ry = b[3] || 0;
      let x = b[0], y = b[1], z = b[2], k = i;
      if (this.cols) { const c = i % this.cols.length; k = Math.floor(i / this.cols.length); const [a, f] = this.cols[c]; x += a * Math.cos(ry) + f * Math.sin(ry); z += -a * Math.sin(ry) + f * Math.cos(ry); }
      y += k * (this.gapOf ? this.gapOf(this.items[i]) : this.gap);
      if (this.sway) { const n = Math.max(1, this.items.length), f = (k / Math.max(6, n)) ** 1.6 * Math.min(n, 30) * this.gap * 0.55; x += this.sway[0] * f; z += this.sway[1] * f; }
      return [x, y, z, ry + this.ryOff, this.rx];
    };
  }
  topPos() { return this.slot(this.items.length)(); }
  add(it, dur = 0.3, h = 1.0, onArrive = null) { const i = this.items.length; this.items.push(it); it.goto(this.slot(i), dur, h, onArrive); return it; }
  put(it) { const i = this.items.length; this.items.push(it); it.stick(this.slot(i)); return it; }
  pop() { return this.items.pop(); }
  // 抽掉第 j 个，上面的往下落一格
  removeAt(j) { const it = this.items.splice(j, 1)[0]; for (let i = j; i < this.items.length; i++) if (!this.items[i].fly) this.items[i].stick(this.slot(i)); else this.items[i].slot = this.slot(i); return it; }
}
