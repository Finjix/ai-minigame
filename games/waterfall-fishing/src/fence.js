// 柜台两边靠人群的那两段圆木栅栏 + 贴着栅栏的第一排顾客（成片里他们一直在推、拍、撞栅栏，木桩被推的那几根闪红、往院子里晃）
// 原工程里这两段的圆木是一根根单独摆的（要闪红、晃动），烘底图时被当成会动的东西藏掉了，所以底图里这里没有栅栏，这里用 3D 补回来：
//   圆木的颜色不另外画，直接取底图里北边那段同款圆木（同一个模型、同样高，同一台烘焙相机拍的写实像素）：
//   新圆木上每个点 = 参考圆木上相同相对位置的点，投到烘焙相机里取色。圆木晃的时候颜色跟着木头走
import * as THREE from 'three';
import { L } from './config.js';
import { scene, addCaster, BAKE_VP, U, envMat } from './world.js';
import { makeChar } from './chars.js';
import { actor, stepActor } from './custactions.js';
import { hash } from '../../../shared/playable/util.js';
import { query } from '../../../shared/playable/platform.js';

const LOG_R = 0.155, LOG_H = 1.15;
const FZ = L.plaza[3];   // 栅栏线（院子南边）
// 原工程 env.js palisade 的两段（柜台口 x -1.45 ~ 2.1），每 0.3m 一根；两头的转角桩属于东西两边的栅栏，底图里有
const SEGS = [[-4.565, -1.45], [2.1, 4.174]];
// 参考圆木：西边那段 [-4.565, -2.54] → [-4.565, 8.0]（35 段）靠南的几根：和南段直接连着、颜色一样，背后是雪地，前面没有东西挡
//   （北边那段背后是水，顶面边上会采到水的青色，顶上还积着雪，和南段两头接不上）
const REF = [28, 29, 30].map((i) => [-4.565, -0.01, -2.54 + i * ((FZ + 2.54) / 35)]);

const VS = `varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const FS = `precision highp float; uniform sampler2D tCol; uniform mat4 uVP; uniform vec3 uRef; uniform float uGlow; uniform vec2 uRes; uniform float uVig; varying vec3 vL;
void main(){
  vec4 c = uVP * vec4(uRef + vL * vec3(0.9, 0.99, 0.9), 1.0); vec2 uv = c.xy / c.w * 0.5 + 0.5;   // 往圆心收一点，边上不采到背后的雪地
  vec3 col = texture2D(tCol, uv).rgb;
  col = col + vec3(1.0, 0.165, 0.118) * 0.5 * uGlow;   // 被推的那一下闪红（叠加，木纹和明暗还在）
  vec2 d = gl_FragCoord.xy / uRes - 0.5; col *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d * vec2(1.0, 1.25)));
  gl_FragColor = vec4(col, 1.0);
}`;

const logs = [], row = [];
let P = null, emo = null;
export function buildFence(protos, emoList) {
  P = protos; emo = emoList;
  const geo = new THREE.CylinderGeometry(LOG_R, LOG_R, LOG_H, 14, 1); geo.translate(0, LOG_H / 2, 0);
  let k = 0;
  SEGS.forEach(([x0, x1], si) => {
    const n = Math.max(1, Math.round((x1 - x0) / 0.3));
    for (let i = 0; i <= n; i++, k++) {
      if ((si === 0 && i === 0) || (si === 1 && i === n)) continue;   // 转角桩底图里有
      const x = x0 + (x1 - x0) * (i / n);
      const m = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: FS,
        uniforms: { tCol: envMat.uniforms.tCol, uVP: { value: BAKE_VP }, uRef: { value: new THREE.Vector3(...REF[k % REF.length]) }, uGlow: { value: 0 }, uRes: U.uRes, uVig: U.uVig } });
      const mesh = new THREE.Mesh(geo, m); mesh.position.set(x, -0.01, FZ); mesh.castShadow = true; mesh.frustumCulled = false;
      scene.add(mesh); addCaster(mesh);
      logs.push({ mesh, x, d: 0, v: 0, I: 0 });
    }
  });
  // ?fencedbg=1：在参考圆木原位放一根（对齐了就看不出来；半径、采样不对会露边）
  if (query.fencedbg) for (const r of REF) { const m = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: FS, uniforms: { tCol: envMat.uniforms.tCol, uVP: { value: BAKE_VP }, uRef: { value: new THREE.Vector3(...r) }, uGlow: { value: +query.fencedbg - 1 }, uRes: U.uRes, uVig: { value: 0 } } });
    const mesh = new THREE.Mesh(geo, m); mesh.position.set(...r); scene.add(mesh); }
  // 第一排：离栅栏 0.55m（原工程 crowdsim 的 frontGap），面朝院子
  const xs = [-4.1, -3.5, -2.9, -2.3, -1.75, 2.45, 3.05, 3.65];
  xs.forEach((x, i) => {
    const c = makeChar(P.cust, P.custTex); const p = [x + (hash(i * 3.7) - 0.5) * 0.12, FZ + 0.55 + (hash(i * 5.1) - 0.5) * 0.06];
    c.obj.position.set(p[0], 0, p[1]); c.face(Math.PI); c.play('idle', 0, 0.9 + 0.2 * hash(i)); scene.add(c.obj);
    c.mixer.setTime(hash(i * 9.1) * 2);
    // 两到三下一组的推、拍、撞，组和组之间停一会；偶尔举手、跺脚
    let burst = 0;
    const pick = () => {
      if (burst <= 0) burst = 2 + (Math.random() < 0.45 ? 1 : 0);
      burst--;
      const r = Math.random();
      return r < 0.12 ? (Math.random() < 0.5 ? 'raise' : 'bothUp') : ['push3', 'slap', 'shoulder', 'push3', 'slap', 'push', 'brace'][Math.floor(Math.random() * 7)];
    };
    const gap = () => (burst > 0 ? 0.05 + 0.2 * Math.random() : 0.6 + 0.9 * Math.random());
    row.push({ A: actor(c, pick, gap, 0.3 + 2.2 * hash(i * 4.7)), p });
  });
}

export function updateFence(t, dt) {
  for (const r of row) {
    const { off, fired } = stepActor(r.A, t, dt);
    const c = r.A.c, h = c.heading;
    let x = r.p[0], y = 0, z = r.p[1];
    if (off) { x += off[0] * Math.cos(h) + off[2] * Math.sin(h); y += off[1]; z += -off[0] * Math.sin(h) + off[2] * Math.cos(h); }
    c.obj.position.set(x, y, z);
    for (const w of fired) {
      for (const lg of logs) { const dx = Math.abs(lg.x - r.p[0]); if (dx > 0.5) continue; const f = Math.exp(-((dx / 0.32) ** 2)); lg.v += 0.95 * w * f; lg.I = Math.max(lg.I, Math.min(1, w * f)); }
      if (w >= 0.9 && Math.random() < 0.22) emo.push({ kind: Math.random() < 0.5 ? 'ang1' : 'ang0', p: [r.p[0], 2.05, r.p[1]], t0: t, dur: 1.0 });
    }
  }
  // 木桩：被推的弹一下（往院子里倒、再弹回来），闪红很快亮起、平滑淡出
  for (const lg of logs) {
    const a = -70 * lg.d - 10 * lg.v; lg.v += a * dt; lg.d += lg.v * dt;
    lg.I *= Math.exp(-dt / 0.13);
    lg.mesh.rotation.x = -1.25 * lg.d; lg.mesh.position.z = FZ - 0.9 * lg.d;
    lg.mesh.material.uniforms.uGlow.value = lg.I;
  }
}
export const fenceState = () => ({ logs, row });
