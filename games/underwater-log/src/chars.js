// 人物：源工程的巴斯特（蓝色版，主角，原始网格 16830 面、保留手指动作）、Q 版顾客（减到 2264 面）、研磨机（骨骼动画）。
// GLB 里是骨骼动画，材质按名字换成 Lambert + 烘好的写实固有色贴图。尺寸照源工程 assets/manifest.json 的 targetHeight 归一（绑定姿势包围盒）。
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { realLook } from './world.js';

// UE 导出的 GLB 每个顶点带两组骨骼影响（共 8 个），three.js 只用前 4 个；还有一批顶点的骨骼索引丢了、全写成同一根「兜底骨」（巴斯特是 Chest_M）。
// 下面是源工程 web/assets.js 的 fixSkinWeights 原样搬过来，加载时修（取前 4 个归一化 + 兜底骨离顶点超过 0.35 米的改给最近的骨）。
// 打包时（tools/assets.mjs）不修：离线修和源工程修出来差 100 个顶点（帽兜、背带），一跑起来被胸骨拽成尖刺；在 three 里修和成片一模一样
export function fixSkinWeights(root) {
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    if (!o.isSkinnedMesh) return;
    const G = o.geometry, J0 = G.attributes.skinIndex, W0 = G.attributes.skinWeight;
    const J1 = G.attributes.joints_1, W1 = G.attributes.weights_1;
    if (!J0 || !W0) return;
    const bones = o.skeleton.bones, bp = bones.map((b) => b.getWorldPosition(new THREE.Vector3()));
    const P = G.attributes.position, v = new THREE.Vector3();
    const n = W0.count, pair = [];
    const read = (i) => {
      pair.length = 0;
      for (let k = 0; k < 4; k++) pair.push([J0.getComponent(i, k), W0.getComponent(i, k)]);
      if (J1 && W1) for (let k = 0; k < 4; k++) pair.push([J1.getComponent(i, k), W1.getComponent(i, k)]);
    };
    const dup = new Map();
    for (let i = 0; i < n; i++) {
      read(i); const seen = new Map();
      for (const [j, w] of pair) if (w > 0.001) seen.set(j, (seen.get(j) || 0) + 1);
      for (const [j, c] of seen) if (c > 1) dup.set(j, (dup.get(j) || 0) + 1);
    }
    const fb = [...dup.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    let fixed = 0;
    for (let i = 0; i < n; i++) {
      read(i);
      v.fromBufferAttribute(P, i).applyMatrix4(o.matrixWorld);
      if (fb !== undefined && pair.some(([j, w]) => j === fb && w > 0.001) && v.distanceTo(bp[fb]) > 0.35) {
        const others = pair.filter(([j, w]) => j !== fb && w > 0.001).map(([j]) => j);
        const cand = others.length ? others : bones.map((_, j) => j).filter((j) => j !== fb && bones[j].isBone);
        let best = cand[0], bd = 1e9;
        for (const j of cand) { const d = v.distanceTo(bp[j]); if (d < bd) { bd = d; best = j; } }
        for (const p of pair) if (p[0] === fb) p[0] = best;
        fixed++;
      }
      // 同一根骨重复出现的合并
      for (let a = 0; a < pair.length; a++) for (let b = a + 1; b < pair.length; b++) if (pair[b][1] > 0 && pair[a][0] === pair[b][0]) { pair[a][1] += pair[b][1]; pair[b][1] = 0; }
      pair.sort((a, b) => b[1] - a[1]);
      const s = pair[0][1] + pair[1][1] + pair[2][1] + pair[3][1] || 1;
      for (let k = 0; k < 4; k++) { J0.setComponent(i, k, pair[k][0]); W0.setComponent(i, k, pair[k][1] / s); }
    }
    J0.needsUpdate = W0.needsUpdate = true;
    o.userData.skinFixed = { fallback: fb !== undefined ? bones[fb].name : null, fixed };
  });
}

// { height } / { scale }：和源工程 assets.js normalize 一样（底面中心挪到原点）
export function proto(g, { height, scale, trims = {} } = {}) {
  const root = g.scene; fixSkinWeights(root);
  root.traverse((o) => { if (o.isSkinnedMesh) { o.geometry.deleteAttribute('joints_1'); o.geometry.deleteAttribute('weights_1'); } });
  root.updateMatrixWorld(true);
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
