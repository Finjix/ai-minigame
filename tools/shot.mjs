// 无头浏览器跑游戏调试页、等到某个状态定格、截画布（不靠浏览器窗格：窗格藏起来时画布不渲染）。
// 先起本地服务：node tools/serve.mjs（8770）
// 用法：node tools/shot.mjs <游戏名> "<网址参数>" "<等待条件 JS 表达式，能用 d = __dbg>" <输出.jpg> [张数] [两张之间隔几毫秒]
//   node tools/shot.mjs underwater-log "zoom=0.3&speed=2" "(()=>{const h=d.GM.state().hero;return h.goods.n>=3&&h.cash.n>=4&&h.spr>0.97})()" build/x.jpg 3 700
// 张数 > 1 时横着拼成一张。puppeteer-core 在仓库 devDependencies 里，浏览器默认本机 Edge（CHROME_PATH 可改）
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
const { default: puppeteer } = await import('puppeteer-core');   // 仓库 devDependencies 里装了
const [game, qs = '', cond = 'true', out = 'build/shot.jpg', nArg = '1', gapArg = '500'] = process.argv.slice(2);
const EVAL = out === '--eval';   // 第 4 个参数写 --eval：等游戏起来以后算第 3 个参数的表达式，打印结果（不截图）
const N = +nArg, GAP = +gapArg;
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true,
  args: ['--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'], defaultViewport: { width: 405, height: 720, deviceScaleFactor: 2 } });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('[pageerror]', e.message));
await page.goto(`http://127.0.0.1:${process.env.PORT || 8770}/games/${game}/index.html?raf=timer&${qs}`, { waitUntil: 'load' });
if (EVAL) { const r = await page.evaluate(`(async () => { const wait = (ms) => new Promise((k) => setTimeout(k, ms)); while (!(window.__dbg && __dbg.st().ready)) await wait(50); const d = __dbg; return (${cond}); })()`); console.log(JSON.stringify(r, null, 1)); await browser.close(); process.exit(0); }
const urls = await page.evaluate(`(async () => {
  const wait = (ms) => new Promise((k) => setTimeout(k, ms));
  while (!(window.__dbg && __dbg.st().ready)) await wait(50);
  const d = __dbg, out = [];
  for (let n = 0; n < ${N}; n++) {
    const t0 = performance.now();
    while (performance.now() - t0 < 60000 && !(${cond})) await wait(20);
    d.paused = true; await wait(80);
    out.push(await new Promise((k) => { window.__cap = k; }));
    d.paused = false; await wait(${GAP});
  }
  return out;
})()`);
const imgs = urls.map((u) => Buffer.from(u.split(',')[1], 'base64'));
if (imgs.length === 1) fs.writeFileSync(out, imgs[0]);
else {   // 横着拼：在页面里拼省得装图片库
  const joined = await page.evaluate(async (us) => {
    const ims = await Promise.all(us.map((u) => new Promise((k) => { const i = new Image(); i.onload = () => k(i); i.src = u; })));
    const c = document.createElement('canvas'); c.width = ims.reduce((s, i) => s + i.width, 0); c.height = ims[0].height;
    let x = 0; for (const i of ims) { c.getContext('2d').drawImage(i, x, 0); x += i.width; } return c.toDataURL('image/jpeg', 0.88);
  }, urls);
  fs.writeFileSync(out, Buffer.from(joined.split(',')[1], 'base64'));
}
console.log('saved', out, imgs.length);
await browser.close();
