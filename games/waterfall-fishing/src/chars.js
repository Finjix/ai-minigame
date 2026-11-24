// 人物：原工程的巴斯特（主角、渔工换米棕衣服）、厨师、顾客。GLB 里是骨骼动画，材质按名字换成 Lambert + 烘好的写实颜色贴图
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { realLook, addCaster } from './world.js';

const CM = 0.008585105326680513;   // 原工程 UE 厘米 → 米（主角绑定姿势高 1.85m）
export function proto(g, minY) { return { scene: g.scene, clips: Object.fromEntries(g.animations.map((c) => [c.name, c])), minY }; }

const matCache = new Map();
function lambert(map, key) {
  if (!matCache.has(key)) matCache.set(key, realLook(new THREE.MeshLambertMaterial({ map })));
  return matCache.get(key);
}
// texMap: 材质名 → 贴图
export function makeChar(P, texMap, { scale = 1, cast = true, tint = null } = {}) {
  const inner = SkeletonUtils.clone(P.scene);
  inner.traverse((o) => {
    if (!o.isMesh) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    const nm = ms.map((m) => { const t = texMap[m.name] || texMap['*']; return lambert(t, (m.name) + ':' + (t && t.uuid) + (tint || '')); });
    o.material = Array.isArray(o.material) ? nm : nm[0];
    o.frustumCulled = false; o.castShadow = cast; o.receiveShadow = false;
  });
  // obj（脚底在原点、朝 +z）→ tilt（转轴在腰，离脚底 PIV；游泳时往前趴）→ holder（UE 厘米 → 米）
  const PIV = 0.7 * scale, obj = new THREE.Group(), tilt = new THREE.Group(), holder = new THREE.Group();
  obj.add(tilt); tilt.add(holder); holder.add(inner);
  tilt.position.y = PIV;
  holder.scale.setScalar(CM * scale);
  holder.position.y = -P.minY * CM * scale - PIV;
  const bones = {}; inner.traverse((o) => { if (o.isBone) bones[o.name] = o; });
  const mixer = new THREE.AnimationMixer(inner), actions = {};
  for (const [k, c] of Object.entries(P.clips)) actions[k] = mixer.clipAction(c);
  let cur = null;
  const c = {
    obj, tilt, holder, inner, mixer, actions, bones, heading: 0,
    // 两只手腕的中点（世界坐标），东西捧在手上用；没有手腕骨骼返回 null
    hands(out) {
      const L = bones.Wrist_L, R = bones.Wrist_R; if (!L || !R) return null;
      obj.updateMatrixWorld(true); L.getWorldPosition(_a); R.getWorldPosition(_b);
      out[0] = (_a.x + _b.x) / 2; out[1] = (_a.y + _b.y) / 2; out[2] = (_a.z + _b.z) / 2; return out;
    },
    play(name, fade = 0.18, speed = 1) {
      const a = actions[name]; if (!a) return;
      a.timeScale = speed;
      if (cur === a) return;
      a.reset(); a.enabled = true; a.setEffectiveWeight(1); a.play();
      if (cur) cur.crossFadeTo(a, fade, false);
      cur = a; c.anim = name;
    },
    update(dt) { mixer.update(dt); },
    face(h, k = 1) { const d = Math.atan2(Math.sin(h - c.heading), Math.cos(h - c.heading)); c.heading += d * k; obj.rotation.y = c.heading; },
  };
  if (cast) addCaster(obj);
  return c;
}
const _a = new THREE.Vector3(), _b = new THREE.Vector3();
export { CM };
