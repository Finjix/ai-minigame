// 模型压缩：源工程 assets/models/*.glb（只读）→ games/underwater-log/minigame/assets/models/*.glb
// 去掉嵌入贴图（贴图是 UV 空间烘的写实固有色，单独 jpg，见 tex.py）、描边壳和透明占位材质；动作片段从各自的 GLB 按骨骼名并进来；
// 配角和道具按需减面；去掉不动的动画轨道；量化（KHR_mesh_quantization，不用解码器）。
// 用法（仓库根目录）：node games/underwater-log/tools/assets.mjs [输出文件名…]
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { weld, dedup, prune, resample, quantize, simplify } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const GAME = path.resolve(HERE, '..');
const SRC = (process.env.TW_ROOT || 'D:/AI 3D 写实版 工程/水下巨木_写实投影版工程_V20') + '/assets/models';
const OUT = path.join(GAME, 'minigame/assets/models');
fs.mkdirSync(OUT, { recursive: true });
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
await MeshoptSimplifier.ready;

const FACE = /Lid|Brow|Lip|Eye|Iris|Pupil|Jaw|Cheek|Nose|Tongue|Teeth|FaceJoint|Mouth|Ear/i;
// 去掉从不离开静止姿态的轨道（和脸部骨骼的）
function pruneAnim(doc, { eps = 2e-4, re = null } = {}) {
  let removed = 0, kept = 0;
  for (const a of doc.getRoot().listAnimations()) for (const c of a.listChannels()) {
    const node = c.getTargetNode(), p = c.getTargetPath(), s = c.getSampler(), out = s.getOutput().getArray();
    const rest = p === 'translation' ? node.getTranslation() : p === 'rotation' ? node.getRotation() : p === 'scale' ? node.getScale() : null;
    let drop = !!(re && re.test(node.getName()));
    if (!drop && rest) {
      const k = rest.length, n = out.length / k; let same = true;
      for (let i = 0; i < n && same; i++) for (let j = 0; j < k; j++) {
        let d = Math.abs(out[i * k + j] - rest[j]); if (p === 'rotation') d = Math.min(d, Math.abs(out[i * k + j] + rest[j]));
        if (d > (p === 'translation' ? eps * 10 : eps)) { same = false; break; }
      }
      drop = same;
    }
    if (drop) { s.dispose(); c.dispose(); removed++; } else kept++;
  }
  return { removed, kept };
}
// 把 clipFile 里的动画按骨骼名并到 doc，改名 name；filter(nodeName, path) 决定留哪些轨道
async function mergeClip(doc, clipFile, name, filter = () => true) {
  const cd = await io.read(path.join(SRC, clipFile));
  const byName = new Map(doc.getRoot().listNodes().map((n) => [n.getName(), n]));
  const buf = doc.getRoot().listBuffers()[0];
  for (const a of cd.getRoot().listAnimations()) {
    const na = doc.createAnimation(name);
    for (const c of a.listChannels()) {
      const tn = c.getTargetNode(), p = c.getTargetPath(); if (!tn) continue;
      const dst = byName.get(tn.getName()); if (!dst || !filter(tn.getName(), p)) continue;
      const s = c.getSampler();
      const inp = doc.createAccessor().setArray(s.getInput().getArray().slice()).setType('SCALAR').setBuffer(buf);
      const out = doc.createAccessor().setArray(s.getOutput().getArray().slice()).setType(s.getOutput().getType()).setBuffer(buf);
      const ns = doc.createAnimationSampler().setInput(inp).setOutput(out).setInterpolation(s.getInterpolation());
      na.addSampler(ns).addChannel(doc.createAnimationChannel().setTargetNode(dst).setTargetPath(p).setSampler(ns));
    }
    break;
  }
}
const heroFilter = (n, p) => p === 'rotation' || (p === 'translation' && n === 'Root_M');   // 源工程 rotOnly：动作是带着另一个模型导出的，只留旋转和根骨位移

const JOBS = [
  { src: 'lib/hero_lan.glb', dst: 'hero.glb', clips: [['lib/hero_idle.glb', 'idle'], ['lib/hero_run.glb', 'run']], filter: heroFilter, animRe: FACE, normBits: 12 },   // 主角：原始网格，保留手指
  { src: 'c2/q_customer_v07.glb', dst: 'cust.glb', ratio: 0.3, clips: [['c2/q_idle.glb', 'idle'], ['c2/q_protest.glb', 'protest'], ['c2/q_walk.glb', 'walk'], ['c2/q_give.glb', 'give']] },
  { src: 'c2/q_customer_v07.glb', dst: 'crowd.glb', ratio: 0.12, clips: [['c2/q_protest.glb', 'protest'], ['c2/q_idle.glb', 'idle']] },   // 人群：启动时烘成姿势帧，再减一档面
  { src: 'c3/grinder_lv1_run.glb', dst: 'grinder1.glb', ratio: 0.22, rename: 'run' },
  { src: 'c3/grinder_lv2_loop.glb', dst: 'grinder2.glb', ratio: 0.13, rename: 'run' },
  { src: 'c2/meat_raw.glb', dst: 'meat_raw.glb', ratio: 0.5 },
  { src: 'c2/meat_cooked_v06.glb', dst: 'meat_cooked.glb', ratio: 0.5 },
  { src: 'c2/cash_v06.glb', dst: 'cash.glb' },
  { src: 'c2/log.glb', dst: 'log.glb' },
  { src: 'c2/counter.glb', dst: 'counter.glb' },
  { src: 'c2/stump2.glb', dst: 'stump2.glb' },
  { src: 'c2/stump3.glb', dst: 'stump3.glb' },
];
const only = process.argv.slice(2);
for (const j of JOBS) {
  if (only.length && !only.includes(j.dst)) continue;
  const p = path.join(SRC, j.src);
  const doc = await io.read(p);
  const R = doc.getRoot();
  for (const t of ['listNodes', 'listMeshes', 'listMaterials', 'listAnimations', 'listSkins', 'listScenes']) for (const x of R[t]()) x.setExtras({});
  // 描边壳、透明占位（toum）整组去掉
  for (const m of R.listMeshes()) for (const pr of m.listPrimitives()) { const mn = pr.getMaterial() ? pr.getMaterial().getName() : ''; if (/描边|toum/.test(mn)) { m.removePrimitive(pr); pr.dispose(); } }
  for (const m of R.listMaterials()) { m.setBaseColorTexture(null); m.setNormalTexture(null); m.setMetallicRoughnessTexture(null); m.setEmissiveTexture(null); m.setOcclusionTexture(null); }
  for (const t of R.listTextures()) t.dispose();
  // 没有法线贴图：切线、第二套 UV 用不上
  for (const m of R.listMeshes()) for (const pr of m.listPrimitives()) for (const sem of ['TANGENT', 'TEXCOORD_1']) { const a = pr.getAttribute(sem); if (a) { pr.setAttribute(sem, null); } }
  if (j.rename) for (const a of R.listAnimations()) a.setName(j.rename);
  for (const [f, n] of j.clips || []) await mergeClip(doc, f, n, j.filter);
  const tf = [dedup({ keepUniqueNames: true }), weld()];
  if (j.ratio) tf.push(simplify({ simplifier: MeshoptSimplifier, ratio: j.ratio, error: 0.02, lockBorder: false }));
  if (R.listAnimations().length) tf.push(resample({ tolerance: 5e-4 }));
  await doc.transform(...tf);
  if (R.listAnimations().length) { const pa = pruneAnim(doc, { re: j.animRe }); console.log('  anim channels removed', pa.removed, 'kept', pa.kept); }
  await doc.transform(prune({ keepAttributes: true, keepLeaves: true }), dedup({ keepUniqueNames: true }), quantize({ quantizePosition: 14, quantizeNormal: j.normBits || 8, quantizeTexcoord: 12, quantizeWeight: 8 }));
  const buf = await io.writeBinary(doc);
  fs.writeFileSync(path.join(OUT, j.dst), buf);
  let tris = 0; for (const m of R.listMeshes()) for (const pr of m.listPrimitives()) tris += (pr.getIndices() ? pr.getIndices().getCount() : pr.getAttribute('POSITION').getCount()) / 3;
  console.log(j.dst, fs.statSync(p).size, '->', buf.length, 'tris', tris, 'mats', R.listMaterials().map((m) => m.getName()).join(','), 'anims', R.listAnimations().map((a) => a.getName() + ':' + a.listChannels().length).join(','));
}
