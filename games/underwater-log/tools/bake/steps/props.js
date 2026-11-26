// run.mjs 跑的烘焙步骤：会动的东西的写实固有色（UV 空间烘，见 bake_props.js），存 build/underwater-log/bake/props/
await import('/web/bake_props.js');
const THREE = await import('/node_modules/three/build/three.module.js');
const seen = new Map();
window.placeAt(2700);
const all = []; 
(await import('/web/core.js')).scene.traverse((o) => { if (!o.isMesh) return; (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if (!m) return; const k = m.name + '|' + m.type; if (!seen.has(k)) { seen.set(k, 1); all.push([m.name, m.type, m.color && m.color.getHexString(), !!m.map, o.isSkinnedMesh ? 'S' : o.isInstancedMesh ? 'I' + o.count : '', o.geometry.attributes.position.count, o.parent && o.parent.name]); } }); });
const items = [
  ['hero', /BaSiTe/, 1024], ['cust', /Q版小人_skin|门框1/, 1024], ['meatRaw', /SM_肉/, 512], ['meatCooked', /SM_熟肉/, 512],
  ['cash', /M_qian1/, 512], ['log', /小木头/, 512], ['grinder1', /Inst8$/, 1024], ['grinder2', /Inst9$/, 1024], ['counter', /SM_收银台2/, 512],
  ['stump2', /四方连续木头2最新/, 512], ['stump3', /四方连续木头3最新/, 512], ['stump1', /四方连续木头$/, 512], ['belt', /传送带/, 512], ['giant', /木桩/, 1024],
];
const res = {};
for (const [name, re, size] of items) res[name] = await BP.bakeOne({ name, re, size });
return { res, all };
