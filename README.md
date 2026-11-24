# AI 微信小游戏

使用 AI 制作微信小游戏的项目。当前作品：**无尽冬日 · 捕鱼卖肉 写实试玩**（由 `20261027_Township换皮_V17写实` 成片改编）。

## 目录

| 路径 | 是什么 |
|---|---|
| `minigame/` | 微信小游戏工程（用微信开发者工具打开这个目录）。`game.js` 入口 → `js/main.js`（打包产物）+ `assets/` |
| `minigame/index.html` | 浏览器调试页（同一个打包文件；上传时被 `packOptions.ignore` 排除） |
| `src/` | 游戏源码（ES 模块，Three.js r186） |
| `tools/` | 打包、资源烘焙和压缩脚本 |
| `build/` | 烘焙中间产物（不进仓库） |

## 玩法（照成片改成可玩）

1. 主角走出院门、上栈桥跳进鱼塘，身前的红色扇形网扫到的鱼一条条跳到背上（满 10 条）。
2. 背鱼到加工台，鱼飞上台，厨师切好装盒，码在出货位；主角站在圈里接货。
3. 走到柜台后的虚线框，盒子越过柜台飞到排队顾客头上，人群里下一阵「肉雨」，满意打钩、换下一个人；柜台后冒出钞票。
4. 站在框里收钱，钞票摞成绿柱，右上角现金跟着涨。
5. 踩价格地块付钱：**200 雇渔工**（自动往鱼框捕鱼，主角改从鱼框背 16 条）→ **200 传送带**（鱼框直送加工台）→ **400 售货员**（自动送货）。买完 2.4 秒结束。

试玩流程沿用 `拉网捕鱼-试玩.html`：开场自动玩 +「轻划移动」引导；任意处按下即摇杆接管；停手 2 秒自动玩恢复并出「我来操作！」；最后一次解锁后 2.4 秒或满 90 秒强制结束（压暗 + logo；浏览器里有「立即体验」，微信里隐藏并调 `wx.notifyMiniProgramPlayableStatus({ isEnd: true })`）；`wx.reportGameEvent` 埋点编号与参考试玩一致。

## 写实画面怎么来的

- **环境**：在原工程的 V17 写实合成管线（`web/real.js`，12 张 AI 写实图按相机投回 3D）里，用一台远处近正交、和成片同俯角/偏航的相机分块渲出整个场景，得到一张 1656×2592 的写实底图 + 逐像素视深 + 水面流向（`tools/bake/`）。
  游戏相机就是这台烘焙相机，只用 `setViewOffset` 取主角周围的窗口；环境用一个全屏三角形画出来并写 `gl_FragDepth`，人、鱼、货与栅栏、柜台的前后遮挡逐像素正确。
- **水**：河和瀑布的细节沿烘出的流向流动（低频不动、细节两相交替，同成片做法）；塘面轻微晃动；鱼在水面下染水色。
- **会动的东西**：原工程的巴斯特、厨师、顾客、鱼、寿司盒、钞票模型（FBX → GLB，材质链在 UV 空间烘成颜色贴图，骨骼动画精简、顶点量化），统一过成片的写实做旧调色（降饱和 0.62、压亮 0.85、偏暖灰）、同一层颗粒和暗角；太阳方向的阴影图投到写实地面上；世界空间飘雪。

## 开发

```powershell
npm install
```

```powershell
npm run build
```

浏览器调试：`node tools/serve.mjs` 后打开 `http://localhost:8770/game/index.html`（`?speed=3` 加速）。
微信：开发者工具导入 `minigame/`（测试号 AppID 已写在 `project.config.json`）。

重新烘焙资源（需要原工程目录，默认 `D:/AI 3D 写实版 工程/20261027_Township换皮_V17写实`，可用环境变量 `TW_ROOT` 改）：
1. `node tools/serve.mjs`，浏览器打开 `/web/bake_env.html?real=1&realset=v2&…`（参数见原工程 README 的 v3b 重渲命令，另加 `realgrain=0&realvig=0`），在控制台 `import('/web/bake_lib.js')` 后按 `bake_lib.js` 里的 `BK.frame / BK.applyHide / BK.bakeAll` 出环境；`import('/web/bake_chars.js')` 后用 `BC.exportChar / exportProp / exportCrowd` 出人物和道具。
2. `python -I tools/tex.py build/bake minigame/assets`（贴图），`node tools/assets.mjs`（GLB 压缩）。

## 微信开发者工具 MCP（Windows）

1. 打开微信开发者工具，在「设置 → 安全设置」中开启「服务端口」并复制「MCP Token」。在 PowerShell 中运行 `Get-Command wechatide`，确认 CLI 已加入 `PATH`。
2. 在 `%LOCALAPPDATA%` 下创建 `ai-minigame` 文件夹，把 Token 单独保存到 `wechat-devtools.token`。文件中只填 Token 本身。
3. 首次使用时，运行 `wechatide -c codex-ai-minigame check_wechatide_status`。如果微信开发者工具弹出授权请求，请允许 `codex-ai-minigame`。如果 CLI 返回 `taskId`，授权后运行 `wechatide -c codex-ai-minigame polling_task_result --task-id <taskId>` 查询授权结果。
4. 保持微信开发者工具运行，在 Codex 中信任此项目并开启新会话。可在项目目录运行 `codex mcp get wechat-devtools` 确认配置已加载。

刷新 MCP Token 后，更新本机文件并重新开启 Codex 会话。
