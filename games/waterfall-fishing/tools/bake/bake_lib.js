// Bake helpers, run inside /web/bake_env.html (Township V17 写实 scene loaded with ?real=1 ...).
// Produces one big near-orthographic realistic still of the static environment + depth/kind + water flow.
import { THREE, renderer, scene, camera, placeSun, BACK, SCREEN_RIGHT, TL, fps } from './core.js';
import * as RM from './real.js';

export const B = {};
const wvis = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
const hashArr = (a, n) => { if (!a || !n) return 0; let s = 0; const st = Math.max(1, Math.floor(n / 512)); for (let i = 0; i < n; i += st) s += a[i] * ((i % 97) + 1); return +s.toFixed(3); };
const sig = (o) => {
  let s = o.matrixWorld.elements.map((v) => v.toFixed(3)).join(',') + '|' + (wvis(o) ? 1 : 0);
  if (o.isInstancedMesh) s += '|i' + o.count + ':' + hashArr(o.instanceMatrix.array, o.count * 16);
  if (o.isSkinnedMesh) s += '|skin';
  return s;
};
const mats = (o) => (Array.isArray(o.material) ? o.material : [o.material]).filter(Boolean);
const isDecal = (m) => m.isMeshBasicMaterial && m.transparent && m.map && m.depthWrite === false;
const shaderAnim = (o) => { const g = o.geometry && o.geometry.attributes; if (g && (g.position2 || g.aVar || g.aPart)) return true;
  return mats(o).some((m) => { try { return /^cust-/.test(m.customProgramCacheKey ? m.customProgramCacheKey() : ''); } catch { return false; } }); };

// ---- classify: keep = static env at frame F0 (+ water); everything else hidden while baking
export function classify(F0 = 0, step = 30) {
  const objs = []; scene.traverse((o) => { if (o.isMesh || o.isPoints || o.isLine || o.isSprite) objs.push(o); });
  const trn = new Map(), last = new Map(), vis0 = new Map();
  for (let n = 0; n < TL.frames; n += step) {
    window.placeAt(n); scene.updateMatrixWorld(true);
    for (const o of objs) { const k = sig(o); if (last.has(o) && last.get(o) !== k) trn.set(o, (trn.get(o) || 0) + 1); last.set(o, k); }
  }
  window.placeAt(F0); scene.updateMatrixWorld(true);
  for (const o of objs) vis0.set(o, wvis(o));
  const keep = [], hide = [], info = [];
  for (const o of objs) {
    const m = mats(o)[0], t = trn.get(o) || 0, wt = o.userData.water;
    let k;
    if (wt === 'river' || wt === 'pond') k = 'water';
    else if (wt === 'fx' || o.isSprite || o.isPoints || o.isLine || o.userData.overlay) k = 'hide';
    else if (!m || m.side === THREE.BackSide || m.colorWrite === false) k = 'hide';
    else if (isDecal(m)) k = 'hide';
    else if (o.isSkinnedMesh || shaderAnim(o)) k = 'hide';
    else if (t === 0) k = m.transparent ? 'keepfx' : 'env';
    else k = 'moved';
    if (!vis0.get(o)) k = k === 'moved' ? 'moved' : 'invisible';
    (k === 'env' || k === 'water' || k === 'keepfx') ? keep.push(o) : hide.push(o);
    if (k === 'moved') info.push({ name: o.name, parent: o.parent && o.parent.name, t, vis0: vis0.get(o), inst: !!o.isInstancedMesh, tri: o.geometry && o.geometry.index ? o.geometry.index.count / 3 : 0 });
  }
  B.keep = keep; B.hide = hide; B.objs = objs; B.F0 = F0; B.trn = trn; B.vis0 = vis0;
  return { keep: keep.length, hide: hide.length, moved: info };
}
export function describe(o) {
  const bb = new THREE.Box3().setFromObject(o); const m = mats(o)[0];
  return { name: o.name, par: o.parent && o.parent.name, t: B.trn.get(o) || 0, v0: B.vis0.get(o), inst: o.isInstancedMesh ? o.count : 0, skin: !!o.isSkinnedMesh,
    mat: m && m.type, tr: m && m.transparent, col: m && m.color && m.color.getHexString(), map: !!(m && m.map), bb: bb.isEmpty() ? null : [bb.min.toArray().map((v) => +v.toFixed(2)), bb.max.toArray().map((v) => +v.toFixed(2))] };
}
export function applyHide(extraKeep = []) {
  window.placeAt(B.F0);
  for (const o of B.hide) if (!extraKeep.includes(o)) o.visible = false;
  for (const o of extraKeep) o.visible = true;
  scene.updateMatrixWorld(true);
}

// ---- big camera: far perspective (≈ orthographic), same orientation as the film camera
const UP = new THREE.Vector3(0, 1, 0);
export function frame({ center, uMin, uMax, vMin, vMax, ppm, D = 3000 }) {
  const C = new THREE.Vector3(center[0], 0, center[1]);
  const F = BACK.clone().negate();
  const R = new THREE.Vector3().crossVectors(F, UP).normalize();
  const U = new THREE.Vector3().crossVectors(R, F).normalize();
  // shift the look point so the [uMin,uMax]x[vMin,vMax] window is centered
  const cu = (uMin + uMax) / 2, cv = (vMin + vMax) / 2;
  const L = C.clone().addScaledVector(R, cu).addScaledVector(U, cv);
  const Wm = uMax - uMin, Hm = vMax - vMin;
  const fullW = Math.ceil(Wm * ppm / 8) * 8, fullH = Math.ceil(Hm * ppm / 8) * 8;
  const Hm2 = fullH / ppm, Wm2 = fullW / ppm;
  const fov = THREE.MathUtils.radToDeg(2 * Math.atan(Hm2 / 2 / D));
  B.cam = { C: C.toArray(), L: L.toArray(), F: F.toArray(), R: R.toArray(), U: U.toArray(), D, fov, near: D - 150, far: D + 150, fullW, fullH, ppm, Wm: Wm2, Hm: Hm2, aspect: fullW / fullH };
  return B.cam;
}
export function setCam(x, y, w, h) {
  const c = B.cam;
  const L = new THREE.Vector3(...c.L), F = new THREE.Vector3(...c.F);
  camera.position.copy(L).addScaledVector(F, -c.D);
  camera.up.set(0, 1, 0); camera.lookAt(L);
  camera.fov = c.fov; camera.aspect = c.aspect; camera.near = c.near; camera.far = c.far;
  camera.setViewOffset(c.fullW, c.fullH, x, y, w, h);
  camera.updateProjectionMatrix(); camera.updateMatrixWorld();
}
export function resetCam() { camera.clearViewOffset(); camera.near = 40; camera.far = 220; camera.fov = TL.vfov; camera.aspect = TL.W / TL.H; camera.updateProjectionMatrix(); }

// world point on ground for the center of a tile (for sun shadow centering)
function tileCenterWorld(x, y, w, h) {
  const c = B.cam, L = new THREE.Vector3(...c.L), R = new THREE.Vector3(...c.R), U = new THREE.Vector3(...c.U), F = new THREE.Vector3(...c.F);
  const u = ((x + w / 2) / c.fullW - 0.5) * c.Wm, v = (0.5 - (y + h / 2) / c.fullH) * c.Hm;
  const P = L.clone().addScaledVector(R, u).addScaledVector(U, v);   // on plane through L ⟂ F; walk along F to y=0
  const t = -P.y / F.y; return P.addScaledVector(F, t);
}

// ---- patch the compositor's still-mip selection for the far camera (it assumed the film camera distance)
let compMat = null;
const r0 = renderer.render.bind(renderer);
renderer.render = function (s, c) {
  if (!compMat && s && s.material && s.material.uniforms && s.material.uniforms.tSt) compMat = s.material;
  return r0(s, c);
};
export function patchLod() {
  if (!compMat) return 'no comp yet';
  const c = B.cam, SH = 2048, tanH = Math.tan(THREE.MathUtils.degToRad(TL.vfov) / 2);
  const re = /float lod = log2\(max\(1\.0, zr \/ zi \* [0-9.]+\)\);/;
  if (!re.test(compMat.fragmentShader)) return 'lod not matched';
  compMat.fragmentShader = compMat.fragmentShader.replace(re, `float lod = log2(max(1.0, ${SH}.0 / (2.0 * zi * ${tanH.toFixed(6)}) / ${c.ppm.toFixed(3)}));`);
  compMat.needsUpdate = true; return 'patched';
}

// ---- depth/kind + flow materials
const DEP_VS = `varying float vZ;
void main(){ vec4 mv = vec4(position, 1.0);
#ifdef USE_INSTANCING
mv = instanceMatrix * mv;
#endif
mv = modelViewMatrix * mv; vZ = -mv.z; gl_Position = projectionMatrix * mv; }`;
const DEP_FS = `uniform float uK; uniform float uZ0; uniform float uZ1; varying float vZ;
void main(){ float d = clamp((vZ - uZ0) / (uZ1 - uZ0), 0.0, 1.0) * 65535.0; float hi = floor(d / 256.0); gl_FragColor = vec4(hi / 255.0, (d - hi * 256.0) / 255.0, uK, 1.0); }`;
const FLOW_VS = `attribute vec3 aFlowW; varying vec2 vF;
void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vF = (modelViewMatrix * vec4(aFlowW, 0.0)).xy; gl_Position = projectionMatrix * mv; }`;
const FLOW_FS = `varying vec2 vF; void main(){ gl_FragColor = vec4(clamp(vF / 6.0 * 0.5 + 0.5, 0.0, 1.0), 1.0, 1.0); }`;
function depMat(k, inst) {
  const c = B.cam;
  return new THREE.ShaderMaterial({ vertexShader: DEP_VS, fragmentShader: DEP_FS, uniforms: { uK: { value: k }, uZ0: { value: c.near }, uZ1: { value: c.far } }, side: THREE.DoubleSide });
}
let rtDep = null;
function readRT(rt, w, h) { const buf = new Uint8Array(w * h * 4); renderer.readRenderTargetPixels(rt, 0, 0, w, h, buf); return buf; }
export function renderAux(mode, x, y, w, h) {   // mode 'dep' | 'flow'
  if (!rtDep) rtDep = new THREE.WebGLRenderTarget(1080, 1920, { type: THREE.UnsignedByteType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true });
  setCam(x, y, w, h);
  const swaps = [];
  const mSolid = depMat(0, false), mWater = depMat(1, false), mFx = depMat(0.5, false);
  const mFlow = new THREE.ShaderMaterial({ vertexShader: FLOW_VS, fragmentShader: FLOW_FS, side: THREE.DoubleSide });
  for (const o of B.keep) {
    if (!o.visible) continue;
    const wt = o.userData.water === 'river' || o.userData.water === 'pond';
    const m0 = mats(o)[0];
    if (mode === 'flow') {
      if (wt && o.geometry.attributes.aFlowW) { swaps.push([o, o.material]); o.material = mFlow; } else { swaps.push([o, null]); o.visible = false; }
      continue;
    }
    if (m0 && m0.transparent && !wt) { swaps.push([o, null]); o.visible = false; continue; }   // keepfx: color only
    swaps.push([o, o.material]); o.material = wt ? mWater : mSolid;
  }
  const bg = scene.background, fog = scene.fog, sh = renderer.shadowMap.enabled, clr = renderer.getClearColor(new THREE.Color()), ca = renderer.getClearAlpha();
  scene.background = null; scene.fog = null; renderer.shadowMap.enabled = false;
  renderer.setRenderTarget(rtDep); renderer.setClearColor(mode === 'flow' ? new THREE.Color(0.5, 0.5, 0) : new THREE.Color(1, 1, 1), mode === 'flow' ? 0 : 1); renderer.clear();
  r0(scene, camera);
  const px = readRT(rtDep, w, h);
  renderer.setRenderTarget(null); scene.background = bg; scene.fog = fog; renderer.shadowMap.enabled = sh; renderer.setClearColor(clr, ca);
  for (const [o, m] of swaps) { if (m === null) o.visible = true; else o.material = m; }
  return px;   // bottom-up rows
}

export function renderColor(x, y, w, h) {
  setCam(x, y, w, h);
  const P = tileCenterWorld(x, y, w, h);
  placeSun(P);
  scene.updateMatrixWorld(true);
  RM.render(B.F0);
  return renderer.domElement;
}

// ---- tiled bake into big canvases; tiles are 1080x1920 renders, we keep the inner part (margin) to avoid bloom/edge seams
export async function bakeAll({ margin = 64, onlyAux = false, colorName = 'color', colorOnly = false } = {}) {
  const c = B.cam, TW = 1080, TH = 1920, SW = TW - 2 * margin, SH = TH - 2 * margin;
  const big = document.createElement('canvas'); big.width = c.fullW; big.height = c.fullH; const g = big.getContext('2d');
  const dep = new Uint8ClampedArray(c.fullW * c.fullH * 4), flow = new Uint8ClampedArray(c.fullW * c.fullH * 4);
  const tiles = [];
  for (let y = 0; y < c.fullH; y += SH) for (let x = 0; x < c.fullW; x += SW) tiles.push([x, y]);
  let i = 0;
  for (const [x, y] of tiles) {
    const ox = x - margin, oy = y - margin;
    if (!onlyAux) { const cv = renderColor(ox, oy, TW, TH); g.drawImage(cv, margin, margin, SW, SH, x, y, SW, SH); }
    if (!colorOnly) for (const [mode, dst] of [['dep', dep], ['flow', flow]]) {
      const px = renderAux(mode, ox, oy, TW, TH);
      for (let yy = 0; yy < SH; yy++) {
        const by = y + yy; if (by >= c.fullH) break;
        const sy = TH - 1 - (margin + yy);   // RT rows are bottom-up
        for (let xx = 0; xx < SW; xx++) {
          const bx = x + xx; if (bx >= c.fullW) break;
          const s = (sy * TW + margin + xx) * 4, d = (by * c.fullW + bx) * 4;
          dst[d] = px[s]; dst[d + 1] = px[s + 1]; dst[d + 2] = px[s + 2]; dst[d + 3] = 255;
        }
      }
    }
    i++; console.log('tile', i, '/', tiles.length);
    await new Promise((r) => setTimeout(r, 0));
  }
  resetCam();
  const toPng = (data) => { const cv = document.createElement('canvas'); cv.width = c.fullW; cv.height = c.fullH; cv.getContext('2d').putImageData(new ImageData(data, c.fullW, c.fullH), 0, 0); return cv; };
  const save = async (cv, p, type = 'image/png') => { const b = await new Promise((r) => cv.toBlob(r, type, 0.95)); const res = await fetch('/_save?p=' + p, { method: 'POST', body: b }); return res.text(); };
  const out = {};
  if (!onlyAux) out.color = await save(big, 'env/' + colorName + '.png');
  if (colorOnly) { resetCam(); return out; }
  out.dep = await save(toPng(dep), 'env/depth.png');
  out.flow = await save(toPng(flow), 'env/flow.png');
  out.meta = await (await fetch('/_save?p=env/meta.json', { method: 'POST', body: JSON.stringify(B.cam, null, 1) })).text();
  return out;
}

// helpers for planning coverage
export function uvOf(x, y, z) {
  const c = B.cam || {}, F = BACK.clone().negate(), R = new THREE.Vector3().crossVectors(F, UP).normalize(), U = new THREE.Vector3().crossVectors(R, F).normalize();
  const P = new THREE.Vector3(x, y, z); return [P.dot(R), P.dot(U)];
}
export function filmCamUV() {
  const F = BACK.clone().negate(), R = new THREE.Vector3().crossVectors(F, UP).normalize(), U = new THREE.Vector3().crossVectors(R, F).normalize();
  let a = [1e9, 1e9, -1e9, -1e9];
  for (const [x, z] of window.TL.cam) { const P = new THREE.Vector3(x, 0, z), u = P.dot(R), v = P.dot(U); a = [Math.min(a[0], u), Math.min(a[1], v), Math.max(a[2], u), Math.max(a[3], v)]; }
  return a;
}
window.BK = { B, describe, classify, applyHide, frame, setCam, resetCam, patchLod, renderAux, renderColor, bakeAll, uvOf, filmCamUV };
