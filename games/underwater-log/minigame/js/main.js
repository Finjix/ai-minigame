(()=>{var px=Object.defineProperty;var cl=(i,e)=>{for(var t in e)px(i,t,{get:e[t],enumerable:!0})};var Cn=typeof GameGlobal!="undefined"?GameGlobal:null;if(Cn){if(typeof Cn.self=="undefined"&&(Cn.self=Cn),typeof Cn.navigator=="undefined"&&(Cn.navigator={userAgent:"wechatgame",maxTouchPoints:5}),typeof Cn.performance=="undefined"||!Cn.performance.now){let i=typeof wx!="undefined"&&wx.getPerformance?wx.getPerformance():null;Cn.performance={now:i?()=>i.now()/1e3:()=>Date.now()}}if(typeof Cn.AbortController=="undefined"){class i{constructor(){this.aborted=!1,this.reason=void 0,this.onabort=null,this._l=[]}addEventListener(t,n){this._l.push(n)}removeEventListener(t,n){this._l=this._l.filter(s=>s!==n)}throwIfAborted(){if(this.aborted)throw this.reason}}Cn.AbortSignal=i,Cn.AbortController=class{constructor(){this.signal=new i}abort(t){let n=this.signal;if(!n.aborted){n.aborted=!0,n.reason=t;for(let s of n._l)try{s({type:"abort"})}catch(r){}n.onabort&&n.onabort({type:"abort"})}}}}typeof Cn.TextDecoder=="undefined"&&(Cn.TextDecoder=class{decode(e){let t=e instanceof Uint8Array?e:new Uint8Array(e.buffer?e.buffer:e,e.byteOffset||0,e.byteLength),n="",s=0;for(;s<t.length;){let r=t[s++];if(r>127)if(r>191&&r<224)r=(r&31)<<6|t[s++]&63;else if(r>223&&r<240)r=(r&15)<<12|(t[s++]&63)<<6|t[s++]&63;else{r=(r&7)<<18|(t[s++]&63)<<12|(t[s++]&63)<<6|t[s++]&63,r-=65536,n+=String.fromCharCode(55296+(r>>10),56320+(r&1023));continue}n+=String.fromCharCode(r)}return n}})}var mm=0,Hh=1,gm=2;var Ia=1,xm=2,so=3,Ri=0,wn=1,an=2,Ci=0,_s=1,Js=2,Vh=3,Gh=4,xc=5;var $s=100,_m=101,vm=102,ym=103,Mm=104,Sm=200,Pa=201,bm=202,Tm=203,Wh=204,ro=205,wm=206,Em=207,Am=208,Rm=209,Cm=210,Im=211,Pm=212,Lm=213,Nm=214,zl=0,Nr=1,Hl=2,Dr=3,Vl=4,Gl=5,Wl=6,Xl=7,_c=0,Dm=1,Um=2,pi=0,Xh=1,qh=2,Yh=3,Zh=4,Kh=5,Jh=6,$h=7,Rh="attached",Fm="detached",jh=300,vs=301,js=302,vc=303,yc=304,La=306,ni=1e3,ei=1001,Ur=1002,kt=1003,Mc=1004;var Qs=1005;var Lt=1006,oo=1007;var Gn=1008;var Un=1009,Qh=1010,ef=1011,ao=1012,Sc=1013,Wn=1014,Xn=1015,mi=1016,bc=1017,Tc=1018,lo=1020,tf=35902,nf=35899,sf=1021,rf=1022,qn=1023,bi=1026,ys=1027,wc=1028,Ec=1029,Ms=1030,Ac=1031;var Rc=1033,Na=33776,Da=33777,Ua=33778,Fa=33779,Cc=35840,Ic=35841,Pc=35842,Lc=35843,Nc=36196,Dc=37492,Uc=37496,Fc=37488,Oc=37489,Oa=37490,Bc=37491,kc=37808,zc=37809,Hc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,Zc=37817,Kc=37818,Jc=37819,$c=37820,jc=37821,Qc=36492,eu=36494,tu=36495,nu=36283,iu=36284,Ba=36285,su=36286,ru=2200,ou=2201,Om=2202,Bs=2300,ks=2301,Ol=2302,Ch=2303,Ds=2400,Us=2401,Qo=2402,au=2500,Bm=2501,of=0,ka=1,co=2,km=3200;var za=0,zm=1,Fn="",dt="srgb",Tn="srgb-linear",ea="linear",_t="srgb";var Bl=7680;var Hm=519,Vm=512,Gm=513,Wm=514,lu=515,Xm=516,qm=517,cu=518,Ym=519,af=35044,Ii=35048;var lf="300 es",hi=2e3,Fr=2001;function mx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zm(){let i=Or("canvas");return i.style.display="block",i}var Ep={},Br=null;function ta(...i){let e="THREE."+i.shift();Br?Br("log",e,...i):console.log(e,...i)}function Km(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Km(i);let e="THREE."+i.shift();if(Br)Br("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Km(i);let e="THREE."+i.shift();if(Br)Br("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Os(...i){let e=i.join(" ");e in Ep||(Ep[e]=!0,Pe(...i))}function Jm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $m={[zl]:Nr,[Hl]:Wl,[Vl]:Xl,[Dr]:Gl,[Nr]:zl,[Wl]:Hl,[Xl]:Vl,[Gl]:Dr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ap=1234567,Ko=Math.PI/180,zs=180/Math.PI;function ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function cf(i,e){return(i%e+e)%e}function xx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _x(i,e,t){return i!==e?(t-i)/(e-i):0}function Jo(i,e,t){return(1-t)*i+t*e}function vx(i,e,t,n){return Jo(i,e,1-Math.exp(-t*n))}function yx(i,e=1){return e-Math.abs(cf(i,e*2)-e)}function Mx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tx(i,e){return i+Math.random()*(e-i)}function Ex(i){return i*(.5-Math.random())}function Ax(i){i!==void 0&&(Ap=i);let e=Ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rx(i){return i*Ko}function Cx(i){return i*zs}function Ix(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Px(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uo={DEG2RAD:Ko,RAD2DEG:zs,generateUUID:ti,clamp:Qe,euclideanModulo:cf,mapLinear:xx,inverseLerp:_x,lerp:Jo,damp:vx,pingpong:yx,smoothstep:Mx,smootherstep:Sx,randInt:bx,randFloat:Tx,randFloatSpread:Ex,seededRandom:Ax,degToRad:Rx,radToDeg:Cx,isPowerOfTwo:Ix,ceilPowerOfTwo:Px,floorPowerOfTwo:Lx,setQuaternionFromProperEuler:Nx,normalize:Mt,denormalize:ui},mf=class mf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mf.prototype.isVector2=!0;var oe=mf,Pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(f!==v||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*v;m<0&&(h=-h,d=-d,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),T=Math.sin(x);g=Math.sin(g*x)/T,a=Math.sin(a*x)/T,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+v*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+v*a;let x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gf=class gf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gf.prototype.isVector3=!0;var C=gf,th=new C,Rp=new Pt,xf=class xf{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],v=s[0],m=s[3],g=s[6],x=s[1],T=s[4],_=s[7],b=s[2],w=s[5],R=s[8];return r[0]=o*v+a*x+l*b,r[3]=o*m+a*T+l*w,r[6]=o*g+a*_+l*R,r[1]=c*v+u*x+f*b,r[4]=c*m+u*T+f*w,r[7]=c*g+u*_+f*R,r[2]=h*v+d*x+p*b,r[5]=h*m+d*T+p*w,r[8]=h*g+d*_+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*f+n*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(e,t)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xf.prototype.isMatrix3=!0;var Xe=xf,nh=new Xe,Cp=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ip=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){let i={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tn]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Cp,fromXYZ:Ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Cp,fromXYZ:Ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}var je=Dx();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=Or("canvas")),_r.width=e.width,_r.height=e.height;let s=_r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ux=0,kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ih(s[o].image)):r.push(ih(s[o]))}else r=ih(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ih(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Fx=0,sh=new C,vt=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=Lt,o=Gn,a=qn,l=Un,c=i.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ti(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=jh;vt.DEFAULT_ANISOTROPY=1;var _f=class _f{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,_=(d+1)/2,b=(g+1)/2,w=(u+h)/4,R=(f+v)/4,M=(p+m)/4;return T>_&&T>b?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=R/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_f.prototype.isVector4=!0;var ut=_f,Yl=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new vt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gc=class gc{constructor(e,t,n,s,r,o,a,l,c,u,f,h,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,d,p,v,m)}set(e,t,n,s,r,o,a,l,c,u,f,h,d,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h+v*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,v=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-v*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,Bx)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),us.crossVectors(n,kn),us.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),us.crossVectors(n,kn)),us.normalize(),ul.crossVectors(kn,us),s[0]=us.x,s[4]=ul.x,s[8]=kn.x,s[1]=us.y,s[5]=ul.y,s[9]=kn.y,s[2]=us.z,s[6]=ul.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],T=n[7],_=n[11],b=n[15],w=s[0],R=s[4],M=s[8],E=s[12],I=s[1],N=s[5],F=s[9],k=s[13],L=s[2],B=s[6],X=s[10],W=s[14],se=s[3],q=s[7],Q=s[11],ne=s[15];return r[0]=o*w+a*I+l*L+c*se,r[4]=o*R+a*N+l*B+c*q,r[8]=o*M+a*F+l*X+c*Q,r[12]=o*E+a*k+l*W+c*ne,r[1]=u*w+f*I+h*L+d*se,r[5]=u*R+f*N+h*B+d*q,r[9]=u*M+f*F+h*X+d*Q,r[13]=u*E+f*k+h*W+d*ne,r[2]=p*w+v*I+m*L+g*se,r[6]=p*R+v*N+m*B+g*q,r[10]=p*M+v*F+m*X+g*Q,r[14]=p*E+v*k+m*W+g*ne,r[3]=x*w+T*I+_*L+b*se,r[7]=x*R+T*N+_*B+b*q,r[11]=x*M+T*F+_*X+b*Q,r[15]=x*E+T*k+_*W+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=l*d-c*h,T=a*d-c*f,_=a*h-l*f,b=o*d-c*u,w=o*h-l*u,R=o*f-a*u;return t*(v*x-m*T+g*_)-n*(p*x-m*b+g*w)+s*(p*T-v*b+g*R)-r*(p*_-v*w+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*a-n*o,T=t*l-s*o,_=t*c-r*o,b=n*l-s*a,w=n*c-r*a,R=s*c-r*l,M=u*v-f*p,E=u*m-h*p,I=u*g-d*p,N=f*m-h*v,F=f*g-d*v,k=h*g-d*m,L=x*k-T*F+_*N+b*I-w*E+R*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(a*k-l*F+c*N)*B,e[1]=(s*F-n*k-r*N)*B,e[2]=(v*R-m*w+g*b)*B,e[3]=(h*w-f*R-d*b)*B,e[4]=(l*I-o*k-c*E)*B,e[5]=(t*k-s*I+r*E)*B,e[6]=(m*_-p*R-g*T)*B,e[7]=(u*R-h*_+d*T)*B,e[8]=(o*F-a*I+c*M)*B,e[9]=(n*I-t*F-r*M)*B,e[10]=(p*w-v*_+g*x)*B,e[11]=(f*_-u*w-d*x)*B,e[12]=(a*E-o*N-l*M)*B,e[13]=(t*N-n*E+s*M)*B,e[14]=(v*T-p*b-m*x)*B,e[15]=(u*b-f*T+h*x)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,p=r*f,v=o*u,m=o*f,g=a*f,x=l*c,T=l*u,_=l*f,b=n.x,w=n.y,R=n.z;return s[0]=(1-(v+g))*b,s[1]=(d+_)*b,s[2]=(p-T)*b,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(h+g))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(p+T)*R,s[9]=(m-x)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let c=1/o,u=1/a,f=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=hi,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===hi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Fr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hi,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===hi)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Fr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gc.prototype.isMatrix4=!0;var ze=gc,vr=new C,oi=new ze,Ox=new C(0,0,0),Bx=new C(1,1,1),us=new C,ul=new C,kn=new C,Pp=new ze,Lp=new Pt,In=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kx=0,Np=new C,yr=new Pt,zi=new ze,hl=new C,zo=new C,zx=new C,Hx=new Pt,Dp=new C(1,0,0),Up=new C(0,1,0),Fp=new C(0,0,1),Op={type:"added"},Vx={type:"removed"},Mr={type:"childadded",child:null},rh={type:"childremoved",child:null},Ut=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new In,n=new Pt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Xe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(zo,hl,this.up):zi.lookAt(hl,zo,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(zi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Op),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Op),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new C(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gx={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},fl={h:0,s:0,l:0};function oh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=cf(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oh(o,r,e+1/3),this.g=oh(o,r,e),this.b=oh(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=jm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return je.workingToColorSpace(gn.copy(this),e),Math.round(Qe(gn.r*255,0,255))*65536+Math.round(Qe(gn.g*255,0,255))*256+Math.round(Qe(gn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=dt){je.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(fl);let n=Jo(hs.h,fl.h,t),s=Jo(hs.s,fl.s,t),r=Jo(hs.l,fl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Le;Le.NAMES=jm;var Ti=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ai=new C,Hi=new C,ah=new C,Vi=new C,Sr=new C,br=new C,Bp=new C,lh=new C,ch=new C,uh=new C,hh=new ut,fh=new ut,dh=new ut,gs=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ai.subVectors(s,t),Hi.subVectors(n,t),ah.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(Hi),l=ai.dot(ah),c=Hi.dot(Hi),u=Hi.dot(ah),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hh.setScalar(0),fh.setScalar(0),dh.setScalar(0),hh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,n),dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hh,r.x),o.addScaledVector(fh,r.y),o.addScaledVector(dh,r.z),o}static isFrontFacing(e,t,n,s){return ai.subVectors(n,t),Hi.subVectors(e,t),ai.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ai.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Sr.subVectors(s,n),br.subVectors(r,n),lh.subVectors(e,n);let l=Sr.dot(lh),c=br.dot(lh);if(l<=0&&c<=0)return t.copy(n);ch.subVectors(e,s);let u=Sr.dot(ch),f=br.dot(ch);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Sr,o);uh.subVectors(e,r);let d=Sr.dot(uh),p=br.dot(uh);if(p>=0&&d<=p)return t.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(br,a);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Bp.subVectors(r,s),a=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(Bp,a);let g=1/(m+v+h);return o=v*g,a=h*g,t.copy(n).addScaledVector(Sr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),pl.subVectors(this.max,Ho),Tr.subVectors(e.a,Ho),wr.subVectors(e.b,Ho),Er.subVectors(e.c,Ho),fs.subVectors(wr,Tr),ds.subVectors(Er,wr),Is.subVectors(Tr,Er);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Is.z,Is.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Is.z,0,-Is.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Is.y,Is.x,0];return!ph(t,Tr,wr,Er,pl)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,Tr,wr,Er,pl))?!1:(ml.crossVectors(fs,ds),t=[ml.x,ml.y,ml.z],ph(t,Tr,wr,Er,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new C,new C,new C,new C,new C,new C,new C,new C],li=new C,dl=new fn,Tr=new C,wr=new C,Er=new C,fs=new C,ds=new C,Is=new C,Ho=new C,pl=new C,ml=new C,Ps=new C;function ph(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zt=new C,gl=new oe,Wx=0,at=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xx=new fn,Vo=new C,mh=new C,_n=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);let t=Vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(mh)),this.expandByPoint(Vo.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qx=0,Qn=new ze,gh=new Ut,Ar=new C,zn=new fn,Go=new fn,on=new C,lt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?sa:Hs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(zn.min,Go.min),zn.expandByPoint(on),on.addVectors(zn.max,Go.max),zn.expandByPoint(on)):(zn.expandByPoint(Go.min),zn.expandByPoint(Go.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),on.add(Ar)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new at(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new C,l[M]=new C;let c=new C,u=new C,f=new C,h=new oe,d=new oe,p=new oe,v=new C,m=new C;function g(M,E,I){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,I),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),u.sub(c),f.sub(c),d.sub(h),p.sub(h);let N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(N),a[M].add(v),a[E].add(v),a[I].add(v),l[M].add(m),l[E].add(m),l[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let M=0,E=x.length;M<E;++M){let I=x[M],N=I.start,F=I.count;for(let k=N,L=N+F;k<L;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let T=new C,_=new C,b=new C,w=new C;function R(M){b.fromBufferAttribute(s,M),w.copy(b);let E=a[M];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(w,E);let N=_.dot(l[M])<0?-1:1;o.setXYZW(M,T.x,T.y,T.z,N)}for(let M=0,E=x.length;M<E;++M){let I=x[M],N=I.start,F=I.count;for(let k=N,L=N+F;k<L;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,f=new C;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new at(h,u,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},bn=new C,Vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xh=new C,Yx=new C,Zx=new Xe,ci=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xh.subVectors(n,t).cross(Yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zx.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kx=0,en=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=_s,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=ro,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wi=new C,_h=new C,xl=new C,_l=new C,Vs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_h.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),_l.copy(this.origin).sub(_h);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xl),a=_l.dot(this.direction),l=-_l.dot(xl),c=_l.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(_h).addScaledVector(xl,h),d}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),s=Wi.dot(Wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,x=n.y-o.y,T=n.z-o.z,_=Math.abs(l),b=Math.abs(c),w=Math.abs(u),R,M,E,I,N,F,k,L,B,X,W,se;if(_>=b&&_>=w?(E=l,F=f,B=p,se=g,l>=0?(R=c,M=u,I=h,N=d,k=v,L=m,X=x,W=T):(R=u,M=c,I=d,N=h,k=m,L=v,X=T,W=x)):b>=w?(E=c,F=h,B=v,se=x,c>=0?(R=u,M=l,I=d,N=f,k=m,L=p,X=T,W=g):(R=l,M=u,I=f,N=d,k=p,L=m,X=g,W=T)):(E=u,F=d,B=m,se=T,u>=0?(R=l,M=c,I=f,N=h,k=p,L=v,X=g,W=x):(R=c,M=l,I=h,N=f,k=v,L=p,X=x,W=g)),E===0)return null;let q=R/E,Q=M/E,ne=1/E,Ne=I-q*F,we=N-Q*F,pt=k-q*B,nt=L-Q*B,ht=X-q*se,J=W-Q*se,ee=ht*nt-J*pt,_e=Ne*J-we*ht,He=pt*we-nt*Ne;if(s){if(ee<0||_e<0||He<0)return null}else if((ee<0||_e<0||He<0)&&(ee>0||_e>0||He>0))return null;let Se=ee+_e+He;if(Se===0)return null;let Ge=ne*(ee*F+_e*B+He*se);return(Se>0?Ge<0:Ge>0)?null:this.at(Ge/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kp=new ze,Ls=new Vs,vl=new _n,zp=new C,yl=new C,Ml=new C,Sl=new C,vh=new C,bl=new C,Hp=new C,Tl=new C,qe=class extends Ut{constructor(e=new lt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(vh.fromBufferAttribute(f,e),o?bl.addScaledVector(vh,u):bl.addScaledVector(vh.sub(t),u))}t.add(bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(vl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(vl,zp)===null||Ls.origin.distanceToSquared(zp)>(e.far-e.near)**2))&&(kp.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(kp),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=T;_<b;_+=3){let w=a.getX(_),R=a.getX(_+1),M=a.getX(_+2);s=wl(this,g,e,n,c,u,f,w,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let x=a.getX(m),T=a.getX(m+1),_=a.getX(m+2);s=wl(this,o,e,n,c,u,f,x,T,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let m=h[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=T;_<b;_+=3){let w=_,R=_+1,M=_+2;s=wl(this,g,e,n,c,u,f,w,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let x=m,T=m+1,_=m+2;s=wl(this,o,e,n,c,u,f,x,T,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jx(i,e,t,n,s,r,o,a){let l;if(e.side===wn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:i}}function wl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,yl),i.getVertexPosition(l,Ml),i.getVertexPosition(c,Sl);let u=Jx(i,e,t,n,yl,Ml,Sl,Hp);if(u){let f=new C;gs.getBarycoord(Hp,yl,Ml,Sl,f),s&&(u.uv=gs.getInterpolatedAttribute(s,a,l,c,f,new oe)),r&&(u.uv1=gs.getInterpolatedAttribute(r,a,l,c,f,new oe)),o&&(u.normal=gs.getInterpolatedAttribute(o,a,l,c,f,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new C,materialIndex:0};gs.getNormal(yl,Ml,Sl,h.normal),u.face=h,u.barycoord=f}return u}var Wo=new ut,Vp=new ut,Gp=new ut,$x=new ut,Wp=new ze,El=new C,yh=new _n,Xp=new ze,Mh=new Vs,ra=class extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,El),this.boundingBox.expandByPoint(El)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,El),this.boundingSphere.expandByPoint(El)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yh.copy(this.boundingSphere),yh.applyMatrix4(s),e.ray.intersectsSphere(yh)!==!1&&(Xp.copy(s).invert(),Mh.copy(e.ray).applyMatrix4(Xp),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Vp.fromBufferAttribute(s.attributes.skinIndex,e),Gp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Wo.copy(t),t.set(0,0,0,0)):(Wo.set(...t,1),t.set(0,0,0)),Wo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Gp.getComponent(r);if(o!==0){let a=Vp.getComponent(r);Wp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($x.copy(Wo).applyMatrix4(Wp),o)}}return t.isVector4&&(t.w=Wo.w),t.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wr=class extends vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=kt,u=kt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qp=new ze,jx=new ze,oa=class i{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:jx;qp.multiplyMatrices(a,t[r]),qp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wr(t,e,e,qn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Pe("Skeleton: No bone found with UUID:",r),o=new Gr),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Yi=class extends at{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new ze,Yp=new ze,Al=[],Zp=new fn,Qx=new ze,Xo=new qe,qo=new _n,di=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),Zp.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(Zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),qo.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),Yp.multiplyMatrices(n,Rr),Xo.matrixWorld=Yp,Xo.raycast(e,Al);for(let o=0,a=Al.length;o<a;o++){let l=Al[o];l.instanceId=r,l.object=this,t.push(l)}Al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,wc,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new _n,e_=new oe(.5,.5),Rl=new C,Xr=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],T=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-u,g-p,b-x).normalize(),s[1].setComponents(c+o,d+u,g+p,b+x).normalize(),s[2].setComponents(c+a,d+f,g+v,b+T).normalize(),s[3].setComponents(c-a,d-f,g-v,b-T).normalize(),n)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,d-h,g-m,b-_).normalize();else if(s[4].setComponents(c-l,d-h,g-m,b-_).normalize(),t===hi)s[5].setComponents(c+l,d+h,g+m,b+_).normalize();else if(t===Fr)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=e_.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Rl.x=s.normal.x>0?e.max.x:e.min.x,Rl.y=s.normal.y>0?e.max.y:e.min.y,Rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qr=class extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kl=new C,Jl=new C,Kp=new ze,Yo=new Vs,Cl=new _n,Sh=new C,Jp=new C,Gs=class extends Ut{constructor(e=new lt,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Kl.fromBufferAttribute(t,s-1),Jl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kl.distanceTo(Jl);e.setAttribute("lineDistance",new et(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(s),Cl.radius+=r,e.ray.intersectsSphere(Cl)===!1)return;Kp.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(Kp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=c){let g=u.getX(v),x=u.getX(v+1),T=Il(this,e,Yo,l,g,x,v);T&&t.push(T)}if(this.isLineLoop){let v=u.getX(p-1),m=u.getX(d),g=Il(this,e,Yo,l,v,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=c){let g=Il(this,e,Yo,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=Il(this,e,Yo,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Il(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Kl.fromBufferAttribute(a,s),Jl.fromBufferAttribute(a,r),t.distanceSqToSegment(Kl,Jl,Sh,Jp)>n)return;Sh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sh);if(!(c<e.near||c>e.far))return{distance:c,point:Jp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var $p=new C,jp=new C,aa=class extends Gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$p.fromBufferAttribute(t,s),jp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$p.distanceTo(jp);e.setAttribute("lineDistance",new et(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends Gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yr=class extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qp=new ze,Ih=new Vs,Pl=new _n,Ll=new C,ca=class extends Ut{constructor(e=new lt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(s),Pl.radius+=r,e.ray.intersectsSphere(Pl)===!1)return;Qp.copy(s).invert(),Ih.copy(e.ray).applyMatrix4(Qp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,v=d;p<v;p++){let m=c.getX(p);Ll.fromBufferAttribute(f,m),em(Ll,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,v=d;p<v;p++)Ll.fromBufferAttribute(f,p),em(Ll,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function em(i,e,t,n,s,r,o){let a=Ih.distanceSqToPoint(i);if(a<t){let l=new C;Ih.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ua=class extends vt{constructor(e=[],t=vs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var wi=class extends vt{constructor(e,t,n=Wn,s,r,o,a=kt,l=kt,c,u=bi,f=1){if(u!==bi&&u!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$l=class extends wi{constructor(e,t=Wn,n=vs,s,r,o=kt,a=kt,l,c=bi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zr=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function p(v,m,g,x,T,_,b,w,R,M,E){let I=_/R,N=b/M,F=_/2,k=b/2,L=w/2,B=R+1,X=M+1,W=0,se=0,q=new C;for(let Q=0;Q<X;Q++){let ne=Q*N-k;for(let Ne=0;Ne<B;Ne++){let we=Ne*I-F;q[v]=we*x,q[m]=ne*T,q[g]=L,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=w>0?1:-1,u.push(q.x,q.y,q.z),f.push(Ne/R),f.push(1-Q/M),W+=1}}for(let Q=0;Q<M;Q++)for(let ne=0;ne<R;ne++){let Ne=h+ne+B*Q,we=h+ne+B*(Q+1),pt=h+(ne+1)+B*(Q+1),nt=h+(ne+1)+B*Q;l.push(Ne,we,nt),l.push(we,pt,nt),se+=6}a.addGroup(d,se,E),d+=se,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Kr=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jr=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],p=0,v=[],m=n/2,g=0;x(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function x(){let _=new C,b=new C,w=0,R=(t-e)/n;for(let M=0;M<=r;M++){let E=[],I=M/r,N=I*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,L=k*l+a,B=Math.sin(L),X=Math.cos(L);b.x=N*B,b.y=-I*n+m,b.z=N*X,f.push(b.x,b.y,b.z),_.set(B,R,X).normalize(),h.push(_.x,_.y,_.z),d.push(k,1-I),E.push(p++)}v.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let I=v[E][M],N=v[E+1][M],F=v[E+1][M+1],k=v[E][M+1];(e>0||E!==0)&&(u.push(I,N,k),w+=3),(t>0||E!==r-1)&&(u.push(N,F,k),w+=3)}c.addGroup(g,w,0),g+=w}function T(_){let b=p,w=new oe,R=new C,M=0,E=_===!0?e:t,I=_===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*I,0),h.push(0,I,0),d.push(.5,.5),p++;let N=p;for(let F=0;F<=s;F++){let L=F/s*l+a,B=Math.cos(L),X=Math.sin(L);R.x=E*X,R.y=m*I,R.z=E*B,f.push(R.x,R.y,R.z),h.push(0,I,0),w.x=B*.5+.5,w.y=X*.5*I+.5,d.push(w.x,w.y),p++}for(let F=0;F<s;F++){let k=b+F,L=N+F;_===!0?u.push(L,L+1,k):u.push(L+1,L,k),M+=3}c.addGroup(g,M,_===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new ze;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jl=class extends $r{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var tm=new C,nm=new C,bh=new uf,Th=new uf,wh=new uf,Ql=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(nm.subVectors(s[0],s[1]).add(s[0]),c=nm);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(tm.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=tm),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),bh.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,v,m),Th.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,v,m),wh.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Th.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),wh.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(bh.calc(l),Th.calc(l),wh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function im(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function t_(i,e){let t=1-i;return t*t*e}function n_(i,e){return 2*(1-i)*i*e}function i_(i,e){return i*i*e}function $o(i,e,t,n){return t_(i,e)+n_(i,t)+i_(i,n)}function s_(i,e){let t=1-i;return t*t*t*e}function r_(i,e){let t=1-i;return 3*t*t*i*e}function o_(i,e){return 3*(1-i)*i*i*e}function a_(i,e){return i*i*i*e}function jo(i,e,t,n,s){return s_(i,e)+r_(i,t)+o_(i,n)+a_(i,s)}var fa=class extends Hn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jo(e,s.x,r.x,o.x,a.x),jo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Hn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jo(e,s.x,r.x,o.x,a.x),jo(e,s.y,r.y,o.y,a.y),jo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends Hn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Hn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Hn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Hn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y),$o(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(im(a,l.x,c.x,u.x,f.x),im(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Ph=Object.freeze({__proto__:null,ArcCurve:jl,CatmullRomCurve3:Ql,CubicBezierCurve:fa,CubicBezierCurve3:ec,EllipseCurve:$r,LineCurve:da,LineCurve3:tc,QuadraticBezierCurve:pa,QuadraticBezierCurve3:nc,SplineCurve:ma}),ic=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ph[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ph[s.type]().fromJSON(s))}return this}},ga=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new da(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new pa(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new fa(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new $r(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jr=class extends ga{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ga().fromJSON(s))}return this}};function l_(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Qm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=d_(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<s;h+=t){let d=i[h],p=i[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return xa(r,o,t,a,l,c,0),o}function Qm(i,e,t,n,s){let r;if(s===T_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=sm(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=sm(o/n|0,i[o],i[o+1],r);return r&&Qr(r,r.next)&&(va(r),r=r.next),r}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&__(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?u_(i,n,s,r):c_(i)){e.push(l.i,i.i,c.i),va(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=h_(Ws(i),e),xa(i,e,t,n,s,r,2)):o===2&&f_(i,e,t,n,s,r):xa(Ws(i),e,t,n,s,r,1);break}}}function c_(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Zo(s,a,r,l,o,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,f,h),v=Math.max(a,l,c),m=Math.max(u,f,h),g=Lh(d,p,e,t,n),x=Lh(v,m,e,t,n),T=i.prevZ,_=i.nextZ;for(;T&&T.z>=g&&_&&_.z<=x;){if(T.x>=d&&T.x<=v&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&Zo(a,u,l,f,c,h,T.x,T.y)&&Bt(T.prev,T,T.next)>=0||(T=T.prevZ,_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Zo(a,u,l,f,c,h,_.x,_.y)&&Bt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;T&&T.z>=g;){if(T.x>=d&&T.x<=v&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&Zo(a,u,l,f,c,h,T.x,T.y)&&Bt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Zo(a,u,l,f,c,h,_.x,_.y)&&Bt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function h_(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Qr(n,s)&&t0(n,t,t.next,s)&&_a(n,s)&&_a(s,n)&&(e.push(n.i,t.i,s.i),va(t),va(t.next),t=i=s),t=t.next}while(t!==i);return Ws(t)}function f_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M_(o,a)){let l=n0(o,a);o=Ws(o,o.next),l=Ws(l,l.next),xa(o,e,t,n,s,r,0),xa(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function d_(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Qm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(y_(c))}s.sort(p_);for(let r=0;r<s.length;r++)t=m_(s[r],t);return t}function p_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function m_(i,e){let t=g_(i,e);if(!t)return e;let n=n0(t,i);return Ws(n,n.next),Ws(t,t.next)}function g_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Qr(i,t))return t;do{if(Qr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&e0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);_a(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&x_(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function x_(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function __(i,e,t,n){let s=i;do s.z===0&&(s.z=Lh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v_(s)}function v_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Lh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function y_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function e0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Zo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&e0(i,e,t,n,s,r,o,a)}function M_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!S_(i,e)&&(_a(i,e)&&_a(e,i)&&b_(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Qr(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qr(i,e){return i.x===e.x&&i.y===e.y}function t0(i,e,t,n){let s=Dl(Bt(i,e,t)),r=Dl(Bt(i,e,n)),o=Dl(Bt(t,n,i)),a=Dl(Bt(t,n,e));return!!(s!==r&&o!==a||s===0&&Nl(i,t,e)||r===0&&Nl(i,n,e)||o===0&&Nl(t,i,n)||a===0&&Nl(t,e,n))}function Nl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Dl(i){return i>0?1:i<0?-1:0}function S_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&t0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _a(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function b_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function n0(i,e){let t=Nh(i.i,i.x,i.y),n=Nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sm(i,e,t,n){let s=Nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function va(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function T_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Dh=class{static triangulate(e,t,n=2){return l_(e,t,n)}},Fs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rm(e),om(n,e);let o=e.length;t.forEach(rm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,om(n,t[l]);let a=Dh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rm(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function om(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ya=class i extends lt{constructor(e=new jr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:w_,T,_=!1,b,w,R,M;if(g){T=g.getSpacedPoints(u),_=!0,h=!1;let te=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,te),w=new C,R=new C,M=new C}h||(m=0,d=0,p=0,v=0);let E=a.extractPoints(c),I=E.shape,N=E.holes;if(!Fs.isClockWise(I)){I=I.reverse();for(let te=0,re=N.length;te<re;te++){let ae=N[te];Fs.isClockWise(ae)&&(N[te]=ae.reverse())}}function k(te){let ae=10000000000000001e-36,le=te[0];for(let he=1;he<=te.length;he++){let Be=he%te.length,Oe=te[Be],We=Oe.x-le.x,Ye=Oe.y-le.y,P=We*We+Ye*Ye,mt=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(le.x),Math.abs(le.y)),it=ae*mt*mt;if(P<=it){te.splice(Be,1),he--;continue}le=Oe}}k(I),N.forEach(k);let L=N.length,B=I;for(let te=0;te<L;te++){let re=N[te];I=I.concat(re)}function X(te,re,ae){return re||Ve("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(re,ae)}let W=I.length;function se(te,re,ae){let le,he,Be,Oe=te.x-re.x,We=te.y-re.y,Ye=ae.x-te.x,P=ae.y-te.y,mt=Oe*Oe+We*We,it=Oe*P-We*Ye;if(Math.abs(it)>Number.EPSILON){let A=Math.sqrt(mt),y=Math.sqrt(Ye*Ye+P*P),O=re.x-We/A,V=re.y+Oe/A,Y=ae.x-P/y,ce=ae.y+Ye/y,ue=((Y-O)*P-(ce-V)*Ye)/(Oe*P-We*Ye);le=O+Oe*ue-te.x,he=V+We*ue-te.y;let K=le*le+he*he;if(K<=2)return new oe(le,he);Be=Math.sqrt(K/2)}else{let A=!1;Oe>Number.EPSILON?Ye>Number.EPSILON&&(A=!0):Oe<-Number.EPSILON?Ye<-Number.EPSILON&&(A=!0):Math.sign(We)===Math.sign(P)&&(A=!0),A?(le=-We,he=Oe,Be=Math.sqrt(mt)):(le=Oe,he=We,Be=Math.sqrt(mt/2))}return new oe(le/Be,he/Be)}let q=[];for(let te=0,re=B.length,ae=re-1,le=te+1;te<re;te++,ae++,le++)ae===re&&(ae=0),le===re&&(le=0),q[te]=se(B[te],B[ae],B[le]);let Q=[],ne,Ne=q.concat();for(let te=0,re=L;te<re;te++){let ae=N[te];ne=[];for(let le=0,he=ae.length,Be=he-1,Oe=le+1;le<he;le++,Be++,Oe++)Be===he&&(Be=0),Oe===he&&(Oe=0),ne[le]=se(ae[le],ae[Be],ae[Oe]);Q.push(ne),Ne=Ne.concat(ne)}let we;if(m===0)we=Fs.triangulateShape(B,N);else{let te=[],re=[];for(let ae=0;ae<m;ae++){let le=ae/m,he=d*Math.cos(le*Math.PI/2),Be=p*Math.sin(le*Math.PI/2)+v;for(let Oe=0,We=B.length;Oe<We;Oe++){let Ye=X(B[Oe],q[Oe],Be);_e(Ye.x,Ye.y,-he),le===0&&te.push(Ye)}for(let Oe=0,We=L;Oe<We;Oe++){let Ye=N[Oe];ne=Q[Oe];let P=[];for(let mt=0,it=Ye.length;mt<it;mt++){let A=X(Ye[mt],ne[mt],Be);_e(A.x,A.y,-he),le===0&&P.push(A)}le===0&&re.push(P)}}we=Fs.triangulateShape(te,re)}let pt=we.length,nt=p+v;for(let te=0;te<W;te++){let re=h?X(I[te],Ne[te],nt):I[te];_?(R.copy(b.normals[0]).multiplyScalar(re.x),w.copy(b.binormals[0]).multiplyScalar(re.y),M.copy(T[0]).add(R).add(w),_e(M.x,M.y,M.z)):_e(re.x,re.y,0)}for(let te=1;te<=u;te++)for(let re=0;re<W;re++){let ae=h?X(I[re],Ne[re],nt):I[re];_?(R.copy(b.normals[te]).multiplyScalar(ae.x),w.copy(b.binormals[te]).multiplyScalar(ae.y),M.copy(T[te]).add(R).add(w),_e(M.x,M.y,M.z)):_e(ae.x,ae.y,f/u*te)}for(let te=m-1;te>=0;te--){let re=te/m,ae=d*Math.cos(re*Math.PI/2),le=p*Math.sin(re*Math.PI/2)+v;for(let he=0,Be=B.length;he<Be;he++){let Oe=X(B[he],q[he],le);_e(Oe.x,Oe.y,f+ae)}for(let he=0,Be=N.length;he<Be;he++){let Oe=N[he];ne=Q[he];for(let We=0,Ye=Oe.length;We<Ye;We++){let P=X(Oe[We],ne[We],le);_?_e(P.x,P.y+T[u-1].y,T[u-1].x+ae):_e(P.x,P.y,f+ae)}}}ht(),J();function ht(){let te=s.length/3;if(h){let re=0,ae=W*re;for(let le=0;le<pt;le++){let he=we[le];He(he[2]+ae,he[1]+ae,he[0]+ae)}re=u+m*2,ae=W*re;for(let le=0;le<pt;le++){let he=we[le];He(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let re=0;re<pt;re++){let ae=we[re];He(ae[2],ae[1],ae[0])}for(let re=0;re<pt;re++){let ae=we[re];He(ae[0]+W*u,ae[1]+W*u,ae[2]+W*u)}}n.addGroup(te,s.length/3-te,0)}function J(){let te=s.length/3,re=0;ee(B,re),re+=B.length;for(let ae=0,le=N.length;ae<le;ae++){let he=N[ae];ee(he,re),re+=he.length}n.addGroup(te,s.length/3-te,1)}function ee(te,re){let ae=te.length;for(;--ae>=0;){let le=ae,he=ae-1;he<0&&(he=te.length-1);for(let Be=0,Oe=u+m*2;Be<Oe;Be++){let We=W*Be,Ye=W*(Be+1),P=re+le+We,mt=re+he+We,it=re+he+Ye,A=re+le+Ye;Se(P,mt,it,A)}}}function _e(te,re,ae){l.push(te),l.push(re),l.push(ae)}function He(te,re,ae){Ge(te),Ge(re),Ge(ae);let le=s.length/3,he=x.generateTopUV(n,s,le-3,le-2,le-1);yt(he[0]),yt(he[1]),yt(he[2])}function Se(te,re,ae,le){Ge(te),Ge(re),Ge(le),Ge(re),Ge(ae),Ge(le);let he=s.length/3,Be=x.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);yt(Be[0]),yt(Be[1]),yt(Be[3]),yt(Be[1]),yt(Be[2]),yt(Be[3])}function Ge(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function yt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return E_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ph[s.type]().fromJSON(s)),new i(n,e.options)}},w_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-f),new oe(h,1-p),new oe(v,1-g)]:[new oe(a,1-l),new oe(u,1-f),new oe(d,1-p),new oe(m,1-g)]}};function E_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pn=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],v=[],m=[];for(let g=0;g<u;g++){let x=g*h-o;for(let T=0;T<c;T++){let _=T*f-r;p.push(_,-x,0),v.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let T=x+c*g,_=x+c*(g+1),b=x+1+c*(g+1),w=x+1+c*g;d.push(T,_,w),d.push(_,b,w)}this.setIndex(d),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ma=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new C,p=new oe;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let g=r+m/n*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}f+=h}for(let v=0;v<s;v++){let m=v*(n+1);for(let g=0;g<n;g++){let x=g+m,T=x,_=x+n+1,b=x+n+2,w=x+1;a.push(T,_,w),a.push(_,b,w)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var eo=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new C,d=new C,p=new C;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(g/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,x=(s+1)*(v-1)+m-1,T=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(g,x,_),l.push(x,T,_)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(am(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(am(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}function am(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function A_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var i0={clone:er,merge:vn},R_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sc=class extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xs=class extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ln=class extends Xs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vn=class extends en{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=_c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},to=class extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function I_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function P_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends Ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Us:r=e,a=2*t-n;break;case Qo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Us:o=e,l=2*n-t;break;case Qo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),v=p*p,m=v*p,g=-h*m+2*h*v-h*p,x=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*p+1,T=(-1-d)*m+(1.5+d)*v+.5*p,_=d*m-d*v;for(let b=0;b!==a;++b)r[b]=g*o[u+b]+x*o[c+b]+T*o[l+b]+_*o[f+b];return r}},Sa=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},ac=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},lc=class extends Ei{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(s-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=d*h+p*2,x=f[g],T=f[g+1],_=e*h+p*2,b=u[_],w=u[_+1],R=N_(n,t,x,b,s);r[p]=s0(R,v,T,w,m)}return r}};function s0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function L_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function N_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=s0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=L_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),kl(e.settings)&&(n.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break;case Ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;kl(this.settings)&&(cm(this.settings.inTangents,e),cm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let v=t[f+p];if(v!==t[h+p]||v!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,kl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=ks;var Zi=class extends Nn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Bs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};ba.prototype.ValueTypeName="color";var Ki=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Ki.prototype.ValueTypeName="number";var cc=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Pt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ji=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}};Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Nn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Bs;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};xs.prototype.ValueTypeName="vector";var qs=class{constructor(e="",t=-1,n=[],s=au){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(U_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=I_(l);l=lm(l,1,u),c=lm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ki(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],h=s[f];h||(s[f]=h=[]),h.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function D_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return ba;case"quaternion":return Ji;case"bool":case"boolean":return Zi;case"string":return $i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function U_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=D_(i.type);if(i.times===void 0){let n=[],s=[];P_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),kl(i.settings)&&(t.settings={inTangents:ms(i.settings.inTangents,Float32Array),outTangents:ms(i.settings.outTangents,Float32Array)}),t}var Si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(um(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!um(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function um(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}var uc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},r0=new uc,Ai=class{constructor(e){this.manager=e!==void 0?e:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi={},Uh=class extends Error{constructor(e,t){super(e),this.response=t}},no=class extends Ai{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:s});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Xi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0,v=0,m=new ReadableStream({start(g){x();function x(){f.read().then(({done:T,value:_})=>{if(T)g.close();else{v+=_.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let w=0,R=u.length;w<R;w++){let M=u[w];M.onProgress&&M.onProgress(b)}g.enqueue(_),x()}},T=>{g.error(T)})}}});return new Response(m)}else throw new Uh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Si.add(`file:${e}`,c);let u=Xi[e];delete Xi[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=new WeakMap,hc=class extends Ai{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Cr.get(o);f===void 0&&(f=[],Cr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Or("img");function l(){u(),t&&t(this);let f=Cr.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Si.remove(`image:${e}`);let h=Cr.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(f)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ta=class extends Ai{constructor(e){super(e)}load(e,t,n,s){let r=new vt,o=new hc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ys=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wa=class extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eh=new ze,hm=new C,fm=new C,io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(hm),fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ul=new C,Fl=new Pt,Mi=new C,Ea=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ul,Fl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new C,dm=new oe,pm=new oe,Kt=class extends Ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,dm,pm),t.subVectors(pm,dm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fh=class extends io{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Aa=class extends Ys{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Oh=class extends io{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},Ra=class extends Ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Dn=class extends Ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bh=class extends io{constructor(){super(new Dn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ji=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ah=new WeakMap,Ca=class extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Ah.has(o)===!0?(s&&s(Ah.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ah.set(l,c),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=-90,Pr=1,fc=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Ir,Pr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Ir,Pr,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Ir,Pr,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Ir,Pr,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Ir,Pr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Ir,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},dc=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Pt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Pt.multiplyQuaternionsFlat(e,o,e,t,e,n),Pt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},ff="\\[\\]\\.:\\/",F_=new RegExp("["+ff+"]","g"),df="[^"+ff+"]",O_="[^"+ff.replace("\\.","")+"]",B_=/((?:WC+[\/:])*)/.source.replace("WC",df),k_=/(WCOD+)?/.source.replace("WCOD",O_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),H_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),V_=new RegExp("^"+B_+k_+z_+H_+"$"),G_=["material","materials","bones","map"],kh=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(e){let t=V_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);G_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=kh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ds,endingEnd:Ds};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ou,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Bm:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case au:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Om;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===ru){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Us,s.endingEnd=Us):(e?s.endingStart=this.zeroSlopeAtStart?Us:Ds:s.endingStart=Qo,t?s.endingEnd=this.zeroSlopeAtEnd?Us:Ds:s.endingEnd=Qo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},W_=new Float32Array(1),Ks=class extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){let h=s[f],d=h.name,p=u[d];if(p!==void 0)++p.referenceCount,o[f]=p;else{if(p=o[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let v=t&&t._propertyBindings[f].binding.parsedPath;p=new pc(Tt.create(n,d,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[f]=p}a[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Sa(new Float32Array(2),new Float32Array(2),1,W_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?qs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=au),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new mc(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?qs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var vf=class vf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};vf.prototype.isMatrix2=!0;var zh=vf;function pf(i,e,t,n){let s=X_(n);switch(t){case sf:return i*e;case wc:return i*e/s.components*s.byteLength;case Ec:return i*e/s.components*s.byteLength;case Ms:return i*e*2/s.components*s.byteLength;case Ac:return i*e*2/s.components*s.byteLength;case rf:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case Rc:return i*e*4/s.components*s.byteLength;case Na:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Lc:return Math.max(i,16)*Math.max(e,8)/4;case Cc:case Pc:return Math.max(i,8)*Math.max(e,8)/2;case Nc:case Dc:case Fc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Oa:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qc:case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ba:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(i){switch(i){case Un:case Qh:return{byteLength:1,components:1};case ao:case ef:case mi:return{byteLength:2,components:1};case bc:case Tc:return{byteLength:2,components:4};case Wn:case Sc:case Xn:return{byteLength:4,components:1};case tf:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function A0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Y_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ev=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ov=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,av=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Z_,alphahash_pars_fragment:K_,alphamap_fragment:J_,alphamap_pars_fragment:$_,alphatest_fragment:j_,alphatest_pars_fragment:Q_,aomap_fragment:ev,aomap_pars_fragment:tv,batching_pars_vertex:nv,batching_vertex:iv,begin_vertex:sv,beginnormal_vertex:rv,bsdfs:ov,iridescence_fragment:av,bumpmap_pars_fragment:lv,clipping_planes_fragment:cv,clipping_planes_pars_fragment:uv,clipping_planes_pars_vertex:hv,clipping_planes_vertex:fv,color_fragment:dv,color_pars_fragment:pv,color_pars_vertex:mv,color_vertex:gv,common:xv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:vv,displacementmap_pars_vertex:yv,displacementmap_vertex:Mv,emissivemap_fragment:Sv,emissivemap_pars_fragment:bv,colorspace_fragment:Tv,colorspace_pars_fragment:wv,envmap_fragment:Ev,envmap_common_pars_fragment:Av,envmap_pars_fragment:Rv,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:zv,envmap_vertex:Iv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Nv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Uv,lightmap_pars_fragment:Fv,lights_lambert_fragment:Ov,lights_lambert_pars_fragment:Bv,lights_pars_begin:kv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Gv,lights_phong_pars_fragment:Wv,lights_physical_fragment:Xv,lights_physical_pars_fragment:qv,lights_fragment_begin:Yv,lights_fragment_maps:Zv,lights_fragment_end:Kv,lightprobes_pars_fragment:Jv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:sy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:uy,morphtarget_vertex:hy,normal_fragment_begin:fy,normal_fragment_maps:dy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:yy,iridescence_pars_fragment:My,opaque_fragment:Sy,packing:by,premultiplied_alpha_fragment:Ty,project_vertex:wy,dithering_fragment:Ey,dithering_pars_fragment:Ay,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Py,shadowmap_vertex:Ly,shadowmask_pars_fragment:Ny,skinbase_vertex:Dy,skinning_pars_vertex:Uy,skinning_vertex:Fy,skinnormal_vertex:Oy,specularmap_fragment:By,specularmap_pars_fragment:ky,tonemapping_fragment:zy,tonemapping_pars_fragment:Hy,transmission_fragment:Vy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:Zy,background_frag:Ky,backgroundCube_vert:Jy,backgroundCube_frag:$y,cube_vert:jy,cube_frag:Qy,depth_vert:eM,depth_frag:tM,distance_vert:nM,distance_frag:iM,equirect_vert:sM,equirect_frag:rM,linedashed_vert:oM,linedashed_frag:aM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:fM,meshmatcap_frag:dM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:xM,meshphysical_vert:_M,meshphysical_frag:vM,meshtoon_vert:yM,meshtoon_frag:MM,points_vert:SM,points_frag:bM,shadow_vert:TM,shadow_frag:wM,sprite_vert:EM,sprite_frag:AM},xe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Li={basic:{uniforms:vn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:vn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:vn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:vn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:vn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Le(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:vn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:vn([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:vn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:vn([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:vn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:vn([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:vn([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:vn([xe.lights,xe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Li.physical={uniforms:vn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var uu={r:0,b:0,g:0},RM=new ze,R0=new Xe;R0.set(-1,0,0,0,1,0,0,0,1);function CM(i,e,t,n,s,r){let o=new Le(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){let _=x.backgroundBlurriness>0;T=e.get(T,_)}return T}function p(x){let T=!1,_=d(x);_===null?m(o,a):_&&_.isColor&&(m(_,1),T=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,T){let _=d(T);_&&(_.isCubeTexture||_.mapping===La)?(c===void 0&&(c=new qe(new Zr(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:er(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(R0),c.material.toneMapped=je.getTransfer(_.colorSpace)!==_t,(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new qe(new Pn(2,2),new zt({name:"BackgroundMaterial",uniforms:er(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,T){x.getRGB(uu,hf(i)),t.buffers.color.setClear(uu.r,uu.g,uu.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,T=1){o.set(x),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:v,dispose:g}}function IM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(N,F,k,L,B){let X=!1,W=f(N,L,k,F);r!==W&&(r=W,c(r.object)),X=d(N,L,k,B),X&&p(N,L,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(N,F,k,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,F,k,L){let B=L.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let W=N.isInstancedMesh===!0?N.id:0,se=X[W];se===void 0&&(se={},X[W]=se);let q=se[k.id];q===void 0&&(q={},se[k.id]=q);let Q=q[B];return Q===void 0&&(Q=h(l()),q[B]=Q),Q}function h(N){let F=[],k=[],L=[];for(let B=0;B<t;B++)F[B]=0,k[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,F,k,L){let B=r.attributes,X=F.attributes,W=0,se=k.getAttributes();for(let q in se)if(se[q].location>=0){let ne=B[q],Ne=X[q];if(Ne===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Ne=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Ne=N.instanceColor)),ne===void 0||ne.attribute!==Ne||Ne&&ne.data!==Ne.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function p(N,F,k,L){let B={},X=F.attributes,W=0,se=k.getAttributes();for(let q in se)if(se[q].location>=0){let ne=X[q];ne===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));let Ne={};Ne.attribute=ne,ne&&ne.data&&(Ne.data=ne.data),B[q]=Ne,W++}r.attributes=B,r.attributesNum=W,r.index=L}function v(){let N=r.newAttributes;for(let F=0,k=N.length;F<k;F++)N[F]=0}function m(N){g(N,0)}function g(N,F){let k=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;k[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),B[N]!==F&&(i.vertexAttribDivisor(N,F),B[N]=F)}function x(){let N=r.newAttributes,F=r.enabledAttributes;for(let k=0,L=F.length;k<L;k++)F[k]!==N[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function T(N,F,k,L,B,X,W){W===!0?i.vertexAttribIPointer(N,F,k,B,X):i.vertexAttribPointer(N,F,k,L,B,X)}function _(N,F,k,L){v();let B=L.attributes,X=k.getAttributes(),W=F.defaultAttributeValues;for(let se in X){let q=X[se];if(q.location>=0){let Q=B[se];if(Q===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let ne=Q.normalized,Ne=Q.itemSize,we=e.get(Q);if(we===void 0)continue;let pt=we.buffer,nt=we.type,ht=we.bytesPerElement,J=nt===i.INT||nt===i.UNSIGNED_INT||Q.gpuType===Sc;if(Q.isInterleavedBufferAttribute){let ee=Q.data,_e=ee.stride,He=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)g(q.location+Se,ee.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Se=0;Se<q.locationSize;Se++)T(q.location+Se,Ne/q.locationSize,nt,ne,_e*ht,(He+Ne/q.locationSize*Se)*ht,J)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)g(q.location+ee,Q.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ee=0;ee<q.locationSize;ee++)T(q.location+ee,Ne/q.locationSize,nt,ne,Ne*ht,Ne/q.locationSize*ee*ht,J)}}else if(W!==void 0){let ne=W[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(q.location,ne);break;case 3:i.vertexAttrib3fv(q.location,ne);break;case 4:i.vertexAttrib4fv(q.location,ne);break;default:i.vertexAttrib1fv(q.location,ne)}}}}x()}function b(){E();for(let N in n){let F=n[N];for(let k in F){let L=F[k];for(let B in L){let X=L[B];for(let W in X)u(X[W].object),delete X[W];delete L[B]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let k in F){let L=F[k];for(let B in L){let X=L[B];for(let W in X)u(X[W].object),delete X[W];delete L[B]}}delete n[N.id]}function R(N){for(let F in n){let k=n[F];for(let L in k){let B=k[L];if(B[N.id]===void 0)continue;let X=B[N.id];for(let W in X)u(X[W].object),delete X[W];delete B[N.id]}}}function M(N){for(let F in n){let k=n[F],L=N.isInstancedMesh===!0?N.id:0,B=k[L];if(B!==void 0){for(let X in B){let W=B[X];for(let se in W)u(W[se].object),delete W[se];delete B[X]}delete k[L],Object.keys(k).length===0&&delete n[F]}}}function E(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function PM(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function LM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let M=R===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Un&&R!==Xn&&!M&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:_,maxSamples:b,samples:w}}function NM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ci,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let x=r?0:n,T=x*4,_=g.clippingState||null;l.value=_,_=u(p,h,T,d);for(let b=0;b!==T;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=d+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,_=d;T!==v;++T,_+=4)o.copy(f[T]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var fo=4,DM=6,UM=20,FM=256,Ha=new Dn,o0=new Le,yf=null,Mf=0,Sf=0,bf=!1,OM=new C,tr=new C,fu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=OM}=r;yf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Mf,Sf),this._renderer.xr.enabled=bf,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:mi,format:qn,colorSpace:Tn,depthBuffer:!1},s=a0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BM(r)),this._blurMaterial=zM(r,e,t),this._ggxMaterial=kM(r,e,t)}return s}_compileMaterial(e){let t=new qe(new lt,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,n,s,r){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(o0),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new Zr,new Jt({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,g=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(o0),g=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):_===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));let b=this._cubeSize;ho(s,_*b,T>2?b:0,b,b),f.setRenderTarget(s),g&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vs||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ha)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-fo?n-p+fo:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ho(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(a,Ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ho(e,m,g,3*v,2*v),s.setRenderTarget(e),s.render(a,Ha)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-fo?s-this._lodMax+fo:0),h=4*(this._cubeSize-u);ho(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Ha)}};function BM(i){let e=[],t=[],n=i,s=i-fo+1+DM;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let g=0;g<f;g++){let x=g%3*2/3-1,T=g>2?0:-1,_=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];p.set(_,d*h*g);for(let b=0;b<h;b++){let w=u[b*2]*2-1,R=u[b*2+1]*2-1;g===0?tr.set(1,R,w):g===1?tr.set(-w,1,-R):g===2?tr.set(-w,R,1):g===3?tr.set(-1,R,-w):g===4?tr.set(-w,-1,R):tr.set(w,R,-1),tr.toArray(v,(g*h+b)*d)}}let m=new lt;m.setAttribute("position",new at(p,d)),m.setAttribute("outputDirection",new at(v,d)),t.push(new qe(m,null)),n>fo&&n--}return{lodMeshes:t,sizeLods:e}}function a0(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kM(i,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function zM(i,e,t){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:UM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function l0(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function c0(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var du=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zr(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Ci});r.uniforms.tEquirect.value=t;let o=new qe(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Lt),new fc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function HM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===vc||d===yc)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let v=new du(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===vc||d===yc,v=d===vs||d===js;if(p||v){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new fu(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let x=h.image;return p&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new fu(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===vc?h.mapping=vs:d===yc&&(h.mapping=js),h}function l(h){let d=0,p=6;for(let v=0;v<p;v++)h[v]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function VM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function GM(i,e,t,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,p=f.attributes.position,v=0;if(p===void 0)return;if(d!==null){let x=d.array;v=d.version;for(let T=0,_=x.length;T<_;T+=3){let b=x[T+0],w=x[T+1],R=x[T+2];h.push(b,w,w,R,R,b)}}else{let x=p.array;v=p.version;for(let T=0,_=x.length/3-1;T<_;T+=3){let b=T+0,w=T+1,R=T+2;h.push(b,w,w,R,R,b)}}let m=new(p.count>=65535?sa:Hs)(h,1);m.version=v;let g=r.get(f);g&&e.remove(g),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function WM(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function XM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qM(i,e,t){let n=new WeakMap,s=new ut;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],T=0;d===!0&&(T=1),p===!0&&(T=2),v===!0&&(T=3);let _=a.attributes.position.count*T,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*b*4*f),R=new na(w,_,b,f);R.type=Xn,R.needsUpdate=!0;let M=T*4;for(let I=0;I<f;I++){let N=m[I],F=g[I],k=x[I],L=_*b*4*I;for(let B=0;B<N.count;B++){let X=B*M;d===!0&&(s.fromBufferAttribute(N,B),w[L+X+0]=s.x,w[L+X+1]=s.y,w[L+X+2]=s.z,w[L+X+3]=0),p===!0&&(s.fromBufferAttribute(F,B),w[L+X+4]=s.x,w[L+X+5]=s.y,w[L+X+6]=s.z,w[L+X+7]=0),v===!0&&(s.fromBufferAttribute(k,B),w[L+X+8]=s.x,w[L+X+9]=s.y,w[L+X+10]=s.z,w[L+X+11]=k.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new oe(_,b)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function YM(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var ZM={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[Zh]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function KM(i,e,t,n,s,r){let o=new xn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new lt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));let u=new sc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new qe(c,u),h=new Dn(-1,1,1,-1,0,1),d=null,p=null,v=!1,m,g=null,x=[],T=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let w=0;w<x.length;w++){let R=x[w];R.setSize&&R.setSize(_,b)}},this.setEffects=function(_){x=_,T=x.length>0&&x[0].isRenderPass===!0;let b=o.width,w=o.height;x.length>0&&a===null&&(a=new xn(b,w,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new xn(b,w,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let M=x[R];M.setSize&&M.setSize(b,w)}},this.begin=function(_,b){if(v||_.toneMapping===pi&&x.length===0)return!1;if(g=b,b!==null){let w=b.width,R=b.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return T===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=pi,!0},this.hasRenderPass=function(){return T},this.end=function(_,b){_.toneMapping=m,v=!0;let w=o,R=a;for(let M=0;M<x.length;M++){let E=x[M];E.enabled!==!1&&(E.render(_,R,w,b),E.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,u.defines={},je.getTransfer(d)===_t&&(u.defines.SRGB_TRANSFER="");let M=ZM[p];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(g),_.render(f,h),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var C0=new vt,Ef=new wi(1,1),I0=new na,P0=new Zl,L0=new ua,u0=[],h0=[],f0=new Float32Array(16),d0=new Float32Array(9),p0=new Float32Array(4);function mo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=u0[s];if(r===void 0&&(r=new Float32Array(s),u0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gu(i,e){let t=h0[e];t===void 0&&(t=new Int32Array(e),h0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function JM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function QM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function eS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;p0.set(n),i.uniformMatrix2fv(this.addr,!1,p0),nn(t,n)}}function tS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;d0.set(n),i.uniformMatrix3fv(this.addr,!1,d0),nn(t,n)}}function nS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;f0.set(n),i.uniformMatrix4fv(this.addr,!1,f0),nn(t,n)}}function iS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function rS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function oS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function aS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function hS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=t.isReversedDepthBuffer()?cu:lu,r=Ef):r=C0,t.setTexture2D(e||r,s)}function fS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||P0,s)}function dS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||L0,s)}function pS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||I0,s)}function mS(i){switch(i){case 5126:return JM;case 35664:return $M;case 35665:return jM;case 35666:return QM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}function gS(i,e){i.uniform1fv(this.addr,e)}function xS(i,e){let t=mo(e,this.size,2);i.uniform2fv(this.addr,t)}function _S(i,e){let t=mo(e,this.size,3);i.uniform3fv(this.addr,t)}function vS(i,e){let t=mo(e,this.size,4);i.uniform4fv(this.addr,t)}function yS(i,e){let t=mo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function MS(i,e){let t=mo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function SS(i,e){let t=mo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bS(i,e){i.uniform1iv(this.addr,e)}function TS(i,e){i.uniform2iv(this.addr,e)}function wS(i,e){i.uniform3iv(this.addr,e)}function ES(i,e){i.uniform4iv(this.addr,e)}function AS(i,e){i.uniform1uiv(this.addr,e)}function RS(i,e){i.uniform2uiv(this.addr,e)}function CS(i,e){i.uniform3uiv(this.addr,e)}function IS(i,e){i.uniform4uiv(this.addr,e)}function PS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ef:o=C0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function LS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||P0,r[o])}function NS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||L0,r[o])}function DS(i,e,t){let n=this.cache,s=e.length,r=gu(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||I0,r[o])}function US(i){switch(i){case 5126:return gS;case 35664:return xS;case 35665:return _S;case 35666:return vS;case 35674:return yS;case 35675:return MS;case 35676:return SS;case 5124:case 35670:return bS;case 35667:case 35671:return TS;case 35668:case 35672:return wS;case 35669:case 35673:return ES;case 5125:return AS;case 36294:return RS;case 36295:return CS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return DS}}var Af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mS(t.type)}},Rf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=US(t.type)}},Cf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Tf=/(\w+)(\])?(\[|\.)?/g;function m0(i,e){i.seq.push(e),i.map[e.id]=e}function FS(i,e,t){let n=i.name,s=n.length;for(Tf.lastIndex=0;;){let r=Tf.exec(n),o=Tf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){m0(t,c===void 0?new Af(a,i,e):new Rf(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Cf(a),m0(t,f)),t=f}}}var po=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);FS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function g0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var OS=37297,BS=0;function kS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var x0=new Xe;function zS(i){je._getMatrix(x0,je.workingColorSpace,i);let e=`mat3( ${x0.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+kS(i.getShaderSource(e),a)}else return r}function HS(i,e){let t=zS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var VS={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[Zh]:"ACESFilmic",[Jh]:"AgX",[$h]:"Neutral",[Kh]:"Custom"};function GS(i,e){let t=VS[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hu=new C;function WS(){je.getLuminanceCoefficients(hu);let i=hu.x.toFixed(4),e=hu.y.toFixed(4),t=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function qS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ga(i){return i!==""}function v0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZS=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(i){return i.replace(ZS,JS)}var KS=new Map;function JS(i,e){let t=$e[e];if(t===void 0){let n=KS.get(e);if(n!==void 0)t=$e[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return If(t)}var $S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(i){return i.replace($S,jS)}function jS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function S0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var QS={[Ia]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function eb(i){return QS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tb={[vs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function nb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ib={[js]:"ENVMAP_MODE_REFRACTION"};function sb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ib[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rb={[_c]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Um]:"ENVMAP_BLENDING_ADD"};function ob(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rb[i.combine]||"ENVMAP_BLENDING_NONE"}function ab(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=eb(t),c=nb(t),u=sb(t),f=ob(t),h=ab(t),d=XS(t),p=qS(r),v=s.createProgram(),m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ga).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ga).join(`
`),g.length>0&&(g+=`
`)):(m=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),g=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?$e.tonemapping_pars_fragment:"",t.toneMapping!==pi?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,HS("linearToOutputTexel",t.outputColorSpace),WS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=If(o),o=v0(o,t),o=y0(o,t),a=If(a),a=v0(a,t),a=y0(a,t),o=M0(o),a=M0(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let T=x+m+o,_=x+g+a,b=g0(s,s.VERTEX_SHADER,T),w=g0(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(N){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(w)||"",B=F.trim(),X=k.trim(),W=L.trim(),se=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,w);else{let Q=_0(s,b,"vertex"),ne=_0(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+Q+`
`+ne)}else B!==""?Pe("WebGLProgram: Program Info Log:",B):(X===""||W==="")&&(q=!1);q&&(N.diagnostics={runnable:se,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(b),s.deleteShader(w),M=new po(s,v),E=YS(s,v)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,OS)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}var cb=0,Pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lf(e),t.set(e,n)),n}},Lf=class{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}};function ub(i){return i===Ms||i===Oa||i===Ba}function hb(i,e,t,n,s,r){let o=new ia,a=new Pf,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,E,I,N,F,k){let L=N.fog,B=F.geometry,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,se=e.get(M.envMap||X,W),q=se&&se.mapping===La?se.image.height:null,Q=d[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Pe("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ne=ne!==void 0?ne.length:0,we=0;B.morphAttributes.position!==void 0&&(we=1),B.morphAttributes.normal!==void 0&&(we=2),B.morphAttributes.color!==void 0&&(we=3);let pt,nt,ht,J;if(Q){let Rt=Li[Q];pt=Rt.vertexShader,nt=Rt.fragmentShader}else{pt=M.vertexShader,nt=M.fragmentShader;let Rt=a.getVertexShaderStage(M),gt=a.getFragmentShaderStage(M);a.update(M,Rt,gt),ht=Rt.id,J=gt.id}let ee=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),He=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ge=!!M.map,yt=!!M.matcap,te=!!se,re=!!M.aoMap,ae=!!M.lightMap,le=!!M.bumpMap&&M.wireframe===!1,he=!!M.normalMap,Be=!!M.displacementMap,Oe=!!M.emissiveMap,We=!!M.metalnessMap,Ye=!!M.roughnessMap,P=M.anisotropy>0,mt=M.clearcoat>0,it=M.dispersion>0,A=M.retroreflectivity>0,y=M.iridescence>0,O=M.sheen>0,V=M.transmission>0,Y=P&&!!M.anisotropyMap,ce=mt&&!!M.clearcoatMap,ue=mt&&!!M.clearcoatNormalMap,K=mt&&!!M.clearcoatRoughnessMap,j=y&&!!M.iridescenceMap,fe=y&&!!M.iridescenceThicknessMap,De=O&&!!M.sheenColorMap,ge=O&&!!M.sheenRoughnessMap,de=!!M.specularMap,Ue=!!M.specularColorMap,ke=!!M.specularIntensityMap,Ke=V&&!!M.transmissionMap,U=V&&!!M.thicknessMap,pe=!!M.gradientMap,$=!!M.alphaMap,me=M.alphaTest>0,Me=!!M.alphaHash,ie=!!M.extensions,Fe=pi;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Ce={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:nt,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:He,instancingColor:He&&F.instanceColor!==null,instancingMorph:He&&F.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:yt,envMap:te,envMapMode:te&&se.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:ae,bumpMap:le,normalMap:he,displacementMap:Be,emissiveMap:Oe,normalMapObjectSpace:he&&M.normalMapType===zm,normalMapTangentSpace:he&&M.normalMapType===za,packedNormalMap:he&&M.normalMapType===za&&ub(M.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:P,anisotropyMap:Y,clearcoat:mt,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:K,dispersion:it,retroreflection:A,iridescence:y,iridescenceMap:j,iridescenceThicknessMap:fe,sheen:O,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:de,specularColorMap:Ue,specularIntensityMap:ke,transmission:V,transmissionMap:Ke,thicknessMap:U,gradientMap:pe,opaque:M.transparent===!1&&M.blending===_s&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:me,alphaHash:Me,combine:M.combine,mapUv:Ge&&p(M.map.channel),aoMapUv:re&&p(M.aoMap.channel),lightMapUv:ae&&p(M.lightMap.channel),bumpMapUv:le&&p(M.bumpMap.channel),normalMapUv:he&&p(M.normalMap.channel),displacementMapUv:Be&&p(M.displacementMap.channel),emissiveMapUv:Oe&&p(M.emissiveMap.channel),metalnessMapUv:We&&p(M.metalnessMap.channel),roughnessMapUv:Ye&&p(M.roughnessMap.channel),anisotropyMapUv:Y&&p(M.anisotropyMap.channel),clearcoatMapUv:ce&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(M.sheenRoughnessMap.channel),specularMapUv:de&&p(M.specularMap.channel),specularColorMapUv:Ue&&p(M.specularColorMap.channel),specularIntensityMapUv:ke&&p(M.specularIntensityMap.channel),transmissionMapUv:Ke&&p(M.transmissionMap.channel),thicknessMapUv:U&&p(M.thicknessMap.channel),alphaMapUv:$&&p(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(he||P),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Ge||$),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&he===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:Oe&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ie&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&M.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(g(E,M),x(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function g(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function T(M){let E=d[M.type],I;if(E){let N=Li[E];I=i0.clone(N.uniforms)}else I=M.uniforms;return I}function _(M,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new lb(i,E,M,s),c.push(I),u.set(E,I)),I}function b(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function w(M){a.remove(M)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:R}}function fb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function db(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function b0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function T0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,v,m,g){let x=i[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},i[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=o(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=m,x.group=g),e++,x}function l(h,d,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let T=a(h,d,p,v,m,g);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(h,d,p,v,m,g){let x=a(h,d,p,v,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||db),n.length>1&&n.sort(d||b0),s.length>1&&s.sort(d||b0)}function f(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function pb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new T0,i.set(n,[o])):s>=r.length?(o=new T0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Le};break;case"SpotLight":t={position:new C,direction:new C,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xb=0;function _b(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vb(i){let e=new mb,t=gb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ze,o=new ze;function a(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,x=0,T=0,_=0,b=0,w=0,R=0,M=0,E=0,I=0;c.sort(_b);for(let F=0,k=c.length;F<k;F++){let L=c[F],B=L.color,X=L.intensity,W=L.distance,se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ms?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*X,f+=B.g*X,h+=B.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);I++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=se;let Ne=Q.getViewportCount();for(let we=0;we<Ne;we++)n.sunShadowMatrix[v+we]=Q.getMatrix(we),n.sunShadowCascade[v+we]=Q._cascadeData[we];v+=Ne,p++}n.sun[d]=q,d++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[x]=q;let Q=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,Q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=Q.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=se,R++}x++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=q,T++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Q=L.shadow,ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[_]=q,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==T||N.hemiLength!==_||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==R||N.numSpotMaps!==M||N.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=T,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,N.sunLength=d,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=T,N.hemiLength=_,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=R,N.numSpotMaps=M,N.numLightProbes=I,n.version=xb++)}function l(c,u){let f=0,h=0,d=0,p=0,v=0,m=0,g=u.matrixWorldInverse;for(let x=0,T=c.length;x<T;x++){let _=c[x];if(_.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),f++}else if(_.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function w0(i){let e=new vb(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function yb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new w0(i),e.set(s,[a])):r>=o.length?(a=new w0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Tb=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],E0=new ze,Va=new C,wf=new C;function wb(i,e,t){let n=new Xr,s=new oe,r=new oe,o=new ut,a=new to,l=new rc,c={},u=t.maxTextureSize,f={[Ri]:wn,[wn]:Ri,[an]:an},h=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Mb,fragmentShader:Sb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new lt;p.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qe(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let g=this.type;this.render=function(w,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===xm&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ia);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ci),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=g!==this.type;k&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=w.length;L<B;L++){let X=w[L],W=X.shadow;if(W===void 0){Pe("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===so){if(X.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new xn(s.x,s.y,{format:Ms,type:mi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new wi(s.x,s.y,Xn),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=bi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=kt,W.map.depthTexture.magFilter=kt}else X.isPointLight?(W.map=new du(s.x),W.map.depthTexture=new $l(s.x,Wn)):(W.map=new xn(s.x,s.y),W.map.depthTexture=new wi(s.x,s.y,Wn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=bi,this.type===Ia?(W.map.depthTexture.compareFunction=q?cu:lu,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=kt,W.map.depthTexture.magFilter=kt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,M);for(let ne=0;ne<Q;ne++){let Ne=W.getCamera(ne);if(X.isPointLight){let we=W.camera,pt=W.matrix,nt=X.distance||we.far;nt!==we.far&&(we.far=nt,we.updateProjectionMatrix()),Va.setFromMatrixPosition(X.matrixWorld),we.position.copy(Va),wf.copy(we.position),wf.add(bb[ne]),we.up.copy(Tb[ne]),we.lookAt(wf),we.updateMatrixWorld(),pt.makeTranslation(-Va.x,-Va.y,-Va.z),E0.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(E0,we.coordinateSystem,we.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(W.map),i.clear());let we=W.getViewport(ne);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),F.viewport(o)}n=W.getFrustum(ne),_(R,M,Ne,X,this.type)}W.isPointLightShadow!==!0&&this.type===so&&x(W,M),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,I,N)};function x(w,R){let M=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new xn(s.x,s.y,{format:Ms,type:mi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,M,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,M,d,v,null)}function T(w,R,M,E){let I=null,N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)I=N;else if(I=M.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=I.uuid,k=R.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let B=L[k];B===void 0&&(B=I.clone(),L[k]=B,R.addEventListener("dispose",b)),I=B}if(I.visible=R.visible,I.wireframe=R.wireframe,E===so?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=M}return I}function _(w,R,M,E,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===so)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let k=e.update(w),L=w.material;if(Array.isArray(L)){let B=k.groups;for(let X=0,W=B.length;X<W;X++){let se=B[X],q=L[se.materialIndex];if(q&&q.visible){let Q=T(w,q,E,I);w.onBeforeShadow(i,w,R,M,k,Q,se),i.renderBufferDirect(M,null,k,Q,w,se),w.onAfterShadow(i,w,R,M,k,Q,se)}}}else if(L.visible){let B=T(w,L,E,I);w.onBeforeShadow(i,w,R,M,k,B,null),i.renderBufferDirect(M,null,k,B,w,null),w.onAfterShadow(i,w,R,M,k,B,null)}}let F=w.children;for(let k=0,L=F.length;k<L;k++)_(F[k],R,M,E,I)}function b(w){w.target.removeEventListener("dispose",b);for(let M in c){let E=c[M],I=w.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function Eb(i,e){function t(){let U=!1,pe=new ut,$=null,me=new ut(0,0,0,0);return{setMask:function(Me){$!==Me&&!U&&(i.colorMask(Me,Me,Me,Me),$=Me)},setLocked:function(Me){U=Me},setClear:function(Me,ie,Fe,Ce,Rt){Rt===!0&&(Me*=Ce,ie*=Ce,Fe*=Ce),pe.set(Me,ie,Fe,Ce),me.equals(pe)===!1&&(i.clearColor(Me,ie,Fe,Ce),me.copy(pe))},reset:function(){U=!1,$=null,me.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,$=null,me=null,Me=null;return{setReversed:function(ie){if(pe!==ie){let Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;let Ce=Me;Me=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(ie){ie?ee(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ie){$!==ie&&!U&&(i.depthMask(ie),$=ie)},setFunc:function(ie){if(pe&&(ie=$m[ie]),me!==ie){switch(ie){case zl:i.depthFunc(i.NEVER);break;case Nr:i.depthFunc(i.ALWAYS);break;case Hl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Vl:i.depthFunc(i.EQUAL);break;case Gl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ie}},setLocked:function(ie){U=ie},setClear:function(ie){Me!==ie&&(Me=ie,pe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,$=null,me=null,Me=null,pe=!1}}}function s(){let U=!1,pe=null,$=null,me=null,Me=null,ie=null,Fe=null,Ce=null,Rt=null;return{setTest:function(gt){U||(gt?ee(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(gt){pe!==gt&&!U&&(i.stencilMask(gt),pe=gt)},setFunc:function(gt,ri,vi){($!==gt||me!==ri||Me!==vi)&&(i.stencilFunc(gt,ri,vi),$=gt,me=ri,Me=vi)},setOp:function(gt,ri,vi){(ie!==gt||Fe!==ri||Ce!==vi)&&(i.stencilOp(gt,ri,vi),ie=gt,Fe=ri,Ce=vi)},setLocked:function(gt){U=gt},setClear:function(gt){Rt!==gt&&(i.clearStencil(gt),Rt=gt)},reset:function(){U=!1,pe=null,$=null,me=null,Me=null,ie=null,Fe=null,Ce=null,Rt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,T=null,_=null,b=null,w=null,R=null,M=new Le(0,0,0),E=0,I=!1,N=null,F=null,k=null,L=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=se>=2);let Q=null,ne={},Ne=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),pt=new ut().fromArray(Ne),nt=new ut().fromArray(we);function ht(U,pe,$,me){let Me=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<$;Fe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ie}let J={};J[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Dr),le(!1),he(Hh),ee(i.CULL_FACE),re(Ci);function ee(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function He(U,pe){return h[U]!==pe?(i.bindFramebuffer(U,pe),h[U]=pe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Se(U,pe){let $=p,me=!1;if(U){$=d.get(pe),$===void 0&&($=[],d.set(pe,$));let Me=U.textures;if($.length!==Me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Fe=Me.length;ie<Fe;ie++)$[ie]=i.COLOR_ATTACHMENT0+ie;$.length=Me.length,me=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,me=!0);me&&i.drawBuffers($)}function Ge(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let yt={[$s]:i.FUNC_ADD,[_m]:i.FUNC_SUBTRACT,[vm]:i.FUNC_REVERSE_SUBTRACT};yt[ym]=i.MIN,yt[Mm]=i.MAX;let te={[Sm]:i.ZERO,[Pa]:i.ONE,[bm]:i.SRC_COLOR,[Wh]:i.SRC_ALPHA,[Cm]:i.SRC_ALPHA_SATURATE,[Am]:i.DST_COLOR,[wm]:i.DST_ALPHA,[Tm]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[Rm]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Im]:i.CONSTANT_COLOR,[Pm]:i.ONE_MINUS_CONSTANT_COLOR,[Lm]:i.CONSTANT_ALPHA,[Nm]:i.ONE_MINUS_CONSTANT_ALPHA};function re(U,pe,$,me,Me,ie,Fe,Ce,Rt,gt){if(U===Ci){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),U!==xc){if(U!==g||gt!==I){if((x!==$s||b!==$s)&&(i.blendEquation(i.FUNC_ADD),x=$s,b=$s),gt)switch(U){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",U);break}else switch(U){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",U);break}T=null,_=null,w=null,R=null,M.set(0,0,0),E=0,g=U,I=gt}return}Me=Me||pe,ie=ie||$,Fe=Fe||me,(pe!==x||Me!==b)&&(i.blendEquationSeparate(yt[pe],yt[Me]),x=pe,b=Me),($!==T||me!==_||ie!==w||Fe!==R)&&(i.blendFuncSeparate(te[$],te[me],te[ie],te[Fe]),T=$,_=me,w=ie,R=Fe),(Ce.equals(M)===!1||Rt!==E)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Rt),M.copy(Ce),E=Rt),g=U,I=!1}function ae(U,pe){U.side===an?_e(i.CULL_FACE):ee(i.CULL_FACE);let $=U.side===wn;pe&&($=!$),le($),U.blending===_s&&U.transparent===!1?re(Ci):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let me=U.stencilWrite;a.setTest(me),me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function he(U){U!==mm?(ee(i.CULL_FACE),U!==F&&(U===Hh?i.cullFace(i.BACK):U===gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),F=U}function Be(U){U!==k&&(W&&i.lineWidth(U),k=U)}function Oe(U,pe,$){U?(ee(i.POLYGON_OFFSET_FILL),(L!==pe||B!==$)&&(L=pe,B=$,o.getReversed()&&(pe=-pe),i.polygonOffset(pe,$))):_e(i.POLYGON_OFFSET_FILL)}function We(U){U?ee(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Ye(U){U===void 0&&(U=i.TEXTURE0+X-1),Q!==U&&(i.activeTexture(U),Q=U)}function P(U,pe,$){$===void 0&&(Q===null?$=i.TEXTURE0+X-1:$=Q);let me=ne[$];me===void 0&&(me={type:void 0,texture:void 0},ne[$]=me),(me.type!==U||me.texture!==pe)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(U,pe||J[U]),me.type=U,me.texture=pe)}function mt(){let U=ne[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function y(){try{i.texSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ue(){try{i.texStorage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function j(){try{i.texImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function fe(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function De(U,pe){f[U]!==pe&&(i.pixelStorei(U,pe),f[U]=pe)}function ge(U){pt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function de(U){nt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),nt.copy(U))}function Ue(U,pe){let $=c.get(pe);$===void 0&&($=new WeakMap,c.set(pe,$));let me=$.get(U);me===void 0&&(me=i.getUniformBlockIndex(pe,U.name),$.set(U,me))}function ke(U,pe){let me=c.get(pe).get(U);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,U.__bindingPointIndex),l.set(pe,me))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,ne={},h={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,T=null,_=null,b=null,w=null,R=null,M=new Le(0,0,0),E=0,I=!1,N=null,F=null,k=null,L=null,B=null,pt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:_e,bindFramebuffer:He,drawBuffers:Se,useProgram:Ge,setBlending:re,setMaterial:ae,setFlipSided:le,setCullFace:he,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:We,activeTexture:Ye,bindTexture:P,unbindTexture:mt,compressedTexImage2D:it,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:De,getParameter:fe,updateUBOMapping:Ue,uniformBlockBinding:ke,texStorage2D:ce,texStorage3D:ue,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:ge,viewport:de,reset:Ke}}function Ab(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function v(A,y){return p?new OffscreenCanvas(A,y):Or("canvas")}function m(A,y,O){let V=1,Y=it(A);if((Y.width>O||Y.height>O)&&(V=O/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ce=Math.floor(V*Y.width),ue=Math.floor(V*Y.height);h===void 0&&(h=v(ce,ue));let K=y?v(ce,ue):h;return K.width=ce,K.height=ue,K.getContext("2d").drawImage(A,0,0,ce,ue),Pe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+ue+")."),K}else return"data"in A&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function g(A){return A.generateMipmaps}function x(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,y,O,V,Y,ce=!1){if(A!==null){if(i[A]!==void 0)return i[A];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;V&&(ue=e.get("EXT_texture_norm16"),ue||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8),O===i.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),O===i.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),y===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8),O===i.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),O===i.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),O===i.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){let j=ce?ea:je.getTransfer(Y);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=j===_t?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),O===i.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(A,y){let O;return A?y===null||y===Wn||y===lo?O=i.DEPTH24_STENCIL8:y===Xn?O=i.DEPTH32F_STENCIL8:y===ao&&(O=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wn||y===lo?O=i.DEPTH_COMPONENT24:y===Xn?O=i.DEPTH_COMPONENT32F:y===ao&&(O=i.DEPTH_COMPONENT16),O}function w(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==Lt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){let y=A.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function M(A){let y=A.target;y.removeEventListener("dispose",M),N(y)}function E(A){let y=n.get(A);if(y.__webglInit===void 0)return;let O=A.source,V=d.get(O);if(V){let Y=V[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&I(A),Object.keys(V).length===0&&d.delete(O)}n.remove(A)}function I(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let O=A.source,V=d.get(O);delete V[y.__cacheKey],o.memory.textures--}function N(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let Y=0;Y<y.__webglFramebuffer[V].length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[V][Y]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=A.textures;for(let V=0,Y=O.length;V<Y;V++){let ce=n.get(O[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(O[V])}n.remove(A)}let F=0;function k(){F=0}function L(){return F}function B(A){F=A}function X(){let A=F;return A>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function W(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function se(A,y){let O=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let V=A.image;if(V===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(O,A,y);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function q(A,y){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){_e(O,A,y);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Q(A,y){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){_e(O,A,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function ne(A,y){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){He(O,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let Ne={[ni]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},we={[kt]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},pt={[Vm]:i.NEVER,[Ym]:i.ALWAYS,[Gm]:i.LESS,[lu]:i.LEQUAL,[Wm]:i.EQUAL,[cu]:i.GEQUAL,[Xm]:i.GREATER,[qm]:i.NOTEQUAL};function nt(A,y){if(y.type===Xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Lt||y.magFilter===oo||y.magFilter===Qs||y.magFilter===Gn||y.minFilter===Lt||y.minFilter===oo||y.minFilter===Qs||y.minFilter===Gn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ne[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ne[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ne[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,we[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,we[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kt||y.minFilter!==Qs&&y.minFilter!==Gn||y.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ht(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));let V=y.source,Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));let ce=W(y);if(ce!==A.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Y[ce].usedTimes++;let ue=Y[A.__cacheKey];ue!==void 0&&(Y[A.__cacheKey].usedTimes--,ue.usedTimes===0&&I(y)),A.__cacheKey=ce,A.__webglTexture=Y[ce].texture}return O}function J(A,y,O){return Math.floor(Math.floor(A/O)/y)}function ee(A,y,O,V){let ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,V,y.data);else{ce.sort((De,ge)=>De.start-ge.start);let ue=0;for(let De=1;De<ce.length;De++){let ge=ce[ue],de=ce[De],Ue=ge.start+ge.count,ke=J(de.start,y.width,4),Ke=J(ge.start,y.width,4);de.start<=Ue+1&&ke===Ke&&J(de.start+de.count-1,y.width,4)===ke?ge.count=Math.max(ge.count,de.start+de.count-ge.start):(++ue,ce[ue]=de)}ce.length=ue+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let De=0,ge=ce.length;De<ge;De++){let de=ce[De],Ue=Math.floor(de.start/4),ke=Math.ceil(de.count/4),Ke=Ue%y.width,U=Math.floor(Ue/y.width),pe=ke,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ke,U,pe,$,O,V,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function _e(A,y,O){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);let Y=ht(A,y),ce=y.source;t.bindTexture(V,A.__webglTexture,i.TEXTURE0+O);let ue=n.get(ce);if(ce.version!==ue.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let $=je.getPrimaries(je.workingColorSpace),me=y.colorSpace===Fn?null:je.getPrimaries(y.colorSpace),Me=y.colorSpace===Fn||$===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let j=m(y.image,!1,s.maxTextureSize);j=mt(y,j);let fe=r.convert(y.format,y.colorSpace),De=r.convert(y.type),ge=_(y.internalFormat,fe,De,y.normalized,y.colorSpace,y.isVideoTexture);nt(V,y);let de,Ue=y.mipmaps,ke=y.isVideoTexture!==!0,Ke=ue.__version===void 0||Y===!0,U=ce.dataReady,pe=w(y,j);if(y.isDepthTexture)ge=b(y.format===ys,y.type),Ke&&(ke?t.texStorage2D(i.TEXTURE_2D,1,ge,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ge,j.width,j.height,0,fe,De,null));else if(y.isDataTexture)if(Ue.length>0){ke&&Ke&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Ue[0].width,Ue[0].height);for(let $=0,me=Ue.length;$<me;$++)de=Ue[$],ke?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,de.width,de.height,fe,De,de.data):t.texImage2D(i.TEXTURE_2D,$,ge,de.width,de.height,0,fe,De,de.data);y.generateMipmaps=!1}else ke?(Ke&&t.texStorage2D(i.TEXTURE_2D,pe,ge,j.width,j.height),U&&ee(y,j,fe,De)):t.texImage2D(i.TEXTURE_2D,0,ge,j.width,j.height,0,fe,De,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Ue[0].width,Ue[0].height,j.depth);for(let $=0,me=Ue.length;$<me;$++)if(de=Ue[$],y.format!==qn)if(fe!==null)if(ke){if(U)if(y.layerUpdates.size>0){let Me=pf(de.width,de.height,y.format,y.type);for(let ie of y.layerUpdates){let Fe=de.data.subarray(ie*Me/de.data.BYTES_PER_ELEMENT,(ie+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ie,de.width,de.height,1,fe,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,j.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ge,de.width,de.height,j.depth,0,de.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,j.depth,fe,De,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ge,de.width,de.height,j.depth,0,fe,De,de.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ke&&Ke&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Ue[0].width,Ue[0].height);for(let $=0,me=Ue.length;$<me;$++)de=Ue[$],y.format!==qn?fe!==null?ke?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ge,de.width,de.height,0,de.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,de.width,de.height,fe,De,de.data):t.texImage2D(i.TEXTURE_2D,$,ge,de.width,de.height,0,fe,De,de.data)}else if(y.isDataArrayTexture)if(ke){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,j.width,j.height,j.depth),U)if(y.layerUpdates.size>0){let $=pf(j.width,j.height,y.format,y.type);for(let me of y.layerUpdates){let Me=j.data.subarray(me*$/j.data.BYTES_PER_ELEMENT,(me+1)*$/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,j.width,j.height,1,fe,De,Me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,De,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,j.width,j.height,j.depth,0,fe,De,j.data);else if(y.isData3DTexture)ke?(Ke&&t.texStorage3D(i.TEXTURE_3D,pe,ge,j.width,j.height,j.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,De,j.data)):t.texImage3D(i.TEXTURE_3D,0,ge,j.width,j.height,j.depth,0,fe,De,j.data);else if(y.isFramebufferTexture){if(Ke)if(ke)t.texStorage2D(i.TEXTURE_2D,pe,ge,j.width,j.height);else{let $=j.width,me=j.height;for(let Me=0;Me<pe;Me++)t.texImage2D(i.TEXTURE_2D,Me,ge,$,me,0,fe,De,null),$>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),f.add(y),$.onpaint=me=>{let Me=me.changedElements;for(let ie of f)Me.includes(ie.image)&&(ie.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Me=i.RGBA,ie=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,ie,Fe,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ke&&Ke){let $=it(Ue[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,$.width,$.height)}for(let $=0,me=Ue.length;$<me;$++)de=Ue[$],ke?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,fe,De,de):t.texImage2D(i.TEXTURE_2D,$,ge,fe,De,de);y.generateMipmaps=!1}else if(ke){if(Ke){let $=it(j);t.texStorage2D(i.TEXTURE_2D,pe,ge,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,De,j)}else t.texImage2D(i.TEXTURE_2D,0,ge,fe,De,j);g(y)&&x(V),ue.__version=ce.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function He(A,y,O){if(y.image.length!==6)return;let V=ht(A,y),Y=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let ce=n.get(Y);if(Y.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+O);let ue=je.getPrimaries(je.workingColorSpace),K=y.colorSpace===Fn?null:je.getPrimaries(y.colorSpace),j=y.colorSpace===Fn||ue===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!fe&&!De?ge[ie]=m(y.image[ie],!0,s.maxCubemapSize):ge[ie]=De?y.image[ie].image:y.image[ie],ge[ie]=mt(y,ge[ie]);let de=ge[0],Ue=r.convert(y.format,y.colorSpace),ke=r.convert(y.type),Ke=_(y.internalFormat,Ue,ke,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pe=ce.__version===void 0||V===!0,$=Y.dataReady,me=w(y,de);nt(i.TEXTURE_CUBE_MAP,y);let Me;if(fe){U&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ke,de.width,de.height);for(let ie=0;ie<6;ie++){Me=ge[ie].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){let Ce=Me[Fe];y.format!==qn?Ue!==null?U?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Ce.width,Ce.height,Ue,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ke,Ce.width,Ce.height,0,Ce.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Ce.width,Ce.height,Ue,ke,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ke,Ce.width,Ce.height,0,Ue,ke,Ce.data)}}}else{if(Me=y.mipmaps,U&&pe){Me.length>0&&me++;let ie=it(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(De){U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Ue,ke,ge[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,ge[ie].width,ge[ie].height,0,Ue,ke,ge[ie].data);for(let Fe=0;Fe<Me.length;Fe++){let Rt=Me[Fe].image[ie].image;U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Rt.width,Rt.height,Ue,ke,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ke,Rt.width,Rt.height,0,Ue,ke,Rt.data)}}else{U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,ke,ge[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,Ue,ke,ge[ie]);for(let Fe=0;Fe<Me.length;Fe++){let Ce=Me[Fe];U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Ue,ke,Ce.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ke,Ue,ke,Ce.image[ie])}}}g(y)&&x(i.TEXTURE_CUBE_MAP),ce.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Se(A,y,O,V,Y,ce){let ue=r.convert(O.format,O.colorSpace),K=r.convert(O.type),j=_(O.internalFormat,ue,K,O.normalized,O.colorSpace),fe=n.get(y),De=n.get(O);if(De.__renderTarget=y,!fe.__hasExternalTextures){let ge=Math.max(1,y.width>>ce),de=Math.max(1,y.height>>ce);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ce,j,ge,de,y.depth,0,ue,K,null):t.texImage2D(Y,ce,j,ge,de,0,ue,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Y,De.__webglTexture,0,We(y)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Y,De.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(A,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let V=y.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ce=b(y.stencilBuffer,Y),ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),ce,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{let V=y.textures;for(let Y=0;Y<V.length;Y++){let ce=V[Y],ue=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),j=_(ce.internalFormat,ue,K,ce.normalized,ce.colorSpace);Ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),j,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(A,y,O){let V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(i.TEXTURE_CUBE_MAP,y.depthTexture);let fe=r.convert(y.depthTexture.format),De=r.convert(y.depthTexture.type),ge;y.depthTexture.format===bi?ge=i.DEPTH_COMPONENT24:y.depthTexture.format===ys&&(ge=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ge,y.width,y.height,0,fe,De,null)}}else se(y.depthTexture,0);let ce=Y.__webglTexture,ue=We(y),K=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=y.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===bi)Ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ce,0);else if(y.depthTexture.format===ys)Ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(A){let y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=V}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)yt(y.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?yt(y.__webglFramebuffer[0],A,0):yt(y.__webglFramebuffer,A,0)}else if(O){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),Ge(y.__webglDepthbuffer[V],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ge(y.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,y,O){let V=n.get(A);y!==void 0&&Se(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&te(A)}function ae(A){let y=A.texture,O=n.get(A),V=n.get(y);A.addEventListener("dispose",M);let Y=A.textures,ce=A.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,o.memory.textures++),ce){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let j=0;j<y.mipmaps.length;j++)O.__webglFramebuffer[K][j]=i.createFramebuffer()}else O.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[K]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ue)for(let K=0,j=Y.length;K<j;K++){let fe=n.get(Y[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ye(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let j=Y[K];O.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let fe=r.convert(j.format,j.colorSpace),De=r.convert(j.type),ge=_(j.internalFormat,fe,De,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),de=We(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ge,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,O.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),nt(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Se(O.__webglFramebuffer[K][j],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Se(O.__webglFramebuffer[K],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(y)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let K=0,j=Y.length;K<j;K++){let fe=Y[K],De=n.get(fe),ge=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,De.__webglTexture),nt(ge,fe),Se(O.__webglFramebuffer,A,fe,i.COLOR_ATTACHMENT0+K,ge,0),g(fe)&&x(ge)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),nt(K,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Se(O.__webglFramebuffer[j],A,y,i.COLOR_ATTACHMENT0,K,j);else Se(O.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,K,0);g(y)&&x(K),t.unbindTexture()}A.depthBuffer&&te(A)}function le(A){let y=A.textures;for(let O=0,V=y.length;O<V;O++){let Y=y[O];if(g(Y)){let ce=T(A),ue=n.get(Y).__webglTexture;t.bindTexture(ce,ue),x(ce),t.unbindTexture()}}}let he=[],Be=[];function Oe(A){if(A.samples>0){if(Ye(A)===!1){let y=A.textures,O=A.width,V=A.height,Y=i.COLOR_BUFFER_BIT,ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),K=y.length>1;if(K)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let De=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,Y,i.NEAREST),l===!0&&(he.length=0,Be.length=0,he.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(he.push(ce),Be.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let De=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function We(A){return Math.min(s.maxSamples,A.samples)}function Ye(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function P(A){let y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function mt(A,y){let O=A.colorSpace,V=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Tn&&O!==Fn&&(je.getTransfer(O)===_t?(V!==qn||Y!==Un)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",O)),y}function it(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=se,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rb(i,e){function t(n,s=Fn){let r,o=je.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===ef)return i.SHORT;if(n===ao)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===sf)return i.ALPHA;if(n===rf)return i.RGB;if(n===qn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===Na||n===Da||n===Ua||n===Fa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Ic||n===Pc||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nc||n===Dc||n===Uc||n===Fc||n===Oc||n===Oa||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nc||n===Dc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fc)return r.COMPRESSED_R11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===$c||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===eu||n===tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===iu||n===Ba||n===su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zt({vertexShader:Cb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Df=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,v=typeof XRWebGLBinding!="undefined",m=new Nf,g={},x=t.getContextAttributes(),T=null,_=null,b=[],w=[],R=new oe,M=null,E=null,I=new Kt;I.viewport=new ut;let N=new Kt;N.viewport=new ut;let F=[I,N],k=new dc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=b[J];return ee===void 0&&(ee=new zr,b[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=b[J];return ee===void 0&&(ee=new zr,b[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=b[J];return ee===void 0&&(ee=new zr,b[J]=ee),ee.getHandSpace()};function X(J){let ee=w.indexOf(J.inputSource);if(ee===-1)return;let _e=b[ee];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let J=0;J<b.length;J++){let ee=w[J];ee!==null&&(w[J]=null,b[J].disconnect(ee))}L=null,B=null,m.reset();for(let J in g)delete g[J];if(e.setRenderTarget(T),d=null,h=null,f=null,s=null,_=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,He=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=x.stencil?ys:bi,He=x.stencil?lo:Wn);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new xn(h.textureWidth,h.textureHeight,{format:qn,type:Un,depthTexture:new wi(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new xn(d.framebufferWidth,d.framebufferHeight,{format:qn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(J){for(let ee=0;ee<J.removed.length;ee++){let _e=J.removed[ee],He=w.indexOf(_e);He>=0&&(w[He]=null,b[He].disconnect(_e))}for(let ee=0;ee<J.added.length;ee++){let _e=J.added[ee],He=w.indexOf(_e);if(He===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=w.length){w.push(_e),He=Ge;break}else if(w[Ge]===null){w[Ge]=_e,He=Ge;break}if(He===-1)break}let Se=b[He];Se&&Se.connect(_e)}}let q=new C,Q=new C;function ne(J,ee,_e){q.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);let He=q.distanceTo(Q),Se=ee.projectionMatrix.elements,Ge=_e.projectionMatrix.elements,yt=Se[14]/(Se[10]-1),te=Se[14]/(Se[10]+1),re=(Se[9]+1)/Se[5],ae=(Se[9]-1)/Se[5],le=(Se[8]-1)/Se[0],he=(Ge[8]+1)/Ge[0],Be=yt*le,Oe=yt*he,We=He/(-le+he),Ye=We*-le;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(We),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let P=yt+We,mt=te+We,it=Be-Ye,A=Oe+(He-Ye),y=re*te/mt*P,O=ae*te/mt*P;J.projectionMatrix.makePerspective(it,A,y,O,P,mt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ne(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ee=J.near,_e=J.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=N.near=I.near=ee,k.far=N.far=I.far=_e,(L!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,B=k.far),k.layers.mask=J.layers.mask|6,I.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let He=J.parent,Se=k.cameras;Ne(k,He);for(let Ge=0;Ge<Se.length;Ge++)Ne(Se[Ge],He);Se.length===2?ne(k,I,N):k.projectionMatrix.copy(I.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),we(J,k,He)};function we(J,ee,_e){_e===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return g[J]};let pt=null;function nt(J,ee){if(u=ee.getViewerPose(c||o),p=ee,u!==null){let _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let He=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let te=0;te<_e.length;te++){let re=_e[te],ae=null;if(d!==null)ae=d.getViewport(re);else{let he=f.getViewSubImage(h,re);ae=he.viewport,te===0&&(e.setRenderTargetTextures(_,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(_))}let le=F[te];le===void 0&&(le=new Kt,le.layers.enable(te),le.viewport=new ut,F[te]=le),le.matrix.fromArray(re.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(re.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ae.x,ae.y,ae.width,ae.height),te===0&&(k.matrix.copy(le.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(le)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let te=f.getDepthInformation(_e[0]);te&&te.isValid&&te.texture&&m.init(te,s.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let te=0;te<_e.length;te++){let re=_e[te].camera;if(re){let ae=g[re];ae||(ae=new ha,g[re]=ae);let le=f.getCameraImage(re);ae.sourceTexture=le}}}}for(let _e=0;_e<b.length;_e++){let He=w[_e],Se=b[_e];He!==null&&Se!==void 0&&Se.update(He,ee,c||o)}pt&&pt(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let ht=new A0;ht.setAnimationLoop(nt),this.setAnimationLoop=function(J){pt=J},this.dispose=function(){}}},Pb=new ze,N0=new Xe;N0.set(-1,0,0,0,1,0,0,0,1);function Lb(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,hf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,T,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===wn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===wn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),T=x.envMap,_=x.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(N0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let w=b.program;n.uniformBlockBinding(_,w)}function c(_,b){let w=s[_.id];w===void 0&&(m(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",x));let R=b.program;n.updateUBOMapping(_,R);let M=e.render.frame;r[_.id]!==M&&(h(_),r[_.id]=M)}function u(_){let b=f();_.__bindingPointIndex=b;let w=i.createBuffer(),R=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let b=s[_.id],w=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,E=w.length;M<E;M++){let I=w[M];if(Array.isArray(I))for(let N=0,F=I.length;N<F;N++)d(I[N],M,N,R);else d(I,M,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,b,w,R){if(v(_,b,w,R)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let I=0;for(let N=0;N<E.length;N++){let F=E[N],k=g(F);p(F,_.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function p(_,b,w){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,w)}function v(_,b,w,R){let M=_.value,E=b+"_"+w;if(R[E]===void 0)return typeof M=="number"||typeof M=="boolean"?R[E]=M:ArrayBuffer.isView(M)?R[E]=M.slice():R[E]=M.clone(),!0;{let I=R[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return R[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function m(_){let b=_.uniforms,w=0,R=16;for(let E=0,I=b.length;E<I;E++){let N=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,k=N.length;F<k;F++){let L=N[F],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,W=B.length;X<W;X++){let se=B[X],q=g(se),Q=w%R,ne=Q%q.boundary,Ne=Q+ne;w+=ne,Ne!==0&&R-Ne<q.storage&&(w+=R-Ne),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=q.storage}}}let M=w%R;return M>0&&(w+=R-M),_.__size=w,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",_),b}function x(_){let b=_.target;b.removeEventListener("dispose",x);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function Ub(){return Pi===null&&(Pi=new Wr(Db,16,16,Ms,mi),Pi.name="DFG_LUT",Pi.minFilter=Lt,Pi.magFilter=Lt,Pi.wrapS=ei,Pi.wrapT=ei,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var pu=class{constructor(e={}){let{canvas:t=Zm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Un}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,m=new Set([Rc,Ac,Ec]),g=new Set([Un,Wn,ao,lo,bc,Tc]),x=new Uint32Array(4),T=new Int32Array(4),_=new C,b=null,w=null,R=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,F=null,k=null,L=null,B=null;this._outputColorSpace=dt;let X=0,W=0,se=null,q=-1,Q=null,ne=new ut,Ne=new ut,we=null,pt=new Le(0),nt=0,ht=t.width,J=t.height,ee=1,_e=null,He=null,Se=new ut(0,0,ht,J),Ge=new ut(0,0,ht,J),yt=!1,te=new Xr,re=!1,ae=!1,le=new ze,he=new C,Be=new ut,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ye(){return se===null?ee:1}let P=n;function mt(S,D){return t.getContext(S,D)}let it,A,y,O,V,Y,ce,ue,K,j,fe,De,ge,de,Ue,ke,Ke,U,pe,$,me,Me,ie;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",ri,!1),P===null){let D="webgl2";if(P=mt(D,S),P===null)throw mt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(S){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",ri,!1),Ve("WebGLRenderer: "+S.message),S}function Fe(){it=new VM(P),it.init(),me=new Rb(P,it),A=new LM(P,it,e,me),y=new Eb(P,it),A.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),k=P.createFramebuffer(),L=P.createFramebuffer(),B=P.createFramebuffer(),O=new XM(P),V=new fb,Y=new Ab(P,it,y,V,A,me,O),ce=new HM(I),ue=new Y_(P),Me=new IM(P,ue),K=new GM(P,ue,O,Me),j=new YM(P,K,ue,Me,O),U=new qM(P,A,Y),Ue=new NM(V),fe=new hb(I,ce,it,A,Me,Ue),De=new Lb(I,V),ge=new pb,de=new yb(it),Ke=new CM(I,ce,y,j,p,l),ke=new wb(I,j,A),ie=new Nb(P,O,A,y),pe=new PM(P,it,O),$=new WM(P,it,O),O.programs=fe.programs,I.capabilities=A,I.extensions=it,I.properties=V,I.renderLists=ge,I.shadowMap=ke,I.state=y,I.info=O}v!==Un&&(E=new KM(v,t.width,t.height,a,s,r));let Ce=new Df(I,P);this.xr=Ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(ht,J,!1))},this.getSize=function(S){return S.set(ht,J)},this.setSize=function(S,D,G=!0){if(Ce.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=S,J=D,t.width=Math.floor(S*ee),t.height=Math.floor(D*ee),G===!0&&(t.style.width=S+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(ht*ee,J*ee).floor()},this.setDrawingBufferSize=function(S,D,G){ht=S,J=D,ee=G,t.width=Math.floor(S*G),t.height=Math.floor(D*G),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(v===Un){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,D,G,z){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,D,G,z),y.viewport(ne.copy(Se).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,D,G,z){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,D,G,z),y.scissor(Ne.copy(Ge).multiplyScalar(ee).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(S){y.setScissorTest(yt=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,G=!0){let z=0;if(S){let H=!1;if(se!==null){let ye=se.texture.format;H=m.has(ye)}if(H){let ye=se.texture.type,Te=g.has(ye),ve=Ke.getClearColor(),Ee=Ke.getClearAlpha(),Ie=ve.r,Je=ve.g,st=ve.b;Te?(x[0]=Ie,x[1]=Je,x[2]=st,x[3]=Ee,P.clearBufferuiv(P.COLOR,0,x)):(T[0]=Ie,T[1]=Je,T[2]=st,T[3]=Ee,P.clearBufferiv(P.COLOR,0,T))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",ri,!1),Ke.dispose(),ge.dispose(),de.dispose(),V.dispose(),ce.dispose(),j.dispose(),Me.dispose(),ie.dispose(),fe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",xp),Ce.removeEventListener("sessionend",_p),Cs.stop()};function Rt(S){S.preventDefault(),ta("WebGLRenderer: Context Lost."),N=!0}function gt(){ta("WebGLRenderer: Context Restored."),N=!1;let S=O.autoReset,D=ke.enabled,G=ke.autoUpdate,z=ke.needsUpdate,H=ke.type;Fe(),O.autoReset=S,ke.enabled=D,ke.autoUpdate=G,ke.needsUpdate=z,ke.type=H}function ri(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vi(S){let D=S.target;D.removeEventListener("dispose",vi),ax(D)}function ax(S){lx(S),V.remove(S)}function lx(S){let D=V.get(S).programs;D!==void 0&&(D.forEach(function(G){fe.releaseProgram(G)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,G,z,H,ye){D===null&&(D=Oe);let Te=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=hx(S,D,G,z,H);y.setMaterial(z,Te);let Ee=G.index,Ie=1;if(z.wireframe===!0){if(Ee=K.getWireframeAttribute(G),Ee===void 0)return;Ie=2}let Je=G.drawRange,st=G.attributes.position,Ae=Je.start*Ie,xt=(Je.start+Je.count)*Ie;ye!==null&&(Ae=Math.max(Ae,ye.start*Ie),xt=Math.min(xt,(ye.start+ye.count)*Ie)),Ee!==null?(Ae=Math.max(Ae,0),xt=Math.min(xt,Ee.count)):st!=null&&(Ae=Math.max(Ae,0),xt=Math.min(xt,st.count));let Yt=xt-Ae;if(Yt<0||Yt===1/0)return;Me.setup(H,z,ve,G,Ee);let It,Et=pe;if(Ee!==null&&(It=ue.get(Ee),Et=$,Et.setIndex(It)),H.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*Ye()),Et.setMode(P.LINES)):Et.setMode(P.TRIANGLES);else if(H.isLine){let pn=z.linewidth;pn===void 0&&(pn=1),y.setLineWidth(pn*Ye()),H.isLineSegments?Et.setMode(P.LINES):H.isLineLoop?Et.setMode(P.LINE_LOOP):Et.setMode(P.LINE_STRIP)}else H.isPoints?Et.setMode(P.POINTS):H.isSprite&&Et.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let pn=H._multiDrawStarts,be=H._multiDrawCounts,Sn=H._multiDrawCount,ft=Ee?ue.get(Ee).bytesPerElement:1,jn=V.get(z).currentProgram.getUniforms();for(let yi=0;yi<Sn;yi++)jn.setValue(P,"_gl_DrawID",yi),Et.render(pn[yi]/ft,be[yi])}else if(H.isInstancedMesh)Et.renderInstances(Ae,Yt,H.count);else if(G.isInstancedBufferGeometry){let pn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,be=Math.min(G.instanceCount,pn);Et.renderInstances(Ae,Yt,be)}else Et.render(Ae,Yt)};function gp(S,D,G,z){F!==null&&S.isNodeMaterial&&F.setObject(z,S),re===!0&&Ue.setState(S,G,!1),S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=wn,S.needsUpdate=!0,ll(S,D,z),S.side=Ri,S.needsUpdate=!0,ll(S,D,z),S.side=an):ll(S,D,z)}this.compile=function(S,D,G=null){G===null&&(G=S),F!==null&&F.renderStart(S,D,G),w=de.get(G),w.init(D),M.push(w),G.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),S!==G&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),ae=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,ae),re===!0&&Ue.setGlobalState(this.clippingPlanes,D),F!==null&&ke.render(w.state.shadowsArray,G,D);let z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ye=H.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let ve=ye[Te];gp(ve,G,D,H),z.add(ve)}else gp(ye,G,D,H),z.add(ye)}),w=M.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(S,D,G=null){let z=this.compile(S,D,G);return new Promise(H=>{function ye(){if(z.forEach(function(Te){let Ee=V.get(Te).currentProgram;(Ee===void 0||Ee.isReady())&&z.delete(Te)}),z.size===0){H(S);return}setTimeout(ye,10)}it.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Qu=null;function cx(S){Qu&&Qu(S)}function xp(){Cs.stop()}function _p(){Cs.start()}let Cs=new A0;Cs.setAnimationLoop(cx),typeof self!="undefined"&&Cs.setContext(self),this.setAnimationLoop=function(S){Qu=S,Ce.setAnimationLoop(S),S===null?Cs.stop():Cs.start()},Ce.addEventListener("sessionstart",xp),Ce.addEventListener("sessionend",_p),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(S,D);let G=Ce.enabled===!0&&Ce.isPresenting===!0,z=E!==null&&(se===null||G)&&E.begin(I,se);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(D),D=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,D,se),w=de.get(S,M.length),w.init(D),w.state.textureUnits=Y.getTextureUnits(),M.push(w),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),te.setFromProjectionMatrix(le,hi,D.reversedDepth),ae=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,ae),b=ge.get(S,R.length),b.init(),R.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){let Te=I.xr.getDepthSensingMesh();Te!==null&&eh(Te,D,-1/0,I.sortObjects)}eh(S,D,0,I.sortObjects),b.finish(),F!==null&&F.updateLights(w.state.lightsArray),I.sortObjects===!0&&b.sort(_e,He),We=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,We&&Ke.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ue.beginShadows();let H=w.state.shadowsArray;if(ke.render(H,S,D),re===!0&&Ue.endShadows(),(z&&E.hasRenderPass())===!1){let Te=b.opaque,ve=b.transmissive;if(w.setupLights(),D.isArrayCamera){let Ee=D.cameras;if(ve.length>0)for(let Ie=0,Je=Ee.length;Ie<Je;Ie++){let st=Ee[Ie];yp(Te,ve,S,st)}We&&Ke.render(S);for(let Ie=0,Je=Ee.length;Ie<Je;Ie++){let st=Ee[Ie];vp(b,S,st,st.viewport)}}else ve.length>0&&yp(Te,ve,S,D),We&&Ke.render(S),vp(b,S,D)}se!==null&&W===0&&(Y.updateMultisampleRenderTarget(se),Y.updateRenderTargetMipmap(se)),z&&E.end(I),S.isScene===!0&&S.onAfterRender(I,S,D),Me.resetDefaultState(),q=-1,Q=null,M.pop(),M.length>0?(w=M[M.length-1],Y.setTextureUnits(w.state.textureUnits),re===!0&&Ue.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,F!==null&&F.renderEnd()};function eh(S,D,G,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(te)){z&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);let Te=j.update(S),ve=S.material;ve.visible&&b.push(S,Te,ve,G,Be.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(te))){let Te=j.update(S),ve=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Be.copy(Te.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(le)),Array.isArray(ve)){let Ee=Te.groups;for(let Ie=0,Je=Ee.length;Ie<Je;Ie++){let st=Ee[Ie],Ae=ve[st.materialIndex];Ae&&Ae.visible&&b.push(S,Te,Ae,G,Be.z,st,D)}}else ve.visible&&b.push(S,Te,ve,G,Be.z,null,D)}}let ye=S.children;for(let Te=0,ve=ye.length;Te<ve;Te++)eh(ye[Te],D,G,z)}function vp(S,D,G,z){let{opaque:H,transmissive:ye,transparent:Te}=S;w.setupLightsView(G),re===!0&&Ue.setGlobalState(I.clippingPlanes,G),z&&y.viewport(ne.copy(z)),H.length>0&&al(H,D,G),ye.length>0&&al(ye,D,G),Te.length>0&&al(Te,D,G),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function yp(S,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Ae=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new xn(1,1,{generateMipmaps:!0,type:Ae?mi:Un,minFilter:Gn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ye=w.state.transmissionRenderTarget[z.id],Te=z.viewport||ne;ye.setSize(Te.z*I.transmissionResolutionScale,Te.w*I.transmissionResolutionScale);let ve=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Ie=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(pt),nt=I.getClearAlpha(),nt<1&&I.setClearColor(16777215,.5),I.clear(),We&&Ke.render(G);let Je=I.toneMapping;I.toneMapping=pi;let st=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),re===!0&&Ue.setGlobalState(I.clippingPlanes,z),al(S,G,z),Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let xt=0,Yt=D.length;xt<Yt;xt++){let It=D[xt],{object:Et,geometry:pn,material:be,group:Sn}=It;if(be.side===an&&Et.layers.test(z.layers)){let ft=be.side;be.side=wn,be.needsUpdate=!0,Mp(Et,G,z,pn,be,Sn),be.side=ft,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye))}I.setRenderTarget(ve,Ee,Ie),I.setClearColor(pt,nt),st!==void 0&&(z.viewport=st),I.toneMapping=Je}function al(S,D,G){let z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ye=S.length;H<ye;H++){let Te=S[H],{object:ve,geometry:Ee,group:Ie}=Te,Je=Te.material;Je.allowOverride===!0&&z!==null&&(Je=z),ve.layers.test(G.layers)&&Mp(ve,D,G,Ee,Je,Ie)}}function Mp(S,D,G,z,H,ye){F!==null&&H.isNodeMaterial&&F.setObject(S,H),S.onBeforeRender(I,D,G,z,H,ye),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(I,D,G,z,S,ye),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=wn,H.needsUpdate=!0,I.renderBufferDirect(G,D,z,H,S,ye),H.side=Ri,H.needsUpdate=!0,I.renderBufferDirect(G,D,z,H,S,ye),H.side=an):I.renderBufferDirect(G,D,z,H,S,ye),S.onAfterRender(I,D,G,z,H,ye)}function ll(S,D,G){D.isScene!==!0&&(D=Oe);let z=V.get(S),H=w.state.lights,ye=w.state.shadowsArray,Te=H.state.version,ve=fe.getParameters(S,H.state,ye,D,G,w.state.lightProbeGridArray),Ee=fe.getProgramCacheKey(ve),Ie=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Je=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=ce.get(S.envMap||z.environment,Je),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",vi),Ie=new Map,z.programs=Ie);let st=Ie.get(Ee);if(st!==void 0){if(z.currentProgram===st&&z.lightsStateVersion===Te)return bp(S,ve),st}else ve.uniforms=fe.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,G,ve),S.onBeforeCompile(ve,I),st=fe.acquireProgram(ve,Ee),Ie.set(Ee,st),z.uniforms=ve.uniforms;let Ae=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Ue.uniform),bp(S,ve),z.needsLights=dx(S),z.lightsStateVersion=Te,z.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=st,z.uniformsList=null,st}function Sp(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=po.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function bp(S,D){let G=V.get(S);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function ux(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let G=0,z=S.length;G<z;G++){let H=S[G];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function hx(S,D,G,z,H){D.isScene!==!0&&(D=Oe),Y.resetTextureUnits();let ye=D.fog,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ve=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:je.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ie=ce.get(z.envMap||Te,Ee),Je=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,st=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!G.morphAttributes.position,xt=!!G.morphAttributes.normal,Yt=!!G.morphAttributes.color,It=pi;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(It=I.toneMapping);let Et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pn=Et!==void 0?Et.length:0,be=V.get(z),Sn=w.state.lights;if(re===!0&&(ae===!0||S!==Q)){let Ct=S===Q&&z.id===q;Ue.setState(z,S,Ct)}let ft=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Sn.state.version||be.outputColorSpace!==ve||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Ie||z.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ue.numPlanes||be.numIntersection!==Ue.numIntersection)||be.vertexAlphas!==Je||be.vertexTangents!==st||be.morphTargets!==Ae||be.morphNormals!==xt||be.morphColors!==Yt||be.toneMapping!==It||be.morphTargetsCount!==pn||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,be.__version=z.version);let jn=be.currentProgram;ft===!0&&(jn=ll(z,D,H),F&&z.isNodeMaterial&&F.onUpdateProgram(z,jn,be));let yi=!1,as=!1,gr=!1,bt=jn.getUniforms(),Vt=be.uniforms;if(y.useProgram(jn.program)&&(yi=!0,as=!0,gr=!0),z.id!==q&&(q=z.id,as=!0),be.needsLights){let Ct=ux(w.state.lightProbeGridArray,H);be.lightProbeGrid!==Ct&&(be.lightProbeGrid=Ct,as=!0)}if(yi||Q!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),bt.setValue(P,"projectionMatrix",S.projectionMatrix),bt.setValue(P,"viewMatrix",S.matrixWorldInverse);let cs=bt.map.cameraPosition;cs!==void 0&&cs.setValue(P,he.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&bt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,as=!0,gr=!0)}if(be.needsLights&&(Sn.state.sunShadowMap.length>0&&bt.setValue(P,"sunShadowMap",Sn.state.sunShadowMap,Y),Sn.state.directionalShadowMap.length>0&&bt.setValue(P,"directionalShadowMap",Sn.state.directionalShadowMap,Y),Sn.state.spotShadowMap.length>0&&bt.setValue(P,"spotShadowMap",Sn.state.spotShadowMap,Y),Sn.state.pointShadowMap.length>0&&bt.setValue(P,"pointShadowMap",Sn.state.pointShadowMap,Y)),H.isSkinnedMesh){bt.setOptional(P,H,"bindMatrix"),bt.setOptional(P,H,"bindMatrixInverse");let Ct=H.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),bt.setValue(P,"boneTexture",Ct.boneTexture,Y))}H.isBatchedMesh&&(bt.setOptional(P,H,"batchingTexture"),bt.setValue(P,"batchingTexture",H._matricesTexture,Y),bt.setOptional(P,H,"batchingIdTexture"),bt.setValue(P,"batchingIdTexture",H._indirectTexture,Y),bt.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(P,"batchingColorTexture",H._colorsTexture,Y));let ls=G.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&U.update(H,G,jn),(as||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,bt.setValue(P,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Vt.envMapIntensity.value=D.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Ub()),as){if(bt.setValue(P,"toneMappingExposure",I.toneMappingExposure),be.needsLights&&fx(Vt,gr),ye&&z.fog===!0&&De.refreshFogUniforms(Vt,ye),De.refreshMaterialUniforms(Vt,z,ee,J,w.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){let Ct=be.lightProbeGrid;Vt.probesSH.value=Ct.texture,Vt.probesMin.value.copy(Ct.boundingBox.min),Vt.probesMax.value.copy(Ct.boundingBox.max),Vt.probesResolution.value.copy(Ct.resolution)}po.upload(P,Sp(be),Vt,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(po.upload(P,Sp(be),Vt,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&bt.setValue(P,"center",H.center),bt.setValue(P,"modelViewMatrix",H.modelViewMatrix),bt.setValue(P,"normalMatrix",H.normalMatrix),bt.setValue(P,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let Ct=z.uniformsGroups;for(let cs=0,xr=Ct.length;cs<xr;cs++){let wp=Ct[cs];ie.update(wp,jn),ie.bind(wp,jn)}}return jn}function fx(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function dx(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(S,D,G){let z=V.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=D,V.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let G=V.get(S);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,G=0){se=S,X=D,W=G;let z=null,H=!1,ye=!1;if(S){let ve=V.get(S);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(P.FRAMEBUFFER,ve.__webglFramebuffer),ne.copy(S.viewport),Ne.copy(S.scissor),we=S.scissorTest,y.viewport(ne),y.scissor(Ne),y.setScissorTest(we),q=-1;return}else if(ve.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ve.__hasExternalTextures)Y.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Je=S.depthTexture;if(ve.__boundDepthTexture!==Je){if(Je!==null&&V.has(Je)&&(S.width!==Je.image.width||S.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Ie=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?z=Ie[D][G]:z=Ie[D],H=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?z=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[G]:z=Ie,ne.copy(S.viewport),Ne.copy(S.scissor),we=S.scissorTest}else ne.copy(Se).multiplyScalar(ee).floor(),Ne.copy(Ge).multiplyScalar(ee).floor(),we=yt;if(G!==0&&(z=k),y.bindFramebuffer(P.FRAMEBUFFER,z)&&y.drawBuffers(S,z),y.viewport(ne),y.scissor(Ne),y.setScissorTest(we),H){let ve=V.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,G)}else if(ye){let ve=D;for(let Ee=0;Ee<S.textures.length;Ee++){let Ie=V.get(S.textures[Ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ee,Ie.__webglTexture,G,ve)}}else if(S!==null&&G!==0){let ve=V.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,G)}q=-1};function Tp(S){let D=V.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=A.textureFormatReadable(S.format),D.__typeReadable=A.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,G,z,H,ye,Te,ve=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee){y.bindFramebuffer(P.FRAMEBUFFER,Ee);try{let Ie=S.textures[ve],Je=Ie.format,st=Ie.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve);let Ae=Tp(Ie);if(Ae.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&G>=0&&G<=S.height-H&&P.readPixels(D,G,z,H,me.convert(Je),me.convert(st),ye)}finally{let Ie=se!==null?V.get(se).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,D,G,z,H,ye,Te,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee)if(D>=0&&D<=S.width-z&&G>=0&&G<=S.height-H){y.bindFramebuffer(P.FRAMEBUFFER,Ee);let Ie=S.textures[ve],Je=Ie.format,st=Ie.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve);let Ae=Tp(Ie);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xt),P.bufferData(P.PIXEL_PACK_BUFFER,ye.byteLength,P.STREAM_READ),P.readPixels(D,G,z,H,me.convert(Je),me.convert(st),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Yt=se!==null?V.get(se).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Yt);let It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Jm(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ye),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(xt),P.deleteSync(It),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,G=0){let z=Math.pow(2,-G),H=Math.floor(S.image.width*z),ye=Math.floor(S.image.height*z),Te=D!==null?D.x:0,ve=D!==null?D.y:0;Y.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,Te,ve,H,ye),y.unbindTexture()},this.copyTextureToTexture=function(S,D,G=null,z=null,H=0,ye=0){let Te,ve,Ee,Ie,Je,st,Ae,xt,Yt,It=S.isCompressedTexture?S.mipmaps[ye]:S.image;if(G!==null)Te=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,Je=G.min.y,st=G.isBox3?G.min.z:0;else{let Vt=Math.pow(2,-H);Te=Math.floor(It.width*Vt),ve=Math.floor(It.height*Vt),S.isDataArrayTexture?Ee=It.depth:S.isData3DTexture?Ee=Math.floor(It.depth*Vt):Ee=1,Ie=0,Je=0,st=0}z!==null?(Ae=z.x,xt=z.y,Yt=z.z):(Ae=0,xt=0,Yt=0);let Et=me.convert(D.format),pn=me.convert(D.type),be;D.isData3DTexture?(Y.setTexture3D(D,0),be=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),be=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),be=P.TEXTURE_2D),y.activeTexture(P.TEXTURE0),y.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Sn=y.getParameter(P.UNPACK_ROW_LENGTH),ft=y.getParameter(P.UNPACK_IMAGE_HEIGHT),jn=y.getParameter(P.UNPACK_SKIP_PIXELS),yi=y.getParameter(P.UNPACK_SKIP_ROWS),as=y.getParameter(P.UNPACK_SKIP_IMAGES);y.pixelStorei(P.UNPACK_ROW_LENGTH,It.width),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,It.height),y.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(P.UNPACK_SKIP_ROWS,Je),y.pixelStorei(P.UNPACK_SKIP_IMAGES,st);let gr=S.isDataArrayTexture||S.isData3DTexture,bt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Vt=V.get(S),ls=V.get(D),Ct=V.get(Vt.__renderTarget),cs=V.get(ls.__renderTarget);y.bindFramebuffer(P.READ_FRAMEBUFFER,Ct.__webglFramebuffer),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let xr=0;xr<Ee;xr++)gr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V.get(S).__webglTexture,H,st+xr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V.get(D).__webglTexture,ye,Yt+xr)),P.blitFramebuffer(Ie,Je,Te,ve,Ae,xt,Te,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||V.has(S)){let Vt=V.get(S),ls=V.get(D);y.bindFramebuffer(P.READ_FRAMEBUFFER,L),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let Ct=0;Ct<Ee;Ct++)gr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vt.__webglTexture,H,st+Ct):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Vt.__webglTexture,H),bt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ls.__webglTexture,ye,Yt+Ct):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ls.__webglTexture,ye),H!==0?P.blitFramebuffer(Ie,Je,Te,ve,Ae,xt,Te,ve,P.COLOR_BUFFER_BIT,P.NEAREST):bt?P.copyTexSubImage3D(be,ye,Ae,xt,Yt+Ct,Ie,Je,Te,ve):P.copyTexSubImage2D(be,ye,Ae,xt,Ie,Je,Te,ve);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(be,ye,Ae,xt,Yt,Te,ve,Ee,Et,pn,It.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(be,ye,Ae,xt,Yt,Te,ve,Ee,Et,It.data):P.texSubImage3D(be,ye,Ae,xt,Yt,Te,ve,Ee,Et,pn,It):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ye,Ae,xt,Te,ve,Et,pn,It.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ye,Ae,xt,It.width,It.height,Et,It.data):P.texSubImage2D(P.TEXTURE_2D,ye,Ae,xt,Te,ve,Et,pn,It);y.pixelStorei(P.UNPACK_ROW_LENGTH,Sn),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),y.pixelStorei(P.UNPACK_SKIP_PIXELS,jn),y.pixelStorei(P.UNPACK_SKIP_ROWS,yi),y.pixelStorei(P.UNPACK_SKIP_IMAGES,as),ye===0&&D.generateMipmaps&&P.generateMipmap(be),y.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){X=0,W=0,se=null,y.reset(),Me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Zf={};cl(Zf,{GRADE_GLSL:()=>qa,H:()=>wu,SUN:()=>kf,U:()=>rn,VIEW_M:()=>Gf,W:()=>Tu,bigPx:()=>Vf,camera:()=>Mn,canvas:()=>ln,envMat:()=>ir,envMesh:()=>bu,initCamera:()=>Hf,initEnv:()=>Xf,initLights:()=>qf,initRenderer:()=>zf,meta:()=>sn,realLook:()=>Di,render:()=>Yf,renderer:()=>Nt,scene:()=>ct,setView:()=>Wf,shadow:()=>yn,toUI:()=>vo,view:()=>nr});var Ht=typeof wx!="undefined"&&typeof GameGlobal!="undefined",Uf=Ht?"":typeof location!="undefined"?location.pathname.replace(/[^/]*$/,""):"",Yn=(()=>{if(Ht)try{let e=wx.getLaunchOptionsSync&&wx.getLaunchOptionsSync();return e&&e.query||{}}catch(e){return{}}let i={};return new URLSearchParams(location.search).forEach((e,t)=>{i[t]=e}),i})();function _u(){if(Ht){let i=wx.getWindowInfo?wx.getWindowInfo():wx.getSystemInfoSync(),e={};try{e=wx.getDeviceInfo?wx.getDeviceInfo():wx.getSystemInfoSync()}catch(s){}let t=null;try{t=wx.getMenuButtonBoundingClientRect&&wx.getMenuButtonBoundingClientRect()}catch(s){}let n=i.safeArea&&i.safeArea.top||i.statusBarHeight||0;return{w:i.windowWidth,h:i.windowHeight,dpr:i.pixelRatio||2,platform:e.platform||"unknown",model:e.model||"",menu:t,safeTop:n}}return{w:innerWidth,h:innerHeight,dpr:devicePixelRatio||1,platform:"browser",model:navigator.userAgent,menu:null,safeTop:0}}var On=null;function vu(){return On||(Ht?On=GameGlobal.__mainCanvas||wx.createCanvas():(On=document.createElement("canvas"),Object.assign(On.style,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%",display:"block",touchAction:"none"}),document.body.appendChild(On)),On.addEventListener||(On.addEventListener=()=>{}),On.removeEventListener||(On.removeEventListener=()=>{}),On.style||(On.style={}),On)}function Ni(i,e){Ht&&!On&&vu();let t=Ht?wx.createCanvas():document.createElement("canvas");return t.width=i,t.height=e,t.addEventListener||(t.addEventListener=()=>{}),t}function go(i){return new Promise((e,t)=>{let n=Ht?wx.createImage():new Image;n.onload=()=>e(n),n.onerror=s=>t(new Error("image "+i+" "+(s&&s.errMsg||""))),n.src=Uf+i})}function xo(i){return Ht?new Promise((e,t)=>wx.getFileSystemManager().readFile({filePath:i,success:n=>e(n.data),fail:n=>t(new Error("read "+i+" "+n.errMsg))})):fetch(Uf+i).then(e=>{if(!e.ok)throw new Error("fetch "+i+" "+e.status);return e.arrayBuffer()})}function yu(i){return Ht?new Promise((e,t)=>wx.getFileSystemManager().readFile({filePath:i,encoding:"utf8",success:n=>e(JSON.parse(n.data)),fail:n=>t(new Error("read "+i+" "+n.errMsg))})):fetch(Uf+i).then(e=>e.json())}function F0(i,e,t){let n=o=>({id:o.identifier,x:o.clientX,y:o.clientY});if(Ht){wx.onTouchStart(o=>{for(let a of o.changedTouches)i(n(a))}),wx.onTouchMove(o=>{for(let a of o.changedTouches)e(n(a))}),wx.onTouchEnd(o=>{for(let a of o.changedTouches)t(n(a))}),wx.onTouchCancel(o=>{for(let a of o.changedTouches)t(n(a))});return}let s=vu(),r=o=>({id:o.pointerId,x:o.clientX,y:o.clientY});s.addEventListener("pointerdown",o=>{try{s.setPointerCapture(o.pointerId)}catch(a){}i(r(o))}),s.addEventListener("pointermove",o=>e(r(o))),s.addEventListener("pointerup",o=>t(r(o))),s.addEventListener("pointercancel",o=>t(r(o)))}var Ff=i=>Ht?requestAnimationFrame(i):Yn.raf==="timer"?setTimeout(()=>i(performance.now()),16):window.requestAnimationFrame(i),Wa=()=>typeof performance!="undefined"&&performance.now?performance.now():Date.now();function O0(){try{if(Ht)return wx.createWebAudioContext?wx.createWebAudioContext():null;let i=window.AudioContext||window.webkitAudioContext;return i?new i:null}catch(i){return console.warn("audio ctx",i),null}}function Mu(i,e){if(Ht){wx.onShow&&wx.onShow(i),wx.onHide&&wx.onHide(e);return}document.addEventListener("visibilitychange",()=>document.hidden?e():i())}var Fb=Wa(),D0=new Set;function Zn(i,e=1,t=!0){if(!(t&&D0.has(i))){D0.add(i);try{Ht&&wx.reportGameEvent&&wx.reportGameEvent({eventId:i,costTime:Math.round(Wa()-Fb),result:e})}catch(n){}}}var U0=!1;function xu(){if(!U0){U0=!0,console.log("game end");try{typeof window!="undefined"&&window.super_html&&window.super_html.game_end&&window.super_html.game_end()}catch(i){}try{Ht&&wx.notifyMiniProgramPlayableStatus&&wx.notifyMiniProgramPlayableStatus({isEnd:!0})}catch(i){}}}function Xa(i=!1){if(console.log("# playable_controller download: "+(typeof window!="undefined"&&window.super_html_channel||"common")+" #"),i||Zn(1012,1,!1),Ht){xu();return}try{window.super_html&&window.super_html.download&&window.super_html.download()}catch(e){}i&&xu()}var Nt,ct,Mn,sn,Tu=1080,wu=1920,ln,rn={uRes:{value:new oe(1,1)},uTime:{value:0},uVig:{value:.08},uGr:{value:new ut(...(Yn.gr||"1.04,0.9,1.24,1.12").split(",").map(Number))},uMS:{value:1},uMK:{value:1},uMT:{value:new C(1,1,1)},uLog:{value:new C(-7.5,-3.68,1.85)}},B0=uo.degToRad(14),Of=uo.degToRad(72),kf=new C(Math.cos(Of)*Math.cos(B0),Math.sin(Of),Math.cos(Of)*Math.sin(B0)).normalize();function zf(){ln=vu();let i=_u(),e=Math.min(i.dpr,2);ln.width=Math.round(i.w*e),ln.height=Math.round(i.h*e);let t={alpha:!1,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"},n=ln.getContext("webgl2",t);if(!n)throw new Error("WebGL2 \u4E0D\u53EF\u7528");return Nt=new pu({canvas:ln,context:n,antialias:!0}),Nt.setPixelRatio(1),Nt.setSize(ln.width,ln.height,!1),Nt.outputColorSpace=dt,Nt.setClearColor(14278116,1),Nt.autoClear=!1,Tu=1080,wu=Math.round(1080*ln.height/ln.width),rn.uRes.value.set(ln.width,ln.height),ct=new Ti,{renderer:Nt,W:Tu,H:wu}}var Su=null,nr={cx:0,cy:0,w:0,h:0};function Hf(i){sn=i;let e=new C(...i.L),t=new C(...i.F);Mn=new Kt(i.fov,i.aspect,i.near,i.far),Mn.position.copy(e).addScaledVector(t,-i.D),Mn.up.set(0,1,0),Mn.lookAt(e),Mn.updateMatrixWorld(),Su=Mn.clone(),Su.updateProjectionMatrix(),Su.updateMatrixWorld()}var _o=new C;function Vf(i,e,t,n=[0,0]){return _o.set(i,e,t).project(Su),n[0]=(_o.x*.5+.5)*sn.fullW,n[1]=(.5-_o.y*.5)*sn.fullH,n}var Gf=10.6;function Wf(i,e,t){let n=sn.clamp||[0,0,sn.fullW,sn.fullH],s=t*sn.ppm,r=s*ln.height/ln.width,o=Math.min(1,(n[2]-n[0])/s,(n[3]-n[1])/r);s*=o,r*=o;let a=i-s/2,l=e-r/2;a=Math.max(n[0],Math.min(n[2]-s,a)),l=Math.max(n[1],Math.min(n[3]-r,l)),nr.cx=a+s/2,nr.cy=l+r/2,nr.w=s,nr.h=r,Mn.setViewOffset(sn.fullW,sn.fullH,a,l,s,r),Mn.updateProjectionMatrix(),ir.uniforms.uWin.value.set(a/sn.fullW,l/sn.fullH,s/sn.fullW,r/sn.fullH)}function vo(i,e,t,n=[0,0]){return _o.set(i,e,t).project(Mn),n[0]=(_o.x*.5+.5)*Tu,n[1]=(.5-_o.y*.5)*wu,n}var qa="vec3 grade_(vec3 c, vec4 g){ c = pow(max(c * g.x, 0.0), vec3(g.y)); float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = mix(vec3(l), c, g.z); return clamp((c - 0.5) * g.w + 0.5, 0.0, 1.0); }",Ob="void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",Bb=`precision highp float;
uniform sampler2D tCol; uniform sampler2D tDep; uniform sampler2D tSh;
uniform vec4 uWin; uniform vec2 uRes; uniform vec2 uNF; uniform float uTime;
uniform vec3 uCamPos; uniform vec3 uR; uniform vec3 uU; uniform vec3 uF; uniform float uWm; uniform float uHm; uniform float uD;
uniform mat4 uShVP; uniform float uShOn; uniform vec3 uShCol; uniform float uVig; uniform vec2 uBig; uniform vec3 uLog; uniform vec4 uGr;
${qa}
float hn(vec2 p){ vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hn(i), hn(i + vec2(1.0, 0.0)), f.x), mix(hn(i + vec2(0.0, 1.0)), hn(i + vec2(1.0, 1.0)), f.x), f.y); }
void main(){
  vec2 s = gl_FragCoord.xy / uRes;
  vec2 bt = vec2(uWin.x + s.x * uWin.z, uWin.y + (1.0 - s.y) * uWin.w);
  vec2 tuv = vec2(bt.x, 1.0 - bt.y);
  vec3 dp = texture2D(tDep, tuv).rgb;
  float d16 = (floor(dp.r * 255.0 + 0.5) * 256.0 + floor(dp.g * 255.0 + 0.5)) / 65535.0;
  float vz = mix(uNF.x, uNF.y, d16);
  bool water = dp.b > 0.5;
  vec2 q = vec2((bt.x - 0.5) * uWm, (0.5 - bt.y) * uHm);
  vec3 P = uCamPos + (uR * q.x + uU * q.y) * (vz / uD) + uF * vz;
  vec3 col;
  if (water) {
    // \u51B0\u6D1E\u6C34\u9762\uFF1A\u7EC6\u8282\u8F7B\u8F7B\u6643 + \u5DE8\u6728\u90A3\u513F\u5F80\u5916\u8D70\u7684\u5708\u7EB9\uFF08\u4F4E\u9891\u5E95\u8272\u4E0D\u52A8\uFF09
    vec2 rel = P.xz - uLog.xy; float r = length(rel);
    float ring = sin(r * 7.0 - uTime * 3.2) * exp(-max(r - uLog.z, 0.0) * 0.9) * smoothstep(uLog.z - 0.1, uLog.z + 0.25, r);
    vec2 wob = (vec2(vn(P.xz * 2.2 + uTime * 0.35), vn(P.zx * 2.2 - uTime * 0.3)) - 0.5) * 2.6 / uBig + normalize(rel + 1e-4) * ring * 1.4 / uBig;
    vec3 base = textureLod(tCol, tuv, 2.5).rgb, hi = texture2D(tCol, tuv + wob).rgb - textureLod(tCol, tuv + wob, 2.5).rgb;
    col = base + hi * 1.1 + vec3(0.05, 0.06, 0.07) * max(ring, 0.0);
  } else col = texture2D(tCol, tuv).rgb;
  if (uShOn > 0.5) {
    vec4 sc = uShVP * vec4(P, 1.0); vec3 sp3 = sc.xyz / sc.w * 0.5 + 0.5;
    if (sp3.x > 0.0 && sp3.x < 1.0 && sp3.y > 0.0 && sp3.y < 1.0) {
      float sh = 0.0, b = 0.004; vec2 o = vec2(1.0 / 1024.0);
      sh += step(texture2D(tSh, sp3.xy).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy + vec2(o.x, o.y) * 1.5).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy + vec2(-o.x, o.y) * 1.5).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy + vec2(o.x, -o.y) * 1.5).r, sp3.z - b);
      sh += step(texture2D(tSh, sp3.xy - vec2(o.x, o.y) * 1.5).r, sp3.z - b);
      sh /= 5.0;
      col *= mix(vec3(1.0), uShCol, sh * (water ? 0.5 : 1.0));
    }
  }
  col = grade_(col, uGr);
  vec2 d = s - 0.5; col *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d * vec2(1.0, 1.25)));
  col += (hn(gl_FragCoord.xy + floor(uTime * 30.0) * 17.13) + hn(gl_FragCoord.xy * 1.7 + 3.1) - 1.0) * 2.0 / 255.0;
  gl_FragColor = vec4(col, 1.0);
  float vzd = water ? vz + 0.6 : vz;   // \u6C34\u9762\u5F80\u4E0B\u8BA9 0.6m\uFF1A\u5DE8\u6728\u4ECE\u6C34\u4E0B\u5192\u4E0A\u6765\u90A3\u622A\u7167\u6837\u753B\uFF08\u5DE8\u6728\u81EA\u5DF1\u67D3\u6C34\u8272\uFF09
  float zn = (uNF.y + uNF.x) / (uNF.y - uNF.x) - 2.0 * uNF.y * uNF.x / ((uNF.y - uNF.x) * vzd);
  gl_FragDepth = d16 > 0.9998 ? 1.0 : zn * 0.5 + 0.5;
}`,ir,bu,yn={rt:null,cam:null,on:!0},k0=new Ti;function Xf({col:i,dep:e}){i.colorSpace=Fn,i.generateMipmaps=!0,i.minFilter=Gn,i.magFilter=Lt,i.anisotropy=4,i.needsUpdate=!0,e.colorSpace=Fn,e.generateMipmaps=!1,e.minFilter=e.magFilter=kt,e.needsUpdate=!0,yn.rt=new xn(1024,1024,{depthBuffer:!0}),yn.rt.depthTexture=new wi(1024,1024),yn.rt.depthTexture.type=Wn,yn.cam=new Dn(-13,13,13,-13,1,80);let t=sn,n=new C(...t.L),s=new C(...t.F);ir=new zt({vertexShader:Ob,fragmentShader:Bb,uniforms:{tCol:{value:i},tDep:{value:e},tSh:{value:yn.rt.depthTexture},uWin:{value:new ut(0,0,1,1)},uRes:rn.uRes,uNF:{value:new oe(t.near,t.far)},uTime:rn.uTime,uCamPos:{value:n.clone().addScaledVector(s,-t.D)},uR:{value:new C(...t.R)},uU:{value:new C(...t.U)},uF:{value:s},uWm:{value:t.Wm},uHm:{value:t.Hm},uD:{value:t.D},uBig:{value:new oe(t.fullW,t.fullH)},uShVP:{value:new ze},uShOn:{value:1},uShCol:{value:new C(.62,.66,.78)},uVig:rn.uVig,uLog:rn.uLog,uGr:rn.uGr},depthTest:!0,depthWrite:!0,depthFunc:Nr});let r=new lt;r.setAttribute("position",new at(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),bu=new qe(r,ir),bu.frustumCulled=!1,k0.add(bu)}function qf(){ct.add(new wa(15593983,11842758,1.68));let i=new Zs(16774890,1.5);i.position.copy(kf).multiplyScalar(50),ct.add(i,i.target)}function Di(i,{k:e=1,sat:t=1}={}){let n=i.onBeforeCompile;i.onBeforeCompile=(r,o)=>{n&&n!==en.prototype.onBeforeCompile&&n(r,o),Object.assign(r.uniforms,{uRes:rn.uRes,uVig:rn.uVig,uMS:rn.uMS,uMK:rn.uMK,uMT:rn.uMT,uGr:rn.uGr}),r.fragmentShader=r.fragmentShader.replace("void main() {",`uniform vec2 uRes; uniform float uVig; uniform float uMS; uniform float uMK; uniform vec3 uMT; uniform vec4 uGr;
`+qa+`
void main() {`).replace("#include <opaque_fragment>",`{ float l_ = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722)); outgoingLight = mix(vec3(l_), outgoingLight, uMS * ${t.toFixed(3)}) * uMK * uMT * ${e.toFixed(3)};
  outgoingLight = pow(grade_(pow(max(outgoingLight, 0.0), vec3(1.0 / 2.2)), uGr), vec3(2.2));
  vec2 d_ = gl_FragCoord.xy / uRes - 0.5; outgoingLight *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d_ * vec2(1.0, 1.25))); }
#include <opaque_fragment>`)};let s=i.customProgramCacheKey?i.customProgramCacheKey():"";return i.customProgramCacheKey=()=>s+"|real"+e+"|"+t,i}var Bf=new C,kb=new to;function Yf(i){if(yn.on&&yn.rt){let e=.025390625;Bf.set(Math.round(i[0]/e)*e,0,Math.round(i[1]/e)*e),yn.cam.position.copy(Bf).addScaledVector(kf,40),yn.cam.lookAt(Bf),yn.cam.updateMatrixWorld(),yn.cam.updateProjectionMatrix();let t=[];ct.traverseVisible(n=>{((n.isMesh||n.isSkinnedMesh||n.isInstancedMesh)&&!n.castShadow||n.isPoints)&&t.push(n)});for(let n of t)n.visible=!1;ct.overrideMaterial=kb,Nt.setRenderTarget(yn.rt),Nt.clear(),Nt.render(ct,yn.cam),ct.overrideMaterial=null;for(let n of t)n.visible=!0;Nt.setRenderTarget(null),ir.uniforms.uShVP.value.multiplyMatrices(yn.cam.projectionMatrix,yn.cam.matrixWorldInverse)}Nt.setRenderTarget(null),Nt.clear(),Nt.render(k0,Mn),Nt.render(ct,Mn)}var ed={};cl(ed,{FONT:()=>Mo,atlas:()=>Vb,begin:()=>jf,bill:()=>Ya,buildAtlas:()=>$f,flush:()=>Qf,num:()=>Nu,quads:()=>Jf,rect:()=>Wb,rr:()=>Gt,setCover:()=>Lu,spr:()=>At,sprite:()=>Hb,text:()=>sr});var W0=null,Mo='"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif';function Gt(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function sr(i,e,t,n,{size:s=40,fill:r="#fff",stroke:o="#222",lw:a=7,align:l="center",alpha:c=1,weight:u=900}={}){i.save(),i.globalAlpha=c,i.font=`${u} ${s}px ${Mo}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",a>0&&(i.lineWidth=a,i.strokeStyle=o,i.strokeText(e,t,n)),i.fillStyle=r,i.fillText(e,t,n),i.restore()}function Ya(i,e,t,n){i.save(),i.translate(e,t),i.lineJoin="round";let s=n*2,r=n*1.15;for(let[o,a,l]of[[n*.12,n*.12,"#2e9a3a"],[0,0,"#56d25c"]])Gt(i,-s/2+o,-r/2+a,s,r,n*.16),i.fillStyle=l,i.fill(),i.lineWidth=n*.1,i.strokeStyle="#1b5e22",i.stroke();Gt(i,-s/2+n*.22,-r/2+n*.2,s-n*.44,r-n*.4,n*.1),i.lineWidth=n*.07,i.strokeStyle="rgba(25,100,35,0.8)",i.stroke(),i.beginPath(),i.ellipse(0,0,n*.3,n*.3,0,0,7),i.fillStyle="#2f9e3c",i.fill(),i.fillStyle="#f3f6ea",i.fillRect(-n*.12,-r/2-n*.02,n*.24,r+n*.04),i.restore()}function zb(i,e,t,n){i.save(),i.translate(e,t),i.scale(n,n);for(let[s,r]of[[0,8],[3,0],[-2,-8]])Ya(i,s,r,22);i.restore()}function z0(i,e,t,n,s){Gt(i,-e/2,-t/2+6,e,t,t/2),i.fillStyle="#1f7a17",i.fill(),Gt(i,-e/2,-t/2,e,t,t/2);let r=i.createLinearGradient(0,-t/2,0,t/2);r.addColorStop(0,"#8ef05a"),r.addColorStop(1,"#2fb52a"),i.fillStyle=r,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),sr(i,n,0,2,{size:s,fill:"#ffffff",stroke:"#1d6e15",lw:7})}function H0(i,e=1){i.save(),i.rotate(-.35),i.scale(e,e),i.fillStyle="#ffffff",i.strokeStyle="#1d2a44",i.lineWidth=6,i.lineJoin="round",i.beginPath(),i.moveTo(-10,0),i.lineTo(-10,-70),i.quadraticCurveTo(0,-84,10,-70),i.lineTo(10,-20),i.lineTo(30,-24),i.quadraticCurveTo(44,-22,44,-8),i.lineTo(44,40),i.quadraticCurveTo(40,74,6,78),i.lineTo(-18,78),i.quadraticCurveTo(-40,66,-44,40),i.lineTo(-48,8),i.quadraticCurveTo(-46,-6,-30,-2),i.lineTo(-10,6),i.closePath(),i.fill(),i.stroke(),i.restore()}function V0(i,e,t,n){n&&(i.fillStyle="#ffffff",i.beginPath(),i.arc(0,0,e*1.34,Math.PI*.64,Math.PI*2.36),i.lineTo(0,e*1.62),i.closePath(),i.fill(),i.lineWidth=2.5,i.strokeStyle="rgba(60,60,70,0.45)",i.stroke());let s=i.createLinearGradient(0,-e,0,e);if(t==="angry"?(s.addColorStop(0,"#ffc93e"),s.addColorStop(.5,"#ff9324"),s.addColorStop(1,"#ef4a1b")):(s.addColorStop(0,"#fff176"),s.addColorStop(.55,"#ffd23f"),s.addColorStop(1,"#f5a623")),i.fillStyle=s,i.beginPath(),i.arc(0,0,e,0,7),i.fill(),i.lineWidth=e*.07,i.strokeStyle=t==="angry"?"rgba(150,40,10,0.55)":"rgba(160,90,10,0.55)",i.stroke(),i.fillStyle="rgba(255,255,255,0.38)",i.beginPath(),i.ellipse(-e*.3,-e*.62,e*.32,e*.14,-.25,0,7),i.fill(),i.strokeStyle="#4a1a08",i.fillStyle="#4a1a08",i.lineCap="round",i.lineWidth=e*.15,t==="angry"){i.beginPath(),i.moveTo(-e*.66,-e*.36),i.lineTo(-e*.14,-e*.12),i.moveTo(e*.66,-e*.36),i.lineTo(e*.14,-e*.12),i.stroke();for(let r of[-1,1])i.beginPath(),i.ellipse(r*e*.3,e*.08,e*.1,e*.15,0,0,7),i.fill();i.lineWidth=e*.12,i.beginPath(),i.arc(0,e*.72,e*.34,-Math.PI*.8,-Math.PI*.2),i.stroke()}else if(t==="smile"){for(let r of[-1,1])i.beginPath(),i.arc(r*e*.32,-e*.12,e*.16,Math.PI*1.1,Math.PI*1.9),i.stroke();i.fillStyle="#7a2a10",i.beginPath(),i.moveTo(-e*.5,e*.15),i.quadraticCurveTo(0,e*.95,e*.5,e*.15),i.closePath(),i.fill()}else{i.fillStyle="#ff3b5c";for(let r of[-1,1])i.save(),i.translate(r*e*.34,-e*.1),i.scale(e*.017,e*.017),i.beginPath(),i.moveTo(0,6),i.bezierCurveTo(-14,-4,-8,-16,0,-8),i.bezierCurveTo(8,-16,14,-4,0,6),i.fill(),i.restore();i.fillStyle="#7a2a10",i.beginPath(),i.moveTo(-e*.42,e*.22),i.quadraticCurveTo(0,e*.85,e*.42,e*.22),i.closePath(),i.fill()}}function G0(i){i.fillStyle="#ffffff",i.beginPath(),i.arc(0,0,30,0,7),i.fill(),i.fillStyle="#3ccf3c",i.beginPath(),i.arc(0,0,25,0,7),i.fill(),i.strokeStyle="#ffffff",i.lineWidth=7,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(-11,1),i.lineTo(-3,9),i.lineTo(12,-8),i.stroke()}var Ui={},es=null,Eu=2048,Au=2048,Hb=i=>Ui[i],Vb=()=>es,Jf=()=>So;function $f({W:i,H:e,logo:t,bubIcon:n,packIcon:s,coverImg:r,renderer:o,extra:a}){W0=o,n=n||s;let l=[],c=(x,T,_)=>l.push({key:x,b:T,draw:_}),u={w:300,h:300*t.height/t.width};c("white",[0,0,8,8],x=>{x.fillStyle="#fff",x.fillRect(-2,-2,12,12)}),c("black",[0,0,8,8],x=>{x.fillStyle="#000",x.fillRect(-2,-2,12,12)}),c("logo",[-24,-24,u.w+36,u.h+36],x=>{x.save(),x.shadowColor="rgba(0,0,0,0.6)",x.shadowOffsetX=x.shadowOffsetY=3,x.shadowBlur=5,x.drawImage(t,0,0,u.w,u.h),x.restore()});{let T=360*t.height/t.width;c("logoBig",[-360/2-30,-T/2-30,360/2+30,T/2+40],_=>{_.save(),_.shadowColor="rgba(0,0,0,0.5)",_.shadowOffsetY=4,_.shadowBlur=10,_.drawImage(t,-360/2,-T/2,360,T),_.restore()})}{let T=600*t.height/t.width;c("logoLoad",[-600/2-30,-T/2-30,600/2+30,T/2+40],_=>{_.save(),_.shadowColor="rgba(0,0,0,0.5)",_.shadowOffsetY=4,_.shadowBlur=14,_.drawImage(t,-600/2,-T/2,600,T),_.restore()})}c("btnTop",[-158,-65,158,71],x=>z0(x,268,82,"\u7ACB\u5373\u4F53\u9A8C",40)),c("btnEnd",[-324,-99,324,105],x=>z0(x,600,150,"\u7ACB\u5373\u4F53\u9A8C",66)),c("hudBg",[-90,-90,274,90],x=>{Gt(x,0,-30,250,60,20),x.fillStyle="rgba(40,44,58,0.55)",x.fill(),zb(x,4,0,1.45)}),c("check",[-44,-44,44,44],G0),c("bub",[-48,-48,48,60],x=>{x.fillStyle="#ffffff",x.beginPath(),x.arc(0,0,33,Math.PI*.62,Math.PI*2.38),x.lineTo(0,46),x.closePath(),x.fill(),x.lineWidth=2.5,x.strokeStyle="rgba(60,60,70,0.5)",x.stroke()}),c("bubFill",[-30,-30,30,30],x=>{x.fillStyle="#4fd34f",x.beginPath(),x.arc(0,0,29,0,7),x.fill()}),c("bubIcon",[-30,-30,30,30],x=>{n&&x.drawImage(n,-30,-30,60,60)});for(let[x,T,_]of[["ang0","angry",0],["ang1","angry",1],["smile1","smile",1],["heart1","heart",1]])c(x,[-58,-54,58,64],b=>V0(b,32,T,_));let f=1.35,h=e-510;c("tutLine",[-170*f-30,-30,170*f+30,30],x=>{x.strokeStyle="rgba(255,255,255,0.75)",x.lineWidth=10*f,x.lineCap="round",x.setLineDash([2,22*f]),x.beginPath(),x.moveTo(-170*f,0),x.lineTo(170*f,0),x.stroke(),x.setLineDash([])}),c("tutText",[-330,-90,330,90],x=>sr(x,"\u8F7B\u5212\u79FB\u52A8",0,0,{size:Math.round(64*f),fill:"#ffffff",stroke:"#1d2a44",lw:Math.round(10*f)})),c("hand",[-150,-170,150,170],x=>H0(x,f)),c("joyBase",[-120,-120,120,120],x=>{x.fillStyle="rgba(255,255,255,0.22)",x.strokeStyle="rgba(255,255,255,0.7)",x.lineWidth=6,x.beginPath(),x.arc(0,0,104,0,7),x.fill(),x.stroke()}),c("joyKnob",[-60,-60,60,60],x=>{x.fillStyle="rgba(255,255,255,0.8)",x.beginPath(),x.arc(0,0,48,0,7),x.fill()}),c("full",[-110,-46,110,46],x=>{Gt(x,-96,-34,192,68,34),x.fillStyle="rgba(214,40,30,0.92)",x.fill(),x.lineWidth=4,x.strokeStyle="#fff",x.stroke(),sr(x,"\u6EE1\u4E86",0,2,{size:40,fill:"#fff",stroke:"#7a120a",lw:6})}),c("loading",[-140,-40,140,40],x=>sr(x,"\u52A0\u8F7D\u4E2D",0,0,{size:40,fill:"#fff",stroke:"rgba(0,0,0,0.55)",lw:6,weight:700})),c("pct",[-30,-40,40,40],x=>sr(x,"%",0,0,{size:40,fill:"#fff",stroke:"rgba(0,0,0,0.55)",lw:6,weight:700})),c("barBg",[-4,-4,724,20],x=>{Gt(x,0,0,720,16,8),x.fillStyle="rgba(255,255,255,0.18)",x.fill(),x.lineWidth=2,x.strokeStyle="rgba(255,255,255,0.35)",x.stroke()}),c("barFill",[0,0,16,16],x=>{let T=x.createLinearGradient(0,0,16,0);T.addColorStop(0,"#7fd8ff"),T.addColorStop(1,"#ffffff"),x.fillStyle=T,x.fillRect(-2,-2,20,20)}),c("snow",[-8,-8,8,8],x=>{let T=x.createRadialGradient(0,0,0,0,0,7);T.addColorStop(0,"rgba(255,255,255,1)"),T.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=T,x.beginPath(),x.arc(0,0,7,0,7),x.fill()});for(let[x,T,_,b,w]of[["a",46,7,"#2c2f3a","#ffffff"],["r",46,7,"#2c2f3a","#ff4a3a"],["p",40,6,"rgba(0,0,0,0.55)","#ffffff"]])for(let R of"0123456789")c(x+R,[-_-6,-T-_,T*.8+_,T+_],M=>{M.font=`900 ${T}px ${Mo}`,M.textAlign="left",M.textBaseline="middle",M.lineJoin="round",M.lineWidth=_,M.strokeStyle=b,M.strokeText(R,0,0),M.fillStyle=w,M.fillText(R,0,0)});a&&a(c,{rr:Gt,text:sr,bill:Ya,face:V0,check:G0,hand:H0,FONT:Mo,W:i,H:e});let d=Ni(Eu,Au),p=d.getContext("2d"),v=2,m=2,g=0;for(let x of l){let T=Math.ceil(x.b[2]-x.b[0])+2,_=Math.ceil(x.b[3]-x.b[1])+2;if(v+T>Eu&&(v=2,m+=g+2,g=0),m+_>Au){console.warn("ui atlas full",x.key);break}p.save(),p.beginPath(),p.rect(v,m,T,_),p.clip(),p.translate(v+1-x.b[0],m+1-x.b[1]),x.draw(p),p.restore(),Ui[x.key]={u0:(v+1)/Eu,v0:(m+1)/Au,u1:(v+1+x.b[2]-x.b[0])/Eu,v1:(m+1+x.b[3]-x.b[1])/Au,b:x.b},v+=T+2,g=Math.max(g,_)}p.font=`900 46px ${Mo}`;for(let x of"0123456789")Ui["a"+x].adv=Ui["r"+x].adv=p.measureText(x).width;p.font=`900 40px ${Mo}`;for(let x of"0123456789")Ui["p"+x].adv=p.measureText(x).width;return es=new vt(d),es.colorSpace=dt,es.premultiplyAlpha=!0,es.flipY=!1,es.generateMipmaps=!1,es.minFilter=Lt,es.needsUpdate=!0,Gb(i,e,r),{LOGO:u}}var yo=1600,Ss,Kf,Ru,X0,Cu,Iu,Pu,So=0,rr;function Gb(i,e,t){Ss=new lt,Cu=new at(new Float32Array(yo*4*2),2).setUsage(Ii),Iu=new at(new Float32Array(yo*4*2),2).setUsage(Ii),Pu=new at(new Float32Array(yo*4),1).setUsage(Ii),Ss.setAttribute("position",Cu),Ss.setAttribute("uv",Iu),Ss.setAttribute("aA",Pu);let n=new Uint16Array(yo*6);for(let r=0;r<yo;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);Ss.setIndex(new at(n,1)),Ss.boundingSphere=new _n(new C,1e9);let s=new zt({uniforms:{t:{value:es},uWH:{value:new oe(i,e)}},vertexShader:"attribute float aA; varying vec2 vU; varying float vA; uniform vec2 uWH; void main(){ vU = uv; vA = aA; gl_Position = vec4(position.x / uWH.x * 2.0 - 1.0, 1.0 - position.y / uWH.y * 2.0, 0.0, 1.0); }",fragmentShader:"uniform sampler2D t; varying vec2 vU; varying float vA; void main(){ gl_FragColor = texture2D(t, vU) * vA; }",transparent:!0,side:an,depthTest:!1,depthWrite:!1,blending:xc,blendSrc:Pa,blendDst:ro,blendSrcAlpha:Pa,blendDstAlpha:ro});if(Kf=new qe(Ss,s),Kf.frustumCulled=!1,Ru=new Ti,Ru.add(Kf),X0=new Dn(-1,1,1,-1,-1,1),t){let r=new vt(t);r.colorSpace=dt,r.needsUpdate=!0;let o=t.width/t.height,a=i/e,l=o>a?a/o:1,c=o>a?1:o/a,u=new Pn(2,2),f=u.attributes.uv;for(let h=0;h<f.count;h++)f.setXY(h,.5+(f.getX(h)-.5)*l,.5+(f.getY(h)-.5)*c);rr=new qe(u,new zt({uniforms:{t:{value:r},uA:{value:1}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D t; uniform float uA; varying vec2 vU; void main(){ gl_FragColor = vec4(texture2D(t, vU).rgb, uA); }",transparent:!0,depthTest:!1,depthWrite:!1})),rr.frustumCulled=!1,rr.renderOrder=-1,Ru.add(rr)}}function Lu(i){rr&&(rr.visible=i>.003,rr.material.uniforms.uA.value=i)}function At(i,e,t,n={}){var _,b,w,R,M;let s=Ui[i];if(!s||So>=yo)return;let r=(_=n.a)!=null?_:1;if(r<=.003)return;let o=(w=(b=n.sx)!=null?b:n.s)!=null?w:1,a=(M=(R=n.sy)!=null?R:n.s)!=null?M:1,[l,c,u,f]=s.b,h=s.v0;if(n.w!==void 0){let E=n.w/(u-l),I=n.h/(f-c);l*=E,u*=E,c*=I,f*=I}if(n.crop!==void 0){let E=Math.max(0,Math.min(1,n.crop)),I=f-(f-c)*E;h=s.v1-(s.v1-s.v0)*E,c=I}let d=Math.cos(n.rot||0),p=Math.sin(n.rot||0),v=Cu.array,m=Iu.array,g=Pu.array,x=So*4,T=[[l,c,s.u0,h],[u,c,s.u1,h],[u,f,s.u1,s.v1],[l,f,s.u0,s.v1]];for(let E=0;E<4;E++){let[I,N,F,k]=T[E],L=I*o,B=N*a;v[(x+E)*2]=e+L*d-B*p,v[(x+E)*2+1]=t+L*p+B*d,m[(x+E)*2]=F,m[(x+E)*2+1]=k,g[x+E]=r}So++}function Wb(i,e,t,n,s){At("white",i,e,{w:t,h:n,a:s})}function Nu(i,e,t,{set:n="a",align:s="right",sc:r=1,a:o=1}={}){i=String(i);let a=0;for(let c of i)a+=(Ui[n+c]?Ui[n+c].adv:20)*r;let l=s==="right"?e-a:s==="center"?e-a/2:e;for(let c of i)At(n+c,l,t,{s:r,a:o}),l+=(Ui[n+c]?Ui[n+c].adv:20)*r;return a}function jf(){So=0}function Qf(){Cu.needsUpdate=Iu.needsUpdate=Pu.needsUpdate=!0,Ss.setDrawRange(0,So*6),W0.render(Ru,X0)}var Fd={};cl(Fd,{glb:()=>Dd,json:()=>Ud,setProgress:()=>Pd,tex:()=>Nd});function td(i,e){if(e===of)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===co||e===ka){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===co)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function bo(i){let e=new Map,t=new Map,n=i.clone();return q0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function q0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)q0(i.children[n],e.children[n],t)}var Du=class extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new Uu(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uu(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ji.extractUrlBase(e);o=ji.resolveURL(c,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new no(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===j0){try{o[tt.KHR_BINARY_GLTF]=new Sd(e)}catch(f){s&&s(f);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Cd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case tt.KHR_MATERIALS_UNLIT:o[f]=new od;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[f]=new bd(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[f]=new Td;break;case tt.KHR_MESH_QUANTIZATION:o[f]=new wd;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Xb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Wt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rd=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ra(u),c.distance=f;break;case"spot":c=new Aa(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},od=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],Tn),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],Tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},vd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},yd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}},Md=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(let p of f){let v=new ze,m=new C,g=new Pt,x=new C(1,1,1),T=new di(p.geometry,p.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),T.setMatrixAt(b,v.compose(m,g,x));let _=null;for(let b in l)if(b==="_COLOR_0"){let w=l[b];T.instanceColor=new Yi(w.array,w.itemSize,w.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(_===null){let R=T.geometry;_=new lt,_.name=R.name;for(let M in R.attributes)_.setAttribute(M,R.attributes[M]);for(let M in R.morphAttributes)_.morphAttributes[M]=R.morphAttributes[M];R.index!==null&&_.setIndex(R.index),_.morphTargetsRelative=R.morphTargetsRelative;for(let M of R.groups)_.addGroup(M.start,M.count,M.materialIndex);R.boundingBox!==null&&(_.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(_.boundingSphere=R.boundingSphere.clone()),_.drawRange.start=R.drawRange.start,_.drawRange.count=R.drawRange.count,_.userData=Object.assign({},R.userData),T.geometry=_}let w=l[b];_.setAttribute(b,new Yi(w.array,w.itemSize,w.normalized))}Ut.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},j0="glTF",Za=12,Z0={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==j0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Za,r=new DataView(e,Za),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Z0.JSON){let c=new Uint8Array(e,Za+o,a);this.content=n.decode(c)}else if(l===Z0.BIN){let c=Za+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=Ad[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=Ad[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=To[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let v=d.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}f(d)},a,c,Tn,h)})})}},Td=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},wd=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Fu=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,v=p-c,m=-2*d+3*h,g=d-h,x=1-m,T=g-h+f;for(let _=0;_!==a;_++){let b=o[v+_+a],w=o[v+_+l]*u,R=o[p+_+a],M=o[p+_]*u;r[_]=x*b+T*w+m*R+g*M}return r}},qb=new Pt,Ed=class extends Fu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return qb.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},K0={9728:kt,9729:Lt,9984:Mc,9985:oo,9986:Qs,9987:Gn},J0={33071:ei,33648:Ur,10497:ni},nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yb={CUBICSPLINE:void 0,LINEAR:ks,STEP:Bs},id={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Xs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),i.DefaultMaterial}function or(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Jb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $b(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=i.indices+":"+sd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+sd(i.targets[n]);return e}function sd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Qb=new ze,Cd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new Ta(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new no(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return or(r,a,s),Fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=nd[s.type],a=To[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new at(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=nd[s.type],c=To[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,v,m;if(d&&d!==f){let g=Math.floor(h/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,T=t.cache.get(x);T||(v=new c(a,g*d,s.count*d/u),T=new Hr(v,d/u),t.cache.add(x,T)),m=new Vr(T,l,h%d/u,p)}else a===null?v=new c(s.count*l):v=new c(a,h,s.count*l),m=new at(v,l,p);if(s.sparse!==void 0){let g=nd.SCALAR,x=To[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,b=new x(o[1],T,s.sparse.count*g),w=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new at(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,M=b.length;R<M;R++){let E=b[R];if(m.setX(E,w[R*l]),l>=2&&m.setY(E,w[R*l+1]),l>=3&&m.setZ(E,w[R*l+2]),l>=4&&m.setW(E,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=K0[h.magFilter]||Lt,u.minFilter=K0[h.minFilter]||Gn,u.wrapS=J0[h.wrapS]||ni,u.wrapT=J0[h.wrapT]||ni,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==kt&&u.minFilter!==Lt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let p=h;t.isImageBitmapLoader===!0&&(p=function(v){let m=new vt(v);m.needsUpdate=!0,h(m)}),t.load(ji.resolveURL(f,r.path),p,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Fi(f,o),f.userData.mimeType=o.mimeType||jb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Yr,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new qr,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Xs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let f=s[tt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Tn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,dt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);let u=r.alphaMode||id.OPAQUE;if(u===id.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===id.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Jt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let f=r.emissiveFactor;a.emissive=new Le().setRGB(f[0],f[1],f[2],Tn)}return r.emissiveTexture!==void 0&&o!==Jt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Fi(f,r),t.associations.set(f,{materials:e}),r.extensions&&or(s,f,r),f})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=$b(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=$0(new lt,c,t),c.mode===ii.TRIANGLE_STRIP?h=h.then(d=>td(d,ka)):c.mode===ii.TRIANGLE_FAN&&(h=h.then(d=>td(d,co))),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Zb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){let v=u[d],m=o[d],g,x=c[d];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&_?new ra(v,x):new qe(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ii.LINES)g=new aa(v,x);else if(m.mode===ii.LINE_STRIP)g=new Gs(v,x);else if(m.mode===ii.LINE_LOOP)g=new la(v,x);else if(m.mode===ii.POINTS)g=new ca(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Jb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Fi(g,r),m.extensions&&or(s,g,m),t.assignFinalMaterial(g),f.push(g)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&or(s,f[0],r),f[0];let h=new Qt;r.extensions&&or(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(uo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Dn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let h=new ze;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oa(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){let d=s.channels[f],p=s.samplers[d.sampler],v=d.target,m=v.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],p=f[2],v=f[3],m=f[4],g=[];for(let T=0,_=h.length;T<_;T++){let b=h[T],w=d[T],R=p[T],M=v[T],E=m[T];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let I=n._createAnimationTracks(b,w,R,M,E);if(I)for(let N=0;N<I.length;N++)g.push(I[N])}let x=new qs(r,void 0,g);return Fi(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Qb)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,p=f[0];u.pivot=new C().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Gr:c.length>1?u=new Qt:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Fi(u,r),r.extensions&&or(n,u,r),r.matrix!==void 0){let f=new ze;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Qt;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&or(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++){let h=l[u];h.parent!==null?r.add(bo(h)):r.add(h)}let c=u=>{let f=new Map;for(let[h,d]of s.associations)(h instanceof en||h instanceof vt)&&f.set(h,d);return u.traverse(h=>{let d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}bs[r.path]===bs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(bs[r.path]){case bs.weights:u=Ki;break;case bs.rotation:u=Ji;break;case bs.translation:case bs.scale:u=xs;break;default:switch(n.itemSize){case 1:u=Ki;break;case 2:case 3:default:u=xs;break}break}let f=s.interpolation!==void 0?Yb[s.interpolation]:ks,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let v=new u(l[d]+"."+bs[r.path],t.array,h,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ji?Ed:Fu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function e1(i,e,t){let n=e.attributes,s=new fn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=Rd(To[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let f=r[c];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){let v=Rd(To[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new _n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function $0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Ad[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return je.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Fi(i,e),e1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Kb(i,e.targets,t):i})}var Q0=0,Ou=0,Id=null,Pd=i=>{Id=i},Ld=()=>{Q0++,Id&&Id(Q0/Math.max(1,Ou))};async function Nd(i,{srgb:e=!0,flipY:t=!0,repeat:n=!1}={}){Ou++;let s=await go(i),r=new vt(s);return r.colorSpace=e?dt:Fn,r.flipY=t,n&&(r.wrapS=r.wrapT=ni),r.needsUpdate=!0,Ld(),r}var t1=new Du;async function Dd(i){Ou++;let e=await xo(i),t=await new Promise((n,s)=>t1.parse(e,"",n,s));return Ld(),t}async function Ud(i){Ou++;let e=await yu(i);return Ld(),e}function Bd(i){i.updateMatrixWorld(!0),i.traverse(e=>{var g;if(!e.isSkinnedMesh)return;let t=e.geometry,n=t.attributes.skinIndex,s=t.attributes.skinWeight,r=t.attributes.joints_1,o=t.attributes.weights_1;if(!n||!s)return;let a=e.skeleton.bones,l=a.map(x=>x.getWorldPosition(new C)),c=t.attributes.position,u=new C,f=s.count,h=[],d=x=>{h.length=0;for(let T=0;T<4;T++)h.push([n.getComponent(x,T),s.getComponent(x,T)]);if(r&&o)for(let T=0;T<4;T++)h.push([r.getComponent(x,T),o.getComponent(x,T)])},p=new Map;for(let x=0;x<f;x++){d(x);let T=new Map;for(let[_,b]of h)b>.001&&T.set(_,(T.get(_)||0)+1);for(let[_,b]of T)b>1&&p.set(_,(p.get(_)||0)+1)}let v=(g=[...p.entries()].sort((x,T)=>T[1]-x[1])[0])==null?void 0:g[0],m=0;for(let x=0;x<f;x++){if(d(x),u.fromBufferAttribute(c,x).applyMatrix4(e.matrixWorld),v!==void 0&&h.some(([_,b])=>_===v&&b>.001)&&u.distanceTo(l[v])>.35){let _=h.filter(([M,E])=>M!==v&&E>.001).map(([M])=>M),b=_.length?_:a.map((M,E)=>E).filter(M=>M!==v&&a[M].isBone),w=b[0],R=1e9;for(let M of b){let E=u.distanceTo(l[M]);E<R&&(R=E,w=M)}for(let M of h)M[0]===v&&(M[0]=w);m++}for(let _=0;_<h.length;_++)for(let b=_+1;b<h.length;b++)h[b][1]>0&&h[_][0]===h[b][0]&&(h[_][1]+=h[b][1],h[b][1]=0);h.sort((_,b)=>b[1]-_[1]);let T=h[0][1]+h[1][1]+h[2][1]+h[3][1]||1;for(let _=0;_<4;_++)n.setComponent(x,_,h[_][0]),s.setComponent(x,_,h[_][1]/T)}n.needsUpdate=s.needsUpdate=!0,e.userData.skinFixed={fallback:v!==void 0?a[v].name:null,fixed:m}})}function wo(i,{height:e,scale:t,trims:n={}}={}){let s=i.scene;Bd(s),s.traverse(u=>{u.isSkinnedMesh&&(u.geometry.deleteAttribute("joints_1"),u.geometry.deleteAttribute("weights_1"))}),s.updateMatrixWorld(!0);let r=new fn().setFromObject(s),o=r.getSize(new C),a=t||(e?e/o.y:1),l=r.getCenter(new C),c={};for(let u of i.animations){let f=n[u.name];c[u.name]=f?u.clone().trim(f[0],f[1]):u}return{scene:s,clips:c,s:a,off:[-l.x*a,-r.min.y*a,-l.z*a],size:o.clone().multiplyScalar(a)}}var Od=new Map;function n1(i,e,t={}){return Od.has(e)||Od.set(e,Di(new Vn({map:i,...t.mat||{}}),t.look||{})),Od.get(e)}function Ka(i,e,{cast:t=!0,look:n={},scale:s=1,colors:r={}}={}){let o=bo(i.scene);o.traverse(p=>{if(!p.isMesh)return;let m=(Array.isArray(p.material)?p.material:[p.material]).map(g=>{let x=Object.keys(e).find(b=>g.name.includes(b)),T=e[x||"*"],_=Object.keys(r).find(b=>g.name.includes(b));return n1(T,g.name+":"+(T&&T.uuid)+JSON.stringify(n)+_,{look:n,mat:_?{color:r[_]}:{}})});p.material=Array.isArray(p.material)?m:m[0],p.frustumCulled=!1,p.castShadow=t,p.receiveShadow=!1});let a=new Qt,l=new Qt;a.add(l),l.add(o),l.scale.setScalar(i.s*s),l.position.set(i.off[0]*s,i.off[1]*s,i.off[2]*s);let c={};o.traverse(p=>{p.isBone&&(c[p.name]=p)});let u=new Ks(o),f={};for(let[p,v]of Object.entries(i.clips))f[p]=u.clipAction(v);let h=null,d={obj:a,holder:l,inner:o,mixer:u,actions:f,bones:c,heading:0,anim:"",play(p,v=.18,m=1,g=!1){let x=f[p];x&&(x.timeScale=m,h!==x&&(x.reset(),x.enabled=!0,x.setEffectiveWeight(1),x.setLoop(g?ru:ou,1/0),x.clampWhenFinished=g,x.play(),h&&h.crossFadeTo(x,v,!1),h=x,d.anim=p))},phase(p){h&&(h.time=p%h.getClip().duration)},update(p){u.update(p)},face(p,v=1){let m=Math.atan2(Math.sin(p-d.heading),Math.cos(p-d.heading));d.heading+=m*v,a.rotation.y=d.heading}};return d}var ts=i=>Math.min(1,Math.max(0,i));var Xt=(i,e,t)=>i+(e-i)*t,Ft=i=>(i=ts(i),i*i*(3-2*i)),En=i=>{i=ts(i);let e=1.7;return 1+(e+1)*(i-1)**3+e*(i-1)**2};var Ze=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)},$t=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]),kd=i=>Math.atan2(Math.sin(i),Math.cos(i));var Ja=(i,e,t=0)=>i[0]>=e[0]-t&&i[0]<=e[1]+t&&i[1]>=e[2]-t&&i[1]<=e[3]+t;function eg(i,e,t,n,s){return i[0]=Xt(e[0],t[0],s),i[1]=Xt(e[1],t[1],s)+Math.sin(Math.PI*s)*n,i[2]=Xt(e[2],t[2],s),i}var An={log:{len:1,h:.15},raw:{len:.62,h:.075},cooked:{len:.62,h:.075},cash:{len:.46,h:.055}},Eo=class{constructor(e,t,n,s=!0){this.n=0,this.max=n,this.mesh=new di(e,t,n),this.mesh.instanceMatrix.setUsage(Ii),this.mesh.frustumCulled=!1,this.mesh.castShadow=s,this.mesh.count=0,ct.add(this.mesh)}push(e){this.n<this.max&&this.mesh.setMatrixAt(this.n++,e)}flush(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.n=0}},ku={};function Hd(i){i.updateWorldMatrix(!0,!1);let e=new lt;for(let t of["position","normal","uv"]){let n=i.geometry.attributes[t];if(!n)continue;let s=n.count,r=n.itemSize,o=new Float32Array(s*r);for(let a=0;a<s;a++)for(let l=0;l<r;l++)o[a*r+l]=n.getComponent(a,l);e.setAttribute(t,new at(o,r))}return i.geometry.index&&e.setIndex(i.geometry.index.clone()),e.applyMatrix4(i.matrixWorld),e}function Ao(i,e,{flatY:t=!0,keepAxis:n=!1}={}){let s=[];i.scene.traverse(u=>{u.isMesh&&s.push(Hd(u))});let r=s.length===1?s[0]:i1(s);r.computeBoundingBox();let o=r.boundingBox.getSize(new C);!n&&t&&(o.x<o.y&&o.x<o.z?r.rotateZ(Math.PI/2):o.z<o.y&&o.z<o.x&&r.rotateX(Math.PI/2),r.computeBoundingBox(),o=r.boundingBox.getSize(new C)),!n&&o.z>o.x&&(r.rotateY(Math.PI/2),r.computeBoundingBox(),o=r.boundingBox.getSize(new C));let a=e/Math.max(o.x,o.z);r.scale(a,a,a),r.computeBoundingBox();let l=r.boundingBox,c=l.getCenter(new C);return r.translate(-c.x,t?-l.min.y:-c.y,-c.z),r.computeBoundingBox(),r.computeBoundingSphere(),r}function i1(i){let e=0,t=0;for(let u of i)e+=u.attributes.position.count,t+=u.index?u.index.count:u.attributes.position.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,l=0;for(let u of i){let f=u.attributes.position.count;n.set(u.attributes.position.array,a*3),u.attributes.normal&&s.set(u.attributes.normal.array,a*3),u.attributes.uv&&r.set(u.attributes.uv.array,a*2);let h=u.index?u.index.array:[...Array(f).keys()];for(let d=0;d<h.length;d++)o[l+d]=h[d]+a;a+=f,l+=h.length}let c=new lt;return c.setAttribute("position",new at(n,3)),c.setAttribute("normal",new at(s,3)),c.setAttribute("uv",new at(r,2)),c.setIndex(new at(o,1)),c}function s1(i){let e=i.onBeforeCompile;i.onBeforeCompile=(n,s)=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOb; varying float vNy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOb = position; vNy = normal.y;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOb; varying float vNy;`).replace("#include <map_fragment>",`#include <map_fragment>
  { float u = vOb.x * 0.8 + vOb.z * 0.6, d = abs(fract(u / 0.16) - 0.5) * 0.16; float aa = fwidth(u) * 1.2 + 0.003;
    float mk = (1.0 - smoothstep(0.022 - aa, 0.022 + aa, d)) * smoothstep(0.4, 0.8, vNy) * step(abs(u), 0.27);
    float halo = (1.0 - smoothstep(0.022, 0.06, d)) * smoothstep(0.4, 0.8, vNy) * step(abs(u), 0.27);
    diffuseColor.rgb *= 1.0 - 0.1 * halo; diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.42, 0.36, 0.32), mk); }`),e&&e!==en.prototype.onBeforeCompile&&e(n,s)};let t=i.customProgramCacheKey();return i.customProgramCacheKey=()=>t+"|grill",i}var gi={};function og(i,e){gi.log=Ao(i.log,An.log.len),gi.raw=Ao(i.meatRaw,An.raw.len),gi.cooked=Ao(i.meatCooked,An.cooked.len),gi.cash=Ao(i.cash,An.cash.len);for(let n of Object.keys(gi))gi[n].computeBoundingBox(),An[n].h=gi[n].boundingBox.max.y;let t=(n,{k:s=1,...r}={})=>Di(new Vn({map:n,...r}),{k:s});ku={log:new Eo(gi.log,t(e.log),260),raw:new Eo(gi.raw,t(e.meatRaw,{k:.82,color:14206148}),160),cooked:new Eo(gi.cooked,s1(t(e.meatCooked)),200),cash:new Eo(gi.cash,t(e.cash,{emissive:399878}),700)}}var zu=[],zd=0,Oi=class{constructor(e,t,n={}){var s;this.type=e,this.p=[...t],this.ry=n.ry||0,this.rx=0,this.rz=0,this.scale=(s=n.scale)!=null?s:1,this.pop=n.pop?zd:-1,this.slot=null,this.fly=null,this.alive=!0,this.spin=Math.random()<.5?1:-1,zu.push(this)}goto(e,t=.35,n=1.2,s=null,r=.9){this.fly={from:[...this.p],ry0:this.ry,t0:zd,dur:t,h:n,onArrive:s,flip:r},this.slot=e}stick(e){this.slot=e,this.fly=null}kill(){this.alive=!1}},tg=new ze,ng=new Pt,ig=new In,sg=new C,rg=new C,Bu=[0,0,0];function ag(i){var e,t,n,s;zd=i;for(let r=zu.length-1;r>=0;r--){let o=zu[r];if(!o.alive){zu.splice(r,1);continue}let a=o.slot?o.slot():null;if(o.fly&&a){let u=ts((i-o.fly.t0)/o.fly.dur);if(eg(Bu,o.fly.from,a,o.fly.h,Ft(u)*.35+u*.65),o.p[0]=Bu[0],o.p[1]=Bu[1],o.p[2]=Bu[2],o.ry=Xt(o.fly.ry0,(e=a[3])!=null?e:0,u),o.rx=Math.sin(Math.PI*u)*o.fly.flip*o.spin,o.rz=0,u>=1){let f=o.fly.onArrive;o.fly=null,o.rx=0,f&&f(o)}}else a&&(o.p[0]=a[0],o.p[1]=a[1],o.p[2]=a[2],o.ry=(t=a[3])!=null?t:o.ry,o.rx=(n=a[4])!=null?n:0,o.rz=(s=a[5])!=null?s:0);if(!o.alive)continue;let l=o.pop>=0?Math.min(1,.2+.8*((i-o.pop)/.22)):1,c=o.scale*l;rg.set(o.p[0],o.p[1],o.p[2]),ig.set(o.rx,o.ry,o.rz,"YXZ"),ng.setFromEuler(ig),sg.set(c,c,c),tg.compose(rg,ng,sg),ku[o.type].push(tg)}for(let r in ku)ku[r].flush()}var ns=class{constructor(e,t,{cols:n=null,sway:s=null,rx:r=0,ryOff:o=0,gapOf:a=null}={}){this.base=e,this.gap=t,this.items=[],this.cols=n,this.sway=s,this.rx=r,this.ryOff=o,this.gapOf=a}get n(){return this.items.length}slot(e){return()=>{let t=this.base(),n=t[3]||0,s=t[0],r=t[1],o=t[2],a=e;if(this.cols){let l=e%this.cols.length;a=Math.floor(e/this.cols.length);let[c,u]=this.cols[l];s+=c*Math.cos(n)+u*Math.sin(n),o+=-c*Math.sin(n)+u*Math.cos(n)}if(r+=a*(this.gapOf?this.gapOf(this.items[e]):this.gap),this.sway){let l=Math.max(1,this.items.length),c=(a/Math.max(6,l))**1.6*Math.min(l,30)*this.gap*.55;s+=this.sway[0]*c,o+=this.sway[1]*c}return[s,r,o,n+this.ryOff,this.rx]}}topPos(){return this.slot(this.items.length)()}add(e,t=.3,n=1,s=null){let r=this.items.length;return this.items.push(e),e.goto(this.slot(r),t,n,s),e}put(e){let t=this.items.length;return this.items.push(e),e.stick(this.slot(t)),e}pop(){return this.items.pop()}removeAt(e){let t=this.items.splice(e,1)[0];for(let n=e;n<this.items.length;n++)this.items[n].fly?this.items[n].slot=this.slot(n):this.items[n].stick(this.slot(n));return t}};var op={};cl(op,{G:()=>Re,POSE:()=>Do,build:()=>ip,chooseTarget:()=>ex,emo:()=>hr,front:()=>dn,heroFocus:()=>Ju,input:()=>un,route:()=>sp,state:()=>sl,update:()=>rp});var Z={camp:[-4.625,4.646,-6.118,6.118],walk:[-4.28,4.3,-4.52,5.72],blocks:{oven:[-1.33,1.08,2.48,3.86],crate:[1.25,2.86,2.56,3.76],pile:[-4.36,-2.74,-2.16,-.92],board:[-4.32,-2.52,3.14,5.26],grinder:[-4.7,-3.35,-4.6,-2.8]},grinder:[-4.32,-3.68],grinderYaw:-Math.PI/2,drum:{x:-5.44,r:.34,z:-3.68,y:2.3},drum2:{x:-5.72,r:.48},hole:{x:-7.85,z:-3.68,r:2.6},log:{r0:1.85,h:3.3,rMin:.55,rMin2:.68,bite:.08},pile:{c:[-3.55,-1.62],top:.1},padA:{c:[-3.55,0],r:.62},oven:{c:[-.139,3.162],W:2.3,D:1.3,rackY:1.745,meatDX:.546,mouth:[-.99,1.1,2.9],window:[-.139,.62,3.83]},feed:[-1.92,3.05],board:{c:[-3.42,4.2],slot:i=>[(i%2-.5)*.8,(Math.floor(i/2)-1)*.66],top:.14},tray:{c:[-.202,.681],size:[2.12,2.07],top:.13},counters:[{c:[-2.556,-5.317]},{c:[2.409,-5.317]}],counterTop:.93,serve:[[-2.556,-4.32],[2.409,-4.32]],cashSpot:[[-1.5,-4.3],[3.45,-4.3]],backRowZ:-6.027,frontZ:[-6.86,-7.42],crowd:{x0:-5.6,x1:4.35,z0:-17.5,z1:-7.85},pads:{wood:{c:[-2.25,1.2],price:25,icon:"conv"},left:{c:[-1.85,-1.65],price:25,icon:"conv"},c2:{c:[2.355,-3.856],price:50,icon:"counter"},right:{c:[3.22,-1.22],price:25,icon:"conv"},up:{c:[-.22,-1.16],price:50,icon:"up"}},belts:{wood:[[-3.55,-.75],[-3.55,2.75],[-1.34,2.75]],left:[[-1.29,1.3],[-2.15,1.3],[-2.15,-3.17],[-2.556,-3.65],[-2.556,-4.7]],right:[[.89,1.3],[2.409,1.3],[2.409,-4.71]]},padlock:[2.409,-4.55],start:[-2.6,.9]},ar=["wood","left","c2","right","up"],Dt={walk:4.6,walkCarry:4.3,pickDt:.09,feedDt:.11,serveDt:.1,cashDt:.03,payDt:.035,grindDt:[.42,.24],pileCap:18,batch:.8,logsPerBatch:2,trayCap:12,billPer:4,beltV:2,beltDt:.4,endAfter:2.4,cap:90,idle:2};function r1(i,e,t){let n=bo(i.scene),s=new Ks(n);s.clipAction(i.clips[e]).play();let o=[];n.traverse(h=>{h.isSkinnedMesh&&o.push(h)});let a=i.clips[e].duration,l=[],c=new C,u=new ut,f=new Xe;for(let h=0;h<t;h++){s.setTime(a*h/t),n.updateMatrixWorld(!0);let d=[],p=[],v=[],m=[],g=[],x=0;for(let _ of o){_.skeleton.update();let b=_.geometry,w=b.attributes.position.count,R=b.index;f.getNormalMatrix(_.matrixWorld);for(let I=0;I<w;I++)_.getVertexPosition(I,c),c.applyMatrix4(_.matrixWorld),d.push(c.x*i.s+i.off[0],c.y*i.s+i.off[1],c.z*i.s+i.off[2]),u.set(b.attributes.normal.getX(I),b.attributes.normal.getY(I),b.attributes.normal.getZ(I),0),_.applyBoneTransform(I,u),c.set(u.x,u.y,u.z).applyMatrix3(f).normalize(),p.push(c.x,c.y,c.z),v.push(b.attributes.uv.getX(I),b.attributes.uv.getY(I));let M=b.groups.length?b.groups:[{start:0,count:R?R.count:w,materialIndex:0}],E=Array.isArray(_.material)?_.material:[_.material];for(let I of M){let N=m.length;for(let F=I.start;F<I.start+I.count;F++)m.push((R?R.getX(F):F)+x);g.push({start:N,count:I.count,name:E[I.materialIndex].name})}x+=w}let T=new lt;T.setAttribute("position",new et(d,3)),T.setAttribute("normal",new et(p,3)),T.setAttribute("uv",new et(v,2)),T.setIndex(m),l.push({geo:T,groups:g})}return l}var cn={list:[],meshes:[],heads:[]};function fg(i,e,t){let n=Di(new Vn({map:e.custBody}),{k:1.12,sat:1.05}),s=Di(new Vn({map:e.custPlate,color:11843778}),{k:1}),r=[["protest",8,1],["idle",4,0]],o=[];for(let[f,h]of r)for(let d of r1(i,f,h)){d.geo.clearGroups();for(let p of d.groups)d.geo.addGroup(p.start,p.count,/门框/.test(p.name)?1:0);o.push({clip:f,geo:d.geo})}let a=Z.crowd,l=[],c=0;for(let f=a.z1,h=0;f>a.z0;f-=.66,h++)for(let d=a.x0;d<a.x1;d+=.74){c++;let p=d+(Ze(c*1.7)-.5)*.36+h%2*.37,v=f+(Ze(c*3.1)-.5)*.3;p<a.x0+.1||p>a.x1||t.some(([m,g])=>Math.hypot(m-p,g-v)<.62)||l.push([p,v])}let u=l.length;return o.forEach(f=>{let h=new di(f.geo,[n,s],u);h.castShadow=!0,h.frustumCulled=!1,h.count=0,ct.add(h),cn.meshes.push(h),f.im=h}),l.forEach(([f,h],d)=>{let p=Math.abs(f-Z.counters[0].c[0])<Math.abs(f-Z.counters[1].c[0])?Z.counters[0].c:Z.counters[1].c,v=Math.atan2(p[0]-f,p[1]-h)+.5+(Ze(d*4.1)-.5)*.35,m=Ze(d*9.1+.37)<.8?0:1;cn.list.push({x:f,z:h,yaw:v,s:.86+Ze(d*5.3)*.06,act:m,ph:Ze(d*6.7),sp:.85+Ze(d*7.9)*.35,hidden:!1}),cn.heads.push([f,1.2,h])}),cn.frames=o,cn.acts=r,cn}var lg=new ze,cg=new Pt,ug=new C,hg=new C,o1=new C(0,1,0);function dg(i){let e=cn.frames;if(!e)return;for(let n of e)n.im.count=0;let t=[0,8];for(let n of cn.list){if(n.hidden)continue;let[,s,r]=cn.acts[n.act],o=n.act===0?1.15/n.sp:2.2,a=t[n.act]+Math.floor(((i/o+n.ph)%1+1)%1*s),l=e[a].im;cg.setFromAxisAngle(o1,n.yaw),ug.set(n.x,0,n.z),hg.setScalar(n.s),lg.compose(ug,cg,hg),l.setMatrixAt(l.count++,lg)}for(let n of e)n.im.instanceMatrix.needsUpdate=!0}var xi=(i,e)=>Di(new Vn(i),e);function pg({offset:i,tint:e=[1,1,1],sat:t=1}){let n=sn,s=new C(...n.L),r=new C(...n.F),o=new C(...n.R),a=new C(...n.U),l=s.clone().addScaledVector(r,-n.D),c=new Vn({color:16777215});return c.onBeforeCompile=u=>{Object.assign(u.uniforms,{tEnv:{value:ir.uniforms.tCol.value},uOff:{value:new C(...i)},uC:{value:l},uF:{value:r},uR:{value:o},uU:{value:a},uWH:{value:new oe(n.Wm,n.Hm)},uD:{value:n.D},uTint:{value:new C(...e)},uSat:{value:t},uGr:rn.uGr}),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uOff; uniform vec3 uC; uniform vec3 uF; uniform vec3 uR; uniform vec3 uU; uniform vec2 uWH; uniform float uD; varying vec2 vEnv;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
  { vec3 w = (modelMatrix * vec4(transformed, 1.0)).xyz + uOff, d = w - uC; float z = dot(d, uF); vec2 q = vec2(dot(d, uR), dot(d, uU)) * uD / z;
    vEnv = vec2(q.x / uWH.x + 0.5, q.y / uWH.y + 0.5); }`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tEnv; uniform vec3 uTint; uniform float uSat; uniform vec4 uGr; varying vec2 vEnv;
`+qa).replace("#include <opaque_fragment>",`{ vec3 e = texture2D(tEnv, vEnv).rgb; float l = dot(e, vec3(0.2126, 0.7152, 0.0722)); e = mix(vec3(l), e, uSat) * uTint;
    outgoingLight = pow(grade_(e, uGr), vec3(2.2)); }   // \u5E95\u56FE\u50CF\u7D20\u672C\u8EAB\u5C31\u5E26\u7740\u70D8\u7119\u65F6\u7684\u5149\u7167\uFF08\u5E95\u56FE\u662F NoColorSpace\uFF0C\u6309 sRGB \u89E3\u56DE\u7EBF\u6027\uFF09
#include <opaque_fragment>`)},c.customProgramCacheKey=()=>"envuv"+i.join(",")+e.join(",")+t,c}var a1={1:{sh:"joint1",el:"joint2",z0:.32,z1:.7,hub:[-1.12,1.05],tilt:.26},2:{sh:"joint8",el:"joint9",z0:.4,z1:.8,hub:[-1.18,1.06],tilt:.21}};function l1(i,e){let t=new C;i.traverse(n=>{if(!n.isSkinnedMesh)return;let s=n.skeleton.bones,r=s.findIndex(h=>h.name===e.sh),o=s.findIndex(h=>h.name===e.el);if(r<0||o<0){console.warn("arm bones missing",e.sh);return}n.updateMatrix();let a=n.geometry.attributes.position,l=n.geometry.attributes.skinIndex,c=n.geometry.attributes.skinWeight,u=new Float32Array(l.count*4),f=new Float32Array(c.count*4);for(let h=0;h<l.count;h++)for(let d=0;d<4;d++)u[h*4+d]=l.getComponent(h,d),f[h*4+d]=c.getComponent(h,d);for(let h=0;h<a.count;h++){t.fromBufferAttribute(a,h).applyMatrix4(n.matrix);let d=t.z;if(d<=e.z0)continue;let p=-1,v=-1;for(let x=0;x<4;x++){let T=u[h*4+x],_=f[h*4+x];T===r&&_>0&&(p=x),T===o&&(v=x)}if(p<0)continue;let m=f[h*4+p],g=m*Ft((d-e.z0)/(e.z1-e.z0));if(v<0){let x=-1,T=1/0;for(let _=0;_<4;_++){let b=f[h*4+_];_!==p&&b<T&&(T=b,x=_)}f[h*4+p]=m-g+T,u[h*4+x]=o,f[h*4+x]=g}else f[h*4+p]=m-g,f[h*4+v]+=g}n.geometry.setAttribute("skinIndex",new Hs(u,4)),n.geometry.setAttribute("skinWeight",new et(f,4))})}var Hu=new C,Vd=new Pt,mg=new Pt,gg=new Pt,c1=new C(0,0,1);function xg(i,e){i.parent.getWorldQuaternion(Vd),mg.copy(Vd).invert(),gg.setFromAxisAngle(c1,e),i.quaternion.premultiply(mg.multiply(gg).multiply(Vd)),i.updateMatrixWorld(!0)}function _g(i,e,t){let n=(l,c,u)=>{let f=Ka(l,{"*":c},{look:{k:1.05}});f.obj.position.set(Z.grinder[0],0,Z.grinder[1]),f.obj.rotation.y=Z.grinderYaw,f.play("run",.1,1),ct.add(f.obj);let h=a1[u];return l1(f.inner,h),f.arm=h,f.B={sh:f.bones[h.sh],el:f.bones[h.el]},f},s=n(i,t.grinder1,1),r=e?n(e,t.grinder2,2):null;r&&(r.obj.visible=!1);let o=l=>{let c=l.save;c&&(l.B.sh.quaternion.copy(c.shq),l.B.sh.position.copy(c.shp),l.B.el.quaternion.copy(c.elq),l.B.el.position.copy(c.elp),l.save=null)},a=(l,c,u,f)=>{let h=l.B;if(!h.sh||!h.el)return;l.save={shq:h.sh.quaternion.clone(),shp:h.sh.position.clone(),elq:h.el.quaternion.clone(),elp:h.el.position.clone()};let d=l.arm,p=d.tilt*Ft((c-u)/.3),v=Math.atan2(d.hub[1],d.hub[0]),g=Math.hypot(d.hub[0],d.hub[1])*(Math.cos(v)-Math.cos(v+p));l.obj.updateMatrixWorld(!0),xg(h.sh,p),h.el.getWorldPosition(Hu),Hu.x-=(c-g)*f,h.el.parent.worldToLocal(Hu),h.el.position.copy(Hu),h.el.updateMatrixWorld(!0),xg(h.el,-p)};return{g1:s,g2:r,step(l,c,u,f,h=1){o(l),l.update(c),a(l,u,f,h)}}}function vg(i){let e=Z.log.r0,t=Z.log.h,n=1.65,s=3.6,r=new Jr(1,1,t+s,56,40,!0);r.translate(0,(t-s)/2,0);let o={uR:{value:e},uR0:{value:e},uYB:{value:n}},a=xi({map:i.bark}),l=a.onBeforeCompile;a.onBeforeCompile=(m,g)=>{Object.assign(m.uniforms,o,{tCore:{value:i.giantCore}}),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
uniform float uR; uniform float uR0; uniform float uYB; varying vec3 vW; varying vec2 vU2; varying float vSv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  float rr_ = mix(uR0, uR, smoothstep(uYB - 0.55, uYB + 0.03, position.y)); transformed.xz *= rr_;
  vSv = clamp((uR0 - rr_) / max(0.05, uR0 - uR), 0.0, 1.0) * step(0.02, uR0 - uR);`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vW = (modelMatrix * vec4(transformed, 1.0)).xyz; vU2 = uv;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tCore; varying vec3 vW; varying vec2 vU2; varying float vSv;`).replace("#include <map_fragment>",`{ vec4 b = texture2D(map, vec2(vU2.x * 3.0, vW.y * 0.45));
    float g = dot(texture2D(tCore, vec2(vU2.x * 2.0, vW.y * 0.6)).rgb, vec3(0.333));
    vec3 core = vec3(0.62, 0.46, 0.33) * (0.82 + 0.4 * g) * (0.93 + 0.07 * sin(vW.y * 46.0));   // \u6D45\u8272\u6728\u82AF\uFF08\u6210\u7247\uFF1A\u78E8\u8FC7\u7684\u5730\u65B9\u662F\u6D45\u9EC4\u68D5\u3001\u5E26\u4E00\u5708\u5708\u7EC6\u7EB9\uFF09
    diffuseColor.rgb *= mix(b.rgb * vec3(0.92, 0.88, 0.85), core, smoothstep(0.08, 0.35, vSv)); }`).replace("#include <opaque_fragment>",`if (vW.y < 0.02) { float k = smoothstep(0.02, -0.9, vW.y); outgoingLight = mix(outgoingLight, vec3(0.10, 0.20, 0.27), 0.5 + 0.48 * k); }
#include <opaque_fragment>`),l&&l(m,g)},a.customProgramCacheKey=()=>"giantSide2";let c=new Kr(1,56);c.rotateX(-Math.PI/2),c.translate(0,t,0);let u=xi({map:i.giantCap}),f=new Qt,h=new qe(r,a),d=new Qt,p=new qe(c,u);h.castShadow=p.castShadow=!0,d.add(p),f.add(h,d),ct.add(f);let v=new qe(new eo(e+.04,.08,8,64),xi({color:16054523,emissive:4872804}));return v.rotation.x=Math.PI/2,v.scale.z=.45,v.position.y=.05,ct.add(v),{g:f,uni:o,set(m,g,x,T,_){v.visible=T>-.6,v.position.set(m,.05,g),v.scale.set(1,1,.45*(.8+.2*Math.sin(_*7))),f.position.set(m,T,g),f.rotation.y=_,o.uR.value=x,d.scale.set(x,1,x),rn.uLog.value.set(m,g,e)}}}function yg(i,e){let t=[["stump2",e.stump2Top,e.stump2Bark],["stump3",e.stump3Top,e.stump3Bark]],n=[];for(let u=0,f=-4.562;f<=4.7;f+=.42045,u++){let h=Math.round(f*31+Z.backRowZ*17);f>1.15&&f<3.7,n.push({x:f,z:Z.backRowZ,k:Ze(h+9)<.5?0:1,yaw:Ze(h)*6.28,s:1+(Ze(h+3)-.5)*.06,wob:0,ph:Ze(u*3.3)*6})}let s=t.map(([u,f,h])=>{let d=[];i[u].scene.traverse(x=>{x.isMesh&&d.push([Hd(x),x.material.name])});let p=new fn;for(let[x]of d)x.computeBoundingBox(),p.union(x.boundingBox);let v=p.getSize(new C),m=p.getCenter(new C),g=.41/Math.max(v.x,v.z);return d.map(([x,T])=>{x.translate(-m.x,-p.min.y,-m.z),x.scale(g,g,g);let _=/Inst2/.test(T)?xi({map:h,color:9071178}):/Inst1/.test(T)?xi({map:h}):xi({map:f}),b=new di(x,_,n.length);return b.castShadow=!0,b.frustumCulled=!1,ct.add(b),b})}),r=new ze,o=new Pt,a=new In,l=new C,c=new C;return{posts:n,update(u){let f=[0,0];for(let h of n){let d=h.wob;a.set(d*.16,h.yaw,0,"XYZ"),o.setFromEuler(a),l.set(h.x,0,h.z+d*.04),c.setScalar(h.s),r.compose(l,o,c);for(let p of s[h.k])p.setMatrixAt(f[h.k],r);f[h.k]++}s.forEach((h,d)=>h.forEach(p=>{p.count=f[d],p.instanceMatrix.needsUpdate=!0}))}}}function Mg(i){let e=Ao(i.counter,2.3,{}),t=[Z.counters[0].c[0]-Z.counters[1].c[0],0,0],n=new qe(e,pg({offset:t})),s=new qe(e,pg({offset:t,tint:[.84,.86,.9],sat:.08}));for(let r of[n,s])r.position.set(Z.counters[1].c[0],0,Z.counters[1].c[1]),r.castShadow=!0,ct.add(r);return n.visible=!1,{wood:n,gray:s}}function Sg(){let i=new Qt,e=new qe(u1(.62,.5,.22,.09),xi({color:13225688}));e.position.y=.34,i.add(e);let t=new qe(new eo(.2,.055,12,28,Math.PI),xi({color:10134190}));t.position.y=.6,i.add(t);for(let r of[-.2,.2]){let o=new qe(new Jr(.055,.055,.12,12),t.material);o.position.set(r,.6,0),i.add(o)}let n=new qe(new Kr(.06,20),new Jt({color:1842210}));n.position.set(0,.33,.112),i.add(n);let s=new qe(new Ma(.06,.085,24),xi({color:16054010}));return s.position.set(0,.33,.111),i.add(s),i.scale.setScalar(1.5),i.position.set(Z.padlock[0],0,Z.padlock[1]),i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),ct.add(i),i}function u1(i,e,t,n){let s=new jr,r=-i/2,o=-e/2;s.moveTo(r+n,o),s.lineTo(r+i-n,o),s.quadraticCurveTo(r+i,o,r+i,o+n),s.lineTo(r+i,o+e-n),s.quadraticCurveTo(r+i,o+e,r+i-n,o+e),s.lineTo(r+n,o+e),s.quadraticCurveTo(r,o+e,r,o+e-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o);let a=new ya(s,{depth:t-.06,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:3,curveSegments:6});return a.translate(0,0,-(t-.06)/2),a}function h1(i,e=.7){let t=[i[0]];for(let s=1;s<i.length-1;s++){let r=i[s-1],o=i[s],a=i[s+1],l=Math.hypot(o[0]-r[0],o[1]-r[1]),c=Math.hypot(a[0]-o[0],a[1]-o[1]),u=Math.min(e,l/2,c/2),f=[o[0]-(o[0]-r[0])/l*u,o[1]-(o[1]-r[1])/l*u],h=[o[0]+(a[0]-o[0])/c*u,o[1]+(a[1]-o[1])/c*u];for(let d=0;d<=8;d++){let p=d/8,v=(1-p)**2*f[0]+2*p*(1-p)*o[0]+p*p*h[0],m=(1-p)**2*f[1]+2*p*(1-p)*o[1]+p*p*h[1];t.push([v,m])}}t.push(i[i.length-1]);let n=[0];for(let s=1;s<t.length;s++)n.push(n[s-1]+Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]));return{pts:t,len:n,total:n[n.length-1]}}function Gd(i,e){e=Math.max(0,Math.min(i.total,e));let t=1;for(;t<i.len.length-1&&i.len[t]<e;)t++;let n=i.pts[t-1],s=i.pts[t],r=(e-i.len[t-1])/Math.max(1e-6,i.len[t]-i.len[t-1]);return[Xt(n[0],s[0],r),Xt(n[1],s[1],r),Math.atan2(s[0]-n[0],s[1]-n[1])]}var lr=.16,is=null;function f1(){if(is)return is;let i=256,e=128,t=Ni(i,e),n=t.getContext("2d");n.fillStyle="rgb(54,55,59)",n.fillRect(0,0,i,e);let s=3,r=i/s;for(let a=0;a<s;a++){let l=a*r,c=n.createLinearGradient(l,0,l+r,0);c.addColorStop(0,"rgb(96,97,102)"),c.addColorStop(.18,"rgb(84,85,90)"),c.addColorStop(.8,"rgb(70,71,76)"),c.addColorStop(1,"rgb(62,63,67)"),n.fillStyle=c,n.fillRect(l+4,6,r-10,e-12),n.fillStyle="rgb(22,22,25)",n.fillRect(l+r-6,0,6,e),n.fillStyle="rgba(150,150,156,0.55)",n.fillRect(l+4,6,2,e-12)}let o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(.12,"rgba(0,0,0,0)"),o.addColorStop(.88,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.45)"),n.fillStyle=o,n.fillRect(0,0,i,e);for(let a=0;a<1400;a++){let l=Ze(a*1.37),c=Ze(a*2.71)*i,u=Ze(a*3.91)*e;n.fillStyle=l<.5?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.06)",n.fillRect(c,u,2,1)}return is=new vt(t),is.colorSpace=dt,is.wrapS=is.wrapT=ni,is.anisotropy=4,is.needsUpdate=!0,is}function bg(i,e,{w:t=.82}={}){let n=h1(i),s=n.pts.length,r=[],o=[],a=[],l=[],c=[];for(let g=0;g<s;g++){let x=n.pts[g],T=n.pts[Math.min(s-1,g+1)],_=n.pts[Math.max(0,g-1)],b=T[0]-_[0],w=T[1]-_[1],R=Math.hypot(b,w)||1,M=-w/R,E=b/R;r.push(x[0]+M*t/2,lr,x[1]+E*t/2,x[0]-M*t/2,lr,x[1]-E*t/2),o.push(n.len[g]/t,0,n.len[g]/t,1);for(let I of[1,-1]){let N=x[0]+M*I*(t/2+.06),F=x[1]+E*I*(t/2+.06),k=x[0]+M*I*(t/2-.01),L=x[1]+E*I*(t/2-.01);l.push(N,0,F,N,lr+.05,F,k,lr+.05,L)}if(g<s-1){let I=g*2;a.push(I,I+2,I+1,I+1,I+2,I+3);let N=g*6;for(let F of[0,3]){let k=N+F,L=N+6+F;c.push(k,L,k+1,k+1,L,L+1,k+1,L+1,k+2,k+2,L+1,L+2)}}}let u=new lt;u.setAttribute("position",new et(r,3)),u.setAttribute("uv",new et(o,2)),u.setIndex(a),u.computeVertexNormals();let f=f1().clone();f.needsUpdate=!0;let h=new qe(u,xi({map:f}));h.castShadow=!0;let d=new lt;d.setAttribute("position",new et(l,3)),d.setIndex(c),d.computeVertexNormals();let p=new qe(d,xi({color:5920079,side:an}));p.castShadow=!0;let v=new Qt;v.add(h,p),ct.add(v);let m=s-1;return{P:n,grp:v,map:f,set(g){let x=Math.max(0,Math.round(m*g));u.setDrawRange(0,x*6),d.setDrawRange(0,x*24),v.visible=x>0},scroll(g,x){f.offset.x-=g*x/t}}}function Tg(){let i=new zt({uniforms:{uT:rn.uTime,uA:{value:.6}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uT; uniform float uA; varying vec2 vU;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main(){
  vec2 p = vU; float f = n(vec2(p.x * 6.0, p.y * 3.0 - uT * 2.6)) * 0.6 + n(vec2(p.x * 13.0, p.y * 6.0 - uT * 4.1)) * 0.4;
  float shape = (1.0 - p.y) * smoothstep(0.0, 0.25, p.x) * smoothstep(1.0, 0.75, p.x);
  float fl = smoothstep(0.35, 0.95, f * shape * 1.6) * uA;
  vec3 c = mix(vec3(1.0, 0.32, 0.05), vec3(1.0, 0.82, 0.35), smoothstep(0.4, 1.0, fl));
  gl_FragColor = vec4(c * fl, 1.0);
}`,transparent:!0,depthWrite:!1,blending:Js}),e=new qe(new Pn(1.5,.55),i);return e.position.set(Z.oven.window[0],Z.oven.window[1],Z.oven.window[2]),e.renderOrder=6,ct.add(e),{m:e,set(t){i.uniforms.uA.value=t}}}var Po=(i,e,t)=>{let n=Ni(i,e),s=n.getContext("2d");t(s);let r=new vt(n);return r.colorSpace=dt,r.needsUpdate=!0,r.anisotropy=4,r},$a=(i,e)=>{let t=new Pn(i,e);return t.rotateX(-Math.PI/2),t},d1={worker:i=>{i.fillStyle="#fff",i.beginPath(),i.arc(118,70,28,0,7),i.fill(),i.beginPath(),i.moveTo(58,160),i.bezierCurveTo(58,104,178,104,178,160),i.closePath(),i.fill(),Vu(i,186,64,44,15)},conv:i=>{i.fillStyle="#fff",i.save(),i.transform(1,0,-.18,1,20,0);for(let e=0;e<4;e++)Gt(i,70+e*30,76,27,48,10),i.fill();i.restore(),Gt(i,60,124,134,32,16),i.fill(),i.save(),i.globalCompositeOperation="destination-out",i.fillRect(58,121,140,5);for(let e of[78,176])i.beginPath(),i.arc(e,140,7,0,7),i.fill();i.restore(),Vu(i,188,44,44,15)},counter:i=>{i.fillStyle="#fff",Gt(i,40,92,176,30,8),i.fill(),Gt(i,52,122,20,50,4),i.fill(),Gt(i,184,122,20,50,4),i.fill(),Gt(i,66,60,124,26,8),i.fill(),Vu(i,196,48,44,15)},up:i=>{i.fillStyle="#fff";for(let e of[0,46])i.beginPath(),i.moveTo(128,34+e),i.lineTo(196,96+e),i.lineTo(162,96+e),i.lineTo(128,66+e),i.lineTo(94,96+e),i.lineTo(60,96+e),i.closePath(),i.fill()},staff:i=>{i.fillStyle="#fff",i.beginPath(),i.arc(100,70,28,0,7),i.fill(),i.beginPath(),i.moveTo(40,160),i.bezierCurveTo(40,104,160,104,160,160),i.closePath(),i.fill();for(let e=0;e<4;e++)Gt(i,150,150-e*24,66,20,6),i.fill();Vu(i,200,50,44,15)}};function Vu(i,e,t,n=50,s=16){i.fillStyle="#fff",Gt(i,e-n/2,t-s/2,n,s,3),i.fill(),Gt(i,e-s/2,t-n/2,s,n,3),i.fill()}var p1={};function m1(i){let e=Ni(256,256),t=e.getContext("2d");return d1[i](t),p1[i]=[30,30,230,180],e}function g1(i,e,t,n,s){i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,320,320),i.translate(32,32),Gt(i,18,18,220,220,22),i.fillStyle="rgba(28,30,36,0.72)",i.fill(),n>0&&(i.save(),Gt(i,18,18,220,220,22),i.clip(),i.fillStyle="#1fff19",i.globalAlpha=.85,i.fillRect(0,238-220*n,256,220*n+2),i.restore());let r=s?1.12:1;i.save(),i.translate(128,128),i.scale(r,r),i.translate(-128,-128),i.strokeStyle=s?"#1fff19":"#ffffff",i.lineWidth=13/r,i.lineCap="round";for(let[v,m,g,x]of[[14,14,1,1],[242,14,-1,1],[14,242,1,-1],[242,242,-1,-1]])i.beginPath(),i.moveTo(v+g*40,m),i.lineTo(v+g*15,m),i.quadraticCurveTo(v,m,v,m+x*15),i.lineTo(v,m+x*40),i.stroke();i.restore();let o=Wd[e];i.save(),i.translate(128,98);let a=Math.min(128/200,104/150);i.scale(a,a),i.translate(-130,-105),i.drawImage(o,0,0),i.restore();let l=56,c=21,u=9,f=String(t);i.font=`900 ${l}px "Arial Black", Arial, sans-serif`,i.textAlign="left",i.textBaseline="middle";let h=i.measureText(f).width,d=Math.min(1,150/(c*2+u+h));d<1&&(l*=d,c*=d,u*=d,i.font=`900 ${l}px "Arial Black", Arial, sans-serif`,h=i.measureText(f).width);let p=128-(c*2+u+h)/2;Ya(i,p+c,193,c),i.lineWidth=7,i.strokeStyle="rgba(20,30,20,0.55)",i.lineJoin="round",i.strokeText(f,p+c*2+u,195),i.fillStyle="#ffffff",i.fillText(f,p+c*2+u,195)}var Wd={},qu=class{constructor(e,t,n,s,r,o=1.45){Wd[s]||(Wd[s]=m1(s)),this.id=e,this.c=t,this.price=n,this.left=n,this.icon=s,this.visible=!1,this.popT=-1,this.done=!1,this.on=!1,this.key="",this.cv=Ni(320,320),this.g=this.cv.getContext("2d"),this.tex=new vt(this.cv),this.tex.colorSpace=dt,this.tex.anisotropy=4,this.mesh=new qe($a(o,o),new Jt({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),this.mesh.position.set(t[0],.035,t[1]),this.mesh.rotation.y=Math.atan2(-(r[0]-t[0]),-(r[1]-t[1])),this.mesh.renderOrder=3,this.mesh.visible=!1,ct.add(this.mesh),this.redraw()}redraw(){let e=ts(1-this.left/this.price),t=`${this.left}_${Math.round(e*100)}_${this.on}`;t!==this.key&&(this.key=t,g1(this.g,this.icon,this.left,e,this.on),this.tex.needsUpdate=!0)}show(e){this.visible||(this.visible=!0,this.popT=e)}update(e){if(this.mesh.visible=this.visible&&!this.done,!this.mesh.visible)return;this.redraw();let t=this.popT>=0?Math.max(.001,En((e-this.popT)/.32)):1;this.mesh.scale.setScalar(t*(this.on?1.04+.03*Math.sin(e*9):1))}},x1=Po(256,256,i=>{i.lineCap="round";for(let[e,t]of[[26,"rgba(16,24,32,0.42)"],[12,"#ffffff"]]){i.lineWidth=e,i.strokeStyle=t;for(let n=0;n<20;n++){let s=n/20*Math.PI*2;i.beginPath(),i.arc(128,128,112,s,s+Math.PI*2/20*.55),i.stroke()}}}),wg=new Le("#ffffff"),_1=new Le("#1fff19"),v1=new Le("#ff2a1a"),Co=class{constructor(e,t,n=.035,s=null,r=null){this.c=e,this.R=t,this.v=0,this.on=0,this.spin=0,this.full=-9,this.t0=-1,this.ring=new qe($a(2,2),new Jt({map:x1,transparent:!0,depthWrite:!1,color:wg.clone()})),this.ring.position.set(e[0],n,e[1]),this.ring.renderOrder=4,ct.add(this.ring),s&&(this.icon=new qe($a(1,1),new Jt({map:s,transparent:!0,depthWrite:!1})),this.icon.position.set(e[0],n+.005,e[1]),this.icon.renderOrder=5,r&&(this.icon.rotation.y=Math.atan2(-(r[0]-e[0]),-(r[1]-e[1]))),ct.add(this.icon))}update(e,t,n,s,r){let o=n?1:0;o&&this.t0<0&&(this.t0=e),this.v+=(o-this.v)*Math.min(1,t*8),this.on+=((s?1:0)-this.on)*Math.min(1,t*12);let a=this.v>.01;if(this.ring.visible=a,this.icon&&(this.icon.visible=a),!a)return;let l=En((e-this.t0)/.35),c=r?.5+.5*Math.sin(e*5.5):0;this.spin+=t*this.on*.7;let u=0,f=(e-this.full)/.36;if(f>=0&&f<2){let h=f%1;u=h<.65?Math.sin(Math.PI*h/.65):0}this.ring.rotation.y=this.spin,this.ring.scale.setScalar(this.R*(.6+.4*l)*(1+.06*c+.1*u)),this.ring.material.color.copy(wg).lerp(_1,this.on).lerp(v1,u),this.ring.material.opacity=this.v*ts(l)*(.62+.38*Math.max(c,this.on,u)),this.icon&&(this.icon.scale.setScalar(this.R*.95*(.6+.4*l)),this.icon.material.opacity=this.v*ts(l)*.92)}};function qd(i){return Po(128,128,i)}var Xd=new zt({uniforms:{uT:{value:0},uA:{value:0},uC:{value:new Le("#fff0b8")}},vertexShader:"varying vec2 vU; void main(){ vU = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uT, uA; uniform vec3 uC; varying vec2 vU;
void main(){
  float r = length(vU), aa = max(fwidth(r) * 1.2, 1e-3);
  float ring = smoothstep(0.78 - aa, 0.84, r) * (1.0 - smoothstep(0.92, 0.98 + aa, r));
  float ph = fract(uT * 0.7), rr = mix(0.25, 0.86, ph);
  float wave = (1.0 - smoothstep(0.0, 0.07 + aa, abs(r - rr))) * (1.0 - ph) * 0.8;
  float fill = (1.0 - smoothstep(0.5, 0.9, r)) * 0.12;
  float a = max(max(ring * (0.75 + 0.25 * sin(uT * 4.0)), wave), fill) * uA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uC, a);
#include <colorspace_fragment>
}`,transparent:!0,depthWrite:!1}),ss=new qe($a(2,2),Xd);ss.renderOrder=4;ss.visible=!1;var Eg="",Ag=0,Gu=0;function Rg(i,e,t,n){var l;let s=t?t.kind==="tile"?1.15:.9:0,r=t?t.kind+t.p[0].toFixed(1)+t.p[1].toFixed(1):"";r&&r!==Eg&&(Eg=r,Ag=i);let o=t&&Math.hypot(t.p[0]-n[0],t.p[1]-n[1])<Math.max(.8,s*.9);if(Gu+=((t&&!o?1:0)-Gu)*Math.min(1,e*10),Gu<.01){ss.visible=!1;return}let a=En((i-Ag)/.3);t&&(ss.position.set(t.p[0],((l=t.y)!=null?l:0)+.04,t.p[1]),ss.userData.R=s),ss.scale.setScalar((ss.userData.R||1)*(.6+.4*a)),Xd.uniforms.uT.value=i,Xd.uniforms.uA.value=Gu*ts(a),ss.visible=!0}var ja=90,CA=.18*.6/.46*.6,Cg=new Float32Array(ja*2*3),Ig=new Float32Array(ja*2*2),Io=new lt;Io.setAttribute("position",new at(Cg,3).setUsage(Ii));Io.setAttribute("aU",new at(Ig,2).setUsage(Ii));{let i=[];for(let e=0;e<ja-1;e++){let t=e*2;i.push(t,t+1,t+2,t+1,t+3,t+2)}Io.setIndex(i)}var Ro=new zt({uniforms:{uTime:{value:0},uS0:{value:0},uS1:{value:1},uA:{value:0},uC:{value:new Le("#ffd23f")},uO:{value:new Le("#5a3200")}},vertexShader:"attribute vec2 aU; varying vec2 vU; void main(){ vU = aU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime, uS0, uS1, uA; uniform vec3 uC, uO; varying vec2 vU;
void main(){
  const float k = 0.75, P = 1.0, hw = 0.1, ow = 0.05, arm = 0.38;
  float m = mod(vU.x + abs(vU.y) * k - uTime * 1.4, P);
  float sd = max(abs(m - 0.5 * P) * inversesqrt(1.0 + k * k) - hw, abs(vU.y) - arm);
  float aa = max(length(fwidth(vU)) * 0.75, 1e-4);
  float fill = 1.0 - smoothstep(-aa, aa, sd), edge = 1.0 - smoothstep(ow - aa, ow + aa, sd);
  float a = edge * smoothstep(uS0, uS0 + 0.5, vU.x) * (1.0 - smoothstep(uS1 - 0.45, uS1, vU.x)) * uA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(mix(uO, uC, fill), a);
#include <colorspace_fragment>
}`,transparent:!0,depthWrite:!1,side:an}),cr=new qe(Io,Ro);cr.frustumCulled=!1;cr.renderOrder=4;cr.visible=!1;var y1=i=>{for(let e=0;e<2&&i.length>2;e++){let t=[i[0]];for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1];n>0&&t.push([s*.75+o*.25,r*.75+a*.25]),n<i.length-2&&t.push([s*.25+o*.75,r*.25+a*.75])}t.push(i[i.length-1]),i=t}return i},Wu=0;function Pg(i,e,t,n,s){if(Wu+=((s&&t&&t.length>1?1:0)-Wu)*Math.min(1,e*8),Wu<.01||!t||t.length<2){cr.visible=!1;return}let r=y1(t),o=[0];for(let f=1;f<r.length;f++)o.push(o[f-1]+Math.hypot(r[f][0]-r[f-1][0],r[f][1]-r[f-1][1]));let a=o[o.length-1];if(a<1.2){cr.visible=!1;return}let l=.42,c=1/(2*l),u=0;for(let f=0;f<ja;f++){let h=Math.min(a,f/(ja-1)*a);for(;u<o.length-2&&o[u+1]<h;)u++;let d=r[u],p=r[u+1],v=(h-o[u])/Math.max(1e-6,o[u+1]-o[u]),m=Xt(d[0],p[0],v),g=Xt(d[1],p[1],v),x=p[0]-d[0],T=p[1]-d[1],_=Math.hypot(x,T)||1,b=-T/_,w=x/_,R=n(m,g)+.03;Cg.set([m+b*l,R,g+w*l,m-b*l,R,g-w*l],f*6),Ig.set([h*c,.5,h*c,-.5],f*4)}Io.attributes.position.needsUpdate=!0,Io.attributes.aU.needsUpdate=!0,Object.assign(Ro.uniforms,{}),Ro.uniforms.uTime.value=i,Ro.uniforms.uS0.value=.9*c,Ro.uniforms.uS1.value=(a-.6)*c,Ro.uniforms.uA.value=Wu*.95,cr.visible=!0}var M1=Po(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,62);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,240,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)}),S1=Po(128,128,i=>{for(let e=0;e<7;e++){let t=64+Math.cos(e*.9)*22,n=64+Math.sin(e*1.7)*18,s=26+e%3*6,r=i.createRadialGradient(t,n,0,t,n,s);r.addColorStop(0,"rgba(255,255,255,0.85)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.beginPath(),i.arc(t,n,s,0,7),i.fill()}}),b1=Po(128,128,i=>{i.strokeStyle="rgba(255,255,255,0.95)",i.lineWidth=9,i.beginPath(),i.arc(64,64,52,0,7),i.stroke(),i.lineWidth=4,i.beginPath(),i.arc(64,64,38,0,7),i.stroke()}),T1=Po(64,256,i=>{let e=i.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.6,"rgba(255,250,220,0.7)"),e.addColorStop(1,"rgba(255,255,255,0.95)"),i.fillStyle=e;let t=i.createLinearGradient(0,0,64,0);i.fillRect(0,0,64,256),i.globalCompositeOperation="destination-in",t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(.5,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,64,256)}),Xu=[],w1=new Pn(1,1);function ur(i,e,t,n={}){let s=i==="glow"?M1:i==="puff"?S1:i==="pillar"?T1:b1,r=new qe(i==="splash"?$a(1,1):w1,new Jt({map:s,transparent:!0,depthWrite:!1,depthTest:i!=="glow",blending:i==="puff"?_s:Js,color:n.col!==void 0?n.col:16777215}));r.renderOrder=8,r.position.set(e[0],e[1],e[2]),ct.add(r),Xu.push({m:r,kind:i,t0:t,dur:n.dur||(i==="puff"?.55:i==="pillar"?.9:.6),size:n.size||1,p:[...e]})}var Qa=(i,e)=>{ur("glow",[i[0],.6,i[1]],e,{size:4.2,dur:.55}),ur("pillar",[i[0],2,i[1]],e,{size:1.6,dur:.9}),ur("splash",[i[0],.06,i[1]],e,{size:3.2,dur:.6})},el=(i,e,t=.7)=>ur("puff",i,e,{size:t}),Lg=(i,e,t=1.6,n=.03)=>ur("splash",[i[0],n,i[1]],e,{size:t,dur:.7}),Yd=(i,e)=>{ur("glow",[i[0],1,i[1]],e,{size:1.9,dur:.5,col:16767050}),ur("splash",[i[0],.05,i[1]],e,{size:1.3,dur:.45,col:16767050})};function Ng(i){for(let e=Xu.length-1;e>=0;e--){let t=Xu[e],n=(i-t.t0)/t.dur;if(n>=1){ct.remove(t.m),t.m.material.dispose(),Xu.splice(e,1);continue}t.kind!=="splash"&&t.m.quaternion.copy(Mn.quaternion),t.kind==="glow"?(t.m.scale.setScalar(t.size*(.4+.8*Ft(n))),t.m.material.opacity=1-n):t.kind==="pillar"?(t.m.scale.set(t.size*(1-.6*n),t.size*3.2,1),t.m.material.opacity=Math.sin(Math.PI*Math.min(1,n*1.3))):t.kind==="puff"?(t.m.scale.setScalar(t.size*(.5+.9*n)),t.m.position.y=t.p[1]+n*.5,t.m.material.opacity=.8*(1-n)):(t.m.scale.setScalar(t.size*(.3+.9*Ft(n))),t.m.material.opacity=.9*(1-n))}}function Dg(){ct.add(ss,cr)}var Ot=null,Jd=null,Yu=null,$d=null,Ug={},No=null,tl=null,Lo=null,E1=!1,Zd={},Kd=i=>new Promise((e,t)=>{try{let n=Ot.decodeAudioData(i,e,t);n&&n.then&&n.then(e,t)}catch(n){t(n)}});async function Fg(i="assets/audio/"){if(Ot=O0(),!!Ot){No=Ot.createGain(),No.gain.value=.9,No.connect(Ot.destination);try{Lo=await yu(i+"audio.json"),Ug=Lo.clips;let[e,t,n]=await Promise.all([xo(i+"sfx.mp3"),xo(i+"bgm.mp3"),xo(i+"endcard.mp3")]);[Jd,Yu,$d]=await Promise.all([Kd(e),Kd(t),Kd(n)])}catch(e){console.warn("audio load",e)}Mu(()=>{try{Ot.resume&&Ot.resume()}catch(e){}},()=>{try{Ot.suspend&&Ot.suspend()}catch(e){}})}}function Og(){try{Ot&&Ot.state==="suspended"&&Ot.resume()}catch(i){}}function qt(i,{vol:e=1,gap:t=.04,rate:n=1}={}){if(!Ot||!Jd||E1)return;let s=Ug[i];if(!s)return;let r=Ot.currentTime;if(!(Zd[i]!==void 0&&r-Zd[i]<t)){Zd[i]=r;try{let o=Ot.createBufferSource();o.buffer=Jd,o.playbackRate.value=n;let a=Ot.createGain();a.gain.value=e,o.connect(a),a.connect(No),o.start(0,s[0],s[1])}catch(o){}}}function Bg(i=.42){if(!(!Ot||!Yu||tl))try{let e=Ot.createBufferSource();e.buffer=Yu,e.loop=!0,Lo&&Lo.loop&&(e.loopStart=Lo.loop[0],e.loopEnd=Math.min(Yu.duration,Lo.loop[1]));let t=Ot.createGain();t.gain.value=i,e.connect(t),t.connect(No),e.start(0),tl={s:e,g:t}}catch(e){}}function kg(){if(Ot){try{tl&&(tl.g.gain.setTargetAtTime(0,Ot.currentTime,.15),tl.s.stop(Ot.currentTime+.8))}catch(i){}try{if($d){let i=Ot.createBufferSource();i.buffer=$d;let e=Ot.createGain();e.gain.value=.8,i.connect(e),e.connect(No),i.start(0)}}catch(i){}}}var Re={t:0,ended:!1,endAt:1/0,unlocked:{},served:0,target:null,first:{}},Qd=i=>[Math.sin(i),Math.cos(i)],Bi=null,Gg=null,St,Kn,Wg,ep,Ts,tp,Xg,Bn,Rn,ws=[],qg=[],Es={},Oo={},il={},dn=[],As=[[],[]],hr=[],rt={fuel:0,grill:[],busy:!1,next:0,flare:-9,inBelt:0},Yg={i:0,ph:"rise",t0:0,r:Z.log.r0,rot:0,nx:0};function ip(i,e){Bi=i,Gg=e,St={c:Ka(Bi.hero,Bi.heroTex,{look:{k:1.18,sat:1.1}}),p:[...Z.start],vel:[0,0],heading:Math.PI*.8,sway:[0,0],nx:{},full:-9,kind:null},St.c.play("idle"),ct.add(St.c.obj),St.c.obj.traverse(h=>{h.isMesh&&(h.castShadow=!0)});let t=.3,n=.9;St.spr=0;let s={cooked:.485,raw:.485,log:.17,cash:.242},r=.06,o={cooked:.31,raw:.31,cash:.23},a={cooked:.24,raw:.24,cash:.12},l=h=>{let d=Qd(St.heading),p=[d[1],-d[0]],v=St.goods.n?St.goods.items[0].type:"cooked",m=St.spr;if(v==="log"){let R=t+(h<0?.25*m:0);return[St.p[0]-d[0]*R,St.p[1]-d[1]*R,St.heading]}let g=s[v]||.4,x=s.cash,T=g+x+r,_=(h>0?T/2-g/2:-(T/2-x/2))*m,b=h>0?v:"cash",w=t+((o[b]||.3)-(a[b]||.2))*m;return[St.p[0]-d[0]*w+p[0]*_,St.p[1]-d[1]*w+p[1]*_,St.heading+m*Math.PI/2]};St.goods=new ns(()=>{let h=l(1);return[h[0],n,h[1],h[2]]},An.log.h,{sway:St.sway,gapOf:h=>h&&h.type==="log"?An.log.h*.92:An.cooked.h*.95}),St.cash=new ns(()=>{let h=l(-1);return[h[0],n+.02,h[1],h[2]]},An.cash.h*1.02,{sway:St.sway}),Kn=_g(Bi.grinder1,Bi.grinder2,e),Wg=vg(e),ep=yg(Bi,e),Ts=Mg(Bi),tp=Sg(),Xg=Tg(),Bn=new ns(()=>[Z.pile.c[0],Z.pile.top,Z.pile.c[1],Math.PI/2],An.log.h*.92),Bn.slot=h=>()=>{let d=0,p=h;for(;d<2&&p>=7-d;)p-=7-d,d++;let v=7-d;return[Z.pile.c[0]+(p-(v-1)/2)*.17,Z.pile.top+d*An.log.h*.85,Z.pile.c[1],Math.PI/2,0]};for(let h=0;h<10;h++)Bn.put(new Oi("log",[Z.pile.c[0],.2,Z.pile.c[1]],{ry:0}));for(let h=0;h<6;h++){let[d,p]=Z.board.slot(h),v=new ns(()=>[Z.board.c[0]+d,Z.board.top,Z.board.c[1]+p,Math.PI/2],An.raw.h*.9);for(let m=0;m<7;m++)v.put(new Oi("raw",[Z.board.c[0]+d,.2,Z.board.c[1]+p],{ry:Math.PI/2}));qg.push(v)}Rn=new ns(()=>[Z.tray.c[0],Z.tray.top,Z.tray.c[1],0],An.cooked.h*.95,{cols:[[-.55,-.42],[.05,-.42],[.62,-.42],[-.55,.42],[.05,.42],[.62,.42]]}),ws=Z.counters.map(h=>new ns(()=>[h.c[0],Z.counterTop,h.c[1]+.05,0],An.cooked.h*.95,{cols:[[-.5,0],[0,0],[.5,0]]}));for(let h of ar){let d=Z.pads[h];Es[h]=new qu(h,d.c,d.price,d.icon,[d.c[0]-.42,d.c[1]-.9],1.4)}Es.wood.show(0);let c=qd(h=>{h.fillStyle="rgba(255,255,255,0.85)";for(let d of[42,64,86])h.beginPath(),h.ellipse(64,d,40,9,0,0,7),h.fill()}),u=qd(h=>{h.globalAlpha=.9,h.drawImage(e.meatIconImg,14,14,100,100)});Oo.padA=new Co(Z.padA.c,.85,.035,c,Z.pile.c),Oo.feed=new Co(Z.feed,.75,.035,c,Z.oven.c),Oo.serve=Z.serve.map(h=>new Co(h,.85,.035,u,[h[0],h[1]-1]));for(let h=0;h<2;h++)for(let d=0;d<2;d++)for(let p=0;p<5;p++)dn.push(np(h,d,p,0,!0));let f=dn.map(h=>h.slot);fg(Bi.crowd,e,f)}var Zg=(i,e,t)=>[Z.counters[i].c[0]+(t-2)*.62+(Ze(i*7+t*3.3+e)-.5)*.12,Z.frontZ[e]+(Ze(i*5+t*1.7+e*9)-.5)*.1];function np(i,e,t,n,s=!1){let r=Ka(Bi.cust,Bi.custTex,{look:{k:1.12,sat:1.05},scale:.87+Ze(i*3+e*5+t+n)*.05,colors:{\u95E8\u6846:11843778}}),o=Zg(i,e,t),a={c:r,ci:i,row:e,i:t,slot:o,state:s?"wait":"enter",t0:n,got:0,inFly:0,p:s?[...o]:[o[0]+(Ze(n+t)-.5)*.6,o[1]-1.6],plate:null,nextAct:n+Ze(t*2.9+i)*2},l=Z.counters[i].c;return r.face(Math.atan2(l[0]-o[0],l[1]-o[1])*.6),r.play(s?Ze(t+e*3+i*7)<.6?"protest":"idle":"walk"),r.phase(Ze(t*1.3+i+e)*2),r.obj.position.set(a.p[0],0,a.p[1]),ct.add(r.obj),a}var Kg=i=>i.row===0&&(i.ci===0||Re.unlocked.c2);function A1(i,e){for(let t=0;t<dn.length;t++){let n=dn[t],s=n.slot;if(n.state==="enter"||n.state==="step"){let r=$t(n.p,s),o=2.4*e;r<o?(n.p=[...s],n.state="wait",n.c.play("protest")):(n.p[0]+=(s[0]-n.p[0])/r*o,n.p[1]+=(s[1]-n.p[1])/r*o,n.c.face(Math.atan2(s[0]-n.p[0],s[1]-n.p[1]),Math.min(1,e*10)))}else if(n.state==="wait"){let r=Z.counters[n.ci].c;n.c.face(Math.atan2(r[0]-s[0],r[1]-s[1])*.6,Math.min(1,e*6)),i>n.nextAct&&(n.c.play(Ze(i*3.1+t)<.7?"protest":"idle",.25),n.nextAct=i+1.2+Ze(i+t*1.9)*2.4),n.got>=1&&n.inFly===0&&(n.state="got",n.t0=i,n.c.play("give",.15,1.2),Yd(n.p,i),qt("served",{vol:.35,gap:.15}))}else n.state==="got"&&i-n.t0>.55&&R1(n,i,t);n.c.obj.position.set(n.p[0],0,n.p[1]),n.c.update(e)}}function R1(i,e,t){el([i.p[0],.9,i.p[1]],e,1.3),qt("pop",{vol:.5,gap:.04}),i.plate&&i.plate.kill(),ct.remove(i.c.obj),Re.served++,Zn(2003);for(let s=0;s<Dt.billPer;s++){let r=new Oi("cash",[i.p[0],1,i.p[1]],{pop:!0,ry:Ze(e*7+s)*6.28}),o=i.p[0]+(Ze(e*3.3+s*1.7)-.5)*1,a=i.p[1]+.25+(Ze(e*5.1+s*2.3)-.5)*.7,l=.03+s%3*.02;r.goto(()=>[o,l,a,r.ry],.45+s*.05,1.6,()=>{r.landed=!0,qt("coin",{vol:.25,gap:.05})},2.5),As[i.ci].push(r)}let n=dn.findIndex(s=>s.ci===i.ci&&s.row===1&&s.i===i.i&&s.state==="wait");if(n>=0){let s=dn[n];s.row=0,s.slot=Zg(i.ci,0,i.i),s.state="step",s.c.play("walk",.15),dn[t]=s,dn[n]=np(i.ci,1,i.i,e)}else dn[t]=np(i.ci,0,i.i,e)}var C1=i=>{let e=null;for(let t of dn)t.ci===i&&Kg(t)&&t.state==="wait"&&t.got+t.inFly<1&&(!e||Math.abs(t.i-2)<Math.abs(e.i-2))&&(e=t);return e},Zu=i=>dn.filter(e=>e.ci===i&&Kg(e)&&e.state==="wait"&&e.got+e.inFly<1).length,Jg={1:{rise:.6,sink:.5,gap:.15,tg:5.2,spin:.9,x:-7.5},2:{rise:.45,sink:.35,gap:.08,tg:2.4,spin:1.6,x:-7.85}},$g={1:{cx:-5.44,r:.34,dz:0},2:{cx:-5.72,r:.48,dz:.58}},rs=-.15,zg=(i,e)=>{let t=$g[i];return t.cx-(Jg[i].x+Math.sqrt(Math.max(0,(e+t.r-Z.log.bite)**2-t.dz*t.dz)))};function I1(i,e){var p,v;let t=Re.unlocked.up?2:1,n=Jg[t],s=Yg,r=Z.drum,o=Z.log.r0,a=t===2?Z.log.rMin2:Z.log.rMin,l=i-s.t0,c=0,u=!1,f=rs;if(s.ph==="rise"){let m=Ft(l/n.rise);c=-Z.log.h-.4+(Z.log.h+.4)*m,s.r=o,s.x=n.x,f=Xt((p=s.ext)!=null?p:rs,rs,m),l>=n.rise&&(s.ph="grind",s.t0=i,Lg([n.x,r.z],i,4.4),qt("wet",{vol:.4}))}else if(s.ph==="grind"){u=!0;let m=Ft(l/.3);s.r=Math.max(a,s.r-(o-a)/n.tg*e*m),f=Xt(rs,zg(t,s.r),m),s.r<=a+1e-4&&(s.ph="sink",s.t0=i)}else s.ph==="sink"&&(c=-(Z.log.h+.6)*Ft(l/n.sink),f=Xt(zg(t,a),rs,Ft(l/n.sink)),l>=n.sink+n.gap&&(s.ph="rise",s.t0=i,s.i++,s.x=n.x));s.ext=f,s.rot+=e*n.spin,Wg.set((v=s.x)!=null?v:n.x,r.z,s.r,c,s.rot);let h=$g[t].cx;if(u&&i>=s.nx&&Bn.n<Dt.pileCap){s.nx=i+Dt.grindDt[t-1];let m=new Oi("log",[h-.3,2.3,r.z],{ry:Ze(i)*6.28});Bn.add(m,.6,1.5,()=>qt("wood",{vol:.25,gap:.08})),Ze(i*1.7)<.5&&el([h-.35,2.1,r.z+.2],i,.55)}let d=e*(u?1.3:.4);if(!Re.unlocked.up||!Kn.g2)Kn.step(Kn.g1,d,f,rs);else{let m=En((i-Re.unlocked.up)/.45),g=1-Ft((i-Re.unlocked.up)/.2);Kn.g1.obj.visible=g>.01,Kn.g1.obj.scale.setScalar(Math.max(.01,g)),Kn.g1.obj.visible&&Kn.step(Kn.g1,d,rs,rs),Kn.g2.obj.visible=!0,Kn.g2.obj.scale.setScalar(Math.max(.01,m)),Kn.step(Kn.g2,d,f,rs,Math.max(.01,m))}}function P1(i,e){let t=Re.unlocked.up?.6:1;if(!rt.busy&&rt.fuel>=Dt.logsPerBatch&&Rn.n+2<=Dt.trayCap&&i>=rt.next){rt.busy=!0,rt.fuel-=Dt.logsPerBatch;for(let s=0;s<2;s++){let r=(Math.floor(i*3)+s*3)%6,o=qg[r],a=o.n?o.pop():new Oi("raw",[Z.board.c[0],.3,Z.board.c[1]],{ry:Math.PI/2}),l=s?-Z.oven.meatDX:Z.oven.meatDX,c=[Z.oven.c[0]+l,Z.oven.rackY,Z.oven.c[1]];a.goto(()=>[c[0],c[1],c[2],0],.42,1.2,null,.6),rt.grill.push(a),L1(i+1.2,()=>{let u=new Oi("raw",[Z.board.c[0],.2,Z.board.c[1]],{pop:!0,ry:Math.PI/2});o.put(u)})}rt.cookAt=i+.42+Dt.batch*.8*t,rt.outAt=i+.42+Dt.batch*t,qt("fire",{vol:.25,gap:.5})}if(rt.busy&&i>=rt.cookAt&&!rt.cooked){rt.cooked=!0;for(let s of rt.grill)s.type="cooked";el([Z.oven.c[0],Z.oven.rackY+.3,Z.oven.c[1]],i,1.1)}if(rt.busy&&i>=rt.outAt){for(let s of rt.grill)Rn.add(s,.42,1.1,()=>qt("drop",{vol:.3,gap:.06}));rt.grill=[],rt.busy=!1,rt.cooked=!1,rt.next=i+.05}let n=.35+.55*Math.min(1,rt.fuel/4)+(rt.busy?.2:0)+.5*Math.max(0,1-(i-rt.flare)/.5);Xg.set(n*(.92+.08*Math.sin(i*17)))}var nl=[];function L1(i,e){nl.push([i,e])}function N1(i,e){for(let[t,n]of Object.entries(il)){n.belt.set(Ft((i-n.t0)/.6));let s=Dt.beltV*(Re.unlocked.up?1.5:1);if(n.belt.scroll(e,s),!(i-n.t0<.6)){if(i>=n.next&&n.ride.length<12){let r=null;if(t==="wood"&&Bn.n&&rt.fuel+rt.inBelt<14?(r=Bn.pop(),rt.inBelt++):t!=="wood"&&Rn.n&&n.ride.length<6&&ws[t==="left"?0:1].n+n.ride.length<6&&(r=Rn.pop()),r){n.next=i+Dt.beltDt;let o=Gd(n.belt.P,0),a=r.type==="log"?0:Math.PI/2;r.type==="log"&&(r.scale=.78),r.goto(()=>[o[0],lr+.02,o[1],o[2]+a],.35,.7),n.ride.push({it:r,s:-.35*s,ro:a})}}for(let r=n.ride.length-1;r>=0;r--){let o=n.ride[r];o.s+=s*e,o.s>=0&&!o.on&&(o.on=!0,o.it.stick(()=>{let a=Gd(n.belt.P,o.s);return[a[0],lr+.02,a[1],a[2]+o.ro]})),o.s>=n.belt.P.total&&(n.ride.splice(r,1),t==="wood"?(rt.inBelt--,o.it.goto(()=>[...Z.oven.mouth,0],.3,.6,a=>{a.kill(),rt.fuel++,rt.flare=i,qt("wood",{vol:.2,gap:.08})})):(o.it.scale=1,ws[t==="left"?0:1].add(o.it,.3,.6)))}}}for(let t=0;t<2;t++){let n=ws[t];if(!n.n||i<(n.nx||0)||n.items[n.n-1].fly)continue;let r=C1(t);if(!r)continue;let o=n.pop();r.inFly++,n.nx=i+.12,o.goto(()=>{let a=Qd(r.c.heading);return[r.p[0]+a[0]*.42,.98,r.p[1]+a[1]*.42,r.c.heading]},.38,1,a=>{r.inFly--,r.got++,r.plate=a;let l=[...r.p],c=r.c.heading;a.stick(()=>{let u=Qd(c);return[l[0]+u[0]*.42,.98,l[1]+u[1]*.42,c]})},.5),qt("whoosh",{vol:.25,gap:.1})}}var jg=()=>Object.values(Z.blocks).concat(Re.unlocked.c2?[]:[[Z.padlock[0]-.55,Z.padlock[0]+.55,Z.padlock[1]-.25,Z.padlock[1]+.3]]);function Uo(i,e=0){if(!Ja(i,Z.walk))return!1;for(let t of jg())if(Ja(i,t,e))return!1;return!0}function Qg(i,e,t,n){let s=i.p[0]+e*n,r=i.p[1]+t*n;if(!Uo(i.p)){i.p[0]=Math.min(Z.walk[1],Math.max(Z.walk[0],s)),i.p[1]=Math.min(Z.walk[3],Math.max(Z.walk[2],r));return}Uo([s,r])?(i.p[0]=s,i.p[1]=r):Uo([s,i.p[1]])?i.p[0]=s:Uo([i.p[0],r])&&(i.p[1]=r)}var jd=(i,e)=>{for(let t=1;t<24;t++){let n=t/24;if(!Uo([Xt(i[0],e[0],n),Xt(i[1],e[1],n)],.25))return!1}return!0};function sp(i,e){if(jd(i,e))return[e];let t=null,n=1e9;for(let s of jg())for(let r of[[s[0]-.45,s[2]-.45],[s[1]+.45,s[2]-.45],[s[0]-.45,s[3]+.45],[s[1]+.45,s[3]+.45]]){if(!Uo(r))continue;let o=$t(i,r)+$t(r,e);o<n&&jd(i,r)&&jd(r,e)&&(n=o,t=r)}return t?[t,e]:[e]}function D1(i,e,t,n,s=.12){(!i.path||i.pathT<Re.t||$t(i.pathTo||[1e9,0],e)>.05)&&(i.path=sp(i.p,e),i.pathT=Re.t+.4,i.pathTo=[...e]);let r=i.path[0];i.path.length>1&&$t(i.p,r)<.3&&(i.path.shift(),r=i.path[0]);let o=$t(i.p,r),a=i.path.length===1;if(a&&o<s)return!1;let l=a?Math.min(1,o/Math.max(.05,t*n)):1;return Qg(i,(r[0]-i.p[0])/o*t*l,(r[1]-i.p[1])/o*t*l,n),!0}var un={vx:0,vz:0,active:!1},Do=Yn.pose?{clip:Yn.pose,t:+(Yn.pt||0),yaw:+(Yn.py||.6)}:null;function U1(i,e,t){let n=St,s=n.goods.n?Dt.walkCarry:Dt.walk,r=!1,o=[...n.p];if(!(Re.ended||Do))if(un.active){let c=Math.hypot(un.vx,un.vz);if(c>.05){let u=un.vx/c*s*Math.min(1,c),f=un.vz/c*s*Math.min(1,c);Qg(n,u,f,e),n.heading+=kd(Math.atan2(u,f)-n.heading)*Math.min(1,e*14)}}else t&&Re.target&&D1(n,Re.target.p,s,e,Re.target.r||.15);n.vel=[(n.p[0]-o[0])/e,(n.p[1]-o[1])/e],r=Math.hypot(...n.vel)>.3,r&&!un.active&&(n.heading+=kd(Math.atan2(n.vel[0],n.vel[1])-n.heading)*Math.min(1,e*12));let a=-n.vel[0]*.06,l=-n.vel[1]*.06;if(n.sway[0]+=(a-n.sway[0])*Math.min(1,e*6),n.sway[1]+=(l-n.sway[1])*Math.min(1,e*6),n.spr+=((n.goods.n&&n.cash.n?1:0)-n.spr)*(1-Math.exp(-e/.1)),n.c.play(r?"run":"idle",.15,r?1.15:1),n.c.obj.position.set(n.p[0],0,n.p[1]),n.c.obj.rotation.y=n.heading,n.c.update(e),Do){let c=n.c.actions[Do.clip];for(let u of Object.values(n.c.actions))u!==c&&u.stop();c.reset(),c.play(),c.setEffectiveWeight(1),c.time=Do.t,n.c.mixer.update(0),n.c.obj.rotation.y=Do.yaw}if(n.kind=n.goods.n?n.goods.items[0].type:null,!Re.unlocked.wood&&(!n.kind||n.kind==="log")&&$t(n.p,Z.padA.c)<Z.padA.r+.25&&Bn.n&&i>=(n.nx.pick||0)){let c=Bn.pop();n.goods.add(c,.32,1.1),n.nx.pick=i+Dt.pickDt,qt("wood",{vol:.4,gap:.05}),Hg("log",2002)}if(n.kind==="log"&&$t(n.p,Z.feed)<.95&&i>=(n.nx.feed||0)){let c=n.goods.pop();n.nx.feed=i+Dt.feedDt,c.goto(()=>[...Z.oven.mouth,Math.PI/2],.3,.8,u=>{u.kill(),rt.fuel++,rt.flare=Re.t,qt("wood",{vol:.3,gap:.06,rate:.85})})}if((!n.kind||n.kind==="cooked")&&Ja(n.p,[Z.tray.c[0]-Z.tray.size[0]/2,Z.tray.c[0]+Z.tray.size[0]/2,Z.tray.c[1]-Z.tray.size[1]/2,Z.tray.c[1]+Z.tray.size[1]/2],.15)&&Rn.n&&i>=(n.nx.tray||0)){let c=Rn.items[Rn.n-1];c.fly||(Rn.pop(),n.goods.add(c,.3,1),n.nx.tray=i+Dt.pickDt,qt("drop",{vol:.45,gap:.05}),Hg("meat",2004))}for(let c=0;c<2;c++){if(c===1&&!Re.unlocked.c2)continue;let u=Z.serve[c];if(n.kind==="cooked"&&$t(n.p,u)<1&&i>=(n.nx.serve||0)&&ws[c].n<9){let f=n.goods.pop();ws[c].add(f,.3,.9,()=>qt("drop",{vol:.3,gap:.06})),n.nx.serve=i+Dt.serveDt}}for(let c=0;c<2;c++){let u=Z.serve[c];if(Math.abs(n.p[0]-u[0])<2.3&&n.p[1]<-3.2&&i>=(n.nx.cash||0)){let f=As[c].findIndex(d=>d.landed);if(f<0)continue;let h=As[c].splice(f,1)[0];St.cash.add(h,.3,1.2),n.nx.cash=i+Dt.cashDt,qt("coin",{vol:.4,gap:.03})}}for(let c of ar){let u=Es[c];if(u.on=!1,!u.visible||u.done)continue;let f=$t(n.p,u.c)<.78;if(u.on=f&&n.cash.n>0,f&&n.cash.n&&i>=(n.nx.pay||0)&&u.left>0){let h=n.cash.pop();u.left-=1,n.nx.pay=i+Dt.payDt,h.goto(()=>[u.c[0],.08,u.c[1],0],.3,1,d=>{d.kill()}),qt("pay",{vol:.45,gap:.035}),u.left<=0&&F1(c,i)}}}function Hg(i,e){Re.first[i]||(Re.first[i]=Re.t,Zn(e))}var Vg={wood:[1008,2006],left:[1009,2007],c2:[1010,2008],right:[1010,2009],up:[1010,2010]};function F1(i,e){let t=Es[i];t.done=!0,Re.unlocked[i]=e,console.log("[flow] unlock "+i+" t="+e.toFixed(1)+" served="+Re.served),Qa(t.c,e),qt("bell",{vol:.8}),qt("full",{vol:.45}),Zn(Vg[i][0]),Zn(Vg[i][1]);let n=ar[ar.indexOf(i)+1];n&&(Es[n].showAt=e+.7),Z.belts[i]&&(il[i]={belt:bg(Z.belts[i],Gg),t0:e+.2,next:0,ride:[]}),i==="wood"&&qt("conv",{vol:.5}),i==="c2"&&(Qa(Z.counters[1].c,e+.1),Ts.t0=e),i==="up"&&(Qa(Z.grinder,e+.05),Qa([Z.drum.x-1.2,Z.drum.z],e+.15),Re.endAt=e+Dt.endAfter,Re.flood=e)}function O1(i,e){if(Ts.t0!==void 0){let t=i-Ts.t0,n=1-Ft(t/.25),s=En((t-.25)/.4);Ts.gray.scale.setScalar(Math.max(.001,n)),tp.scale.setScalar(Math.max(.001,1.5*n)),Ts.gray.visible=tp.visible=n>.002,Ts.wood.visible=t>.25,Ts.wood.scale.setScalar(Math.max(.001,s))}for(let t of ep.posts){let s=dn.find(r=>r.row===0&&Math.abs(r.p[0]-t.x)<.35&&r.state==="wait"&&(r.ci===0||!Re.unlocked.c2||!0))?Math.max(0,Math.sin(i*6.5+t.ph))**3:0;t.wob+=(s-t.wob)*Math.min(1,e*10)}if(ep.update(i),Re.flood!==void 0){let t=i-Re.flood;for(let n=0;n<cn.list.length;n++){let s=cn.list[n];if(!(s.hidden||s.z<-12.5)&&t>.25+Ze(n*3.7)*1.8){s.hidden=!0,el([s.x,.9,s.z],i,1),n%2===0&&Yd([s.x,s.z],i);for(let r=0;r<2;r++){let o=new Oi("cash",[s.x,1,s.z],{pop:!0,ry:Ze(n+r)*6}),a=s.x+(Ze(n*2+r)-.5)*.6,l=s.z+(Ze(n*3+r)-.5)*.6;o.goto(()=>[a,.03,l,o.ry],.5,1.4,null,2.5)}qt("pop",{vol:.3,gap:.05})}}}}function B1(){for(let i of ar){let e=Es[i];if(e.visible&&!e.done)return e}return null}var Fo=i=>As[i].length,Ku=i=>il[i?"right":"left"]&&!St.goods.n?Z.cashSpot[i]:Z.serve[i];function ex(){let i=St,e=B1(),t=i.cash.n,n=Fo(0)+Fo(1);if(Re.ended)return null;if(e&&t>=e.left)return{kind:"tile",p:e.c,r:.15};let s=i.goods.n?i.goods.items[0].type:null,r=()=>Re.unlocked.c2&&!Re.unlocked.right&&Zu(1)>=Zu(0)?1:0;if(s==="log")return Bn.n&&$t(i.p,Z.padA.c)<1?{kind:"padA",p:Z.padA.c,r:.2}:{kind:"feed",p:Z.feed,r:.2};let o=rt.busy||rt.fuel>=Dt.logsPerBatch||Re.unlocked.wood&&(Bn.n||il.wood.ride.length);if(s==="cooked"){for(let f=0;f<2;f++)if((f===0||Re.unlocked.c2)&&$t(i.p,Z.serve[f])<1.1)return{kind:"serve",p:Z.serve[f],r:.25};if(Re.lastK==="serve"&&Re.target)return Re.target;let c=Ja(i.p,[Z.tray.c[0]-1.1,Z.tray.c[0]+1.1,Z.tray.c[1]-1.1,Z.tray.c[1]+1.1]);if(Rn.n||c&&o&&i.goods.n<4)return{kind:"tray",p:Z.tray.c,r:.3};let u=r();return{kind:"serve",p:Z.serve[u],r:.25}}for(let c=0;c<2;c++)if(Math.min($t(i.p,Z.serve[c]),$t(i.p,Z.cashSpot[c]))<1.3&&(ws[c].n||As[c].length||dn.some(u=>u.ci===c&&(u.state==="got"||u.inFly))))return{kind:"cash",p:Ku(c),r:.3};let a=Fo(1)>Fo(0)?1:0;if(n&&e&&t+n>=e.left)return{kind:"cash",p:Ku(a),r:.3};if(!(Re.unlocked.left&&(Re.unlocked.right||!Re.unlocked.c2))){if(Rn.n>=2||o&&Rn.n)return{kind:"tray",p:Z.tray.c,r:.3};if(!Re.unlocked.wood&&!o&&Bn.n)return{kind:"padA",p:Z.padA.c,r:.2};if(o||Rn.n)return{kind:"tray",p:Z.tray.c,r:.3};if(!Re.unlocked.wood)return{kind:"padA",p:Z.padA.c,r:.2}}return n?{kind:"cash",p:Ku(a),r:.3}:{kind:"cash",p:Ku(Re.unlocked.c2&&Zu(1)>Zu(0)?1:0),r:.3}}function rp(i,e,t){Re.t=i;for(let a=nl.length-1;a>=0;a--)if(i>=nl[a][0]){let l=nl[a][1];nl.splice(a,1),l()}for(let a of ar){let l=Es[a];l.showAt!==void 0&&i>=l.showAt&&!l.visible&&(l.show(i),qt("pop",{vol:.6})),l.update(i)}Re.target=ex();{let a=Re.target?Re.target.kind:"-";a!==Re.lastK&&((Re.log||(Re.log=[])).push(i.toFixed(1)+" "+a+" g"+St.goods.n+" c"+St.cash.n+" f"+rt.fuel+" tr"+Rn.n+" gr"+(As[0].length+As[1].length)),Re.lastK=a)}U1(i,e,t),I1(i,e),P1(i,e),N1(i,e),A1(i,e),O1(i,e),dg(i),ag(i),Ng(i);let n=St,s=n.goods.n?n.goods.items[0].type:null,r=Re.target;Oo.padA.update(i,e,!Re.unlocked.wood,$t(n.p,Z.padA.c)<Z.padA.r+.25&&Bn.n>0&&(!s||s==="log"),r&&r.kind==="padA"),Oo.feed.update(i,e,!Re.unlocked.wood&&(s==="log"||rt.fuel>0),s==="log"&&$t(n.p,Z.feed)<.95,r&&r.kind==="feed"),Oo.serve.forEach((a,l)=>a.update(i,e,(l===0||Re.unlocked.c2)&&(s==="cooked"||Fo(l)>0),$t(n.p,Z.serve[l])<1&&(s==="cooked"||Fo(l)>0),r&&(r.kind==="serve"||r.kind==="cash")&&Math.min($t(r.p,Z.serve[l]),$t(r.p,Z.cashSpot[l]))<.1)),Rg(i,e,r?{...r,y:.02}:null,n.p);let o=r?[n.p,...sp(n.p,r.p)]:null;Pg(i,e,o,()=>.02,!!r&&!Re.ended);for(let a=hr.length-1;a>=0;a--)i>hr[a].t0+hr[a].dur&&hr.splice(a,1)}var sl=()=>({hero:St,front:dn,crowd:cn,tiles:Es,pile:Bn,tray:Rn,oven:rt,ground:As,counterSt:ws,belts:il,logSt:Yg});function Ju(){return[St.p[0],.9,St.p[1]]}var hn=1080,$n=1920,ko=!1,pp=!1,ot={touching:!1,lastTouch:-1/0,firstTouch:1/0,auto:!0,autoT:0,ended:!1,endT:1/0,joy:null},wt={id:null,ox:0,oy:0,dx:0,dy:0},k1=10,dr=80,ap=0,$u=0,os=0,Jn=1,rl=-1,mr=.05,fr=0,Rs=_u(),sx=i=>[i.x*hn/Rs.w,i.y*$n/Rs.h],pr={x:28,y:34,w:300,h:89},_i={x:44,y:0,w:268,h:82},up=92;async function z1(){Zn(1001),{W:hn,H:$n}=zf();let i=$n/Rs.h;Rs.safeTop&&(pr.y=Math.max(pr.y,Rs.safeTop*i+10)),Rs.menu&&Rs.menu.bottom&&(up=Math.max(up,Rs.menu.bottom*i+48));let[e,t,n]=await Promise.all([go("assets/ui/logo.png"),go("assets/ui/cover.jpg"),go("assets/ui/meat_icon.png")]),{LOGO:s}=$f({W:hn,H:$n,logo:e,bubIcon:n,coverImg:t,renderer:Nt});pr.h=s.h,_i.y=pr.y+pr.h+10,Pd(f=>{mr=Math.max(mr,.08+f*.82)}),Ff(rx);let r=await Ud("assets/env/meta.json");Hf(r);let o={},a={},l=(f,h,d={repeat:!0})=>Nd(h,d).then(p=>{o[f]=p}),c=(f,h)=>Dd(h).then(d=>{a[f]=d});await Promise.all([l("col","assets/env/color.jpg",{srgb:!1,repeat:!1}),l("dep","assets/env/depth.png",{srgb:!1,repeat:!1}),l("heroBody","assets/tex/hero_body.jpg"),l("heroFace","assets/tex/hero_face.jpg"),l("custBody","assets/tex/cust_body.jpg"),l("custPlate","assets/tex/cust_plate.jpg"),l("meatRaw","assets/tex/meat_raw.jpg"),l("meatCooked","assets/tex/meat_cooked.jpg"),l("cash","assets/tex/cash.jpg"),l("log","assets/tex/log.jpg"),l("grinder1","assets/tex/grinder1.jpg"),l("grinder2","assets/tex/grinder2.jpg"),l("stump2Top","assets/tex/stump2_top.jpg"),l("stump2Bark","assets/tex/stump2_bark.jpg"),l("stump3Top","assets/tex/stump3_top.jpg"),l("stump3Bark","assets/tex/stump3_bark.jpg"),l("giantCap","assets/tex/giant_cap.jpg",{repeat:!1}),l("giantCore","assets/tex/giant_core.jpg"),l("bark","assets/tex/bark.jpg"),l("belt","assets/tex/belt.jpg"),c("hero","assets/models/hero.glb"),c("cust","assets/models/cust.glb"),c("crowd","assets/models/crowd.glb"),c("grinder1","assets/models/grinder1.glb"),c("grinder2","assets/models/grinder2.glb"),c("meatRaw","assets/models/meat_raw.glb"),c("meatCooked","assets/models/meat_cooked.glb"),c("cash","assets/models/cash.glb"),c("log","assets/models/log.glb"),c("counter","assets/models/counter.glb"),c("stump2","assets/models/stump2.glb"),c("stump3","assets/models/stump3.glb"),Fg()]),o.meatIconImg=n,Xf({col:o.col,dep:o.dep}),qf(),og(a,o);let u={hero:wo(a.hero,{height:1.85}),cust:wo(a.cust,{height:1.22}),crowd:wo(a.crowd,{height:1.22}),grinder1:wo(a.grinder1,{scale:1}),grinder2:wo(a.grinder2,{scale:1}),counter:a.counter,stump2:a.stump2,stump3:a.stump3,heroTex:{V5_1_lan1:o.heroFace,V5_1_lan_:o.heroBody,"*":o.heroBody},custTex:{yi_lan2:o.custBody,\u95E8\u6846:o.custPlate,"*":o.custBody}};ip(u,o),Dg(),F0(H1,V1,G1),Mu(()=>{$u=Wa()},()=>{}),ki=Ju(),hp(0,!0);try{Nt.compile(ct,Mn)}catch(f){}ko=!0,rl=-1,mr=1,Bg()}function H1(i){Og();let[e,t]=sx(i);if(!ko){pp&&Xa();return}if(ot.ended){Xa(!1);return}if(X1(e,t)){Xa(!1);return}wt.id===null&&(wt.id=i.id,wt.ox=e,wt.oy=t,wt.dx=wt.dy=0,ot.touching=!0,W1())}function V1(i){if(i.id!==wt.id)return;let[e,t]=sx(i),n=e-wt.ox,s=t-wt.oy,r=Math.hypot(n,s);r>dr&&(wt.ox=e-n/r*dr,wt.oy=t-s/r*dr,n=n/r*dr,s=s/r*dr),wt.dx=n,wt.dy=s}function G1(i){i.id===wt.id&&(wt.id=null,wt.dx=wt.dy=0,ot.touching=!1,ot.lastTouch=os)}function W1(){ot.firstTouch===1/0&&(ot.firstTouch=os,Zn(1004),Zn(2001))}var X1=(i,e)=>i>=_i.x-10&&i<=_i.x+_i.w+10&&e>=_i.y-10&&e<=_i.y+_i.h+10;function q1(){let i=sn,e=i.R[0],t=i.R[2],n=Math.hypot(i.F[0],i.F[2]),s=i.F[0]/n,r=i.F[2]/n,o=wt.dx/dr,a=wt.dy/dr;return[e*o-s*a,t*o-r*a]}function Y1(i){if(ot.ended){un.active=!1;return}if(ot.joy=ot.touching?{x:wt.ox,y:wt.oy,dx:wt.dx,dy:wt.dy}:null,ot.touching){if(ot.auto=!1,ot.lastTouch=i,Math.hypot(wt.dx,wt.dy)>k1){let[t,n]=q1();un.vx=t,un.vz=n}else un.vx=un.vz=0;un.active=!0}else i-ot.lastTouch>=Dt.idle?(ot.auto||(ot.autoT=i),ot.auto=!0,un.active=!1):(ot.auto=!1,un.active=!0,un.vx=un.vz=0);i>=Math.min(Re.endAt,Dt.cap)&&Z1(i)}function Z1(i){console.log("[flow] end t="+i.toFixed(1)+" served="+Re.served+" fps~"+(mp/Math.max(1,i)).toFixed(0)),ot.ended=!0,ot.endT=i,Re.ended=!0,wt.id=null,wt.dx=wt.dy=0,ot.touching=!1,ot.joy=null,Zn(1011),Zn(1013),kg(),setTimeout(()=>Xa(!0),200)}var ki=[0,0,0],K1=null;function hp(i,e=!1){let t=ju.look||Ju(),n=Gf*+(Yn.zoom||1),s=e?1:1-Math.exp(-i*4);ki=[Xt(ki[0],t[0],s),Xt(ki[1],t[1],s),Xt(ki[2],t[2],s)];let r=Vf(ki[0],ki[1],ki[2]);Wf(r[0],r[1]-.06*nr.h,n)}var Bo=0,tx=-9,nx=0;function J1(i,e){jf(),ko&&Jn<1&&($1(i),j1(i),Q1(i),fp(i),eT(i),tT(),nT(i),iT(i)),Lu(Jn),Jn>.003&&sT(e),Ht||(window.__nq=Jf()),Qf()}var jt=[0,0];function $1(i){if(!(ot.ended||!cn.heads.length)){for(let e=0;e<7;e++){let n=e*2.5/7+Ze(e)*.4,s=i+n,r=Math.floor(s/2.5),o=s-r*2.5;if(o>1.9)continue;let a=Math.floor(Ze(e*13.1+r*7.7)*cn.heads.length),l=cn.heads[a];if(cn.list[a].hidden||(vo(l[0],l[1]+.5,l[2],jt),jt[0]<60||jt[0]>hn-60||jt[1]<260||jt[1]>$n-260))continue;let c=En(o/.22)*(1-Ft((o-1.6)/.3)),u=o>.6&&o<1.1?Math.cos(Math.PI*2*(o-.6)/.5):1;At(Ze(e*5.3+r*1.9)<.5?"ang1":"ang0",jt[0],jt[1]-10*o,{sx:c*Math.max(.06,Math.abs(u))*.8,sy:c*.8})}for(let e of hr){let t=i-e.t0;if(t<0)continue;vo(e.p[0],e.p[1],e.p[2],jt);let n=En(t/.22)*(1-Ft((t-e.dur+.3)/.3));At(e.kind,jt[0],jt[1]-14*t,{s:n*.85})}}}function j1(i){if(!ot.ended)for(let e of dn){if(e.row!==0||e.ci===1&&!Re.unlocked.c2||e.state!=="wait"&&e.state!=="got")continue;if(vo(e.p[0],1.72,e.p[1],jt),e.state==="got"){let n=i-e.t0,s=En(n/.16),r=1-Ft((n-.4)/.15);r>.01&&At("check",jt[0],jt[1]+10,{s:s*.8,a:r});continue}let t=.72*En((i-e.t0)/.3);At("bub",jt[0],jt[1],{s:t}),At("bubIcon",jt[0],jt[1],{s:t*.85})}}function Q1(i){let e=sl().hero,t=i-e.full;if(t>1.4||ot.ended||!e.goods.n)return;let n=e.goods.topPos();vo(n[0],n[1]+.45,n[2],jt),At("full",jt[0],jt[1],{s:En(t/.25)*(1-Ft((t-1.1)/.3))})}function fp(i){var c;let e=sl().hero.cash.n;e!==nx&&(tx=i,nx=e);let t=Math.min(.1,i-((c=fp.lt)!=null?c:i));fp.lt=i;let n=60*t*Math.max(1,Math.abs(e-Bo)/10);Bo=Math.abs(e-Bo)<=n?e:Bo+Math.sign(e-Bo)*n;let s=hn-40,r=s-250,o=up;At("hudBg",r,o);let a=i-tx,l=a>=0&&a<.18?1+Math.sin(Math.PI*a/.18)*.18:1;Nu(Math.round(Bo),s-22,o+2,{set:"a",sc:l})}function eT(i){if(!ot.auto||ot.ended)return;let e=Ft((i-ot.autoT)/.3),t=hn/2,n=$n-510,s=i%1.6/1.6,r=1.35,o=Math.sin(s*Math.PI*2)*150*r;At("tutLine",t,n,{a:e}),At("hand",t+o,n+18*r,{a:e}),At("tutText",t,n+150*r,{a:e})}function tT(){let i=ot.joy;i&&(At("joyBase",i.x,i.y),At("joyKnob",i.x+i.dx,i.y+i.dy))}function nT(i){At("logo",pr.x,pr.y),At("btnTop",_i.x+_i.w/2,_i.y+_i.h/2,{s:ot.ended?1:1+.05*Math.sin(i*6)})}function iT(i){if(!ot.ended)return;let e=i-ot.endT,t=Ft(e/.25),n=En((e-.1)/.45),s=En((e-.3)/.45);At("black",0,0,{w:hn,h:$n,a:.55*t}),n>.01&&At("logoBig",hn/2,$n*.4,{s:n}),s>.01&&At("btnEnd",hn/2,$n*.55,{s:s*(1+.05*Math.sin(e*6))})}function sT(i){Lu(Jn),fr+=(Math.min(.97,mr+.12)-fr)*(fr<mr?.3:.025)*.6,mr>=1&&(fr=1);for(let s=0;s<28;s++){let r=Ze(s*3.1)*hn,o=.08+Ze(s*5.7)*.08,a=(i*o+Ze(s*1.7))%1.05*$n,l=.25+Ze(s*9.3)*.5;At("snow",r+Math.sin(i*2.4+s)*9,a,{s:l,a:Jn*(.35+Ze(s)*.5)})}At("logoLoad",hn/2,$n*.31,{a:Jn,s:1+.04*Math.sin(i*2.4)});let e=hn*.17,t=$n*.52;At("barBg",e,t,{w:hn*.66,h:16,a:Jn}),At("barFill",e,t,{w:Math.max(2,hn*.66*fr),h:16,a:Jn});let n=Math.floor(fr*100);At("loading",hn/2-60,t+52,{a:Jn}),Nu(n,hn/2+46,t+52,{set:"p",align:"left",a:Jn}),At("pct",hn/2+46+(n>=10?n>=100?66:44:22)+16,t+52,{a:Jn})}var rT=Yn.debug==="1"||!1,ol=[];Ht&&wx.onError&&wx.onError(i=>{ol.push(String(i&&(i.message||i)).slice(0,300))});var si=null,lp=null,ix=-1,dp=0;function oT(i){if(!(!(rT||ol.length)||!ko)){if(!si){lp=Ni(512,256);let e=new vt(lp);e.colorSpace=dt,si=new qe(new Pn(2,2),new Jt({map:e,transparent:!0,depthTest:!1,depthWrite:!1})),si.frustumCulled=!1,si.userData.sc=new Ti,si.userData.sc.add(si),si.userData.cam=new Dn(-1,1,1,-1,-1,1),si.scale.set(.46,.115*(hn/$n)/.5625,1),si.position.set(-.52,-.46,0)}if(i-ix>.5){ix=i;let e=lp.getContext("2d");e.clearRect(0,0,512,256),e.fillStyle="rgba(0,0,0,0.55)",e.fillRect(0,0,512,256),e.fillStyle="#9f9",e.font="20px monospace";let t=Re,n=sl(),s=n.hero;["t="+os.toFixed(1)+" fps="+dp.toFixed(0)+" auto="+(ot.auto?1:0)+" end="+(ot.ended?1:0),"unl="+Object.keys(t.unlocked).join("+")+" served="+t.served,"goods="+s.goods.n+" cash="+s.cash.n+" pile="+n.pile.n+" fuel="+n.oven.fuel+" tray="+n.tray.n+" tgt="+(t.target&&t.target.kind)].forEach((o,a)=>e.fillText(o,8,26+a*24)),e.fillStyle="#f88",ol.slice(-5).forEach((o,a)=>{for(let l=0;l<2;l++)e.fillText(o.slice(l*44,l*44+44),8,110+a*30+l*14)}),si.material.map.needsUpdate=!0}Nt.render(si.userData.sc,si.userData.cam)}}var mp=0,cp=0,aT=+(Yn.speed||1),lT=Yn.raf==="timer"?i=>setTimeout(i,16):Ff;function rx(){lT(rx);let i=Wa();ap||(ap=i,$u=i);let e=(i-ap)/1e3,t=Math.min(.05,(i-$u)/1e3);if($u=i,ko){rl<0&&(rl=e,cp=i,Zn(1003),console.log("[flow] first frame load="+e.toFixed(2)+"s canvas="+ln.width+"x"+ln.height+" webgl2="+Nt.capabilities.isWebGL2),typeof window!="undefined"&&window.__ready&&window.__ready()),Jn=1-Ft((e-rl-.15)/.5);let n=ju.paused?0:Math.min(.5,(i-cp)/1e3)*aT;cp=i;try{for(;n>1e-4;){let s=Math.min(n,.03333333333333333);n-=s,os+=s,rn.uTime.value=os,Y1(os),rp(os,s,ot.auto&&!ot.ended),hp(s)}ju.paused&&ju.look&&hp(0,!0)}catch(s){ol.length<50&&(ol.push(String(s&&(s.stack||s.message)||s).slice(0,300)),console.error(s))}dp=dp*.95+1/Math.max(.001,t)*.05,Yf([ki[0],ki[2]]),mp++}else Nt&&Nt.setRenderTarget(null),Nt&&Nt.clear(),!pp&&e>25&&ox("timeout");if(J1(os,e),oT(e),!Ht&&window.__cap){let n=window.__cap;window.__cap=null,n(ln.toDataURL("image/jpeg",.82))}}function ox(i){pp=!0,console.error("playable fail:",i),Ht&&xu()}var ju=(Ht?GameGlobal:window).__dbg={UI:ed,GM:op,world:Zf,flow:ot,T:Dt,LD:Fd,fixSkinWeights:Bd,paused:!1,look:null,st:()=>({coverA:Jn,readyT:rl,ready:ko,progress:mr,shown:fr,gameT:os,frames:mp})};z1().catch(i=>{console.error(i),ox(i)});})();
