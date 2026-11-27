// 单文件 HTML：把 games/<名字>/minigame 的 js/main.js 和 assets/ 下所有资源（base64）塞进一个 .html，双击就能在浏览器里玩（不用起服务）。
// 用法：node tools/html.mjs <游戏目录名> [输出.html]      先 node tools/build.mjs <名字> 打正常包（不要 --dbg）
//   默认输出 build/<名字>/<名字>.html。资源由 shared/playable/platform.js 从 window.__ASSETS 读。
import fs from 'node:fs';
import path from 'node:path';

const [name, outArg] = process.argv.slice(2);
if (!name) { console.error('用法：node tools/html.mjs <游戏目录名> [输出.html]'); process.exit(1); }
const MG = path.join('games', name, 'minigame');
const assets = {};
const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else assets[path.relative(MG, p).replace(/\\/g, '/')] = fs.readFileSync(p).toString('base64'); } };
walk(path.join(MG, 'assets'));
const title = (fs.readFileSync(path.join(MG, 'index.html'), 'utf8').match(/<title>([^<（(]*)/) || [, name])[1].trim();
const js = fs.readFileSync(path.join(MG, 'js', 'main.js'), 'utf8');
const inner = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<style>html,body{margin:0;padding:0;width:100%;height:100%;background:#10141a;overflow:hidden;touch-action:none;user-select:none}</style>
</head><body>
<script>window.__ASSETS=${JSON.stringify(assets)};</script>
<script>${js}</script>
</body></html>`;
// 游戏只做竖屏：外层页面放一个居中的 9:16 iframe（手机竖屏就是全屏），游戏在 iframe 里按 iframe 的尺寸排版
const html = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>${title}</title>
<style>html,body{margin:0;padding:0;width:100%;height:100%;background:#000;overflow:hidden}
#g{position:absolute;left:50%;top:0;transform:translateX(-50%);height:100%;width:min(100vw,56.25vh);border:0;display:block;background:#10141a}</style>
</head><body><iframe id="g" allow="autoplay"></iframe>
<script>(function(){var d=document.getElementById('g').contentDocument;d.open();d.write(${JSON.stringify(inner).replace(/<\/script/gi, '<\\/script')});d.close();})();</script>
</body></html>`;
const out = outArg || path.join('build', name, name + '.html');
if (!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log(name, '→', out, (html.length / 1048576).toFixed(2), 'MB,', Object.keys(assets).length, '个资源');
