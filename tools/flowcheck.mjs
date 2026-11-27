// 试玩流程回归：无头 Edge 跑一局，打印 [flow] 日志（首帧、自动玩、时长打点、解锁、中间页、结束、跳转），跑到强制跳转为止。
// 先起本地服务：node tools/serve.mjs（8770，端口被占用时用 PORT 指定）
// 用法：node tools/flowcheck.mjs <游戏名> [--speed=3] [--hold] [--shots=<目录>] [--q=网址参数]
//   --hold：一直按住屏幕（每 0.1 秒设一次 __dbg.flow.touching），不让通关，测 60 秒中间页、115 秒强制结束、120 秒跳转
//   --hold=<秒>：只按到这个游戏时间就松手（拖慢进度，让自动玩时弹中间页：看回来以后是不是接着自动玩）
//   --shots：结束后 1 秒、4 秒各截一张（看结束页有没有一直显示到跳转）
// 结束时检查：自动玩开始在 2.5 秒；时长打点 8 条；跳转在结束后 5 秒；跳转前没有其他跳转（download: 渠道名）。不对就退出码 1。
import fs from 'node:fs';
const { default: puppeteer } = await import('puppeteer-core');
const [game, ...rest] = process.argv.slice(2);
if (!game) { console.error('用法：node tools/flowcheck.mjs <游戏名> [--speed=3] [--hold] [--shots=<目录>] [--q=网址参数]'); process.exit(1); }
const opt = Object.fromEntries(rest.map((a) => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true]; }));
const speed = +(opt.speed || 3), hold = opt.hold === true ? 1e9 : +(opt.hold || 0), shots = opt.shots || null;
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, protocolTimeout: 1800000,
  args: ['--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'], defaultViewport: { width: 405, height: 720, deviceScaleFactor: 2 } });
const page = await browser.newPage();
const logs = [];
let done = null; const finished = new Promise((k) => { done = k; });
page.on('pageerror', (e) => { console.error('[pageerror]', e.message); logs.push('pageerror ' + e.message); });
page.on('console', (m) => {
  const s = m.text();
  if (!/\[flow\]|download|game end|playable fail|error/i.test(s)) return;
  logs.push(s); console.log(s);
  if (/download: auto/.test(s)) setTimeout(done, 300);
});
await page.goto(`http://127.0.0.1:${process.env.PORT || 8770}/games/${game}/index.html?raf=timer&speed=${speed}${opt.q ? '&' + opt.q : ''}`, { waitUntil: 'load' });
await page.evaluate(`(async () => { while (!(window.__dbg && __dbg.st().ready)) await new Promise((k) => setTimeout(k, 50)); })()`);
if (hold) await page.evaluate(`const iv = setInterval(() => { const f = __dbg.flow; if (__dbg.st().gameT >= ${hold}) { f.touching = false; f.lastTouch = __dbg.st().gameT; clearInterval(iv); return; } if (!f.ended && !(__dbg.mid() && __dbg.mid().on)) f.touching = true; }, 100)`);
if (shots) {
  fs.mkdirSync(shots, { recursive: true });
  page.evaluate(`(async () => {
    const wait = (ms) => new Promise((k) => setTimeout(k, ms)), d = __dbg;
    while (!d.flow.ended) await wait(30);
    for (const s of [1, 4]) { while (d.st().gameT < d.flow.endT + s) await wait(10); d.paused = true; await wait(60); window.__shot = await new Promise((k) => { window.__cap = k; }); window.__shotN = s; d.paused = false; while (window.__shot) await wait(20); }
  })()`).catch(() => {});
  (async () => { for (let n = 0; n < 2;) { const r = await page.evaluate(`window.__shot ? [window.__shotN, window.__shot] : null`).catch(() => null); if (r) { fs.writeFileSync(`${shots}/${game}_end+${r[0]}s.jpg`, Buffer.from(r[1].split(',')[1], 'base64')); await page.evaluate(`window.__shot = null`); n++; } else await new Promise((k) => setTimeout(k, 100)); } })();
}
await Promise.race([finished, new Promise((k) => setTimeout(k, 1500000))]);
await new Promise((k) => setTimeout(k, shots ? 1500 : 0));
await browser.close();
// 检查
const num = (re) => { const l = logs.find((x) => re.test(x)); const m = l && l.match(/t=([\d.]+)/); return m ? +m[1] : NaN; };
const autoT = num(/\[flow\] auto/), endT = num(/\[flow\] end/), jumpT = num(/\[flow\] jump/);
const jumpI = logs.findIndex((x) => /download: auto/.test(x)), early = logs.findIndex((x) => /download: (?!auto)/.test(x));
const marks = logs.slice(0, jumpI + 1).filter((x) => /\[flow\] time/.test(x)).length, wantMarks = [30, 60, 70, 80, 90, 100, 110, 120].filter((s) => s <= jumpT + 0.05).length;
const midOpen = num(/\[flow\] mid open/), unlocks = logs.filter((x) => /\[flow\] unlock/.test(x)).map((x) => x.match(/unlock (\w+) t=([\d.]+)/).slice(1).join(' '));
const bad = [];
if (!hold && !(Math.abs(autoT - 2.5) < 0.06)) bad.push('自动玩开始 ' + autoT + '（应为 2.5）');
if (marks !== wantMarks) bad.push('跳转前时长打点 ' + marks + ' 条（应为 ' + wantMarks + '）');
if (!(Math.abs(jumpT - endT - 5) < 0.11)) bad.push('跳转 ' + jumpT + ' - 结束 ' + endT + '（应差 5 秒）');
if (early >= 0 && early < jumpI) bad.push('强制跳转前已经跳转：' + logs[early]);
if (hold >= 1e9 && !(Math.abs(endT - 115) < 0.06)) bad.push('按住不通关应在 115 秒结束，实际 ' + endT);
const autoAfterMid = logs.findIndex((x, i) => i > logs.findIndex((y) => /mid close/.test(y)) && /\[flow\] auto/.test(x));
if (hold && hold < 1e9 && midOpen > hold + 2.5 && autoAfterMid >= 0) bad.push('自动玩时弹中间页，回来又停了 2.5 秒：' + logs[autoAfterMid]);
if (logs.some((x) => /pageerror|playable fail/.test(x))) bad.push('有页面错误');
console.log('解锁：' + unlocks.join('、') + (isNaN(midOpen) ? '；没弹中间页' : '；中间页 ' + midOpen + ' 秒'));
console.log(bad.length ? '✗ ' + bad.join('；') : '✓ 自动玩 ' + autoT + ' 秒、结束 ' + endT + ' 秒、跳转 ' + jumpT + ' 秒、打点 ' + marks + ' 条');
process.exit(bad.length ? 1 : 0);
