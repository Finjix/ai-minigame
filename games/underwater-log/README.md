# 水下巨木

无尽冬日写实风格的微信试玩小游戏，由 `水下巨木_写实投影版工程_V20`（GOFCN57903「烤肉订单危机」换皮）的成片 `水下巨木_写实投影版_V20_第1版_整片.mp4` 改编，试玩外壳是仓库共用的 `shared/playable/`。仓库里第二个按 [制作流程](../../docs/video-to-minigame.md) 做的游戏。

## 目录

| 路径 | 是什么 |
|---|---|
| `minigame/` | 微信小游戏工程（开发者工具打开这个目录）。`game.js` 入口 → `js/main.js`（打包产物）+ `assets/` |
| `minigame/index.html` | 浏览器调试页（上传时被 `packOptions.ignore` 排除） |
| `src/` | 游戏源码。试玩外壳（加载、触摸、界面、声音、埋点）在 `../../shared/playable/` |
| `tools/` | 资源烘焙、压缩、底图修补脚本（依赖源工程，只读） |
| `../../build/underwater-log/` | 烘焙中间产物（不进仓库） |

## 玩法（照成片改成可玩）

1. 冰洞里的巨木被研磨机磨：磨鼓咬上去，上半截一圈圈磨细、露出浅色木芯，贴水面那截底座留着树皮；磨到细柱沉下去，下一根从水下冒上来（「水下巨木」）。磨下来的木头一根根飞到旁边的木材堆上。
2. 主角踩取木头的地贴，木材堆上的木头全部横着摞上背（背包不设上限）→ 走到烤炉左边，木头扔进炉膛。
3. 烤炉有柴就烤：生肉从左边托板上一批两块飞上烤网，烤出焦条，落到托盘上 → 主角走上托盘，熟肉全部摞上背。
4. 走到柜台前，肉一块块上桌，飞到前排举着盘子要肉的顾客手里（黄光）→ 顾客「噗」地变成钞票，撒在柜台外的雪地上，后一排的人补上来；主角站在柜台前，钞票飞到背上摞成绿柱。顾客一直举盘子抗议、头上冒订单气泡和生气脸，挤着的那几根木桩会晃；后面一大片人群也一直在举盘子（动作烘成姿势帧）。
5. 踩价格地块付钱（价格照成片）：**25 送柴传送带**（木材堆 → 烤炉）→ **25 送餐传送带**（托盘 → 柜台 1）→ **50 第二个柜台**（灰柜台和锁缩没、木柜台长出来）→ **25 送餐传送带**（托盘 → 柜台 2）→ **50 研磨机升 2 级**（两个磨鼓、磨得更快，人群一片片变成钞票）。买完 2.4 秒结束。

自动玩约 52–54 秒结束：开局等 2.5 秒，解锁约在 20 / 26 / 38–39 / 42–44 / 50–52 秒（`node tools/flowcheck.mjs underwater-log`，无头 3 倍速，几次之间差一两秒；浏览器正常速度 60 fps 是 51.9 秒，开发者工具里跑出过 52–58 秒），赶在 60 秒中间页之前通关，所以不碰屏幕时中间页不弹。数值在 `src/config.js` 的 `T`：一个顾客给 4 捆钞票（`billPer`），改它整条时间线都会动。试玩外壳（引导、自动玩、中间页、强制结束和跳转、埋点）照 [定稿规则](../../AGENTS.md)，用的是 `shared/playable/`。

## 写实画面怎么来的

- **环境**：在源工程的写实投影管线（`web/k57/real57.js`：16 张 AI 写实单帧图按各自相机投回 3D）里，放一台远处近正交、和成片同俯角 45.37°、偏航 24.99° 的相机，分块渲出营地加一圈手机画面那么大的余量：1592×1992 的写实底图（64 像素 / 米）+ 逐像素视深（B 通道标出冰洞的水）。会动的东西按 real57 自己的分类全部藏掉；冰洞里的写实水、漂的碎冰留着。
  哪张单帧图都没拍到的地方只有兜底颜色表的卡通色：`tools/fixenv.py` 按覆盖度图量出镜头能取景的范围（写进 `meta.json` 的 `clamp`），没拍到的小块用附近的写实像素补。
  游戏相机就是烘焙相机，只用 `setViewOffset` 取主角周围的窗口；环境用一个全屏三角形画出来并写 `gl_FragDepth`，人、木头、肉、钞票和柜台、木桩、烤炉的前后遮挡逐像素正确。冰洞水面细节轻轻晃、巨木那儿往外走波纹。
- **烘焙时被藏掉、游戏里用 3D 补回来的**：研磨机（1 级、2 级，骨骼动画 + 源工程的伸缩磨臂）、巨木（源工程 shaver 的形状：底座留树皮、上半截磨细露木芯，顶面年轮）、柜台后排木桩（会晃）、柜台 2（锁着是灰的，解锁换木色——颜色借底图里柜台 1 的像素：同一个模型、同一个朝向，每个看得见的面在底图里都看得见）、锁、传送带、炉膛的火、木材堆、生肉托板上的肉。
- **会动的东西的贴图**：场景里已经套上源工程写实材质（`real_mat57.js`）的网格，按 UV 展开渲一遍，存成写实固有色（`tools/bake/bake_props.js`）；几何、骨骼、动画用源工程 GLB（同一套 UV），`tools/assets.mjs` 去掉嵌入贴图、描边壳、切线，配角减面，量化。主角巴斯特保持原始网格（16830 面）和手指动作。

## 开发（在仓库根目录跑）

```powershell
node tools/build.mjs underwater-log
```

浏览器调试：`node tools/serve.mjs` 后打开 `http://localhost:8770/games/underwater-log/index.html`（`?speed=3` 加速，`?zoom=0.8` 拉近，`?debug=1` 显示状态，`?raf=timer` 窗格在后台时用定时器跑）。控制台里 `__dbg.paused = true` 定格、`__dbg.look = [x, y, z]` 挪镜头、`__dbg.GM.G.log` 是自动玩每次换目标的记录。
微信：`node tools/wxide.mjs open_project_window --project <绝对路径>/games/underwater-log/minigame`，`simulator_screenshot` 截图；要在微信里看 fps 和报错浮层，用 `node tools/build.mjs underwater-log --dbg` 打包（交付前重新正常打包）。

## 重新烘焙资源

需要源工程目录（默认 `D:/AI 3D 写实版 工程/水下巨木_写实投影版工程_V20`，环境变量 `TW_ROOT` 可改）和本机 Edge / Chrome（`CHROME_PATH`）。

1. 起烘焙用的服务：`BAKE_GAME=underwater-log TW_ROOT=<源工程> PORT=8771 node tools/serve.mjs`（烘焙页 `/web/bake_env.html` 放在源工程 web 目录「里面」，相对路径才对）。
2. 无头浏览器跑烘焙步骤（每步约 20 秒，产物写到 `build/underwater-log/bake/`）：
   `PORT=8771 node games/underwater-log/tools/bake/run.mjs games/underwater-log/tools/bake/steps/env.js`（底图 + 深度 + meta），
   `…/steps/cov.js`（覆盖度图），`…/steps/props.js` 和 `…/steps/props_logs.js`（会动的东西的贴图）。`steps/list.js` 列出分类结果。
3. `python -I games/underwater-log/tools/fixenv.py`（取景范围 + 补没拍到的地方）→ `python -I games/underwater-log/tools/tex.py`（贴图、底图）→ `node games/underwater-log/tools/assets.mjs`（模型）。
4. 声音：`sfx.mp3`、`endcard.mp3` 是共用的音效合集和结束音（和瀑布捞鱼同一份）；`bgm.mp3` 是源工程 V20 配乐 A 的前 26 秒，最后 1 秒淡出：`ffmpeg -i A_轻快俏皮_配V20画面.wav -t 26 -af "afade=t=out:st=25:d=1" -ac 1 -ar 44100 -b:a 56k bgm.mp3`。`audio.json` 要存成 UTF-8（之前是 GBK，iOS 试玩环境读不出来，整个没声音）。
