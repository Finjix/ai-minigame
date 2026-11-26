// 查蒙皮权重：每个顶点前 4 个影响（three.js 只认 JOINTS_0 / WEIGHTS_0）的权重和是多少，第 5–8 个占了多少
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
for (const f of process.argv.slice(2)) {
  const d = await io.read(f);
  for (const m of d.getRoot().listMeshes()) for (const p of m.listPrimitives()) {
    const w0 = p.getAttribute('WEIGHTS_0'), w1 = p.getAttribute('WEIGHTS_1'); if (!w0) continue;
    const n = w0.getCount(), a = [], b = [];
    let bad = 0, worst = 1;
    for (let i = 0; i < n; i++) {
      w0.getElement(i, a); let s0 = a.reduce((x, y) => x + y, 0), s1 = 0;
      if (w1) { w1.getElement(i, b); s1 = b.reduce((x, y) => x + y, 0); }
      const k = s0 / (s0 + s1 || 1); if (k < 0.98) bad++; worst = Math.min(worst, k);
    }
    console.log(f.split(/[\\/]/).pop(), m.getName(), 'verts', n, 'W1', !!w1, 'first4<98%:', bad, 'worst', worst.toFixed(3), 'type', w0.getComponentType(), w0.getNormalized());
  }
}
