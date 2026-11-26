// 渲染世界（做法和瀑布捞鱼一样）：
// · 环境 = 从源工程写实投影版（web/k57/real57.js）烘出来的一张大图：远处近正交、和成片同俯角 45.37°、偏航 24.99° 的相机拍的。
//   一个全屏三角形把它画出来，每个像素按烘焙时存的视深写 gl_FragDepth —— 人、木头、肉、钞票和柜台、木桩、烤炉之间的前后遮挡逐像素正确。
// · 游戏相机就是烘焙相机本身，只用 setViewOffset 取主角周围那一块。
// · 冰洞里的水（深度图 B 通道标出来）：细节轻轻晃，巨木那儿往外走一圈圈波纹。
// · 会动的东西投影：太阳方向的正交阴影图，只画会动的东西，环境着色器按世界坐标查。
// · 会动的东西统一过一层写实调色，环境和人物同一层颗粒、暗角。
import * as THREE from 'three';
import { getMainCanvas, sysInfo } from '../../../shared/playable/platform.js';

export let renderer, scene, camera, meta, W = 1080, H = 1920, canvas;
export const U = {
  uRes: { value: new THREE.Vector2(1, 1) },
  uTime: { value: 0 },
  uVig: { value: 0.14 },
  uMS: { value: 1.0 }, uMK: { value: 1.0 }, uMT: { value: new THREE.Vector3(1.0, 1.0, 1.0) },
  uLog: { value: new THREE.Vector3(-7.5, -3.68, 1.85) },   // 巨木 x、z、半径（水面波纹）
};
// 太阳：源工程 core.js V06（方位 14°、高度角 72°）
const SUN_AZ = THREE.MathUtils.degToRad(14), SUN_EL = THREE.MathUtils.degToRad(72);
export const SUN = new THREE.Vector3(Math.cos(SUN_EL) * Math.cos(SUN_AZ), Math.sin(SUN_EL), Math.cos(SUN_EL) * Math.sin(SUN_AZ)).normalize();

export function initRenderer() {
  canvas = getMainCanvas();
  const si = sysInfo();
  const dpr = Math.min(si.dpr, 2);
  canvas.width = Math.round(si.w * dpr); canvas.height = Math.round(si.h * dpr);
  const attrs = { alpha: false, depth: true, stencil: false, antialias: true, premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'high-performance' };
  const gl = canvas.getContext('webgl2', attrs);
  if (!gl) throw new Error('WebGL2 不可用');
  renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: true });
  renderer.setPixelRatio(1);
  renderer.setSize(canvas.width, canvas.height, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0xd9dde4, 1);
  renderer.autoClear = false;
  W = 1080; H = Math.round(1080 * canvas.height / canvas.width);
  U.uRes.value.set(canvas.width, canvas.height);
  scene = new THREE.Scene();
  return { renderer, W, H };
}

// ------------------------------------------------------------------ 相机
let FULL = null;
export const view = { cx: 0, cy: 0, w: 0, h: 0 };
export function initCamera(m) {
  meta = m;
  const Lk = new THREE.Vector3(...m.L), F = new THREE.Vector3(...m.F);
  camera = new THREE.PerspectiveCamera(m.fov, m.aspect, m.near, m.far);
  camera.position.copy(Lk).addScaledVector(F, -m.D);
  camera.up.set(0, 1, 0); camera.lookAt(Lk); camera.updateMatrixWorld();
  FULL = camera.clone(); FULL.updateProjectionMatrix(); FULL.updateMatrixWorld();
}
const _v = new THREE.Vector3();
export function bigPx(x, y, z, out = [0, 0]) {
  _v.set(x, y, z).project(FULL);
  out[0] = (_v.x * 0.5 + 0.5) * meta.fullW; out[1] = (0.5 - _v.y * 0.5) * meta.fullH; return out;
}
export const VIEW_M = 10.6;   // 画面横向看多少米（成片 6–26 秒的镜头约 10 米宽）
// 镜头只在底图拍到写实单帧图的那块里取景（meta.clamp：x0, y0, x1, y1 像素，fixenv.py 量的）
export function setView(px, py, meters) {
  const c = meta.clamp || [0, 0, meta.fullW, meta.fullH];
  let w = meters * meta.ppm, h = w * canvas.height / canvas.width;
  const k = Math.min(1, (c[2] - c[0]) / w, (c[3] - c[1]) / h); w *= k; h *= k;   // 太高的屏幕：横向看少一点，不露出底图外面
  let x = px - w / 2, y = py - h / 2;
  x = Math.max(c[0], Math.min(c[2] - w, x)); y = Math.max(c[1], Math.min(c[3] - h, y));
  view.cx = x + w / 2; view.cy = y + h / 2; view.w = w; view.h = h;
  camera.setViewOffset(meta.fullW, meta.fullH, x, y, w, h);
  camera.updateProjectionMatrix();
  envMat.uniforms.uWin.value.set(x / meta.fullW, y / meta.fullH, w / meta.fullW, h / meta.fullH);
}
export function toUI(x, y, z, out = [0, 0]) {
  _v.set(x, y, z).project(camera);
  out[0] = (_v.x * 0.5 + 0.5) * W; out[1] = (0.5 - _v.y * 0.5) * H; return out;
}

// ------------------------------------------------------------------ 环境
const ENV_VS = `void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const ENV_FS = `precision highp float;
uniform sampler2D tCol; uniform sampler2D tDep; uniform sampler2D tSh;
uniform vec4 uWin; uniform vec2 uRes; uniform vec2 uNF; uniform float uTime;
uniform vec3 uCamPos; uniform vec3 uR; uniform vec3 uU; uniform vec3 uF; uniform float uWm; uniform float uHm; uniform float uD;
uniform mat4 uShVP; uniform float uShOn; uniform vec3 uShCol; uniform float uVig; uniform vec2 uBig; uniform vec3 uLog;
float hn(vec2 p){ vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hn(i), hn(i + vec2(1.0, 0.0)), f.x), mix(hn(i + vec2(0.0, 1.0)), hn(i + vec2(1.0, 1.0)), f.x), f.y); }
void main(){
  vec2 s = gl_FragCoord.xy / uRes;
  vec2 bt = vec2(uWin.x + s.x * uWin.z, uWin.y + (1.0 - s.y) * uWin.w);
  vec2 tuv = vec2(bt.x, 1.0 - bt.y);
  vec3 dp = texture2D(tDep, tuv).rgb;
  float d16 = (floor(dp.r * 255.0 + 0.5) * 256.0 + floor(dp.g * 255.0 + 0.5)) / 65535.0;
  float vz = mix(uNF.x, uNF.y, d16);
  bool water = dp.b > 0.5;
  vec2 q = vec2((bt.x - 0.5) * uWm, (0.5 - bt.y) * uHm);
  vec3 P = uCamPos + (uR * q.x + uU * q.y) * (vz / uD) + uF * vz;
  vec3 col;
  if (water) {
    // 冰洞水面：细节轻轻晃 + 巨木那儿往外走的圈纹（低频底色不动）
    vec2 rel = P.xz - uLog.xy; float r = length(rel);
    float ring = sin(r * 7.0 - uTime * 3.2) * exp(-max(r - uLog.z, 0.0) * 0.9) * smoothstep(uLog.z - 0.1, uLog.z + 0.25, r);
    vec2 wob = (vec2(vn(P.xz * 2.2 + uTime * 0.35), vn(P.zx * 2.2 - uTime * 0.3)) - 0.5) * 2.6 / uBig + normalize(rel + 1e-4) * ring * 1.4 / uBig;
    vec3 base = textureLod(tCol, tuv, 2.5).rgb, hi = texture2D(tCol, tuv + wob).rgb - textureLod(tCol, tuv + wob, 2.5).rgb;
    col = base + hi * 1.1 + vec3(0.05, 0.06, 0.07) * max(ring, 0.0);
  } else col = texture2D(tCol, tuv).rgb;
  if (uShOn > 0.5) {
    vec4 sc = uShVP * vec4(P, 1.0); vec3 sp3 = sc.xyz / sc.w * 0.5 + 0.5;
    if (sp3.x > 0.0 && sp3.x < 1.0 && sp3.y > 0.0 && sp3.y < 1.0) {
      float sh = 0.0, b = 0.004; vec2 o = vec2(1.0 / 1024.0);
      sh += step(texture2D(tSh, sp3.xy).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy + vec2(o.x, o.y) * 1.5).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy + vec2(-o.x, o.y) * 1.5).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy + vec2(o.x, -o.y) * 1.5).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy - vec2(o.x, o.y) * 1.5).r, sp3.z - b);
      sh /= 5.0;
      col *= mix(vec3(1.0), uShCol, sh * (water ? 0.5 : 1.0));
    }
  }
  vec2 d = s - 0.5; col *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d * vec2(1.0, 1.25)));
  col += (hn(gl_FragCoord.xy + floor(uTime * 30.0) * 17.13) + hn(gl_FragCoord.xy * 1.7 + 3.1) - 1.0) * 2.0 / 255.0;
  gl_FragColor = vec4(col, 1.0);
  float vzd = water ? vz + 0.6 : vz;   // 水面往下让 0.6m：巨木从水下冒上来那截照样画（巨木自己染水色）
  float zn = (uNF.y + uNF.x) / (uNF.y - uNF.x) - 2.0 * uNF.y * uNF.x / ((uNF.y - uNF.x) * vzd);
  gl_FragDepth = d16 > 0.9998 ? 1.0 : zn * 0.5 + 0.5;
}`;
export let envMat, envMesh;
export const shadow = { rt: null, cam: null, on: true };
const envScene = new THREE.Scene();
export function initEnv({ col, dep }) {
  col.colorSpace = THREE.NoColorSpace; col.generateMipmaps = true; col.minFilter = THREE.LinearMipmapLinearFilter; col.magFilter = THREE.LinearFilter; col.anisotropy = 4; col.needsUpdate = true;
  dep.colorSpace = THREE.NoColorSpace; dep.generateMipmaps = false; dep.minFilter = dep.magFilter = THREE.NearestFilter; dep.needsUpdate = true;
  shadow.rt = new THREE.WebGLRenderTarget(1024, 1024, { depthBuffer: true });
  shadow.rt.depthTexture = new THREE.DepthTexture(1024, 1024); shadow.rt.depthTexture.type = THREE.UnsignedIntType;
  shadow.cam = new THREE.OrthographicCamera(-13, 13, 13, -13, 1, 80);
  const m = meta, Lk = new THREE.Vector3(...m.L), F = new THREE.Vector3(...m.F);
  envMat = new THREE.ShaderMaterial({
    vertexShader: ENV_VS, fragmentShader: ENV_FS,
    uniforms: {
      tCol: { value: col }, tDep: { value: dep }, tSh: { value: shadow.rt.depthTexture },
      uWin: { value: new THREE.Vector4(0, 0, 1, 1) }, uRes: U.uRes, uNF: { value: new THREE.Vector2(m.near, m.far) }, uTime: U.uTime,
      uCamPos: { value: Lk.clone().addScaledVector(F, -m.D) }, uR: { value: new THREE.Vector3(...m.R) }, uU: { value: new THREE.Vector3(...m.U) }, uF: { value: F },
      uWm: { value: m.Wm }, uHm: { value: m.Hm }, uD: { value: m.D }, uBig: { value: new THREE.Vector2(m.fullW, m.fullH) },
      uShVP: { value: new THREE.Matrix4() }, uShOn: { value: 1 }, uShCol: { value: new THREE.Vector3(0.62, 0.66, 0.78) }, uVig: U.uVig, uLog: U.uLog,
    },
    depthTest: true, depthWrite: true, depthFunc: THREE.AlwaysDepth,
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  envMesh = new THREE.Mesh(g, envMat); envMesh.frustumCulled = false;
  envScene.add(envMesh);
}

// ------------------------------------------------------------------ 灯光（源工程 core.js：天光 0xedf1ff / 0xb4b4c6 1.68、太阳 0xfff6ea 1.5）
export function initLights() {
  scene.add(new THREE.HemisphereLight(0xedf1ff, 0xb4b4c6, 1.68));
  const sun = new THREE.DirectionalLight(0xfff6ea, 1.5);
  sun.position.copy(SUN).multiplyScalar(50); scene.add(sun, sun.target);
}

// ------------------------------------------------------------------ 写实调色（会动的东西）：贴图已经是源工程写实材质的固有色，这里只按成片收一点饱和、亮度 + 暗角
export function realLook(mat, { k = 1, sat = 1 } = {}) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev && prev !== THREE.Material.prototype.onBeforeCompile) prev(sh, r);
    Object.assign(sh.uniforms, { uRes: U.uRes, uVig: U.uVig, uMS: U.uMS, uMK: U.uMK, uMT: U.uMT });
    sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'uniform vec2 uRes; uniform float uVig; uniform float uMS; uniform float uMK; uniform vec3 uMT;\nvoid main() {')
      .replace('#include <opaque_fragment>', `{ float l_ = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722)); outgoingLight = mix(vec3(l_), outgoingLight, uMS * ${sat.toFixed(3)}) * uMK * uMT * ${k.toFixed(3)};
  vec2 d_ = gl_FragCoord.xy / uRes - 0.5; outgoingLight *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d_ * vec2(1.0, 1.25))); }
#include <opaque_fragment>`);
  };
  const key = mat.customProgramCacheKey ? mat.customProgramCacheKey() : '';
  mat.customProgramCacheKey = () => key + '|real' + k + '|' + sat;
  return mat;
}

// ------------------------------------------------------------------ 每帧渲染
const _c = new THREE.Vector3();
const depthMat = new THREE.MeshDepthMaterial();
export function render(focus) {
  if (shadow.on && shadow.rt) {
    const texel = 26 / 1024;
    _c.set(Math.round(focus[0] / texel) * texel, 0, Math.round(focus[1] / texel) * texel);
    shadow.cam.position.copy(_c).addScaledVector(SUN, 40); shadow.cam.lookAt(_c); shadow.cam.updateMatrixWorld(); shadow.cam.updateProjectionMatrix();
    const hidden = [];
    scene.traverseVisible((o) => { if (((o.isMesh || o.isSkinnedMesh || o.isInstancedMesh) && !o.castShadow) || o.isPoints) hidden.push(o); });
    for (const o of hidden) o.visible = false;
    scene.overrideMaterial = depthMat;
    renderer.setRenderTarget(shadow.rt); renderer.clear(); renderer.render(scene, shadow.cam);
    scene.overrideMaterial = null;
    for (const o of hidden) o.visible = true;
    renderer.setRenderTarget(null);
    envMat.uniforms.uShVP.value.multiplyMatrices(shadow.cam.projectionMatrix, shadow.cam.matrixWorldInverse);
  }
  renderer.setRenderTarget(null);
  renderer.clear();
  renderer.render(envScene, camera);
  renderer.render(scene, camera);
}
