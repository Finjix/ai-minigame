// 柜台外的人群：成片里一大片红帽小人端着盘子挤着要肉，一直在举盘子抗议（源工程 Q版小人「拿盘子抗议」「拿盘子待机」）。
// 几百人不能都上骨骼动画：启动时把两个动作各烘成几帧静态姿势（CPU 蒙皮），每帧按每个人自己的相位把人分到对应帧的实例化网格里画
// （瀑布捞鱼 crowdacts.js 的做法；「人群里每个人都要动」）。前排排队的人另外用骨骼动画（game.js）。
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { scene, realLook } from './world.js';
import { L } from './config.js';
import { hash } from '../../../shared/playable/util.js';

// 一个动作烘成 n 帧：每帧一个几何（两组：身体、盘子）
function bakeFrames(P, clip, n) {
  const root = SkeletonUtils.clone(P.scene), mixer = new THREE.AnimationMixer(root), act = mixer.clipAction(P.clips[clip]); act.play();
  const meshes = []; root.traverse((o) => { if (o.isSkinnedMesh) meshes.push(o); });
  const dur = P.clips[clip].duration, out = [], v = new THREE.Vector3(), nv = new THREE.Vector4(), m3 = new THREE.Matrix3();
  for (let f = 0; f < n; f++) {
    mixer.setTime(dur * f / n); root.updateMatrixWorld(true);
    const pos = [], nor = [], uv = [], idx = [], groups = []; let base = 0;
    for (const sm of meshes) {
      sm.skeleton.update();
      const g = sm.geometry, cnt = g.attributes.position.count, ix = g.index;
      m3.getNormalMatrix(sm.matrixWorld);
      for (let i = 0; i < cnt; i++) {
        sm.getVertexPosition(i, v); v.applyMatrix4(sm.matrixWorld); pos.push(v.x * P.s + P.off[0], v.y * P.s + P.off[1], v.z * P.s + P.off[2]);
        nv.set(g.attributes.normal.getX(i), g.attributes.normal.getY(i), g.attributes.normal.getZ(i), 0); sm.applyBoneTransform(i, nv);
        v.set(nv.x, nv.y, nv.z).applyMatrix3(m3).normalize(); nor.push(v.x, v.y, v.z);
        uv.push(g.attributes.uv.getX(i), g.attributes.uv.getY(i));
      }
      const grs = g.groups.length ? g.groups : [{ start: 0, count: ix ? ix.count : cnt, materialIndex: 0 }];
      const mats = Array.isArray(sm.material) ? sm.material : [sm.material];
      for (const gr of grs) { const st = idx.length; for (let i = gr.start; i < gr.start + gr.count; i++) idx.push((ix ? ix.getX(i) : i) + base); groups.push({ start: st, count: gr.count, name: mats[gr.materialIndex].name }); }
      base += cnt;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx);
    out.push({ geo, groups });
  }
  return out;
}

export const crowd = { list: [], meshes: [], heads: [] };
export function buildCrowd(P, tex, avoid) {
  const body = realLook(new THREE.MeshLambertMaterial({ map: tex.custBody }), { k: 1.12, sat: 1.05 }), plate = realLook(new THREE.MeshLambertMaterial({ map: tex.custPlate, color: 0xb4b8c2 }), { k: 1.0 });   // 盘子：源工程按原片 12 秒取色 (186,189,200)
  const ACTS = [['protest', 8, 1.0], ['idle', 4, 0.0]];
  const frames = [];
  for (const [clip, n] of ACTS) for (const f of bakeFrames(P, clip, n)) {
    f.geo.clearGroups(); for (const g of f.groups) f.geo.addGroup(g.start, g.count, /门框/.test(g.name) ? 1 : 0);
    frames.push({ clip, geo: f.geo });
  }
  // 站位：抖动网格（0.7 米左右），离排队位、木桩、格子栅栏留开
  const C = L.crowd, pts = [];
  let id = 0;
  for (let z = C.z1, row = 0; z > C.z0; z -= 0.66, row++) for (let x = C.x0; x < C.x1; x += 0.74) {
    id++;
    const px = x + (hash(id * 1.7) - 0.5) * 0.36 + (row % 2) * 0.37, pz = z + (hash(id * 3.1) - 0.5) * 0.3;
    if (px < C.x0 + 0.1 || px > C.x1) continue;
    if (avoid.some(([ax, az]) => Math.hypot(ax - px, az - pz) < 0.62)) continue;
    pts.push([px, pz]);
  }
  const n = pts.length;
  frames.forEach((f) => { const im = new THREE.InstancedMesh(f.geo, [body, plate], n); im.castShadow = true; im.frustumCulled = false; im.count = 0; scene.add(im); crowd.meshes.push(im); f.im = im; });
  pts.forEach(([x, z], i) => {
    const tb = Math.abs(x - L.counters[0].c[0]) < Math.abs(x - L.counters[1].c[0]) ? L.counters[0].c : L.counters[1].c;
    const yaw = Math.atan2(tb[0] - x, tb[1] - z) + 0.5 + (hash(i * 4.1) - 0.5) * 0.35;   // 源工程 CYAW7：整体往右转 0.5，盘子侧过来、脸露出来
    const act = hash(i * 9.1 + 0.37) < 0.8 ? 0 : 1;
    crowd.list.push({ x, z, yaw, s: 0.86 + hash(i * 5.3) * 0.06, act, ph: hash(i * 6.7), sp: 0.85 + hash(i * 7.9) * 0.35, hidden: false });
    crowd.heads.push([x, 1.2, z]);
  });
  crowd.frames = frames; crowd.acts = ACTS;
  return crowd;
}
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _y = new THREE.Vector3(0, 1, 0);
export function updateCrowd(t) {
  const F = crowd.frames; if (!F) return;
  for (const f of F) f.im.count = 0;
  const off = [0, 8];
  for (const c of crowd.list) {
    if (c.hidden) continue;
    const [, n, dur] = crowd.acts[c.act];
    const d = c.act === 0 ? 1.15 / c.sp : 2.2;
    const fi = off[c.act] + Math.floor((((t / d + c.ph) % 1) + 1) % 1 * n);
    const im = F[fi].im;
    _q.setFromAxisAngle(_y, c.yaw); _p.set(c.x, 0, c.z); _s.setScalar(c.s); _m.compose(_p, _q, _s);
    im.setMatrixAt(im.count++, _m);
    void dur;
  }
  for (const f of F) f.im.instanceMatrix.needsUpdate = true;
}
