// 打包：games/<名字>/src/main.js → games/<名字>/minigame/js/main.js（一个 IIFE，微信小游戏和浏览器调试页共用）
// 用法：node tools/build.mjs [游戏目录名…] [--dev]     不写名字 = games/ 下所有带 src/main.js 的游戏
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2), dev = args.includes('--dev');
let names = args.filter((a) => !a.startsWith('--'));
if (!names.length) names = fs.readdirSync('games').filter((n) => fs.existsSync(path.join('games', n, 'src', 'main.js')));
for (const n of names) {
  const G = path.join('games', n), out = path.join(G, 'minigame', 'js', 'main.js').replace(/\\/g, '/');
  const r = await build({
    entryPoints: [path.join(G, 'src', 'main.js')], bundle: true, format: 'iife', target: ['es2018'], outfile: out,
    minify: !dev, sourcemap: dev ? 'inline' : false, legalComments: 'none', treeShaking: true,
    define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'warning', metafile: true,
  });
  console.log(n, 'bundle', (r.metafile.outputs[out].bytes / 1024).toFixed(0), 'KB');
}
