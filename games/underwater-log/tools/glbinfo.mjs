import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
for (const f of process.argv.slice(2)) {
  try {
  const d = await io.read(f); const r = d.getRoot();
  let tris = 0; for (const m of r.listMeshes()) for (const p of m.listPrimitives()) { const i = p.getIndices(); tris += (i ? i.getCount() : p.getAttribute('POSITION').getCount()) / 3; }
  console.log(f.split('/').slice(-2).join('/'), 'meshes', r.listMeshes().length, 'tris', tris, 'mats', r.listMaterials().map(m => m.getName() + (m.getBaseColorTexture() ? '[T' + m.getBaseColorTexture().getSize() + ']' : '') ).join(','), 'skins', r.listSkins().length, 'anims', r.listAnimations().map(a => a.getName()).join(','));
  } catch (e) { console.log(f, 'ERR', e.message); }
}
