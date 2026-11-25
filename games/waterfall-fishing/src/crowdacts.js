// 后排人群的动作：成片里后面的人也一直在举手抗议、招手催、双手举起、跺脚，不是干站着。
// 人群是一个实例化网格（静态站姿，着色器里轻微晃），几百个人不能都用骨骼动画。做法：
//   启动时用顾客的骨骼模型把这几个动作各烘成 NF 帧静态姿势（idle + custactions.js 叠的骨骼旋转，CPU 上蒙皮出顶点和法线），
//   每帧给每个人排程；轮到做动作的人从静态人群里藏起来（矩阵缩成 0），放到「这个动作、这一帧」的实例化网格里画，做完放回去。
import * as THREE from 'three';
import { makeChar } from './chars.js';
import { ACTIONS, applyAction, undoAction, rootOffset } from './custactions.js';
import { scene, addCaster, realLook } from './world.js';

const ACTS = ['raise', 'wave', 'bothUp', 'stomp', 'raise', 'bothUp'];   // 抽签用（举手、双手举起最看得见，多抽一点）
const NF = 10;   // 每个动作烘几帧（每帧一个实例化网格；人群离得远，10 帧够顺）
const _v = new THREE.Vector3(), _n = new THREE.Vector4(), _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0), _c = new THREE.Color();

// 当前姿势下把顾客模型蒙皮成一个静态几何体（角色空间：脚底在原点、朝 +z，米），身体、眼睛两组材质
function bakePose(c) {
  c.obj.updateMatrixWorld(true);
  const parts = [];
  c.inner.traverse((o) => { if (o.isSkinnedMesh) parts.push(o); });
  const pos = [], nor = [], uv = [], idx = [], groups = [];
  for (const mi of [0, 1]) {   // 0 身体、1 眼睛
    const start = idx.length;
    for (const o of parts) {
      o.skeleton.update();
      const g = o.geometry, mats = Array.isArray(o.material) ? o.material : [o.material];
      const isEye = (m) => (m.map && m.map === c._eyeMap) || /eye/i.test(m.name || '');
      const grs = g.groups.length ? g.groups : [{ start: 0, count: g.index ? g.index.count : g.attributes.position.count, materialIndex: 0 }];
      const use = grs.filter((gr) => (isEye(mats[gr.materialIndex] || mats[0]) ? 1 : 0) === mi);
      if (!use.length) continue;
      const base = pos.length / 3, A = g.attributes, n = A.position.count;
      for (let i = 0; i < n; i++) {
        o.getVertexPosition(i, _v); _v.applyMatrix4(o.matrixWorld); pos.push(_v.x, _v.y, _v.z);
        _n.set(A.normal.getX(i), A.normal.getY(i), A.normal.getZ(i), 0); o.applyBoneTransform(i, _n);
        _v.set(_n.x, _n.y, _n.z).transformDirection(o.matrixWorld); nor.push(_v.x, _v.y, _v.z);
        uv.push(A.uv.getX(i), A.uv.getY(i));
      }
      for (const gr of use) for (let k = gr.start; k < gr.start + gr.count; k++) idx.push(base + (g.index ? g.index.getX(k) : k));
    }
    groups.push([start, idx.length - start, mi]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(pos.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(idx, 1) : new THREE.Uint16BufferAttribute(idx, 1));
  for (const [s, n, m] of groups) if (n) geo.addGroup(s, n, m);
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);   // 实例化网格 + 不裁剪，包围球给大就行
  return geo;
}

let C = null, meshes = {}, ppl = [], base0 = [];
export function buildCrowdActs(P, tex, crowd) {
  C = crowd;
  const c = makeChar(P.cust, P.custTex, { cast: false }); c._eyeMap = tex.custEye;
  c.play('idle', 0);
  const mats = [tex.cust, tex.custEye].map((map) => realLook(new THREE.MeshLambertMaterial({ map })));
  for (const a of new Set(ACTS)) {
    const D = ACTIONS[a].D; meshes[a] = [];
    for (let f = 0; f < NF; f++) {
      const u = f / (NF - 1);
      undoAction(c); c.mixer.setTime(u * D); applyAction(c, a, u, 1);
      const m = new THREE.InstancedMesh(bakePose(c), mats, C.n);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.count = 0; m.visible = false; m.castShadow = true; m.frustumCulled = false;
      m.setColorAt(0, _c.setRGB(1, 1, 1));
      scene.add(m); addCaster(m); meshes[a].push(m);
    }
  }
  undoAction(c);
  // 每个人的站位（静态人群的实例矩阵、颜色）和排程：动作之间停 1.5–4s（原工程中后排的节奏）
  for (let i = 0; i < C.n; i++) {
    const m = new THREE.Matrix4(); C.mesh.getMatrixAt(i, m); base0.push(m);
    const col = new THREE.Color(); C.mesh.getColorAt(i, col);
    ppl.push({ s: null, next: Math.random() * 4, col, hidden: false });
  }
}

const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
export function updateCrowdActs(t) {
  if (!C) return;
  for (const a in meshes) for (const m of meshes[a]) m.count = 0;
  let dirty = false;
  for (let i = 0; i < ppl.length; i++) {
    const p = ppl[i];
    if (!p.s && t >= p.next) { const a = ACTS[Math.floor(Math.random() * ACTS.length)], sp = 0.85 + 0.3 * Math.random(); p.s = { a, t0: t, t1: t + ACTIONS[a].D / sp }; }
    if (p.s && t >= p.s.t1) { p.s = null; p.next = t + 1.5 + 2.5 * Math.random(); }
    const on = !!p.s;
    if (on !== p.hidden) { C.mesh.setMatrixAt(i, on ? ZERO : base0[i]); p.hidden = on; dirty = true; }
    if (!on) continue;
    const u = (t - p.s.t0) / (p.s.t1 - p.s.t0), f = Math.min(NF - 1, Math.round(u * (NF - 1))), m = meshes[p.s.a][f];
    base0[i].decompose(_p, _q, _s);
    const ro = rootOffset(p.s.a, u);
    if (ro) { _v.set(ro[0], ro[1], ro[2]).multiply(_s).applyQuaternion(_q); _p.add(_v); }
    _m.compose(_p, _q, _s);
    const k = m.count++; m.setMatrixAt(k, _m); m.setColorAt(k, p.col);
  }
  if (dirty) C.mesh.instanceMatrix.needsUpdate = true;
  for (const a in meshes) for (const m of meshes[a]) { m.visible = m.count > 0; if (m.count) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; } }
}
