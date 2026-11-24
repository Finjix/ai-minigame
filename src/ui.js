// 2D 界面：小游戏只有一张上屏画布，界面不能另叠 DOM / 2D 画布。做法和参考试玩的 uigl 一样：
// 开场把所有界面元素（参考试玩的画法原样搬过来）画进一张图集，每帧按顺序拼成一批四边形用 WebGL 画在 3D 上面。
// 坐标是逻辑像素：宽 1080，高按屏幕比例（参考试玩同一套）。
import * as THREE from 'three';
import { createCanvas } from './platform.js';
import { renderer } from './world.js';

export const FONT = '"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif';
export function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
export function text(c, s, x, y, { size = 40, fill = '#fff', stroke = '#222', lw = 7, align = 'center', alpha = 1, weight = 900 } = {}) {
  c.save(); c.globalAlpha = alpha; c.font = `${weight} ${size}px ${FONT}`; c.textAlign = align; c.textBaseline = 'middle'; c.lineJoin = 'round';
  if (lw > 0) { c.lineWidth = lw; c.strokeStyle = stroke; c.strokeText(s, x, y); }
  c.fillStyle = fill; c.fillText(s, x, y); c.restore();
}
// 参考试玩的绿钞票图标（XA）
export function bill(t, r, s, o) {
  t.save(); t.translate(r, s); t.lineJoin = 'round';
  const c = o * 2, h = o * 1.15;
  for (const [e, n, i] of [[o * 0.12, o * 0.12, '#2e9a3a'], [0, 0, '#56d25c']]) { rr(t, -c / 2 + e, -h / 2 + n, c, h, o * 0.16); t.fillStyle = i; t.fill(); t.lineWidth = o * 0.1; t.strokeStyle = '#1b5e22'; t.stroke(); }
  rr(t, -c / 2 + o * 0.22, -h / 2 + o * 0.2, c - o * 0.44, h - o * 0.4, o * 0.1); t.lineWidth = o * 0.07; t.strokeStyle = 'rgba(25,100,35,0.8)'; t.stroke();
  t.beginPath(); t.ellipse(0, 0, o * 0.3, o * 0.3, 0, 0, 7); t.fillStyle = '#2f9e3c'; t.fill();
  t.fillStyle = '#f3f6ea'; t.fillRect(-o * 0.12, -h / 2 - o * 0.02, o * 0.24, h + o * 0.04); t.restore();
}
function bills3(c, x, y, s) { c.save(); c.translate(x, y); c.scale(s, s); for (const [o, h] of [[0, 8], [3, 0], [-2, -8]]) bill(c, o, h, 22); c.restore(); }
// 绿色大按钮（qv）
function greenBtn(B, w, h, label, size) {
  rr(B, -w / 2, -h / 2 + 6, w, h, h / 2); B.fillStyle = '#1f7a17'; B.fill(); rr(B, -w / 2, -h / 2, w, h, h / 2);
  const n = B.createLinearGradient(0, -h / 2, 0, h / 2); n.addColorStop(0, '#8ef05a'); n.addColorStop(1, '#2fb52a'); B.fillStyle = n; B.fill(); B.lineWidth = 4; B.strokeStyle = '#ffffff'; B.stroke();
  text(B, label, 0, 2, { size, fill: '#ffffff', stroke: '#1d6e15', lw: 7 });
}
// 黄色「我来操作！」（S5）
export const TAKE = { w: 420, h: 112 };
function takeBtn(B) {
  const { w: o, h: c } = TAKE;
  rr(B, -o / 2, -c / 2 + 6, o, c, c / 2); B.fillStyle = '#a2520a'; B.fill(); rr(B, -o / 2, -c / 2, o, c, c / 2);
  const h = B.createLinearGradient(0, -c / 2, 0, c / 2); h.addColorStop(0, '#ffe36a'); h.addColorStop(1, '#ffa21f'); B.fillStyle = h; B.fill(); B.lineWidth = 5; B.strokeStyle = '#ffffff'; B.stroke();
  text(B, '我来操作！', 0, 2, { size: 54, fill: '#ffffff', stroke: '#8a4300', lw: 8 });
}
// 手指（T5）
function hand(B, s = 1) {
  B.save(); B.rotate(-0.35); B.scale(s, s); B.fillStyle = '#ffffff'; B.strokeStyle = '#1d2a44'; B.lineWidth = 6; B.lineJoin = 'round'; B.beginPath();
  B.moveTo(-10, 0); B.lineTo(-10, -70); B.quadraticCurveTo(0, -84, 10, -70); B.lineTo(10, -20); B.lineTo(30, -24); B.quadraticCurveTo(44, -22, 44, -8); B.lineTo(44, 40);
  B.quadraticCurveTo(40, 74, 6, 78); B.lineTo(-18, 78); B.quadraticCurveTo(-40, 66, -44, 40); B.lineTo(-48, 8); B.quadraticCurveTo(-46, -6, -30, -2); B.lineTo(-10, 6); B.closePath(); B.fill(); B.stroke(); B.restore();
}
// 表情：生气（M5）、笑脸、爱心眼
function face(t, r, kind, tail) {
  if (tail) { t.fillStyle = '#ffffff'; t.beginPath(); t.arc(0, 0, r * 1.34, Math.PI * 0.64, Math.PI * 2.36); t.lineTo(0, r * 1.62); t.closePath(); t.fill(); t.lineWidth = 2.5; t.strokeStyle = 'rgba(60,60,70,0.45)'; t.stroke(); }
  const o = t.createLinearGradient(0, -r, 0, r);
  if (kind === 'angry') { o.addColorStop(0, '#ffc93e'); o.addColorStop(0.5, '#ff9324'); o.addColorStop(1, '#ef4a1b'); } else { o.addColorStop(0, '#fff176'); o.addColorStop(0.55, '#ffd23f'); o.addColorStop(1, '#f5a623'); }
  t.fillStyle = o; t.beginPath(); t.arc(0, 0, r, 0, 7); t.fill(); t.lineWidth = r * 0.07; t.strokeStyle = kind === 'angry' ? 'rgba(150,40,10,0.55)' : 'rgba(160,90,10,0.55)'; t.stroke();
  t.fillStyle = 'rgba(255,255,255,0.38)'; t.beginPath(); t.ellipse(-r * 0.3, -r * 0.62, r * 0.32, r * 0.14, -0.25, 0, 7); t.fill();
  t.strokeStyle = '#4a1a08'; t.fillStyle = '#4a1a08'; t.lineCap = 'round'; t.lineWidth = r * 0.15;
  if (kind === 'angry') {
    t.beginPath(); t.moveTo(-r * 0.66, -r * 0.36); t.lineTo(-r * 0.14, -r * 0.12); t.moveTo(r * 0.66, -r * 0.36); t.lineTo(r * 0.14, -r * 0.12); t.stroke();
    for (const c of [-1, 1]) { t.beginPath(); t.ellipse(c * r * 0.3, r * 0.08, r * 0.1, r * 0.15, 0, 0, 7); t.fill(); }
    t.lineWidth = r * 0.12; t.beginPath(); t.arc(0, r * 0.72, r * 0.34, -Math.PI * 0.8, -Math.PI * 0.2); t.stroke();
  } else if (kind === 'smile') {
    for (const c of [-1, 1]) { t.beginPath(); t.arc(c * r * 0.32, -r * 0.12, r * 0.16, Math.PI * 1.1, Math.PI * 1.9); t.stroke(); }
    t.fillStyle = '#7a2a10'; t.beginPath(); t.moveTo(-r * 0.5, r * 0.15); t.quadraticCurveTo(0, r * 0.95, r * 0.5, r * 0.15); t.closePath(); t.fill();
  } else {   // 爱心眼
    t.fillStyle = '#ff3b5c';
    for (const c of [-1, 1]) { t.save(); t.translate(c * r * 0.34, -r * 0.1); t.scale(r * 0.017, r * 0.017); t.beginPath(); t.moveTo(0, 6); t.bezierCurveTo(-14, -4, -8, -16, 0, -8); t.bezierCurveTo(8, -16, 14, -4, 0, 6); t.fill(); t.restore(); }
    t.fillStyle = '#7a2a10'; t.beginPath(); t.moveTo(-r * 0.42, r * 0.22); t.quadraticCurveTo(0, r * 0.85, r * 0.42, r * 0.22); t.closePath(); t.fill();
  }
}
function check(B) {
  B.fillStyle = '#ffffff'; B.beginPath(); B.arc(0, 0, 30, 0, 7); B.fill(); B.fillStyle = '#3ccf3c'; B.beginPath(); B.arc(0, 0, 25, 0, 7); B.fill();
  B.strokeStyle = '#ffffff'; B.lineWidth = 7; B.lineCap = 'round'; B.lineJoin = 'round'; B.beginPath(); B.moveTo(-11, 1); B.lineTo(-3, 9); B.lineTo(12, -8); B.stroke();
}

// ------------------------------------------------------------------ 图集
const SPR = {};
let atlasTex = null, AW = 2048, AH = 2048;
export const sprite = (k) => SPR[k];
export const atlas = () => atlasTex;
export const quads = () => nq;
export function buildAtlas({ W, H, logo, packIcon, coverImg }) {
  const defs = [];
  const def = (key, b, draw) => defs.push({ key, b, draw });
  const LOGO = { w: 300, h: 300 * logo.height / logo.width };
  def('white', [0, 0, 8, 8], (c) => { c.fillStyle = '#fff'; c.fillRect(-2, -2, 12, 12); });
  def('black', [0, 0, 8, 8], (c) => { c.fillStyle = '#000'; c.fillRect(-2, -2, 12, 12); });
  def('logo', [-24, -24, LOGO.w + 36, LOGO.h + 36], (c) => { c.save(); c.shadowColor = 'rgba(0,0,0,0.6)'; c.shadowOffsetX = c.shadowOffsetY = 3; c.shadowBlur = 5; c.drawImage(logo, 0, 0, LOGO.w, LOGO.h); c.restore(); });
  { const s = 360, o = s * logo.height / logo.width; def('logoBig', [-s / 2 - 30, -o / 2 - 30, s / 2 + 30, o / 2 + 40], (c) => { c.save(); c.shadowColor = 'rgba(0,0,0,0.5)'; c.shadowOffsetY = 4; c.shadowBlur = 10; c.drawImage(logo, -s / 2, -o / 2, s, o); c.restore(); }); }
  { const s = 600, o = s * logo.height / logo.width; def('logoLoad', [-s / 2 - 30, -o / 2 - 30, s / 2 + 30, o / 2 + 40], (c) => { c.save(); c.shadowColor = 'rgba(0,0,0,0.5)'; c.shadowOffsetY = 4; c.shadowBlur = 14; c.drawImage(logo, -s / 2, -o / 2, s, o); c.restore(); }); }
  def('btnTop', [-134 - 24, -41 - 24, 134 + 24, 41 + 30], (c) => greenBtn(c, 268, 82, '立即体验', 40));
  def('btnEnd', [-300 - 24, -75 - 24, 300 + 24, 75 + 30], (c) => greenBtn(c, 600, 150, '立即体验', 66));
  def('btnTake', [-TAKE.w / 2 - 24, -TAKE.h / 2 - 24, TAKE.w / 2 + 24, TAKE.h / 2 + 30], (c) => takeBtn(c));
  def('hudBg', [-90, -90, 274, 90], (c) => { rr(c, 0, -30, 250, 60, 20); c.fillStyle = 'rgba(40,44,58,0.55)'; c.fill(); bills3(c, 4, 0, 1.45); });
  def('check', [-44, -44, 44, 44], check);
  def('bub', [-48, -48, 48, 60], (c) => { c.fillStyle = '#ffffff'; c.beginPath(); c.arc(0, 0, 33, Math.PI * 0.62, Math.PI * 2.38); c.lineTo(0, 46); c.closePath(); c.fill(); c.lineWidth = 2.5; c.strokeStyle = 'rgba(60,60,70,0.5)'; c.stroke(); });
  def('bubFill', [-30, -30, 30, 30], (c) => { c.fillStyle = '#4fd34f'; c.beginPath(); c.arc(0, 0, 29, 0, 7); c.fill(); });
  def('bubIcon', [-30, -30, 30, 30], (c) => c.drawImage(packIcon, -30, -30, 60, 60));
  for (const [k, kind, tail] of [['ang0', 'angry', 0], ['ang1', 'angry', 1], ['smile1', 'smile', 1], ['heart1', 'heart', 1]]) def(k, [-58, -54, 58, 64], (c) => face(c, 32, kind, tail));
  const pn = 1.35, ty = H - 510;
  def('tutLine', [-170 * pn - 30, -30, 170 * pn + 30, 30], (c) => { c.strokeStyle = 'rgba(255,255,255,0.75)'; c.lineWidth = 10 * pn; c.lineCap = 'round'; c.setLineDash([2, 22 * pn]); c.beginPath(); c.moveTo(-170 * pn, 0); c.lineTo(170 * pn, 0); c.stroke(); c.setLineDash([]); });
  def('tutText', [-330, -90, 330, 90], (c) => text(c, '轻划移动', 0, 0, { size: Math.round(64 * pn), fill: '#ffffff', stroke: '#1d2a44', lw: Math.round(10 * pn) }));
  def('hand', [-150, -170, 150, 170], (c) => hand(c, pn));
  def('joyBase', [-120, -120, 120, 120], (c) => { c.fillStyle = 'rgba(255,255,255,0.22)'; c.strokeStyle = 'rgba(255,255,255,0.7)'; c.lineWidth = 6; c.beginPath(); c.arc(0, 0, 104, 0, 7); c.fill(); c.stroke(); });
  def('joyKnob', [-60, -60, 60, 60], (c) => { c.fillStyle = 'rgba(255,255,255,0.8)'; c.beginPath(); c.arc(0, 0, 48, 0, 7); c.fill(); });
  def('full', [-110, -46, 110, 46], (c) => { rr(c, -96, -34, 192, 68, 34); c.fillStyle = 'rgba(214,40,30,0.92)'; c.fill(); c.lineWidth = 4; c.strokeStyle = '#fff'; c.stroke(); text(c, '满了', 0, 2, { size: 40, fill: '#fff', stroke: '#7a120a', lw: 6 }); });
  def('loading', [-140, -40, 140, 40], (c) => text(c, '加载中', 0, 0, { size: 40, fill: '#fff', stroke: 'rgba(0,0,0,0.55)', lw: 6, weight: 700 }));
  def('pct', [-30, -40, 40, 40], (c) => text(c, '%', 0, 0, { size: 40, fill: '#fff', stroke: 'rgba(0,0,0,0.55)', lw: 6, weight: 700 }));
  def('barBg', [-4, -4, 724, 20], (c) => { rr(c, 0, 0, 720, 16, 8); c.fillStyle = 'rgba(255,255,255,0.18)'; c.fill(); c.lineWidth = 2; c.strokeStyle = 'rgba(255,255,255,0.35)'; c.stroke(); });
  def('barFill', [0, 0, 16, 16], (c) => { const g = c.createLinearGradient(0, 0, 16, 0); g.addColorStop(0, '#7fd8ff'); g.addColorStop(1, '#ffffff'); c.fillStyle = g; c.fillRect(-2, -2, 20, 20); });
  def('snow', [-8, -8, 8, 8], (c) => { const g = c.createRadialGradient(0, 0, 0, 0, 0, 7); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.beginPath(); c.arc(0, 0, 7, 0, 7); c.fill(); });
  // 数字（HUD 46 号白字描深边；红字是钱不够时闪；加载百分比 40 号）
  for (const [id, size, lw, stroke, fill] of [['a', 46, 7, '#2c2f3a', '#ffffff'], ['r', 46, 7, '#2c2f3a', '#ff4a3a'], ['p', 40, 6, 'rgba(0,0,0,0.55)', '#ffffff']])
    for (const ch of '0123456789') def(id + ch, [-lw - 6, -size - lw, size * 0.8 + lw, size + lw], (c) => { c.font = `900 ${size}px ${FONT}`; c.textAlign = 'left'; c.textBaseline = 'middle'; c.lineJoin = 'round'; c.lineWidth = lw; c.strokeStyle = stroke; c.strokeText(ch, 0, 0); c.fillStyle = fill; c.fillText(ch, 0, 0); });
  // 打包
  const cv = createCanvas(AW, AH), c = cv.getContext('2d');
  let x = 2, y = 2, rowH = 0;
  for (const d of defs) {
    const w = Math.ceil(d.b[2] - d.b[0]) + 2, h = Math.ceil(d.b[3] - d.b[1]) + 2;
    if (x + w > AW) { x = 2; y += rowH + 2; rowH = 0; }
    if (y + h > AH) { console.warn('ui atlas full', d.key); break; }
    c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); c.translate(x + 1 - d.b[0], y + 1 - d.b[1]); d.draw(c); c.restore();
    SPR[d.key] = { u0: (x + 1) / AW, v0: (y + 1) / AH, u1: (x + 1 + d.b[2] - d.b[0]) / AW, v1: (y + 1 + d.b[3] - d.b[1]) / AH, b: d.b };
    x += w + 2; rowH = Math.max(rowH, h);
  }
  // 字宽
  c.font = `900 46px ${FONT}`; for (const ch of '0123456789') SPR['a' + ch].adv = SPR['r' + ch].adv = c.measureText(ch).width;
  c.font = `900 40px ${FONT}`; for (const ch of '0123456789') SPR['p' + ch].adv = c.measureText(ch).width;
  atlasTex = new THREE.Texture(cv); atlasTex.colorSpace = THREE.SRGBColorSpace; atlasTex.premultiplyAlpha = true; atlasTex.flipY = false; atlasTex.generateMipmaps = false; atlasTex.minFilter = THREE.LinearFilter; atlasTex.needsUpdate = true;
  initBatch(W, H, coverImg);
  return { LOGO };
}

// ------------------------------------------------------------------ 批量四边形
const MAXQ = 1600;
let geo, mesh, uiScene, uiCam, posA, uvA, alA, nq = 0, coverMesh;
function initBatch(W, H, coverImg) {
  geo = new THREE.BufferGeometry();
  posA = new THREE.BufferAttribute(new Float32Array(MAXQ * 4 * 2), 2).setUsage(THREE.DynamicDrawUsage);
  uvA = new THREE.BufferAttribute(new Float32Array(MAXQ * 4 * 2), 2).setUsage(THREE.DynamicDrawUsage);
  alA = new THREE.BufferAttribute(new Float32Array(MAXQ * 4), 1).setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posA); geo.setAttribute('uv', uvA); geo.setAttribute('aA', alA);
  const idx = new Uint16Array(MAXQ * 6); for (let i = 0; i < MAXQ; i++) idx.set([i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3], i * 6);
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e9);   // 二维坐标，不让 three 自己算
  const mat = new THREE.ShaderMaterial({
    uniforms: { t: { value: atlasTex }, uWH: { value: new THREE.Vector2(W, H) } },
    vertexShader: 'attribute float aA; varying vec2 vU; varying float vA; uniform vec2 uWH; void main(){ vU = uv; vA = aA; gl_Position = vec4(position.x / uWH.x * 2.0 - 1.0, 1.0 - position.y / uWH.y * 2.0, 0.0, 1.0); }',
    fragmentShader: 'uniform sampler2D t; varying vec2 vU; varying float vA; void main(){ gl_FragColor = texture2D(t, vU) * vA; }',
    transparent: true, side: THREE.DoubleSide, depthTest: false, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  });
  mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false;
  uiScene = new THREE.Scene(); uiScene.add(mesh);
  uiCam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  if (coverImg) {
    const ct = new THREE.Texture(coverImg); ct.colorSpace = THREE.SRGBColorSpace; ct.needsUpdate = true;
    const ca = coverImg.width / coverImg.height, sa = W / H;   // 铺满（cover）
    const sx = ca > sa ? sa / ca : 1, sy = ca > sa ? 1 : ca / sa;
    const cg = new THREE.PlaneGeometry(2, 2); const uv = cg.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.5 + (uv.getX(i) - 0.5) * sx, 0.5 + (uv.getY(i) - 0.5) * sy);
    coverMesh = new THREE.Mesh(cg, new THREE.ShaderMaterial({ uniforms: { t: { value: ct }, uA: { value: 1 } }, vertexShader: 'varying vec2 vU; void main(){ vU = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: 'uniform sampler2D t; uniform float uA; varying vec2 vU; void main(){ gl_FragColor = vec4(texture2D(t, vU).rgb, uA); }', transparent: true, depthTest: false, depthWrite: false }));
    coverMesh.frustumCulled = false; coverMesh.renderOrder = -1; uiScene.add(coverMesh);
  }
}
export function setCover(a) { if (!coverMesh) return; coverMesh.visible = a > 0.003; coverMesh.material.uniforms.uA.value = a; }

// spr(key, x, y, { s, sx, sy, rot, a, crop })：锚点在 (x, y)；crop = 只画下面这一截（0..1，气泡进度用）；w/h 覆盖成拉伸到的尺寸
export function spr(key, x, y, o = {}) {
  const S = SPR[key]; if (!S || nq >= MAXQ) return;
  const a = o.a ?? 1; if (a <= 0.003) return;
  const sx = (o.sx ?? o.s ?? 1), sy = (o.sy ?? o.s ?? 1);
  let [bx0, by0, bx1, by1] = S.b; let v0 = S.v0;
  if (o.w !== undefined) { const kx = o.w / (bx1 - bx0), ky = o.h / (by1 - by0); bx0 *= kx; bx1 *= kx; by0 *= ky; by1 *= ky; }
  if (o.crop !== undefined) { const f = Math.max(0, Math.min(1, o.crop)); const ny0 = by1 - (by1 - by0) * f; v0 = S.v1 - (S.v1 - S.v0) * f; by0 = ny0; }
  const cs = Math.cos(o.rot || 0), sn = Math.sin(o.rot || 0);
  const P = posA.array, Uv = uvA.array, Al = alA.array, i = nq * 4;
  const corners = [[bx0, by0, S.u0, v0], [bx1, by0, S.u1, v0], [bx1, by1, S.u1, S.v1], [bx0, by1, S.u0, S.v1]];
  for (let k = 0; k < 4; k++) {
    const [lx, ly, u, v] = corners[k], px = lx * sx, py = ly * sy;
    P[(i + k) * 2] = x + px * cs - py * sn; P[(i + k) * 2 + 1] = y + px * sn + py * cs;
    Uv[(i + k) * 2] = u; Uv[(i + k) * 2 + 1] = v; Al[i + k] = a;
  }
  nq++;
}
export function rect(x, y, w, h, a) { spr('white', x, y, { w, h, a: a }); }   // 白块拉伸成矩形（遮罩、条）
export function num(s, x, y, { set = 'a', align = 'right', sc = 1, a = 1 } = {}) {
  s = String(s); let wsum = 0; for (const ch of s) wsum += (SPR[set + ch] ? SPR[set + ch].adv : 20) * sc;
  let cx = align === 'right' ? x - wsum : align === 'center' ? x - wsum / 2 : x;
  for (const ch of s) { spr(set + ch, cx, y, { s: sc, a }); cx += (SPR[set + ch] ? SPR[set + ch].adv : 20) * sc; }
  return wsum;
}
export function begin() { nq = 0; }
export function flush() {
  posA.needsUpdate = uvA.needsUpdate = alA.needsUpdate = true;
  geo.setDrawRange(0, nq * 6);
  renderer.render(uiScene, uiCam);
}
