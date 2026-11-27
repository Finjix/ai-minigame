// 渲染世界：
// · 环境 = 一张从原工程写实合成里烘出来的大图（远处近正交的固定朝向相机拍的，和成片同一个俯角、偏航），
//   一个全屏三角形把它画出来，每个像素按烘焙时存的视深写 gl_FragDepth —— 人、鱼、货和栅栏、柜台、桌子之间的前后遮挡逐像素正确。
// · 游戏相机就是烘焙相机本身，只用 setViewOffset 取主角周围那一块（平移、推拉都只改这个窗口），所以和底图严丝合缝。
// · 水面：河、瀑布的细节顺着烘出来的流向一直流（低频不动、只推细节，两相交替，和成片的做法一样）；塘面轻微晃动。
// · 会动的东西投影：太阳方向的正交阴影图，只画会动的东西，环境着色器按世界坐标查（底图里静止物体的影子本来就有）。
// · 写实做旧：会动的东西统一过一层成片里的做旧调色（降饱和、压亮度、偏暖灰），环境和人物同一层颗粒、暗角。
import * as THREE from 'three';
import { getMainCanvas, sysInfo, isWx, query } from '../../../shared/playable/platform.js';
import { WATER_Y } from './config.js';

export let renderer, scene, camera, meta, W = 1080, H = 1920, canvas;
export const U = {   // 全局共享 uniform
  uRes: { value: new THREE.Vector2(1, 1) },
  uTime: { value: 0 },
  uVig: { value: 0.12 },
  // 整体调色（用户 11-27「太暗沉太淡，调明朗一点点」）：底图和会动的东西同一套，sRGB 里做——增益、中间调伽马（< 1 提亮）、饱和度、对比。?gr=增益,伽马,饱和,对比 调
  uGr: { value: new THREE.Vector4(...((query.gr || '1.03,0.92,1.16,1.06').split(',').map(Number))) },
  uMS: { value: 0.62 }, uMK: { value: 0.85 }, uMT: { value: new THREE.Vector3(1.03, 1.0, 0.94) },
};
export const SUN = new THREE.Vector3(Math.cos(Math.PI / 3) * Math.cos(2.2602), Math.sin(Math.PI / 3), Math.cos(Math.PI / 3) * Math.sin(2.2602)).normalize();   // 方位 129.5°、高度角 60°（原工程量的）

export function initRenderer() {
  canvas = getMainCanvas();
  const si = sysInfo();
  const dpr = Math.min(si.dpr, isWx ? 2 : 2);
  canvas.width = Math.round(si.w * dpr); canvas.height = Math.round(si.h * dpr);
  const attrs = { alpha: false, depth: true, stencil: false, antialias: true, premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'high-performance' };
  const gl = canvas.getContext('webgl2', attrs);
  if (!gl) throw new Error('WebGL2 不可用');
  renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: true });
  renderer.setPixelRatio(1);
  renderer.setSize(canvas.width, canvas.height, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x2a3440, 1);
  renderer.autoClear = false;
  W = 1080; H = Math.round(1080 * canvas.height / canvas.width);
  U.uRes.value.set(canvas.width, canvas.height);
  scene = new THREE.Scene();
  return { renderer, W, H };
}

// ------------------------------------------------------------------ 相机
let FULL = null;
export const view = { cx: 0, cy: 0, w: 0, h: 0, zoom: 1 };
export function initCamera(m) {
  meta = m;
  const Lk = new THREE.Vector3(...m.L), F = new THREE.Vector3(...m.F);
  camera = new THREE.PerspectiveCamera(m.fov, m.aspect, m.near, m.far);
  camera.position.copy(Lk).addScaledVector(F, -m.D);
  camera.up.set(0, 1, 0); camera.lookAt(Lk); camera.updateMatrixWorld();
  FULL = camera.clone(); FULL.updateProjectionMatrix(); FULL.updateMatrixWorld();
  BAKE_VP.multiplyMatrices(FULL.projectionMatrix, FULL.matrixWorldInverse);
}
// 烘焙相机（整张底图）的投影：世界点 → 底图 UV（xy / w * 0.5 + 0.5，v 朝上，和 flipY 的贴图一致）
export const BAKE_VP = new THREE.Matrix4();
const _v = new THREE.Vector3();
// 世界点 → 大图像素（左上原点）
export function bigPx(x, y, z, out = [0, 0]) {
  _v.set(x, y, z).project(FULL);
  out[0] = (_v.x * 0.5 + 0.5) * meta.fullW; out[1] = (0.5 - _v.y * 0.5) * meta.fullH; return out;
}
// 镜头：看哪个世界点、横向看多少米（推拉）
export const VIEW_M = 9.6;   // 画面横向看多少米（原 11.6，往前推近约 20%）
export function setView(px, py, meters) {
  const w = meters * meta.ppm, h = w * canvas.height / canvas.width;
  let x = px - w / 2, y = py - h / 2;
  // 底边最后 70px 是成片没拍到、被图边截断的地方，镜头不往那里看
  x = Math.max(0, Math.min(meta.fullW - w, x)); y = Math.max(0, Math.min(meta.fullH - 70 - h, y));
  view.cx = x + w / 2; view.cy = y + h / 2; view.w = w; view.h = h;
  camera.setViewOffset(meta.fullW, meta.fullH, x, y, w, h);
  camera.updateProjectionMatrix();
  envMat.uniforms.uWin.value.set(x / meta.fullW, y / meta.fullH, w / meta.fullW, h / meta.fullH);
}
// 世界点 → UI 逻辑坐标（W×H）
export function toUI(x, y, z, out = [0, 0]) {
  _v.set(x, y, z).project(camera);
  out[0] = (_v.x * 0.5 + 0.5) * W; out[1] = (0.5 - _v.y * 0.5) * H; return out;
}

export const GRADE_GLSL = `vec3 grade_(vec3 c, vec4 g){ c = pow(max(c * g.x, 0.0), vec3(g.y)); float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = mix(vec3(l), c, g.z); return clamp((c - 0.5) * g.w + 0.5, 0.0, 1.0); }`;
// ------------------------------------------------------------------ 环境
const ENV_VS = `void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const ENV_FS = `precision highp float;
uniform sampler2D tCol; uniform sampler2D tDep; uniform sampler2D tFlow; uniform sampler2D tSh;
uniform vec4 uWin; uniform vec2 uRes; uniform vec2 uNF; uniform float uTime;
uniform vec3 uCamPos; uniform vec3 uR; uniform vec3 uU; uniform vec3 uF; uniform float uWm; uniform float uHm; uniform float uD;
uniform mat4 uShVP; uniform float uShOn; uniform vec3 uShCol; uniform float uVig; uniform vec2 uBig; uniform vec4 uGr;
${GRADE_GLSL}
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
  vec3 col;
  if (water) {
    vec3 fw = texture2D(tFlow, tuv).rgb;
    vec2 fl = (fw.rg * 2.0 - 1.0) * 6.0 * step(0.3, fw.b);
    vec2 fv = vec2(fl.x / uWm, fl.y / uHm);
    float sp = length(fl), T = 1.4, kd = sp * T > 0.6 ? 0.6 / (sp * T) : 1.0;
    float ph = fract(uTime / T), ph2 = fract(uTime / T + 0.5), wb = abs(ph * 2.0 - 1.0);
    vec2 wob = (vec2(vn(bt * uBig * 0.03 + uTime * 0.5), vn(bt.yx * uBig * 0.03 - uTime * 0.45)) - 0.5) * 2.2 / uBig;   // 塘面（没有流向）轻轻晃
    vec2 u1 = tuv - fv * T * ph * kd + wob, u2 = tuv - fv * T * ph2 * kd + wob;
    vec3 base = textureLod(tCol, tuv + wob * 0.5, 3.0).rgb;
    vec3 h1 = texture2D(tCol, u1).rgb - textureLod(tCol, u1, 3.0).rgb, h2 = texture2D(tCol, u2).rgb - textureLod(tCol, u2, 3.0).rgb;
    col = base + mix(h1, h2, wb) * 1.15;
  } else col = texture2D(tCol, tuv).rgb;
  // 世界坐标（烘焙相机的射线），查会动的东西的影子
  vec2 q = vec2((bt.x - 0.5) * uWm, (0.5 - bt.y) * uHm);
  vec3 P = uCamPos + (uR * q.x + uU * q.y) * (vz / uD) + uF * vz;
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
      col *= mix(vec3(1.0), uShCol, sh * (water ? 0.45 : 1.0));
    }
  }
  col = grade_(col, uGr);
  // 成片的颗粒 + 暗角
  vec2 d = s - 0.5; col *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d * vec2(1.0, 1.25)));
  col += (hn(gl_FragCoord.xy + floor(uTime * 30.0) * 17.13) + hn(gl_FragCoord.xy * 1.7 + 3.1) - 1.0) * 2.5 / 255.0;
  gl_FragColor = vec4(col, 1.0);
  float vzd = water ? vz + 0.55 : vz;   // 水面往下让 0.55m：水下的鱼、人泡在水里的那截照样画（染水色），水面以上照常判挡
  float zn = (uNF.y + uNF.x) / (uNF.y - uNF.x) - 2.0 * uNF.y * uNF.x / ((uNF.y - uNF.x) * vzd);
  gl_FragDepth = d16 > 0.9998 ? 1.0 : zn * 0.5 + 0.5;
}`;
export let envMat, envMesh;
export const shadow = { rt: null, cam: null, on: true };
export function initEnv(tex) {
  const { col, dep, flow } = tex;
  col.colorSpace = THREE.NoColorSpace; col.generateMipmaps = true; col.minFilter = THREE.LinearMipmapLinearFilter; col.magFilter = THREE.LinearFilter; col.anisotropy = 4; col.needsUpdate = true;
  dep.colorSpace = THREE.NoColorSpace; dep.generateMipmaps = false; dep.minFilter = dep.magFilter = THREE.NearestFilter; dep.needsUpdate = true;
  flow.colorSpace = THREE.NoColorSpace; flow.generateMipmaps = false; flow.minFilter = flow.magFilter = THREE.LinearFilter; flow.needsUpdate = true;
  shadow.rt = new THREE.WebGLRenderTarget(1024, 1024, { depthBuffer: true });
  shadow.rt.depthTexture = new THREE.DepthTexture(1024, 1024); shadow.rt.depthTexture.type = THREE.UnsignedIntType;
  shadow.cam = new THREE.OrthographicCamera(-13, 13, 13, -13, 1, 80);
  const m = meta, Lk = new THREE.Vector3(...m.L), F = new THREE.Vector3(...m.F);
  envMat = new THREE.ShaderMaterial({
    vertexShader: ENV_VS, fragmentShader: ENV_FS,
    uniforms: {
      tCol: { value: col }, tDep: { value: dep }, tFlow: { value: flow }, tSh: { value: shadow.rt.depthTexture },
      uWin: { value: new THREE.Vector4(0, 0, 1, 1) }, uRes: U.uRes, uNF: { value: new THREE.Vector2(m.near, m.far) }, uTime: U.uTime,
      uCamPos: { value: Lk.clone().addScaledVector(F, -m.D) }, uR: { value: new THREE.Vector3(...m.R) }, uU: { value: new THREE.Vector3(...m.U) }, uF: { value: F },
      uWm: { value: m.Wm }, uHm: { value: m.Hm }, uD: { value: m.D }, uBig: { value: new THREE.Vector2(m.fullW, m.fullH) },
      uShVP: { value: new THREE.Matrix4() }, uShOn: { value: 1 }, uShCol: { value: new THREE.Vector3(0.6, 0.64, 0.74) }, uVig: U.uVig, uGr: U.uGr,
    },
    depthTest: true, depthWrite: true, depthFunc: THREE.AlwaysDepth,
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  envMesh = new THREE.Mesh(g, envMat); envMesh.frustumCulled = false;
  envScene.add(envMesh);
}
const envScene = new THREE.Scene();

// ------------------------------------------------------------------ 灯光（原工程写实版的参数：天光 1.7、太阳 3.0）
export function initLights() {
  scene.add(new THREE.HemisphereLight(0xd4e2ff, 0xcdbfb2, 1.7));
  const sun = new THREE.DirectionalLight(0xfff0dc, 3.0);
  sun.position.copy(SUN).multiplyScalar(50); scene.add(sun, sun.target);
}

// ------------------------------------------------------------------ 写实做旧（会动的东西）：降饱和、压亮度、偏暖灰 + 暗角，接到 Lambert / Basic 材质里
export function realLook(mat, { k = 1 } = {}) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev && prev !== THREE.Material.prototype.onBeforeCompile) prev(sh, r);
    Object.assign(sh.uniforms, { uRes: U.uRes, uVig: U.uVig, uMS: U.uMS, uMK: U.uMK, uMT: U.uMT, uGr: U.uGr });
    sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'uniform vec2 uRes; uniform float uVig; uniform float uMS; uniform float uMK; uniform vec3 uMT; uniform vec4 uGr;\n' + GRADE_GLSL + '\nvoid main() {')
      .replace('#include <opaque_fragment>', `{ float l_ = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722)); outgoingLight = mix(vec3(l_), outgoingLight, uMS) * uMK * uMT * ${k.toFixed(3)};
  outgoingLight = pow(grade_(pow(max(outgoingLight, 0.0), vec3(1.0 / 2.2)), uGr), vec3(2.2));
  vec2 d_ = gl_FragCoord.xy / uRes - 0.5; outgoingLight *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d_ * vec2(1.0, 1.25))); }
#include <opaque_fragment>`);
  };
  const key = mat.customProgramCacheKey ? mat.customProgramCacheKey() : '';
  mat.customProgramCacheKey = () => key + '|real' + k;
  return mat;
}

// ------------------------------------------------------------------ 每帧渲染
const casters = [];
export const addCaster = (o) => casters.push(o);
const _c = new THREE.Vector3();
const depthMat = new THREE.MeshDepthMaterial();
export function render(focus) {
  // 阴影：只画会动的东西（castShadow），太阳方向正交，跟着镜头焦点走（按纹素对齐，影子边不爬）
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
  renderer.render(envScene, camera);   // 环境：颜色 + 逐像素深度
  renderer.render(scene, camera);      // 人、鱼、货、地块、特效
}
export { WATER_Y };
