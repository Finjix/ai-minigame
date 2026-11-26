"""贴图后处理：build/underwater-log/bake → games/underwater-log/minigame/assets
用法（仓库根目录）：python -I games/underwater-log/tools/tex.py [只做哪几张（文件名前缀）…]
- UV 空间烘的写实固有色 PNG：同一份 UV 上不重叠的几个材质槽合成一张，覆盖区往外扩边（接缝不露底色），缩放，JPEG。
- 传送带：源工程 GLB 里嵌的履带贴图抠出来，照 real_mat57 的 belt 参数去饱和、压暗。
- 环境：color.png（fixenv.py 修过的）→ JPEG；depth.png → PNG（16 位视深按 4 量化，压得小）。
"""
import sys, os, io, json, struct
import numpy as np
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
BAKE = os.path.join(ROOT, 'build/underwater-log/bake')
OUT = os.path.join(ROOT, 'games/underwater-log/minigame/assets')
SRC = os.environ.get('TW_ROOT', 'D:/AI 3D 写实版 工程/水下巨木_写实投影版工程_V20')
ONLY = sys.argv[1:]


def dilate(rgba, iters=40):
    a = rgba[..., 3:4].astype(np.float32) / 255.0
    m = (a > 0.5).astype(np.float32)
    c = rgba[..., :3].astype(np.float32) * m
    for _ in range(iters):
        if m.min() > 0: break
        pc = np.pad(c, ((1, 1), (1, 1), (0, 0)), mode='edge'); pm = np.pad(m, ((1, 1), (1, 1), (0, 0)), mode='edge')
        sc = sum(pc[1 + dy:pc.shape[0] - 1 + dy, 1 + dx:pc.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        sm = sum(pm[1 + dy:pm.shape[0] - 1 + dy, 1 + dx:pm.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        grow = (m < 0.5) & (sm > 0)
        c = np.where(grow, sc / np.maximum(sm, 1e-6), c)
        m = np.where(grow | (m > 0.5), 1.0, 0.0).astype(np.float32)
    if m.min() < 0.5:
        mean = (c * m).sum((0, 1)) / max(m.sum(), 1)
        c = np.where(m > 0.5, c, mean)
    return Image.fromarray(np.clip(c, 0, 255).astype(np.uint8), 'RGB')


def merge(paths):
    acc = None
    for p in paths:
        im = np.asarray(Image.open(os.path.join(BAKE, p)).convert('RGBA')).astype(np.float32)
        if acc is None: acc = im.copy(); continue
        a = im[..., 3:4] / 255.0
        acc[..., :3] = acc[..., :3] * (1 - a) + im[..., :3] * a
        acc[..., 3:4] = np.maximum(acc[..., 3:4], im[..., 3:4])
    return acc.astype(np.uint8)


def save(im, name, q=84):
    dst = os.path.join(OUT, name); os.makedirs(os.path.dirname(dst), exist_ok=True)
    im.save(dst, quality=q, optimize=True)
    print(name, im.size, os.path.getsize(dst))


def albedo(srcs, name, size, q=84, crop=None):
    rgba = merge(srcs)
    im = dilate(rgba)
    if crop: im = im.crop(crop)
    if im.size[0] != size: im = im.resize((size, size), Image.LANCZOS)
    save(im, name, q)


def glb_image(path, idx=0):
    b = open(path, 'rb').read()
    jl = struct.unpack('<I', b[12:16])[0]; js = json.loads(b[20:20 + jl]); bin0 = 20 + jl + 8
    im = js['images'][idx]; bv = js['bufferViews'][im['bufferView']]
    return Image.open(io.BytesIO(b[bin0 + bv.get('byteOffset', 0): bin0 + bv.get('byteOffset', 0) + bv['byteLength']])).convert('RGB')


def want(n): return not ONLY or any(n.startswith(o) for o in ONLY)


if want('hero'):
    albedo(['props/hero_1.png'], 'tex/hero_body.jpg', 1024, 86)
    albedo(['props/hero_0.png'], 'tex/hero_face.jpg', 512, 86)
if want('cust'):
    albedo(['props/cust_0.png'], 'tex/cust_body.jpg', 512)
    albedo(['props/cust_1.png'], 'tex/cust_plate.jpg', 256)
if want('meat'):
    albedo(['props/meatRaw_0.png', 'props/meatRaw_1.png'], 'tex/meat_raw.jpg', 256)
    albedo(['props/meatCooked_0.png', 'props/meatCooked_1.png'], 'tex/meat_cooked.jpg', 256)
if want('cash'): albedo(['props/cash_0.png'], 'tex/cash.jpg', 256)
if want('log'): albedo(['props/log_0.png', 'props/log_1.png'], 'tex/log.jpg', 256)
if want('grinder'):
    albedo(['props/grinder1_0.png'], 'tex/grinder1.jpg', 512, 82)
    albedo(['props/grinder2_0.png'], 'tex/grinder2.jpg', 512, 82)
if want('stump'):
    for k in ('2', '3'):
        albedo([f'props/stump{k}_0.png'], f'tex/stump{k}_top.jpg', 256)
        albedo([f'props/stump{k}_2.png'], f'tex/stump{k}_bark.jpg', 256)
if want('giant'):
    albedo(['props/giant_1.png'], 'tex/giant_cap.jpg', 512)
    albedo(['props/giant_0.png'], 'tex/giant_core.jpg', 256)
    bark = Image.open(os.path.join(SRC, 'assets/xs/bark.jpg')).convert('RGB').resize((512, 512), Image.LANCZOS)
    save(bark, 'tex/bark.jpg', 80)
if want('belt'):
    for f, n in (('belt.glb', 'belt'), ('belt_curve.glb', 'belt_curve')):
        im = np.asarray(glb_image(os.path.join(SRC, 'assets/models/c2', f))).astype(np.float32) / 255
        l = im @ np.array([0.2126, 0.7152, 0.0722])
        im = (l[..., None] + (im - l[..., None]) * 0.28) * 0.62   # real_mat57 belt：去饱和 0.72、亮度 0.52（这里留一点，游戏里还要过光照）
        save(Image.fromarray(np.clip(im * 255, 0, 255).astype(np.uint8)).resize((256, 256), Image.LANCZOS), f'tex/{n}.jpg', 80)
if want('env'):
    e = os.path.join(BAKE, 'env')
    col = Image.open(os.path.join(e, 'color_fix.png' if os.path.exists(os.path.join(e, 'color_fix.png')) else 'color.png')).convert('RGB')
    m = json.load(open(os.path.join(e, 'meta.json')))
    # 镜头取景范围（fixenv.py 量的 clamp）外面镜头拍不到：颜色压成糊的、深度压成常数，JPEG / PNG 小很多
    c = m.get('clamp'); keep = np.zeros((col.size[1], col.size[0]), bool)
    if c: keep[max(0, c[1] - 24):c[3] + 24, max(0, c[0] - 24):c[2] + 24] = True
    else: keep[:] = True
    from PIL import ImageFilter
    blur = np.asarray(col.resize((col.size[0] // 16, col.size[1] // 16)).resize(col.size, Image.BILINEAR))
    col = Image.fromarray(np.where(keep[..., None], np.asarray(col), blur))
    save(col, 'env/color.jpg', 82)
    d = np.asarray(Image.open(os.path.join(e, 'depth.png')).convert('RGB')).astype(np.int32)
    d = np.where(keep[..., None], d, np.array([255, 255, 0]))
    v = d[..., 0] * 256 + d[..., 1]; v = np.where(v >= 65535 - 2, 65535, (v // 4) * 4)
    out = np.stack([v // 256, v % 256, np.where(d[..., 2] > 127, 255, 0)], -1).astype(np.uint8)
    dst = os.path.join(OUT, 'env/depth.png'); Image.fromarray(out).save(dst, optimize=True); print('env/depth.png', os.path.getsize(dst))
    json.dump(m, open(os.path.join(OUT, 'env/meta.json'), 'w'), indent=1)
