// 所有游戏共用（shared/playable）。
// 声音：参考试玩的音效合集（一个 mp3 + 片段表）和配乐，WebAudio 播（微信里 wx.createWebAudioContext）。
import { createAudioContext, readBinary, readJSON, onShowHide } from './platform.js';

let ctx = null, sfx = null, bgm = null, endBuf = null, clips = {}, master = null, bgmSrc = null, info = null, muted = false;
const last = {};
const decode = (buf) => new Promise((res, rej) => { try { const p = ctx.decodeAudioData(buf, res, rej); if (p && p.then) p.then(res, rej); } catch (e) { rej(e); } });
export async function initAudio(base = 'assets/audio/') {
  ctx = createAudioContext(); if (!ctx) return;
  master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
  try {
    info = await readJSON(base + 'audio.json'); clips = info.clips;
    const [a, b, c] = await Promise.all([readBinary(base + 'sfx.mp3'), readBinary(base + 'bgm.mp3'), readBinary(base + 'endcard.mp3')]);
    [sfx, bgm, endBuf] = await Promise.all([decode(a), decode(b), decode(c)]);
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
  if (!ctx || !bgm || bgmSrc) return;
  try {
    const s = ctx.createBufferSource(); s.buffer = bgm; s.loop = true;
    if (info && info.loop) { s.loopStart = info.loop[0]; s.loopEnd = Math.min(bgm.duration, info.loop[1]); }
    const g = ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(master); s.start(0); bgmSrc = { s, g };
  } catch (e) {}
}
export function endMusic() {
  if (!ctx) return;
  try { if (bgmSrc) { bgmSrc.g.gain.setTargetAtTime(0, ctx.currentTime, 0.15); bgmSrc.s.stop(ctx.currentTime + 0.8); } } catch (e) {}
  try { if (endBuf) { const s = ctx.createBufferSource(); s.buffer = endBuf; const g = ctx.createGain(); g.gain.value = 0.8; s.connect(g); g.connect(master); s.start(0); } } catch (e) {}
}
