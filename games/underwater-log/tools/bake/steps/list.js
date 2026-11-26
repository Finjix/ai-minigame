// run.mjs 跑的烘焙步骤：列出 real57 分类出来的静止环境（ENV）和会动的（HIDE_B），决定哪些要藏、哪些要在游戏里用 3D 补
const r = BK.lists();
const pick = (a) => a.map((d) => [d.path.replace(/^.*?Scene\//, ''), d.mat, d.col, d.inst, d.skin ? 'S' : '', d.bb && d.bb.map((v) => v.map((q) => +q.toFixed(1)))]);
return { env: pick(r.env), hideB: pick(r.hideB) };
