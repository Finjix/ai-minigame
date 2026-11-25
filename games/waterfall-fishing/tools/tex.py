"""Texture post-process for baked assets -> minigame/assets.
Usage: python -I games/waterfall-fishing/tools/tex.py [bake_dir] [out_dir]   (默认 build/waterfall-fishing/bake、games/waterfall-fishing/minigame/assets)
- UV-baked albedo PNGs: merge slot bakes that share a texture, dilate coverage edges (no seams), resize, JPEG.
- env: color -> JPEG, depth -> PNG (RG = 16-bit depth, B = kind), flow -> downscaled PNG.
"""
import sys, os, json
import numpy as np
from PIL import Image, ImageFilter

BAKE = sys.argv[1] if len(sys.argv) > 1 else 'build/waterfall-fishing/bake'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'games/waterfall-fishing/minigame/assets'


def dilate(rgba, iters=24):
    a = rgba[..., 3:4].astype(np.float32) / 255.0
    c = rgba[..., :3].astype(np.float32) * a
    m = (a > 0.5).astype(np.float32)
    c = c / np.maximum(a, 1e-6) * m
    for _ in range(iters):
        if m.min() > 0: break
        # 3x3 average of covered neighbours
        pc = np.pad(c, ((1, 1), (1, 1), (0, 0)), mode='edge'); pm = np.pad(m, ((1, 1), (1, 1), (0, 0)), mode='edge')
        sc = sum(pc[1 + dy:pc.shape[0] - 1 + dy, 1 + dx:pc.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        sm = sum(pm[1 + dy:pm.shape[0] - 1 + dy, 1 + dx:pm.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        grow = (m < 0.5) & (sm > 0)
        c = np.where(grow, sc / np.maximum(sm, 1e-6), c)
        m = np.where(grow | (m > 0.5), 1.0, 0.0).astype(np.float32)
    # whatever is still empty: mean colour
    if m.min() < 0.5:
        mean = (c * m).sum((0, 1)) / max(m.sum(), 1)
        c = np.where(m > 0.5, c, mean)
    return Image.fromarray(np.clip(c, 0, 255).astype(np.uint8), 'RGB')


def load(p):
    return np.asarray(Image.open(p).convert('RGBA'))


def merge(paths):
    acc = None
    for p in paths:
        im = load(p).astype(np.float32)
        if acc is None: acc = im
        else:
            a = im[..., 3:4] / 255.0
            acc[..., :3] = acc[..., :3] * (1 - a) + im[..., :3] * a
            acc[..., 3:4] = np.maximum(acc[..., 3:4], im[..., 3:4])
    return acc.astype(np.uint8)


def albedo(srcs, dst, size, q=82):
    rgba = merge([os.path.join(BAKE, s) for s in srcs])
    im = dilate(rgba)
    if im.size[0] != size: im = im.resize((size, size), Image.LANCZOS)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im.save(dst, quality=q, optimize=True, progressive=False)
    print(dst, os.path.getsize(dst))


def atlas_crop(src, rect, dst, size, mul=1.0, q=88):
    """从源工程图集里按 UV 框直接裁一块（导出时 uvRemap 把模型 UV 拉到了这个框的 0~1），颜色按 UE 材质乘 mul（线性空间）。
    rect = [u0, v0, du, dv]（含导出时的 0.002 边距）"""
    im = Image.open(src).convert('RGB'); W, H = im.size
    u0, v0, du, dv = rect
    c = im.transform((size, size), Image.EXTENT, (u0 * W, (1 - (v0 + dv)) * H, (u0 + du) * W, (1 - v0) * H), Image.BICUBIC)
    x = np.asarray(c).astype(np.float32) / 255.0
    lin = np.where(x <= 0.04045, x / 12.92, ((x + 0.055) / 1.055) ** 2.4) * mul
    lin = np.clip(lin, 0, 1)
    srgb = np.where(lin <= 0.0031308, lin * 12.92, 1.055 * lin ** (1 / 2.4) - 0.055)
    Image.fromarray((srgb * 255 + 0.5).astype(np.uint8), 'RGB').save(dst, quality=q, optimize=True)
    print(dst, os.path.getsize(dst))


TW = os.environ.get('TW_ROOT', 'D:/AI 3D 写实版 工程/20261027_Township换皮_V17写实')
A = os.path.join(OUT, 'tex')
# 厨师 JueSeD_chef（原始网格 602 面）：UV 只占 citizen 图集里 u 0.627–0.687、v 0.921–1.0 一小块。
#   UV 空间烘焙在 uvRemap 时没按裁剪框渲（只烘到角上一块，其余被均色填成灰 = 白模），所以直接从图集裁；材质 MasterMaterial_Inst20 = 图集 × 1.5
CHEF_UV = [0.62655 - 0.002, 0.92093 - 0.002, 0.68736 - 0.62655 + 0.004, 1.00011 - 0.92093 + 0.004]
atlas_crop(os.path.join(TW, 'assets/chars/tex/citizen.png'), CHEF_UV, f'{A}/chef.jpg', 256, mul=1.5)
if os.environ.get('TEX_ONLY') == 'chef': sys.exit(0)
albedo(['chars/hero_body.png', 'chars/hero_eye.png'], f'{A}/hero_body.jpg', 2048, 86)   # 主角原始贴图 2048，保持原始精度
albedo(['chars/hero_lan.png'], f'{A}/hero_lan.jpg', 2048, 86)
albedo(['chars/fisher_body.png', 'chars/fisher_eye.png'], f'{A}/fisher_body.jpg', 512)
albedo(['chars/fisher_lan.png'], f'{A}/fisher_lan.jpg', 1024)
albedo(['chars/cust_body.png'], f'{A}/cust.jpg', 512)
albedo(['chars/cust_eye.png'], f'{A}/cust_eye.jpg', 128)
albedo(['props/fish_body.png'], f'{A}/fish.jpg', 256)
albedo(['props/pack_food.png'], f'{A}/pack_food.jpg', 256)
albedo(['props/cash_bill.png'], f'{A}/cash.jpg', 128)

# ---- env
E = os.path.join(BAKE, 'env')
meta = json.load(open(os.path.join(E, 'meta.json')))
col = Image.open(os.path.join(E, 'color.png')).convert('RGB')
os.makedirs(os.path.join(OUT, 'env'), exist_ok=True)
col.save(os.path.join(OUT, 'env/color.jpg'), quality=int(os.environ.get('ENVQ', 80)), optimize=True)
dep = np.asarray(Image.open(os.path.join(E, 'depth.png')).convert('RGB')).copy()
d16 = dep[..., 0].astype(np.int32) * 256 + dep[..., 1]
kind = (dep[..., 2] > 128) & (d16 < 65535)
# store: RG depth, B kind 255 water / 0 solid
dep[..., 2] = np.where(kind, 255, 0)
# 视深量化到 4 级（约 1.8cm）：遮挡判断够用，PNG 小 30%
dq = np.where(d16 < 65535, np.minimum((d16 // 4) * 4 + 2, 65534), 65535)
dep[..., 0] = (dq >> 8).astype(np.uint8); dep[..., 1] = (dq & 255).astype(np.uint8)
Image.fromarray(dep, 'RGB').save(os.path.join(OUT, 'env/depth.png'), optimize=True)
fl = Image.open(os.path.join(E, 'flow.png')).convert('RGBA')
fa = np.asarray(fl).astype(np.float32)
w = (fa[..., 3:4] / 255.0)
fl2 = np.concatenate([np.where(w > 0.5, fa[..., :2], 128.0), w * 255.0, np.full_like(w, 255.0)], -1).astype(np.uint8)
Image.fromarray(fl2, 'RGBA').resize((meta['fullW'] // 4, meta['fullH'] // 4), Image.BILINEAR).convert('RGB').save(os.path.join(OUT, 'env/flow.png'), optimize=True)
json.dump(meta, open(os.path.join(OUT, 'env/meta.json'), 'w'))
for f in ['color.jpg', 'depth.png', 'flow.png']: print('env', f, os.path.getsize(os.path.join(OUT, 'env', f)))
