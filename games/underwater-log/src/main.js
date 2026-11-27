// 入口：加载页 → 建场 → 每帧（输入 / 自动玩 → 玩法 → 镜头 → 3D → 界面）
// 试玩外壳用 shared/playable，按定稿规则：开场等 2.5 秒（和停手一样）才自动玩，自动玩期间一律显示「轻划移动」和滑动手势；手一碰就交给玩家，停手 2.5 秒又自动玩；
// 没有「我来操作！」按钮；左上 logo 下和结束页都有「立即体验」（微信里也显示）；最后一个地块买完 2.4 秒（或者满 115 秒）强制结束，满 120 秒强制跳转。
import '../../../shared/playable/adapter.js';
import * as THREE from 'three';
import { initRenderer, initCamera, initEnv, initLights, render, setView, toUI, bigPx, scene, view, VIEW_M, U, camera } from './world.js';
import * as world from './world.js';
import * as UI from '../../../shared/playable/ui.js';
import * as LD from '../../../shared/playable/loader.js';
import { proto, fixSkinWeights } from './chars.js';
import { initItems } from './items.js';
import * as GM from './game.js';
import { crowd } from './crowd.js';
import { addStatic } from './fx.js';
import { initAudio, startBgm, endMusic, resume } from '../../../shared/playable/audio.js';
import { onTouch, sysInfo, raf, now, report, reportTime, gameEnd, download, autoJump, isWx, query, loadImage, onShowHide, createCanvas } from '../../../shared/playable/platform.js';
import { T } from './config.js';
import { createMid } from '../../../shared/playable/midjump.js';
import { smooth, backOut, lerp, hash } from '../../../shared/playable/util.js';

let W = 1080, H = 1920, ready = false, failed = false;
const flow = { touching: false, lastTouch: 0, firstTouch: Infinity, auto: false, autoT: 0,   // 开局也等停手 2.5 秒才自动玩（lastTouch 从 0 算）
   ended: false, endT: Infinity, joy: null };
let MID = null;   // 中间跳转页，建完界面图集后创建
const joy = { id: null, ox: 0, oy: 0, dx: 0, dy: 0 };
const TD = 10, OP = 80;
let t0 = 0, last = 0, gameT = 0, coverA = 1, readyT = -1, progress = 0.05, shown = 0;
const si = sysInfo();
const toL = (p) => [p.x * W / si.w, p.y * H / si.h];

// ------------------------------------------------------------------ 布局
const ui = { x: 28, y: 34, w: 300, h: 89 }, hi = { x: 44, y: 0, w: 268, h: 82 };
let HUDY = 92;

async function boot() {
  report(1001);
  ({ W, H } = initRenderer());
  const k = H / si.h;
  if (si.safeTop) ui.y = Math.max(ui.y, si.safeTop * k + 10);
  if (si.menu && si.menu.bottom) HUDY = Math.max(HUDY, si.menu.bottom * k + 48);
  const [logo, cover, meatIcon] = await Promise.all([loadImage('assets/ui/logo.png'), loadImage('assets/ui/cover.jpg'), loadImage('assets/ui/meat_icon.png')]);
  const { LOGO } = UI.buildAtlas({ W, H, logo, bubIcon: meatIcon, coverImg: cover, renderer: world.renderer }); ui.h = LOGO.h; hi.y = ui.y + ui.h + 10;
  MID = createMid({ W, H, at: T.mid, dur: T.midDur });
  LD.setProgress((f) => { progress = Math.max(progress, 0.08 + f * 0.82); });
  raf(frame);
  const meta = await LD.json('assets/env/meta.json');
  initCamera(meta);
  // 人物、道具贴图按重复采样：原模型的 UV 常常超出 0–1（瀑布捞鱼的教训）
  const tex = {}, MD = {};
  const T_ = (k, p, o = { repeat: true }) => LD.tex(p, o).then((x) => { tex[k] = x; });
  const M_ = (k, p) => LD.glb(p).then((x) => { MD[k] = x; });
  await Promise.all([
    T_('col', 'assets/env/color.jpg', { srgb: false, repeat: false }), T_('dep', 'assets/env/depth.png', { srgb: false, repeat: false }),
    T_('heroBody', 'assets/tex/hero_body.jpg'), T_('heroFace', 'assets/tex/hero_face.jpg'), T_('custBody', 'assets/tex/cust_body.jpg'), T_('custPlate', 'assets/tex/cust_plate.jpg'),
    T_('meatRaw', 'assets/tex/meat_raw.jpg'), T_('meatCooked', 'assets/tex/meat_cooked.jpg'), T_('cash', 'assets/tex/cash.jpg'), T_('log', 'assets/tex/log.jpg'),
    T_('grinder1', 'assets/tex/grinder1.jpg'), T_('grinder2', 'assets/tex/grinder2.jpg'), T_('stump2Top', 'assets/tex/stump2_top.jpg'), T_('stump2Bark', 'assets/tex/stump2_bark.jpg'),
    T_('stump3Top', 'assets/tex/stump3_top.jpg'), T_('stump3Bark', 'assets/tex/stump3_bark.jpg'), T_('giantCap', 'assets/tex/giant_cap.jpg', { repeat: false }), T_('giantCore', 'assets/tex/giant_core.jpg'),
    T_('bark', 'assets/tex/bark.jpg'), T_('belt', 'assets/tex/belt.jpg'),
    M_('hero', 'assets/models/hero.glb'), M_('cust', 'assets/models/cust.glb'), M_('crowd', 'assets/models/crowd.glb'), M_('grinder1', 'assets/models/grinder1.glb'), M_('grinder2', 'assets/models/grinder2.glb'),
    M_('meatRaw', 'assets/models/meat_raw.glb'), M_('meatCooked', 'assets/models/meat_cooked.glb'), M_('cash', 'assets/models/cash.glb'), M_('log', 'assets/models/log.glb'),
    M_('counter', 'assets/models/counter.glb'), M_('stump2', 'assets/models/stump2.glb'), M_('stump3', 'assets/models/stump3.glb'),
    initAudio(),
  ]);
  tex.meatIconImg = meatIcon;
  initEnv({ col: tex.col, dep: tex.dep });
  initLights();
  initItems(MD, tex);
  // 主角跑步片段在 tools/assets.mjs 里裁成 0–0.8 秒那一圈
  const P = {
    hero: proto(MD.hero, { height: 1.85 }), cust: proto(MD.cust, { height: 1.22 }), crowd: proto(MD.crowd, { height: 1.22 }),
    grinder1: proto(MD.grinder1, { scale: 1 }), grinder2: proto(MD.grinder2, { scale: 1 }),
    counter: MD.counter, stump2: MD.stump2, stump3: MD.stump3,
    heroTex: { V5_1_lan1: tex.heroFace, V5_1_lan_: tex.heroBody, '*': tex.heroBody }, custTex: { yi_lan2: tex.custBody, 门框: tex.custPlate, '*': tex.custBody },
  };
  GM.build(P, tex);
  addStatic();
  onTouch(touchStart, touchMove, touchEnd);
  onShowHide(() => { last = now(); }, () => {});
  focus = GM.heroFocus(); updateCamera(0, true);
  try { world.renderer.compile(scene, camera); } catch (e) {}
  ready = true; readyT = -1; progress = 1;
  startBgm();
}

// ------------------------------------------------------------------ 输入
function touchStart(p) {
  resume();
  const [x, y] = toL(p);
  if (!ready) { if (failed) download(); return; }
  if (MID.touch(x, y, (now() - t0) / 1000)) return;   // 中间跳转页弹着：只认大按钮
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
function releaseJoy() { joy.id = null; joy.dx = joy.dy = 0; flow.touching = false; flow.joy = null; flow.lastTouch = gameT; }
function firstTouch() { if (flow.firstTouch === Infinity) { flow.firstTouch = gameT; report(1004); report(2001); } }
const hitTop = (x, y) => x >= hi.x - 10 && x <= hi.x + hi.w + 10 && y >= hi.y - 10 && y <= hi.y + hi.h + 10;

// 摇杆 → 世界方向：屏幕右 = 相机右，屏幕上 = 相机朝前在地上的投影
function joyToWorld() {
  const m = world.meta, Rx = m.R[0], Rz = m.R[2], fl = Math.hypot(m.F[0], m.F[2]), Fx = m.F[0] / fl, Fz = m.F[2] / fl;
  const dx = joy.dx / OP, dy = joy.dy / OP;
  return [Rx * dx - Fx * dy, Rz * dx - Fz * dy];
}
function updateFlow(t) {
  reportTime(t);                 // 时长节点打点（30、60、70…120 秒），先于跳转报出去
  if (!flow.jumped && (t >= T.jump || (flow.ended && t - flow.endT >= T.endJump))) { flow.jumped = true; console.log('[flow] jump t=' + t.toFixed(1)); autoJump(); }   // 结束页出来 5 秒、最晚满 120 秒，不点「立即体验」也强制跳转
  if (flow.ended) { GM.input.active = false; return; }
  flow.joy = flow.touching ? { x: joy.ox, y: joy.oy, dx: joy.dx, dy: joy.dy } : null;
  if (flow.touching) {
    flow.auto = false; flow.lastTouch = t;
    const s = Math.hypot(joy.dx, joy.dy);
    if (s > TD) { const [vx, vz] = joyToWorld(); GM.input.vx = vx; GM.input.vz = vz; } else { GM.input.vx = GM.input.vz = 0; }
    GM.input.active = true;
  } else if (t - flow.lastTouch >= T.idle) { if (!flow.auto) { console.log("[flow] auto t=" + t.toFixed(2)); if (flow.firstTouch !== Infinity) flow.autoT = t; } flow.auto = true; GM.input.active = false; }   // 开局的引导已经在显示，不重新淡入
  else { flow.auto = false; GM.input.active = true; GM.input.vx = GM.input.vz = 0; }
  if (t >= Math.min(GM.G.endAt, T.cap)) endGame(t);
}
function endGame(t) {
  console.log('[flow] end t=' + t.toFixed(1) + ' served=' + GM.G.served + ' fps~' + (frames / Math.max(1, t)).toFixed(0));
  flow.ended = true; flow.endT = t; GM.G.ended = true; joy.id = null; joy.dx = joy.dy = 0; flow.touching = false; flow.joy = null;
  report(1011); report(1013); endMusic();
  setTimeout(() => download(true), 200);
}

// ------------------------------------------------------------------ 镜头：跟主角（成片：跟着走、停就停）
let focus = [0, 0, 0], camP = null;
function updateCamera(dt, snap = false) {
  const f = DBG.look || GM.heroFocus();   // __dbg.look = [x, y, z]：镜头看指定点（调试截图）
  const tgtM = VIEW_M * (+(query.zoom || 1));
  const k = snap ? 1 : 1 - Math.exp(-dt * 4.0);
  focus = [lerp(focus[0], f[0], k), lerp(focus[1], f[1], k), lerp(focus[2], f[2], k)];
  const px = bigPx(focus[0], focus[1], focus[2]);
  setView(px[0], px[1] - 0.06 * view.h, tgtM);
  void camP;
}

// ------------------------------------------------------------------ 界面
let hudV = 0, hudPopT = -9, hudLast = 0;
function drawUI(t, rt) {
  UI.begin();
  if (ready && coverA < 1) {
    drawCrowdEmo(t); drawBubbles(t); drawFull(t);
    drawHUD(t); if (!MID.on) { drawTutorial(t); drawJoy(); } drawTop(t); drawEnd(t); MID.draw(rt);
  }
  UI.setCover(coverA);
  if (coverA > 0.003) drawLoading(rt);
  if (!isWx) window.__nq = UI.quads();
  UI.flush();
}
const _a = [0, 0];
function drawCrowdEmo(t) {
  if (flow.ended || !crowd.heads.length) return;
  // 人群头上一阵阵冒生气的脸（人多肉少的压力）
  for (let s = 0; s < 7; s++) {
    const cyc = 2.5, o = s * cyc / 7 + hash(s) * 0.4, c = t + o, n = Math.floor(c / cyc), e = c - n * cyc;
    if (e > 1.9) continue;
    const j = Math.floor(hash(s * 13.1 + n * 7.7) * crowd.heads.length), hd = crowd.heads[j];
    if (crowd.list[j].hidden) continue;
    toUI(hd[0], hd[1] + 0.5, hd[2], _a); if (_a[0] < 60 || _a[0] > W - 60 || _a[1] < 260 || _a[1] > H - 260) continue;
    const u = backOut(e / 0.22) * (1 - smooth((e - 1.6) / 0.3)), f = e > 0.6 && e < 1.1 ? Math.cos(Math.PI * 2 * (e - 0.6) / 0.5) : 1;
    UI.spr(hash(s * 5.3 + n * 1.9) < 0.5 ? 'ang1' : 'ang0', _a[0], _a[1] - 10 * e, { sx: u * Math.max(0.06, Math.abs(f)) * 0.8, sy: u * 0.8 });
  }
  for (const m of GM.emo) {
    const e = t - m.t0; if (e < 0) continue; toUI(m.p[0], m.p[1], m.p[2], _a);
    const u = backOut(e / 0.22) * (1 - smooth((e - m.dur + 0.3) / 0.3));
    UI.spr(m.kind, _a[0], _a[1] - 14 * e, { s: u * 0.85 });
  }
}
// 前排要肉的人头上的订单气泡（源工程 V21：白色水滴 + 熟肉图标，不透明）
function drawBubbles(t) {
  if (flow.ended) return;
  for (const cu of GM.front) {
    if (cu.row !== 0 || (cu.ci === 1 && !GM.G.unlocked.c2)) continue;
    if (cu.state !== 'wait' && cu.state !== 'got') continue;
    toUI(cu.p[0], 1.72, cu.p[1], _a);
    if (cu.state === 'got') { const a = t - cu.t0, l = backOut(a / 0.16), u = 1 - smooth((a - 0.4) / 0.15); if (u > 0.01) UI.spr('check', _a[0], _a[1] + 10, { s: l * 0.8, a: u }); continue; }
    const s = 0.72 * backOut((t - cu.t0) / 0.3);
    UI.spr('bub', _a[0], _a[1], { s }); UI.spr('bubIcon', _a[0], _a[1], { s: s * 0.85 });
  }
}
function drawFull(t) {
  const h = GM.state().hero, e = t - h.full; if (e > 1.4 || flow.ended || !h.goods.n) return;
  const top = h.goods.topPos();
  toUI(top[0], top[1] + 0.45, top[2], _a);
  UI.spr('full', _a[0], _a[1], { s: backOut(e / 0.25) * (1 - smooth((e - 1.1) / 0.3)) });
}
function drawHUD(t) {
  const money = GM.state().hero.cash.n;
  if (money !== hudLast) { hudPopT = t; hudLast = money; }
  const dtH = Math.min(0.1, t - (drawHUD.lt ?? t)); drawHUD.lt = t;
  const step = 60 * dtH * Math.max(1, Math.abs(money - hudV) / 10);
  hudV = Math.abs(money - hudV) <= step ? money : hudV + Math.sign(money - hudV) * step;
  const c = W - 40, h = c - 250, e = HUDY;
  UI.spr('hudBg', h, e);
  const s = t - hudPopT, sc = s >= 0 && s < 0.18 ? 1 + Math.sin(Math.PI * s / 0.18) * 0.18 : 1;
  UI.num(Math.round(hudV), c - 22, e + 2, { set: 'a', sc });
}
function drawTutorial(t) {
  if (flow.ended || flow.touching || !(flow.auto || flow.firstTouch === Infinity)) return;   // 自动玩时、开局等自动玩的 2.5 秒里都显示「轻划移动」和滑动手势
  const r = smooth((t - flow.autoT) / 0.3), s = W / 2, o = H - 510, c = (t % 1.6) / 1.6, pn = 1.35, h = Math.sin(c * Math.PI * 2) * 150 * pn;
  UI.spr('tutLine', s, o, { a: r }); UI.spr('hand', s + h, o + 18 * pn, { a: r }); UI.spr('tutText', s, o + 150 * pn, { a: r });
}
function drawJoy() { const j = flow.joy; if (!j) return; UI.spr('joyBase', j.x, j.y); UI.spr('joyKnob', j.x + j.dx, j.y + j.dy); }
function drawTop(t) { UI.spr('logo', ui.x, ui.y); UI.spr('btnTop', hi.x + hi.w / 2, hi.y + hi.h / 2, { s: flow.ended ? 1 : 1 + 0.05 * Math.sin(t * 6) }); }
function drawEnd(t) {
  if (!flow.ended) return;
  const r = t - flow.endT, s = smooth(r / 0.25), o = backOut((r - 0.1) / 0.45), c = backOut((r - 0.3) / 0.45);
  UI.spr('black', 0, 0, { w: W, h: H, a: 0.55 * s });
  if (o > 0.01) UI.spr('logoBig', W / 2, H * 0.4, { s: o });
  if (c > 0.01) UI.spr('btnEnd', W / 2, H * 0.55, { s: c * (1 + 0.05 * Math.sin(r * 6)) });
}
// 加载页
function drawLoading(rt) {
  UI.setCover(coverA);
  shown += (Math.min(0.97, progress + 0.12) - shown) * (shown < progress ? 0.3 : 0.025) * 0.6; if (progress >= 1) shown = 1;
  for (let i = 0; i < 28; i++) { const x = hash(i * 3.1) * W, sp = 0.08 + hash(i * 5.7) * 0.08, y = ((rt * sp + hash(i * 1.7)) % 1.05) * H, d = 0.25 + hash(i * 9.3) * 0.5; UI.spr('snow', x + Math.sin(rt * 2.4 + i) * 9, y, { s: d, a: coverA * (0.35 + hash(i) * 0.5) }); }
  UI.spr('logoLoad', W / 2, H * 0.31, { a: coverA, s: 1 + 0.04 * Math.sin(rt * 2.4) });
  const bx = W * 0.17, by = H * 0.52;
  UI.spr('barBg', bx, by, { w: W * 0.66, h: 16, a: coverA });
  UI.spr('barFill', bx, by, { w: Math.max(2, W * 0.66 * shown), h: 16, a: coverA });
  const pc = Math.floor(shown * 100);
  UI.spr('loading', W / 2 - 60, by + 52, { a: coverA }); UI.num(pc, W / 2 + 46, by + 52, { set: 'p', align: 'left', a: coverA }); UI.spr('pct', W / 2 + 46 + (pc >= 10 ? (pc >= 100 ? 66 : 44) : 22) + 16, by + 52, { a: coverA });
}

// ------------------------------------------------------------------ 开发者工具里屏幕上显示报错和状态
const DEV0 = query.debug === '1' || FORCE_DBG;
const errs = [];
if (isWx && wx.onError) wx.onError((e) => { errs.push(String(e && (e.message || e)).slice(0, 300)); });
let dbgMesh = null, dbgCv = null, dbgT = -1, fpsAvg = 0;
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
    const G = GM.G, S = GM.state(), h = S.hero;
    const lines = ['t=' + gameT.toFixed(1) + ' fps=' + fpsAvg.toFixed(0) + ' auto=' + (flow.auto ? 1 : 0) + ' end=' + (flow.ended ? 1 : 0), 'unl=' + Object.keys(G.unlocked).join('+') + ' served=' + G.served,
      'goods=' + h.goods.n + ' cash=' + h.cash.n + ' pile=' + S.pile.n + ' fuel=' + S.oven.fuel + ' tray=' + S.tray.n + ' tgt=' + (G.target && G.target.kind)];
    lines.forEach((l, i) => g.fillText(l, 8, 26 + i * 24));
    g.fillStyle = '#f88'; errs.slice(-5).forEach((e, i) => { for (let k = 0; k < 2; k++) g.fillText(e.slice(k * 44, k * 44 + 44), 8, 110 + i * 30 + k * 14); });
    dbgMesh.material.map.needsUpdate = true;
  }
  world.renderer.render(dbgMesh.userData.sc, dbgMesh.userData.cam);
}

// ------------------------------------------------------------------ 主循环
let frames = 0, last0 = 0;
const SPEED = +(query.speed || 1);
const RAF = query.raf === 'timer' ? (f) => setTimeout(f, 16) : raf;   // 浏览器窗格在后台时 rAF 不触发：?raf=timer
function frame() {
  RAF(frame);
  const n = now();
  if (!t0) { t0 = n; last = n; }
  const rt = (n - t0) / 1000;
  const dt = Math.min(0.05, (n - last) / 1000); last = n;
  if (ready) {
    if (readyT < 0) { readyT = rt; last0 = n; report(1003); console.log('[flow] first frame load=' + rt.toFixed(2) + 's canvas=' + world.canvas.width + 'x' + world.canvas.height + ' webgl2=' + world.renderer.capabilities.isWebGL2); if (typeof window !== 'undefined' && window.__ready) window.__ready(); }
    coverA = 1 - smooth((rt - readyT - 0.15) / 0.5);
    // 固定步长追帧：卡顿或后台降帧时游戏时间照样按真实时间走（每步最多 1/30 秒）
    let acc = DBG.paused || MID.on ? 0 : Math.min(0.5, (n - last0) / 1000) * SPEED; last0 = n;
    try {
      while (acc > 1e-4) {
        const st = Math.min(acc, 1 / 30); acc -= st;
        gameT += st; U.uTime.value = gameT;
        updateFlow(gameT);
        if (MID.check(gameT, rt, flow.ended)) { releaseJoy(); break; }   // 满 60 秒：暂停，弹中间跳转页
        GM.update(gameT, st, flow.auto && !flow.ended);
        updateCamera(st);
      }
      if (DBG.paused && DBG.look) updateCamera(0, true);
      MID.update(rt);
    } catch (e) { if (errs.length < 50) { errs.push(String(e && (e.stack || e.message) || e).slice(0, 300)); console.error(e); } }
    fpsAvg = fpsAvg * 0.95 + (1 / Math.max(1e-3, dt)) * 0.05;
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
function fail(e) { failed = true; console.error('playable fail:', e); if (isWx) gameEnd(); }
const DBG = (isWx ? GameGlobal : window).__dbg = { UI, GM, world, flow, T, mid: () => MID, LD, fixSkinWeights, paused: false, look: null, st: () => ({ coverA, readyT, ready, progress, shown, gameT, frames }) };
boot().catch((e) => { console.error(e); fail(e); });
