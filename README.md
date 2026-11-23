# AI 微信小游戏

使用 AI 制作微信小游戏的项目。

## 微信开发者工具 MCP（Windows）

1. 打开微信开发者工具，在「设置 → 安全设置」中开启「服务端口」并复制「MCP Token」。在 PowerShell 中运行 `Get-Command wechatide`，确认 CLI 已加入 `PATH`。
2. 在 `%LOCALAPPDATA%` 下创建 `ai-minigame` 文件夹，把 Token 单独保存到 `wechat-devtools.token`。文件中只填 Token 本身。
3. 首次使用时，运行 `wechatide -c codex-ai-minigame check_wechatide_status`。如果微信开发者工具弹出授权请求，请允许 `codex-ai-minigame`。如果 CLI 返回 `taskId`，授权后运行 `wechatide -c codex-ai-minigame polling_task_result --task-id <taskId>` 查询授权结果。
4. 保持微信开发者工具运行，在 Codex 中信任此项目并开启新会话。可在项目目录运行 `codex mcp get wechat-devtools` 确认配置已加载。

刷新 MCP Token 后，更新本机文件并重新开启 Codex 会话。
