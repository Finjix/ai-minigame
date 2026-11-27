// 中间跳转页：游戏时间满 at 秒（60）暂停游戏，弹出「立即体验」页（压暗 + 大 logo + 大按钮，和结束页同一套），
// 按钮下面一行「N 秒后继续游戏」（不要进度条），倒计时 dur 秒（5，真实时间）。
// 点大按钮 = 玩家点「立即体验」（download，报 1012）；倒计时完没点就回到游戏，接着原来的状态玩。
// 只弹一次；到点时结束页已经出来了就不弹。点按钮以外的地方不做事（防误触）。
// 打点：弹出 3200，倒计时完回到游戏 3201。
// 用法（main.js）：
//   const MID = createMid({ W, H, at: T.mid, dur: T.midDur });
//   主循环追帧：MID.on 时游戏时间不走；每一步 updateFlow 之后 if (MID.check(gameT, rt, flow.ended)) { 松开摇杆; break; }，循环外 MID.update(rt)
//   touchStart 里最先 if (MID.touch(x, y)) return;   界面最后画 MID.draw(rt)
import * as UI from './ui.js';
import { report, download } from './platform.js';
import { smooth, backOut } from './util.js';

export function createMid({ W, H, at = 60, dur = 5 }) {
  const btn = { x: W / 2, y: H * 0.55, w: 600, h: 150 };
  const m = { at, dur, on: false, done: false, t0: 0, closeT: -9 };
  const close = (why, rt) => { m.on = false; m.done = true; m.closeT = rt; console.log('[flow] mid close ' + why); if (why === 'timeout') report(3201); };
  // 游戏时间到点就弹；返回 true 表示这一刻刚弹出（调用方松开摇杆、停止追帧）
  m.check = (gameT, rt, ended) => {
    if (m.done || m.on || ended || gameT < at) return false;
    m.on = true; m.t0 = rt; console.log('[flow] mid open t=' + gameT.toFixed(1)); report(3200);
    return true;
  };
  m.update = (rt) => { if (m.on && rt - m.t0 >= dur) close('timeout', rt); };
  // 弹着的时候吞掉所有触摸；点中大按钮就跳转
  m.touch = (x, y, rt) => {
    if (!m.on) return false;
    if (Math.abs(x - btn.x) <= btn.w / 2 + 10 && Math.abs(y - btn.y) <= btn.h / 2 + 10) { download(false); close('click', rt); }
    return true;
  };
  m.draw = (rt) => {
    if (!m.on) { const k = 1 - smooth((rt - m.closeT) / 0.2); if (k > 0.01) UI.spr('black', 0, 0, { w: W, h: H, a: 0.55 * k }); return; }   // 关掉时压暗淡出
    const r = rt - m.t0, s = smooth(r / 0.25), o = backOut((r - 0.1) / 0.45), c = backOut((r - 0.3) / 0.45);
    UI.spr('black', 0, 0, { w: W, h: H, a: 0.55 * s });
    if (o > 0.01) UI.spr('logoBig', W / 2, H * 0.4, { s: o });
    if (c > 0.01) UI.spr('btnEnd', btn.x, btn.y, { s: c * (1 + 0.05 * Math.sin(r * 6)) });
    const left = Math.max(0, dur - r), n = Math.min(Math.ceil(dur), Math.max(1, Math.ceil(left))), a = smooth((r - 0.3) / 0.3);
    UI.spr('midTip' + n, W / 2, H * 0.65, { a });
  };
  return m;
}
