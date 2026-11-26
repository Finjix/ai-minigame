// 会动的东西的写实固有色：场景里已经套上 real_mat57 写实材质的网格，按 UV 展开渲一遍（材质链在 UV 空间求值），存 PNG。
// 几何、骨骼、动画不从这里出：游戏直接用源工程 GLB（同一套 UV），见 tools/assets.mjs。
// 在 bake_env.html 里用：await import('/web/bake_props.js') 之后 BP.bakeAll(list)
import { THREE, renderer, scene } from './core.js';

let N = 0;
const save = async (p, body) => (await fetch('/_save?p=' + p, { method: 'POST', body })).text();
const blobOf = (cv) => new Promise((r) => cv.toBlob(r, 'image/png'));
const mats = (o) => (Array.isArray(o.material) ? o.material : [o.material]);

// 一份材质在一份几何（它用到的那几组三角形）上的 UV 空间固有色
export function bakeMat(geo, groups, material, size, offs = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
  const rt = new THREE.WebGLRenderTarget(size, size, { type: THREE.UnsignedByteType });
  const sc = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  const g = new THREE.BufferGeometry();
  for (const k of Object.keys(geo.attributes)) if (!/^skin|^instance/.test(k)) g.setAttribute(k, geo.attributes[k]);
  const idx = []; for (const gr of groups) for (let i = gr.start; i < gr.start + gr.count; i++) idx.push(geo.index ? geo.index.getX(i) : i);
  g.setIndex(idx);
  const off = { value: new THREE.Vector2() };
  const m = material.clone();
  m.side = THREE.DoubleSide; m.depthTest = false; m.depthWrite = false; m.transparent = false; m.blending = THREE.NoBlending; m.skinning = false;
  const src = material.onBeforeCompile;
  m.onBeforeCompile = function (sh, r) {
    if (src && src !== THREE.Material.prototype.onBeforeCompile) src.call(this, sh, r);
    sh.uniforms.uUVOff = off;
    sh.vertexShader = 'uniform vec2 uUVOff;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n  gl_Position = vec4((uv + uUVOff) * 2.0 - 1.0, 0.0, 1.0);');
    const enc = 'vec3 bk_ = clamp(diffuseColor.rgb, 0.0, 1.0); bk_ = mix(bk_ * 12.92, 1.055 * pow(bk_, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, bk_)); gl_FragColor = vec4(bk_, 1.0); return;';
    if (sh.fragmentShader.includes('#include <emissivemap_fragment>')) sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', enc + '\n#include <emissivemap_fragment>');
    else console.warn('bake: no emissivemap_fragment', material.name);
  };
  const key0 = material.customProgramCacheKey ? material.customProgramCacheKey() : '';
  const uniq = ++N; m.customProgramCacheKey = () => 'uvbake' + uniq + '|' + key0;
  const mesh = new THREE.Mesh(g, m); mesh.frustumCulled = false; sc.add(mesh);
  const clr = renderer.getClearColor(new THREE.Color()), ca = renderer.getClearAlpha();
  renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear();
  const ac = renderer.autoClear; renderer.autoClear = false;
  for (const [x, y] of offs) { off.value.set(-x, -y); renderer.render(sc, cam); }
  renderer.autoClear = ac;
  const px = new Uint8Array(size * size * 4); renderer.readRenderTargetPixels(rt, 0, 0, size, size, px);
  renderer.setRenderTarget(null); renderer.setClearColor(clr, ca); rt.dispose();
  const out = new Uint8ClampedArray(size * size * 4);   // 渲染目标是 v 朝上，PNG 行从上往下（flipY 贴图的约定）
  for (let y = 0; y < size; y++) out.set(px.subarray((size - 1 - y) * size * 4, (size - y) * size * 4), y * size * 4);
  const cv = document.createElement('canvas'); cv.width = cv.height = size; cv.getContext('2d').putImageData(new ImageData(out, size, size), 0, 0);
  return cv;
}

// 按材质名找网格：re 匹配材质名；返回 [{ mesh, mi }]，同一材质只取第一个用到它的网格
export function findMat(re) {
  const seen = new Map();
  scene.traverse((o) => { if (!o.isMesh || o.userData.outline) return; mats(o).forEach((m, mi) => { if (m && re.test(m.name || '') && !seen.has(m.name)) seen.set(m.name, { mesh: o, m, mi }); }); });
  return [...seen.values()];
}
// 一项：{ name, re, size }，存成 props/<name>_<k>.png，返回材质名 → 文件
export async function bakeOne({ name, re, size = 512, mesh: only }) {
  const list = only ? only : findMat(re);
  const out = [];
  let k = 0;
  for (const { mesh, m } of list) {
    const geo = mesh.geometry;
    const grs = geo.groups.length ? geo.groups.filter((gr) => mats(mesh)[gr.materialIndex] === m) : [{ start: 0, count: geo.index ? geo.index.count : geo.attributes.position.count }];
    if (!grs.length || !geo.attributes.uv) { out.push({ mat: m.name, skip: 'no uv/groups' }); continue; }
    const cv = bakeMat(geo, grs, m, size);
    const f = `props/${name}_${k}.png`; k++;
    out.push({ mat: m.name, file: f, r: await save(f, await blobOf(cv)), col: m.color && m.color.getHexString(), map: !!m.map });
  }
  return out;
}
window.BP = { bakeMat, findMat, bakeOne };
