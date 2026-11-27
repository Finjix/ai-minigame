// 所有游戏共用（shared/playable）。
// 平台层：微信小游戏 / 浏览器（开发调试用）两套实现，游戏代码只调这里。
export const isWx = typeof wx !== 'undefined' && typeof GameGlobal !== 'undefined';
const ROOT = isWx ? '' : (typeof location !== 'undefined' ? location.pathname.replace(/[^/]*$/, '') : '');

// 单文件 HTML（tools/html.mjs）：资源以 base64 内嵌在 window.__ASSETS[路径]，双击就能玩，不走 fetch
const EMB = !isWx && typeof window !== 'undefined' ? window.__ASSETS : null;
const b64buf = (b) => { const s = atob(b), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u.buffer; };
const MIME = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };

export const query = (() => {
  if (isWx) { try { const o = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync(); return (o && o.query) || {}; } catch (e) { return {}; } }
  const q = {}; new URLSearchParams(location.search).forEach((v, k) => { q[k] = v; }); return q;
})();

export function sysInfo() {
  if (isWx) {
    const w = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    let dev = {}; try { dev = wx.getDeviceInfo ? wx.getDeviceInfo() : wx.getSystemInfoSync(); } catch (e) {}
    let menu = null; try { menu = wx.getMenuButtonBoundingClientRect && wx.getMenuButtonBoundingClientRect(); } catch (e) {}
    const safeTop = (w.safeArea && w.safeArea.top) || w.statusBarHeight || 0;
    return { w: w.windowWidth, h: w.windowHeight, dpr: w.pixelRatio || 2, platform: dev.platform || 'unknown', model: dev.model || '', menu, safeTop };
  }
  return { w: innerWidth, h: innerHeight, dpr: devicePixelRatio || 1, platform: 'browser', model: navigator.userAgent, menu: null, safeTop: 0 };
}

let mainCanvas = null;
export function getMainCanvas() {
  if (mainCanvas) return mainCanvas;
  if (isWx) mainCanvas = GameGlobal.__mainCanvas || wx.createCanvas();   // 第一次调用是上屏画布（game.js 里最先建好）
  else {
    mainCanvas = document.createElement('canvas');
    Object.assign(mainCanvas.style, { position: 'fixed', left: '0', top: '0', width: '100%', height: '100%', display: 'block', touchAction: 'none' });
    document.body.appendChild(mainCanvas);
  }
  if (!mainCanvas.addEventListener) mainCanvas.addEventListener = () => {};
  if (!mainCanvas.removeEventListener) mainCanvas.removeEventListener = () => {};
  if (!mainCanvas.style) mainCanvas.style = {};
  return mainCanvas;
}
export function createCanvas(w, h) {
  if (isWx && !mainCanvas) getMainCanvas();
  const c = isWx ? wx.createCanvas() : document.createElement('canvas');
  c.width = w; c.height = h;
  if (!c.addEventListener) c.addEventListener = () => {};
  return c;
}

export function loadImage(path) {
  return new Promise((res, rej) => {
    const img = isWx ? wx.createImage() : new Image();
    img.onload = () => res(img);
    img.onerror = (e) => rej(new Error('image ' + path + ' ' + (e && e.errMsg || '')));
    img.src = EMB && EMB[path] ? 'data:' + (MIME[path.split('.').pop()] || 'image/png') + ';base64,' + EMB[path] : ROOT + path;
  });
}
export function readBinary(path) {
  if (isWx) return new Promise((res, rej) => wx.getFileSystemManager().readFile({ filePath: path, success: (r) => res(r.data), fail: (e) => rej(new Error('read ' + path + ' ' + e.errMsg)) }));
  if (EMB && EMB[path]) return Promise.resolve(b64buf(EMB[path]));
  return fetch(ROOT + path).then((r) => { if (!r.ok) throw new Error('fetch ' + path + ' ' + r.status); return r.arrayBuffer(); });
}
export function readJSON(path) {
  if (isWx) return new Promise((res, rej) => wx.getFileSystemManager().readFile({ filePath: path, encoding: 'utf8', success: (r) => res(JSON.parse(r.data)), fail: (e) => rej(new Error('read ' + path + ' ' + e.errMsg)) }));
  if (EMB && EMB[path]) return Promise.resolve(JSON.parse(new TextDecoder().decode(b64buf(EMB[path]))));
  return fetch(ROOT + path).then((r) => r.json());
}

// 触摸：统一成 { id, x, y }（窗口逻辑像素）
export function onTouch(start, move, end) {
  const conv = (t) => ({ id: t.identifier, x: t.clientX, y: t.clientY });
  if (isWx) {
    wx.onTouchStart((e) => { for (const t of e.changedTouches) start(conv(t)); });
    wx.onTouchMove((e) => { for (const t of e.changedTouches) move(conv(t)); });
    wx.onTouchEnd((e) => { for (const t of e.changedTouches) end(conv(t)); });
    wx.onTouchCancel((e) => { for (const t of e.changedTouches) end(conv(t)); });
    return;
  }
  const c = getMainCanvas();
  const p = (e) => ({ id: e.pointerId, x: e.clientX, y: e.clientY });
  c.addEventListener('pointerdown', (e) => { try { c.setPointerCapture(e.pointerId); } catch (_) {} start(p(e)); });
  c.addEventListener('pointermove', (e) => move(p(e)));
  c.addEventListener('pointerup', (e) => end(p(e)));
  c.addEventListener('pointercancel', (e) => end(p(e)));
}

// ?raf=timer：浏览器里用定时器驱动主循环（调试窗格在后台时 requestAnimationFrame 不触发，自动玩跑不起来）
export const raf = (f) => (isWx ? requestAnimationFrame(f) : query.raf === 'timer' ? setTimeout(() => f(performance.now()), 16) : window.requestAnimationFrame(f));
export const now = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now());

export function createAudioContext() {
  try {
    if (isWx) return wx.createWebAudioContext ? wx.createWebAudioContext() : null;
    const AC = window.AudioContext || window.webkitAudioContext; return AC ? new AC() : null;
  } catch (e) { console.warn('audio ctx', e); return null; }
}
export function onShowHide(show, hide) {
  if (isWx) { wx.onShow && wx.onShow(show); wx.onHide && wx.onHide(hide); return; }
  document.addEventListener('visibilitychange', () => (document.hidden ? hide() : show()));
}
export function vibrate() { try { if (isWx) wx.vibrateShort && wx.vibrateShort({ type: 'light' }); else navigator.vibrate && navigator.vibrate(30); } catch (e) {} }

// ---- 试玩平台接口
const T0 = now();
const reported = new Set();
export function report(id, result = 1, once = true) {
  if (once && reported.has(id)) return; reported.add(id);
  try { if (isWx && wx.reportGameEvent) wx.reportGameEvent({ eventId: id, costTime: Math.round(now() - T0), result }); } catch (e) {}
}
// 时长节点：前 1 分钟每 30 秒一次（30、60），1–2 分钟每 10 秒一次（70…120）；编号 = 3000 + 秒数（3030 … 3120）。
// t 用游戏时间（首帧起算、切后台不走），和 115 秒强制结束、结束后 5 秒强制跳转同一个时钟；每帧调，跨过几个节点就补几个
export const TIME_MARKS = [30, 60, 70, 80, 90, 100, 110, 120];
let markI = 0;
export function reportTime(t) {
  while (markI < TIME_MARKS.length && t >= TIME_MARKS[markI]) {
    const s = TIME_MARKS[markI++];
    console.log('[flow] time ' + s + 's → ' + (3000 + s) + ' t=' + t.toFixed(1));
    report(3000 + s);
  }
}
// 「跳转」：微信里是 wx.notifyMiniProgramPlayableStatus({ isEnd: true })——平台收到就接管（试玩画面没了，出平台自己的落地页），
// 渠道里是 super_html.download()。所以结束页出来时只通知渠道 game_end，不跳转；跳转只在玩家点「立即体验」（download）
// 或结束页出来 T.endJump 秒（autoJump）时发生，结束页才能完整显示 5 秒。
const SH = () => (typeof window !== 'undefined' && window.super_html) || null;
const wxEnd = () => { try { if (isWx && wx.notifyMiniProgramPlayableStatus) wx.notifyMiniProgramPlayableStatus({ isEnd: true }); } catch (e) {} };
let endSent = false;
// 结束页出来：渠道里 super_html.game_end()（只通知，不跳转）；微信里什么都不发（isEnd 等于跳转）
export function gameEnd() {
  if (endSent) return; endSent = true;
  console.log('game end');
  try { const s = SH(); if (s && s.game_end) s.game_end(); } catch (e) {}
}
// 玩家点「立即体验」：报 1012（每次都报），然后跳转
export function download() {
  console.log('# playable_controller download: ' + ((typeof window !== 'undefined' && window.super_html_channel) || 'common') + ' #');
  report(1012, 1, false);
  if (isWx) { wxEnd(); return; }
  try { const s = SH(); if (s && s.download) s.download(); } catch (e) {}
}
// 强制跳转一次：结束页出来 T.endJump 秒（5），不管点没点过「立即体验」；加载失败时也用它把试玩交还给平台。不算玩家点击，不报 1012
let jumped = false;
export function autoJump() {
  if (jumped) return; jumped = true;
  console.log('# playable_controller download: auto #');
  if (isWx) { wxEnd(); return; }
  try { const s = SH(); if (s && s.download) s.download(); } catch (e) {}
  gameEnd();
}
