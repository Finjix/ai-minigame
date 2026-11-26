// 顾客等急了的动作：从原工程 web/custactions.js（V15）移植，叠在 idle 骨骼动画上的程序化旋转。只留 V15 的写法，去掉旧版本开关。
//   u 0→1 是这一下动作的进度；每个动作两头都回到站姿。角色空间：朝 +z、右手在 -x、y 向上（和 chars.js 的 obj 一致）
//   顾客模型 cust.glb 就是原工程的顾客，骨骼名 Bip001-*
// 用法（每帧）：undoAction(c) → c.update(dt)（混合器出 idle）→ applyAction(c, 名字, u, 强度)
//   three.js 的混合器算出的值和上一帧一样时不往骨头上写，所以叠上去的旋转要先用 undoAction 还原
import * as THREE from 'three';
import { smooth, clamp01 } from '../../../shared/playable/util.js';

const _qp = new THREE.Quaternion(), _qd = new THREE.Quaternion(), _qo = new THREE.Quaternion(), _qi = new THREE.Quaternion(), _ax = new THREE.Vector3();
function rotC(c, name, ax, ay, az, ang) {
  const b = c.bones[name]; if (!b || Math.abs(ang) < 1e-5) return;
  const U = c._actUndo || (c._actUndo = []); if (!U.some((r) => r[0] === b)) U.push([b, b.quaternion.clone()]);
  c.obj.getWorldQuaternion(_qo); _ax.set(ax, ay, az).normalize().applyQuaternion(_qo);
  b.parent.getWorldQuaternion(_qp);   // 只沿父链往上算（原工程是 updateMatrixWorld(true) 整棵子树刷新，11 个人每个子步刷几万次，帧率掉一半）
  _qd.setFromAxisAngle(_ax, ang);
  _qi.copy(_qp).invert();
  b.quaternion.premultiply(_qi.multiply(_qd).multiply(_qp));
}
const env = (u, a, b, c, d) => smooth((u - a) / (b - a)) * (1 - smooth((u - c) / (d - c)));
const bump = (u, c, w) => { const x = (u - c) / w; return Math.abs(x) < 1 ? 0.5 + 0.5 * Math.cos(Math.PI * x) : 0; };
const R = 'Bip001-R-', L = 'Bip001-L-';
// 快起慢落的一下（r 秒升、f 秒落，按动作进度算）；burst = 几下推 + 每下之前的蓄力（往后收）
const skew = (u, c, r, f) => (u < c ? (u > c - r ? 0.5 - 0.5 * Math.cos(Math.PI * (u - c + r) / r) : 0) : (u < c + f ? 0.5 + 0.5 * Math.cos(Math.PI * (u - c) / f) : 0));
const PEAKS = { push: [[0.38, 0.95], [0.66, 1.05]], push3: [[0.33, 0.85], [0.52, 0.95], [0.71, 1.15]] };
const burst = (u, pk) => { let p = 0, a = 0; for (const [c, w] of pk) { p += w * skew(u, c, 0.035, 0.085); a += w * bump(u, c - 0.065, 0.035); } return [p, a]; };
const K = { s0: 0.14, s0p: 0.12, s0a: 0.06, s1: 0.24, s1p: 0.16, s1a: 0.1, ua: 1.55, ul: 0.75, fa: 1.0, fp: 0.8, hp: 0.04, hl: 0.6, sh0: 0.16, shh: 0.1, shd: 0.08, shr: 0.34, shl: 0.5, sl: 0.12, slh: -0.12, bh: 0.3 };
function pushN(c, u, k, pk, e) {   // 两手按在木桩上往前推几下：上身压过去、手臂伸直，蓄力时往后收
  const [p0, a0] = burst(u, pk.map(([cu]) => [cu, 1])), p = p0 * k, a = a0 * k;
  const s0 = K.s0 * e + K.s0p * p - K.s0a * a, s1 = K.s1 * e + K.s1p * p - K.s1a * a, lean = s0 + s1;
  rotC(c, 'Bip001-Spine', 1, 0, 0, s0); rotC(c, 'Bip001-Spine1', 1, 0, 0, s1);
  const ua = -(K.ua * e + K.ul * lean);
  rotC(c, R + 'UpperArm', 1, 0, 0, ua); rotC(c, L + 'UpperArm', 1, 0, 0, ua);
  rotC(c, R + 'UpperArm', 0, 1, 0, 0.28 * e); rotC(c, L + 'UpperArm', 0, 1, 0, -0.28 * e);
  rotC(c, R + 'Forearm', 1, 0, 0, -(K.fa * e + 0.3 * a - K.fp * p)); rotC(c, L + 'Forearm', 1, 0, 0, -(K.fa * e + 0.3 * a - K.fp * p));
  rotC(c, R + 'Clavicle', 0, 1, 0, 0.2 * p); rotC(c, L + 'Clavicle', 0, 1, 0, -0.2 * p);
  rotC(c, R + 'Thigh', 1, 0, 0, -0.32 * e); rotC(c, R + 'Calf', 1, 0, 0, 0.26 * e);
  rotC(c, L + 'Thigh', 1, 0, 0, 0.14 * p); rotC(c, L + 'Calf', 1, 0, 0, -0.08 * p);
  rotC(c, 'Bip001-Head', 1, 0, 0, K.hp * p - 0.05 * a - K.hl * lean);
}

// D：原速一下多长（秒）
export const ACTIONS = {
  raise: { D: 1.3, fn(c, u, k) {   // 单手斜举过肩、握拳往上捶两下，身子往前探、抬头
    const e = env(u, 0, 0.22, 0.8, 1) * k, pump = (bump(u, 0.42, 0.11) + bump(u, 0.64, 0.11)) * k;
    rotC(c, 'Bip001-Spine1', 1, 0, 0, 0.2 * e);
    rotC(c, R + 'UpperArm', 0, 0, 1, -2.15 * e - 0.3 * pump); rotC(c, R + 'UpperArm', 1, 0, 0, -0.3 * e);
    rotC(c, R + 'Forearm', 0, 0, 1, -(0.2 * e + 1.1 * pump));
    rotC(c, L + 'UpperArm', 0, 0, 1, 0.15 * e);
    rotC(c, 'Bip001-Head', 1, 0, 0, -0.2 * e);
  } },
  wave: { D: 1.2, fn(c, u, k) {   // 短促挥手催：右手斜举，前臂左右挥三下
    const e = env(u, 0, 0.2, 0.82, 1) * k, w = Math.sin(2 * Math.PI * 3 * clamp01((u - 0.16) / 0.68)) * smooth(u / 0.25) * (1 - smooth((u - 0.75) / 0.2));
    rotC(c, 'Bip001-Spine1', 1, 0, 0, 0.16 * e);
    rotC(c, R + 'UpperArm', 0, 0, 1, -2.0 * e); rotC(c, R + 'UpperArm', 1, 0, 0, -0.35 * e);
    rotC(c, R + 'Forearm', 0, 0, 1, -0.5 * e + 0.75 * w * k);
  } },
  bothUp: { D: 1.0, fn(c, u, k) {   // 双手举成 V 字 + 耸肩（「快点啊！」），人往上小跳在 rootOffset
    const e = env(u, 0, 0.2, 0.62, 1) * k, sh = 0.12 * bump(u, 0.4, 0.22) * k;
    rotC(c, 'Bip001-Spine1', 1, 0, 0, -0.1 * e);
    rotC(c, R + 'UpperArm', 0, 0, 1, -2.0 * e); rotC(c, L + 'UpperArm', 0, 0, 1, 2.0 * e);
    rotC(c, R + 'Clavicle', 0, 0, 1, -sh); rotC(c, L + 'Clavicle', 0, 0, 1, sh);
    rotC(c, R + 'UpperArm', 1, 0, 0, -0.25 * e); rotC(c, L + 'UpperArm', 1, 0, 0, -0.25 * e);
    rotC(c, R + 'Forearm', 0, 0, 1, -0.35 * e); rotC(c, L + 'Forearm', 0, 0, 1, 0.35 * e);
  } },
  stomp: { D: 1.1, fn(c, u, k) {   // 原地跺脚两下，两手握拳往身边收
    const e = env(u, 0, 0.12, 0.85, 1) * k, lift = (bump(u, 0.3, 0.17) + bump(u, 0.66, 0.17)) * k;
    rotC(c, 'Bip001-Spine1', 1, 0, 0, 0.18 * e);
    rotC(c, R + 'Thigh', 1, 0, 0, -1.0 * lift); rotC(c, R + 'Calf', 1, 0, 0, 1.35 * lift);
    rotC(c, R + 'UpperArm', 0, 0, 1, 0.2 * e); rotC(c, L + 'UpperArm', 0, 0, 1, -0.2 * e);
    rotC(c, R + 'Forearm', 1, 0, 0, -0.5 * e); rotC(c, L + 'Forearm', 1, 0, 0, -0.5 * e);
  } },
  shift: { D: 1.6, fn(c, u, k) {   // 换重心 + 左右张望
    const e = env(u, 0, 0.15, 0.85, 1) * k, s = Math.sin(2 * Math.PI * u);
    rotC(c, 'Bip001-Pelvis', 0, 0, 1, 0.06 * s * e); rotC(c, 'Bip001-Spine', 0, 0, 1, -0.08 * s * e);
    rotC(c, 'Bip001-Head', 0, 1, 0, 0.35 * s * e);
  } },
  push: { D: 1.5, fn(c, u, k) { pushN(c, u, k, PEAKS.push, env(u, 0, 0.16, 0.86, 1) * k); } },
  push3: { D: 1.7, fn(c, u, k) { pushN(c, u, k, PEAKS.push3, env(u, 0, 0.12, 0.88, 1) * k); } },
  slap: { D: 1.05, fn(c, u, k) {   // 拍栏：手抬高、身子往后拧蓄力 → 很快拍下去 → 慢慢收；左手再跟一下
    const e = env(u, 0, 0.12, 0.86, 1) * k, up = smooth(u / 0.34) * (1 - smooth((u - 0.38) / 0.05)), hit = skew(u, 0.43, 0.03, 0.09), up2 = bump(u, 0.62, 0.08), hit2 = skew(u, 0.7, 0.03, 0.08);
    const fw = smooth((u - 0.36) / 0.06) * (1 - smooth((u - 0.55) / 0.12)), fw2 = smooth((u - 0.62) / 0.06) * (1 - smooth((u - 0.82) / 0.1));
    rotC(c, 'Bip001-Spine1', 1, 0, 0, (0.14 * e + K.sl * hit + 0.18 * hit2 - 0.08 * up) * k); rotC(c, 'Bip001-Spine1', 0, 1, 0, (0.26 * up - 0.16 * hit) * k);
    rotC(c, R + 'UpperArm', 0, 0, 1, -(2.35 * up + 0.1 * hit) * k); rotC(c, R + 'UpperArm', 1, 0, 0, -(0.3 * up + 1.75 * fw) * k); rotC(c, R + 'UpperArm', 0, 1, 0, 0.36 * fw * k);
    rotC(c, R + 'Forearm', 0, 0, 1, -(0.7 * up) * k); rotC(c, R + 'Forearm', 1, 0, 0, -(0.35 * up) * k);
    rotC(c, L + 'UpperArm', 0, 0, 1, (1.2 * up2 * (1 - fw2)) * k); rotC(c, L + 'UpperArm', 1, 0, 0, -(0.25 * up2 + 1.55 * fw2) * k); rotC(c, L + 'UpperArm', 0, 1, 0, -0.3 * fw2 * k);
    rotC(c, R + 'Thigh', 1, 0, 0, -0.2 * e); rotC(c, 'Bip001-Head', 1, 0, 0, K.slh * hit * k);
  } },
  shoulder: { D: 1.45, fn(c, u, k) {   // 一脚往前踏稳 → 侧身用肩膀撞过去 → 顶住 → 收回
    const e = env(u, 0, 0.18, 0.8, 1) * k, step = env(u, 0.04, 0.22, 0.78, 0.95) * k, hit = skew(u, 0.42, 0.04, 0.1) * k, hold = env(u, 0.38, 0.46, 0.66, 0.8) * k, anti = bump(u, 0.35, 0.04) * k;
    rotC(c, 'Bip001-Pelvis', 0, 1, 0, 0.4 * e); rotC(c, 'Bip001-Spine', 0, 1, 0, 0.34 * e);
    rotC(c, 'Bip001-Spine1', 1, 0, 0, K.sh0 * e + K.shh * hit + K.shd * hold - 0.1 * anti); rotC(c, 'Bip001-Spine1', 0, 0, 1, -K.shr * (hit + hold));
    rotC(c, 'Bip001-Head', 0, 0, 1, K.shl * (hit + hold)); rotC(c, 'Bip001-Head', 1, 0, 0, -0.5 * K.shl * (hit + hold));
    rotC(c, L + 'Thigh', 1, 0, 0, -0.65 * step); rotC(c, L + 'Calf', 1, 0, 0, 0.4 * step);
    rotC(c, R + 'Thigh', 1, 0, 0, 0.15 * hit); rotC(c, R + 'Calf', 1, 0, 0, -0.1 * hit);
    rotC(c, L + 'UpperArm', 0, 0, 1, 0.5 * e); rotC(c, L + 'UpperArm', 1, 0, 0, -0.6 * e);
    rotC(c, R + 'UpperArm', 0, 0, 1, 0.35 * e); rotC(c, R + 'Forearm', 1, 0, 0, -0.9 * e);
  } },
  brace: { D: 1.6, fn(c, u, k) {   // 被后面挤着：靠到围栏上双手撑住，一阵一阵地扛
    const e = env(u, 0, 0.2, 0.82, 1) * k, pr = (0.6 + 0.4 * Math.sin(u * Math.PI * 6)) * env(u, 0.15, 0.3, 0.75, 0.9) * k;
    rotC(c, 'Bip001-Spine', 1, 0, 0, 0.14 * e + 0.06 * pr); rotC(c, 'Bip001-Spine1', 1, 0, 0, 0.22 * e + 0.08 * pr);
    rotC(c, R + 'UpperArm', 1, 0, 0, -1.4 * e); rotC(c, L + 'UpperArm', 1, 0, 0, -1.4 * e); rotC(c, R + 'UpperArm', 0, 1, 0, 0.4 * e); rotC(c, L + 'UpperArm', 0, 1, 0, -0.4 * e);
    rotC(c, R + 'Forearm', 1, 0, 0, -(0.8 * e - 0.3 * pr)); rotC(c, L + 'Forearm', 1, 0, 0, -(0.8 * e - 0.3 * pr));
    rotC(c, 'Bip001-Head', 1, 0, 0, -K.bh * e);
  } },
};
// 攻击动作发力最狠的那几下（u, 力度）：围栏的晃动、闪红对准这些时刻
export const HIT_PEAKS = { push: PEAKS.push, push3: PEAKS.push3, slap: [[0.43, 1.1], [0.7, 0.7]], shoulder: [[0.42, 1.15]], brace: [[0.3, 0.45], [0.47, 0.5], [0.63, 0.5]] };
// 整个人的小位移（角色空间 [x, y, z]，+z 朝前）：推的时候往前冲、双手抬起时小跳、跺脚时一沉
const R15 = {
  push: (u) => { const [p, a] = burst(u, PEAKS.push.map(([cu]) => [cu, 1])); return [0, 0, 0.035 * env(u, 0, 0.16, 0.86, 1) + 0.075 * p - 0.03 * a]; },
  push3: (u) => { const [p, a] = burst(u, PEAKS.push3.map(([cu]) => [cu, 1])); return [0, 0, 0.035 * env(u, 0, 0.12, 0.88, 1) + 0.075 * p - 0.03 * a]; },
  slap: (u) => [0, 0, 0.055 * skew(u, 0.43, 0.03, 0.09) + 0.035 * skew(u, 0.7, 0.03, 0.08) - 0.02 * bump(u, 0.3, 0.08)],
  shoulder: (u) => [0.04 * skew(u, 0.42, 0.04, 0.1), 0, 0.07 * env(u, 0.04, 0.22, 0.78, 0.95) + 0.08 * skew(u, 0.42, 0.04, 0.1)],
  bothUp: (u) => [0, 0.08 * bump(u, 0.36, 0.2), 0],
  stomp: (u) => [0, -0.025 * (bump(u, 0.4, 0.07) + bump(u, 0.76, 0.07)), 0],
  brace: (u) => [0, 0, 0.035 * env(u, 0, 0.2, 0.82, 1)],
};
export const rootOffset = (name, u) => (R15[name] ? R15[name](u) : null);
export function undoAction(c) { const U = c._actUndo; if (U) { for (const [b, q] of U) b.quaternion.copy(q); c._actUndo = null; } }
export function applyAction(c, name, u, k = 1) { const A = ACTIONS[name]; if (!A || k <= 0) return; A.fn(c, clamp01(u), k); }

// 排程：一个人轮流做 pick() 挑出来的动作，动作之间停 gap() 秒。每帧调 step（自己会 undo → 混合器 → 叠动作），返回这一帧的整体位移和刚过去的发力点
export function actor(c, pick, gap, t0 = 0) { return { c, s: null, next: t0, pick, gap, hits: [] }; }
export function stepActor(A, t, dt, on = true, k = 1) {
  undoAction(A.c); A.c.update(dt);
  const fired = [];
  if (!A.s && on && t >= A.next) {
    const a = A.pick(), sp = 0.85 + 0.3 * Math.random();
    A.s = { a, t0: t, t1: t + ACTIONS[a].D / sp };
    A.hits = (HIT_PEAKS[a] || []).map(([u, w]) => [A.s.t0 + u * (A.s.t1 - A.s.t0), w]);
  }
  let off = null;
  if (A.s) {
    const u = (t - A.s.t0) / (A.s.t1 - A.s.t0);
    if (u >= 1) { A.s = null; A.next = t + A.gap(); }
    else {
      applyAction(A.c, A.s.a, u, on ? k : k * (1 - smooth(u)));
      off = rootOffset(A.s.a, u);
      while (A.hits.length && A.hits[0][0] <= t) fired.push(A.hits.shift()[1]);
    }
  }
  return { off, fired, a: A.s ? A.s.a : null };
}
