// 烘焙环境底图（在 /web/bake_env.html 里跑，源工程场景 + real57 写实投影已加载）。
// 一台远处、近正交、和成片同俯角 / 偏航的相机，分块渲出整个可玩区域：写实颜色图 + 16 位视深（B 通道标水面）。
// 用 real57 自己的分类：ENV（静止环境）投写实单帧图；HIDE_B（会动的）全部藏掉，keep 里的（冰洞里的写实水）照常画。
import { THREE, renderer, scene, camera, placeSun, BACK, TL, SS } from './core.js';
import * as RM from './k57/real57.js';

export const B = {};
const mats = (o) => (Array.isArray(o.material) ? o.material : [o.material]).filter(Boolean);
const path = (o) => { let n = ''; for (let p = o; p; p = p.parent) n = (p.name || p.type) + '/' + n; return n; };
const L = () => globalThis.REAL_LISTS;

export function describe(o) {
  const bb = new THREE.Box3().setFromObject(o); const m = mats(o)[0];
  return { path: path(o).slice(-90), inst: o.isInstancedMesh ? o.count : 0, skin: !!o.isSkinnedMesh, mat: m && (m.name || m.type), col: m && m.color && m.color.getHexString(),
    vis: o.visible, bb: bb.isEmpty() ? null : [bb.min.toArray().map((v) => +v.toFixed(2)), bb.max.toArray().map((v) => +v.toFixed(2))] };
}
export function lists() { return { env: L().ENV.map(describe), hideB: L().HIDE_B.map(describe) }; }
// 摆到第 F0 帧，藏掉会动的（keep 里的除外）和 extraHide 里的静止环境
export function stage(F0, { keep = [], extraHide = [] } = {}) {
  window.placeAt(F0); scene.updateMatrixWorld(true);
  B.F0 = F0; B.hidden = [];
  for (const o of [...L().HIDE_B, ...extraHide]) if (!keep.includes(o) && o.visible) { o.visible = false; B.hidden.push(o); }
  for (const o of keep) o.visible = true;
  B.keep = keep;
  scene.updateMatrixWorld(true);
  return B.hidden.length;
}
export const findBy = (re) => { const out = []; scene.traverse((o) => { if (o.isMesh && re.test(path(o) + '|' + mats(o).map((m) => m.name).join(','))) out.push(o); }); return out; };

// ---- 大相机：远处透视（≈ 正交），朝向 = 成片相机
const UP = new THREE.Vector3(0, 1, 0);
export const axes = () => { const F = BACK.clone().negate(), R = new THREE.Vector3().crossVectors(F, UP).normalize(), U = new THREE.Vector3().crossVectors(R, F).normalize(); return { F, R, U }; };
// pts：要框进来的世界点 [x, y, z]
export function frame({ pts, ppm, D = 3000 }) {
  const { F, R, U } = axes();
  let a = [1e9, 1e9, -1e9, -1e9];
  for (const p of pts) { const P = new THREE.Vector3(...p), u = P.dot(R), v = P.dot(U); a = [Math.min(a[0], u), Math.min(a[1], v), Math.max(a[2], u), Math.max(a[3], v)]; }
  const fullW = Math.ceil((a[2] - a[0]) * ppm / 8) * 8, fullH = Math.ceil((a[3] - a[1]) * ppm / 8) * 8;
  const Wm = fullW / ppm, Hm = fullH / ppm;
  // 注视点：(u, v) 窗口中心那条视线和 y = 0 的交点
  const cu = (a[0] + a[2]) / 2, cv = (a[1] + a[3]) / 2;
  const P0 = R.clone().multiplyScalar(cu).addScaledVector(U, cv); const Lk = P0.clone().addScaledVector(F, -P0.y / F.y);
  const fov = THREE.MathUtils.radToDeg(2 * Math.atan(Hm / 2 / D));
  B.cam = { L: Lk.toArray(), F: F.toArray(), R: R.toArray(), U: U.toArray(), D, fov, near: D - 150, far: D + 150, fullW, fullH, ppm, Wm, Hm, aspect: fullW / fullH };
  return B.cam;
}
export function setCam(x, y, w, h) {
  const c = B.cam, Lk = new THREE.Vector3(...c.L), F = new THREE.Vector3(...c.F);
  camera.position.copy(Lk).addScaledVector(F, -c.D);
  camera.up.set(0, 1, 0); camera.lookAt(Lk);
  camera.fov = c.fov; camera.aspect = c.aspect; camera.near = c.near; camera.far = c.far;
  camera.setViewOffset(c.fullW, c.fullH, x, y, w, h);
  camera.updateProjectionMatrix(); camera.updateMatrixWorld();
}
function tileCenterWorld(x, y, w, h) {
  const c = B.cam, Lk = new THREE.Vector3(...c.L), R = new THREE.Vector3(...c.R), U = new THREE.Vector3(...c.U), F = new THREE.Vector3(...c.F);
  const u = ((x + w / 2) / c.fullW - 0.5) * c.Wm, v = (0.5 - (y + h / 2) / c.fullH) * c.Hm;
  const P = Lk.clone().addScaledVector(R, u).addScaledVector(U, v); return P.addScaledVector(F, -P.y / F.y);
}

// ---- 合成着色器选单帧图 mip 时按成片相机距离算的，远处相机要改成按每米像素算
let compMat = null;
const r0 = renderer.render.bind(renderer);
renderer.render = function (s, c) { if (!compMat && s && s.material && s.material.uniforms && s.material.uniforms.tSt) compMat = s.material; return r0(s, c); };
export function patchLod() {
  if (!compMat) return 'no comp yet';
  const c = B.cam, SH = 2048, tanH = Math.tan(THREE.MathUtils.degToRad(TL.vfov) / 2);
  const re = /float lod = log2\(max\(1\.0, zr \/ zi \* [0-9.]+ \/ 1920\.0\)\);/;
  if (!re.test(compMat.fragmentShader)) return 'lod not matched';
  compMat.fragmentShader = compMat.fragmentShader.replace(re, `float lod = log2(max(1.0, ${SH}.0 / (2.0 * zi * ${tanH.toFixed(6)}) / ${(c.ppm * SS).toFixed(3)}));`);
  compMat.needsUpdate = true; return 'patched';
}
export function setDbg(v) { if (compMat) compMat.uniforms.uDbg.value = v; }

// ---- 视深 + 类别（B：0 实地、1 水面）
const DEP_VS = `#include <common>
#include <skinning_pars_vertex>
varying float vZ;
void main(){
#include <skinbase_vertex>
#include <begin_vertex>
#include <skinning_vertex>
  vec4 mv = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  mv = instanceMatrix * mv;
#endif
  mv = modelViewMatrix * mv; vZ = -mv.z; gl_Position = projectionMatrix * mv; }`;
const DEP_FS = `uniform float uK; uniform float uZ0; uniform float uZ1; varying float vZ;
void main(){ float d = clamp((vZ - uZ0) / (uZ1 - uZ0), 0.0, 1.0) * 65535.0; float hi = floor(d / 256.0); gl_FragColor = vec4(hi / 255.0, (d - hi * 256.0) / 255.0, uK, 1.0); }`;
const depMat = (k) => new THREE.ShaderMaterial({ vertexShader: DEP_VS, fragmentShader: DEP_FS, uniforms: { uK: { value: k }, uZ0: { value: B.cam.near }, uZ1: { value: B.cam.far } }, side: THREE.DoubleSide });
let rtDep = null;
export function renderDepth(x, y, w, h, waterSet) {
  if (!rtDep) rtDep = new THREE.WebGLRenderTarget(w, h, { type: THREE.UnsignedByteType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true });
  setCam(x, y, w, h);
  const env = new Set(L().ENV), mS = depMat(0), mW = depMat(1), swaps = [];
  scene.traverse((o) => {
    if (!(o.isMesh || o.isPoints || o.isLine || o.isSprite)) return;
    if (!o.visible) return;
    const m = mats(o)[0];
    const solid = (env.has(o) || B.keep.includes(o)) && o.isMesh && m && m.side !== THREE.BackSide && !o.userData.outline;
    if (!solid) { swaps.push([o, null]); o.visible = false; return; }
    swaps.push([o, o.material]); o.material = waterSet.has(o) ? mW : mS;
  });
  const bg = scene.background, fog = scene.fog, sh = renderer.shadowMap.enabled, clr = renderer.getClearColor(new THREE.Color()), ca = renderer.getClearAlpha();
  scene.background = null; scene.fog = null; renderer.shadowMap.enabled = false;
  renderer.setRenderTarget(rtDep); renderer.setClearColor(new THREE.Color(1, 1, 1), 1); renderer.clear();
  r0(scene, camera);
  const px = new Uint8Array(w * h * 4); renderer.readRenderTargetPixels(rtDep, 0, 0, w, h, px);
  renderer.setRenderTarget(null); scene.background = bg; scene.fog = fog; renderer.shadowMap.enabled = sh; renderer.setClearColor(clr, ca);
  for (const [o, m] of swaps) { if (m === null) o.visible = true; else o.material = m; }
  return px;
}
export function renderColor(x, y, w, h) {
  setCam(x, y, w, h);
  placeSun(tileCenterWorld(x, y, w, h));
  scene.updateMatrixWorld(true);
  RM.render(B.F0);
  return renderer.domElement;
}
export const save = async (cv, p, type = 'image/png', q = 0.95) => { const b = await new Promise((r) => cv.toBlob(r, type, q)); return (await fetch('/_save?p=' + p, { method: 'POST', body: b })).text(); };
// 分块：每块 1080×1920（画布按 SS 倍超采样），只留中间（margin 以内），避免泛光 / 边缘接缝
export async function bakeAll({ margin = 64, name = 'color', depth = true, water = [] } = {}) {
  const c = B.cam, TW = 1080, TH = 1920, SW = TW - 2 * margin, SH = TH - 2 * margin;
  const big = document.createElement('canvas'); big.width = c.fullW; big.height = c.fullH; const g = big.getContext('2d');
  g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
  const dep = new Uint8ClampedArray(c.fullW * c.fullH * 4), wset = new Set(water);
  const tiles = []; for (let y = 0; y < c.fullH; y += SH) for (let x = 0; x < c.fullW; x += SW) tiles.push([x, y]);
  let i = 0;
  for (const [x, y] of tiles) {
    const ox = x - margin, oy = y - margin;
    const cv = renderColor(ox, oy, TW, TH);
    g.drawImage(cv, margin * SS, margin * SS, SW * SS, SH * SS, x, y, SW, SH);
    if (depth) {
      const px = renderDepth(ox, oy, TW, TH, wset);
      for (let yy = 0; yy < SH; yy++) {
        const by = y + yy; if (by >= c.fullH) break; const sy = TH - 1 - (margin + yy);
        for (let xx = 0; xx < SW; xx++) { const bx = x + xx; if (bx >= c.fullW) break; const s = (sy * TW + margin + xx) * 4, d = (by * c.fullW + bx) * 4; dep[d] = px[s]; dep[d + 1] = px[s + 1]; dep[d + 2] = px[s + 2]; dep[d + 3] = 255; }
      }
    }
    i++; console.log('tile ' + i + ' / ' + tiles.length);
    await new Promise((r) => setTimeout(r, 0));
  }
  camera.clearViewOffset();
  const out = { color: await save(big, 'env/' + name + '.png') };
  if (depth) {
    const cv = document.createElement('canvas'); cv.width = c.fullW; cv.height = c.fullH; cv.getContext('2d').putImageData(new ImageData(dep, c.fullW, c.fullH), 0, 0);
    out.dep = await save(cv, 'env/depth.png');
    out.meta = await (await fetch('/_save?p=env/meta.json', { method: 'POST', body: JSON.stringify(B.cam, null, 1) })).text();
  }
  return out;
}
window.BK = { B, describe, lists, stage, findBy, frame, setCam, patchLod, setDbg, renderDepth, renderColor, bakeAll, axes, save };
