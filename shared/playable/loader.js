// 所有游戏共用（shared/playable）。
// 资源加载：图片走平台的 Image（微信里是 wx.createImage），GLB 读成 ArrayBuffer 交给 GLTFLoader.parse（GLB 里不带贴图，不需要 Blob）
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadImage, readBinary, readJSON } from './platform.js';

let done = 0, total = 0, onProg = null;
export const setProgress = (f) => { onProg = f; };
const tick = () => { done++; if (onProg) onProg(done / Math.max(1, total)); };

export async function tex(path, { srgb = true, flipY = true, repeat = false } = {}) {
  total++;
  const img = await loadImage(path);
  const t = new THREE.Texture(img);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.flipY = flipY;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true; tick();
  return t;
}
const gltf = new GLTFLoader();
export async function glb(path) {
  total++;
  const buf = await readBinary(path);
  const r = await new Promise((res, rej) => gltf.parse(buf, '', res, rej));
  tick(); return r;
}
export async function json(path) { total++; const j = await readJSON(path); tick(); return j; }
