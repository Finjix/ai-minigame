// 入口：加载页 → 建场 → 每帧（输入 / 自动玩 → 玩法 → 镜头 → 3D → 界面）
// 试玩流程照参考试玩：开场就自动玩，自动玩期间一律显示「轻划移动」引导；手一碰就交给玩家，停手 2 秒又自动玩（没有「我来操作！」按钮）；
// 左上和结束页都有「立即体验」；最后一个地块买完 2.4 秒（或者满 90 秒）强制结束：压暗 + 大 logo，微信里通知平台试玩结束。
import './adapter.js';
import * as THREE from 'three';
import { initRenderer, initCamera, initEnv, initLights, render, setView, toUI, bigPx, scene, W as W0, view, VIEW_M, U, camera } from './world.js';
import * as world from './world.js';
import * as UI from './ui.js';
import * as LD from './loader.js';
import { proto } from './chars.js';
import { initItems } from './items.js';
import * as GM from './game.js';
import { addStatic, makeSnow } from './fx.js';
import { initAudio, play, startBgm, endMusic, resume } from './audio.js';
import { onTouch, sysInfo, raf, now, report, gameEnd, download, hideDownload, isWx, query, loadImage, onShowHide, createCanvas } from './platform.js';
import { T, L, WATER_Y } from './config.js';
import { clamp01, smooth, backOut, lerp, hash } from './util.js';

let W = 1080, H = 1920, ready = false, failed = false;
const flow = { touching: false, lastTouch: -Infinity, firstTouch: Infinity, auto: true, autoT: 0, ended: false, endT: Infinity, joy: null };
const joy = { id: null, ox: 0, oy: 0, dx: 0, dy: 0 };
const TD = 10, OP = 80;
let t0 = 0, last = 0, gameT = 0, coverA = 1, readyT = -1, progress = 0.05, shown = 0;
const si = sysInfo();
const toL = (p) => [p.x * W / si.w, p.y * H / si.h];

// ------------------------------------------------------------------ 布局（参考试玩）
const ui = { x: 28, y: 34, w: 300, h: 89 }, hi = { x: 44, y: 0, w: 268, h: 82 }, hr = { cx: 0, cy: 0, w: UI.TAKE.w, h: UI.TAKE.h };
let HUDY = 92;

async function boot() {
  report(1001);
  ({ W, H } = initRenderer());
  hi.y = ui.y + ui.h + 10; hr.cx = W / 2; hr.cy = H - 170;
  // 微信：右上角是胶囊菜单，钱数放到胶囊下面；顶部按安全区让开刘海
  const k = H / si.h;
  if (si.safeTop) ui.y = Math.max(ui.y, si.safeTop * k + 10);
  if (si.menu && si.menu.bottom) HUDY = Math.max(HUDY, si.menu.bottom * k + 48);
  // 加载页先起来：logo、封面图、货的图标
  const [logo, cover, packIconImg] = await Promise.all([loadImage('assets/ui/logo.png'), loadImage('assets/ui/cover.jpg'), loadImage('assets/ui/pack_icon.png')]);
  const { LOGO } = UI.buildAtlas({ W, H, logo, packIcon: packIconImg, coverImg: cover }); ui.h = LOGO.h; hi.y = ui.y + ui.h + 10;
  LD.setProgress((f) => { progress = Math.max(progress, 0.08 + f * 0.82); });
  raf(frame);
  // 资源
  const meta = await LD.json('assets/env/meta.json');
  initCamera(meta);
  const tex = {};
  // 人物、道具贴图按重复采样：原模型有一半 UV 壳在 U 1~2（UE 默认重复采样），夹边会把毛领、胡子采成边上的深色
  const T_ = (k, p, o = { repeat: true }) => LD.tex(p, o).then((x) => { tex[k] = x; });
  const MD = {}; const M_ = (k, p) => LD.glb(p).then((x) => { MD[k] = x; });
  await Promise.all([
    T_('col', 'assets/env/color.jpg', { srgb: false, repeat: false }), T_('dep', 'assets/env/depth.png', { srgb: false, repeat: false }), T_('flow', 'assets/env/flow.png', { srgb: false, repeat: false }),
    T_('heroBody', 'assets/tex/hero_body.jpg'), T_('heroLan', 'assets/tex/hero_lan.jpg'), T_('fisherBody', 'assets/tex/fisher_body.jpg'), T_('fisherLan', 'assets/tex/fisher_lan.jpg'),
    T_('chef', 'assets/tex/chef.jpg'), T_('cust', 'assets/tex/cust.jpg'), T_('custEye', 'assets/tex/cust_eye.jpg'), T_('fish', 'assets/tex/fish.jpg'), T_('packFood', 'assets/tex/pack_food.jpg'), T_('cash', 'assets/tex/cash.jpg'),
    M_('hero', 'assets/models/hero.glb'), M_('chef', 'assets/models/chef.glb'), M_('cust', 'assets/models/cust.glb'), M_('crowd', 'assets/models/crowd.glb'),
    M_('fish', 'assets/models/fish.glb'), M_('pack', 'assets/models/pack.glb'), M_('cash', 'assets/models/cash.glb'),
    initAudio(),
  ]);
  tex.packIconImg = packIconImg;
  initEnv({ col: tex.col, dep: tex.dep, flow: tex.flow });
  initLights();
  const it = initItems(MD, tex);
  const P = {
    hero: proto(MD.hero, 0.04497987710180218), chef: proto(MD.chef, -0.0006233895371590902), cust: proto(MD.cust, 0.10685263368247756), crowd: MD.crowd, fishGeo: it.fishGeo,
    heroTex: { hero_body: tex.heroBody, hero_eye: tex.heroBody, hero_lan: tex.heroLan }, fisherTex: { hero_body: tex.fisherBody, hero_eye: tex.fisherBody, hero_lan: tex.fisherLan },
    chefTex: { chef_body: tex.chef, '*': tex.chef }, custTex: { cust_body: tex.cust, cust_eye: tex.custEye },
  };
  GM.build(P, tex);
  addStatic();
  snow = makeSnow();
  onTouch(touchStart, touchMove, touchEnd);
  onShowHide(() => { last = now(); }, () => {});
  // 先编译着色器（第一帧不卡）
  focus = GM.heroFocus(); updateCamera(0, true);
  try { world.renderer.compile(scene, camera); } catch (e) {}
  ready = true; readyT = -1; progress = 1;
  startBgm();
}

// ------------------------------------------------------------------ 输入（参考试玩：任意处按下就是摇杆原点，拖 80 封顶，10 以内不动）
function touchStart(p) {
  resume();
  const [x, y] = toL(p);
  if (!ready) { if (failed) download(); return; }
  if (flow.ended) { download(false); return; }
  if (hitTop(x, y)) { download(false); return; }
  if (joy.id === null) { joy.id = p.id; joy.ox = x; joy.oy = y; joy.dx = joy.dy = 0; flow.touching = true; firstTouch(); }
}
function touchMove(p) {
  if (p.id !== joy.id) return; const [x, y] = toL(p);
  let o = x - joy.ox, c = y - joy.oy; const h = Math.hypot(o, c);
  if (h > OP) { joy.ox = x - o / h * OP; joy.oy = y - c / h * OP; o = o / h * OP; c = c / h * OP; }
  joy.dx = o; joy.dy = c;
}
function touchEnd(p) { if (p.id !== joy.id) return; joy.id = null; joy.dx = joy.dy = 0; flow.touching = false; flow.lastTouch = gameT; }
function firstTouch() { if (flow.firstTouch === Infinity) { flow.firstTouch = gameT; report(1004); report(2001); } }
const hitTop = (x, y) => x >= hi.x - 10 && x <= hi.x + hi.w + 10 && y >= hi.y - 10 && y <= hi.y + hi.h + 10;
const hitTake = (x, y) => Math.abs(x - hr.cx) <= hr.w / 2 + 16 && Math.abs(y - hr.cy) <= hr.h / 2 + 16;

// 摇杆 → 世界方向：屏幕右 = 相机右，屏幕上 = 相机朝前在地上的投影
function joyToWorld() {
  const m = world.meta, Rx = m.R[0], Rz = m.R[2], fl = Math.hypot(m.F[0], m.F[2]), Fx = m.F[0] / fl, Fz = m.F[2] / fl;
  const dx = joy.dx / OP, dy = joy.dy / OP;
  return [Rx * dx - Fx * dy, Rz * dx - Fz * dy];
}
function updateFlow(t) {
  if (flow.ended) { GM.input.active = false; return; }
  flow.joy = flow.touching ? { x: joy.ox, y: joy.oy, dx: joy.dx, dy: joy.dy } : null;
  if (flow.touching) {
    flow.auto = false; flow.lastTouch = t;
    const s = Math.hypot(joy.dx, joy.dy);
    if (s > TD) { const [vx, vz] = joyToWorld(); GM.input.vx = vx; GM.input.vz = vz; } else { GM.input.vx = GM.input.vz = 0; }
    GM.input.active = true;
  } else if (t - flow.lastTouch >= T.idle) { if (!flow.auto) flow.autoT = t; flow.auto = true; GM.input.active = false; }
  else { flow.auto = false; GM.input.active = true; GM.input.vx = GM.input.vz = 0; }
  if (t >= Math.min(GM.G.endAt, T.cap)) endGame(t);
}
function endGame(t) {
  console.log('[flow] end t=' + t.toFixed(1) + ' served=' + GM.G.served + ' fps~' + (frames / Math.max(1, t)).toFixed(0));
  flow.ended = true; flow.endT = t; GM.G.ended = true; joy.id = null; joy.dx = joy.dy = 0; flow.touching = false; flow.joy = null;
  report(1011); report(1013); endMusic();
  setTimeout(() => download(true), 200);
}

// ------------------------------------------------------------------ 镜头：跟主角（成片：一直跟拍，下塘推近）
let focus = [0, 0, 0], camM = VIEW_M, camP = null;
function updateCamera(dt, snap = false) {
  const f = DBG.look || GM.heroFocus(), h = GM.state().hero;   // __dbg.look = [x, y, z]：镜头看指定点（调试截图）
  const tgtM = (h.inWater ? VIEW_M * 0.8 : VIEW_M) * (+(query.zoom || 1));
  const k = snap ? 1 : 1 - Math.exp(-dt * 4.5);
  focus = [lerp(focus[0], f[0], k), lerp(focus[1], f[1], k), lerp(focus[2], f[2], k)];
  camM = snap ? tgtM : lerp(camM, tgtM, 1 - Math.exp(-dt * 2.2));
  const px = bigPx(focus[0], focus[1], focus[2]);
  setView(px[0], px[1] - 0.04 * view.h, camM);
}

// ------------------------------------------------------------------ 界面
let hudV = 0, hudPopT = -9, hudLast = 0;
function drawUI(t, rt) {
  UI.begin();
  if (ready && coverA < 1) {
    drawCrowdEmo(t); drawBubbles(t); drawFull(t);
    drawHUD(t); drawTutorial(t); drawJoy(); drawTop(t); drawEnd(t);
  }
  UI.setCover(coverA);
  if (coverA > 0.003) drawLoading(rt);
  if (!isWx) window.__nq = UI.quads();
  UI.flush();
}
const _a = [0, 0];
function drawCrowdEmo(t) {
  if (flow.ended) return;
  const S = GM.state(), C = S.crowd;
  // 人群头上一阵阵冒生气的脸（人多货少的压力，参考试玩 aU），送了货的冒笑脸 / 爱心眼
  for (let s = 0; s < 7; s++) {
    const cyc = 2.5, o = s * cyc / 7 + hash(s) * 0.4, c = t + o, n = Math.floor(c / cyc), e = c - n * cyc;
    if (e > 1.9) continue;
    const j = Math.floor(hash(s * 13.1 + n * 7.7) * C.n), hd = C.heads[j];
    toUI(hd[0], hd[1] + 0.55, hd[2], _a); if (_a[0] < 60 || _a[0] > W - 60 || _a[1] < 260 || _a[1] > H - 260) continue;
    const u = backOut(e / 0.22) * (1 - smooth((e - 1.6) / 0.3)), f = e > 0.6 && e < 1.1 ? Math.cos(Math.PI * 2 * (e - 0.6) / 0.5) : 1;
    UI.spr(hash(s * 5.3 + n * 1.9) < 0.5 ? 'ang1' : 'ang0', _a[0], _a[1] - 10 * e, { sx: u * Math.max(0.06, Math.abs(f)) * 0.9, sy: u * 0.9 });
  }
  for (const m of GM.emo) {
    const e = t - m.t0; if (e < 0) continue; toUI(m.p[0], m.p[1], m.p[2], _a);
    const u = backOut(e / 0.22) * (1 - smooth((e - m.dur + 0.3) / 0.3));
    UI.spr(m.kind, _a[0], _a[1] - 14 * e, { s: u * 0.85 });
  }
}
function drawBubbles(t) {
  for (const cu of GM.state().front) {
    toUI(cu.p[0], 2.05 + cu.head.n * 0.24, cu.p[1], _a);
    const o = t - cu.t0;
    if (cu.state === 'done' || cu.state === 'leave') {
      const a = cu.state === 'leave' ? o + 0.45 : o, l = backOut(a / 0.16), u = 1 - smooth((a - 0.5) / 0.15);
      if (u > 0.01) UI.spr('check', _a[0], _a[1] + 10, { s: l * 0.9, a: u }); continue;
    }
    const e = cu.state === 'enter' ? backOut(o / 0.4) : 1, pop = t - cu.lastGot < 0.15 ? 1.12 : 1, s = 0.82 * e * pop;
    UI.spr('bub', _a[0], _a[1], { s });
    if (cu.got > 0) UI.spr('bubFill', _a[0], _a[1], { s, crop: cu.got / cu.need });
    UI.spr('bubIcon', _a[0], _a[1], { s: s * 0.9 });
  }
}
function drawFull(t) {
  const h = GM.state().hero, e = t - h.full; if (e > 1.4 || flow.ended) return;
  const top = h.fish.n ? h.fish.topPos() : h.pack.topPos();
  toUI(top[0], top[1] + 0.5, top[2], _a);
  const s = backOut(e / 0.25) * (1 - smooth((e - 1.1) / 0.3));
  UI.spr('full', _a[0], _a[1], { s });
}
function drawHUD(t) {
  const money = GM.state().hero.cash.n * T.billVal;
  if (money !== hudLast) { hudPopT = t; hudLast = money; }
  const dtH = Math.min(0.1, t - (drawHUD.lt ?? t)); drawHUD.lt = t;
  const step = 240 * dtH * Math.max(1, Math.abs(money - hudV) / 60);
  hudV = Math.abs(money - hudV) <= step ? money : hudV + Math.sign(money - hudV) * step;
  const c = W - 40, h = c - 250, e = HUDY;
  UI.spr('hudBg', h, e);
  const s = t - hudPopT, sc = s >= 0 && s < 0.18 ? 1 + Math.sin(Math.PI * s / 0.18) * 0.18 : 1;
  UI.num(Math.round(hudV), c - 22, e + 2, { set: 'a', sc });
}
function drawTutorial(t) {
  if (!flow.auto || flow.ended) return;   // 自动玩时一律显示「轻划移动」和滑动手势
  const r = smooth((t - flow.autoT) / 0.3), s = W / 2, o = H - 510, c = (t % 1.6) / 1.6, pn = 1.35, h = Math.sin(c * Math.PI * 2) * 150 * pn;
  UI.spr('tutLine', s, o, { a: r }); UI.spr('hand', s + h, o + 18 * pn, { a: r }); UI.spr('tutText', s, o + 150 * pn, { a: r });
}
function drawTake(t) { const r = flow.auto && !flow.ended ? backOut((t - flow.autoT) / 0.3) * (1 + 0.04 * Math.sin(t * 5)) : 0; if (r > 0.01) UI.spr('btnTake', hr.cx, hr.cy, { s: r }); }
function drawJoy() { const j = flow.joy; if (!j) return; UI.spr('joyBase', j.x, j.y); UI.spr('joyKnob', j.x + j.dx, j.y + j.dy); }
function drawTop(t) { UI.spr('logo', ui.x, ui.y); UI.spr('btnTop', hi.x + hi.w / 2, hi.y + hi.h / 2, { s: flow.ended ? 1 : 1 + 0.05 * Math.sin(t * 6) }); }
function drawEnd(t) {
  if (!flow.ended) return;
  const r = t - flow.endT, s = smooth(r / 0.25), o = backOut((r - 0.1) / 0.45), c = backOut((r - 0.3) / 0.45);
  UI.spr('black', 0, 0, { w: W, h: H, a: 0.55 * s });
  if (o > 0.01) UI.spr('logoBig', W / 2, H * 0.4, { s: o });
  if (c > 0.01) UI.spr('btnEnd', W / 2, H * 0.55, { s: c * (1 + 0.05 * Math.sin(r * 6)) });
}
// 加载页（参考试玩：模糊压暗的场景图 + 飘雪 + logo + 进度条 + 「加载中 N%」）
function drawLoading(rt) {
  UI.setCover(coverA);
  shown += (Math.min(0.97, progress + 0.12) - shown) * (shown < progress ? 0.3 : 0.025) * 0.6; if (progress >= 1) shown = 1;
  for (let i = 0; i < 28; i++) { const x = hash(i * 3.1) * W, sp = 0.08 + hash(i * 5.7) * 0.08, y = ((rt * sp + hash(i * 1.7)) % 1.05) * H, d = 0.25 + hash(i * 9.3) * 0.5; UI.spr('snow', x + Math.sin(rt * 2.4 + i) * 9, y, { s: d, a: coverA * (0.35 + hash(i) * 0.5) }); }
  UI.spr('logoLoad', W / 2, H * 0.31, { a: coverA, s: 1 + 0.04 * Math.sin(rt * 2.4) });
  const bx = W * 0.17, by = H * 0.52;
  UI.spr('barBg', bx, by, { w: W * 0.66, h: 16, a: coverA });
  UI.spr('barFill', bx, by, { w: Math.max(2, W * 0.66 * shown), h: 16, a: coverA });
  const pc = Math.floor(shown * 100);
  const w0 = 150; UI.spr('loading', W / 2 - 60, by + 52, { a: coverA }); UI.num(pc, W / 2 + 46, by + 52, { set: 'p', align: 'left', a: coverA }); UI.spr('pct', W / 2 + 46 + (pc >= 10 ? (pc >= 100 ? 66 : 44) : 22) + 16, by + 52, { a: coverA });
  void w0;
}

// ------------------------------------------------------------------ 开发者工具里屏幕上显示报错和状态（真机、浏览器不显示）
const DEV0 = query.debug === '1';
const errs = [];
if (isWx && wx.onError) wx.onError((e) => { errs.push(String(e && (e.message || e)).slice(0, 300)); });
let dbgMesh = null, dbgCv = null, dbgT = -1;
function drawDebug(rt) {
  if (!(DEV0 || errs.length) || !ready) return;
  if (!dbgMesh) {
    dbgCv = createCanvas(512, 256); const tx = new THREE.Texture(dbgCv); tx.colorSpace = THREE.SRGBColorSpace;
    dbgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: tx, transparent: true, depthTest: false, depthWrite: false }));
    dbgMesh.frustumCulled = false; dbgMesh.userData.sc = new THREE.Scene(); dbgMesh.userData.sc.add(dbgMesh); dbgMesh.userData.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    dbgMesh.scale.set(0.46, 0.115 * (W / H) / 0.5625, 1); dbgMesh.position.set(-0.52, -0.46, 0);
  }
  if (rt - dbgT > 0.5) {
    dbgT = rt; const g = dbgCv.getContext('2d'); g.clearRect(0, 0, 512, 256); g.fillStyle = 'rgba(0,0,0,0.55)'; g.fillRect(0, 0, 512, 256);
    g.fillStyle = '#9f9'; g.font = '20px monospace';
    const G = GM.G, h = GM.state().hero;
    const lines = ['t=' + gameT.toFixed(1) + ' fps=' + fpsAvg.toFixed(0) + ' auto=' + (flow.auto ? 1 : 0) + ' end=' + (flow.ended ? 1 : 0), 'unl=' + Object.keys(G.unlocked).join('+') + ' served=' + G.served, 'fish=' + h.fish.n + ' pack=' + h.pack.n + ' cash=' + h.cash.n + ' tgt=' + (G.target && G.target.kind)];
    lines.forEach((l, i) => g.fillText(l, 8, 26 + i * 24));
    g.fillStyle = '#f88'; errs.slice(-5).forEach((e, i) => { for (let k = 0; k < 2; k++) g.fillText(e.slice(k * 44, k * 44 + 44), 8, 110 + i * 30 + k * 14); });
    dbgMesh.material.map.needsUpdate = true;
  }
  world.renderer.render(dbgMesh.userData.sc, dbgMesh.userData.cam);
}
let fpsAvg = 0;

// ------------------------------------------------------------------ 主循环
let frames = 0, last0 = 0, snow = null;
const SPEED = +(query.speed || 1);
function frame() {
  raf(frame);
  const n = now();
  if (!t0) { t0 = n; last = n; }
  const rt = (n - t0) / 1000;
  let dt = Math.min(0.05, (n - last) / 1000); last = n;
  if (ready) {
    if (readyT < 0) { readyT = rt; last0 = n; report(1003); console.log('[flow] first frame load=' + rt.toFixed(2) + 's canvas=' + world.canvas.width + 'x' + world.canvas.height + ' webgl2=' + world.renderer.capabilities.isWebGL2); if (typeof window !== 'undefined' && window.__ready) window.__ready(); }
    coverA = 1 - smooth((rt - readyT - 0.15) / 0.5);
    // 固定步长追帧：卡顿或后台降帧时游戏时间照样按真实时间走（每步最多 1/30 秒）
    let acc = DBG.paused ? 0 : Math.min(0.5, (n - last0) / 1000) * SPEED; last0 = n;   // __dbg.paused = true 定格（截图对比用）
    try {
      while (acc > 1e-4) {
        const st = Math.min(acc, 1 / 30); acc -= st;
        gameT += st; U.uTime.value = gameT;
        updateFlow(gameT);
        GM.update(gameT, st, flow.auto && !flow.ended);
        updateCamera(st);
      }
      if (DBG.paused && DBG.look) updateCamera(0, true);
    } catch (e) { if (errs.length < 50) { errs.push(String(e && (e.stack || e.message) || e).slice(0, 300)); console.error(e); } }
    fpsAvg = fpsAvg * 0.95 + (1 / Math.max(1e-3, dt)) * 0.05;
    if (snow) snow.update(gameT, [focus[0], focus[2]], world.canvas.height / 1920);
    render([focus[0], focus[2]]);
    frames++;
  } else {
    world.renderer && world.renderer.setRenderTarget(null), world.renderer && world.renderer.clear();
    if (!failed && rt > 25) fail('timeout');
  }
  drawUI(gameT, rt);
  drawDebug(rt);
  if (!isWx && window.__cap) { const f = window.__cap; window.__cap = null; f(world.canvas.toDataURL('image/jpeg', 0.82)); }
}
function fail(e) {
  failed = true; console.error('playable fail:', e);
  if (isWx) gameEnd();
}
const DBG = (isWx ? GameGlobal : window).__dbg = { UI, GM, world, flow, T, paused: false, look: null, st: () => ({ coverA, readyT, ready, progress, shown, gameT, frames }) };
boot().catch((e) => { console.error(e); fail(e); });
