"""写实底图补洞：成片镜头没拍到的地方（原工程写实合成兜底成卡通颜色）
1. 卡通树换成同一排写实的树（颜色 + 视深一起搬，视深按两棵树脚下的地面差平移，遮挡照样对）
2. 没拍到的雪地叠原工程的写实雪贴图细节（按世界坐标平铺，按覆盖度淡入）
输入 build/bake/env/{color_orig,depth_orig,cov,world_xyz.npy,meta.json}，输出 color.png / depth.png
"""
import json, numpy as np
from PIL import Image, ImageFilter

E = 'build/bake/env'
m = json.load(open(f'{E}/meta.json'))
col = np.asarray(Image.open(f'{E}/color_orig.png').convert('RGB')).astype(np.float32)
dep = np.asarray(Image.open(f'{E}/depth_orig.png').convert('RGB')).astype(np.int64)
d16 = (dep[..., 0] * 256 + dep[..., 1]).astype(np.float64)
cov = np.asarray(Image.open(f'{E}/cov.png').convert('L')).astype(np.float32) / 255.0
P = np.load(f'{E}/world_xyz.npy'); X, Y, Z = P[..., 0], P[..., 1], P[..., 2]
H, W = d16.shape
F = np.array(m['F']); DSC = 65535.0 / (m['far'] - m['near'])   # 视深 1m = 多少码值

# 世界 → 像素（近正交，仿射）：用地面上的点拟合
ys, xs = np.mgrid[0:H, 0:W]
s = (d16 < 65535)
idx = np.random.RandomState(0).choice(np.flatnonzero(s), 20000, replace=False)
A = np.stack([X.flat[idx], Y.flat[idx], Z.flat[idx], np.ones(len(idx))], 1)
kx, *_ = np.linalg.lstsq(A, xs.flat[idx], rcond=None); ky, *_ = np.linalg.lstsq(A, ys.flat[idx], rcond=None)
pix = lambda p: (kx[:3] @ p + kx[3], ky[:3] @ p + ky[3])

def tree(cx, cz, R=1.15, ymin=0.45):
    """世界坐标 (cx, cz) 附近的树：只要树冠（离地 0.45m 以上、圆盘内、栅栏外侧），顶点像素"""
    mask = ((X - cx) ** 2 + (Z - cz) ** 2 < R * R) & (Y > ymin) & (X > 4.55) & (d16 < 65535)
    i = np.argmax(np.where(mask, Y, -9)); ay, ax = divmod(i, W)
    return mask, (ax, ay)

def fill_diffuse(img, hole, iters=60):
    """洞里的颜色从四周扩散进来（雪地这种平的地方够用）"""
    out = img.copy(); known = ~hole
    for _ in range(iters):
        if known.all(): break
        acc = np.zeros_like(out); n = np.zeros(hole.shape, np.float32)
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (-1, -1), (1, -1), (-1, 1)):
            sh = np.roll(np.roll(out, dy, 0), dx, 1); kn = np.roll(np.roll(known, dy, 0), dx, 1)
            acc += sh * kn[..., None]; n += kn
        grow = (~known) & (n > 0)
        out[grow] = acc[grow] / n[grow][:, None]; known = known | grow
    return out

# ---- 1. 搬树：每棵卡通树（世界坐标）用哪棵写实树当原型
# 卡通树（世界坐标）← 写实树原型（同一排栅栏外、同样大小）
jobs = [((5.45, 18.53), (5.49, 9.84)), ((5.58, 25.45), (5.51, 12.53))]
print('trees', jobs)
newd = d16.copy()
pasted = np.zeros(d16.shape, bool)   # 搬过来的写实树冠像素（下面补树根时不动）
col_src = col.copy()
snowT = np.asarray(Image.open(r'D:/AI 3D 写实版 工程/20261027_Township换皮_V17写实/data/real/tex/snow.png').convert('RGB')).astype(np.float32)
snowT = np.asarray(Image.fromarray(snowT.astype(np.uint8)).filter(ImageFilter.GaussianBlur(2))).astype(np.float32)   # 软一点，按像素取样不出条纹
STH, STW = snowT.shape[:2]; snowRatio = snowT / snowT.reshape(-1, 3).mean(0)
Cam = np.array(m['L']) - F * m['D']
for (tx, tz), (sx, sz) in jobs:
    mt, at = tree(tx, tz); ms, as_ = tree(sx, sz)
    # 要擦掉的卡通树：树冠 + 压在栅栏外侧的那一截（栅栏在 x≈4.2，留着），膨胀一圈
    big = ((X - tx) ** 2 + (Z - tz) ** 2 < 1.35 ** 2) & (Y > 0.08) & (X > 4.36) & (d16 < 65535)
    hole = np.asarray(Image.fromarray(((mt | big) * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(5))) > 0
    hole &= ~(((X < 4.36) & (Y > 0.08)))   # 栅栏像素不动
    ring = ((X - tx) ** 2 + (Z - tz) ** 2 < 2.2 ** 2) & ~hole & (Y < 0.45) & (Y > -0.1) & (X > 4.36)
    yg = float(np.median(Y[ring]))
    # 洞里每个像素：视线打到地面上的那一点，按世界坐标取写实雪贴图，亮度跟周围地面
    hy, hx = np.nonzero(hole)
    Pp = P[hy, hx].astype(np.float64); t = (yg - Pp[:, 1]) / F[1]; G = Pp + F[None, :] * t[:, None]
    uu = ((G[:, 0] / 1.6) % 1.0 * STW).astype(int) % STW; vv = ((G[:, 2] / 1.6) % 1.0 * STH).astype(int) % STH
    # 底色：洞外周围像素的归一化模糊（每个像素按就近的地面颜色，左边挨着土和栅栏影子的地方也对得上）
    known = (~hole).astype(np.float32)
    def nblur(img, r):
        num = np.stack([np.asarray(Image.fromarray(np.clip(img[..., c] * known, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32) for c in range(3)], -1)
        den = np.asarray(Image.fromarray((known * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)[..., None] / 255
        return num / np.maximum(den, 1e-3)
    loc = nblur(col, 10); loc2 = nblur(col, 28)
    base = np.where((np.asarray(Image.fromarray((known * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(10))).astype(np.float32) > 20)[..., None], loc, loc2)[hy, hx]
    col[hy, hx] = np.clip(base * (1 + (snowRatio[vv, uu] - 1) * 0.7), 0, 255)
    newd[hy, hx] = ((G - Cam[None, :]) @ F - m['near']) / (m['far'] - m['near']) * 65535
    # 贴写实树：按卡通树的轮廓等比放大（卡通树带裙边、更宽），底边中点对齐，盖住原来整个剪影
    tgtm = (mt | big) & ~(((X < 4.36) & (Y > 0.08)))
    ty0, ty1 = np.nonzero(tgtm.any(1))[0][[0, -1]]; tx0, tx1 = np.nonzero(tgtm.any(0))[0][[0, -1]]
    sy0, sy1 = np.nonzero(ms.any(1))[0][[0, -1]]; sx0, sx1 = np.nonzero(ms.any(0))[0][[0, -1]]
    k = max((ty1 - ty0) / (sy1 - sy0), (tx1 - tx0) / (sx1 - sx0)) * 1.04
    pad = 4; box = (sx0 - pad, sy0 - pad, sx1 + pad + 1, sy1 + pad + 1)
    nw, nh = int(round((box[2] - box[0]) * k)), int(round((box[3] - box[1]) * k))
    crgb = Image.fromarray(np.clip(col_src[box[1]:box[3], box[0]:box[2]], 0, 255).astype(np.uint8)).resize((nw, nh), Image.LANCZOS)
    cal = Image.fromarray((ms[box[1]:box[3], box[0]:box[2]] * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8)).resize((nw, nh), Image.BILINEAR)
    srcd = d16[box[1]:box[3], box[0]:box[2]]; dd_ = srcd - d16[as_[1], as_[0]]   # 相对树顶的视深
    cdep = np.asarray(Image.fromarray(dd_.astype(np.float32), 'F').resize((nw, nh), Image.NEAREST)) * k   # 放大后前后厚度也放大
    # 目标位置：底边中点对齐
    bx = (tx0 + tx1) / 2 - ((sx0 + sx1) / 2 - box[0]) * k; by = ty1 - (sy1 - box[1]) * k
    ox, oy = int(round(bx)), int(round(by))
    al = np.asarray(cal).astype(np.float32) / 255; rgb = np.asarray(crgb).astype(np.float32)
    apex_t = d16[at[1], at[0]] if mt[at[1], at[0]] else np.median(d16[tgtm])
    yy, xx = np.nonzero(al > 0.02)
    dy_, dx_ = yy + oy, xx + ox; ok = (dy_ >= 0) & (dy_ < H) & (dx_ >= 0) & (dx_ < W)
    yy, xx, dy_, dx_ = yy[ok], xx[ok], dy_[ok], dx_[ok]
    a = np.clip(al[yy, xx] * 1.4, 0, 1)[:, None]
    col[dy_, dx_] = col[dy_, dx_] * (1 - a) + rgb[yy, xx] * a
    hard = al[yy, xx] > 0.5
    pasted[dy_[al[yy, xx] > 0.25], dx_[al[yy, xx] > 0.25]] = True
    # 视深：树顶对上卡通树的树顶附近（同一块地方），其余按相对厚度
    top_d = float(np.percentile(d16[tgtm], 2))
    newd[dy_[hard], dx_[hard]] = top_d + cdep[yy[hard], xx[hard]]
    print('tree', (tx, tz), '<-', (sx, sz), 'scale', round(float(k), 2), 'at', (ox, oy))

# ---- 1b. 树根的灰圈：写实图没拍到树根那一圈（原工程卡通裙边的兜底颜色），按地面重画成写实雪地
def find_trees():
    mm = (Y > 2.2) & (Y < 5); pts = np.stack([X[mm], Z[mm]], 1)[::7]; cells = {}
    for x, z in pts: cells.setdefault((round(x / 1.5), round(z / 1.5)), []).append((x, z))
    cs = sorted([(np.mean([a for a, _ in v]), np.mean([b for _, b in v]), len(v)) for v in cells.values() if len(v) > 30], key=lambda c: -c[2]); out = []
    for c in cs:
        if all((c[0] - o[0]) ** 2 + (c[1] - o[1]) ** 2 > 1.6 ** 2 for o in out): out.append(c)
    return out
good = (cov > 0.85) & (d16 < 65535) & (dep[..., 2] < 128)
for (tx, tz, _) in find_trees():
    disc = ((X - tx) ** 2 + (Z - tz) ** 2 < 1.8 ** 2) & (d16 < 65535)
    if not disc.any(): continue
    c_ = col; mx = c_.max(2); mn = c_.min(2); grayish = ((mx - mn) < 30) & (c_[..., 2] >= c_[..., 0] - 2) & (mx > 85) & (mx < 190)
    around = ((X - tx) ** 2 + (Z - tz) ** 2 < 3.0 ** 2) & (d16 < 65535)
    inCov = float(np.median(cov[around])) > 0.6   # 周围是写实图拍到的：树下地面的灰也换；周围本来就是兜底颜色：只换高出地面的裙边，免得补出一块亮圆
    yLow = -0.06 if inCov else 0.04
    res = disc & (Y > yLow) & (Y < 1.0) & ((cov < 0.92) | (grayish & (((X - tx) ** 2 + (Z - tz) ** 2) > (0.45 if inCov else 0.7) ** 2) & (((X - tx) ** 2 + (Z - tz) ** 2) < (1.7 if inCov else 1.45) ** 2) & (Y < 1.1))) & ~pasted & (dep[..., 2] < 128)
    if res.sum() < 30: continue
    ring = ((X - tx) ** 2 + (Z - tz) ** 2 < 2.6 ** 2) & good & (Y < 0.5) & (Y > -0.1)
    if ring.sum() < 50: ring = ((X - tx) ** 2 + (Z - tz) ** 2 < 2.6 ** 2) & (Y < 0.5) & ~res & ~pasted
    yg = float(np.median(Y[ring]))
    hy, hx = np.nonzero(res)
    Pp = P[hy, hx].astype(np.float64); t = (yg - Pp[:, 1]) / F[1]; G = Pp + F[None, :] * t[:, None]
    uu = ((G[:, 0] / 1.6) % 1.0 * STW).astype(int) % STW; vv = ((G[:, 2] / 1.6) % 1.0 * STH).astype(int) % STH
    known = (((X - tx) ** 2 + (Z - tz) ** 2 < 3.0 ** 2) & ~res & ~pasted & (Y < 0.6) & (d16 < 65535)).astype(np.float32)
    num = np.stack([np.asarray(Image.fromarray(np.clip(col[..., c] * known, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(9))).astype(np.float32) for c in range(3)], -1)
    den = np.asarray(Image.fromarray((known * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(9))).astype(np.float32)[..., None] / 255
    loc = num / np.maximum(den, 1e-3)
    fallback = np.median(col[ring], 0)
    base = np.where(den[hy, hx] > 0.02, loc[hy, hx], fallback[None, :])
    fill = np.clip(base * (1 + (snowRatio[vv, uu] - 1) * 0.5), 0, 255)
    wgt = np.maximum(np.clip((0.92 - cov[hy, hx]) / 0.3, 0, 1), grayish[hy, hx] * 0.9)[:, None]
    col[hy, hx] = col[hy, hx] * (1 - wgt) + fill * wgt
    sel = wgt[:, 0] > 0.5
    newd[hy[sel], hx[sel]] = ((G[sel] - Cam[None, :]) @ F - m['near']) / (m['far'] - m['near']) * 65535
    print('tree base', (round(tx, 2), round(tz, 2)), 'repainted', int(res.sum()))

# ---- 2. 没拍到的雪地叠写实雪贴图细节
snow = np.asarray(Image.open(r'D:/AI 3D 写实版 工程/20261027_Township换皮_V17写实/data/real/tex/snow.png').convert('RGB').filter(ImageFilter.GaussianBlur(1.5))).astype(np.float32)
SH, SW = snow.shape[:2]; tile = 1.6
lum = snow.mean(2); ratio = lum / lum.mean()
u = ((X / tile) % 1.0 * SW).astype(int) % SW; v = ((Z / tile) % 1.0 * SH).astype(int) % SH
r = ratio[v, u]
bright = (col.mean(2) > 95) & (col[..., 2] >= col[..., 0] - 5)   # 只管雪（亮的、偏冷的地方，背光的雪也算）
# 只给近似水平的面加雪纹理（每像素在地面上占的面积够大；崖壁、雪坎侧面在俯视里面积很小，按世界坐标取样会拉成条纹）
gx = np.zeros_like(X); gz = np.zeros_like(X)
dxX = np.diff(X, axis=1, append=X[:, -1:]); dxZ = np.diff(Z, axis=1, append=Z[:, -1:]); dyX = np.diff(X, axis=0, append=X[-1:]); dyZ = np.diff(Z, axis=0, append=Z[-1:])
area = np.abs(dxX * dyZ - dxZ * dyX); flatA = np.median(area[(np.abs(Y) < 0.05) & (d16 < 65535)])
flat = (area > flatA * 0.5) & (area < flatA * 3)
flat = np.asarray(Image.fromarray((flat * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(3))) > 0
w = np.clip((0.75 - cov) / 0.5, 0, 1) * bright * (dep[..., 2] < 128) * flat
w = np.asarray(Image.fromarray((w * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(3))).astype(np.float32) / 255
k = 1 + (r - 1) * 0.9
col = col * (1 - w[..., None]) + np.clip(col * k[..., None], 0, 255) * w[..., None]

Image.fromarray(np.clip(col, 0, 255).astype(np.uint8)).save(f'{E}/color.png')
nd = np.clip(np.round(newd), 0, 65535).astype(np.int64)
out = dep.copy(); out[..., 0] = nd >> 8; out[..., 1] = nd & 255
Image.fromarray(out.astype(np.uint8)).save(f'{E}/depth.png')
print('done')
