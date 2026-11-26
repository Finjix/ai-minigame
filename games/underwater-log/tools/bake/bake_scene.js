// 源工程 web/scene57.js 的复制（只读引用源工程模块），多挂一个 window.placeAt，烘焙脚本要按帧摆场景
import { THREE, TL, renderer, scene, uiScene, camera, setCamera, placeSun, fps } from './core.js';
import { composer } from './post.js';
import './k57/world.js';
import { updateDyn } from './k57/dyn_jumu.js';
import { updateHero } from './k57/hero.js';
import { setNow } from './hooks.js';

window.TL = TL;
camera.near = 5; camera.far = 400; camera.updateProjectionMatrix();
let REALM = null, REALMAT = null;
function placeAt(n) {
  const t = n / fps;
  setNow(t);
  const c = setCamera(t);
  placeSun(c);
  updateHero(t);
  updateDyn(t);
  if (REALMAT) REALMAT.updateRealMats(t);
}
window.placeAt = placeAt;
REALM = await import('./k57/real57.js');
await REALM.init({ placeAt });
REALMAT = await import('./k57/real_mat57.js'); REALMAT.applyRealMats();
window.REALM = REALM; window.REALMAT = REALMAT;
window.renderFrame = (n) => { placeAt(n); REALM.render(n); };
window.renderFrame(0);
window.READY = true;
