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
      // 四元数 q 和 -q 是同一个转动：整组比（瀑布捞鱼那份是逐分量取 min，会把不同的转动当成一样、删掉真在动的轨道，手脚炸成尖刺）
      const k = rest.length, n = out.length / k, tol = p === 'translation' ? eps * 10 : eps; let same = true;
      for (let i = 0; i < n && same; i++) {
        let dp = 0, dm = 0; for (let j = 0; j < k; j++) { dp = Math.max(dp, Math.abs(out[i * k + j] - rest[j])); dm = Math.max(dm, Math.abs(out[i * k + j] + rest[j])); }
        if ((p === 'rotation' ? Math.min(dp, dm) : dp) > tol) same = false;
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
// 源工程 assets.js fixSkinWeights 原样移植（它在加载时修，我们在打包时修）：
// UE 导出的 GLB 每个顶点带两组骨骼影响（JOINTS_0/1、WEIGHTS_0/1，共 8 个），three.js 只用第一组 4 个，剩下的权重丢了，
// 手指、手腕一带的顶点权重和不到 1（巴斯特有的顶点前 4 个权重全是 0），蒙皮后炸成黑刺、毛领拉长。按权重取前 4 个、归一化。
// 第二个坑：有些顶点的骨骼索引丢了，全写成同一根「兜底骨」（巴斯特是 Chest_M），手臂一动被胸骨拽成尖刺：
// 兜底骨 = 在同一个顶点里重复出现次数最多的骨；离它超过 0.35 米的这类影响改给这个顶点其余影响里离它最近的骨。
function fixSkin(doc) {
  let fixed = 0, total = 0;
  for (const node of doc.getRoot().listNodes()) {
    const skin = node.getSkin(), mesh = node.getMesh(); if (!skin || !mesh) continue;
    const joints = skin.listJoints(), bp = joints.map((j) => j.getWorldTranslation()), M = node.getWorldMatrix();
    for (const p of mesh.listPrimitives()) {
      const J0 = p.getAttribute('JOINTS_0'), W0 = p.getAttribute('WEIGHTS_0'), J1 = p.getAttribute('JOINTS_1'), W1 = p.getAttribute('WEIGHTS_1'), P = p.getAttribute('POSITION');
      if (!J0 || !W0) continue;
      const n = W0.getCount(), a = [0, 0, 0, 0], b = [0, 0, 0, 0], c = [0, 0, 0, 0], d = [0, 0, 0, 0], pos = [0, 0, 0];
      const read = (i) => { J0.getElement(i, a); W0.getElement(i, b); const pr = a.map((j, k) => [j, b[k]]); if (J1 && W1) { J1.getElement(i, c); W1.getElement(i, d); c.forEach((j, k) => pr.push([j, d[k]])); } return pr; };
      const dup = new Map();
      for (let i = 0; i < n; i++) { const seen = new Map(); for (const [j, w] of read(i)) if (w > 0.001) seen.set(j, (seen.get(j) || 0) + 1); for (const [j, k] of seen) if (k > 1) dup.set(j, (dup.get(j) || 0) + 1); }
      const fb = [...dup.entries()].sort((x, y) => y[1] - x[1])[0]?.[0];
      const jOut = new Uint16Array(n * 4), wOut = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) {
        const pr = read(i); P.getElement(i, pos);
        const v = [M[0] * pos[0] + M[4] * pos[1] + M[8] * pos[2] + M[12], M[1] * pos[0] + M[5] * pos[1] + M[9] * pos[2] + M[13], M[2] * pos[0] + M[6] * pos[1] + M[10] * pos[2] + M[14]];
        const dist = (j) => Math.hypot(v[0] - bp[j][0], v[1] - bp[j][1], v[2] - bp[j][2]);
        if (fb !== undefined && pr.some(([j, w]) => j === fb && w > 0.001) && dist(fb) > 0.35) {
          const others = pr.filter(([j, w]) => j !== fb && w > 0.001).map(([j]) => j);
          const cand = others.length ? others : joints.map((_, j) => j).filter((j) => j !== fb);
          let best = cand[0], bd = 1e9; for (const j of cand) { const dd = dist(j); if (dd < bd) { bd = dd; best = j; } }
          for (const q of pr) if (q[0] === fb) q[0] = best;
          fixed++;
        }
        for (let x = 0; x < pr.length; x++) for (let y = x + 1; y < pr.length; y++) if (pr[y][1] > 0 && pr[x][0] === pr[y][0]) { pr[x][1] += pr[y][1]; pr[y][1] = 0; }
        pr.sort((x, y) => y[1] - x[1]);
        const s = pr[0][1] + pr[1][1] + pr[2][1] + pr[3][1] || 1;
        for (let k = 0; k < 4; k++) { jOut[i * 4 + k] = pr[k][0]; wOut[i * 4 + k] = pr[k][1] / s; }
      }
      const buf = doc.getRoot().listBuffers()[0];
      p.setAttribute('JOINTS_0', doc.createAccessor().setType('VEC4').setArray(jOut).setBuffer(buf));
      p.setAttribute('WEIGHTS_0', doc.createAccessor().setType('VEC4').setArray(wOut).setBuffer(buf));
      p.setAttribute('JOINTS_1', null); p.setAttribute('WEIGHTS_1', null);
      total += n;
    }
  }
  return { fixed, total };
}
// 片段只留一段（源工程 manifest 的 loops：跑步片段「跑七循环 3 次」只用 0–0.8 秒那一圈）：在打包时裁，末尾补一个插值出来的关键帧。
// 不能在游戏里用 AnimationClip.trim：重采样以后关键帧很稀，trim 把 0.8 秒以后的帧扔掉，0.8 秒以内本来朝下一帧插值的骨骼就定住了，手指、手腕转错，蒙皮炸成尖刺
function trimClip(doc, name, t0, t1) {
  const buf = doc.getRoot().listBuffers()[0];
  for (const a of doc.getRoot().listAnimations()) {
    if (a.getName() !== name) continue;
    for (const s of a.listSamplers()) {
      const inp = s.getInput().getArray(), out = s.getOutput().getArray(), k = out.length / inp.length, quat = k === 4;
      const at = (t) => {
        let i = 0; while (i < inp.length - 1 && inp[i + 1] < t) i++;
        if (i >= inp.length - 1) return Array.from(out.slice((inp.length - 1) * k, inp.length * k));
        const u = Math.max(0, Math.min(1, (t - inp[i]) / Math.max(1e-6, inp[i + 1] - inp[i])));
        const A = out.slice(i * k, i * k + k), B = out.slice((i + 1) * k, (i + 1) * k + k);
        let sg = 1; if (quat) { let d = 0; for (let c = 0; c < 4; c++) d += A[c] * B[c]; if (d < 0) sg = -1; }
        const r = Array.from(A, (x, c) => x + (B[c] * sg - x) * u);
        if (quat) { const l = Math.hypot(...r) || 1; for (let c = 0; c < 4; c++) r[c] /= l; }
        return r;
      };
      const ts = [t0, ...Array.from(inp).filter((t) => t > t0 + 1e-5 && t < t1 - 1e-5), t1];
      const ni = new Float32Array(ts.map((t) => t - t0)), no = new Float32Array(ts.length * k);
      ts.forEach((t, i) => no.set(at(t), i * k));
      s.setInput(doc.createAccessor().setType('SCALAR').setArray(ni).setBuffer(buf));
      s.setOutput(doc.createAccessor().setType(s.getOutput().getType()).setArray(no).setBuffer(buf));
    }
  }
}
const heroFilter = (n, p) => p === 'rotation' || (p === 'translation' && n === 'Root_M');   // 源工程 rotOnly：动作是带着另一个模型导出的，只留旋转和根骨位移

const JOBS = [
  { src: 'lib/hero_lan.glb', dst: 'hero.glb', clips: [['lib/hero_idle.glb', 'idle'], ['lib/hero_run.glb', 'run']], filter: heroFilter, animRe: FACE, trims: { run: [0, 0.8] }, noQ: true },   // 主角不量化：quantize 会把 8 个骨骼影响一起归一化（pattern 排除了权重也一样），游戏里按源工程的办法修蒙皮就和成片对不上，帽兜、背带炸成尖刺   // 主角：原始网格，保留手指
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
  if (R.listSkins().length && process.env.SKINFIX_OFFLINE === '1') { const fs_ = fixSkin(doc); console.log('  skin: 8 → 4 influences, verts', fs_.total, 'fallback-bone fixes', fs_.fixed); }
  for (const [f, n] of j.clips || []) await mergeClip(doc, f, n, j.filter);
  for (const [n, [a, b]] of Object.entries(j.trims || {})) trimClip(doc, n, a, b);
  const tf = [dedup({ keepUniqueNames: true }), weld()];
  if (j.ratio) tf.push(simplify({ simplifier: MeshoptSimplifier, ratio: j.ratio, error: 0.02, lockBorder: false }));
  const RAW = process.env.RAW === '1';   // 排查用：不重采样、不删轨道、不量化
  if (R.listAnimations().length && !RAW && process.env.NORS !== '1') tf.push(resample({ tolerance: 5e-4 }));
  await doc.transform(...tf);
  if (R.listAnimations().length && !RAW && process.env.NOPRUNE !== '1') { const pa = pruneAnim(doc, { re: j.animRe }); console.log('  anim channels removed', pa.removed, 'kept', pa.kept); }
  if (RAW) await doc.transform(prune({ keepAttributes: true, keepLeaves: true }));
  else if (process.env.NOQ === '1' || j.noQ) await doc.transform(prune({ keepAttributes: true, keepLeaves: true }), dedup({ keepUniqueNames: true }));
  else await doc.transform(prune({ keepAttributes: true, keepLeaves: true }), dedup({ keepUniqueNames: true }), quantize({ quantizePosition: 14, quantizeNormal: j.normBits || 8, quantizeTexcoord: 12, quantizeWeight: 8, ...(R.listSkins().length ? { pattern: /^(NORMAL|TEXCOORD_0)$/ } : {}) }));   // 带骨骼的：顶点位置、骨骼权重不量化（位置量化以后游戏里按源工程的办法修蒙皮，判出来的顶点和源工程不一样，帽兜、背带炸成尖刺）
  if (process.env.DUMP_PRE) fs.writeFileSync(path.join(OUT, '../../../../../build/underwater-log/pre_' + j.dst), await io.writeBinary(doc));
  const buf = await io.writeBinary(doc);
  fs.writeFileSync(path.join(OUT, j.dst), buf);
  let tris = 0; for (const m of R.listMeshes()) for (const pr of m.listPrimitives()) tris += (pr.getIndices() ? pr.getIndices().getCount() : pr.getAttribute('POSITION').getCount()) / 3;
  console.log(j.dst, fs.statSync(p).size, '->', buf.length, 'tris', tris, 'mats', R.listMaterials().map((m) => m.getName()).join(','), 'anims', R.listAnimations().map((a) => a.getName() + ':' + a.listChannels().length).join(','));
}
