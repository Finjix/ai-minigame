// 开发 / 烘焙用的本地服务（所有小游戏共用）
//   /games/<名字>/*  -> games/<名字>/minigame/*   浏览器里跑小游戏（minigame/index.html）
//   /web/bake_*      -> games/$BAKE_GAME/tools/bake/*   烘焙页放在源工程 web 目录「里面」，它的相对路径才对
//   POST /_save?p=x  -> build/$BAKE_GAME/bake/x  烘焙页把产物写到这里
//   其他             -> 源工程根目录（$TW_ROOT，只读）
// 环境变量：BAKE_GAME（默认 waterfall-fishing）、TW_ROOT（该游戏的源工程目录）、PORT
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const BAKE_GAME = process.env.BAKE_GAME || 'waterfall-fishing';
const SRC = process.env.TW_ROOT || 'D:/AI 3D 写实版 工程/20261027_Township换皮_V17写实';
const PORT = +(process.env.PORT || 8770);
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.fbx': 'application/octet-stream', '.glb': 'model/gltf-binary', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.bin': 'application/octet-stream' };

function resolve(u) {
  const g = u.match(/^\/games\/([^/]+)\/(.*)$/);
  if (g) return path.join(ROOT, 'games', g[1], 'minigame', g[2]);
  if (u.startsWith('/web/bake_')) return path.join(ROOT, 'games', BAKE_GAME, 'tools', 'bake', u.slice('/web/'.length));
  if (u.startsWith('/build/')) return path.join(ROOT, 'build', u.slice('/build/'.length));
  return path.join(SRC, u);
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  const u = decodeURIComponent(url.pathname);
  if (req.method === 'POST' && u === '/_save') {
    const rel = url.searchParams.get('p');
    if (!rel || rel.includes('..')) { res.writeHead(400); return res.end('bad path'); }
    const out = path.join(ROOT, 'build', BAKE_GAME, 'bake', rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => { const b = Buffer.concat(chunks); fs.writeFileSync(out, b); console.log('saved', rel, b.length); res.writeHead(200); res.end('ok ' + b.length); });
    return;
  }
  let f = resolve(u);
  if (u.endsWith('/')) f = path.join(f, 'index.html');
  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('404 ' + u); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(f).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Content-Length': st.size });
    fs.createReadStream(f).pipe(res);
  });
}).listen(PORT, () => console.log('serve on', PORT, '| bake game', BAKE_GAME, '| src', SRC));
