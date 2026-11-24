// 小工具（缓动函数和参考试玩同名同式）
export const clamp01 = (t) => Math.min(1, Math.max(0, t));
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, k) => a + (b - a) * k;
export const smooth = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };
export const backOut = (t) => { t = clamp01(t); const r = 1.7; return 1 + (r + 1) * (t - 1) ** 3 + r * (t - 1) ** 2; };
export const easeInOut = (t) => { t = clamp01(t); return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2; };
export const hash = (t) => { const r = Math.sin(t * 127.1 + 311.7) * 43758.5453; return r - Math.floor(r); };
export const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
export const wrapA = (a) => Math.atan2(Math.sin(a), Math.cos(a));
export const turnTo = (a, b, k) => a + wrapA(b - a) * k;
export const inRect = (p, r, m = 0) => p[0] >= r[0] - m && p[0] <= r[1] + m && p[1] >= r[2] - m && p[1] <= r[3] + m;
export function damp(cur, tgt, lambda, dt) { return lerp(cur, tgt, 1 - Math.exp(-lambda * dt)); }
// 抛物线：从 a 到 b（[x,y,z]），弧高 h，进度 k
export function arc(out, a, b, h, k) {
  out[0] = lerp(a[0], b[0], k); out[1] = lerp(a[1], b[1], k) + Math.sin(Math.PI * k) * h; out[2] = lerp(a[2], b[2], k); return out;
}
