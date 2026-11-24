// Export characters + props from the loaded Township scene as plain GLB (geometry, skin, clips; no textures)
// and their final albedo (the UE-style material chain evaluated per texel, via a UV-space render) as PNG.
import { THREE, renderer } from './core.js';
import { PROTO, loadKind, cmScale } from './fbxchars.js';
import * as IV from './items_v7.js';
import * as SkeletonUtils from '/node_modules/three/examples/jsm/utils/SkeletonUtils.js';
import { GLTFExporter } from '/node_modules/three/examples/jsm/exporters/GLTFExporter.js';

let BAKE_N = 0;
const save = async (p, body) => (await fetch('/_save?p=' + p, { method: 'POST', body })).text();

// ---- UV-space albedo bake of one material (for the geometry's groups that use it)
function bakeMat(geo, groups, material, size, offs = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]], remap = [0, 0, 1, 1]) {
  const rt = new THREE.WebGLRenderTarget(size, size, { type: THREE.UnsignedByteType });
  const sc = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  const g = new THREE.BufferGeometry();
  for (const k of ['position', 'normal', 'uv', 'aPart']) if (geo.attributes[k]) g.setAttribute(k, geo.attributes[k]);
  const idx = []; for (const gr of groups) for (let i = gr.start; i < gr.start + gr.count; i++) idx.push(geo.index ? geo.index.getX(i) : i);
  g.setIndex(idx);
  const off = { value: new THREE.Vector2() }, rmp = { value: new THREE.Vector4(...remap) };
  const m = material.clone();
  m.side = THREE.DoubleSide; m.depthTest = false; m.depthWrite = false; m.transparent = false; m.blending = THREE.NoBlending;
  const src = material.onBeforeCompile;
  m.onBeforeCompile = function (sh, r) {
    if (src && src !== THREE.Material.prototype.onBeforeCompile) src.call(this, sh, r);
    sh.uniforms.uUVOff = off; sh.uniforms.uRmp = rmp;
    sh.vertexShader = 'uniform vec2 uUVOff;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n  gl_Position = vec4((uv + uUVOff) * 2.0 - 1.0, 0.0, 1.0);');
    const enc = 'vec3 bk = clamp(diffuseColor.rgb, 0.0, 1.0); bk = mix(bk * 12.92, 1.055 * pow(bk, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, bk)); gl_FragColor = vec4(bk, 1.0); return;';
    if (sh.fragmentShader.includes('#include <emissivemap_fragment>')) sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', enc + '\n#include <emissivemap_fragment>');
    else console.warn('bake: no emissivemap_fragment');
  };
  const key0 = material.customProgramCacheKey ? material.customProgramCacheKey() : '';
  const uniq = ++BAKE_N; m.customProgramCacheKey = () => 'uvbake' + uniq + '|' + key0;
  const mesh = new THREE.Mesh(g, m); mesh.frustumCulled = false; sc.add(mesh);
  const clr = renderer.getClearColor(new THREE.Color()), ca = renderer.getClearAlpha();
  renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear();
  const ac = renderer.autoClear; renderer.autoClear = false;
  for (const [x, y] of offs) { off.value.set(-x, -y); renderer.render(sc, cam); }
  renderer.autoClear = ac;
  const px = new Uint8Array(size * size * 4); renderer.readRenderTargetPixels(rt, 0, 0, size, size, px);
  renderer.setRenderTarget(null); renderer.setClearColor(clr, ca); rt.dispose();
  // RT rows are bottom-up == UV v up; PNG rows top-down with flipY texture convention (v=1 at top) -> flip rows
  const out = new Uint8ClampedArray(size * size * 4);
  for (let y = 0; y < size; y++) out.set(px.subarray((size - 1 - y) * size * 4, (size - y) * size * 4), y * size * 4);
  const cv = document.createElement('canvas'); cv.width = cv.height = size; cv.getContext('2d').putImageData(new ImageData(out, size, size), 0, 0);
  return cv;
}
const blobOf = (cv) => new Promise((r) => cv.toBlob(r, 'image/png'));

function exportGLB(obj, clips) {
  return new Promise((res, rej) => new GLTFExporter().parse(obj, (b) => res(b), rej, { binary: true, animations: clips, onlyVisible: false }));
}

// ---- characters
export async function exportChar(kind, { name = kind, size = 1024, clipNames, variant = null, matNames, uvRemap = false, splitParts = null } = {}) {
  const P = PROTO[kind] || await loadKind(kind);
  const inner = SkeletonUtils.clone(P.root);
  const vm = variant ? P.variants[variant] : null;
  const texs = [];
  const done = new Map();
  let mi = 0;
  inner.traverse((o) => {
    if (!o.isMesh) return;
    const geo = o.geometry = o.geometry.clone();
    if (splitParts && geo.attributes.aPart) {   // re-order triangles: parts not in splitParts first (material 0), then splitParts (material 1)
      const ap = geo.attributes.aPart, ix = geo.index || { count: geo.attributes.position.count, getX: (i) => i }, A = [], Bx = [];
      for (let i = 0; i < ix.count; i += 3) { const p = Math.round(ap.getX(ix.getX(i))); (splitParts.includes(p) ? Bx : A).push(ix.getX(i), ix.getX(i + 1), ix.getX(i + 2)); }
      geo.setIndex([...A, ...Bx]); geo.clearGroups(); geo.addGroup(0, A.length, 0); geo.addGroup(A.length, Bx.length, 1);
      const m0 = Array.isArray(o.material) ? o.material[0] : o.material; o.material = [m0, m0.clone()];
      o.material[1].onBeforeCompile = m0.onBeforeCompile; o.material[1].customProgramCacheKey = m0.customProgramCacheKey; o.material[1].userData = m0.userData;
    }
    const src = Array.isArray(o.material) ? o.material : [o.material];
    const use = vm ? src.map((m, i) => vm[i] || vm[0]) : src;
    let remap = [0, 0, 1, 1];
    if (uvRemap) { const uv = geo.attributes.uv; let a = [1e9, 1e9, -1e9, -1e9]; for (let i = 0; i < uv.count; i++) { const x = uv.getX(i), y = uv.getY(i); a = [Math.min(a[0], x), Math.min(a[1], y), Math.max(a[2], x), Math.max(a[3], y)]; }
      const pad = 0.002; remap = [a[0] - pad, a[1] - pad, a[2] - a[0] + 2 * pad, a[3] - a[1] + 2 * pad]; }
    const grs = geo.groups.length ? geo.groups : [{ start: 0, count: geo.index ? geo.index.count : geo.attributes.position.count, materialIndex: 0 }];
    const newMats = use.map((m) => {
      if (!done.has(m)) {
        const myGroups = grs.filter((gr) => use[gr.materialIndex] === m);
        const tn = `${name}_${matNames ? matNames[mi] : mi}`; mi++;
        texs.push([tn, bakeMat(geo, myGroups, m, size, uvRemap ? [[0, 0]] : undefined, remap)]);
        done.set(m, new THREE.MeshStandardMaterial({ name: tn }));
      }
      return done.get(m);
    });
    o.material = Array.isArray(o.material) ? newMats : newMats[0];
    if (uvRemap) { const uv = geo.attributes.uv = geo.attributes.uv.clone(); for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) - remap[0]) / remap[2], (uv.getY(i) - remap[1]) / remap[3]); }
    for (const k of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv', 'skinIndex', 'skinWeight'].includes(k)) geo.deleteAttribute(k);
  });
  const clips = (clipNames || Object.keys(P.clips)).filter((k) => P.clips[k]).map((k) => { const c = P.clips[k].clone(); c.name = k; return c; });
  const root = new THREE.Group(); root.name = name; root.add(inner);
  const glb = await exportGLB(root, clips);
  const r = { glb: await save(`chars/${name}.glb`, glb) };
  for (const [tn, cv] of texs) r[tn] = await save(`chars/${tn}.png`, await blobOf(cv));
  let tris = 0; inner.traverse((o) => { if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; });
  r.meta = { cm: cmScale(), minY: P.box.min.y, maxY: P.box.max.y, tris, clips: clips.map((c) => [c.name, +c.duration.toFixed(3)]) };
  await save(`chars/${name}.json`, JSON.stringify(r.meta));
  return r;
}

// ---- static props (already in meters)
export async function exportProp(name, parts, size = 512) {
  const root = new THREE.Group(); root.name = name; const texs = [];
  parts.forEach(([geo, mat, mname], i) => {
    const g = geo.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    const tn = `${name}_${mname || i}`;
    if (mat.map && g.attributes.uv) texs.push([tn, bakeMat(g, [{ start: 0, count: g.index ? g.index.count : g.attributes.position.count }], mat, size)]);
    const m = new THREE.MeshStandardMaterial({ name: tn, color: mat.map ? 0xffffff : mat.color });
    const mesh = new THREE.Mesh(g, m); mesh.name = tn; root.add(mesh);
  });
  const r = { glb: await save(`props/${name}.glb`, await exportGLB(root, [])) };
  for (const [tn, cv] of texs) r[tn] = await save(`props/${tn}.png`, await blobOf(cv));
  return r;
}
export const items = IV;
window.BC = { exportChar, exportProp, items: IV, PROTO };

// ---- crowd person: idle pose baked to static geometry, simplified, eye parts split into group 1
import { bakeFrames } from './fbxchars.js';
import { MeshoptSimplifier } from '/node_modules/three/examples/jsm/libs/meshopt_simplifier.module.js';
import { mergeVertices } from '/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js';
export async function exportCrowd(tris = 1100, frac = 0.3) {
  await MeshoptSimplifier.ready;
  const P = PROTO.customer || await loadKind('customer');
  const fr = bakeFrames('customer', 'idle', 1, { dur: P.clips.idle.duration }).frames[0];
  const src = fr.clone(); src.deleteAttribute('normal');
  const g = mergeVertices(src, 1e-5); g.computeVertexNormals();
  const pos = g.attributes.position.array, n = g.attributes.position.count, uv = g.attributes.uv, ap = g.attributes.aPart;
  const attr = new Float32Array(n * 3); for (let i = 0; i < n; i++) { attr[i * 3] = uv.getX(i); attr[i * 3 + 1] = uv.getY(i); attr[i * 3 + 2] = ap.getX(i) * 10; }
  const [idx] = MeshoptSimplifier.simplifyWithAttributes(new Uint32Array(g.index.array), pos, 3, attr, 3, [1, 1, 1], null, tris * 3, 0.05, []);
  const A = [], Bx = []; for (let i = 0; i < idx.length; i += 3) { const p = Math.round(ap.getX(idx[i])); (p === 8 || p === 9 ? Bx : A).push(idx[i], idx[i + 1], idx[i + 2]); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', g.attributes.position); out.setAttribute('normal', g.attributes.normal); out.setAttribute('uv', uv);
  out.setIndex([...A, ...Bx]); out.addGroup(0, A.length, 0); out.addGroup(A.length, Bx.length, 1);
  // compact unused vertices
  const used = new Map(), ia = out.index.array, nidx = new Uint32Array(ia.length); let k = 0;
  for (let i = 0; i < ia.length; i++) { if (!used.has(ia[i])) used.set(ia[i], k++); nidx[i] = used.get(ia[i]); }
  const cg = new THREE.BufferGeometry();
  for (const nm of ['position', 'normal', 'uv']) { const a = out.attributes[nm], s = a.itemSize, d = new Float32Array(k * s); for (const [o, j] of used) for (let c = 0; c < s; c++) d[j * s + c] = a.array[o * s + c]; cg.setAttribute(nm, new THREE.BufferAttribute(d, s)); }
  cg.setIndex(new THREE.BufferAttribute(nidx, 1)); cg.addGroup(0, A.length, 0); cg.addGroup(A.length, Bx.length, 1);
  const root = new THREE.Group(); root.name = 'crowd';
  const mesh = new THREE.Mesh(cg, [new THREE.MeshStandardMaterial({ name: 'cust_body' }), new THREE.MeshStandardMaterial({ name: 'cust_eye' })]); root.add(mesh);
  const r = { glb: await save('props/crowd.glb', await exportGLB(root, [])), tris: nidx.length / 3, verts: k };
  return r;
}
window.BC.exportCrowd = exportCrowd;
