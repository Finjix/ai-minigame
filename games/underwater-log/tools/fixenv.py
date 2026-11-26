"""底图修补（build/underwater-log/bake/env）：
1. 覆盖度图 cov.png（烘焙时 realdbg=1：白 = 写实单帧图拍到了，品红 / 黑 = 哪张图都没拍到，只有兜底颜色表的卡通色）→ 量出镜头能取景的范围，
   写进 meta.json 的 clamp（x0, y0, x1, y1 像素）：game 里 setView 不让镜头拍出这块。
2. 没拍到的地方用附近拍到的写实像素补（按类别：雪地用雪、冰面用冰），羽化过渡；补完存 color_fix.png，tex.py 拿它出 color.jpg。
用法（仓库根目录）：python -I games/underwater-log/tools/fixenv.py
"""
import os, json
import numpy as np
from PIL import Image, ImageFilter

E = os.path.join(os.path.dirname(__file__), '../../../build/underwater-log/bake/env')
col = np.asarray(Image.open(os.path.join(E, 'color.png')).convert('RGB')).astype(np.float32)
cov = np.asarray(Image.open(os.path.join(E, 'cov.png')).convert('RGB')).astype(np.float32)
dep = np.asarray(Image.open(os.path.join(E, 'depth.png')).convert('RGB'))
meta = json.load(open(os.path.join(E, 'meta.json')))
H, W = col.shape[:2]

mag = (cov[..., 0] > 200) & (cov[..., 1] < 60) & (cov[..., 2] > 200)
gray = (np.abs(cov[..., 0] - cov[..., 1]) < 6) & (np.abs(cov[..., 1] - cov[..., 2]) < 6)   # 覆盖度灰阶（ENV 像素）
conf = np.where(gray, cov[..., 0] / 255.0, 1.0)            # 非 ENV（冰洞的水、天空）当拍到了
conf = np.where(mag, 0.0, conf)
bad = conf < 0.5
print('uncovered %.1f%%' % (bad.mean() * 100))

# ---- 镜头取景范围：按行、按列看「拍到」的比例（只看中间那一带）
def span(frac, thr):
    ok = np.where(frac > thr)[0]
    return int(ok.min()), int(ok.max())
# 先粗框一个中心区，再在里面量
cx0, cx1 = int(W * 0.15), int(W * 0.85); cy0, cy1 = int(H * 0.1), int(H * 0.9)
rows = 1 - bad[:, cx0:cx1].mean(1); y0, y1 = span(rows, 0.72)
cols = 1 - bad[y0:y1, :].mean(0); x0, x1 = span(cols, 0.8)
clamp = [x0 + 6, y0 + 6, x1 - 6, y1 - 6]
print('clamp', clamp, 'of', W, H, 'view w @10.6m', 10.6 * meta['ppm'])
meta['clamp'] = clamp
json.dump(meta, open(os.path.join(E, 'meta.json'), 'w'), indent=1)

# ---- 补：拍到的像素往外扩（多尺度：先糊开的大尺度底色 + 小尺度纹理用拍到区平铺的高频）
m = (~bad).astype(np.float32)
base = col * m[..., None]
acc, wacc = base.copy(), m.copy()
fill = np.zeros_like(col); fw = np.zeros((H, W), np.float32)
for r in (4, 8, 16, 32, 64, 128):
    k = Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.BoxBlur(r))
    km = np.asarray(k).astype(np.float32) / 255.0
    kc = np.stack([np.asarray(Image.fromarray(np.clip(base[..., c], 0, 255).astype(np.uint8)).filter(ImageFilter.BoxBlur(r))).astype(np.float32) for c in range(3)], -1)
    est = kc / np.maximum(km[..., None], 1e-3)
    take = (fw < 0.5) & (km > 0.08)
    fill = np.where(take[..., None], est, fill); fw = np.where(take, 1.0, fw)
fill = np.where(fw[..., None] > 0.5, fill, col)
# 高频纹理：从拍到的雪地借（同一块偏移着铺），免得补出来一片平涂
hp = col - np.stack([np.asarray(Image.fromarray(col[..., c].astype(np.uint8)).filter(ImageFilter.GaussianBlur(6))).astype(np.float32) for c in range(3)], -1)
sy, sx = int(H * 0.78), int(W * 0.2)   # 营地下方雪地（拍到了）
tile = hp[sy:sy + 160, sx:sx + 160]
ty = np.arange(H) % 160; tx = np.arange(W) % 160
fill = fill + tile[ty][:, tx] * 0.9
a = Image.fromarray((bad * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(3))
a = np.asarray(a).astype(np.float32)[..., None] / 255.0
out = col * (1 - a) + fill * a
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(E, 'color_fix.png'))
Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).resize((W // 2, H // 2)).save(os.path.join(E, '../../color_fix_half.jpg'), quality=88)
print('saved color_fix.png')
