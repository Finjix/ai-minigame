# 打包上传试玩开发版本

把做好的游戏传成微信「试玩广告」的**开发版本**。只在用户要求时做。

## 分工：服务商平台和开发者工具各管什么

| 做什么 | 在哪做 | 说明 |
|---|---|---|
| 建试玩 AppID，关联小游戏 | 服务商平台（`tools/tryplay.mjs create`） | 每个游戏只建一次。开发者工具建不了，它的 AppID 列表里也看不到试玩 AppID（`get_user_appids` 只返回测试号） |
| 打包上传代码 | 微信开发者工具（MCP `upload`） | `project.config.json` 的 `appid` 填试玩 AppID，开发者工具会认成试玩广告项目（appType 20，「试玩广告模式」） |
| 查看开发版本、提交审核、发布、体验 | 服务商平台 | 开发者工具传完会提示「上传成功后，需要前往服务商平台管理本次上传版本」 |

所以**第一次**传某个游戏要先去平台建 AppID；以后改版重传，只要在开发者工具里 `upload`（版本号加一），再用 `versions` 核对一下。

## 已经建好的试玩 AppID

关联的小游戏都是「无尽冬日」`wxada4175c8b2a9864`，名称照 `BJ-试玩<两位序号><游戏名>` 起（01 拉网捕鱼写实版、02 围炉煮冰是之前别人建的）。新游戏开工前先跑 `node tools/tryplay.mjs list BJ-试玩`，看下一个序号是多少。

| 游戏 | 试玩名称 | 试玩 AppID | 开发版本 |
|---|---|---|---|
| 瀑布捞鱼 `waterfall-fishing` | BJ-试玩03瀑布捞鱼 | `wxa1ed39683c61fdc3` | 1.0.3（2026-11-27） |
| 水下巨木 `underwater-log` | BJ-试玩04水下巨木 | `wxf9e7f3d2077359a5` | 1.0.4（2026-11-27，iOS 真机能进、有声音） |

## 步骤

1. **打包、验证**：`node tools/build.mjs <名字>`，然后按 [video-to-minigame.md](video-to-minigame.md) 第 6 步验证。包要小于 4 MB（`index.html` 和 `dev/` 被 `packOptions.ignore` 排除）。
2. **登录平台**（登录态存在 `build/tryplay/profile` 里，没过期就直接跳过扫码）：
   ```
   node tools/tryplay.mjs login        # 后台跑
   ```
   打印出 `QR build/tryplay/login-qr.jpg` 以后，把这张图复制到 `_ref/` 再用 SendUserFile 发给用户扫码（文件面板只能打开会话目录里的文件）。扫完脚本会自己选企业账号「上海青笛科技有限公司」，最后打印 `LOGGED IN 无尽冬日=wxada4175c8b2a9864 …`。二维码 5 分钟内有效，过期了重新跑。
3. **建试玩 AppID**（只有第一次）：
   ```
   node tools/tryplay.mjs create BJ-试玩05<游戏名>
   ```
   提交前会核对「无尽冬日」的 AppID 是不是 `wxada4175c8b2a9864`（`--game`、`--bind` 可以改）；同名的已经有了就不再建，直接打印出来。最后一行是 `APPID wx…`。
4. **写 AppID**：把 `games/<名字>/minigame/project.config.json` 的 `appid` 改成这个试玩 AppID，并补进上面的表。项目窗口开着的话，先用 `close_project_window` 关掉再改。
5. **上传**：开发者工具 MCP `upload`，`project` 是 `D:/project/ai-minigame/games/<名字>/minigame`，`upload-version` 填 `1.0.0`（重传就往上加），`desc` 填试玩名称。返回 `success: true` 和包大小就算传上去了。MCP 用不了时用命令行：`node tools/wxide.mjs upload --project <同上> --upload-version 1.0.0 --desc <试玩名称>`。
6. **核对**：
   ```
   node tools/tryplay.mjs versions <试玩AppID> …
   ```
   每个 AppID 应该打出一行：版本号、上传时间、上传人、备注、试玩包 ID（`playable@wxada4175c8b2a9864@…`）。每个 AppID 只留最新上传的那个开发版本。平台网页上「开发版本」那张表默认只列一个 AppID（现在是 2024 年的旧版本），在网页上看要按 AppID 筛选。
7. **手机体验**：`node tools/tryplay.mjs qr <试玩AppID> …` 把每个开发版本的「体验」二维码存到 `build/tryplay/preview-<AppID>.jpg`（就是平台上「体验」悬停出来的那张，扫码进的是「试玩广告预览」小程序 `wx81fb74b6f8ca18d6`）。复制到 `_ref/` 发给用户扫。**只有真机能验出试玩环境的问题**，开发者工具模拟器跑的是普通小游戏环境（见下面的坑）。
8. **收尾**：`node tools/tryplay.mjs stop` 关掉无头 Edge。告诉用户每个游戏的试玩 AppID、版本号、试玩包 ID，并说明**还没有提交审核**、没有在手机上体验（提交审核、发布要用户自己决定）。

## 坑

- **试玩广告的运行环境不是普通小游戏**：手机上跑在 magicbrush 里（报错栈里有 `MagicNewAdPlayable.js`），`wx` 是另一套，[官方只保证这些](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api.html)：`createCanvas`、`createImage`、`loadFont`、`onTouchStart/Move/End/Cancel`、`getFileSystemManager`、`getSystemInfoSync`、`getAccountInfoSync`、`createInnerAudioContext`、`createWebAudioContext`、`createVideoDecoder`、`setEnableDebug`、`notifyMiniProgramPlayableStatus`、`reportGameEvent`。不在列表里的接口**可能还在，但返回空对象**，判断「函数在不在」是不够的：
  - 1.0.0：拉起失败「`i.now is not a function`」。`wx.getPerformance()` 返回的对象没有 `now`（`shared/playable/adapter.js`，现在兜底 `Date.now`）。
  - 1.0.1：加载不出来，画面一直闪纯色。屏幕尺寸取自 `wx.getWindowInfo()`，返回空对象，画布宽高成了 NaN。现在 `sysInfo()` 每个数都判断，依次用 `getWindowInfo`、`getSystemInfoSync`、画布大小，启动时打一行 `[flow] sysinfo`。
  - 1.0.2：水下巨木在 **iOS** 上加载停在 96%，安卓正常；1.0.3 加了「声音最多等 5 秒」以后能进游戏，但没有配乐。原因是 `assets/audio/audio.json` 里有一句 GBK 编码的中文：iOS 试玩环境用 `readFile(…, 'utf8')` 读不是合法 UTF-8 的文件时，`success`、`fail` 都不回调，声音整个没加载（进度条不算声音，所以停在 96%）。安卓和浏览器都能读。现在包里的 JSON 一律 UTF-8，`node tools/build.mjs` 打包时检查，不合法就报错。声音最多等 5 秒的上限留着（`shared/playable/audio.js`）。（当时先怀疑配乐是 32 kHz，也一起改成了 44.1 kHz，但这不是原因。）iOS 和安卓**两边都要扫，还要听有没有声音**（官方文档也要求双端都验证才能上传）。
  - 所以：`wx` 接口一律走 `platform.js` 的 `wxGet`（不在或报错就返回 null），**用到的返回值都要判断**，优先用上面列表里的接口。不在列表里的接口只能当可有可无的东西用（`onShow`、`vibrateShort`、`getMenuButtonBoundingClientRect`、`onError`）。
  - 开发者工具模拟器测不出这类问题。交付前用 `qr` 让用户真机扫一次。还拉不起来就打 `--dbg` 包上传：`--dbg` 包会调 `wx.setEnableDebug` 打开试玩的 vConsole（试玩不能真机调试），让用户截 vConsole 里的报错。
- 浏览器窗格在这台机器上没开，平台网页用无头 Edge 操作（`--headless=new --remote-debugging-port=9333`，脚本里已经写好）。配置目录里同步进来的 Edge 扩展（AdGuard、Tampermonkey）会开欢迎页，所以加了 `--disable-extensions`。
- 首页那张二维码是半透明的占位图，扫了没用。要点右上「登录」，页面才会请求 `/ngi/getWxQrCodeInfo`，真二维码在 `https://open.weixin.qq.com/connect/qrcode/<uuid>`。
- 试玩页本体在 `game.weixin.qq.com` 的 iframe 里，主页面的 `innerText` 只有一行版权。接口都在 `/cgi-bin/gamewxagchannelwap/` 下面（`getplayableaccountlistforfuwu`、`getplayablebindminigamelist`、`getplayablebizversionlistforfuwu`），要在 iframe 里带着 cookie 请求。
- 新建对话框的名称输入框会留着上一次填的字，要全选删掉再输入（脚本里是 Ctrl+A、Backspace）。创建成功后会弹「创建成功」框，要点「确认」关掉，不然后面的点击都会被它挡住。
- puppeteer 的鼠标点击在这个页面上偶尔会卡住不返回，脚本里一律用 DOM 的 `click()`。上一次留下的标签页可能停在弹窗上，所以脚本每次都开一个新标签页。
- 接入文档（`https://docs.qq.com/doc/DUFpxWUpOdGhEb0FJ`）是腾讯文档，画在 canvas 上，抓不到文字，要看就让用户打开。
