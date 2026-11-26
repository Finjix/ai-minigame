// 看 GLB 里哪些数据占地方：按网格属性 / 动画分类统计字节数
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
for (const f of process.argv.slice(2)) {
  const d = await io.read(f), R = d.getRoot(), acc = {};
  const add = (k, a) => { if (a) acc[k] = (acc[k] || 0) + a.getByteLength(); };
  for (const m of R.listMeshes()) for (const p of m.listPrimitives()) { for (const s of p.listSemantics()) add(s, p.getAttribute(s)); add('index', p.getIndices()); }
  for (const a of R.listAnimations()) for (const s of a.listSamplers()) { add('anim:' + a.getName() + ':in', s.getInput()); add('anim:' + a.getName() + ':out', s.getOutput()); }
  for (const s of R.listSkins()) add('ibm', s.getInverseBindMatrices());
  console.log(f.split('/').pop(), Object.entries(acc).map(([k, v]) => k + ' ' + (v / 1024).toFixed(0) + 'K').join(', '));
}
