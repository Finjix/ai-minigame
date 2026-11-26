// 用无头 Edge / Chrome 打开烘焙页，跑一段脚本（文件内容是 async 函数体，能用 BK、REALM、placeAt、THREE 等全局），打印返回的 JSON。
// 先起本地服务（仓库根目录）：BAKE_GAME=underwater-log TW_ROOT=<源工程> node tools/serve.mjs
// 用法：node games/underwater-log/tools/bake/run.mjs <脚本.js> [额外网址参数]
// puppeteer-core 用源工程 node_modules 里那份（只读引用）；浏览器 CHROME_PATH，默认本机 Edge
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
const SRC = process.env.TW_ROOT || 'D:/AI 3D 写实版 工程/水下巨木_写实投影版工程_V20';
const { default: puppeteer } = await import(pathToFileURL(SRC + '/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js').href);
const exe = process.env.CHROME_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const [script, qs = ''] = process.argv.slice(2);
const PAGE = `http://127.0.0.1:${process.env.PORT || 8770}/web/bake_env.html?xs=1&real=1&v15=1&v16=1&v17=1&v18=1&v19=1&v20=1${qs ? '&' + qs : ''}`;
const browser = await puppeteer.launch({
  executablePath: exe, headless: true, protocolTimeout: 3600e3,
  args: ['--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', '--hide-scrollbars'],
  defaultViewport: { width: 1080, height: 1920, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
page.on('console', (m) => { const t = m.text(); console.error('[page]', m.type(), t.slice(0, 600)); });
page.on('pageerror', (e) => console.error('[pageerror]', e.stack || e.message));
const t0 = Date.now();
await page.goto(PAGE, { waitUntil: 'load', timeout: 600e3 });
await page.waitForFunction('window.BAKE_OK === true || !!window.BAKE_ERR', { timeout: 600e3, polling: 500 });
const err = await page.evaluate(() => window.BAKE_ERR);
if (err) { console.error(err); await browser.close(); process.exit(1); }
console.error('ready in', ((Date.now() - t0) / 1000).toFixed(1), 's');
const body = fs.readFileSync(script, 'utf8');
const res = await page.evaluate(`(async () => { ${body} })()`);
console.log(JSON.stringify(res, null, 1));
await browser.close();
