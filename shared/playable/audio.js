// 所有游戏共用（shared/playable）。
// 声音：音效合集（一个 mp3 + 片段表）和配乐，WebAudio 播（微信里 wx.createWebAudioContext）。
import { createAudioContext, readBinary, readJSON, onShowHide } from './platform.js';

let ctx = null, sfx = null, bgm = null, endBuf = null, clips = {}, master = null, bgmSrc = null, info = null, muted = false;
const last = {};
const decode = (buf) => new Promise((res, rej) => { try { const p = ctx.decodeAudioData(buf, res, rej); if (p && p.then) p.then(res, rej); } catch (e) { rej(e); } });
// 声音不能卡住加载：水下巨木的 audio.json 是 GBK，iOS 试玩环境按 utf8 读它两个回调都不来，加载停在 96%（现在 build.mjs 会查 JSON 编码）。
// 所以 initAudio 最多等 AUDIO_WAIT 毫秒就放行，解码完了的声音之后照样能用（配乐晚到就晚点响）
const AUDIO_WAIT = 5000;
let wantBgm = null, ended = false;
export function initAudio(base = 'assets/audio/') {
  const job = loadAudio(base).catch((e) => console.warn('audio', e));
  return Promise.race([job, new Promise((r) => setTimeout(() => { if (!bgm) console.warn('[flow] audio not ready after ' + AUDIO_WAIT + 'ms'); r(); }, AUDIO_WAIT))]);
}
async function loadAudio(base) {
  ctx = createAudioContext(); if (!ctx) return;
  master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
  try {
    info = await readJSON(base + 'audio.json'); clips = info.clips;
    const [a, b, c] = await Promise.all([readBinary(base + 'sfx.mp3'), readBinary(base + 'bgm.mp3'), readBinary(base + 'endcard.mp3')]);
    // 三个分开解码：一个解不了不耽误别的
    await Promise.all([decode(a).then((x) => { sfx = x; }), decode(b).then((x) => { bgm = x; if (wantBgm) startBgm(wantBgm); }), decode(c).then((x) => { endBuf = x; })].map((p) => p.catch((e) => console.warn('audio decode', e))));
  } catch (e) { console.warn('audio load', e); }
  onShowHide(() => { try { ctx.resume && ctx.resume(); } catch (e) {} }, () => { try { ctx.suspend && ctx.suspend(); } catch (e) {} });
}
export function resume() { try { if (ctx && ctx.state === 'suspended') ctx.resume(); } catch (e) {} }
// play('coin', { vol, gap })：gap 秒内同一个声音只响一次（钞票一捆捆飞，叮叮声不糊成一片）
export function play(name, { vol = 1, gap = 0.04, rate = 1 } = {}) {
  if (!ctx || !sfx || muted) return;
  const c = clips[name]; if (!c) return;
  const t = ctx.currentTime; if (last[name] !== undefined && t - last[name] < gap) return; last[name] = t;
  try {
    const s = ctx.createBufferSource(); s.buffer = sfx; s.playbackRate.value = rate;
    const g = ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(master);
    s.start(0, c[0], c[1]);
  } catch (e) {}
}
export function startBgm(vol = 0.42) {
  if (ended) return;
  if (ctx && !bgm) { wantBgm = vol; return; }   // 还没解码完：解完再响
  if (!ctx || !bgm || bgmSrc) return;
  try {
    const s = ctx.createBufferSource(); s.buffer = bgm; s.loop = true;
    if (info && info.loop) { s.loopStart = info.loop[0]; s.loopEnd = Math.min(bgm.duration, info.loop[1]); }
    const g = ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(master); s.start(0); bgmSrc = { s, g };
  } catch (e) {}
}
export function endMusic() {
  ended = true; wantBgm = null;
  if (!ctx) return;
  try { if (bgmSrc) { bgmSrc.g.gain.setTargetAtTime(0, ctx.currentTime, 0.15); bgmSrc.s.stop(ctx.currentTime + 0.8); } } catch (e) {}
  try { if (endBuf) { const s = ctx.createBufferSource(); s.buffer = endBuf; const g = ctx.createGain(); g.gain.value = 0.8; s.connect(g); g.connect(master); s.start(0); } } catch (e) {}
}
