// 物品：生鱼、盒装鱼肉（原工程的寿司盒，片里的「肉盒」）、钞票捆。全部实例化画，每帧按逻辑位置重排矩阵。
// 每个物品挂在一个「槽」上（栈的第几层、顾客头顶……），换槽时沿抛物线飞过去，到了以后贴着槽走。
import * as THREE from 'three';
import { scene, realLook, addCaster } from './world.js';
import { arc, clamp01, lerp, smooth } from './util.js';

export const SIZE = { fish: { thick: 0.274 * 0.92, len: 1.05 }, pack: { h: 0.25 }, cash: { h: 0.0886 } };

class Pool {
  constructor(parts, max, cast = true) {
    this.n = 0; this.max = max;
    this.meshes = parts.map(([g, m]) => { const im = new THREE.InstancedMesh(g, m, max); im.instanceMatrix.setUsage(THREE.DynamicDrawUsage); im.frustumCulled = false; im.castShadow = cast; im.count = 0; scene.add(im); return im; });
    for (let i = 1; i < this.meshes.length; i++) this.meshes[i].instanceMatrix = this.meshes[0].instanceMatrix;
    if (cast) addCaster(this.meshes[0]);
  }
  push(m) { if (this.n < this.max) this.meshes[0].setMatrixAt(this.n++, m); }
  flush() { for (const m of this.meshes) m.count = this.n; this.meshes[0].instanceMatrix.needsUpdate = true; this.n = 0; }
}
let pools = {};
// GLB 是量化过的（KHR_mesh_quantization：顶点存成归一化 int16，节点上挂反量化矩阵）：转回浮点，把节点矩阵烘进几何
export function bakedGeo(o) {
  o.updateWorldMatrix(true, false);
  const g = new THREE.BufferGeometry();
  for (const [k, a] of Object.entries(o.geometry.attributes)) {
    const n = a.count, s = a.itemSize, d = new Float32Array(n * s);
    for (let i = 0; i < n; i++) for (let c = 0; c < s; c++) d[i * s + c] = a.getComponent(i, c);
    g.setAttribute(k, new THREE.BufferAttribute(d, s));
  }
  if (o.geometry.index) g.setIndex(o.geometry.index.clone());
  g.applyMatrix4(o.matrixWorld); g.computeBoundingSphere(); return g;
}
export function initItems(models, tx) {
  const geoOf = (g) => { const out = []; g.scene.traverse((o) => { if (o.isMesh) out.push([bakedGeo(o), o.material.name, o]); }); return out; };
  const fish = geoOf(models.fish)[0];
  const fishMat = realLook(new THREE.MeshLambertMaterial({ map: tx.fish }), { k: 1.15 });
  const pk = geoOf(models.pack);
  const packParts = pk.map(([g, name, o]) => {
    return [g, name.includes('food') ? realLook(new THREE.MeshLambertMaterial({ map: tx.packFood }), { k: 1.12 }) : realLook(new THREE.MeshPhongMaterial({ color: new THREE.Color(0x30384d), specular: 0x7a5a3a, shininess: 50 }))];
  });
  const cs = geoOf(models.cash)[0];
  const cashMat = realLook(new THREE.MeshLambertMaterial({ map: tx.cash, emissive: 0x0a2a04 }), { k: 1.1 });
  pools = { fish: new Pool([[fish[0], fishMat]], 420), pack: new Pool(packParts, 420), cash: new Pool([[cs[0], cashMat]], 420) };
  return { fishGeo: fish[0], fishMat };
}

// ------------------------------------------------------------------ 物品
export const items = [];
let NOW = 0;
export class Item {
  constructor(type, p, opt = {}) {
    this.type = type; this.p = [...p]; this.ry = opt.ry || 0; this.rx = 0; this.scale = opt.scale ?? 1; this.pop = opt.pop ? NOW : -1;
    this.slot = null; this.fly = null; this.alive = true; this.spin = Math.random() < 0.5 ? 1 : -1;
    items.push(this);
  }
  // 飞到槽 slotFn()（每帧求值，目标会动）；dur 秒；h 弧高
  goto(slotFn, dur = 0.35, h = 1.2, onArrive = null) {
    this.fly = { from: [...this.p], ry0: this.ry, t0: NOW, dur, h, onArrive };
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
      it.ry = lerp(it.fly.ry0, s[3] ?? 0, k); it.rx = Math.sin(Math.PI * k) * 0.9 * it.spin;
      if (k >= 1) { const f = it.fly.onArrive; it.fly = null; it.rx = 0; if (f) f(it); }
    } else if (s) { it.p[0] = s[0]; it.p[1] = s[1]; it.p[2] = s[2]; it.ry = s[3] ?? it.ry; it.rx = s[4] ?? 0; }
    if (!it.alive) continue;
    const pk = it.pop >= 0 ? Math.min(1, 0.2 + 0.8 * ((t - it.pop) / 0.22)) : 1;
    let sc = it.scale * pk;
    _p.set(it.p[0], it.p[1], it.p[2]);
    if (it.type === 'fish') _e.set(Math.PI / 2 + it.rx, it.ry, 0, 'YXZ');   // 侧躺：绕头尾轴转 90°，头朝 ry
    else _e.set(it.rx, it.ry, 0, 'YXZ');
    _q.setFromEuler(_e); _s.set(sc, sc, sc);
    _m.compose(_p, _q, _s);
    pools[it.type].push(_m);
  }
  for (const k in pools) pools[k].flush();
}

// ------------------------------------------------------------------ 栈：一摞东西（主角背上、桌上、鱼框、钱堆……）
// base() → [x, y, z, ry]；第 i 层 = 底 + 层距 × i，再加上整摞的晃动（sway：[dx, dz]，顶上晃得最多）
export class Stack {
  constructor(base, gap, { cols = null, sway = null } = {}) { this.base = base; this.gap = gap; this.items = []; this.cols = cols; this.sway = sway; }
  get n() { return this.items.length; }
  slot(i) {
    return () => {
      const b = this.base();
      let x = b[0], y = b[1], z = b[2], k = i;
      if (this.cols) { const c = i % this.cols.length; k = Math.floor(i / this.cols.length); x += this.cols[c][0]; z += this.cols[c][1]; }
      y += k * this.gap;
      if (this.sway) { const n = Math.max(1, this.items.length), f = (k / Math.max(6, n)) ** 1.6 * Math.min(n, 30) * this.gap * 0.55; x += this.sway[0] * f; z += this.sway[1] * f; }
      return [x, y, z, b[3] || 0];
    };
  }
  topPos() { return this.slot(this.items.length)(); }
  // 物品飞进来，放在最上面
  add(it, dur = 0.3, h = 1.0, onArrive = null) { const i = this.items.length; this.items.push(it); it.goto(this.slot(i), dur, h, onArrive); return it; }
  put(it) { const i = this.items.length; this.items.push(it); it.stick(this.slot(i)); return it; }
  pop() { return this.items.pop(); }
}
