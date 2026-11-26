// 微信开发者工具命令行（wechatide skill-cli）的包装：参数按数组直接传给它的 Electron，不经过 cmd.exe（cmd 会把 JS 源码里的引号、空格拆坏）。
// 用法：node tools/wxide.mjs <工具名> [--参数 值 …]，--project 可省（默认当前游戏 GAME 环境变量 / 第一个参数里的 games/<名字>）
//   node tools/wxide.mjs open_project_window --project D:/project/ai-minigame/games/underwater-log/minigame
//   node tools/wxide.mjs simulator_screenshot --project …
//   node tools/wxide.mjs automation_evaluate --project … --fn-source "function(){ return GameGlobal.__dbg.GM.G.t }"
//   node tools/wxide.mjs get_simulator_console --project … --command "grep flow"
// 客户端名固定 codex-ai-minigame（README「微信开发者工具 MCP」那节授权过的）
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const DIR = process.env.WXIDE_DIR || 'C:/Program Files (x86)/Tencent/微信web开发者工具';
const skip = new Set(['node.exe', 'node-18.exe', 'wxfilewatcher.exe', 'wxfilewatcher_x64.exe', 'notification_helper.exe', 'wechatdevtools.exe']);
const exe = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.exe') && !skip.has(f.toLowerCase())).map((f) => path.join(DIR, f)).find((f) => fs.statSync(f).size > 50e6);
if (!exe) { console.error('找不到开发者工具的 Electron'); process.exit(1); }
const CLI = path.join(DIR, 'resources/app.asar.unpacked/js/common/cli/skill-index.js');
const BOOT = "const e=process.argv[1],a=process.argv.slice(2).filter(function(x){return x!=='--electron'});if(!process.env.cwd)process.env.cwd=process.cwd();process.argv=[process.execPath,e,'--electron'].concat(a);require(e)";
const args = process.argv.slice(2);
const r = spawnSync(exe, ['-e', BOOT, CLI, '-c', process.env.WXIDE_CLIENT || 'codex-ai-minigame', ...args], { cwd: DIR, env: { ...process.env, ELECTRON_RUN_AS_NODE: '1', cwd: process.cwd() }, encoding: 'utf8', maxBuffer: 64e6 });
process.stdout.write((r.stdout || '').split('\n').filter((l) => !l.startsWith('[wechatide]')).join('\n'));
if (r.status) process.stderr.write(r.stderr || '');
process.exit(r.status || 0);
