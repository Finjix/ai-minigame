# AI 微信小游戏

使用 AI 把玩法视频做成微信试玩小游戏的项目，一个仓库放多个小游戏。

- 制作流程：[docs/video-to-minigame.md](docs/video-to-minigame.md)
- 经验库（踩过的坑、交付前自查）：[docs/lessons.md](docs/lessons.md)
- Agent 指南（定稿规则、每次任务后怎么更新文档）：[AGENTS.md](AGENTS.md)

## 小游戏

| 目录 | 名字 | 说明 |
|---|---|---|
| [`games/waterfall-fishing/`](games/waterfall-fishing/README.md) | 瀑布捞鱼 | 无尽冬日写实试玩：下塘捞鱼 → 加工 → 卖货 → 升级，改编自 `20261027_Township换皮_V17写实` |
| [`games/underwater-log/`](games/underwater-log/README.md) | 水下巨木 | 无尽冬日写实试玩：研磨机磨巨木 → 背木头添柴 → 烤肉 → 卖给顾客变钞票 → 传送带、第二个柜台、研磨机升级，改编自 `水下巨木_写实投影版工程_V20` |

## 目录约定

| 路径 | 是什么 |
|---|---|
| `games/<名字>/minigame/` | 该游戏的微信小游戏工程（开发者工具导入这个目录） |
| `games/<名字>/src/` | 该游戏源码，入口 `src/main.js` |
| `games/<名字>/tools/` | 该游戏专用的资源脚本 |
| `shared/playable/` | 所有游戏共用的试玩外壳：微信适配、平台差异、加载、声音、2D 界面（logo、立即体验、轻划移动、摇杆、HUD、气泡） |
| `tools/build.mjs` | 共用打包：`node tools/build.mjs [名字…] [--dev] [--dbg]`，不写名字打包全部；`--dbg` 让微信里也显示状态浮层 |
| `tools/wxide.mjs` | 微信开发者工具命令行的包装（参数不经过 cmd.exe）：`node tools/wxide.mjs simulator_screenshot --project <绝对路径>` |
| `tools/html.mjs` | 单文件 HTML：`node tools/html.mjs <名字> [输出.html]`，把 `minigame/` 的 js 和资源（base64）塞进一个文件，双击就能在浏览器里玩；电脑宽屏时居中显示成 9:16 竖框。先正常打包（不要 `--dbg`） |
| `tools/serve.mjs` | 共用本地服务：`/games/<名字>/…` 浏览器里跑游戏；烘焙页和 `/_save` 用环境变量 `BAKE_GAME`、`TW_ROOT` 指定游戏和源工程 |
| `build/<名字>/` | 烘焙中间产物（不进仓库） |
| `docs/` | 制作流程和经验库，每个任务结束都要更新 |

新加一个游戏：建 `games/<名字>/src/main.js` 和 `games/<名字>/minigame/`（`game.js`、`game.json`、`project.config.json`），`node tools/build.mjs <名字>` 即可。完整步骤见 [docs/video-to-minigame.md](docs/video-to-minigame.md)。

## 开发

```powershell
npm install
```

```powershell
npm run build
```

## 微信开发者工具 MCP（Windows）

1. 打开微信开发者工具，在「设置 → 安全设置」中开启「服务端口」并复制「MCP Token」。在 PowerShell 中运行 `Get-Command wechatide`，确认 CLI 已加入 `PATH`。
2. 在 `%LOCALAPPDATA%` 下创建 `ai-minigame` 文件夹，把 Token 单独保存到 `wechat-devtools.token`。文件中只填 Token 本身。
3. 首次使用时，运行 `wechatide -c codex-ai-minigame check_wechatide_status`。如果微信开发者工具弹出授权请求，请允许 `codex-ai-minigame`。如果 CLI 返回 `taskId`，授权后运行 `wechatide -c codex-ai-minigame polling_task_result --task-id <taskId>` 查询授权结果。
4. 保持微信开发者工具运行，在 Codex 中信任此项目并开启新会话。可在项目目录运行 `codex mcp get wechat-devtools` 确认配置已加载。

刷新 MCP Token 后，更新本机文件并重新开启 Codex 会话。
