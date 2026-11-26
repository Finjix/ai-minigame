// 人物：源工程的巴斯特（蓝色版，主角，原始网格 16830 面、保留手指动作）、Q 版顾客（减到 2264 面）、研磨机（骨骼动画）。
// GLB 里是骨骼动画，材质按名字换成 Lambert + 烘好的写实固有色贴图。尺寸照源工程 assets/manifest.json 的 targetHeight 归一（绑定姿势包围盒）。
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { realLook } from './world.js';

// { height } / { scale }：和源工程 assets.js normalize 一样（底面中心挪到原点）
export function proto(g, { height, scale, trims = {} } = {}) {
  const root = g.scene; root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root), size = box.getSize(new THREE.Vector3());
  const s = scale || (height ? height / size.y : 1), c = box.getCenter(new THREE.Vector3());
  const clips = {};
  for (const cl of g.animations) { const t = trims[cl.name]; clips[cl.name] = t ? cl.clone().trim(t[0], t[1]) : cl; }
  return { scene: root, clips, s, off: [-c.x * s, -box.min.y * s, -c.z * s], size: size.clone().multiplyScalar(s) };
}

const matCache = new Map();
export function lambert(map, key, o = {}) {
  if (!matCache.has(key)) matCache.set(key, realLook(new THREE.MeshLambertMaterial({ map, ...(o.mat || {}) }), o.look || {}));
  return matCache.get(key);
}
// texMap：材质名（包含）→ 贴图
export function makeChar(P, texMap, { cast = true, look = {}, scale = 1, colors = {} } = {}) {
  const inner = SkeletonUtils.clone(P.scene);
  inner.traverse((o) => {
    if (!o.isMesh) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    const nm = ms.map((m) => { const k = Object.keys(texMap).find((x) => m.name.includes(x)); const t = texMap[k || '*'], ck = Object.keys(colors).find((x) => m.name.includes(x)); return lambert(t, m.name + ':' + (t && t.uuid) + JSON.stringify(look) + ck, { look, mat: ck ? { color: colors[ck] } : {} }); });
    o.material = Array.isArray(o.material) ? nm : nm[0];
    o.frustumCulled = false; o.castShadow = cast; o.receiveShadow = false;
  });
  const obj = new THREE.Group(), holder = new THREE.Group();
  obj.add(holder); holder.add(inner);
  holder.scale.setScalar(P.s * scale); holder.position.set(P.off[0] * scale, P.off[1] * scale, P.off[2] * scale);
  const bones = {}; inner.traverse((o) => { if (o.isBone) bones[o.name] = o; });
  const mixer = new THREE.AnimationMixer(inner), actions = {};
  for (const [k, c] of Object.entries(P.clips)) actions[k] = mixer.clipAction(c);
  let cur = null;
  const c = {
    obj, holder, inner, mixer, actions, bones, heading: 0, anim: '',
    play(name, fade = 0.18, speed = 1, once = false) {
      const a = actions[name]; if (!a) return;
      a.timeScale = speed;
      if (cur === a) return;
      a.reset(); a.enabled = true; a.setEffectiveWeight(1); a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat, Infinity); a.clampWhenFinished = once; a.play();
      if (cur) cur.crossFadeTo(a, fade, false);
      cur = a; c.anim = name;
    },
    phase(t) { if (cur) cur.time = t % cur.getClip().duration; },
    update(dt) { mixer.update(dt); },
    face(h, k = 1) { const d = Math.atan2(Math.sin(h - c.heading), Math.cos(h - c.heading)); c.heading += d * k; obj.rotation.y = c.heading; },
  };
  return c;
}
