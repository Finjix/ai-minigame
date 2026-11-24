// 场景里的玩法提示和特效（参考试玩的画法：地块、目标光圈、地上的箭头路、交接区圆圈；成片的红色捕鱼扇形、虚线框）
import * as THREE from 'three';
import { scene, camera, WATER_Y } from './world.js';
import { createCanvas } from './platform.js';
import { rr, bill, text, FONT } from './ui.js';
import { backOut, clamp01, smooth, lerp } from './util.js';

const canvasTex = (w, h, draw) => { const c = createCanvas(w, h), g = c.getContext('2d'); draw(g); const t = new THREE.Texture(c); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; t.anisotropy = 4; return t; };
const flat = (w, h) => { const g = new THREE.PlaneGeometry(w, h); g.rotateX(-Math.PI / 2); return g; };

// ------------------------------------------------------------------ 地块图标（参考试玩 Y6）
const ICON = {
  worker: (t) => { t.fillStyle = '#fff'; t.beginPath(); t.arc(118, 70, 28, 0, 7); t.fill(); t.beginPath(); t.moveTo(58, 160); t.bezierCurveTo(58, 104, 178, 104, 178, 160); t.closePath(); t.fill(); plus(t, 186, 64, 44, 15); },
  conv: (t) => { t.fillStyle = '#fff'; t.save(); t.transform(1, 0, -0.18, 1, 20, 0); for (let r = 0; r < 4; r++) { rr(t, 70 + r * 30, 76, 27, 48, 10); t.fill(); } t.restore(); rr(t, 60, 124, 134, 32, 16); t.fill();
    t.save(); t.globalCompositeOperation = 'destination-out'; t.fillRect(58, 121, 140, 5); for (const r of [78, 176]) { t.beginPath(); t.arc(r, 140, 7, 0, 7); t.fill(); } t.restore(); plus(t, 188, 44, 44, 15); },
  staff: (t) => { t.fillStyle = '#fff'; t.beginPath(); t.arc(100, 70, 28, 0, 7); t.fill(); t.beginPath(); t.moveTo(40, 160); t.bezierCurveTo(40, 104, 160, 104, 160, 160); t.closePath(); t.fill();
    for (let r = 0; r < 4; r++) { rr(t, 150, 150 - r * 24, 66, 20, 6); t.fill(); } plus(t, 200, 50, 44, 15); },
};
function plus(t, r, s, o = 50, c = 16) { t.fillStyle = '#fff'; rr(t, r - o / 2, s - c / 2, o, c, 3); t.fill(); rr(t, r - c / 2, s - o / 2, c, o, 3); t.fill(); }
const ICON_BB = {};
function iconCanvas(k) { const c = createCanvas(256, 256), g = c.getContext('2d'); ICON[k](g); ICON_BB[k] = [30, 30, 230, 180]; return c; }

// 地块（参考试玩 G3）：深色圆角底 + 四角白括号（买的时候变绿）+ 图标 + 钞票 + 价格；付了多少从下往上涨绿色
function drawTile(g, icon, price, fill, on) {
  g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 320, 320); g.translate(32, 32);
  rr(g, 18, 18, 220, 220, 22); g.fillStyle = 'rgba(28,30,36,0.72)'; g.fill();
  if (fill > 0) { g.save(); rr(g, 18, 18, 220, 220, 22); g.clip(); g.fillStyle = '#1fff19'; g.globalAlpha = 0.85; g.fillRect(0, 238 - 220 * fill, 256, 220 * fill + 2); g.restore(); }
  const a = on ? 1.12 : 1;
  g.save(); g.translate(128, 128); g.scale(a, a); g.translate(-128, -128); g.strokeStyle = on ? '#1fff19' : '#ffffff'; g.lineWidth = 13 / a; g.lineCap = 'round';
  for (const [w, M, S, E] of [[14, 14, 1, 1], [242, 14, -1, 1], [14, 242, 1, -1], [242, 242, -1, -1]]) { g.beginPath(); g.moveTo(w + S * 40, M); g.lineTo(w + S * 15, M); g.quadraticCurveTo(w, M, w, M + E * 15); g.lineTo(w, M + E * 40); g.stroke(); }
  g.restore();
  const ic = ICONS[icon]; g.save(); g.translate(128, 98); const k = Math.min(128 / 200, 104 / 150); g.scale(k, k); g.translate(-130, -105); g.drawImage(ic, 0, 0); g.restore();
  let fs = 56, cr = 21, gap = 9; const y = String(price);
  g.font = `900 ${fs}px "Arial Black", Arial, sans-serif`; g.textAlign = 'left'; g.textBaseline = 'middle';
  let A = g.measureText(y).width; const x = Math.min(1, 150 / (cr * 2 + gap + A));
  if (x < 1) { fs *= x; cr *= x; gap *= x; g.font = `900 ${fs}px "Arial Black", Arial, sans-serif`; A = g.measureText(y).width; }
  const P = 128 - (cr * 2 + gap + A) / 2;
  bill(g, P + cr, 193, cr); g.lineWidth = 7; g.strokeStyle = 'rgba(20,30,20,0.55)'; g.lineJoin = 'round'; g.strokeText(y, P + cr * 2 + gap, 195); g.fillStyle = '#ffffff'; g.fillText(y, P + cr * 2 + gap, 195);
}
const ICONS = {};
export class Tile {
  constructor(id, c, price, icon, aim) {
    if (!ICONS[icon]) ICONS[icon] = iconCanvas(icon);
    this.id = id; this.c = c; this.price = price; this.left = price; this.icon = icon; this.visible = false; this.popT = -1; this.done = false; this.on = false; this.key = '';
    this.cv = createCanvas(320, 320); this.g = this.cv.getContext('2d');
    this.tex = new THREE.Texture(this.cv); this.tex.colorSpace = THREE.SRGBColorSpace; this.tex.anisotropy = 4;
    this.mesh = new THREE.Mesh(flat(1.45, 1.45), new THREE.MeshBasicMaterial({ map: this.tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    this.mesh.position.set(c[0], 0.035, c[1]); this.mesh.rotation.y = Math.atan2(-(aim[0] - c[0]), -(aim[1] - c[1])); this.mesh.renderOrder = 3; this.mesh.visible = false;
    scene.add(this.mesh); this.redraw();
  }
  redraw() {
    const fill = clamp01(1 - this.left / this.price), k = `${this.left}_${Math.round(fill * 100)}_${this.on}`;
    if (k === this.key) return; this.key = k; drawTile(this.g, this.icon, this.left, fill, this.on); this.tex.needsUpdate = true;
  }
  show(t) { if (!this.visible) { this.visible = true; this.popT = t; } }
  update(t) {
    this.mesh.visible = this.visible && !this.done;
    if (!this.mesh.visible) return;
    this.redraw();
    const s = this.popT >= 0 ? Math.max(0.001, backOut((t - this.popT) / 0.32)) : 1;
    this.mesh.scale.setScalar(s * (this.on ? 1.04 + 0.03 * Math.sin(t * 9) : 1));
  }
}

// ------------------------------------------------------------------ 交接区圆圈（参考试玩 wB：虚线圈 + 图标，人站进去变绿，满了闪红）
const RING_T = canvasTex(256, 256, (t) => { t.lineCap = 'round'; for (const [s, o] of [[26, 'rgba(16,24,32,0.42)'], [12, '#ffffff']]) { t.lineWidth = s; t.strokeStyle = o; for (let c = 0; c < 20; c++) { const h = c / 20 * Math.PI * 2; t.beginPath(); t.arc(128, 128, 112, h, h + Math.PI * 2 / 20 * 0.55); t.stroke(); } } });
const WHITE = new THREE.Color('#ffffff'), GREEN = new THREE.Color('#1fff19'), RED = new THREE.Color('#ff2a1a');
export class Zone {
  constructor(c, R, y = 0.035, iconTex = null, aim = null) {
    this.c = c; this.R = R; this.v = 0; this.on = 0; this.spin = 0; this.full = -9; this.t0 = -1;
    this.ring = new THREE.Mesh(flat(2, 2), new THREE.MeshBasicMaterial({ map: RING_T, transparent: true, depthWrite: false, color: WHITE.clone() }));
    this.ring.position.set(c[0], y, c[1]); this.ring.renderOrder = 4; scene.add(this.ring);
    if (iconTex) { this.icon = new THREE.Mesh(flat(1, 1), new THREE.MeshBasicMaterial({ map: iconTex, transparent: true, depthWrite: false })); this.icon.position.set(c[0], y + 0.005, c[1]); this.icon.renderOrder = 5; if (aim) this.icon.rotation.y = Math.atan2(-(aim[0] - c[0]), -(aim[1] - c[1])); scene.add(this.icon); }
  }
  update(t, dt, show, active, hint) {
    const f = show ? 1 : 0; if (f && this.t0 < 0) this.t0 = t;
    this.v += (f - this.v) * Math.min(1, dt * 8); this.on += ((active ? 1 : 0) - this.on) * Math.min(1, dt * 12);
    const vis = this.v > 0.01; this.ring.visible = vis; if (this.icon) this.icon.visible = vis; if (!vis) return;
    const p = backOut((t - this.t0) / 0.35), g = hint ? 0.5 + 0.5 * Math.sin(t * 5.5) : 0;
    this.spin += dt * this.on * 0.7;
    let rv = 0; const m = (t - this.full) / 0.36; if (m >= 0 && m < 2) { const y = m % 1; rv = y < 0.65 ? Math.sin(Math.PI * y / 0.65) : 0; }
    this.ring.rotation.y = this.spin; this.ring.scale.setScalar(this.R * (0.6 + 0.4 * p) * (1 + 0.06 * g + 0.1 * rv));
    this.ring.material.color.copy(WHITE).lerp(GREEN, this.on).lerp(RED, rv);
    this.ring.material.opacity = this.v * clamp01(p) * (0.62 + 0.38 * Math.max(g, this.on, rv));
    if (this.icon) { this.icon.scale.setScalar(this.R * 0.95 * (0.6 + 0.4 * p)); this.icon.material.opacity = this.v * clamp01(p) * 0.92; }
  }
}
export function iconTex(draw) { return canvasTex(128, 128, draw); }

// 成片的虚线框（柜台后面主角站的位置）：白色圆角框，站进去变绿、框里铺一层淡绿
export class StandBox {
  constructor(r) {
    const w = r[1] - r[0], d = r[3] - r[2];
    const tex = canvasTex(512, Math.round(512 * d / w), (g) => { const W = 512, H = Math.round(512 * d / w); g.lineWidth = 16; g.strokeStyle = '#fff'; rr(g, 12, 12, W - 24, H - 24, 34); g.stroke(); });
    const fillT = canvasTex(256, 128, (g) => { rr(g, 8, 8, 240, 112, 20); g.fillStyle = '#fff'; g.fill(); });
    this.frame = new THREE.Mesh(flat(w, d), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, color: WHITE.clone(), opacity: 0.9 }));
    this.fill = new THREE.Mesh(flat(w, d), new THREE.MeshBasicMaterial({ map: fillT, transparent: true, depthWrite: false, color: GREEN.clone(), opacity: 0 }));
    for (const m of [this.fill, this.frame]) { m.position.set((r[0] + r[1]) / 2, 0.035, (r[2] + r[3]) / 2); m.renderOrder = 3; scene.add(m); }
    this.on = 0;
  }
  update(dt, active) {
    this.on += ((active ? 1 : 0) - this.on) * Math.min(1, dt * 10);
    this.frame.material.color.copy(WHITE).lerp(GREEN, this.on); this.fill.material.opacity = 0.22 * this.on;
  }
}

// ------------------------------------------------------------------ 目标光圈（参考试玩 Nx）
const targetMat = new THREE.ShaderMaterial({
  uniforms: { uT: { value: 0 }, uA: { value: 0 }, uC: { value: new THREE.Color('#fff0b8') } },
  vertexShader: 'varying vec2 vU; void main(){ vU = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform float uT, uA; uniform vec3 uC; varying vec2 vU;
void main(){
  float r = length(vU), aa = max(fwidth(r) * 1.2, 1e-3);
  float ring = smoothstep(0.78 - aa, 0.84, r) * (1.0 - smoothstep(0.92, 0.98 + aa, r));
  float ph = fract(uT * 0.7), rr = mix(0.25, 0.86, ph);
  float wave = (1.0 - smoothstep(0.0, 0.07 + aa, abs(r - rr))) * (1.0 - ph) * 0.8;
  float fill = (1.0 - smoothstep(0.5, 0.9, r)) * 0.12;
  float a = max(max(ring * (0.75 + 0.25 * sin(uT * 4.0)), wave), fill) * uA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uC, a);
#include <colorspace_fragment>
}`, transparent: true, depthWrite: false,
});
export const targetRing = new THREE.Mesh(flat(2, 2), targetMat); targetRing.renderOrder = 4; targetRing.visible = false;
let ringKey = '', ringT0 = 0, ringV = 0;
export function updateTarget(t, dt, tgt, heroP) {
  const R = tgt ? (tgt.kind === 'tile' ? 1.15 : tgt.kind === 'fish' ? 1.3 : 0.9) : 0;
  const key = tgt ? tgt.kind + (tgt.kind === 'fish' ? '' : tgt.p[0].toFixed(1) + tgt.p[1].toFixed(1)) : '';   // 同一类目标位置小幅变化不重新弹出
  if (key && key !== ringKey) { ringKey = key; ringT0 = t; }
  const near = tgt && Math.hypot(tgt.p[0] - heroP[0], tgt.p[1] - heroP[1]) < Math.max(0.8, R * 0.9);
  ringV += ((tgt && !near ? 1 : 0) - ringV) * Math.min(1, dt * 10);
  if (ringV < 0.01) { targetRing.visible = false; return; }
  const a = backOut((t - ringT0) / 0.3);
  if (tgt) { targetRing.position.set(tgt.p[0], (tgt.y ?? 0) + 0.04, tgt.p[1]); targetRing.userData.R = R; }
  targetRing.scale.setScalar((targetRing.userData.R || 1) * (0.6 + 0.4 * a)); targetMat.uniforms.uT.value = t; targetMat.uniforms.uA.value = ringV * clamp01(a); targetRing.visible = true;
}

// ------------------------------------------------------------------ 地上的箭头路（参考试玩 Hx：黄底棕边的人字纹顺着走的方向流）
const NSEG = 90, HALF = 0.18 * 0.6 / 0.46 * 0.6;
const pathPos = new Float32Array(NSEG * 2 * 3), pathU = new Float32Array(NSEG * 2 * 2);
const pathGeo = new THREE.BufferGeometry();
pathGeo.setAttribute('position', new THREE.BufferAttribute(pathPos, 3).setUsage(THREE.DynamicDrawUsage));
pathGeo.setAttribute('aU', new THREE.BufferAttribute(pathU, 2).setUsage(THREE.DynamicDrawUsage));
{ const ix = []; for (let i = 0; i < NSEG - 1; i++) { const r = i * 2; ix.push(r, r + 1, r + 2, r + 1, r + 3, r + 2); } pathGeo.setIndex(ix); }
const pathMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 }, uS0: { value: 0 }, uS1: { value: 1 }, uA: { value: 0 }, uC: { value: new THREE.Color('#ffd23f') }, uO: { value: new THREE.Color('#5a3200') } },
  vertexShader: 'attribute vec2 aU; varying vec2 vU; void main(){ vU = aU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform float uTime, uS0, uS1, uA; uniform vec3 uC, uO; varying vec2 vU;
void main(){
  const float k = 0.75, P = 1.0, hw = 0.1, ow = 0.05, arm = 0.38;
  float m = mod(vU.x + abs(vU.y) * k - uTime * 1.4, P);
  float sd = max(abs(m - 0.5 * P) * inversesqrt(1.0 + k * k) - hw, abs(vU.y) - arm);
  float aa = max(length(fwidth(vU)) * 0.75, 1e-4);
  float fill = 1.0 - smoothstep(-aa, aa, sd), edge = 1.0 - smoothstep(ow - aa, ow + aa, sd);
  float a = edge * smoothstep(uS0, uS0 + 0.5, vU.x) * (1.0 - smoothstep(uS1 - 0.45, uS1, vU.x)) * uA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(mix(uO, uC, fill), a);
#include <colorspace_fragment>
}`, transparent: true, depthWrite: false, side: THREE.DoubleSide,
});
export const pathMesh = new THREE.Mesh(pathGeo, pathMat); pathMesh.frustumCulled = false; pathMesh.renderOrder = 4; pathMesh.visible = false;
const chaikin = (r) => { for (let s = 0; s < 2 && r.length > 2; s++) { const o = [r[0]]; for (let c = 0; c < r.length - 1; c++) { const [h, e] = r[c], [n, i] = r[c + 1]; if (c > 0) o.push([h * 0.75 + n * 0.25, e * 0.75 + i * 0.25]); if (c < r.length - 2) o.push([h * 0.25 + n * 0.75, e * 0.25 + i * 0.75]); } o.push(r[r.length - 1]); r = o; } return r; };
let pathV = 0;
export function updatePath(t, dt, pts, yOf, show) {
  pathV += ((show && pts && pts.length > 1 ? 1 : 0) - pathV) * Math.min(1, dt * 8);
  if (pathV < 0.01 || !pts || pts.length < 2) { pathMesh.visible = false; return; }
  const P = chaikin(pts); const L = [0]; for (let i = 1; i < P.length; i++) L.push(L[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
  const tot = L[L.length - 1]; if (tot < 1.2) { pathMesh.visible = false; return; }
  const W2 = 0.42, sc = 1 / (2 * W2);
  let j = 0;
  for (let i = 0; i < NSEG; i++) {
    const s = Math.min(tot, (i / (NSEG - 1)) * tot);
    while (j < L.length - 2 && L[j + 1] < s) j++;
    const a = P[j], b = P[j + 1], k = (s - L[j]) / Math.max(1e-6, L[j + 1] - L[j]);
    const x = lerp(a[0], b[0], k), z = lerp(a[1], b[1], k), dx = b[0] - a[0], dz = b[1] - a[1], dl = Math.hypot(dx, dz) || 1, nx = -dz / dl, nz = dx / dl, y = yOf(x, z) + 0.03;
    pathPos.set([x + nx * W2, y, z + nz * W2, x - nx * W2, y, z - nz * W2], i * 6);
    pathU.set([s * sc, 0.5, s * sc, -0.5], i * 4);
  }
  pathGeo.attributes.position.needsUpdate = true; pathGeo.attributes.aU.needsUpdate = true;
  Object.assign(pathMat.uniforms, {}); pathMat.uniforms.uTime.value = t; pathMat.uniforms.uS0.value = 0.9 * sc; pathMat.uniforms.uS1.value = (tot - 0.6) * sc; pathMat.uniforms.uA.value = pathV * 0.95;
  pathMesh.visible = true;
}

// ------------------------------------------------------------------ 捕鱼的红色扇形（成片 v3b 的中档：更透明、更暗、饱和度更低）
const fanGeo = new THREE.CircleGeometry(1, 40, -0.95, 1.9); fanGeo.rotateX(-Math.PI / 2); fanGeo.rotateY(-Math.PI / 2);   // 扇形中心朝 +z（人物朝向）
const fanMat = new THREE.ShaderMaterial({
  uniforms: { uA: { value: 0 }, uT: { value: 0 } },
  vertexShader: 'varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform float uA, uT; varying vec2 vP;
void main(){ float r = length(vP); float edge = smoothstep(0.86, 0.97, r) * (1.0 - smoothstep(0.97, 1.0, r));
  float rip = 0.5 + 0.5 * sin(r * 24.0 - uT * 7.0);
  float a = (0.26 + 0.18 * rip * smoothstep(0.15, 0.9, r) + 0.45 * edge) * uA;
  gl_FragColor = vec4(vec3(0.62, 0.17, 0.18) + edge * 0.25, a);
#include <colorspace_fragment>
}`, transparent: true, depthWrite: false, side: THREE.DoubleSide,
});
export function makeFan() { const m = new THREE.Mesh(fanGeo, fanMat.clone()); m.renderOrder = 6; m.visible = false; scene.add(m); return m; }

// ------------------------------------------------------------------ 解锁闪光、白烟、水花（广告牌：永远朝镜头）
const glowT = canvasTex(128, 128, (g) => { const r = g.createRadialGradient(64, 64, 0, 64, 64, 62); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.35, 'rgba(255,255,240,0.6)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128); });
const puffT = canvasTex(128, 128, (g) => { for (let i = 0; i < 7; i++) { const x = 64 + Math.cos(i * 0.9) * 22, y = 64 + Math.sin(i * 1.7) * 18, r = 26 + (i % 3) * 6; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,0.85)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); } });
const splashT = canvasTex(128, 128, (g) => { g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 9; g.beginPath(); g.arc(64, 64, 52, 0, 7); g.stroke(); g.lineWidth = 4; g.beginPath(); g.arc(64, 64, 38, 0, 7); g.stroke(); });
const pillarT = canvasTex(64, 256, (g) => { const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.6, 'rgba(255,250,220,0.7)'); gr.addColorStop(1, 'rgba(255,255,255,0.95)'); g.fillStyle = gr; const h = g.createLinearGradient(0, 0, 64, 0); g.fillRect(0, 0, 64, 256); g.globalCompositeOperation = 'destination-in'; h.addColorStop(0, 'rgba(0,0,0,0)'); h.addColorStop(0.5, 'rgba(0,0,0,1)'); h.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = h; g.fillRect(0, 0, 64, 256); });
const fxList = [];
const bbGeo = new THREE.PlaneGeometry(1, 1);
function addFx(kind, p, t, o = {}) {
  const tex = kind === 'glow' ? glowT : kind === 'puff' ? puffT : kind === 'pillar' ? pillarT : splashT;
  const m = new THREE.Mesh(kind === 'splash' ? flat(1, 1) : bbGeo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: kind !== 'glow', blending: kind === 'puff' ? THREE.NormalBlending : THREE.AdditiveBlending }));
  m.renderOrder = 8; m.position.set(p[0], p[1], p[2]); scene.add(m);
  fxList.push({ m, kind, t0: t, dur: o.dur || (kind === 'puff' ? 0.55 : kind === 'pillar' ? 0.9 : 0.6), size: o.size || 1, p: [...p] });
}
export const flash = (p, t) => { addFx('glow', [p[0], 0.6, p[1]], t, { size: 4.2, dur: 0.55 }); addFx('pillar', [p[0], 2.0, p[1]], t, { size: 1.6, dur: 0.9 }); addFx('splash', [p[0], 0.06, p[1]], t, { size: 3.2, dur: 0.6 }); };
export const puff = (p, t, size = 0.7) => addFx('puff', p, t, { size });
export const splash = (p, t, size = 1.6) => addFx('splash', [p[0], WATER_Y + 0.04, p[1]], t, { size, dur: 0.7 });
export function updateFx(t) {
  for (let i = fxList.length - 1; i >= 0; i--) {
    const f = fxList[i], k = (t - f.t0) / f.dur;
    if (k >= 1) { scene.remove(f.m); f.m.material.dispose(); fxList.splice(i, 1); continue; }
    if (f.kind !== 'splash') f.m.quaternion.copy(camera.quaternion);
    if (f.kind === 'glow') { f.m.scale.setScalar(f.size * (0.4 + 0.8 * smooth(k))); f.m.material.opacity = 1 - k; }
    else if (f.kind === 'pillar') { f.m.scale.set(f.size * (1 - 0.6 * k), f.size * 3.2, 1); f.m.material.opacity = Math.sin(Math.PI * Math.min(1, k * 1.3)); }
    else if (f.kind === 'puff') { f.m.scale.setScalar(f.size * (0.5 + 0.9 * k)); f.m.position.y = f.p[1] + k * 0.5; f.m.material.opacity = 0.8 * (1 - k); }
    else { f.m.scale.setScalar(f.size * (0.3 + 0.9 * smooth(k))); f.m.material.opacity = 0.9 * (1 - k); }
  }
}
export function addStatic() { scene.add(targetRing, pathMesh); }

// ------------------------------------------------------------------ 飘雪（成片：雪在世界空间，镜头移动雪不跟着走）：着色器里按世界坐标取模铺满镜头周围的一个盒子
export function makeSnow(n = 520) {
  const seed = new Float32Array(n * 3); for (let i = 0; i < n * 3; i++) seed[i] = Math.random();
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 3));
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e9);
  const m = new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uC: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector3(16, 9, 30) }, uPx: { value: 1 } },
    vertexShader: `attribute vec3 aSeed; uniform float uT; uniform vec3 uC; uniform vec3 uBox; uniform float uPx; varying float vA;
void main(){
  vec3 p = aSeed * uBox; float sp = 0.7 + aSeed.x * 0.7;
  p.y -= uT * sp; p.x += sin(uT * 0.8 + aSeed.z * 30.0) * 0.35 + uT * 0.22; p.z += cos(uT * 0.6 + aSeed.y * 20.0) * 0.25 + uT * 0.08;
  vec3 w; w.xz = uC.xz + mod(p.xz - uC.xz + uBox.xz * 0.5, uBox.xz) - uBox.xz * 0.5; w.y = mod(p.y, uBox.y) - 0.3;
  vA = 0.45 + 0.5 * aSeed.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
  gl_PointSize = (2.2 + aSeed.z * 4.0) * uPx;
}`,
    fragmentShader: `varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.15, length(d)) * vA; if (a < 0.01) discard; gl_FragColor = vec4(vec3(1.0), a); }`,
    transparent: true, depthWrite: false,
  });
  const p = new THREE.Points(g, m); p.frustumCulled = false; p.renderOrder = 9; scene.add(p);
  return { p, update(t, c, px) { m.uniforms.uT.value = t; m.uniforms.uC.value.set(c[0], 0, c[1]); m.uniforms.uPx.value = px; } };
}
