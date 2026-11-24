# 写实底图上画世界坐标网格（每 1m 一条线，每 2m 标数字），核对玩法坐标
import json, sys, numpy as np
from PIL import Image, ImageDraw
E='build/waterfall-fishing/bake/env'; m=json.load(open(f'{E}/meta.json'))
col=np.asarray(Image.open(f'{E}/color.png').convert('RGB')).astype(np.float32)
dep=np.asarray(Image.open(f'{E}/depth.png').convert('RGB')).astype(np.float64)
H,W=dep.shape[:2]
d16=(dep[...,0]*256+dep[...,1])/65535.0; vz=m['near']+d16*(m['far']-m['near'])
L=np.array(m['L']); F=np.array(m['F']); R=np.array(m['R']); U=np.array(m['U']); D=m['D']; C=L-F*D
ys,xs=np.mgrid[0:H,0:W]; u=((xs+0.5)/W-0.5)*m['Wm']; v=(0.5-(ys+0.5)/H)*m['Hm']
P=C[None,None,:]+(R[None,None,:]*u[...,None]+U[None,None,:]*v[...,None])*(vz/D)[...,None]+F[None,None,:]*vz[...,None]
X,Y,Z=P[...,0],P[...,1],P[...,2]
np.save('build/waterfall-fishing/bake/env/world_xyz.npy', np.stack([X,Y,Z],-1).astype(np.float32))
out=col.copy()
for arr,c in ((X,(255,40,40)),(Z,(40,120,255))):
    fr=np.abs(arr-np.round(arr)); line=(fr<0.025)
    out[line]=out[line]*0.3+np.array(c)*0.7
img=Image.fromarray(out.clip(0,255).astype(np.uint8)); dr=ImageDraw.Draw(img)
for xi in range(-12,13,2):
    for zi in range(-18,22,2):
        dd=(X-xi)**2+(Z-zi)**2; i=np.argmin(dd)
        if dd.flat[i]<0.01: y,x=divmod(i,W); dr.text((x+2,y+1),f'{xi},{zi}',fill=(255,255,0))
img.save('build/waterfall-fishing/bake/dbg/grid.png')
# 高度图（y）可视化
yy=np.clip((Y+1.0)/2.5,0,1); Image.fromarray((yy*255).astype(np.uint8)).save('build/waterfall-fishing/bake/dbg/height.png')
print('y range', Y.min(), Y.max())
