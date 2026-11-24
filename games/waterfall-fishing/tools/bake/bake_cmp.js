// 主角原始材质 vs 游戏里的烘焙贴图（同一灯光、成片视角）并排渲染，查颜色差异
import { THREE, renderer, BACK } from './core.js';
import { PROTO } from './fbxchars.js';
import * as SkeletonUtils from '/node_modules/three/examples/jsm/utils/SkeletonUtils.js';
export async function cmp(texBase = '/games/waterfall-fishing/assets/tex/', names = { hero_body: 'hero_body.jpg', hero_lan: 'hero_lan.jpg', hero_eye: 'hero_body.jpg' }) {
  const P = PROTO.buster, TL = new THREE.TextureLoader();
  const tx = {}; for (const [k, f] of Object.entries(names)) { tx[k] = await TL.loadAsync(texBase + f); tx[k].colorSpace = THREE.SRGBColorSpace; tx[k].wrapS = tx[k].wrapT = THREE.RepeatWrapping; }
  const mk = (baked) => {
    const g = new THREE.Group(), inner = SkeletonUtils.clone(P.root); const h = new THREE.Group(); h.scale.setScalar(0.008585); h.position.y = -P.box.min.y * 0.008585; h.add(inner); g.add(h);
    const order = ['hero_body', 'hero_lan', 'hero_eye'];
    if (baked) inner.traverse((o) => { if (o.isMesh) { const n = (Array.isArray(o.material) ? o.material : [o.material]).length; o.material = Array.from({ length: n }, (_, i) => new THREE.MeshLambertMaterial({ map: tx[order[i]] })); } });
    const mixer = new THREE.AnimationMixer(inner); const a = mixer.clipAction(P.clips.idle); a.play(); mixer.update(0.3);
    return g;
  };
  const sc = new THREE.Scene(); sc.background = new THREE.Color(0x6b6f78);
  sc.add(new THREE.HemisphereLight(0xd4e2ff, 0xcdbfb2, 1.7)); const sun = new THREE.DirectionalLight(0xfff0dc, 3.0); sun.position.set(-0.318, 0.866, 0.386).multiplyScalar(10); sc.add(sun);
  const A = mk(false), B = mk(true); A.position.x = -0.8; B.position.x = 0.8; sc.add(A, B);
  const cam = new THREE.OrthographicCamera(-1.8, 1.8, 1.4, -1.4, 0.1, 100); cam.position.copy(BACK).multiplyScalar(20).add(new THREE.Vector3(0, 0.9, 0)); cam.lookAt(0, 0.9, 0);
  const rt = new THREE.WebGLRenderTarget(1080, 840, { samples: 4 }); rt.texture.colorSpace = THREE.SRGBColorSpace;
  const out0 = renderer.outputColorSpace;
  renderer.setRenderTarget(rt); renderer.clear(); renderer.render(sc, cam);
  const px = new Uint8Array(1080 * 840 * 4); renderer.readRenderTargetPixels(rt, 0, 0, 1080, 840, px); renderer.setRenderTarget(null);
  const cv = document.createElement('canvas'); cv.width = 1080; cv.height = 840; const g = cv.getContext('2d'); const id = g.createImageData(1080, 840);
  for (let y = 0; y < 840; y++) id.data.set(px.subarray((839 - y) * 1080 * 4, (840 - y) * 1080 * 4), y * 1080 * 4);
  g.putImageData(id, 0, 0);
  const b = await new Promise((r) => cv.toBlob(r, 'image/png')); return (await fetch('/_save?p=dbg/hero_cmp.png', { method: 'POST', body: b })).text();
}
window.CMP = { cmp };
