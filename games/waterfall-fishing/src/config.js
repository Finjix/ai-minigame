// 场景布局沿用原工程的世界坐标（layout.js，米；院子沿 z 拉长 1.25 倍，SZ 是那个变换），写实底图就是按这套坐标烘的。
// 玩法数值：一轮捕鱼 → 加工 → 卖货 → 收钱 → 买地块，三个地块买完试玩结束。
const CAMP_K = 1.25, CZ0 = -2.54, CZ1 = 5.904;
export const SZ = (z) => (z <= CZ0 ? z : z <= CZ1 ? CZ0 + (z - CZ0) * CAMP_K : z + (CZ1 - CZ0) * (CAMP_K - 1));

export const WATER_Y = -0.22;
export const L = {
  plaza: [-4.565, 4.174, -2.54, SZ(5.904)],
  // 走得到的地方（x0, x1, z0, z1）：院子、院门、栈桥、塘里能游的那片
  walk: {
    yard: [-4.1, 3.75, -2.15, 6.8],
    gate: [-0.3, 1.32, -2.75, -2.0],
    pier: [-0.38, 1.42, -4.78, -2.55],   // 栈桥木板 x -0.51..1.56、z -4.9..-2.9（按烘焙深度量的），留 0.13m 让脚踩在板上
    pond: [-4.0, 3.6, -13.0, -3.3],
  },
  pondRect: [-3.5, 3.2, -11.0, -3.9],     // 鱼群活动范围
  table: { x: -3.7, z: SZ(2.2), len: 2.8 * CAMP_K, wid: 1.2, top: 0.62 },
  tableBlock: [-4.4, -3.05, SZ(2.2) - 1.75, SZ(2.2) + 1.75],
  intake: [-3.98, SZ(1.25)],                 // 交上来的鱼摞在这
  cutSpot: [-3.38, SZ(2.28)],
  outStack: [[-3.98, SZ(2.6)], [-3.98, SZ(3.42)]],
  chef: [-2.78, SZ(2.28)],
  dropSpot: [-2.5, SZ(1.25)],               // 主角交鱼站的位置
  pickSpot: [-2.5, SZ(3.6) - 0.35],               // 主角拿货站的位置
  counter: { x0: -1.233, x1: 1.901, z: SZ(5.486), top: 0.78 },
  stand: [-0.2, 1.55, SZ(4.121), SZ(4.892)],   // 柜台后面的虚线框（主角交货、收钱）
  cashStrip: [2.3, 3.1, 5.75, 6.15],   // 钱捆一排排码在这：柜台右边、虚线框右侧的空地（用户指定；原来贴着柜台后沿 x -1.2..-0.35，被柜台和前排顾客头上的货盒挡住）
  front: [[-0.55, SZ(6.36)], [0.45, SZ(6.36)], [1.45, SZ(6.36)]],   // 柜台外第一排三个要货的人
  crowd: { x0: -4.1, x1: 3.7, z0: SZ(6.85), z1: SZ(15.0) },
  pads: {
    hire: { c: [-1.687, SZ(-1.548)], price: 200, icon: 'worker' },
    belt: { c: [-3.32, SZ(-0.264)], price: 200, icon: 'conv' },
    staff: { c: [2.901, SZ(1.762)], price: 400, icon: 'staff' },
  },
  frame: [-3.3, SZ(-1.75)],                   // 鱼框（渔工捕的鱼堆这里）
  belt: [[-3.72, SZ(-1.08)], [-3.72, SZ(2.2) - 2.8 * CAMP_K / 2 + 0.05]],
  start: [0.6, 1.2],
  gateX: 0.52,
};

export const T = {
  walk: 4.3, swim: 2.7, walkCarry: 4.0,
  heroFishCap: [10, 16, 16], meatCap: [12, 16, 18],
  netR: 2.3, netAng: 1.9, catchDt: 0.16,
  dropDt: 0.06, cutDt: 0.3, pickDt: 0.08, serveDt: 0.11, cashDt: 0.035, payDt: 0.04,
  packPrice: 20, billVal: 10,
  need: [2, 4],
  fishN: 130,
  workerCatchDt: 0.2, frameCap: 30, beltDt: 0.32,
  endAfter: 2.4, cap: 115, idle: 2.5,              // 满 115 秒强制结束（定稿规则）
  endJump: 5,                      // 结束页一出来（提前通关或满 115 秒）就倒数 5 秒强制跳转，所以最晚 120 秒
  mid: 60, midDur: 5,              // 满 60 秒暂停弹「立即体验」中间跳转页，倒计时 5 秒没点就回到游戏（shared/playable/midjump.js）
};
export const ORDER = ['hire', 'belt', 'staff'];   // 地块出现 / 解锁顺序
