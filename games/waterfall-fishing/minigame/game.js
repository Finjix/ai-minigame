// 瀑布捞鱼 · 微信小游戏入口。第一次 wx.createCanvas() 拿到的是上屏画布，必须最先建（其他模块加载时会建离屏画布画贴图）
GameGlobal.__mainCanvas = wx.createCanvas();
// 整个游戏是一个打包文件（src/ → tools/build.mjs → js/main.js）
require('./js/main.js');
