// 打包：games/<名字>/src/main.js → games/<名字>/minigame/js/main.js（一个 IIFE，微信小游戏和浏览器调试页共用）
// 用法：node tools/build.mjs [游戏目录名…] [--dev] [--dbg]     不写名字 = games/ 下所有带 src/main.js 的游戏
//   --dbg：FORCE_DBG = true，微信里也显示左下角的状态 / 报错浮层（看 fps 用，交付前去掉）
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2), dev = args.includes('--dev'), dbg = args.includes('--dbg');
let names = args.filter((a) => !a.startsWith('--'));
if (!names.length) names = fs.readdirSync('games').filter((n) => fs.existsSync(path.join('games', n, 'src', 'main.js')));
for (const n of names) {
  const G = path.join('games', n), out = path.join(G, 'minigame', 'js', 'main.js').replace(/\\/g, '/');
  const r = await build({
    entryPoints: [path.join(G, 'src', 'main.js')], bundle: true, format: 'iife', target: ['es2018'], outfile: out,
    minify: !dev, sourcemap: dev ? 'inline' : false, legalComments: 'none', treeShaking: true,
    define: { 'process.env.NODE_ENV': '"production"', FORCE_DBG: dbg ? 'true' : 'false' }, logLevel: 'warning', metafile: true,
  });
  console.log(n, 'bundle', (r.metafile.outputs[out].bytes / 1024).toFixed(0), 'KB');
  checkJson(path.join(G, 'minigame'));
}

// 包里的 JSON 必须是合法 UTF-8：水下巨木的 audio.json 里有一句 GBK 中文，iOS 试玩环境按 utf8 读它两个回调都不来，
// 加载卡在 96%（1.0.2），放行后又整个没声音（1.0.3）。安卓和浏览器都不报错，所以在打包时查
function checkJson(dir) {
  const bad = [];
  const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== 'dev') walk(p); continue; }
    if (!e.name.endsWith('.json')) continue;
    const b = fs.readFileSync(p);
    try { JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(b)); } catch (err) { bad.push(p + '：' + err.message); }
  } };
  walk(dir);
  if (bad.length) { console.error('JSON 不是合法 UTF-8 / 解析不了（改成 UTF-8 再打包）：\n  ' + bad.join('\n  ')); process.exit(1); }
}
