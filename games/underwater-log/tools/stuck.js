// 自动玩能不能从任何位置走出来：等到某个目标时把主角挪到挡路物后面，跑 8 秒看走到没有（后 4 秒挪动接近 0 = 卡住了）。
// 用法（先起 node tools/serve.mjs）：node tools/shot.mjs underwater-log "speed=2" "$(cat games/underwater-log/tools/stuck.js)" --eval
// 新游戏照这个写一份：每个挡路的矩形后面放一个点，目标选要绕过它的那个。
(async () => {
  const wait = (ms) => new Promise((k) => setTimeout(k, ms));
  const G = d.GM.G, S = () => d.GM.state(), out = [];
  const until = async (f, ms = 120000) => { const t0 = performance.now(); while (!f() && performance.now() - t0 < ms) await wait(20); return f(); };
  // 每个场景：等到自动玩、目标是 kind，把主角放到 pos，跑 8 秒游戏时间，看走到了没有
  // 按目标在一局里出现的先后排（取木头只在买送柴带以前有）
  const cases = [
    ['木材堆南边 → 取木头', [-3.5, -2.5], 'padA'],
    ['生肉托板后面 → 托盘', [-3.4, 5.6], 'tray'],
    ['烤炉后面 → 托盘', [0.3, 4.6], 'tray'],
    ['烤炉后面贴墙 → 托盘', [-0.2, 3.9], 'tray'],
    ['箱子后面 → 托盘', [2.0, 4.4], 'tray'],
  ];
  for (const [name, pos, kind] of cases) {
    if (!(await until(() => d.flow.auto && G.target && G.target.kind === kind, 90000))) { out.push(name + '：等不到目标 ' + kind); continue; }
    const h = S().hero, tp = [...G.target.p]; h.p[0] = pos[0]; h.p[1] = pos[1]; h.path = null;
    const t0 = d.st().gameT; let reached = false, last = [...h.p], still = 0;
    while (d.st().gameT < t0 + 10) {
      await wait(50);
      if (Math.hypot(h.p[0] - tp[0], h.p[1] - tp[1]) < 0.6 || !G.target || G.target.kind !== kind) { reached = true; break; }
      still = Math.hypot(h.p[0] - last[0], h.p[1] - last[1]) < 0.01 ? still + 1 : 0; last = [...h.p];
    }
    out.push((reached ? '✓ ' : '✗ ') + name + '：' + JSON.stringify(pos) + ' → ' + JSON.stringify(h.p.map((x) => +x.toFixed(2))) + (reached ? ' 走到了（或者换了目标）' : ' 10 秒没走到' + (still > 40 ? '，卡住不动' : '')));
  }
  return out;
})()
