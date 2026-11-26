// run.mjs 跑的烘焙步骤（async 函数体）：摆到第 600 帧，藏掉会动的（冰洞的写实水、漂的碎冰留着；灰柜台 2 和锁也藏，游戏里 3D 画），框住营地 + 手机画面那么大的余量，64 像素 / 米
const THREE = window.THREE_ || (await import('/node_modules/three/build/three.module.js'));
globalThis.THREE = THREE;
const L = globalThis.REAL_LISTS;
const nm = (o) => { const m = Array.isArray(o.material) ? o.material[0] : o.material; return (m && m.name) || ''; };
const bbOf = (o) => new THREE.Box3().setFromObject(o);
const keep = L.HIDE_B.filter((o) => /real_water|real_ice/.test(nm(o)));
// 灰柜台 2 + 锁：游戏里 3D 画（解锁时换木柜台）
const extraHide = L.ENV.filter((o) => { const b = bbOf(o); const c = b.getCenter(new THREE.Vector3()); return c.x > 1.0 && c.x < 3.8 && c.z > -6.0 && c.z < -4.0 && c.y < 2; });
const n = BK.stage(600, { keep, extraHide });
const { R, U } = BK.axes(); let a = [1e9, 1e9, -1e9, -1e9];
for (const x of [-4.62, 4.65]) for (const z of [-6.12, 6.12]) { const P = new THREE.Vector3(x, 0, z), u = P.dot(R), v = P.dot(U); a = [Math.min(a[0], u), Math.min(a[1], v), Math.max(a[2], u), Math.max(a[3], v)]; }
const pu = 5.6, pv = 10.2;
const toW = (u, v) => { const P = R.clone().multiplyScalar(u).addScaledVector(U, v); return [P.x, P.y, P.z]; };
const pts = [toW(a[0] - pu, a[1] - pv), toW(a[2] + pu, a[3] + pv)];
const cam = BK.frame({ pts, ppm: 64 });
BK.renderColor(0, 0, 1080, 1920); console.log('lod', BK.patchLod());
BK.setDbg(1); const r = await BK.bakeAll({ name: 'cov', depth: false });
return { n, cam, r, a };
