// 打包：src/main.js → minigame/js/main.js（一个 IIFE，微信小游戏和浏览器调试页共用）
import { build } from 'esbuild';
const dev = process.argv.includes('--dev');
const r = await build({
  entryPoints: ['src/main.js'], bundle: true, format: 'iife', target: ['es2018'], outfile: 'minigame/js/main.js',
  minify: !dev, sourcemap: dev ? 'inline' : false, legalComments: 'none', treeShaking: true,
  define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'warning', metafile: true,
});
const out = r.metafile.outputs['minigame/js/main.js'];
console.log('bundle', (out.bytes / 1024).toFixed(0), 'KB');
