// run.mjs 跑的烘焙步骤：木材堆的小木头（两个材质：树皮、端面）、巨木顶面年轮
await import('/web/bake_props.js');
const THREE = await import('/node_modules/three/build/three.module.js');
const { scene } = await import('/web/core.js');
const W = await import('/web/k57/world.js');
window.placeAt(2700); scene.updateMatrixWorld(true);
const pick = (root, f) => { const r = []; root.traverse((o) => { if (o.isMesh && !o.userData.outline) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if (m && f(o, m)) r.push({ mesh: o, m }); }); }); return r; };
const res = {};
res.log = await BP.bakeOne({ name: 'log', size: 256, mesh: pick(W.JM.woodpile, (o, m) => o.isInstancedMesh && m.color && /c0683a|f2cf98/.test(m.color.getHexString())) });
const gl = pick(W.JM.log, (o, m) => !!o.geometry.attributes.uv && m.type !== 'ShaderMaterial');
res.giant = await BP.bakeOne({ name: 'giant', size: 1024, mesh: gl });
res.giantInfo = gl.map(({ mesh, m }) => [m.type, m.color && m.color.getHexString(), !!m.map, mesh.geometry.attributes.position.count, new THREE.Box3().setFromObject(mesh).min.toArray().map((v) => +v.toFixed(2)), new THREE.Box3().setFromObject(mesh).max.toArray().map((v) => +v.toFixed(2)), mesh.geometry.type]);
const sh = W.JM.shaved; res.shaved = []; if (sh) sh.traverse((o) => { if (o.isMesh) res.shaved.push([o.geometry.type, o.geometry.attributes.position.count, o.material.type, o.material.map ? 'map' : '', o.visible]); });
return res;
