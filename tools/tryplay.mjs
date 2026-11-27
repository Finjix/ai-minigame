// 微信服务商平台「试玩广告」的操作：登录、建试玩 AppID、查开发版本。上传本身用微信开发者工具（见 docs/tryplay-upload.md）。
// 无头 Edge 开着调试端口 9333，配置目录 build/tryplay/profile（登录态留在里面，过期了再扫码）。puppeteer-core 在 devDependencies 里。
//   node tools/tryplay.mjs start                      起无头 Edge（已经起了就跳过）
//   node tools/tryplay.mjs login [--org 企业名]        没登录就把二维码存到 build/tryplay/login-qr.jpg（打印 QR <路径>），等扫码，再选企业账号
//   node tools/tryplay.mjs games                      能关联的小游戏（名字 → AppID）
//   node tools/tryplay.mjs list [名称关键字]           试玩 AppID 列表
//   node tools/tryplay.mjs create <试玩名称> [--game 无尽冬日] [--bind wxada4175c8b2a9864]   建试玩 AppID（同名已有就直接打印），打印 APPID <id>
//   node tools/tryplay.mjs versions <试玩AppID> …     开发版本（版本号、备注、试玩包 ID）
//   node tools/tryplay.mjs qr <试玩AppID> …           最新开发版本的「体验」二维码 → build/tryplay/preview-<AppID>.jpg
//   node tools/tryplay.mjs stop                      关掉无头 Edge
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const PORT = 9333;
const ROOT = path.resolve(import.meta.dirname, '..');
const DIR = path.join(ROOT, 'build/tryplay');
const EDGE = process.env.CHROME_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const TRYPLAY = 'https://fuwu.weixin.qq.com/service-provider/miniGames/tryplay';
const CGI = '/cgi-bin/gamewxagchannelwap/';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (k, d) => { const i = argv.indexOf('--' + k); return i > 0 ? argv[i + 1] : d; };
const pos = argv.slice(1).filter((a, i, l) => !a.startsWith('--') && !(i > 0 && l[i - 1].startsWith('--')));

const alive = async () => { try { return (await fetch(`http://127.0.0.1:${PORT}/json/version`)).ok; } catch { return false; } };

async function start() {
  if (await alive()) return;
  fs.mkdirSync(DIR, { recursive: true });
  spawn(EDGE, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${path.join(DIR, 'profile')}`, '--no-first-run', '--disable-extensions', '--window-size=1400,900', 'about:blank'], { detached: true, stdio: 'ignore' }).unref();
  for (let i = 0; i < 30 && !(await alive()); i++) await sleep(500);
  if (!(await alive())) throw new Error('Edge 没起来');
}

async function connect() {
  await start();
  const br = await puppeteer.connect({ browserURL: `http://127.0.0.1:${PORT}`, defaultViewport: { width: 1400, height: 900 } });
  for (const p of await br.pages()) if (p.url() !== 'about:blank') await p.close().catch(() => {});   // 上次留下的标签页可能停在弹窗上
  const pg = await br.newPage();
  pg.setDefaultTimeout(30000);
  const done = br.disconnect.bind(br);
  br.disconnect = async () => { await pg.close().catch(() => {}); return done(); };
  return { br, pg };
}

const loggedIn = async (pg) => {
  if (!pg.url().startsWith('https://fuwu.weixin.qq.com')) await pg.goto('https://fuwu.weixin.qq.com/service', { waitUntil: 'networkidle2' });
  const t = await pg.evaluate(() => fetch('/ngi/getuserinfo', { credentials: 'include' }).then((r) => r.text()));
  return JSON.parse(t).success === true;
};

// 文字完全相等、看得见的最后一个元素，用 DOM click（puppeteer 的鼠标点击在这个页面上偶尔卡住）
const clickText = (frame, text, sel = '*') => frame.evaluate((text, sel) => {
  const e = [...document.querySelectorAll(sel)].filter((x) => x.offsetParent && x.innerText && x.innerText.trim() === text).pop();
  if (!e) return false; e.click(); return true;
}, text, sel);

// 试玩页本体在 game.weixin.qq.com 的 iframe 里；进「去制作」那一屏
async function tryplayFrame(pg) {
  if (!pg.url().startsWith(TRYPLAY)) await pg.goto(TRYPLAY, { waitUntil: 'networkidle2' });
  let f;
  for (let i = 0; i < 40 && !(f = pg.frames().find((x) => x.url().includes('game.weixin.qq.com'))); i++) await sleep(250);
  if (!f) throw new Error('没找到试玩 iframe（没登录？先跑 login）');
  for (let i = 0; i < 40; i++) {
    const t = await f.evaluate(() => document.body.innerText).catch(() => '');
    if (t.includes('试玩AppID管理')) return f;
    if (t.includes('去制作')) await clickText(f, '去制作');
    await sleep(500);
  }
  throw new Error('试玩页没加载出来');
}

const api = (f, url, init) => f.evaluate(async (url, init) => JSON.parse(await (await fetch(url, { credentials: 'include', ...init })).text()), url, init || {});
const accounts = async (f, name = '') => (await api(f, CGI + 'getplayableaccountlistforfuwu?data=' + encodeURIComponent(JSON.stringify({ cur_page: 0, per_page: 99, filter: { bind_appid: '', appid: '', playable_nick_name: name } })))).data?.account_list || [];
const games = async (f) => (await api(f, CGI + 'getplayablebindminigamelist')).data?.playable_game_list || [];

async function login() {
  const { br, pg } = await connect();
  const org = opt('org', '上海青笛科技有限公司');
  if (!(await loggedIn(pg))) {
    let qr;
    pg.on('response', async (r) => { if (r.url().includes('/ngi/getWxQrCodeInfo')) { try { qr = JSON.parse(await r.text()).data?.qrCodeUrl; } catch {} } });
    await pg.goto('https://fuwu.weixin.qq.com/service', { waitUntil: 'networkidle2' });
    // 首页那张二维码是半透明的占位图；点右上「登录」才会请求真码
    await clickText(pg.mainFrame(), '登录', 'button');
    for (let i = 0; i < 40 && !qr; i++) await sleep(250);
    if (!qr) throw new Error('没拿到登录二维码');
    const out = path.join(DIR, 'login-qr.jpg');
    fs.writeFileSync(out, Buffer.from(await (await fetch('https://open.weixin.qq.com' + qr)).arrayBuffer()));
    console.log('QR ' + out);
    let ok = false;
    for (let i = 0; i < 100 && !ok; i++) { await sleep(3000); ok = await pg.evaluate(() => fetch('/ngi/getuserinfo', { credentials: 'include' }).then((r) => r.json()).then((j) => j.success === true)).catch(() => false); }
    if (!ok) throw new Error('5 分钟没扫码，二维码过期了，重新跑 login');
  }
  await pg.goto(TRYPLAY, { waitUntil: 'networkidle2' });
  for (let i = 0; i < 20; i++) {
    const t = await pg.evaluate(() => document.body.innerText);
    if (t.includes('选择登录账号')) { await clickText(pg.mainFrame(), org); await sleep(3000); await pg.goto(TRYPLAY, { waitUntil: 'networkidle2' }); break; }
    if (pg.frames().some((x) => x.url().includes('game.weixin.qq.com'))) break;
    await sleep(500);
  }
  const f = await tryplayFrame(pg);
  console.log('LOGGED IN', (await games(f)).map((g) => `${g.appname}=${g.appid}`).join(' '));
  br.disconnect();
}

async function create(name) {
  if (!name) throw new Error('要给试玩名称');
  const gameName = opt('game', '无尽冬日'), bind = opt('bind', 'wxada4175c8b2a9864');
  const { br, pg } = await connect();
  const f = await tryplayFrame(pg);
  const same = (await accounts(f, name)).filter((a) => a.playable_nick_name === name);
  if (same.length) { for (const a of same) console.log(`EXISTS ${a.appid} bind=${a.bind_appid} ${a.playable_nick_name}`); console.log('APPID ' + same[0].appid); br.disconnect(); return; }
  const g = (await games(f)).find((x) => x.appname === gameName);
  if (!g || g.appid !== bind) throw new Error(`「${gameName}」的 AppID 是 ${g?.appid}，不是 ${bind}，没建`);
  if (!(await clickText(f, '创建试玩广告', 'button'))) throw new Error('没找到「创建试玩广告」');
  await sleep(1500);
  const dlg = await f.evaluateHandle(() => [...document.querySelectorAll('.weui-desktop-dialog')].find((d) => d.innerText.includes('新建试玩广告')));
  const input = await dlg.$('.name-input input');
  await input.evaluate((e) => e.focus());
  await pg.keyboard.down('Control'); await pg.keyboard.press('a'); await pg.keyboard.up('Control'); await pg.keyboard.press('Backspace');
  await pg.keyboard.type(name);
  await (await dlg.$('.game-select input')).evaluate((e) => e.click());
  await sleep(800);
  await f.evaluate((n) => [...document.querySelectorAll('.weui-desktop-dropdown__list-ele__text')].find((e) => e.innerText === n && e.offsetParent)?.click(), gameName);
  await sleep(800);
  const got = await dlg.evaluate((d) => [d.querySelector('.name-input input').value, d.querySelector('.game-select input').value]);
  if (got[0] !== name || got[1] !== gameName) throw new Error('表单没填对：' + got.join(' / '));
  await dlg.evaluate((d) => d.querySelector('.confirm-button button').click());
  let a;
  for (let i = 0; i < 20 && !a; i++) { await sleep(500); a = (await accounts(f, name)).find((x) => x.playable_nick_name === name); }
  await clickText(f, '确认', 'button');   // 「创建成功」弹窗
  if (!a) throw new Error('提交了但列表里没找到，去平台上看一下');
  console.log(`CREATED ${a.appid} bind=${a.bind_appid} ${a.playable_nick_name}`);
  if (a.bind_appid !== bind) console.log(`!! 关联的小游戏是 ${a.bind_appid}，不是 ${bind}`);
  console.log('APPID ' + a.appid);
  br.disconnect();
}

async function main() {
  if (cmd === 'start') { await start(); console.log('Edge 在 ' + PORT); return; }
  if (cmd === 'stop') { if (await alive()) { const br = await puppeteer.connect({ browserURL: `http://127.0.0.1:${PORT}` }); await br.close(); } console.log('关了'); return; }
  if (cmd === 'login') return login();
  if (cmd === 'create') return create(pos[0]);
  const { br, pg } = await connect();
  const f = await tryplayFrame(pg);
  if (cmd === 'games') for (const g of await games(f)) console.log(`${g.appname}\t${g.appid}`);
  else if (cmd === 'list') for (const a of await accounts(f, pos[0] || '')) console.log(`${a.appid}\tbind=${a.bind_appid}\t${a.playable_nick_name}`);
  else if (cmd === 'versions') for (const id of pos) {
    const l = (await api(f, CGI + 'getplayablebizversionlistforfuwu?appid=' + id)).data?.version_list || [];
    if (!l.length) console.log(`${id}\t（没有开发版本）`);
    for (const v of l) console.log(`${id}\t${v.custom_version}\t${new Date(v.commit_time * 1000).toLocaleString('zh-CN')}\t${v.user_name}\t${v.version_nick_name}\t${v.playable_outid}`);
  }
  else if (cmd === 'qr') {   // 开发版本的「体验」二维码（平台页面上「体验」悬停出来的那张），存到 build/tryplay/preview-<AppID>.jpg
    for (const id of pos) {
      // 扫码打开的是平台的「试玩广告预览」小程序，它的 AppID 在线上版本列表的返回里
      const pv = (await api(f, CGI + 'getplayableversionlistforfuwu', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ cur_page: 0, per_page: 10, appid: id, filter: { version_nick_name: '' } }) })).data?.preview_appid;
      if (!pv) throw new Error('没拿到 preview_appid');
      const v = ((await api(f, CGI + 'getplayablebizversionlistforfuwu?appid=' + id)).data?.version_list || [])[0];
      if (!v) { console.log(`${id}\t（没有开发版本）`); continue; }
      const b64 = await f.evaluate(async (u) => { const b = new Uint8Array(await (await fetch(u, { credentials: 'include' })).arrayBuffer()); let s = ''; for (const x of b) s += String.fromCharCode(x); return btoa(s); },
        CGI + 'getwxagappqrcodeforfuwu?appid=' + encodeURIComponent(pv) + '&path=' + encodeURIComponent(v.preview_path));
      const out = path.join(DIR, `preview-${id}.jpg`);
      fs.writeFileSync(out, Buffer.from(b64, 'base64'));
      console.log(`QR ${out}\t${v.custom_version}\t${v.version_nick_name}`);
    }
  }
  else console.log('用法见文件开头');
  br.disconnect();
}
main().catch((e) => { console.error('ERR ' + e.message); process.exit(1); });
