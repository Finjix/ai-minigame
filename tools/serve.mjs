// Dev/bake static server.
//   /web/bake_*      -> tools/bake/*          (bake pages live "inside" the Township web dir so its relative fetches work)
//   /game/*          -> minigame/*            (browser dev build of the minigame)
//   POST /_save?p=x  -> build/bake/x         (bake pages write their outputs here)
//   everything else  -> Township project root (read-only source project)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SRC = process.env.TW_ROOT || 'D:/AI 3D 写实版 工程/20261027_Township换皮_V17写实';
const PORT = +(process.env.PORT || 8770);
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.fbx': 'application/octet-stream', '.glb': 'model/gltf-binary', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.bin': 'application/octet-stream' };

function resolve(u) {
  if (u.startsWith('/web/bake_')) return path.join(HERE, 'bake', u.slice('/web/'.length));
  if (u.startsWith('/game/')) return path.join(ROOT, 'minigame', u.slice('/game/'.length));
  if (u.startsWith('/build/')) return path.join(ROOT, 'build', u.slice('/build/'.length));
  return path.join(SRC, u);
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  const u = decodeURIComponent(url.pathname);
  if (req.method === 'POST' && u === '/_save') {
    const rel = url.searchParams.get('p');
    if (!rel || rel.includes('..')) { res.writeHead(400); return res.end('bad path'); }
    const out = path.join(ROOT, 'build', 'bake', rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => { const b = Buffer.concat(chunks); fs.writeFileSync(out, b); console.log('saved', rel, b.length); res.writeHead(200); res.end('ok ' + b.length); });
    return;
  }
  let f = resolve(u);
  if (f.endsWith(path.sep) || f.endsWith('/')) f = path.join(f, 'index.html');
  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('404 ' + u); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(f).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Content-Length': st.size });
    fs.createReadStream(f).pipe(res);
  });
}).listen(PORT, () => console.log('serve on', PORT, 'src', SRC));
