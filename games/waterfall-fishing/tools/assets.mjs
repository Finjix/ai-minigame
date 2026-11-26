// GLB optimisation for the minigame package: build/waterfall-fishing/bake/{chars,props}/*.glb -> games/waterfall-fishing/minigame/assets/models/*.glb
// weld + dedup + prune, optional simplify (meshoptimizer), resample animation keys, quantize (KHR_mesh_quantization, no decoder needed).
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { weld, dedup, prune, resample, quantize, simplify, flatten, join } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const GAME = path.resolve(HERE, '..'), NAME = path.basename(GAME), ROOT = path.resolve(GAME, '../..');
const IN = path.join(ROOT, 'build', NAME, 'bake'), OUT = path.join(GAME, 'minigame/assets/models');
fs.mkdirSync(OUT, { recursive: true });
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
await MeshoptSimplifier.ready;

// drop animation channels that never leave the rest pose, and all facial / finger channels (invisible at playable scale)
const MINOR = /Lid|Brow|Lip|Eye|Iris|Pupil|Jaw|Cheek|Nose|Tongue|Teeth|Finger|Thumb|Index|Middle|Ring|Pinky|Cup|FaceJoint|Mouth|Ear/i;
const FACE = /Lid|Brow|Lip|Eye|Iris|Pupil|Jaw|Cheek|Nose|Tongue|Teeth|FaceJoint|Mouth|Ear/i;   // 主角保留手指动作，只去脸部骨骼
function pruneAnim(doc, { eps = 1e-3, dropMinor = true, dropClips = [], minorRe = MINOR } = {}) {
  let removed = 0, kept = 0;
  for (const a of doc.getRoot().listAnimations()) {
    if (dropClips.includes(a.getName())) { for (const c of a.listChannels()) { c.getSampler().dispose(); c.dispose(); } a.dispose(); continue; }
    for (const c of a.listChannels()) {
      const node = c.getTargetNode(), path = c.getTargetPath(), s = c.getSampler(), out = s.getOutput().getArray();
      const rest = path === 'translation' ? node.getTranslation() : path === 'rotation' ? node.getRotation() : path === 'scale' ? node.getScale() : null;
      let drop = dropMinor && minorRe.test(node.getName());
      if (!drop && rest) {
        // 四元数 q 和 -q 是同一个转动：整组比（原来逐分量取 min，会把不同的转动当成一样删掉，见 docs/lessons.md）
        const k = rest.length, n = out.length / k, tol = path === 'translation' ? eps * 10 : eps; let same = true;
        for (let i = 0; i < n && same; i++) {
          let dp = 0, dm = 0; for (let j = 0; j < k; j++) { dp = Math.max(dp, Math.abs(out[i * k + j] - rest[j])); dm = Math.max(dm, Math.abs(out[i * k + j] + rest[j])); }
          if ((path === 'rotation' ? Math.min(dp, dm) : dp) > tol) same = false;
        }
        drop = same;
      }
      if (drop) { s.dispose(); c.dispose(); removed++; } else kept++;
    }
  }
  return { removed, kept };
}

const JOBS = [
  { src: 'chars/hero.glb', dst: 'hero.glb', anim: { dropClips: ['cheer', 'walk'], minorRe: FACE, eps: 2e-4 }, normBits: 12 },   // 主角：原始网格不减面，保留手指动作
  { src: 'chars/chef.glb', dst: 'chef.glb', anim: { dropClips: ['cutB', 'push', 'walk'] } },
  { src: 'chars/cust.glb', dst: 'cust.glb', ratio: 0.45, anim: { dropClips: ['look', 'hold', 'carryRun'] } },
  { src: 'props/crowd.glb', dst: 'crowd.glb' },
  { src: 'props/fish.glb', dst: 'fish.glb', ratio: 0.25 },
  { src: 'props/pack.glb', dst: 'pack.glb', ratio: 0.12 },
  { src: 'props/cash.glb', dst: 'cash.glb' },
];
const only = process.argv.slice(2);
for (const j of JOBS) {
  if (only.length && !only.includes(j.dst)) continue;
  const p = path.join(IN, j.src);
  if (!fs.existsSync(p)) { console.log('skip (missing)', p); continue; }
  const doc = await io.read(p);
  const strip = (d) => { for (const t of ['listNodes', 'listMeshes', 'listMaterials', 'listAnimations', 'listSkins', 'listScenes']) for (const x of d.getRoot()[t]()) x.setExtras({}); };
  strip(doc);
  const tf = [dedup({ keepUniqueNames: true }), weld()];
  if (j.ratio) tf.push(simplify({ simplifier: MeshoptSimplifier, ratio: j.ratio, error: 0.01, lockBorder: false }));
  tf.push(resample({ tolerance: 5e-4 }));
  await doc.transform(...tf); tf.length = 0;
  const pa = j.anim !== undefined || doc.getRoot().listAnimations().length ? pruneAnim(doc, j.anim || {}) : null;
  if (pa) console.log('  anim channels removed', pa.removed, 'kept', pa.kept);
  tf.push(prune({ keepAttributes: true, keepLeaves: true }), dedup({ keepUniqueNames: true }), quantize({ quantizePosition: 14, quantizeNormal: j.normBits || 8, quantizeTexcoord: 12, quantizeWeight: 8 }));
  await doc.transform(...tf);
  // strip materials' extras, keep names (the game assigns textures by material name)
  const buf = await io.writeBinary(doc);
  fs.writeFileSync(path.join(OUT, j.dst), buf);
  let tris = 0; for (const m of doc.getRoot().listMeshes()) for (const pr of m.listPrimitives()) tris += (pr.getIndices() ? pr.getIndices().getCount() : pr.getAttribute('POSITION').getCount()) / 3;
  console.log(j.dst, fs.statSync(p).size, '->', buf.length, 'tris', tris, 'anims', doc.getRoot().listAnimations().length);
}
