(()=>{var Wg=Object.defineProperty;var zh=(i,e)=>{for(var t in e)Wg(i,t,{get:e[t],enumerable:!0})};var Nn=typeof GameGlobal!="undefined"?GameGlobal:null;if(Nn){if(typeof Nn.self=="undefined"&&(Nn.self=Nn),typeof Nn.navigator=="undefined"&&(Nn.navigator={userAgent:"wechatgame",maxTouchPoints:5}),typeof Nn.performance=="undefined"||!Nn.performance.now){let i=typeof wx!="undefined"&&wx.getPerformance?wx.getPerformance():null;Nn.performance={now:i?()=>i.now()/1e3:()=>Date.now()}}if(typeof Nn.AbortController=="undefined"){class i{constructor(){this.aborted=!1,this.reason=void 0,this.onabort=null,this._l=[]}addEventListener(t,n){this._l.push(n)}removeEventListener(t,n){this._l=this._l.filter(s=>s!==n)}throwIfAborted(){if(this.aborted)throw this.reason}}Nn.AbortSignal=i,Nn.AbortController=class{constructor(){this.signal=new i}abort(t){let n=this.signal;if(!n.aborted){n.aborted=!0,n.reason=t;for(let s of n._l)try{s({type:"abort"})}catch(r){}n.onabort&&n.onabort({type:"abort"})}}}}typeof Nn.TextDecoder=="undefined"&&(Nn.TextDecoder=class{decode(e){let t=e instanceof Uint8Array?e:new Uint8Array(e.buffer?e.buffer:e,e.byteOffset||0,e.byteLength),n="",s=0;for(;s<t.length;){let r=t[s++];if(r>127)if(r>191&&r<224)r=(r&31)<<6|t[s++]&63;else if(r>223&&r<240)r=(r&15)<<12|(t[s++]&63)<<6|t[s++]&63;else{r=(r&7)<<18|(t[s++]&63)<<12|(t[s++]&63)<<6|t[s++]&63,r-=65536,n+=String.fromCharCode(55296+(r>>10),56320+(r&1023));continue}n+=String.fromCharCode(r)}return n}})}var Wp=0,yu=1,Xp=2;var xa=1,qp=2,ro=3,ki=0,An=1,cn=2,zi=0,Ts=1,_a=2,Mu=3,Su=4,Kl=5;var rr=100,Yp=101,Kp=102,Zp=103,Jp=104,$p=200,va=201,jp=202,Qp=203,bu=204,oo=205,em=206,tm=207,nm=208,im=209,sm=210,rm=211,om=212,am=213,lm=214,bl=0,Hr=1,Tl=2,Vr=3,wl=4,El=5,Al=6,Rl=7,ya=0,cm=1,hm=2,Si=0,Tu=1,wu=2,Eu=3,Au=4,Ru=5,Cu=6,Iu=7,uu="attached",um="detached",Pu=300,ws=301,or=302,Zl=303,Jl=304,Ma=306,Li=1e3,ni=1001,Gr=1002,Ft=1003,$l=1004;var ar=1005;var Et=1006,ao=1007;var Kn=1008;var On=1009,Lu=1010,Nu=1011,lo=1012,jl=1013,Zn=1014,Jn=1015,bi=1016,Ql=1017,ec=1018,co=1020,Du=35902,Uu=35899,Fu=1021,Ou=1022,$n=1023,Ni=1026,Es=1027,tc=1028,nc=1029,As=1030,ic=1031;var sc=1033,Sa=33776,ba=33777,Ta=33778,wa=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,hc=37492,uc=37496,fc=37488,dc=37489,Ea=37490,pc=37491,mc=37808,gc=37809,xc=37810,_c=37811,vc=37812,yc=37813,Mc=37814,Sc=37815,bc=37816,Tc=37817,wc=37818,Ec=37819,Ac=37820,Rc=37821,Cc=36492,Ic=36494,Pc=36495,Lc=36283,Nc=36284,Aa=36285,Dc=36286,fm=2200,dm=2201,pm=2202,Zs=2300,Js=2301,yl=2302,fu=2303,qs=2400,Ys=2401,qo=2402,Uc=2500,mm=2501,Bu=0,Ra=1,ho=2,gm=3200;var uo=0,xm=1,Rn="",ot="srgb",wn="srgb-linear",Yo="linear",ht="srgb";var Ml=7680;var _m=519,vm=512,ym=513,Mm=514,Fc=515,Sm=516,bm=517,Oc=518,Tm=519,ku=35044,Hi=35048;var zu="300 es",_i=2e3,Wr=2001;function Xg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wm(){let i=Xr("canvas");return i.style.display="block",i}var ap={},qr=null;function Ko(...i){let e="THREE."+i.shift();qr?qr("log",e,...i):console.log(e,...i)}function Em(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Em(i);let e="THREE."+i.shift();if(qr)qr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function De(...i){i=Em(i);let e="THREE."+i.shift();if(qr)qr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ks(...i){let e=i.join(" ");e in ap||(ap[e]=!0,we(...i))}function Am(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Rm={[bl]:Hr,[Tl]:Al,[wl]:Rl,[Vr]:El,[Hr]:bl,[Al]:Tl,[Rl]:wl,[El]:Vr},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lp=1234567,Wo=Math.PI/180,$s=180/Math.PI;function vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Hu(i,e){return(i%e+e)%e}function Yg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Kg(i,e,t){return i!==e?(t-i)/(e-i):0}function Xo(i,e,t){return(1-t)*i+t*e}function Zg(i,e,t,n){return Xo(i,e,1-Math.exp(-t*n))}function Jg(i,e=1){return e-Math.abs(Hu(i,e*2)-e)}function $g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ex(i,e){return i+Math.random()*(e-i)}function tx(i){return i*(.5-Math.random())}function nx(i){i!==void 0&&(lp=i);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ix(i){return i*Wo}function sx(i){return i*$s}function rx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ox(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ax(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*d,a*h,a*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vu={DEG2RAD:Wo,RAD2DEG:$s,generateUUID:vi,clamp:Je,euclideanModulo:Hu,mapLinear:Yg,inverseLerp:Kg,lerp:Xo,damp:Zg,pingpong:Jg,smoothstep:$g,smootherstep:jg,randInt:Qg,randFloat:ex,randFloatSpread:tx,seededRandom:nx,degToRad:ix,radToDeg:sx,isPowerOfTwo:rx,ceilPowerOfTwo:ox,floorPowerOfTwo:ax,setQuaternionFromProperEuler:lx,normalize:ft,denormalize:xi},Yu=class Yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yu.prototype.isVector2=!0;var Ne=Yu,wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],m=r[o+3];if(u!==m||l!==f||c!==d||h!==x){let g=l*f+c*d+h*x+u*m;g<0&&(f=-f,d=-d,x=-x,m=-m,g=-g);let p=1-a;if(g<.9995){let T=Math.acos(g),R=Math.sin(T);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R,l=l*p+f*a,c=c*p+d*a,h=h*p+x*a,u=u*p+m*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+x*a,u=u*p+m*a;let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*d-c*f,e[t+1]=l*x+h*f+c*u-a*d,e[t+2]=c*x+h*d+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ku=class Ku{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ku.prototype.isVector3=!0;var C=Ku,Hh=new C,cp=new wt,Zu=class Zu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],m=s[0],g=s[3],p=s[6],T=s[1],R=s[4],M=s[7],S=s[2],b=s[5],A=s[8];return r[0]=o*m+a*T+l*S,r[3]=o*g+a*R+l*b,r[6]=o*p+a*M+l*A,r[1]=c*m+h*T+u*S,r[4]=c*g+h*R+u*b,r[7]=c*p+h*M+u*A,r[2]=f*m+d*T+x*S,r[5]=f*g+d*R+x*b,r[8]=f*p+d*M+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/x;return e[0]=u*m,e[1]=(s*c-h*n)*m,e[2]=(a*n-s*o)*m,e[3]=f*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zu.prototype.isMatrix3=!0;var Fe=Zu,Vh=new Fe,hp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),up=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){let i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=zr(s.r),s.g=zr(s.g),s.b=zr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:e,whitePoint:n,transfer:Yo,toXYZ:hp,fromXYZ:up,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:hp,fromXYZ:up,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),i}var We=cx();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Er,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=Xr("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hx=0,Yr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gh(s[o].image)):r.push(Gh(s[o]))}else r=Gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var ux=0,Wh=new C,gt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=Et,o=Kn,a=$n,l=On,c=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=vi(),this.name="",this.source=new Yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Pu;gt.DEFAULT_ANISOTROPY=1;var Ju=class Ju{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(d+1)/2,S=(p+1)/2,b=(h+f)/4,A=(u+m)/4,v=(x+g)/4;return R>M&&R>S?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=b/n,r=A/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-x)*(g-x)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(u-m)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ju.prototype.isVector4=!0;var at=Ju,Il=class extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new gt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zo=class extends gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Yl=class Yl{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,x,m,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,x,m,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,x,m,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+x*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=x+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,x=c*h,m=c*u;t[0]=f+m*a,t[4]=x*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,x=c*h,m=c*u;t[0]=f-m*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,m=a*u;t[0]=l*h,t[4]=x*c-d,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=d*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=m-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+x,t[10]=f-m*u}else if(e.order==="XZY"){let f=o*l,d=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,dx)}lookAt(e,t,n){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),gs.crossVectors(n,Xn),gs.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),gs.crossVectors(n,Xn)),gs.normalize(),Za.crossVectors(Xn,gs),s[0]=gs.x,s[4]=Za.x,s[8]=Xn.x,s[1]=gs.y,s[5]=Za.y,s[9]=Xn.y,s[2]=gs.z,s[6]=Za.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],m=n[6],g=n[10],p=n[14],T=n[3],R=n[7],M=n[11],S=n[15],b=s[0],A=s[4],v=s[8],w=s[12],I=s[1],U=s[5],O=s[9],H=s[13],L=s[2],z=s[6],K=s[10],Z=s[14],ne=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=o*b+a*I+l*L+c*ne,r[4]=o*A+a*U+l*z+c*X,r[8]=o*v+a*O+l*K+c*Q,r[12]=o*w+a*H+l*Z+c*te,r[1]=h*b+u*I+f*L+d*ne,r[5]=h*A+u*U+f*z+d*X,r[9]=h*v+u*O+f*K+d*Q,r[13]=h*w+u*H+f*Z+d*te,r[2]=x*b+m*I+g*L+p*ne,r[6]=x*A+m*U+g*z+p*X,r[10]=x*v+m*O+g*K+p*Q,r[14]=x*w+m*H+g*Z+p*te,r[3]=T*b+R*I+M*L+S*ne,r[7]=T*A+R*U+M*z+S*X,r[11]=T*v+R*O+M*K+S*Q,r[15]=T*w+R*H+M*Z+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],m=e[7],g=e[11],p=e[15],T=l*d-c*f,R=a*d-c*u,M=a*f-l*u,S=o*d-c*h,b=o*f-l*h,A=o*u-a*h;return t*(m*T-g*R+p*M)-n*(x*T-g*S+p*b)+s*(x*R-m*S+p*A)-r*(x*M-m*b+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],m=e[13],g=e[14],p=e[15],T=t*a-n*o,R=t*l-s*o,M=t*c-r*o,S=n*l-s*a,b=n*c-r*a,A=s*c-r*l,v=h*m-u*x,w=h*g-f*x,I=h*p-d*x,U=u*g-f*m,O=u*p-d*m,H=f*p-d*g,L=T*H-R*O+M*U+S*I-b*w+A*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return e[0]=(a*H-l*O+c*U)*z,e[1]=(s*O-n*H-r*U)*z,e[2]=(m*A-g*b+p*S)*z,e[3]=(f*b-u*A-d*S)*z,e[4]=(l*I-o*H-c*w)*z,e[5]=(t*H-s*I+r*w)*z,e[6]=(g*M-x*A-p*R)*z,e[7]=(h*A-f*M+d*R)*z,e[8]=(o*O-a*I+c*v)*z,e[9]=(n*I-t*O-r*v)*z,e[10]=(x*b-m*M+p*T)*z,e[11]=(u*M-h*b-d*T)*z,e[12]=(a*w-o*U-l*v)*z,e[13]=(t*U-n*w+s*v)*z,e[14]=(m*R-x*S-g*T)*z,e[15]=(h*S-u*R+f*T)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,x=r*u,m=o*h,g=o*u,p=a*u,T=l*c,R=l*h,M=l*u,S=n.x,b=n.y,A=n.z;return s[0]=(1-(m+p))*S,s[1]=(d+M)*S,s[2]=(x-R)*S,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(f+p))*b,s[6]=(g+T)*b,s[7]=0,s[8]=(x+R)*A,s[9]=(g-T)*A,s[10]=(1-(f+m))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ar.set(s[0],s[1],s[2]).length(),a=Ar.set(s[4],s[5],s[6]).length(),l=Ar.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,h=1/a,u=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),x,m;if(l)x=r/(o-r),m=o*r/(o-r);else if(a===_i)x=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Wr)x=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),x,m;if(l)x=1/(o-r),m=o/(o-r);else if(a===_i)x=-2/(o-r),m=-(o+r)/(o-r);else if(a===Wr)x=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Yl.prototype.isMatrix4=!0;var Le=Yl,Ar=new C,di=new Le,fx=new C(0,0,0),dx=new C(1,1,1),gs=new C,Za=new C,Xn=new C,fp=new Le,dp=new wt,En=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Jo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},px=0,pp=new C,Rr=new wt,Ki=new Le,Ja=new C,Fo=new C,mx=new C,gx=new wt,mp=new C(1,0,0),gp=new C(0,1,0),xp=new C(0,0,1),_p={type:"added"},xx={type:"removed"},Cr={type:"childadded",child:null},Xh={type:"childremoved",child:null},Lt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new En,n=new wt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Fe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(xp,e)}translateOnAxis(e,t){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Fo,Ja,this.up):Ki.lookAt(Ja,Fo,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Ki),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Xh.child=e,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new C(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},$a={h:0,s:0,l:0};function qh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Hu(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qh(o,r,e+1/3),this.g=qh(o,r,e),this.b=qh(o,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=ot){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=Cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return We.workingToColorSpace(mn.copy(this),e),Math.round(Je(mn.r*255,0,255))*65536+Math.round(Je(mn.g*255,0,255))*256+Math.round(Je(mn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ot){We.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL($a);let n=Xo(xs.h,$a.h,t),s=Xo(xs.s,$a.s,t),r=Xo(xs.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ve;ve.NAMES=Cm;var Di=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new C,Zi=new C,Yh=new C,Ji=new C,Ir=new C,Pr=new C,vp=new C,Kh=new C,Zh=new C,Jh=new C,$h=new at,jh=new at,Qh=new at,Ss=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),Zi.subVectors(n,t),Yh.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Zi),l=pi.dot(Yh),c=Zi.dot(Zi),h=Zi.dot(Yh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return $h.setScalar(0),jh.setScalar(0),Qh.setScalar(0),$h.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,n),Qh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($h,r.x),o.addScaledVector(jh,r.y),o.addScaledVector(Qh,r.z),o}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),Zi.subVectors(e,t),pi.cross(Zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),pi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ir.subVectors(s,n),Pr.subVectors(r,n),Kh.subVectors(e,n);let l=Ir.dot(Kh),c=Pr.dot(Kh);if(l<=0&&c<=0)return t.copy(n);Zh.subVectors(e,s);let h=Ir.dot(Zh),u=Pr.dot(Zh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ir,o);Jh.subVectors(e,r);let d=Ir.dot(Jh),x=Pr.dot(Jh);if(x>=0&&d<=x)return t.copy(r);let m=d*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Pr,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return vp.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(vp,a);let p=1/(g+m+f);return o=m*p,a=f*p,t.copy(n).addScaledVector(Ir,o).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),Qa.subVectors(this.max,Oo),Lr.subVectors(e.a,Oo),Nr.subVectors(e.b,Oo),Dr.subVectors(e.c,Oo),_s.subVectors(Nr,Lr),vs.subVectors(Dr,Nr),Vs.subVectors(Lr,Dr);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-Vs.z,Vs.y,_s.z,0,-_s.x,vs.z,0,-vs.x,Vs.z,0,-Vs.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-Vs.y,Vs.x,0];return!eu(t,Lr,Nr,Dr,Qa)||(t=[1,0,0,0,1,0,0,0,1],!eu(t,Lr,Nr,Dr,Qa))?!1:(el.crossVectors(_s,vs),t=[el.x,el.y,el.z],eu(t,Lr,Nr,Dr,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$i=[new C,new C,new C,new C,new C,new C,new C,new C],mi=new C,ja=new Yn,Lr=new C,Nr=new C,Dr=new C,_s=new C,vs=new C,Vs=new C,Oo=new C,Qa=new C,el=new C,Gs=new C;function eu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gs.fromArray(i,r);let a=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),h=n.dot(Gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qt=new C,tl=new Ne,vx=0,tt=class extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ku,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=class extends tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var jo=class extends tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Vt=class extends tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},yx=new Yn,Bo=new C,tu=new C,on=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);let t=Bo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Bo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(tu)),this.expandByPoint(Bo.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mx=0,ti=new Le,nu=new Lt,Ur=new C,qn=new Yn,ko=new Yn,sn=new C,xt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?jo:$o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(qn.min,ko.min),qn.expandByPoint(sn),sn.addVectors(qn.max,ko.max),qn.expandByPoint(sn)):(qn.expandByPoint(ko.min),qn.expandByPoint(ko.max))}qn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),sn.add(Ur)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new tt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new C,l[v]=new C;let c=new C,h=new C,u=new C,f=new Ne,d=new Ne,x=new Ne,m=new C,g=new C;function p(v,w,I){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,w),x.fromBufferAttribute(r,I),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let U=1/(d.x*x.y-x.x*d.y);isFinite(U)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(U),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(U),a[v].add(m),a[w].add(m),a[I].add(m),l[v].add(g),l[w].add(g),l[I].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,w=T.length;v<w;++v){let I=T[v],U=I.start,O=I.count;for(let H=U,L=U+O;H<L;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let R=new C,M=new C,S=new C,b=new C;function A(v){S.fromBufferAttribute(s,v),b.copy(S);let w=a[v];R.copy(w),R.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(b,w);let U=M.dot(l[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,U)}for(let v=0,w=T.length;v<w;++v){let I=T[v],U=I.start,O=I.count;for(let H=U,L=U+O;H<L;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),m=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new tt(f,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ku,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Tn=new C,Jr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},iu=new C,Sx=new C,bx=new Fe,gi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=iu.subVectors(n,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bx.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tx=0,an=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Ts,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=oo,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ml,this.stencilZFail=Ml,this.stencilZPass=Ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ji=new C,su=new C,nl=new C,il=new C,js=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){su.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(su);let r=e.distanceTo(t)*.5,o=-this.direction.dot(nl),a=il.dot(this.direction),l=-il.dot(nl),c=il.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(su).addScaledVector(nl,f),d}intersectSphere(e,t){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,x=t.x-o.x,m=t.y-o.y,g=t.z-o.z,p=n.x-o.x,T=n.y-o.y,R=n.z-o.z,M=Math.abs(l),S=Math.abs(c),b=Math.abs(h),A,v,w,I,U,O,H,L,z,K,Z,ne;if(M>=S&&M>=b?(w=l,O=u,z=x,ne=p,l>=0?(A=c,v=h,I=f,U=d,H=m,L=g,K=T,Z=R):(A=h,v=c,I=d,U=f,H=g,L=m,K=R,Z=T)):S>=b?(w=c,O=f,z=m,ne=T,c>=0?(A=h,v=l,I=d,U=u,H=g,L=x,K=R,Z=p):(A=l,v=h,I=u,U=d,H=x,L=g,K=p,Z=R)):(w=h,O=d,z=g,ne=R,h>=0?(A=l,v=c,I=u,U=f,H=x,L=m,K=p,Z=T):(A=c,v=l,I=f,U=u,H=m,L=x,K=T,Z=p)),w===0)return null;let X=A/w,Q=v/w,te=1/w,Ie=I-X*O,Re=U-Q*O,Mt=H-X*z,et=L-Q*z,rt=K-X*ne,q=Z-Q*ne,j=rt*et-q*Mt,ye=Ie*q-Re*rt,Oe=Mt*Re-et*Ie;if(s){if(j<0||ye<0||Oe<0)return null}else if((j<0||ye<0||Oe<0)&&(j>0||ye>0||Oe>0))return null;let xe=j+ye+Oe;if(xe===0)return null;let Xe=te*(j*O+ye*z+Oe*ne);return(xe>0?Xe<0:Xe>0)?null:this.at(Xe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yp=new Le,Ws=new js,sl=new on,Mp=new C,rl=new C,ol=new C,al=new C,ru=new C,ll=new C,Sp=new C,cl=new C,ze=class extends Lt{constructor(e=new xt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ll.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ru.fromBufferAttribute(u,e),o?ll.addScaledVector(ru,h):ll.addScaledVector(ru.sub(t),h))}t.add(ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(sl.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(sl,Mp)===null||Ws.origin.distanceToSquared(Mp)>(e.far-e.near)**2))&&(yp.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(yp),!(n.boundingBox!==null&&Ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=f.length;x<m;x++){let g=f[x],p=o[g.materialIndex],T=Math.max(g.start,d.start),R=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=T,S=R;M<S;M+=3){let b=a.getX(M),A=a.getX(M+1),v=a.getX(M+2);s=hl(this,p,e,n,c,h,u,b,A,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=x,p=m;g<p;g+=3){let T=a.getX(g),R=a.getX(g+1),M=a.getX(g+2);s=hl(this,o,e,n,c,h,u,T,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=f.length;x<m;x++){let g=f[x],p=o[g.materialIndex],T=Math.max(g.start,d.start),R=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=T,S=R;M<S;M+=3){let b=M,A=M+1,v=M+2;s=hl(this,p,e,n,c,h,u,b,A,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let g=x,p=m;g<p;g+=3){let T=g,R=g+1,M=g+2;s=hl(this,o,e,n,c,h,u,T,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ex(i,e,t,n,s,r,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ki,a),l===null)return null;cl.copy(a),cl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(cl);return c<t.near||c>t.far?null:{distance:c,point:cl.clone(),object:i}}function hl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,rl),i.getVertexPosition(l,ol),i.getVertexPosition(c,al);let h=Ex(i,e,t,n,rl,ol,al,Sp);if(h){let u=new C;Ss.getBarycoord(Sp,rl,ol,al,u),s&&(h.uv=Ss.getInterpolatedAttribute(s,a,l,c,u,new Ne)),r&&(h.uv1=Ss.getInterpolatedAttribute(r,a,l,c,u,new Ne)),o&&(h.normal=Ss.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};Ss.getNormal(rl,ol,al,f.normal),h.face=f,h.barycoord=u}return h}var zo=new at,bp=new at,Tp=new at,Ax=new at,wp=new Le,ul=new C,ou=new on,Ep=new Le,au=new js,Qo=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(s),e.ray.intersectsSphere(ou)!==!1&&(Ep.copy(s).invert(),au.copy(e.ray).applyMatrix4(Ep),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===um?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;bp.fromBufferAttribute(s.attributes.skinIndex,e),Tp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(zo.copy(t),t.set(0,0,0,0)):(zo.set(...t,1),t.set(0,0,0)),zo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Tp.getComponent(r);if(o!==0){let a=bp.getComponent(r);wp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ax.copy(zo).applyMatrix4(wp),o)}}return t.isVector4&&(t.w=zo.w),t.applyMatrix4(this.bindMatrixInverse)}},$r=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jr=class extends gt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ft,h=Ft,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=new Le,Rx=new Le,ea=class i{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Rx;Ap.multiplyMatrices(a,t[r]),Ap.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new jr(t,e,e,$n,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(we("Skeleton: No bone found with UUID:",r),o=new $r),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ts=class extends tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new Le,Rp=new Le,fl=[],Cp=new Yn,Cx=new Le,Ho=new ze,Vo=new on,Ui=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Cp.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Vo.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(n),e.ray.intersectsSphere(Vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),Rp.multiplyMatrices(n,Fr),Ho.matrixWorld=Rp,Ho.raycast(e,fl);for(let o=0,a=fl.length;o<a;o++){let l=fl[o];l.instanceId=r,l.object=this,t.push(l)}fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,tc,Jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xs=new on,Ix=new Ne(.5,.5),dl=new C,Qr=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],m=r[9],g=r[10],p=r[11],T=r[12],R=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,p-x,S-T).normalize(),s[1].setComponents(c+o,d+h,p+x,S+T).normalize(),s[2].setComponents(c+a,d+u,p+m,S+R).normalize(),s[3].setComponents(c-a,d-u,p-m,S-R).normalize(),n)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,d-f,p-g,S-M).normalize();else if(s[4].setComponents(c-l,d-f,p-g,S-M).normalize(),t===_i)s[5].setComponents(c+l,d+f,p+g,S+M).normalize();else if(t===Wr)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=Ix.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(dl.x=s.normal.x>0?e.max.x:e.min.x,dl.y=s.normal.y>0?e.max.y:e.min.y,dl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var eo=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new C,Nl=new C,Ip=new Le,Go=new js,pl=new on,lu=new C,Pp=new C,Qs=class extends Lt{constructor(e=new xt,t=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ll.fromBufferAttribute(t,s-1),Nl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ll.distanceTo(Nl);e.setAttribute("lineDistance",new Vt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;Ip.copy(s).invert(),Go.copy(e.ray).applyMatrix4(Ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let m=d,g=x-1;m<g;m+=c){let p=h.getX(m),T=h.getX(m+1),R=ml(this,e,Go,l,p,T,m);R&&t.push(R)}if(this.isLineLoop){let m=h.getX(x-1),g=h.getX(d),p=ml(this,e,Go,l,m,g,x-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let m=d,g=x-1;m<g;m+=c){let p=ml(this,e,Go,l,m,m+1,m);p&&t.push(p)}if(this.isLineLoop){let m=ml(this,e,Go,l,x-1,d,x-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ml(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ll.fromBufferAttribute(a,s),Nl.fromBufferAttribute(a,r),t.distanceSqToSegment(Ll,Nl,lu,Pp)>n)return;lu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(lu);if(!(c<e.near||c>e.far))return{distance:c,point:Pp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Lp=new C,Np=new C,ta=class extends Qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lp.fromBufferAttribute(t,s),Np.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lp.distanceTo(Np);e.setAttribute("lineDistance",new Vt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},na=class extends Qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},to=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new Le,du=new js,gl=new on,xl=new C,er=class extends Lt{constructor(e=new xt,t=new to){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;Dp.copy(s).invert(),du.copy(e.ray).applyMatrix4(Dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=f,m=d;x<m;x++){let g=c.getX(x);xl.fromBufferAttribute(u,g),Up(xl,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,m=d;x<m;x++)xl.fromBufferAttribute(u,x),Up(xl,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Up(i,e,t,n,s,r,o){let a=du.distanceSqToPoint(i);if(a<t){let l=new C;du.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ia=class extends gt{constructor(e=[],t=ws,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Fi=class extends gt{constructor(e,t,n=Zn,s,r,o,a=Ft,l=Ft,c,h=Ni,u=1){if(h!==Ni&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dl=class extends Fi{constructor(e,t=Zn,n=ws,s,r,o=Ft,a=Ft,l,c=Ni){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mi=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function x(m,g,p,T,R,M,S,b,A,v,w){let I=M/A,U=S/v,O=M/2,H=S/2,L=b/2,z=A+1,K=v+1,Z=0,ne=0,X=new C;for(let Q=0;Q<K;Q++){let te=Q*U-H;for(let Ie=0;Ie<z;Ie++){let Re=Ie*I-O;X[m]=Re*T,X[g]=te*R,X[p]=L,c.push(X.x,X.y,X.z),X[m]=0,X[g]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(Ie/A),u.push(1-Q/v),Z+=1}}for(let Q=0;Q<v;Q++)for(let te=0;te<A;te++){let Ie=f+te+z*Q,Re=f+te+z*(Q+1),Mt=f+(te+1)+z*(Q+1),et=f+(te+1)+z*Q;l.push(Ie,Re,et),l.push(Re,Mt,et),ne+=6}a.addGroup(d,ne,w),d+=ne,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ra=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},oa=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,m=[],g=n/2,p=0;T(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function T(){let M=new C,S=new C,b=0,A=(t-e)/n;for(let v=0;v<=r;v++){let w=[],I=v/r,U=I*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,L=H*l+a,z=Math.sin(L),K=Math.cos(L);S.x=U*z,S.y=-I*n+g,S.z=U*K,u.push(S.x,S.y,S.z),M.set(z,A,K).normalize(),f.push(M.x,M.y,M.z),d.push(H,1-I),w.push(x++)}m.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let I=m[w][v],U=m[w+1][v],O=m[w+1][v+1],H=m[w][v+1];(e>0||w!==0)&&(h.push(I,U,H),b+=3),(t>0||w!==r-1)&&(h.push(U,O,H),b+=3)}c.addGroup(p,b,0),p+=b}function R(M){let S=x,b=new Ne,A=new C,v=0,w=M===!0?e:t,I=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*I,0),f.push(0,I,0),d.push(.5,.5),x++;let U=x;for(let O=0;O<=s;O++){let L=O/s*l+a,z=Math.cos(L),K=Math.sin(L);A.x=w*K,A.y=g*I,A.z=w*z,u.push(A.x,A.y,A.z),f.push(0,I,0),b.x=z*.5+.5,b.y=K*.5*I+.5,d.push(b.x,b.y),x++}for(let O=0;O<s;O++){let H=S+O,L=U+O;M===!0?h.push(L,L+1,H):h.push(L+1,L,H),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ii=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],x=[],m=[],g=[];for(let p=0;p<h;p++){let T=p*f-o;for(let R=0;R<c;R++){let M=R*u-r;x.push(M,-T,0),m.push(0,0,1),g.push(R/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){let R=T+c*p,M=T+c*(p+1),S=T+1+c*(p+1),b=T+1+c*p;d.push(R,M,b),d.push(M,S,b)}this.setIndex(d),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fp(s))s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function Fp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Px(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Im={clone:lr,merge:xn},Lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lx,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ul=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tr=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dn=class extends tr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},aa=class extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ya,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ln=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ya,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},no=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Dx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Op(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ux(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends Oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ys:r=e,a=2*t-n;break;case qo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ys:o=e,l=2*n-t;break;case qo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),m=x*x,g=m*x,p=-f*g+2*f*m-f*x,T=(1+f)*g+(-1.5-2*f)*m+(-.5+f)*x+1,R=(-1-d)*g+(1.5+d)*m+.5*x,M=d*g-d*m;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+T*o[c+S]+R*o[l+S]+M*o[u+S];return r}},la=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Bl=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kl=class extends Oi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let x=(n-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}let f=a*2,d=e-1;for(let x=0;x!==a;++x){let m=o[c+x],g=o[l+x],p=d*f+x*2,T=u[p],R=u[p+1],M=e*f+x*2,S=h[M],b=h[M+1],A=Ox(n,t,T,S,s);r[x]=Pm(A,m,R,b,g)}return r}};function Pm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Fx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ox(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Pm(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Fx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Sl(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break;case fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return yl;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Sl(this.settings)&&(Bp(this.settings.inTangents,e),Bp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){De("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&qg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let m=t[u+x];if(m!==t[f+x]||m!==t[d+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Js;var ns=class extends Un{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Zs;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="color";var is=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};is.prototype.ValueTypeName="number";var zl=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)wt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ss=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Un{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Zs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};bs.prototype.ValueTypeName="vector";var nr=class{constructor(e="",t=-1,n=[],s=Uc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Dx(l);l=Op(l,1,h),c=Op(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new is(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Bx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return ca;case"quaternion":return ss;case"bool":case"boolean":return ns;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bx(i.type);if(i.times===void 0){let n=[],s=[];Ux(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Sl(i.settings)&&(t.settings={inTangents:Ms(i.settings.inTangents,Float32Array),outTangents:Ms(i.settings.outTangents,Float32Array)}),t}var Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(kp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!kp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}var Hl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lm=new Hl,Bi=class{constructor(e){this.manager=e!==void 0?e:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi={},pu=class extends Error{constructor(e,t){super(e),this.response=t}},io=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:s});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Qi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,m=0,g=new ReadableStream({start(p){T();function T(){u.read().then(({done:R,value:M})=>{if(R)p.close();else{m+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:x,loaded:m,total:d});for(let b=0,A=h.length;b<A;b++){let v=h[b];v.onProgress&&v.onProgress(S)}p.enqueue(M),T()}},R=>{p.error(R)})}}});return new Response(g)}else throw new pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(x=>d.decode(x))}}}).then(c=>{Pi.add(`file:${e}`,c);let h=Qi[e];delete Qi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Qi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Or=new WeakMap,Vl=class extends Bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Or.get(o);u===void 0&&(u=[],Or.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Xr("img");function l(){h(),t&&t(this);let u=Or.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Or.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Pi.remove(`image:${e}`);let f=Or.get(this)||[];for(let d=0;d<f.length;d++){let x=f[d];x.onError&&x.onError(u)}Or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ha=class extends Bi{constructor(e){super(e)}load(e,t,n,s){let r=new gt,o=new Vl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ir=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ua=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cu=new Le,zp=new C,Hp=new C,so=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),Hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Wr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_l=new C,vl=new wt,Ii=new C,fa=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,vl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,vl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_l,vl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,vl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new C,Vp=new Ne,Gp=new Ne,Yt=class extends fa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,Vp,Gp),t.subVectors(Gp,Vp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mu=class extends so{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=$s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},da=class extends ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},gu=class extends so{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},pa=class extends ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fn=class extends fa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xu=class extends so{constructor(){super(new Fn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new xu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hu=new WeakMap,ma=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{hu.has(o)===!0?(s&&s(hu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hu.set(l,c),Pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Br=-90,kr=1,Gl=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Br,kr,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Br,kr,e,t);r.layers=this.layers,this.add(r);let o=new Yt(Br,kr,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Br,kr,e,t);a.layers=this.layers,this.add(a);let l=new Yt(Br,kr,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Br,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Wl=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){wt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;wt.multiplyQuaternionsFlat(e,o,e,t,e,n),wt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Wu="\\[\\]\\.:\\/",zx=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",Hx="[^"+Wu.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",Xu),Gx=/(WCOD+)?/.source.replace("WCOD",Hx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),qx=new RegExp("^"+Vx+Gx+Wx+Xx+"$"),Yx=["material","materials","bones","map"],_u=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(e){let t=qx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=_u;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ql=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:qs,endingEnd:qs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=dm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case mm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Uc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===pm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===fm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ys,s.endingEnd=Ys):(e?s.endingStart=this.zeroSlopeAtStart?Ys:qs:s.endingStart=qo,t?s.endingEnd=this.zeroSlopeAtEnd?Ys:qs:s.endingEnd=qo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Kx=new Float32Array(1),ga=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=s[u],d=f.name,x=h[d];if(x!==void 0)++x.referenceCount,o[u]=x;else{if(x=o[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,d));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;x=new Xl(mt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,d),o[u]=x}a[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new la(new Float32Array(2),new Float32Array(2),1,Kx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?nr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Uc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new ql(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?nr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var $u=class $u{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};$u.prototype.isMatrix2=!0;var vu=$u;function qu(i,e,t,n){let s=Zx(n);switch(t){case Fu:return i*e;case tc:return i*e/s.components*s.byteLength;case nc:return i*e/s.components*s.byteLength;case As:return i*e*2/s.components*s.byteLength;case ic:return i*e*2/s.components*s.byteLength;case Ou:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case sc:return i*e*4/s.components*s.byteLength;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:case lc:return Math.max(i,16)*Math.max(e,8)/4;case rc:case ac:return Math.max(i,8)*Math.max(e,8)/2;case cc:case hc:case fc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case Ea:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Ic:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zx(i){switch(i){case On:case Lu:return{byteLength:1,components:1};case lo:case Nu:case bi:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case Zn:case jl:case Jn:return{byteLength:4,components:1};case Du:case Uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function e0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $x(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],m=u[d];m.start<=x.start+x.count+1?x.count=Math.max(x.count,m.start+m.count-x.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let m=u[d];i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qx=`#ifdef USE_ALPHAHASH
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
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s_=`#ifdef USE_AOMAP
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
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
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
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u_=`#ifdef USE_IRIDESCENCE
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
#endif`,f_=`#ifdef USE_BUMPMAP
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,M_=`#define PI 3.141592653589793
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
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b_=`vec3 transformedNormal = objectNormal;
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
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k_=`#ifdef USE_GRADIENTMAP
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
}`,z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
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
#endif`,J_=`uniform sampler2D dfgLUT;
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
}`,$_=`
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lv=`#if defined( USE_POINTS_UV )
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
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`uniform float scale;
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
}`,uy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,My=`#define PHONG
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
}`,Sy=`#define STANDARD
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
}`,by=`#define STANDARD
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
}`,Ty=`#define TOON
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
}`,wy=`#define TOON
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
}`,Ey=`uniform float size;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:jx,alphahash_pars_fragment:Qx,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:s_,aomap_pars_fragment:r_,batching_pars_vertex:o_,batching_vertex:a_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:h_,iridescence_fragment:u_,bumpmap_pars_fragment:f_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:x_,color_pars_fragment:__,color_pars_vertex:v_,color_vertex:y_,common:M_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:b_,displacementmap_pars_vertex:T_,displacementmap_vertex:w_,emissivemap_fragment:E_,emissivemap_pars_fragment:A_,colorspace_fragment:R_,colorspace_pars_fragment:C_,envmap_fragment:I_,envmap_common_pars_fragment:P_,envmap_pars_fragment:L_,envmap_pars_vertex:N_,envmap_physical_pars_fragment:W_,envmap_vertex:D_,fog_vertex:U_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:B_,gradientmap_pars_fragment:k_,lightmap_pars_fragment:z_,lights_lambert_fragment:H_,lights_lambert_pars_fragment:V_,lights_pars_begin:G_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:K_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:$_,lights_fragment_maps:j_,lights_fragment_end:Q_,lightprobes_pars_fragment:ev,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:sv,map_fragment:rv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:hv,morphinstance_vertex:uv,morphcolor_vertex:fv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:xv,normal_pars_fragment:_v,normal_pars_vertex:vv,normal_vertex:yv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:wv,opaque_fragment:Ev,packing:Av,premultiplied_alpha_fragment:Rv,project_vertex:Cv,dithering_fragment:Iv,dithering_pars_fragment:Pv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Nv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Fv,shadowmask_pars_fragment:Ov,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:zv,skinnormal_vertex:Hv,specularmap_fragment:Vv,specularmap_pars_fragment:Gv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:qv,transmission_pars_fragment:Yv,uv_pars_fragment:Kv,uv_pars_vertex:Zv,uv_vertex:Jv,worldpos_vertex:$v,background_vert:jv,background_frag:Qv,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:sy,depth_frag:ry,distance_vert:oy,distance_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:hy,linedashed_frag:uy,meshbasic_vert:fy,meshbasic_frag:dy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:xy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:yy,meshphong_frag:My,meshphysical_vert:Sy,meshphysical_frag:by,meshtoon_vert:Ty,meshtoon_frag:wy,points_vert:Ey,points_frag:Ay,shadow_vert:Ry,shadow_frag:Cy,sprite_vert:Iy,sprite_frag:Py},fe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Gi={basic:{uniforms:xn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:xn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:xn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:xn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:xn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:xn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:xn([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:xn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:xn([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:xn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:xn([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:xn([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:xn([fe.lights,fe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Gi.physical={uniforms:xn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Bc={r:0,b:0,g:0},Ly=new Le,t0=new Fe;t0.set(-1,0,0,0,1,0,0,0,1);function Ny(i,e,t,n,s,r){let o=new ve(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let M=T.backgroundBlurriness>0;R=e.get(R,M)}return R}function x(T){let R=!1,M=d(T);M===null?g(o,a):M&&M.isColor&&(g(M,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,R){let M=d(R);M&&(M.isCubeTexture||M.mapping===Ma)?(c===void 0&&(c=new ze(new Mi(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:lr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(t0),c.material.toneMapped=We.getTransfer(M.colorSpace)!==ht,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ze(new ii(2,2),new At({name:"BackgroundMaterial",uniforms:lr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=We.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,R){T.getRGB(Bc,Gu(i)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,R=1){o.set(T),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,g(o,a)},render:x,addToRenderList:m,dispose:p}}function Dy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(U,O,H,L,z){let K=!1,Z=u(U,L,H,O);r!==Z&&(r=Z,c(r.object)),K=d(U,L,H,z),K&&x(U,L,H,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(U,O,H,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,O,H,L){let z=L.wireframe===!0,K=n[O.id];K===void 0&&(K={},n[O.id]=K);let Z=U.isInstancedMesh===!0?U.id:0,ne=K[Z];ne===void 0&&(ne={},K[Z]=ne);let X=ne[H.id];X===void 0&&(X={},ne[H.id]=X);let Q=X[z];return Q===void 0&&(Q=f(l()),X[z]=Q),Q}function f(U){let O=[],H=[],L=[];for(let z=0;z<t;z++)O[z]=0,H[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:L,object:U,attributes:{},index:null}}function d(U,O,H,L){let z=r.attributes,K=O.attributes,Z=0,ne=H.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=z[X],Ie=K[X];if(Ie===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Ie=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Ie=U.instanceColor)),te===void 0||te.attribute!==Ie||Ie&&te.data!==Ie.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function x(U,O,H,L){let z={},K=O.attributes,Z=0,ne=H.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=K[X];te===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let Ie={};Ie.attribute=te,te&&te.data&&(Ie.data=te.data),z[X]=Ie,Z++}r.attributes=z,r.attributesNum=Z,r.index=L}function m(){let U=r.newAttributes;for(let O=0,H=U.length;O<H;O++)U[O]=0}function g(U){p(U,0)}function p(U,O){let H=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;H[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),z[U]!==O&&(i.vertexAttribDivisor(U,O),z[U]=O)}function T(){let U=r.newAttributes,O=r.enabledAttributes;for(let H=0,L=O.length;H<L;H++)O[H]!==U[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function R(U,O,H,L,z,K,Z){Z===!0?i.vertexAttribIPointer(U,O,H,z,K):i.vertexAttribPointer(U,O,H,L,z,K)}function M(U,O,H,L){m();let z=L.attributes,K=H.getAttributes(),Z=O.defaultAttributeValues;for(let ne in K){let X=K[ne];if(X.location>=0){let Q=z[ne];if(Q===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let te=Q.normalized,Ie=Q.itemSize,Re=e.get(Q);if(Re===void 0)continue;let Mt=Re.buffer,et=Re.type,rt=Re.bytesPerElement,q=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===jl;if(Q.isInterleavedBufferAttribute){let j=Q.data,ye=j.stride,Oe=Q.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,j.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<X.locationSize;xe++)g(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let xe=0;xe<X.locationSize;xe++)R(X.location+xe,Ie/X.locationSize,et,te,ye*rt,(Oe+Ie/X.locationSize*xe)*rt,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let j=0;j<X.locationSize;j++)R(X.location+j,Ie/X.locationSize,et,te,Ie*rt,Ie/X.locationSize*j*rt,q)}}else if(Z!==void 0){let te=Z[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}T()}function S(){w();for(let U in n){let O=n[U];for(let H in O){let L=O[H];for(let z in L){let K=L[z];for(let Z in K)h(K[Z].object),delete K[Z];delete L[z]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let H in O){let L=O[H];for(let z in L){let K=L[z];for(let Z in K)h(K[Z].object),delete K[Z];delete L[z]}}delete n[U.id]}function A(U){for(let O in n){let H=n[O];for(let L in H){let z=H[L];if(z[U.id]===void 0)continue;let K=z[U.id];for(let Z in K)h(K[Z].object),delete K[Z];delete z[U.id]}}}function v(U){for(let O in n){let H=n[O],L=U.isInstancedMesh===!0?U.id:0,z=H[L];if(z!==void 0){for(let K in z){let Z=z[K];for(let ne in Z)h(Z[ne].object),delete Z[ne];delete z[K]}delete H[L],Object.keys(H).length===0&&delete n[O]}}}function w(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:T}}function Uy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==On&&A!==Jn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:M,maxSamples:S,samples:b}}function Oy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new gi,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let T=r?0:n,R=T*4,M=p.clippingState||null;l.value=M,M=h(x,f,R,d);for(let S=0;S!==R;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let m=u!==null?u.length:0,g=null;if(m!==0){if(g=l.value,x!==!0||g===null){let p=d+m*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,M=d;R!==m;++R,M+=4)o.copy(u[R]).applyMatrix4(T,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}var po=4,By=6,ky=20,zy=256,Ca=new Fn,Nm=new ve,ju=null,Qu=0,ef=0,tf=!1,Hy=new C,cr=new C,zc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Hy}=r;ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Qu,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:bi,format:$n,colorSpace:wn,depthBuffer:!1},s=Dm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vy(r)),this._blurMaterial=Wy(r,e,t),this._ggxMaterial=Gy(r,e,t)}return s}_compileMaterial(e){let t=new ze(new xt,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,s,r){let l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Nm),u.toneMapping=Si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Mi,new Kt({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let m=this._backgroundBox,g=m.material,p=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(Nm),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;fo(s,M*S,R>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ws||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ca)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:x}=this,m=this._sizeLods[n],g=3*m*(n>x-po?n-x+po:0),p=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,fo(r,g,p,3*m,2*m),s.setRenderTarget(r),s.render(a,Ca),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,fo(e,g,p,3*m,2*m),s.setRenderTarget(e),s.render(a,Ca)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-po?s-this._lodMax+po:0),f=4*(this._cubeSize-h);fo(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(l,Ca)}};function Vy(i){let e=[],t=[],n=i,s=i-po+1+By;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,x=new Float32Array(d*f*u),m=new Float32Array(d*f*u);for(let p=0;p<u;p++){let T=p%3*2/3-1,R=p>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(M,d*f*p);for(let S=0;S<f;S++){let b=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?cr.set(1,A,b):p===1?cr.set(-b,1,-A):p===2?cr.set(-b,A,1):p===3?cr.set(-1,A,-b):p===4?cr.set(-b,-1,A):cr.set(b,A,-1),cr.toArray(m,(p*f+S)*d)}}let g=new xt;g.setAttribute("position",new tt(x,d)),g.setAttribute("outputDirection",new tt(m,d)),t.push(new ze(g,null)),n>po&&n--}return{lodMeshes:t,sizeLods:e}}function Dm(i,e,t){let n=new gn(i,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gy(i,e,t){return new At({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Wy(i,e,t){return new At({name:"SphericalGaussianBlur",defines:{SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Um(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Fm(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hc=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:zi});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Et),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Xy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Zl||d===Jl)if(e.has(f)){let x=e.get(f).texture;return a(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let m=new Hc(x.height);return m.fromEquirectangularTexture(i,f),e.set(f,m),f.addEventListener("dispose",c),a(m.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,x=d===Zl||d===Jl,m=d===ws||d===or;if(x||m){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new zc(i)),g=x?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let T=f.image;return x&&T&&T.height>0||m&&T&&l(T)?(n===null&&(n=new zc(i)),g=x?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Zl?f.mapping=ws:d===Jl&&(f.mapping=or),f}function l(f){let d=0,x=6;for(let m=0;m<x;m++)f[m]!==void 0&&d++;return d===x}function c(f){let d=f.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function qy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ks("WebGLRenderer: "+n+" extension not supported."),s}}}function Yy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,x=u.attributes.position,m=0;if(x===void 0)return;if(d!==null){let T=d.array;m=d.version;for(let R=0,M=T.length;R<M;R+=3){let S=T[R+0],b=T[R+1],A=T[R+2];f.push(S,b,b,A,A,S)}}else{let T=x.array;m=x.version;for(let R=0,M=T.length/3-1;R<M;R+=3){let S=R+0,b=R+1,A=R+2;f.push(S,b,b,A,A,S)}}let g=new(x.count>=65535?jo:$o)(f,1);g.version=m;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ky(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let m=0;for(let g=0;g<d;g++)m+=f[g];t.update(m,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Zy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:De("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jy(i,e,t){let n=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],R=0;d===!0&&(R=1),x===!0&&(R=2),m===!0&&(R=3);let M=a.attributes.position.count*R,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*S*4*u),A=new Zo(b,M,S,u);A.type=Jn,A.needsUpdate=!0;let v=R*4;for(let I=0;I<u;I++){let U=g[I],O=p[I],H=T[I],L=M*S*4*I;for(let z=0;z<U.count;z++){let K=z*v;d===!0&&(s.fromBufferAttribute(U,z),b[L+K+0]=s.x,b[L+K+1]=s.y,b[L+K+2]=s.z,b[L+K+3]=0),x===!0&&(s.fromBufferAttribute(O,z),b[L+K+4]=s.x,b[L+K+5]=s.y,b[L+K+6]=s.z,b[L+K+7]=0),m===!0&&(s.fromBufferAttribute(H,z),b[L+K+8]=s.x,b[L+K+9]=s.y,b[L+K+10]=s.z,b[L+K+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Ne(M,S)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $y(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var jy={[Tu]:"LINEAR_TONE_MAPPING",[wu]:"REINHARD_TONE_MAPPING",[Eu]:"CINEON_TONE_MAPPING",[Au]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function Qy(i,e,t,n,s,r){let o=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new xt;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new Ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ze(c,h),f=new Fn(-1,1,1,-1,0,1),d=null,x=null,m=!1,g,p=null,T=[],R=!1;this.setSize=function(M,S){o.setSize(M,S),a!==null&&a.setSize(M,S),l!==null&&l.setSize(M,S);for(let b=0;b<T.length;b++){let A=T[b];A.setSize&&A.setSize(M,S)}},this.setEffects=function(M){T=M,R=T.length>0&&T[0].isRenderPass===!0;let S=o.width,b=o.height;T.length>0&&a===null&&(a=new gn(S,b,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new gn(S,b,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){let v=T[A];v.setSize&&v.setSize(S,b)}},this.begin=function(M,S){if(m||M.toneMapping===Si&&T.length===0)return!1;if(p=S,S!==null){let b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return R===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Si,!0},this.hasRenderPass=function(){return R},this.end=function(M,S){M.toneMapping=g,m=!0;let b=o,A=a;for(let v=0;v<T.length;v++){let w=T[v];w.enabled!==!1&&(w.render(M,A,b,S),w.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(d!==M.outputColorSpace||x!==M.toneMapping){d=M.outputColorSpace,x=M.toneMapping,h.defines={},We.getTransfer(d)===ht&&(h.defines.SRGB_TRANSFER="");let v=jy[x];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(u,f),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var n0=new gt,rf=new Fi(1,1),i0=new Zo,s0=new Pl,r0=new ia,Om=[],Bm=[],km=new Float32Array(16),zm=new Float32Array(9),Hm=new Float32Array(4);function go(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Om[s];if(r===void 0&&(r=new Float32Array(s),Om[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wc(i,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function nM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function iM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function sM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Hm.set(n),i.uniformMatrix2fv(this.addr,!1,Hm),Qt(t,n)}}function rM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;zm.set(n),i.uniformMatrix3fv(this.addr,!1,zm),Qt(t,n)}}function oM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;km.set(n),i.uniformMatrix4fv(this.addr,!1,km),Qt(t,n)}}function aM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function uM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function dM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function pM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function mM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?Oc:Fc,r=rf):r=n0,t.setTexture2D(e||r,s)}function gM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||s0,s)}function xM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||r0,s)}function _M(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||i0,s)}function vM(i){switch(i){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return sM;case 35675:return rM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return hM;case 5125:return uM;case 36294:return fM;case 36295:return dM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return _M}}function yM(i,e){i.uniform1fv(this.addr,e)}function MM(i,e){let t=go(e,this.size,2);i.uniform2fv(this.addr,t)}function SM(i,e){let t=go(e,this.size,3);i.uniform3fv(this.addr,t)}function bM(i,e){let t=go(e,this.size,4);i.uniform4fv(this.addr,t)}function TM(i,e){let t=go(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wM(i,e){let t=go(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function EM(i,e){let t=go(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AM(i,e){i.uniform1iv(this.addr,e)}function RM(i,e){i.uniform2iv(this.addr,e)}function CM(i,e){i.uniform3iv(this.addr,e)}function IM(i,e){i.uniform4iv(this.addr,e)}function PM(i,e){i.uniform1uiv(this.addr,e)}function LM(i,e){i.uniform2uiv(this.addr,e)}function NM(i,e){i.uniform3uiv(this.addr,e)}function DM(i,e){i.uniform4uiv(this.addr,e)}function UM(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=rf:o=n0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function FM(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||s0,r[o])}function OM(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r0,r[o])}function BM(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||i0,r[o])}function kM(i){switch(i){case 5126:return yM;case 35664:return MM;case 35665:return SM;case 35666:return bM;case 35674:return TM;case 35675:return wM;case 35676:return EM;case 5124:case 35670:return AM;case 35667:case 35671:return RM;case 35668:case 35672:return CM;case 35669:case 35673:return IM;case 5125:return PM;case 36294:return LM;case 36295:return NM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return BM}}var of=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}},af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}},lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nf=/(\w+)(\])?(\[|\.)?/g;function Vm(i,e){i.seq.push(e),i.map[e.id]=e}function zM(i,e,t){let n=i.name,s=n.length;for(nf.lastIndex=0;;){let r=nf.exec(n),o=nf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vm(t,c===void 0?new of(a,i,e):new af(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new lf(a),Vm(t,u)),t=u}}}var mo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);zM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Gm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var HM=37297,VM=0;function GM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Wm=new Fe;function WM(i){We._getMatrix(Wm,We.workingColorSpace,i);let e=`mat3( ${Wm.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Yo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+GM(i.getShaderSource(e),a)}else return r}function XM(i,e){let t=WM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var qM={[Tu]:"Linear",[wu]:"Reinhard",[Eu]:"Cineon",[Au]:"ACESFilmic",[Cu]:"AgX",[Iu]:"Neutral",[Ru]:"Custom"};function YM(i,e){let t=qM[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new C;function KM(){We.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function JM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $M(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Pa(i){return i!==""}function qm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(i){return i.replace(jM,eS)}var QM=new Map;function eS(i,e){let t=Ge[e];if(t===void 0){let n=QM.get(e);if(n!==void 0)t=Ge[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}var tS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(i){return i.replace(tS,nS)}function nS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var iS={[xa]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function sS(i){return iS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var rS={[ws]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function oS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var aS={[or]:"ENVMAP_MODE_REFRACTION"};function lS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":aS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cS={[ya]:"ENVMAP_BLENDING_MULTIPLY",[cm]:"ENVMAP_BLENDING_MIX",[hm]:"ENVMAP_BLENDING_ADD"};function hS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cS[i.combine]||"ENVMAP_BLENDING_NONE"}function uS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=sS(t),c=oS(t),h=lS(t),u=hS(t),f=uS(t),d=ZM(t),x=JM(r),m=s.createProgram(),g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(g=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Si?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),KM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),o=cf(o),o=qm(o,t),o=Ym(o,t),a=cf(a),a=qm(a,t),a=Ym(a,t),o=Km(o),a=Km(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=T+g+o,M=T+p+a,S=Gm(s,s.VERTEX_SHADER,R),b=Gm(s,s.FRAGMENT_SHADER,M);s.attachShader(m,S),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(m)||"",H=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(b)||"",z=O.trim(),K=H.trim(),Z=L.trim(),ne=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,b);else{let Q=Xm(s,S,"vertex"),te=Xm(s,b,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+Q+`
`+te)}else z!==""?we("WebGLProgram: Program Info Log:",z):(K===""||Z==="")&&(X=!1);X&&(U.diagnostics={runnable:ne,programLog:z,vertexShader:{log:K,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(S),s.deleteShader(b),v=new mo(s,m),w=$M(s,m)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,HM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=b,this}var dS=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uf(e),t.set(e,n)),n}},uf=class{constructor(e){this.id=dS++,this.code=e,this.usedTimes=0}};function pS(i){return i===As||i===Ea||i===Aa}function mS(i,e,t,n,s,r){let o=new Jo,a=new hf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,w,I,U,O,H){let L=U.fog,z=O.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||K,Z),X=ne&&ne.mapping===Ma?ne.image.height:null,Q=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&we("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ie=te!==void 0?te.length:0,Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let Mt,et,rt,q;if(Q){let bt=Gi[Q];Mt=bt.vertexShader,et=bt.fragmentShader}else{Mt=v.vertexShader,et=v.fragmentShader;let bt=a.getVertexShaderStage(v),lt=a.getFragmentShaderStage(v);a.update(v,bt,lt),rt=bt.id,q=lt.id}let j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Oe=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,Xe=!!v.map,$t=!!v.matcap,Ke=!!ne,st=!!v.aoMap,St=!!v.lightMap,$e=!!v.bumpMap&&v.wireframe===!1,Pt=!!v.normalMap,nn=!!v.displacementMap,Ln=!!v.emissiveMap,Ut=!!v.metalnessMap,Wt=!!v.roughnessMap,D=v.anisotropy>0,fn=v.clearcoat>0,ut=v.dispersion>0,E=v.retroreflectivity>0,_=v.iridescence>0,F=v.sheen>0,V=v.transmission>0,W=D&&!!v.anisotropyMap,se=fn&&!!v.clearcoatMap,oe=fn&&!!v.clearcoatNormalMap,Y=fn&&!!v.clearcoatRoughnessMap,$=_&&!!v.iridescenceMap,ae=_&&!!v.iridescenceThicknessMap,Ee=F&&!!v.sheenColorMap,ue=F&&!!v.sheenRoughnessMap,le=!!v.specularMap,Ae=!!v.specularColorMap,Pe=!!v.specularIntensityMap,ke=V&&!!v.transmissionMap,N=V&&!!v.thicknessMap,ce=!!v.gradientMap,J=!!v.alphaMap,he=v.alphaTest>0,me=!!v.alphaHash,ee=!!v.extensions,Ce=Si;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let be={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:Mt,fragmentShader:et,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:$t,envMap:Ke,envMapMode:Ke&&ne.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:St,bumpMap:$e,normalMap:Pt,displacementMap:nn,emissiveMap:Ln,normalMapObjectSpace:Pt&&v.normalMapType===xm,normalMapTangentSpace:Pt&&v.normalMapType===uo,packedNormalMap:Pt&&v.normalMapType===uo&&pS(v.normalMap.format),metalnessMap:Ut,roughnessMap:Wt,anisotropy:D,anisotropyMap:W,clearcoat:fn,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Y,dispersion:ut,retroreflection:E,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:ae,sheen:F,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Ae,specularIntensityMap:Pe,transmission:V,transmissionMap:ke,thicknessMap:N,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:me,combine:v.combine,mapUv:Xe&&x(v.map.channel),aoMapUv:st&&x(v.aoMap.channel),lightMapUv:St&&x(v.lightMap.channel),bumpMapUv:$e&&x(v.bumpMap.channel),normalMapUv:Pt&&x(v.normalMap.channel),displacementMapUv:nn&&x(v.displacementMap.channel),emissiveMapUv:Ln&&x(v.emissiveMap.channel),metalnessMapUv:Ut&&x(v.metalnessMap.channel),roughnessMapUv:Wt&&x(v.roughnessMap.channel),anisotropyMapUv:W&&x(v.anisotropyMap.channel),clearcoatMapUv:se&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&x(v.sheenRoughnessMap.channel),specularMapUv:le&&x(v.specularMap.channel),specularColorMapUv:Ae&&x(v.specularColorMap.channel),specularIntensityMapUv:Pe&&x(v.specularIntensityMap.channel),transmissionMapUv:ke&&x(v.transmissionMap.channel),thicknessMapUv:N&&x(v.thicknessMap.channel),alphaMapUv:J&&x(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pt||D),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Xe||J),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&Pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Re,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:Ln&&v.emissiveMap.isVideoTexture===!0&&We.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===An,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ee&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(w,v),T(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){let w=d[v.type],I;if(w){let U=Gi[w];I=Im.clone(U.uniforms)}else I=v.uniforms;return I}function M(v,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new fS(i,w,v,s),c.push(I),h.set(w,I)),I}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function A(){a.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function gS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $m(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,x,m,g,p){let T=i[e];return T===void 0?(T={id:f.id,object:f,geometry:d,material:x,materialVariant:o(f),groupOrder:m,renderOrder:f.renderOrder,z:g,group:p},i[e]=T):(T.id=f.id,T.object=f,T.geometry=d,T.material=x,T.materialVariant=o(f),T.groupOrder=m,T.renderOrder=f.renderOrder,T.z=g,T.group=p),e++,T}function l(f,d,x,m,g,p,T){T.reversedDepth===!0&&(g=-g);let R=a(f,d,x,m,g,p);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):t.push(R)}function c(f,d,x,m,g,p){let T=a(f,d,x,m,g,p);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function h(f,d){t.length>1&&t.sort(f||xS),n.length>1&&n.sort(d||Jm),s.length>1&&s.sort(d||Jm)}function u(){for(let f=e,d=i.length;f<d;f++){let x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function _S(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new $m,i.set(n,[o])):s>=r.length?(o=new $m,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function vS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function yS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var MS=0;function SS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bS(i){let e=new vS,t=yS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Le,o=new Le;function a(c){let h=0,u=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,x=0,m=0,g=0,p=0,T=0,R=0,M=0,S=0,b=0,A=0,v=0,w=0,I=0;c.sort(SS);for(let O=0,H=c.length;O<H;O++){let L=c[O],z=L.color,K=L.intensity,Z=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===As?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*K,u+=z.g*K,f+=z.b*K;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],K);I++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=te,n.sunShadowMap[x]=ne;let Ie=Q.getViewportCount();for(let Re=0;Re<Ie;Re++)n.sunShadowMatrix[m+Re]=Q.getMatrix(Re),n.sunShadowCascade[m+Re]=Q._cascadeData[Re];m+=Ie,x++}n.sun[d]=X,d++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=X,g++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(K),X.distance=Z,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[T]=X;let Q=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,Q.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[T]=Q.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[T]=te,n.spotShadowMap[T]=ne,A++}T++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(z).multiplyScalar(K),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=X,R++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=X,p++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(K),X.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[M]=X,M++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==T||U.rectAreaLength!==R||U.hemiLength!==M||U.numSunShadows!==x||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==A||U.numSpotMaps!==v||U.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=g,n.spot.length=T,n.rectArea.length=R,n.point.length=p,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,U.sunLength=d,U.directionalLength=g,U.pointLength=p,U.spotLength=T,U.rectAreaLength=R,U.hemiLength=M,U.numSunShadows=x,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=A,U.numSpotMaps=v,U.numLightProbes=I,n.version=MS++)}function l(c,h){let u=0,f=0,d=0,x=0,m=0,g=0,p=h.matrixWorldInverse;for(let T=0,R=c.length;T<R;T++){let M=c[T];if(M.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(M.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),x++}else if(M.isRectAreaLight){let S=n.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function jm(i){let e=new bS(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function TS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new jm(i),e.set(s,[a])):r>=o.length?(a=new jm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var wS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ES=`uniform sampler2D shadow_pass;
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
}`,AS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],RS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Qm=new Le,Ia=new C,sf=new C;function CS(i,e,t){let n=new Qr,s=new Ne,r=new Ne,o=new at,a=new no,l=new Fl,c={},h=t.maxTextureSize,u={[ki]:An,[An]:ki,[cn]:cn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:wS,fragmentShader:ES}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new xt;x.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ze(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa;let p=this.type;this.render=function(b,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===qp&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xa);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(zi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=b.length;L<z;L++){let K=b[L],Z=K.shadow;if(Z===void 0){we("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ne=Z.getFrameExtents();s.multiply(ne),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,Z.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=X,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ro){if(K.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new gn(s.x,s.y,{format:As,type:bi,minFilter:Et,magFilter:Et,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Fi(s.x,s.y,Jn),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=Ni,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ft,Z.map.depthTexture.magFilter=Ft}else K.isPointLight?(Z.map=new Hc(s.x),Z.map.depthTexture=new Dl(s.x,Zn)):(Z.map=new gn(s.x,s.y),Z.map.depthTexture=new Fi(s.x,s.y,Zn)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=Ni,this.type===xa?(Z.map.depthTexture.compareFunction=X?Oc:Fc,Z.map.depthTexture.minFilter=Et,Z.map.depthTexture.magFilter=Et):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ft,Z.map.depthTexture.magFilter=Ft);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,v);for(let te=0;te<Q;te++){let Ie=Z.getCamera(te);if(K.isPointLight){let Re=Z.camera,Mt=Z.matrix,et=K.distance||Re.far;et!==Re.far&&(Re.far=et,Re.updateProjectionMatrix()),Ia.setFromMatrixPosition(K.matrixWorld),Re.position.copy(Ia),sf.copy(Re.position),sf.add(AS[te]),Re.up.copy(RS[te]),Re.lookAt(sf),Re.updateMatrixWorld(),Mt.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Qm.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Qm,Re.coordinateSystem,Re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,te),i.clear();else{te===0&&(i.setRenderTarget(Z.map),i.clear());let Re=Z.getViewport(te);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),O.viewport(o)}n=Z.getFrustum(te),M(A,v,Ie,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ro&&T(Z,v),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,I,U)};function T(b,A){let v=e.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new gn(s.x,s.y,{format:As,type:bi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,v,d,m,null)}function R(b,A,v,w){let I=null,U=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)I=U;else if(I=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=I.uuid,H=A.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let z=L[H];z===void 0&&(z=I.clone(),L[H]=z,A.addEventListener("dispose",S)),I=z}if(I.visible=A.visible,I.wireframe=A.wireframe,w===ro?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:u[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=v}return I}function M(b,A,v,w,I){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===ro)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let H=e.update(b),L=b.material;if(Array.isArray(L)){let z=H.groups;for(let K=0,Z=z.length;K<Z;K++){let ne=z[K],X=L[ne.materialIndex];if(X&&X.visible){let Q=R(b,X,w,I);b.onBeforeShadow(i,b,A,v,H,Q,ne),i.renderBufferDirect(v,null,H,Q,b,ne),b.onAfterShadow(i,b,A,v,H,Q,ne)}}}else if(L.visible){let z=R(b,L,w,I);b.onBeforeShadow(i,b,A,v,H,z,null),i.renderBufferDirect(v,null,H,z,b,null),b.onAfterShadow(i,b,A,v,H,z,null)}}let O=b.children;for(let H=0,L=O.length;H<L;H++)M(O[H],A,v,w,I)}function S(b){b.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function IS(i,e){function t(){let N=!1,ce=new at,J=null,he=new at(0,0,0,0);return{setMask:function(me){J!==me&&!N&&(i.colorMask(me,me,me,me),J=me)},setLocked:function(me){N=me},setClear:function(me,ee,Ce,be,bt){bt===!0&&(me*=be,ee*=be,Ce*=be),ce.set(me,ee,Ce,be),he.equals(ce)===!1&&(i.clearColor(me,ee,Ce,be),he.copy(ce))},reset:function(){N=!1,J=null,he.set(-1,0,0,0)}}}function n(){let N=!1,ce=!1,J=null,he=null,me=null;return{setReversed:function(ee){if(ce!==ee){let Ce=e.get("EXT_clip_control");ee?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;let be=me;me=null,this.setClear(be)}},getReversed:function(){return ce},setTest:function(ee){ee?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ee){J!==ee&&!N&&(i.depthMask(ee),J=ee)},setFunc:function(ee){if(ce&&(ee=Rm[ee]),he!==ee){switch(ee){case bl:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case Tl:i.depthFunc(i.LESS);break;case Vr:i.depthFunc(i.LEQUAL);break;case wl:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){N=ee},setClear:function(ee){me!==ee&&(me=ee,ce&&(ee=1-ee),i.clearDepth(ee))},reset:function(){N=!1,J=null,he=null,me=null,ce=!1}}}function s(){let N=!1,ce=null,J=null,he=null,me=null,ee=null,Ce=null,be=null,bt=null;return{setTest:function(lt){N||(lt?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!N&&(i.stencilMask(lt),ce=lt)},setFunc:function(lt,fi,Ri){(J!==lt||he!==fi||me!==Ri)&&(i.stencilFunc(lt,fi,Ri),J=lt,he=fi,me=Ri)},setOp:function(lt,fi,Ri){(ee!==lt||Ce!==fi||be!==Ri)&&(i.stencilOp(lt,fi,Ri),ee=lt,Ce=fi,be=Ri)},setLocked:function(lt){N=lt},setClear:function(lt){bt!==lt&&(i.clearStencil(lt),bt=lt)},reset:function(){N=!1,ce=null,J=null,he=null,me=null,ee=null,Ce=null,be=null,bt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,x=[],m=null,g=!1,p=null,T=null,R=null,M=null,S=null,b=null,A=null,v=new ve(0,0,0),w=0,I=!1,U=null,O=null,H=null,L=null,z=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ne>=2);let Q=null,te={},Ie=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Mt=new at().fromArray(Ie),et=new at().fromArray(Re);function rt(N,ce,J,he){let me=new Uint8Array(4),ee=i.createTexture();i.bindTexture(N,ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<J;Ce++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ce+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ee}let q={};q[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Vr),$e(!1),Pt(yu),j(i.CULL_FACE),st(zi);function j(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ye(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Oe(N,ce){return f[N]!==ce?(i.bindFramebuffer(N,ce),f[N]=ce,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function xe(N,ce){let J=x,he=!1;if(N){J=d.get(ce),J===void 0&&(J=[],d.set(ce,J));let me=N.textures;if(J.length!==me.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ce=me.length;ee<Ce;ee++)J[ee]=i.COLOR_ATTACHMENT0+ee;J.length=me.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function Xe(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let $t={[rr]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[Kp]:i.FUNC_REVERSE_SUBTRACT};$t[Zp]=i.MIN,$t[Jp]=i.MAX;let Ke={[$p]:i.ZERO,[va]:i.ONE,[jp]:i.SRC_COLOR,[bu]:i.SRC_ALPHA,[sm]:i.SRC_ALPHA_SATURATE,[nm]:i.DST_COLOR,[em]:i.DST_ALPHA,[Qp]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[im]:i.ONE_MINUS_DST_COLOR,[tm]:i.ONE_MINUS_DST_ALPHA,[rm]:i.CONSTANT_COLOR,[om]:i.ONE_MINUS_CONSTANT_COLOR,[am]:i.CONSTANT_ALPHA,[lm]:i.ONE_MINUS_CONSTANT_ALPHA};function st(N,ce,J,he,me,ee,Ce,be,bt,lt){if(N===zi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),N!==Kl){if(N!==p||lt!==I){if((T!==rr||S!==rr)&&(i.blendEquation(i.FUNC_ADD),T=rr,S=rr),lt)switch(N){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:De("WebGLState: Invalid blending: ",N);break}else switch(N){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mu:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",N);break}R=null,M=null,b=null,A=null,v.set(0,0,0),w=0,p=N,I=lt}return}me=me||ce,ee=ee||J,Ce=Ce||he,(ce!==T||me!==S)&&(i.blendEquationSeparate($t[ce],$t[me]),T=ce,S=me),(J!==R||he!==M||ee!==b||Ce!==A)&&(i.blendFuncSeparate(Ke[J],Ke[he],Ke[ee],Ke[Ce]),R=J,M=he,b=ee,A=Ce),(be.equals(v)===!1||bt!==w)&&(i.blendColor(be.r,be.g,be.b,bt),v.copy(be),w=bt),p=N,I=!1}function St(N,ce){N.side===cn?ye(i.CULL_FACE):j(i.CULL_FACE);let J=N.side===An;ce&&(J=!J),$e(J),N.blending===Ts&&N.transparent===!1?st(zi):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let he=N.stencilWrite;a.setTest(he),he&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ln(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function Pt(N){N!==Wp?(j(i.CULL_FACE),N!==O&&(N===yu?i.cullFace(i.BACK):N===Xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),O=N}function nn(N){N!==H&&(Z&&i.lineWidth(N),H=N)}function Ln(N,ce,J){N?(j(i.POLYGON_OFFSET_FILL),(L!==ce||z!==J)&&(L=ce,z=J,o.getReversed()&&(ce=-ce),i.polygonOffset(ce,J))):ye(i.POLYGON_OFFSET_FILL)}function Ut(N){N?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=i.TEXTURE0+K-1),Q!==N&&(i.activeTexture(N),Q=N)}function D(N,ce,J){J===void 0&&(Q===null?J=i.TEXTURE0+K-1:J=Q);let he=te[J];he===void 0&&(he={type:void 0,texture:void 0},te[J]=he),(he.type!==N||he.texture!==ce)&&(Q!==J&&(i.activeTexture(J),Q=J),i.bindTexture(N,ce||q[N]),he.type=N,he.texture=ce)}function fn(){let N=te[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(N){De("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){De("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){De("WebGLState:",N)}}function F(){try{i.texSubImage3D(...arguments)}catch(N){De("WebGLState:",N)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(N){De("WebGLState:",N)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(N){De("WebGLState:",N)}}function se(){try{i.texStorage2D(...arguments)}catch(N){De("WebGLState:",N)}}function oe(){try{i.texStorage3D(...arguments)}catch(N){De("WebGLState:",N)}}function Y(){try{i.texImage2D(...arguments)}catch(N){De("WebGLState:",N)}}function $(){try{i.texImage3D(...arguments)}catch(N){De("WebGLState:",N)}}function ae(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Ee(N,ce){u[N]!==ce&&(i.pixelStorei(N,ce),u[N]=ce)}function ue(N){Mt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Mt.copy(N))}function le(N){et.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function Ae(N,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let he=J.get(N);he===void 0&&(he=i.getUniformBlockIndex(ce,N.name),J.set(N,he))}function Pe(N,ce){let he=c.get(ce).get(N);l.get(ce)!==he&&(i.uniformBlockBinding(ce,he,N.__bindingPointIndex),l.set(ce,he))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,te={},f={},d=new WeakMap,x=[],m=null,g=!1,p=null,T=null,R=null,M=null,S=null,b=null,A=null,v=new ve(0,0,0),w=0,I=!1,U=null,O=null,H=null,L=null,z=null,Mt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Oe,drawBuffers:xe,useProgram:Xe,setBlending:st,setMaterial:St,setFlipSided:$e,setCullFace:Pt,setLineWidth:nn,setPolygonOffset:Ln,setScissorTest:Ut,activeTexture:Wt,bindTexture:D,unbindTexture:fn,compressedTexImage2D:ut,compressedTexImage3D:E,texImage2D:Y,texImage3D:$,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:W,scissor:ue,viewport:le,reset:ke}}function PS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u=new Set,f,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function m(E,_){return x?new OffscreenCanvas(E,_):Xr("canvas")}function g(E,_,F){let V=1,W=ut(E);if((W.width>F||W.height>F)&&(V=F/Math.max(W.width,W.height)),V<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let se=Math.floor(V*W.width),oe=Math.floor(V*W.height);f===void 0&&(f=m(se,oe));let Y=_?m(se,oe):f;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(E,0,0,se,oe),we("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+oe+")."),Y}else return"data"in E&&we("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,_,F,V,W,se=!1){if(E!==null){if(i[E]!==void 0)return i[E];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe;V&&(oe=e.get("EXT_texture_norm16"),oe||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),F===i.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),F===i.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),F===i.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let $=se?Yo:We.getTransfer(W);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=$===ht?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),F===i.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(E,_){let F;return E?_===null||_===Zn||_===co?F=i.DEPTH24_STENCIL8:_===Jn?F=i.DEPTH32F_STENCIL8:_===lo&&(F=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Zn||_===co?F=i.DEPTH_COMPONENT24:_===Jn?F=i.DEPTH_COMPONENT32F:_===lo&&(F=i.DEPTH_COMPONENT16),F}function b(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ft&&E.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){let _=E.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function v(E){let _=E.target;_.removeEventListener("dispose",v),U(_)}function w(E){let _=n.get(E);if(_.__webglInit===void 0)return;let F=E.source,V=d.get(F);if(V){let W=V[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(E),Object.keys(V).length===0&&d.delete(F)}n.remove(E)}function I(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let F=E.source,V=d.get(F);delete V[_.__cacheKey],o.memory.textures--}function U(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let W=0;W<_.__webglFramebuffer[V].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[V][W]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=E.textures;for(let V=0,W=F.length;V<W;V++){let se=n.get(F[V]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(F[V])}n.remove(E)}let O=0;function H(){O=0}function L(){return O}function z(E){O=E}function K(){let E=O;return E>=s.maxTextures&&we("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function Z(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ne(E,_){let F=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let V=E.image;if(V===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(E,_){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){ye(F,E,_);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Q(E,_){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){ye(F,E,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function te(E,_){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Oe(F,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let Ie={[Li]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},Re={[Ft]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Mt={[vm]:i.NEVER,[Tm]:i.ALWAYS,[ym]:i.LESS,[Fc]:i.LEQUAL,[Mm]:i.EQUAL,[Oc]:i.GEQUAL,[Sm]:i.GREATER,[bm]:i.NOTEQUAL};function et(E,_){if(_.type===Jn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Et||_.magFilter===ao||_.magFilter===ar||_.magFilter===Kn||_.minFilter===Et||_.minFilter===ao||_.minFilter===ar||_.minFilter===Kn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ie[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ie[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ie[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Re[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Re[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ft||_.minFilter!==ar&&_.minFilter!==Kn||_.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function rt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let V=_.source,W=d.get(V);W===void 0&&(W={},d.set(V,W));let se=Z(_);if(se!==E.__cacheKey){W[se]===void 0&&(W[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[se].usedTimes++;let oe=W[E.__cacheKey];oe!==void 0&&(W[E.__cacheKey].usedTimes--,oe.usedTimes===0&&I(_)),E.__cacheKey=se,E.__webglTexture=W[se].texture}return F}function q(E,_,F){return Math.floor(Math.floor(E/F)/_)}function j(E,_,F,V){let se=E.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{se.sort((Ee,ue)=>Ee.start-ue.start);let oe=0;for(let Ee=1;Ee<se.length;Ee++){let ue=se[oe],le=se[Ee],Ae=ue.start+ue.count,Pe=q(le.start,_.width,4),ke=q(ue.start,_.width,4);le.start<=Ae+1&&Pe===ke&&q(le.start+le.count-1,_.width,4)===Pe?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++oe,se[oe]=le)}se.length=oe+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ee=0,ue=se.length;Ee<ue;Ee++){let le=se[Ee],Ae=Math.floor(le.start/4),Pe=Math.ceil(le.count/4),ke=Ae%_.width,N=Math.floor(Ae/_.width),ce=Pe,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ke,N,ce,J,F,V,_.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ye(E,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);let W=rt(E,_),se=_.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+F);let oe=n.get(se);if(se.version!==oe.__version||W===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let J=We.getPrimaries(We.workingColorSpace),he=_.colorSpace===Rn?null:We.getPrimaries(_.colorSpace),me=_.colorSpace===Rn||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let $=g(_.image,!1,s.maxTextureSize);$=fn(_,$);let ae=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type),ue=M(_.internalFormat,ae,Ee,_.normalized,_.colorSpace,_.isVideoTexture);et(V,_);let le,Ae=_.mipmaps,Pe=_.isVideoTexture!==!0,ke=oe.__version===void 0||W===!0,N=se.dataReady,ce=b(_,$);if(_.isDepthTexture)ue=S(_.format===Es,_.type),ke&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,ue,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ue,$.width,$.height,0,ae,Ee,null));else if(_.isDataTexture)if(Ae.length>0){Pe&&ke&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Ae[0].width,Ae[0].height);for(let J=0,he=Ae.length;J<he;J++)le=Ae[J],Pe?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ae,Ee,le.data):t.texImage2D(i.TEXTURE_2D,J,ue,le.width,le.height,0,ae,Ee,le.data);_.generateMipmaps=!1}else Pe?(ke&&t.texStorage2D(i.TEXTURE_2D,ce,ue,$.width,$.height),N&&j(_,$,ae,Ee)):t.texImage2D(i.TEXTURE_2D,0,ue,$.width,$.height,0,ae,Ee,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,Ae[0].width,Ae[0].height,$.depth);for(let J=0,he=Ae.length;J<he;J++)if(le=Ae[J],_.format!==$n)if(ae!==null)if(Pe){if(N)if(_.layerUpdates.size>0){let me=qu(le.width,le.height,_.format,_.type);for(let ee of _.layerUpdates){let Ce=le.data.subarray(ee*me/le.data.BYTES_PER_ELEMENT,(ee+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ee,le.width,le.height,1,ae,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,$.depth,ae,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,$.depth,0,le.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,$.depth,ae,Ee,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,$.depth,0,ae,Ee,le.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pe&&ke&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Ae[0].width,Ae[0].height);for(let J=0,he=Ae.length;J<he;J++)le=Ae[J],_.format!==$n?ae!==null?Pe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ue,le.width,le.height,0,le.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ae,Ee,le.data):t.texImage2D(i.TEXTURE_2D,J,ue,le.width,le.height,0,ae,Ee,le.data)}else if(_.isDataArrayTexture)if(Pe){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,$.width,$.height,$.depth),N)if(_.layerUpdates.size>0){let J=qu($.width,$.height,_.format,_.type);for(let he of _.layerUpdates){let me=$.data.subarray(he*J/$.data.BYTES_PER_ELEMENT,(he+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,$.width,$.height,1,ae,Ee,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,Ee,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,$.width,$.height,$.depth,0,ae,Ee,$.data);else if(_.isData3DTexture)Pe?(ke&&t.texStorage3D(i.TEXTURE_3D,ce,ue,$.width,$.height,$.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,Ee,$.data)):t.texImage3D(i.TEXTURE_3D,0,ue,$.width,$.height,$.depth,0,ae,Ee,$.data);else if(_.isFramebufferTexture){if(ke)if(Pe)t.texStorage2D(i.TEXTURE_2D,ce,ue,$.width,$.height);else{let J=$.width,he=$.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,ue,J,he,0,ae,Ee,null),J>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),u.add(_),J.onpaint=he=>{let me=he.changedElements;for(let ee of u)me.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let me=i.RGBA,ee=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,ee,Ce,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&ke){let J=ut(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ce,ue,J.width,J.height)}for(let J=0,he=Ae.length;J<he;J++)le=Ae[J],Pe?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae,Ee,le):t.texImage2D(i.TEXTURE_2D,J,ue,ae,Ee,le);_.generateMipmaps=!1}else if(Pe){if(ke){let J=ut($);t.texStorage2D(i.TEXTURE_2D,ce,ue,J.width,J.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Ee,$)}else t.texImage2D(i.TEXTURE_2D,0,ue,ae,Ee,$);p(_)&&T(V),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Oe(E,_,F){if(_.image.length!==6)return;let V=rt(E,_),W=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let se=n.get(W);if(W.version!==se.__version||V===!0){t.activeTexture(i.TEXTURE0+F);let oe=We.getPrimaries(We.workingColorSpace),Y=_.colorSpace===Rn?null:We.getPrimaries(_.colorSpace),$=_.colorSpace===Rn||oe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!ae&&!Ee?ue[ee]=g(_.image[ee],!0,s.maxCubemapSize):ue[ee]=Ee?_.image[ee].image:_.image[ee],ue[ee]=fn(_,ue[ee]);let le=ue[0],Ae=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),ke=M(_.internalFormat,Ae,Pe,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ce=se.__version===void 0||V===!0,J=W.dataReady,he=b(_,le);et(i.TEXTURE_CUBE_MAP,_);let me;if(ae){N&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ke,le.width,le.height);for(let ee=0;ee<6;ee++){me=ue[ee].mipmaps;for(let Ce=0;Ce<me.length;Ce++){let be=me[Ce];_.format!==$n?Ae!==null?N?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,ke,be.width,be.height,0,be.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,be.width,be.height,Ae,Pe,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,ke,be.width,be.height,0,Ae,Pe,be.data)}}}else{if(me=_.mipmaps,N&&ce){me.length>0&&he++;let ee=ut(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ee){N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Ae,Pe,ue[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,ue[ee].width,ue[ee].height,0,Ae,Pe,ue[ee].data);for(let Ce=0;Ce<me.length;Ce++){let bt=me[Ce].image[ee].image;N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,bt.width,bt.height,Ae,Pe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,ke,bt.width,bt.height,0,Ae,Pe,bt.data)}}else{N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,Pe,ue[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,Ae,Pe,ue[ee]);for(let Ce=0;Ce<me.length;Ce++){let be=me[Ce];N?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,Ae,Pe,be.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,ke,Ae,Pe,be.image[ee])}}}p(_)&&T(i.TEXTURE_CUBE_MAP),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xe(E,_,F,V,W,se){let oe=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=M(F.internalFormat,oe,Y,F.normalized,F.colorSpace),ae=n.get(_),Ee=n.get(F);if(Ee.__renderTarget=_,!ae.__hasExternalTextures){let ue=Math.max(1,_.width>>se),le=Math.max(1,_.height>>se);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,se,$,ue,le,_.depth,0,oe,Y,null):t.texImage2D(W,se,$,ue,le,0,oe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Wt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,W,Ee.__webglTexture,0,Ut(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,W,Ee.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let V=_.depthTexture,W=V&&V.isDepthTexture?V.type:null,se=S(_.stencilBuffer,W),oe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(_),se,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,E)}else{let V=_.textures;for(let W=0;W<V.length;W++){let se=V[W],oe=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),$=M(se.internalFormat,oe,Y,se.normalized,se.colorSpace);Wt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(_),$,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(E,_,F){let V=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),et(i.TEXTURE_CUBE_MAP,_.depthTexture);let ae=r.convert(_.depthTexture.format),Ee=r.convert(_.depthTexture.type),ue;_.depthTexture.format===Ni?ue=i.DEPTH_COMPONENT24:_.depthTexture.format===Es&&(ue=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,_.width,_.height,0,ae,Ee,null)}}else ne(_.depthTexture,0);let se=W.__webglTexture,oe=Ut(_),Y=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,$=_.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ni)Wt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,se,0);else if(_.depthTexture.format===Es)Wt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(E){let _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",W)};V.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)$t(_.__webglFramebuffer[V],E,V);else{let V=E.texture.mipmaps;V&&V.length>0?$t(_.__webglFramebuffer[0],E,0):$t(_.__webglFramebuffer,E,0)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Xe(_.__webglDepthbuffer[V],E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xe(_.__webglDepthbuffer,E,!1);else{let W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,_,F){let V=n.get(E);_!==void 0&&xe(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ke(E)}function St(E){let _=E.texture,F=n.get(E),V=n.get(_);E.addEventListener("dispose",v);let W=E.textures,se=E.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,o.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Y=0,$=W.length;Y<$;Y++){let ae=n.get(W[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Wt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let $=W[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let ae=r.convert($.format,$.colorSpace),Ee=r.convert($.type),ue=M($.internalFormat,ae,Ee,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),le=Ut(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ue,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),et(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)xe(F.__webglFramebuffer[Y][$],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else xe(F.__webglFramebuffer[Y],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,$=W.length;Y<$;Y++){let ae=W[Y],Ee=n.get(ae),ue=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),et(ue,ae),xe(F.__webglFramebuffer,E,ae,i.COLOR_ATTACHMENT0+Y,ue,0),p(ae)&&T(ue)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,V.__webglTexture),et(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)xe(F.__webglFramebuffer[$],E,_,i.COLOR_ATTACHMENT0,Y,$);else xe(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&T(Y),t.unbindTexture()}E.depthBuffer&&Ke(E)}function $e(E){let _=E.textures;for(let F=0,V=_.length;F<V;F++){let W=_[F];if(p(W)){let se=R(E),oe=n.get(W).__webglTexture;t.bindTexture(se,oe),T(se),t.unbindTexture()}}}let Pt=[],nn=[];function Ln(E){if(E.samples>0){if(Wt(E)===!1){let _=E.textures,F=E.width,V=E.height,W=i.COLOR_BUFFER_BIT,se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(E),Y=_.length>1;if(Y)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let $=E.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);let Ee=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,W,i.NEAREST),l===!0&&(Pt.length=0,nn.length=0,Pt.push(i.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Pt.push(se),nn.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);let Ee=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ut(E){return Math.min(s.maxSamples,E.samples)}function Wt(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function fn(E,_){let F=E.colorSpace,V=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==wn&&F!==Rn&&(We.getTransfer(F)===ht?(V!==$n||W!==On)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",F)),_}function ut(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=st,this.setupRenderTarget=St,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LS(i,e){function t(n,s=Rn){let r,o=We.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return i.BYTE;if(n===Nu)return i.SHORT;if(n===lo)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===$n)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===As)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===Sa||n===ba||n===Ta||n===wa)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc||n===fc||n===dc||n===Ea||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fc)return r.COMPRESSED_R11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ea)return r.COMPRESSED_RG11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Tc||n===wc||n===Ec||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Ic||n===Pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cc)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Nc||n===Aa||n===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DS=`
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

}`,ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:NS,fragmentShader:DS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,m=typeof XRWebGLBinding!="undefined",g=new ff,p={},T=t.getContextAttributes(),R=null,M=null,S=[],b=[],A=new Ne,v=null,w=null,I=new Yt;I.viewport=new at;let U=new Yt;U.viewport=new at;let O=[I,U],H=new Wl,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new Kr,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new Kr,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new Kr,S[q]=j),j.getHandSpace()};function K(q){let j=b.indexOf(q.inputSource);if(j===-1)return;let ye=S[j];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<S.length;q++){let j=b[q];j!==null&&(b[q]=null,S[q].disconnect(j))}L=null,z=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(R),d=null,f=null,u=null,s=null,M=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,xe=null;T.depth&&(xe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=T.stencil?Es:Ni,Oe=T.stencil?co:Zn);let Xe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new gn(f.textureWidth,f.textureHeight,{format:$n,type:On,depthTexture:new Fi(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new gn(d.framebufferWidth,d.framebufferHeight,{format:$n,type:On,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(q){for(let j=0;j<q.removed.length;j++){let ye=q.removed[j],Oe=b.indexOf(ye);Oe>=0&&(b[Oe]=null,S[Oe].disconnect(ye))}for(let j=0;j<q.added.length;j++){let ye=q.added[j],Oe=b.indexOf(ye);if(Oe===-1){for(let Xe=0;Xe<S.length;Xe++)if(Xe>=b.length){b.push(ye),Oe=Xe;break}else if(b[Xe]===null){b[Xe]=ye,Oe=Xe;break}if(Oe===-1)break}let xe=S[Oe];xe&&xe.connect(ye)}}let X=new C,Q=new C;function te(q,j,ye){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);let Oe=X.distanceTo(Q),xe=j.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,$t=xe[14]/(xe[10]-1),Ke=xe[14]/(xe[10]+1),st=(xe[9]+1)/xe[5],St=(xe[9]-1)/xe[5],$e=(xe[8]-1)/xe[0],Pt=(Xe[8]+1)/Xe[0],nn=$t*$e,Ln=$t*Pt,Ut=Oe/(-$e+Pt),Wt=Ut*-$e;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(Ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let D=$t+Ut,fn=Ke+Ut,ut=nn-Wt,E=Ln+(Oe-Wt),_=st*Ke/fn*D,F=St*Ke/fn*D;q.projectionMatrix.makePerspective(ut,E,_,F,D,fn),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ie(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ye=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),H.near=U.near=I.near=j,H.far=U.far=I.far=ye,(L!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,z=H.far),H.layers.mask=q.layers.mask|6,I.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Oe=q.parent,xe=H.cameras;Ie(H,Oe);for(let Xe=0;Xe<xe.length;Xe++)Ie(xe[Xe],Oe);xe.length===2?te(H,I,U):H.projectionMatrix.copy(I.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),Re(q,H,Oe)};function Re(q,j,ye){ye===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$s*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(q){return p[q]};let Mt=null;function et(q,j){if(h=j.getViewerPose(c||o),x=j,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Oe=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let Ke=0;Ke<ye.length;Ke++){let st=ye[Ke],St=null;if(d!==null)St=d.getViewport(st);else{let Pt=u.getViewSubImage(f,st);St=Pt.viewport,Ke===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let $e=O[Ke];$e===void 0&&($e=new Yt,$e.layers.enable(Ke),$e.viewport=new at,O[Ke]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(St.x,St.y,St.width,St.height),Ke===0&&(H.matrix.copy($e.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push($e)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=n.getBinding();let Ke=u.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&g.init(Ke,s.renderState)}if(xe&&xe.includes("camera-access")&&m){e.state.unbindTexture(),u=n.getBinding();for(let Ke=0;Ke<ye.length;Ke++){let st=ye[Ke].camera;if(st){let St=p[st];St||(St=new sa,p[st]=St);let $e=u.getCameraImage(st);St.sourceTexture=$e}}}}for(let ye=0;ye<S.length;ye++){let Oe=b[ye],xe=S[ye];Oe!==null&&xe!==void 0&&xe.update(Oe,j,c||o)}Mt&&Mt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),x=null}let rt=new e0;rt.setAnimationLoop(et),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},US=new Le,o0=new Fe;o0.set(-1,0,0,0,1,0,0,0,1);function FS(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,T,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===An&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===An&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=e.get(p),R=T.envMap,M=T.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(US.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(o0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){let T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function OS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let b=S.program;n.uniformBlockBinding(M,b)}function c(M,S){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",T));let A=S.program;n.updateUBOMapping(M,A);let v=e.render.frame;r[M.id]!==v&&(f(M),r[M.id]=v)}function h(M){let S=u();M.__bindingPointIndex=S;let b=i.createBuffer(),A=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let S=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,w=b.length;v<w;v++){let I=b[v];if(Array.isArray(I))for(let U=0,O=I.length;U<O;U++)d(I[U],v,U,A);else d(I,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,b,A){if(m(M,S,b,A)===!0){let v=M.__offset,w=M.value;if(Array.isArray(w)){let I=0;for(let U=0;U<w.length;U++){let O=w[U],H=p(O);x(O,M.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function x(M,S,b){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,b)}function m(M,S,b,A){let v=M.value,w=S+"_"+b;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let I=A[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(M){let S=M.uniforms,b=0,A=16;for(let w=0,I=S.length;w<I;w++){let U=Array.isArray(S[w])?S[w]:[S[w]];for(let O=0,H=U.length;O<H;O++){let L=U[O],z=Array.isArray(L.value)?L.value:[L.value];for(let K=0,Z=z.length;K<Z;K++){let ne=z[K],X=p(ne),Q=b%A,te=Q%X.boundary,Ie=Q+te;b+=te,Ie!==0&&A-Ie<X.storage&&(b+=A-Ie),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=X.storage}}}let v=b%A;return v>0&&(b+=A-v),M.__size=b,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):we("WebGLRenderer: Unsupported uniform value type.",M),S}function T(M){let S=M.target;S.removeEventListener("dispose",T);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var BS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function kS(){return Vi===null&&(Vi=new jr(BS,16,16,As,bi),Vi.name="DFG_LUT",Vi.minFilter=Et,Vi.magFilter=Et,Vi.wrapS=ni,Vi.wrapT=ni,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var Vc=class{constructor(e={}){let{canvas:t=wm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=On}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let m=d,g=new Set([sc,ic,nc]),p=new Set([On,Zn,lo,co,Ql,ec]),T=new Uint32Array(4),R=new Int32Array(4),M=new C,S=null,b=null,A=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,O=null,H=null,L=null,z=null;this._outputColorSpace=ot;let K=0,Z=0,ne=null,X=-1,Q=null,te=new at,Ie=new at,Re=null,Mt=new ve(0),et=0,rt=t.width,q=t.height,j=1,ye=null,Oe=null,xe=new at(0,0,rt,q),Xe=new at(0,0,rt,q),$t=!1,Ke=new Qr,st=!1,St=!1,$e=new Le,Pt=new C,nn=new at,Ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Wt(){return ne===null?j:1}let D=n;function fn(y,P){return t.getContext(y,P)}let ut,E,_,F,V,W,se,oe,Y,$,ae,Ee,ue,le,Ae,Pe,ke,N,ce,J,he,me,ee;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",fi,!1),D===null){let P="webgl2";if(D=fn(P,y),D===null)throw fn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(y){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",fi,!1),De("WebGLRenderer: "+y.message),y}function Ce(){ut=new qy(D),ut.init(),he=new LS(D,ut),E=new Fy(D,ut,e,he),_=new IS(D,ut),E.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),H=D.createFramebuffer(),L=D.createFramebuffer(),z=D.createFramebuffer(),F=new Zy(D),V=new gS,W=new PS(D,ut,_,V,E,he,F),se=new Xy(I),oe=new $x(D),me=new Dy(D,oe),Y=new Yy(D,oe,F,me),$=new $y(D,Y,oe,me,F),N=new Jy(D,E,W),Ae=new Oy(V),ae=new mS(I,se,ut,E,me,Ae),Ee=new FS(I,V),ue=new _S,le=new TS(ut),ke=new Ny(I,se,_,$,x,l),Pe=new CS(I,$,E),ee=new OS(D,F,E,_),ce=new Uy(D,ut,F),J=new Ky(D,ut,F),F.programs=ae.programs,I.capabilities=E,I.extensions=ut,I.properties=V,I.renderLists=ue,I.shadowMap=Pe,I.state=_,I.info=F}m!==On&&(w=new Qy(m,t.width,t.height,a,s,r));let be=new df(I,D);this.xr=be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ut.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ut.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(rt,q,!1))},this.getSize=function(y){return y.set(rt,q)},this.setSize=function(y,P,G=!0){if(be.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=y,q=P,t.width=Math.floor(y*j),t.height=Math.floor(P*j),G===!0&&(t.style.width=y+"px",t.style.height=P+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(rt*j,q*j).floor()},this.setDrawingBufferSize=function(y,P,G){rt=y,q=P,j=G,t.width=Math.floor(y*G),t.height=Math.floor(P*G),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(m===On){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,P,G,B){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,P,G,B),_.viewport(te.copy(xe).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(Xe)},this.setScissor=function(y,P,G,B){y.isVector4?Xe.set(y.x,y.y,y.z,y.w):Xe.set(y,P,G,B),_.scissor(Ie.copy(Xe).multiplyScalar(j).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(y){_.setScissorTest($t=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Oe=y},this.getClearColor=function(y){return y.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,G=!0){let B=0;if(y){let k=!1;if(ne!==null){let pe=ne.texture.format;k=g.has(pe)}if(k){let pe=ne.texture.type,_e=p.has(pe),de=ke.getClearColor(),Me=ke.getClearAlpha(),Te=de.r,Ve=de.g,Ze=de.b;_e?(T[0]=Te,T[1]=Ve,T[2]=Ze,T[3]=Me,D.clearBufferuiv(D.COLOR,0,T)):(R[0]=Te,R[1]=Ve,R[2]=Ze,R[3]=Me,D.clearBufferiv(D.COLOR,0,R))}else B|=D.COLOR_BUFFER_BIT}P&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",fi,!1),ke.dispose(),ue.dispose(),le.dispose(),V.dispose(),se.dispose(),$.dispose(),me.dispose(),ee.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",jd),be.removeEventListener("sessionend",Qd),Hs.stop()};function bt(y){y.preventDefault(),Ko("WebGLRenderer: Context Lost."),U=!0}function lt(){Ko("WebGLRenderer: Context Restored."),U=!1;let y=F.autoReset,P=Pe.enabled,G=Pe.autoUpdate,B=Pe.needsUpdate,k=Pe.type;Ce(),F.autoReset=y,Pe.enabled=P,Pe.autoUpdate=G,Pe.needsUpdate=B,Pe.type=k}function fi(y){De("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ri(y){let P=y.target;P.removeEventListener("dispose",Ri),Og(P)}function Og(y){Bg(y),V.remove(y)}function Bg(y){let P=V.get(y).programs;P!==void 0&&(P.forEach(function(G){ae.releaseProgram(G)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,G,B,k,pe){P===null&&(P=Ln);let _e=k.isMesh&&k.matrixWorld.determinantAffine()<0,de=Hg(y,P,G,B,k);_.setMaterial(B,_e);let Me=G.index,Te=1;if(B.wireframe===!0){if(Me=Y.getWireframeAttribute(G),Me===void 0)return;Te=2}let Ve=G.drawRange,Ze=G.attributes.position,Se=Ve.start*Te,ct=(Ve.start+Ve.count)*Te;pe!==null&&(Se=Math.max(Se,pe.start*Te),ct=Math.min(ct,(pe.start+pe.count)*Te)),Me!==null?(Se=Math.max(Se,0),ct=Math.min(ct,Me.count)):Ze!=null&&(Se=Math.max(Se,0),ct=Math.min(ct,Ze.count));let Xt=ct-Se;if(Xt<0||Xt===1/0)return;me.setup(k,B,de,G,Me);let Ct,yt=ce;if(Me!==null&&(Ct=oe.get(Me),yt=J,yt.setIndex(Ct)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Wt()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(k.isLine){let dn=B.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*Wt()),k.isLineSegments?yt.setMode(D.LINES):k.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else k.isPoints?yt.setMode(D.POINTS):k.isSprite&&yt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let dn=k._multiDrawStarts,ge=k._multiDrawCounts,bn=k._multiDrawCount,nt=Me?oe.get(Me).bytesPerElement:1,ei=V.get(B).currentProgram.getUniforms();for(let Ci=0;Ci<bn;Ci++)ei.setValue(D,"_gl_DrawID",Ci),yt.render(dn[Ci]/nt,ge[Ci])}else if(k.isInstancedMesh)yt.renderInstances(Se,Xt,k.count);else if(G.isInstancedBufferGeometry){let dn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,dn);yt.renderInstances(Se,Xt,ge)}else yt.render(Se,Xt)};function $d(y,P,G,B){O!==null&&y.isNodeMaterial&&O.setObject(B,y),st===!0&&Ae.setState(y,G,!1),y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=An,y.needsUpdate=!0,Ka(y,P,B),y.side=ki,y.needsUpdate=!0,Ka(y,P,B),y.side=cn):Ka(y,P,B)}this.compile=function(y,P,G=null){G===null&&(G=y),O!==null&&O.renderStart(y,P,G),b=le.get(G),b.init(P),v.push(b),G.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),y!==G&&y.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),St=this.localClippingEnabled,st=Ae.init(this.clippingPlanes,St),st===!0&&Ae.setGlobalState(this.clippingPlanes,P),O!==null&&Pe.render(b.state.shadowsArray,G,P);let B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){let de=pe[_e];$d(de,G,P,k),B.add(de)}else $d(pe,G,P,k),B.add(pe)}),b=v.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(y,P,G=null){let B=this.compile(y,P,G);return new Promise(k=>{function pe(){if(B.forEach(function(_e){let Me=V.get(_e).currentProgram;(Me===void 0||Me.isReady())&&B.delete(_e)}),B.size===0){k(y);return}setTimeout(pe,10)}ut.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Bh=null;function kg(y){Bh&&Bh(y)}function jd(){Hs.stop()}function Qd(){Hs.start()}let Hs=new e0;Hs.setAnimationLoop(kg),typeof self!="undefined"&&Hs.setContext(self),this.setAnimationLoop=function(y){Bh=y,be.setAnimationLoop(y),y===null?Hs.stop():Hs.start()},be.addEventListener("sessionstart",jd),be.addEventListener("sessionend",Qd),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(y,P);let G=be.enabled===!0&&be.isPresenting===!0,B=w!==null&&(ne===null||G)&&w.begin(I,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(P),P=be.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,P,ne),b=le.get(y,v.length),b.init(P),b.state.textureUnits=W.getTextureUnits(),v.push(b),$e.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ke.setFromProjectionMatrix($e,_i,P.reversedDepth),St=this.localClippingEnabled,st=Ae.init(this.clippingPlanes,St),S=ue.get(y,A.length),S.init(),A.push(S),be.enabled===!0&&be.isPresenting===!0){let _e=I.xr.getDepthSensingMesh();_e!==null&&kh(_e,P,-1/0,I.sortObjects)}kh(y,P,0,I.sortObjects),S.finish(),O!==null&&O.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(ye,Oe),Ut=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Ut&&ke.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ae.beginShadows();let k=b.state.shadowsArray;if(Pe.render(k,y,P),st===!0&&Ae.endShadows(),(B&&w.hasRenderPass())===!1){let _e=S.opaque,de=S.transmissive;if(b.setupLights(),P.isArrayCamera){let Me=P.cameras;if(de.length>0)for(let Te=0,Ve=Me.length;Te<Ve;Te++){let Ze=Me[Te];tp(_e,de,y,Ze)}Ut&&ke.render(y);for(let Te=0,Ve=Me.length;Te<Ve;Te++){let Ze=Me[Te];ep(S,y,Ze,Ze.viewport)}}else de.length>0&&tp(_e,de,y,P),Ut&&ke.render(y),ep(S,y,P)}ne!==null&&Z===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),B&&w.end(I),y.isScene===!0&&y.onAfterRender(I,y,P),me.resetDefaultState(),X=-1,Q=null,v.pop(),v.length>0?(b=v[v.length-1],W.setTextureUnits(b.state.textureUnits),st===!0&&Ae.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,O!==null&&O.renderEnd()};function kh(y,P,G,B){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ke)){B&&nn.setFromMatrixPosition(y.matrixWorld).applyMatrix4($e);let _e=$.update(y),de=y.material;de.visible&&S.push(y,_e,de,G,nn.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ke))){let _e=$.update(y),de=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),nn.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),nn.copy(_e.boundingSphere.center)),nn.applyMatrix4(y.matrixWorld).applyMatrix4($e)),Array.isArray(de)){let Me=_e.groups;for(let Te=0,Ve=Me.length;Te<Ve;Te++){let Ze=Me[Te],Se=de[Ze.materialIndex];Se&&Se.visible&&S.push(y,_e,Se,G,nn.z,Ze,P)}}else de.visible&&S.push(y,_e,de,G,nn.z,null,P)}}let pe=y.children;for(let _e=0,de=pe.length;_e<de;_e++)kh(pe[_e],P,G,B)}function ep(y,P,G,B){let{opaque:k,transmissive:pe,transparent:_e}=y;b.setupLightsView(G),st===!0&&Ae.setGlobalState(I.clippingPlanes,G),B&&_.viewport(te.copy(B)),k.length>0&&Ya(k,P,G),pe.length>0&&Ya(pe,P,G),_e.length>0&&Ya(_e,P,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function tp(y,P,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let Se=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new gn(1,1,{generateMipmaps:!0,type:Se?bi:On,minFilter:Kn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let pe=b.state.transmissionRenderTarget[B.id],_e=B.viewport||te;pe.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);let de=I.getRenderTarget(),Me=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget(pe),I.getClearColor(Mt),et=I.getClearAlpha(),et<1&&I.setClearColor(16777215,.5),I.clear(),Ut&&ke.render(G);let Ve=I.toneMapping;I.toneMapping=Si;let Ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),st===!0&&Ae.setGlobalState(I.clippingPlanes,B),Ya(y,G,B),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let ct=0,Xt=P.length;ct<Xt;ct++){let Ct=P[ct],{object:yt,geometry:dn,material:ge,group:bn}=Ct;if(ge.side===cn&&yt.layers.test(B.layers)){let nt=ge.side;ge.side=An,ge.needsUpdate=!0,np(yt,G,B,dn,ge,bn),ge.side=nt,ge.needsUpdate=!0,Se=!0}}Se===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}I.setRenderTarget(de,Me,Te),I.setClearColor(Mt,et),Ze!==void 0&&(B.viewport=Ze),I.toneMapping=Ve}function Ya(y,P,G){let B=P.isScene===!0?P.overrideMaterial:null;for(let k=0,pe=y.length;k<pe;k++){let _e=y[k],{object:de,geometry:Me,group:Te}=_e,Ve=_e.material;Ve.allowOverride===!0&&B!==null&&(Ve=B),de.layers.test(G.layers)&&np(de,P,G,Me,Ve,Te)}}function np(y,P,G,B,k,pe){O!==null&&k.isNodeMaterial&&O.setObject(y,k),y.onBeforeRender(I,P,G,B,k,pe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(I,P,G,B,y,pe),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=An,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,y,pe),k.side=ki,k.needsUpdate=!0,I.renderBufferDirect(G,P,B,k,y,pe),k.side=cn):I.renderBufferDirect(G,P,B,k,y,pe),y.onAfterRender(I,P,G,B,k,pe)}function Ka(y,P,G){P.isScene!==!0&&(P=Ln);let B=V.get(y),k=b.state.lights,pe=b.state.shadowsArray,_e=k.state.version,de=ae.getParameters(y,k.state,pe,P,G,b.state.lightProbeGridArray),Me=ae.getProgramCacheKey(de),Te=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Ve=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=se.get(y.envMap||B.environment,Ve),B.envMapRotation=B.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",Ri),Te=new Map,B.programs=Te);let Ze=Te.get(Me);if(Ze!==void 0){if(B.currentProgram===Ze&&B.lightsStateVersion===_e)return sp(y,de),Ze}else de.uniforms=ae.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,G,de),y.onBeforeCompile(de,I),Ze=ae.acquireProgram(de,Me),Te.set(Me,Ze),B.uniforms=de.uniforms;let Se=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=Ae.uniform),sp(y,de),B.needsLights=Gg(y),B.lightsStateVersion=_e,B.needsLights&&(Se.ambientLightColor.value=k.state.ambient,Se.lightProbe.value=k.state.probe,Se.sunLights.value=k.state.sun,Se.sunLightShadows.value=k.state.sunShadow,Se.directionalLights.value=k.state.directional,Se.directionalLightShadows.value=k.state.directionalShadow,Se.spotLights.value=k.state.spot,Se.spotLightShadows.value=k.state.spotShadow,Se.rectAreaLights.value=k.state.rectArea,Se.ltc_1.value=k.state.rectAreaLTC1,Se.ltc_2.value=k.state.rectAreaLTC2,Se.pointLights.value=k.state.point,Se.pointLightShadows.value=k.state.pointShadow,Se.hemisphereLights.value=k.state.hemi,Se.sunShadowMatrix.value=k.state.sunShadowMatrix,Se.sunShadowCascade.value=k.state.sunShadowCascade,Se.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Se.spotLightMatrix.value=k.state.spotLightMatrix,Se.spotLightMap.value=k.state.spotLightMap,Se.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Ze,B.uniformsList=null,Ze}function ip(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=mo.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function sp(y,P){let G=V.get(y);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function zg(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let G=0,B=y.length;G<B;G++){let k=y[G];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Hg(y,P,G,B,k){P.isScene!==!0&&(P=Ln),W.resetTextureUnits();let pe=P.fog,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,de=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:We.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=se.get(B.envMap||_e,Me),Ve=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ze=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,Xt=!!G.morphAttributes.color,Ct=Si;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ct=I.toneMapping);let yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dn=yt!==void 0?yt.length:0,ge=V.get(B),bn=b.state.lights;if(st===!0&&(St===!0||y!==Q)){let Tt=y===Q&&B.id===X;Ae.setState(B,y,Tt)}let nt=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==bn.state.version||ge.outputColorSpace!==de||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==Te||B.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ae.numPlanes||ge.numIntersection!==Ae.numIntersection)||ge.vertexAlphas!==Ve||ge.vertexTangents!==Ze||ge.morphTargets!==Se||ge.morphNormals!==ct||ge.morphColors!==Xt||ge.toneMapping!==Ct||ge.morphTargetsCount!==dn||!!ge.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,ge.__version=B.version);let ei=ge.currentProgram;nt===!0&&(ei=Ka(B,P,k),O&&B.isNodeMaterial&&O.onUpdateProgram(B,ei,ge));let Ci=!1,ds=!1,Tr=!1,pt=ei.getUniforms(),Ht=ge.uniforms;if(_.useProgram(ei.program)&&(Ci=!0,ds=!0,Tr=!0),B.id!==X&&(X=B.id,ds=!0),ge.needsLights){let Tt=zg(b.state.lightProbeGridArray,k);ge.lightProbeGrid!==Tt&&(ge.lightProbeGrid=Tt,ds=!0)}if(Ci||Q!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",y.projectionMatrix),pt.setValue(D,"viewMatrix",y.matrixWorldInverse);let ms=pt.map.cameraPosition;ms!==void 0&&ms.setValue(D,Pt.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,ds=!0,Tr=!0)}if(ge.needsLights&&(bn.state.sunShadowMap.length>0&&pt.setValue(D,"sunShadowMap",bn.state.sunShadowMap,W),bn.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",bn.state.directionalShadowMap,W),bn.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",bn.state.spotShadowMap,W),bn.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",bn.state.pointShadowMap,W)),k.isSkinnedMesh){pt.setOptional(D,k,"bindMatrix"),pt.setOptional(D,k,"bindMatrixInverse");let Tt=k.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),pt.setValue(D,"boneTexture",Tt.boneTexture,W))}k.isBatchedMesh&&(pt.setOptional(D,k,"batchingTexture"),pt.setValue(D,"batchingTexture",k._matricesTexture,W),pt.setOptional(D,k,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",k._indirectTexture,W),pt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",k._colorsTexture,W));let ps=G.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&N.update(k,G,ei),(ds||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,pt.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Ht.envMapIntensity.value=P.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=kS()),ds){if(pt.setValue(D,"toneMappingExposure",I.toneMappingExposure),ge.needsLights&&Vg(Ht,Tr),pe&&B.fog===!0&&Ee.refreshFogUniforms(Ht,pe),Ee.refreshMaterialUniforms(Ht,B,j,q,b.state.transmissionRenderTarget[y.id]),ge.needsLights&&ge.lightProbeGrid){let Tt=ge.lightProbeGrid;Ht.probesSH.value=Tt.texture,Ht.probesMin.value.copy(Tt.boundingBox.min),Ht.probesMax.value.copy(Tt.boundingBox.max),Ht.probesResolution.value.copy(Tt.resolution)}mo.upload(D,ip(ge),Ht,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mo.upload(D,ip(ge),Ht,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(D,"center",k.center),pt.setValue(D,"modelViewMatrix",k.modelViewMatrix),pt.setValue(D,"normalMatrix",k.normalMatrix),pt.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let Tt=B.uniformsGroups;for(let ms=0,wr=Tt.length;ms<wr;ms++){let op=Tt[ms];ee.update(op,ei),ee.bind(op,ei)}}return ei}function Vg(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Gg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,P,G){let B=V.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=P,V.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let G=V.get(y);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,G=0){ne=y,K=P,Z=G;let B=null,k=!1,pe=!1;if(y){let de=V.get(y);if(de.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),te.copy(y.viewport),Ie.copy(y.scissor),Re=y.scissorTest,_.viewport(te),_.scissor(Ie),_.setScissorTest(Re),X=-1;return}else if(de.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(de.__hasExternalTextures)W.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ve=y.depthTexture;if(de.__boundDepthTexture!==Ve){if(Ve!==null&&V.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}let Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let Te=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[P])?B=Te[P][G]:B=Te[P],k=!0):y.samples>0&&W.useMultisampledRTT(y)===!1?B=V.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[G]:B=Te,te.copy(y.viewport),Ie.copy(y.scissor),Re=y.scissorTest}else te.copy(xe).multiplyScalar(j).floor(),Ie.copy(Xe).multiplyScalar(j).floor(),Re=$t;if(G!==0&&(B=H),_.bindFramebuffer(D.FRAMEBUFFER,B)&&_.drawBuffers(y,B),_.viewport(te),_.scissor(Ie),_.setScissorTest(Re),k){let de=V.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,G)}else if(pe){let de=P;for(let Me=0;Me<y.textures.length;Me++){let Te=V.get(y.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Te.__webglTexture,G,de)}}else if(y!==null&&G!==0){let de=V.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,G)}X=-1};function rp(y){let P=V.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=E.textureFormatReadable(y.format),P.__typeReadable=E.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,G,B,k,pe,_e,de=0){if(!(y&&y.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){_.bindFramebuffer(D.FRAMEBUFFER,Me);try{let Te=y.textures[de],Ve=Te.format,Ze=Te.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de);let Se=rp(Te);if(Se.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-B&&G>=0&&G<=y.height-k&&D.readPixels(P,G,B,k,he.convert(Ve),he.convert(Ze),pe)}finally{let Te=ne!==null?V.get(ne).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,P,G,B,k,pe,_e,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me)if(P>=0&&P<=y.width-B&&G>=0&&G<=y.height-k){_.bindFramebuffer(D.FRAMEBUFFER,Me);let Te=y.textures[de],Ve=Te.format,Ze=Te.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+de);let Se=rp(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(P,G,B,k,he.convert(Ve),he.convert(Ze),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Xt=ne!==null?V.get(ne).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Xt);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Am(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ct),D.deleteSync(Ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,G=0){let B=Math.pow(2,-G),k=Math.floor(y.image.width*B),pe=Math.floor(y.image.height*B),_e=P!==null?P.x:0,de=P!==null?P.y:0;W.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,_e,de,k,pe),_.unbindTexture()},this.copyTextureToTexture=function(y,P,G=null,B=null,k=0,pe=0){let _e,de,Me,Te,Ve,Ze,Se,ct,Xt,Ct=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(G!==null)_e=G.max.x-G.min.x,de=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Te=G.min.x,Ve=G.min.y,Ze=G.isBox3?G.min.z:0;else{let Ht=Math.pow(2,-k);_e=Math.floor(Ct.width*Ht),de=Math.floor(Ct.height*Ht),y.isDataArrayTexture?Me=Ct.depth:y.isData3DTexture?Me=Math.floor(Ct.depth*Ht):Me=1,Te=0,Ve=0,Ze=0}B!==null?(Se=B.x,ct=B.y,Xt=B.z):(Se=0,ct=0,Xt=0);let yt=he.convert(P.format),dn=he.convert(P.type),ge;P.isData3DTexture?(W.setTexture3D(P,0),ge=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(W.setTexture2DArray(P,0),ge=D.TEXTURE_2D_ARRAY):(W.setTexture2D(P,0),ge=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let bn=_.getParameter(D.UNPACK_ROW_LENGTH),nt=_.getParameter(D.UNPACK_IMAGE_HEIGHT),ei=_.getParameter(D.UNPACK_SKIP_PIXELS),Ci=_.getParameter(D.UNPACK_SKIP_ROWS),ds=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze);let Tr=y.isDataArrayTexture||y.isData3DTexture,pt=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let Ht=V.get(y),ps=V.get(P),Tt=V.get(Ht.__renderTarget),ms=V.get(ps.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Tt.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let wr=0;wr<Me;wr++)Tr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(y).__webglTexture,k,Ze+wr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(P).__webglTexture,pe,Xt+wr)),D.blitFramebuffer(Te,Ve,_e,de,Se,ct,_e,de,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||V.has(y)){let Ht=V.get(y),ps=V.get(P);_.bindFramebuffer(D.READ_FRAMEBUFFER,L),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let Tt=0;Tt<Me;Tt++)Tr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,k,Ze+Tt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ht.__webglTexture,k),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ps.__webglTexture,pe,Xt+Tt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ps.__webglTexture,pe),k!==0?D.blitFramebuffer(Te,Ve,_e,de,Se,ct,_e,de,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(ge,pe,Se,ct,Xt+Tt,Te,Ve,_e,de):D.copyTexSubImage2D(ge,pe,Se,ct,Te,Ve,_e,de);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ge,pe,Se,ct,Xt,_e,de,Me,yt,dn,Ct.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(ge,pe,Se,ct,Xt,_e,de,Me,yt,Ct.data):D.texSubImage3D(ge,pe,Se,ct,Xt,_e,de,Me,yt,dn,Ct):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,Se,ct,_e,de,yt,dn,Ct.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,Se,ct,Ct.width,Ct.height,yt,Ct.data):D.texSubImage2D(D.TEXTURE_2D,pe,Se,ct,_e,de,yt,dn,Ct);_.pixelStorei(D.UNPACK_ROW_LENGTH,bn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),_.pixelStorei(D.UNPACK_SKIP_PIXELS,ei),_.pixelStorei(D.UNPACK_SKIP_ROWS,Ci),_.pixelStorei(D.UNPACK_SKIP_IMAGES,ds),pe===0&&P.generateMipmaps&&D.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&W.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?W.setTextureCube(y,0):y.isData3DTexture?W.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?W.setTexture2DArray(y,0):W.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){K=0,Z=0,ne=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var wf={};zh(wf,{BAKE_VP:()=>Da,H:()=>jc,SUN:()=>xf,U:()=>Mn,VIEW_M:()=>Ua,W:()=>$c,WATER_Y:()=>Cn,addCaster:()=>Ti,bigPx:()=>yf,camera:()=>yn,canvas:()=>en,envMat:()=>Cs,envMesh:()=>Jc,initCamera:()=>vf,initEnv:()=>Sf,initLights:()=>bf,initRenderer:()=>_f,meta:()=>vn,realLook:()=>In,render:()=>Tf,renderer:()=>Rt,scene:()=>qe,setView:()=>Mf,shadow:()=>_n,toUI:()=>Mo,view:()=>fr});var Nt=typeof wx!="undefined"&&typeof GameGlobal!="undefined",pf=Nt?"":typeof location!="undefined"?location.pathname.replace(/[^/]*$/,""):"",hr=(()=>{if(Nt)try{let e=wx.getLaunchOptionsSync&&wx.getLaunchOptionsSync();return e&&e.query||{}}catch(e){return{}}let i={};return new URLSearchParams(location.search).forEach((e,t)=>{i[t]=e}),i})();function qc(){if(Nt){let i=wx.getWindowInfo?wx.getWindowInfo():wx.getSystemInfoSync(),e={};try{e=wx.getDeviceInfo?wx.getDeviceInfo():wx.getSystemInfoSync()}catch(s){}let t=null;try{t=wx.getMenuButtonBoundingClientRect&&wx.getMenuButtonBoundingClientRect()}catch(s){}let n=i.safeArea&&i.safeArea.top||i.statusBarHeight||0;return{w:i.windowWidth,h:i.windowHeight,dpr:i.pixelRatio||2,platform:e.platform||"unknown",model:e.model||"",menu:t,safeTop:n}}return{w:innerWidth,h:innerHeight,dpr:devicePixelRatio||1,platform:"browser",model:navigator.userAgent,menu:null,safeTop:0}}var Bn=null;function Yc(){return Bn||(Nt?Bn=GameGlobal.__mainCanvas||wx.createCanvas():(Bn=document.createElement("canvas"),Object.assign(Bn.style,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%",display:"block",touchAction:"none"}),document.body.appendChild(Bn)),Bn.addEventListener||(Bn.addEventListener=()=>{}),Bn.removeEventListener||(Bn.removeEventListener=()=>{}),Bn.style||(Bn.style={}),Bn)}function Rs(i,e){Nt&&!Bn&&Yc();let t=Nt?wx.createCanvas():document.createElement("canvas");return t.width=i,t.height=e,t.addEventListener||(t.addEventListener=()=>{}),t}function xo(i){return new Promise((e,t)=>{let n=Nt?wx.createImage():new Image;n.onload=()=>e(n),n.onerror=s=>t(new Error("image "+i+" "+(s&&s.errMsg||""))),n.src=pf+i})}function _o(i){return Nt?new Promise((e,t)=>wx.getFileSystemManager().readFile({filePath:i,success:n=>e(n.data),fail:n=>t(new Error("read "+i+" "+n.errMsg))})):fetch(pf+i).then(e=>{if(!e.ok)throw new Error("fetch "+i+" "+e.status);return e.arrayBuffer()})}function Kc(i){return Nt?new Promise((e,t)=>wx.getFileSystemManager().readFile({filePath:i,encoding:"utf8",success:n=>e(JSON.parse(n.data)),fail:n=>t(new Error("read "+i+" "+n.errMsg))})):fetch(pf+i).then(e=>e.json())}function c0(i,e,t){let n=o=>({id:o.identifier,x:o.clientX,y:o.clientY});if(Nt){wx.onTouchStart(o=>{for(let a of o.changedTouches)i(n(a))}),wx.onTouchMove(o=>{for(let a of o.changedTouches)e(n(a))}),wx.onTouchEnd(o=>{for(let a of o.changedTouches)t(n(a))}),wx.onTouchCancel(o=>{for(let a of o.changedTouches)t(n(a))});return}let s=Yc(),r=o=>({id:o.pointerId,x:o.clientX,y:o.clientY});s.addEventListener("pointerdown",o=>{try{s.setPointerCapture(o.pointerId)}catch(a){}i(r(o))}),s.addEventListener("pointermove",o=>e(r(o))),s.addEventListener("pointerup",o=>t(r(o))),s.addEventListener("pointercancel",o=>t(r(o)))}var mf=i=>Nt?requestAnimationFrame(i):window.requestAnimationFrame(i),La=()=>typeof performance!="undefined"&&performance.now?performance.now():Date.now();function h0(){try{if(Nt)return wx.createWebAudioContext?wx.createWebAudioContext():null;let i=window.AudioContext||window.webkitAudioContext;return i?new i:null}catch(i){return console.warn("audio ctx",i),null}}function Zc(i,e){if(Nt){wx.onShow&&wx.onShow(i),wx.onHide&&wx.onHide(e);return}document.addEventListener("visibilitychange",()=>document.hidden?e():i())}var zS=La(),a0=new Set;function kn(i,e=1,t=!0){if(!(t&&a0.has(i))){a0.add(i);try{Nt&&wx.reportGameEvent&&wx.reportGameEvent({eventId:i,costTime:Math.round(La()-zS),result:e})}catch(n){}}}var l0=!1;function Xc(){if(!l0){l0=!0,console.log("game end");try{typeof window!="undefined"&&window.super_html&&window.super_html.game_end&&window.super_html.game_end()}catch(i){}try{Nt&&wx.notifyMiniProgramPlayableStatus&&wx.notifyMiniProgramPlayableStatus({isEnd:!0})}catch(i){}}}function Na(i=!1){if(console.log("# playable_controller download: "+(typeof window!="undefined"&&window.super_html_channel||"common")+" #"),i||kn(1012,1,!1),Nt){Xc();return}try{window.super_html&&window.super_html.download&&window.super_html.download()}catch(e){}i&&Xc()}var It=i=>i<=-2.54?i:i<=5.904?-2.54+(i- -2.54)*1.25:i+2.1109999999999998,Cn=-.22,ie={plaza:[-4.565,4.174,-2.54,It(5.904)],walk:{yard:[-4.1,3.75,-2.15,6.8],gate:[-.3,1.32,-2.75,-2],pier:[-.38,1.42,-4.78,-2.55],pond:[-4,3.6,-13,-3.3]},pondRect:[-3.5,3.2,-11,-3.9],table:{x:-3.7,z:It(2.2),len:3.5,wid:1.2,top:.62},tableBlock:[-4.4,-3.05,It(2.2)-1.75,It(2.2)+1.75],intake:[-3.98,It(1.25)],cutSpot:[-3.38,It(2.28)],outStack:[[-3.98,It(2.6)],[-3.98,It(3.42)]],chef:[-2.78,It(2.28)],dropSpot:[-2.5,It(1.25)],pickSpot:[-2.5,It(3.6)-.35],counter:{x0:-1.233,x1:1.901,z:It(5.486),top:.78},stand:[-.2,1.55,It(4.121),It(4.892)],cashStrip:[2.3,3.1,5.75,6.15],front:[[-.55,It(6.36)],[.45,It(6.36)],[1.45,It(6.36)]],crowd:{x0:-4.1,x1:3.7,z0:It(6.85),z1:It(15)},pads:{hire:{c:[-1.687,It(-1.548)],price:200,icon:"worker"},belt:{c:[-3.32,It(-.264)],price:200,icon:"conv"},staff:{c:[2.901,It(1.762)],price:400,icon:"staff"}},frame:[-3.3,It(-1.75)],belt:[[-3.72,It(-1.08)],[-3.72,It(2.2)-1.75+.05]],start:[.6,1.2],gateX:.52},He={walk:4.3,swim:2.7,walkCarry:4,heroFishCap:[10,16,16],meatCap:[12,16,18],netR:2.3,netAng:1.9,catchDt:.16,dropDt:.06,cutDt:.3,pickDt:.08,serveDt:.11,cashDt:.035,payDt:.04,packPrice:20,billVal:10,need:[2,4],fishN:130,workerCatchDt:.2,frameCap:30,beltDt:.32,endAfter:2.4,cap:90,idle:2},ur=["hire","belt","staff"];var Rt,qe,yn,vn,$c=1080,jc=1920,en,Mn={uRes:{value:new Ne(1,1)},uTime:{value:0},uVig:{value:.18},uMS:{value:.62},uMK:{value:.85},uMT:{value:new C(1.03,1,.94)}},xf=new C(Math.cos(Math.PI/3)*Math.cos(2.2602),Math.sin(Math.PI/3),Math.cos(Math.PI/3)*Math.sin(2.2602)).normalize();function _f(){en=Yc();let i=qc(),e=Math.min(i.dpr,2);en.width=Math.round(i.w*e),en.height=Math.round(i.h*e);let t={alpha:!1,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"},n=en.getContext("webgl2",t);if(!n)throw new Error("WebGL2 \u4E0D\u53EF\u7528");return Rt=new Vc({canvas:en,context:n,antialias:!0}),Rt.setPixelRatio(1),Rt.setSize(en.width,en.height,!1),Rt.outputColorSpace=ot,Rt.setClearColor(2765888,1),Rt.autoClear=!1,$c=1080,jc=Math.round(1080*en.height/en.width),Mn.uRes.value.set(en.width,en.height),qe=new Di,{renderer:Rt,W:$c,H:jc}}var vo=null,fr={cx:0,cy:0,w:0,h:0,zoom:1};function vf(i){vn=i;let e=new C(...i.L),t=new C(...i.F);yn=new Yt(i.fov,i.aspect,i.near,i.far),yn.position.copy(e).addScaledVector(t,-i.D),yn.up.set(0,1,0),yn.lookAt(e),yn.updateMatrixWorld(),vo=yn.clone(),vo.updateProjectionMatrix(),vo.updateMatrixWorld(),Da.multiplyMatrices(vo.projectionMatrix,vo.matrixWorldInverse)}var Da=new Le,yo=new C;function yf(i,e,t,n=[0,0]){return yo.set(i,e,t).project(vo),n[0]=(yo.x*.5+.5)*vn.fullW,n[1]=(.5-yo.y*.5)*vn.fullH,n}var Ua=9.6;function Mf(i,e,t){let n=t*vn.ppm,s=n*en.height/en.width,r=i-n/2,o=e-s/2;r=Math.max(0,Math.min(vn.fullW-n,r)),o=Math.max(0,Math.min(vn.fullH-70-s,o)),fr.cx=r+n/2,fr.cy=o+s/2,fr.w=n,fr.h=s,yn.setViewOffset(vn.fullW,vn.fullH,r,o,n,s),yn.updateProjectionMatrix(),Cs.uniforms.uWin.value.set(r/vn.fullW,o/vn.fullH,n/vn.fullW,s/vn.fullH)}function Mo(i,e,t,n=[0,0]){return yo.set(i,e,t).project(yn),n[0]=(yo.x*.5+.5)*$c,n[1]=(.5-yo.y*.5)*jc,n}var HS="void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",VS=`precision highp float;
uniform sampler2D tCol; uniform sampler2D tDep; uniform sampler2D tFlow; uniform sampler2D tSh;
uniform vec4 uWin; uniform vec2 uRes; uniform vec2 uNF; uniform float uTime;
uniform vec3 uCamPos; uniform vec3 uR; uniform vec3 uU; uniform vec3 uF; uniform float uWm; uniform float uHm; uniform float uD;
uniform mat4 uShVP; uniform float uShOn; uniform vec3 uShCol; uniform float uVig; uniform vec2 uBig;
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
  vec3 col;
  if (water) {
    vec3 fw = texture2D(tFlow, tuv).rgb;
    vec2 fl = (fw.rg * 2.0 - 1.0) * 6.0 * step(0.3, fw.b);
    vec2 fv = vec2(fl.x / uWm, fl.y / uHm);
    float sp = length(fl), T = 1.4, kd = sp * T > 0.6 ? 0.6 / (sp * T) : 1.0;
    float ph = fract(uTime / T), ph2 = fract(uTime / T + 0.5), wb = abs(ph * 2.0 - 1.0);
    vec2 wob = (vec2(vn(bt * uBig * 0.03 + uTime * 0.5), vn(bt.yx * uBig * 0.03 - uTime * 0.45)) - 0.5) * 2.2 / uBig;   // \u5858\u9762\uFF08\u6CA1\u6709\u6D41\u5411\uFF09\u8F7B\u8F7B\u6643
    vec2 u1 = tuv - fv * T * ph * kd + wob, u2 = tuv - fv * T * ph2 * kd + wob;
    vec3 base = textureLod(tCol, tuv + wob * 0.5, 3.0).rgb;
    vec3 h1 = texture2D(tCol, u1).rgb - textureLod(tCol, u1, 3.0).rgb, h2 = texture2D(tCol, u2).rgb - textureLod(tCol, u2, 3.0).rgb;
    col = base + mix(h1, h2, wb) * 1.15;
  } else col = texture2D(tCol, tuv).rgb;
  // \u4E16\u754C\u5750\u6807\uFF08\u70D8\u7119\u76F8\u673A\u7684\u5C04\u7EBF\uFF09\uFF0C\u67E5\u4F1A\u52A8\u7684\u4E1C\u897F\u7684\u5F71\u5B50
  vec2 q = vec2((bt.x - 0.5) * uWm, (0.5 - bt.y) * uHm);
  vec3 P = uCamPos + (uR * q.x + uU * q.y) * (vz / uD) + uF * vz;
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
      col *= mix(vec3(1.0), uShCol, sh * (water ? 0.45 : 1.0));
    }
  }
  // \u6210\u7247\u7684\u9897\u7C92 + \u6697\u89D2
  vec2 d = s - 0.5; col *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d * vec2(1.0, 1.25)));
  col += (hn(gl_FragCoord.xy + floor(uTime * 30.0) * 17.13) + hn(gl_FragCoord.xy * 1.7 + 3.1) - 1.0) * 2.5 / 255.0;
  gl_FragColor = vec4(col, 1.0);
  float vzd = water ? vz + 0.55 : vz;   // \u6C34\u9762\u5F80\u4E0B\u8BA9 0.55m\uFF1A\u6C34\u4E0B\u7684\u9C7C\u3001\u4EBA\u6CE1\u5728\u6C34\u91CC\u7684\u90A3\u622A\u7167\u6837\u753B\uFF08\u67D3\u6C34\u8272\uFF09\uFF0C\u6C34\u9762\u4EE5\u4E0A\u7167\u5E38\u5224\u6321
  float zn = (uNF.y + uNF.x) / (uNF.y - uNF.x) - 2.0 * uNF.y * uNF.x / ((uNF.y - uNF.x) * vzd);
  gl_FragDepth = d16 > 0.9998 ? 1.0 : zn * 0.5 + 0.5;
}`,Cs,Jc,_n={rt:null,cam:null,on:!0};function Sf(i){let{col:e,dep:t,flow:n}=i;e.colorSpace=Rn,e.generateMipmaps=!0,e.minFilter=Kn,e.magFilter=Et,e.anisotropy=4,e.needsUpdate=!0,t.colorSpace=Rn,t.generateMipmaps=!1,t.minFilter=t.magFilter=Ft,t.needsUpdate=!0,n.colorSpace=Rn,n.generateMipmaps=!1,n.minFilter=n.magFilter=Et,n.needsUpdate=!0,_n.rt=new gn(1024,1024,{depthBuffer:!0}),_n.rt.depthTexture=new Fi(1024,1024),_n.rt.depthTexture.type=Zn,_n.cam=new Fn(-13,13,13,-13,1,80);let s=vn,r=new C(...s.L),o=new C(...s.F);Cs=new At({vertexShader:HS,fragmentShader:VS,uniforms:{tCol:{value:e},tDep:{value:t},tFlow:{value:n},tSh:{value:_n.rt.depthTexture},uWin:{value:new at(0,0,1,1)},uRes:Mn.uRes,uNF:{value:new Ne(s.near,s.far)},uTime:Mn.uTime,uCamPos:{value:r.clone().addScaledVector(o,-s.D)},uR:{value:new C(...s.R)},uU:{value:new C(...s.U)},uF:{value:o},uWm:{value:s.Wm},uHm:{value:s.Hm},uD:{value:s.D},uBig:{value:new Ne(s.fullW,s.fullH)},uShVP:{value:new Le},uShOn:{value:1},uShCol:{value:new C(.6,.64,.74)},uVig:Mn.uVig},depthTest:!0,depthWrite:!0,depthFunc:Hr});let a=new xt;a.setAttribute("position",new tt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),Jc=new ze(a,Cs),Jc.frustumCulled=!1,u0.add(Jc)}var u0=new Di;function bf(){qe.add(new ua(13951743,13483954,1.7));let i=new sr(16773340,3);i.position.copy(xf).multiplyScalar(50),qe.add(i,i.target)}function In(i,{k:e=1}={}){let t=i.onBeforeCompile;i.onBeforeCompile=(s,r)=>{t&&t!==an.prototype.onBeforeCompile&&t(s,r),Object.assign(s.uniforms,{uRes:Mn.uRes,uVig:Mn.uVig,uMS:Mn.uMS,uMK:Mn.uMK,uMT:Mn.uMT}),s.fragmentShader=s.fragmentShader.replace("void main() {",`uniform vec2 uRes; uniform float uVig; uniform float uMS; uniform float uMK; uniform vec3 uMT;
void main() {`).replace("#include <opaque_fragment>",`{ float l_ = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722)); outgoingLight = mix(vec3(l_), outgoingLight, uMS) * uMK * uMT * ${e.toFixed(3)};
  vec2 d_ = gl_FragCoord.xy / uRes - 0.5; outgoingLight *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d_ * vec2(1.0, 1.25))); }
#include <opaque_fragment>`)};let n=i.customProgramCacheKey?i.customProgramCacheKey():"";return i.customProgramCacheKey=()=>n+"|real"+e,i}var GS=[],Ti=i=>GS.push(i),gf=new C,WS=new no;function Tf(i){if(_n.on&&_n.rt){let e=.025390625;gf.set(Math.round(i[0]/e)*e,0,Math.round(i[1]/e)*e),_n.cam.position.copy(gf).addScaledVector(xf,40),_n.cam.lookAt(gf),_n.cam.updateMatrixWorld(),_n.cam.updateProjectionMatrix();let t=[];qe.traverseVisible(n=>{((n.isMesh||n.isSkinnedMesh||n.isInstancedMesh)&&!n.castShadow||n.isPoints)&&t.push(n)});for(let n of t)n.visible=!1;qe.overrideMaterial=WS,Rt.setRenderTarget(_n.rt),Rt.clear(),Rt.render(qe,_n.cam),qe.overrideMaterial=null;for(let n of t)n.visible=!0;Rt.setRenderTarget(null),Cs.uniforms.uShVP.value.multiplyMatrices(_n.cam.projectionMatrix,_n.cam.matrixWorldInverse)}Rt.setRenderTarget(null),Rt.clear(),Rt.render(u0,yn),Rt.render(qe,yn)}var Pf={};zh(Pf,{FONT:()=>Fa,TAKE:()=>ls,atlas:()=>$S,begin:()=>Cf,bill:()=>rh,buildAtlas:()=>Rf,flush:()=>If,num:()=>ah,quads:()=>Af,rect:()=>QS,rr:()=>Zt,setCover:()=>oh,spr:()=>_t,sprite:()=>JS,text:()=>dr});var Fa='"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif';function Zt(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function dr(i,e,t,n,{size:s=40,fill:r="#fff",stroke:o="#222",lw:a=7,align:l="center",alpha:c=1,weight:h=900}={}){i.save(),i.globalAlpha=c,i.font=`${h} ${s}px ${Fa}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",a>0&&(i.lineWidth=a,i.strokeStyle=o,i.strokeText(e,t,n)),i.fillStyle=r,i.fillText(e,t,n),i.restore()}function rh(i,e,t,n){i.save(),i.translate(e,t),i.lineJoin="round";let s=n*2,r=n*1.15;for(let[o,a,l]of[[n*.12,n*.12,"#2e9a3a"],[0,0,"#56d25c"]])Zt(i,-s/2+o,-r/2+a,s,r,n*.16),i.fillStyle=l,i.fill(),i.lineWidth=n*.1,i.strokeStyle="#1b5e22",i.stroke();Zt(i,-s/2+n*.22,-r/2+n*.2,s-n*.44,r-n*.4,n*.1),i.lineWidth=n*.07,i.strokeStyle="rgba(25,100,35,0.8)",i.stroke(),i.beginPath(),i.ellipse(0,0,n*.3,n*.3,0,0,7),i.fillStyle="#2f9e3c",i.fill(),i.fillStyle="#f3f6ea",i.fillRect(-n*.12,-r/2-n*.02,n*.24,r+n*.04),i.restore()}function XS(i,e,t,n){i.save(),i.translate(e,t),i.scale(n,n);for(let[s,r]of[[0,8],[3,0],[-2,-8]])rh(i,s,r,22);i.restore()}function f0(i,e,t,n,s){Zt(i,-e/2,-t/2+6,e,t,t/2),i.fillStyle="#1f7a17",i.fill(),Zt(i,-e/2,-t/2,e,t,t/2);let r=i.createLinearGradient(0,-t/2,0,t/2);r.addColorStop(0,"#8ef05a"),r.addColorStop(1,"#2fb52a"),i.fillStyle=r,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),dr(i,n,0,2,{size:s,fill:"#ffffff",stroke:"#1d6e15",lw:7})}var ls={w:420,h:112};function qS(i){let{w:e,h:t}=ls;Zt(i,-e/2,-t/2+6,e,t,t/2),i.fillStyle="#a2520a",i.fill(),Zt(i,-e/2,-t/2,e,t,t/2);let n=i.createLinearGradient(0,-t/2,0,t/2);n.addColorStop(0,"#ffe36a"),n.addColorStop(1,"#ffa21f"),i.fillStyle=n,i.fill(),i.lineWidth=5,i.strokeStyle="#ffffff",i.stroke(),dr(i,"\u6211\u6765\u64CD\u4F5C\uFF01",0,2,{size:54,fill:"#ffffff",stroke:"#8a4300",lw:8})}function YS(i,e=1){i.save(),i.rotate(-.35),i.scale(e,e),i.fillStyle="#ffffff",i.strokeStyle="#1d2a44",i.lineWidth=6,i.lineJoin="round",i.beginPath(),i.moveTo(-10,0),i.lineTo(-10,-70),i.quadraticCurveTo(0,-84,10,-70),i.lineTo(10,-20),i.lineTo(30,-24),i.quadraticCurveTo(44,-22,44,-8),i.lineTo(44,40),i.quadraticCurveTo(40,74,6,78),i.lineTo(-18,78),i.quadraticCurveTo(-40,66,-44,40),i.lineTo(-48,8),i.quadraticCurveTo(-46,-6,-30,-2),i.lineTo(-10,6),i.closePath(),i.fill(),i.stroke(),i.restore()}function KS(i,e,t,n){n&&(i.fillStyle="#ffffff",i.beginPath(),i.arc(0,0,e*1.34,Math.PI*.64,Math.PI*2.36),i.lineTo(0,e*1.62),i.closePath(),i.fill(),i.lineWidth=2.5,i.strokeStyle="rgba(60,60,70,0.45)",i.stroke());let s=i.createLinearGradient(0,-e,0,e);if(t==="angry"?(s.addColorStop(0,"#ffc93e"),s.addColorStop(.5,"#ff9324"),s.addColorStop(1,"#ef4a1b")):(s.addColorStop(0,"#fff176"),s.addColorStop(.55,"#ffd23f"),s.addColorStop(1,"#f5a623")),i.fillStyle=s,i.beginPath(),i.arc(0,0,e,0,7),i.fill(),i.lineWidth=e*.07,i.strokeStyle=t==="angry"?"rgba(150,40,10,0.55)":"rgba(160,90,10,0.55)",i.stroke(),i.fillStyle="rgba(255,255,255,0.38)",i.beginPath(),i.ellipse(-e*.3,-e*.62,e*.32,e*.14,-.25,0,7),i.fill(),i.strokeStyle="#4a1a08",i.fillStyle="#4a1a08",i.lineCap="round",i.lineWidth=e*.15,t==="angry"){i.beginPath(),i.moveTo(-e*.66,-e*.36),i.lineTo(-e*.14,-e*.12),i.moveTo(e*.66,-e*.36),i.lineTo(e*.14,-e*.12),i.stroke();for(let r of[-1,1])i.beginPath(),i.ellipse(r*e*.3,e*.08,e*.1,e*.15,0,0,7),i.fill();i.lineWidth=e*.12,i.beginPath(),i.arc(0,e*.72,e*.34,-Math.PI*.8,-Math.PI*.2),i.stroke()}else if(t==="smile"){for(let r of[-1,1])i.beginPath(),i.arc(r*e*.32,-e*.12,e*.16,Math.PI*1.1,Math.PI*1.9),i.stroke();i.fillStyle="#7a2a10",i.beginPath(),i.moveTo(-e*.5,e*.15),i.quadraticCurveTo(0,e*.95,e*.5,e*.15),i.closePath(),i.fill()}else{i.fillStyle="#ff3b5c";for(let r of[-1,1])i.save(),i.translate(r*e*.34,-e*.1),i.scale(e*.017,e*.017),i.beginPath(),i.moveTo(0,6),i.bezierCurveTo(-14,-4,-8,-16,0,-8),i.bezierCurveTo(8,-16,14,-4,0,6),i.fill(),i.restore();i.fillStyle="#7a2a10",i.beginPath(),i.moveTo(-e*.42,e*.22),i.quadraticCurveTo(0,e*.85,e*.42,e*.22),i.closePath(),i.fill()}}function ZS(i){i.fillStyle="#ffffff",i.beginPath(),i.arc(0,0,30,0,7),i.fill(),i.fillStyle="#3ccf3c",i.beginPath(),i.arc(0,0,25,0,7),i.fill(),i.strokeStyle="#ffffff",i.lineWidth=7,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(-11,1),i.lineTo(-3,9),i.lineTo(12,-8),i.stroke()}var Xi={},as=null,Qc=2048,eh=2048,JS=i=>Xi[i],$S=()=>as,Af=()=>bo;function Rf({W:i,H:e,logo:t,packIcon:n,coverImg:s}){let r=[],o=(m,g,p)=>r.push({key:m,b:g,draw:p}),a={w:300,h:300*t.height/t.width};o("white",[0,0,8,8],m=>{m.fillStyle="#fff",m.fillRect(-2,-2,12,12)}),o("black",[0,0,8,8],m=>{m.fillStyle="#000",m.fillRect(-2,-2,12,12)}),o("logo",[-24,-24,a.w+36,a.h+36],m=>{m.save(),m.shadowColor="rgba(0,0,0,0.6)",m.shadowOffsetX=m.shadowOffsetY=3,m.shadowBlur=5,m.drawImage(t,0,0,a.w,a.h),m.restore()});{let g=360*t.height/t.width;o("logoBig",[-360/2-30,-g/2-30,360/2+30,g/2+40],p=>{p.save(),p.shadowColor="rgba(0,0,0,0.5)",p.shadowOffsetY=4,p.shadowBlur=10,p.drawImage(t,-360/2,-g/2,360,g),p.restore()})}{let g=600*t.height/t.width;o("logoLoad",[-600/2-30,-g/2-30,600/2+30,g/2+40],p=>{p.save(),p.shadowColor="rgba(0,0,0,0.5)",p.shadowOffsetY=4,p.shadowBlur=14,p.drawImage(t,-600/2,-g/2,600,g),p.restore()})}o("btnTop",[-158,-65,158,71],m=>f0(m,268,82,"\u7ACB\u5373\u4F53\u9A8C",40)),o("btnEnd",[-324,-99,324,105],m=>f0(m,600,150,"\u7ACB\u5373\u4F53\u9A8C",66)),o("btnTake",[-ls.w/2-24,-ls.h/2-24,ls.w/2+24,ls.h/2+30],m=>qS(m)),o("hudBg",[-90,-90,274,90],m=>{Zt(m,0,-30,250,60,20),m.fillStyle="rgba(40,44,58,0.55)",m.fill(),XS(m,4,0,1.45)}),o("check",[-44,-44,44,44],ZS),o("bub",[-48,-48,48,60],m=>{m.fillStyle="#ffffff",m.beginPath(),m.arc(0,0,33,Math.PI*.62,Math.PI*2.38),m.lineTo(0,46),m.closePath(),m.fill(),m.lineWidth=2.5,m.strokeStyle="rgba(60,60,70,0.5)",m.stroke()}),o("bubFill",[-30,-30,30,30],m=>{m.fillStyle="#4fd34f",m.beginPath(),m.arc(0,0,29,0,7),m.fill()}),o("bubIcon",[-30,-30,30,30],m=>m.drawImage(n,-30,-30,60,60));for(let[m,g,p]of[["ang0","angry",0],["ang1","angry",1],["smile1","smile",1],["heart1","heart",1]])o(m,[-58,-54,58,64],T=>KS(T,32,g,p));let l=1.35,c=e-510;o("tutLine",[-170*l-30,-30,170*l+30,30],m=>{m.strokeStyle="rgba(255,255,255,0.75)",m.lineWidth=10*l,m.lineCap="round",m.setLineDash([2,22*l]),m.beginPath(),m.moveTo(-170*l,0),m.lineTo(170*l,0),m.stroke(),m.setLineDash([])}),o("tutText",[-330,-90,330,90],m=>dr(m,"\u8F7B\u5212\u79FB\u52A8",0,0,{size:Math.round(64*l),fill:"#ffffff",stroke:"#1d2a44",lw:Math.round(10*l)})),o("hand",[-150,-170,150,170],m=>YS(m,l)),o("joyBase",[-120,-120,120,120],m=>{m.fillStyle="rgba(255,255,255,0.22)",m.strokeStyle="rgba(255,255,255,0.7)",m.lineWidth=6,m.beginPath(),m.arc(0,0,104,0,7),m.fill(),m.stroke()}),o("joyKnob",[-60,-60,60,60],m=>{m.fillStyle="rgba(255,255,255,0.8)",m.beginPath(),m.arc(0,0,48,0,7),m.fill()}),o("full",[-110,-46,110,46],m=>{Zt(m,-96,-34,192,68,34),m.fillStyle="rgba(214,40,30,0.92)",m.fill(),m.lineWidth=4,m.strokeStyle="#fff",m.stroke(),dr(m,"\u6EE1\u4E86",0,2,{size:40,fill:"#fff",stroke:"#7a120a",lw:6})}),o("loading",[-140,-40,140,40],m=>dr(m,"\u52A0\u8F7D\u4E2D",0,0,{size:40,fill:"#fff",stroke:"rgba(0,0,0,0.55)",lw:6,weight:700})),o("pct",[-30,-40,40,40],m=>dr(m,"%",0,0,{size:40,fill:"#fff",stroke:"rgba(0,0,0,0.55)",lw:6,weight:700})),o("barBg",[-4,-4,724,20],m=>{Zt(m,0,0,720,16,8),m.fillStyle="rgba(255,255,255,0.18)",m.fill(),m.lineWidth=2,m.strokeStyle="rgba(255,255,255,0.35)",m.stroke()}),o("barFill",[0,0,16,16],m=>{let g=m.createLinearGradient(0,0,16,0);g.addColorStop(0,"#7fd8ff"),g.addColorStop(1,"#ffffff"),m.fillStyle=g,m.fillRect(-2,-2,20,20)}),o("snow",[-8,-8,8,8],m=>{let g=m.createRadialGradient(0,0,0,0,0,7);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=g,m.beginPath(),m.arc(0,0,7,0,7),m.fill()});for(let[m,g,p,T,R]of[["a",46,7,"#2c2f3a","#ffffff"],["r",46,7,"#2c2f3a","#ff4a3a"],["p",40,6,"rgba(0,0,0,0.55)","#ffffff"]])for(let M of"0123456789")o(m+M,[-p-6,-g-p,g*.8+p,g+p],S=>{S.font=`900 ${g}px ${Fa}`,S.textAlign="left",S.textBaseline="middle",S.lineJoin="round",S.lineWidth=p,S.strokeStyle=T,S.strokeText(M,0,0),S.fillStyle=R,S.fillText(M,0,0)});let h=Rs(Qc,eh),u=h.getContext("2d"),f=2,d=2,x=0;for(let m of r){let g=Math.ceil(m.b[2]-m.b[0])+2,p=Math.ceil(m.b[3]-m.b[1])+2;if(f+g>Qc&&(f=2,d+=x+2,x=0),d+p>eh){console.warn("ui atlas full",m.key);break}u.save(),u.beginPath(),u.rect(f,d,g,p),u.clip(),u.translate(f+1-m.b[0],d+1-m.b[1]),m.draw(u),u.restore(),Xi[m.key]={u0:(f+1)/Qc,v0:(d+1)/eh,u1:(f+1+m.b[2]-m.b[0])/Qc,v1:(d+1+m.b[3]-m.b[1])/eh,b:m.b},f+=g+2,x=Math.max(x,p)}u.font=`900 46px ${Fa}`;for(let m of"0123456789")Xi["a"+m].adv=Xi["r"+m].adv=u.measureText(m).width;u.font=`900 40px ${Fa}`;for(let m of"0123456789")Xi["p"+m].adv=u.measureText(m).width;return as=new gt(h),as.colorSpace=ot,as.premultiplyAlpha=!0,as.flipY=!1,as.generateMipmaps=!1,as.minFilter=Et,as.needsUpdate=!0,jS(i,e,s),{LOGO:a}}var So=1600,Is,Ef,th,d0,nh,ih,sh,bo=0,pr;function jS(i,e,t){Is=new xt,nh=new tt(new Float32Array(So*4*2),2).setUsage(Hi),ih=new tt(new Float32Array(So*4*2),2).setUsage(Hi),sh=new tt(new Float32Array(So*4),1).setUsage(Hi),Is.setAttribute("position",nh),Is.setAttribute("uv",ih),Is.setAttribute("aA",sh);let n=new Uint16Array(So*6);for(let r=0;r<So;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);Is.setIndex(new tt(n,1)),Is.boundingSphere=new on(new C,1e9);let s=new At({uniforms:{t:{value:as},uWH:{value:new Ne(i,e)}},vertexShader:"attribute float aA; varying vec2 vU; varying float vA; uniform vec2 uWH; void main(){ vU = uv; vA = aA; gl_Position = vec4(position.x / uWH.x * 2.0 - 1.0, 1.0 - position.y / uWH.y * 2.0, 0.0, 1.0); }",fragmentShader:"uniform sampler2D t; varying vec2 vU; varying float vA; void main(){ gl_FragColor = texture2D(t, vU) * vA; }",transparent:!0,side:cn,depthTest:!1,depthWrite:!1,blending:Kl,blendSrc:va,blendDst:oo,blendSrcAlpha:va,blendDstAlpha:oo});if(Ef=new ze(Is,s),Ef.frustumCulled=!1,th=new Di,th.add(Ef),d0=new Fn(-1,1,1,-1,-1,1),t){let r=new gt(t);r.colorSpace=ot,r.needsUpdate=!0;let o=t.width/t.height,a=i/e,l=o>a?a/o:1,c=o>a?1:o/a,h=new ii(2,2),u=h.attributes.uv;for(let f=0;f<u.count;f++)u.setXY(f,.5+(u.getX(f)-.5)*l,.5+(u.getY(f)-.5)*c);pr=new ze(h,new At({uniforms:{t:{value:r},uA:{value:1}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D t; uniform float uA; varying vec2 vU; void main(){ gl_FragColor = vec4(texture2D(t, vU).rgb, uA); }",transparent:!0,depthTest:!1,depthWrite:!1})),pr.frustumCulled=!1,pr.renderOrder=-1,th.add(pr)}}function oh(i){pr&&(pr.visible=i>.003,pr.material.uniforms.uA.value=i)}function _t(i,e,t,n={}){var M,S,b,A,v;let s=Xi[i];if(!s||bo>=So)return;let r=(M=n.a)!=null?M:1;if(r<=.003)return;let o=(b=(S=n.sx)!=null?S:n.s)!=null?b:1,a=(v=(A=n.sy)!=null?A:n.s)!=null?v:1,[l,c,h,u]=s.b,f=s.v0;if(n.w!==void 0){let w=n.w/(h-l),I=n.h/(u-c);l*=w,h*=w,c*=I,u*=I}if(n.crop!==void 0){let w=Math.max(0,Math.min(1,n.crop)),I=u-(u-c)*w;f=s.v1-(s.v1-s.v0)*w,c=I}let d=Math.cos(n.rot||0),x=Math.sin(n.rot||0),m=nh.array,g=ih.array,p=sh.array,T=bo*4,R=[[l,c,s.u0,f],[h,c,s.u1,f],[h,u,s.u1,s.v1],[l,u,s.u0,s.v1]];for(let w=0;w<4;w++){let[I,U,O,H]=R[w],L=I*o,z=U*a;m[(T+w)*2]=e+L*d-z*x,m[(T+w)*2+1]=t+L*x+z*d,g[(T+w)*2]=O,g[(T+w)*2+1]=H,p[T+w]=r}bo++}function QS(i,e,t,n,s){_t("white",i,e,{w:t,h:n,a:s})}function ah(i,e,t,{set:n="a",align:s="right",sc:r=1,a:o=1}={}){i=String(i);let a=0;for(let c of i)a+=(Xi[n+c]?Xi[n+c].adv:20)*r;let l=s==="right"?e-a:s==="center"?e-a/2:e;for(let c of i)_t(n+c,l,t,{s:r,a:o}),l+=(Xi[n+c]?Xi[n+c].adv:20)*r;return a}function Cf(){bo=0}function If(){nh.needsUpdate=ih.needsUpdate=sh.needsUpdate=!0,Is.setDrawRange(0,bo*6),Rt.render(th,d0)}function m0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new xt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=p0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let m=0;m<o[h].length;++m)d.push(o[h][m][f]);let x=p0(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function p0(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new tt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<t;x++){let m=h.getComponent(f,x);a.setComponent(f+u,x,m)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Lf(i,e){if(e===Bu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ho||e===Ra){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ho)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function lh(i){let e=new Map,t=new Map,n=i.clone();return g0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function g0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)g0(i.children[n],e.children[n],t)}var ch=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new hh(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hh(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new jf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=os.extractUrlBase(e);o=os.resolveURL(c,this.path)}else o=os.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new io(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===M0){try{o[Ye.KHR_BINARY_GLTF]=new Qf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new od(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new Of;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new ed(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new td;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new nd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function tb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ff=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pa(h),c.distance=u;break;case"spot":c=new da(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Of=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Kt}extendParams(e,t,n){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ot))}return Promise.all(s)}},Bf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(s)}},zf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Hf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Vf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ot)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Gf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Wf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(r[0],r[1],r[2],wn),Promise.all(s)}},Xf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},qf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(r[0],r[1],r[2],wn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ot)),Promise.all(s)}},Yf=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Kf=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Jf=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},$f=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},hh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},jf=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let x of u){let m=new Le,g=new C,p=new wt,T=new C(1,1,1),R=new Ui(x.geometry,x.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&T.fromBufferAttribute(l.SCALE,S),R.setMatrixAt(S,m.compose(g,p,T));let M=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];R.instanceColor=new ts(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(M===null){let A=R.geometry;M=new xt,M.name=A.name;for(let v in A.attributes)M.setAttribute(v,A.attributes[v]);for(let v in A.morphAttributes)M.morphAttributes[v]=A.morphAttributes[v];A.index!==null&&M.setIndex(A.index),M.morphTargetsRelative=A.morphTargetsRelative;for(let v of A.groups)M.addGroup(v.start,v.count,v.materialIndex);A.boundingBox!==null&&(M.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(M.boundingSphere=A.boundingSphere.clone()),M.drawRange.start=A.drawRange.start,M.drawRange.count=A.drawRange.count,M.userData=Object.assign({},A.userData),R.geometry=M}let b=l[S];M.setAttribute(S,new ts(b.array,b.itemSize,b.normalized))}Lt.prototype.copy.call(R,x),this.parser.assignFinalMaterial(R),d.push(R)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},M0="glTF",Oa=12,x0={JSON:1313821514,BIN:5130562},Qf=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==M0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Oa,r=new DataView(e,Oa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===x0.JSON){let c=new Uint8Array(e,Oa+o,a);this.content=n.decode(c)}else if(l===x0.BIN){let c=Oa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ed=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=sd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=sd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=To[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let x in d.attributes){let m=d.attributes[x],g=l[x];g!==void 0&&(m.normalized=g)}u(d)},a,c,wn,f)})})}},td=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},nd=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},uh=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,x=e*c,m=x-c,g=-2*d+3*f,p=d-f,T=1-g,R=p-f+u;for(let M=0;M!==a;M++){let S=o[m+M+a],b=o[m+M+l]*h,A=o[x+M+a],v=o[x+M]*h;r[M]=T*S+R*b+g*A+p*v}return r}},nb=new wt,id=class extends uh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return nb.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_0={9728:Ft,9729:Et,9984:$l,9985:ao,9986:ar,9987:Kn},v0={33071:ni,33648:Gr,10497:Li},Nf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ib={CUBICSPLINE:void 0,LINEAR:Js,STEP:Zs},Df={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function mr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ob(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ab(i){let e,t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uf(t.attributes):e=i.indices+":"+Uf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Uf(i.targets[n]);return e}function Uf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cb=new Le,od=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new ha(this.options.manager):this.textureLoader=new ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new io(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return mr(r,a,s),qi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(os.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Nf[s.type],a=To[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new tt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Nf[s.type],c=To[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,m,g;if(d&&d!==u){let p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,R=t.cache.get(T);R||(m=new c(a,p*d,s.count*d/h),R=new Zr(m,d/h),t.cache.add(T,R)),g=new Jr(R,l,f%d/h,x)}else a===null?m=new c(s.count*l):m=new c(a,f,s.count*l),g=new tt(m,l,x);if(s.sparse!==void 0){let p=Nf.SCALAR,T=To[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,S=new T(o[1],R,s.sparse.count*p),b=new c(o[2],M,s.sparse.count*l);a!==null&&(g=new tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,v=S.length;A<v;A++){let w=S[A];if(g.setX(w,b[A*l]),l>=2&&g.setY(w,b[A*l+1]),l>=3&&g.setZ(w,b[A*l+2]),l>=4&&g.setW(w,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=_0[f.magFilter]||Et,h.minFilter=_0[f.minFilter]||Kn,h.wrapS=v0[f.wrapS]||Li,h.wrapT=v0[f.wrapT]||Li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Et,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let g=new gt(m);g.needsUpdate=!0,f(g)}),t.load(os.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),qi(u,o),u.userData.mimeType=o.mimeType||lb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new to,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new eo,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return tr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){let u=s[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],wn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ot)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=cn);let h=r.alphaMode||Df.OPAQUE;if(h===Df.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Df.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Kt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Kt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Kt){let u=r.emissiveFactor;a.emissive=new ve().setRGB(u[0],u[1],u[2],wn)}return r.emissiveTexture!==void 0&&o!==Kt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ot)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),qi(u,r),t.associations.set(u,{materials:e}),r.extensions&&mr(s,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return y0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=ab(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=y0(new xt,c,t),c.mode===si.TRIANGLE_STRIP?f=f.then(d=>Lf(d,Ra)):c.mode===si.TRIANGLE_FAN&&(f=f.then(d=>Lf(d,ho))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?sb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,x=h.length;d<x;d++){let m=h[d],g=o[d],p,T=c[d];if(g.mode===si.TRIANGLES||g.mode===si.TRIANGLE_STRIP||g.mode===si.TRIANGLE_FAN||g.mode===void 0){let R=r.isSkinnedMesh===!0,M=m.hasAttribute("skinIndex")&&m.hasAttribute("skinWeight");R&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=R&&M?new Qo(m,T):new ze(m,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===si.LINES)p=new ta(m,T);else if(g.mode===si.LINE_STRIP)p=new Qs(m,T);else if(g.mode===si.LINE_LOOP)p=new na(m,T);else if(g.mode===si.POINTS)p=new er(m,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&ob(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qi(p,r),g.extensions&&mr(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&mr(s,u[0],r),u[0];let f=new rn;r.extensions&&mr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Vu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Le;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ea(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],x=s.samplers[d.sampler],m=d.target,g=m.node,p=s.parameters!==void 0?s.parameters[x.input]:x.input,T=s.parameters!==void 0?s.parameters[x.output]:x.output;m.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(x),h.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],x=u[2],m=u[3],g=u[4],p=[];for(let R=0,M=f.length;R<M;R++){let S=f[R],b=d[R],A=x[R],v=m[R],w=g[R];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let I=n._createAnimationTracks(S,b,A,v,w);if(I)for(let U=0;U<I.length;U++)p.push(I[U])}let T=new nr(r,void 0,p);return qi(T,s),T})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,cb)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,x=u[0];h.pivot=new C().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],x.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new $r:c.length>1?h=new rn:c.length===1?h=c[0]:h=new Lt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),qi(h,r),r.extensions&&mr(n,h,r),r.matrix!==void 0){let u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rn;n.name&&(r.name=s.createUniqueName(n.name)),qi(r,n),n.extensions&&mr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(lh(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof an||f instanceof gt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ps[r.path]===Ps.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ps[r.path]){case Ps.weights:h=is;break;case Ps.rotation:h=ss;break;case Ps.translation:case Ps.scale:h=bs;break;default:switch(n.itemSize){case 1:h=is;break;case 2:case 3:default:h=bs;break}break}let u=s.interpolation!==void 0?ib[s.interpolation]:Js,f=this._getArrayFromAccessor(n);for(let d=0,x=l.length;d<x;d++){let m=new h(l[d]+"."+Ps[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ss?id:uh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hb(i,e,t){let n=e.attributes,s=new Yn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=rd(To[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let m=rd(To[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new on;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function y0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=sd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return We.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),qi(i,e),hb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rb(i,e.targets,t):i})}var S0=0,fh=0,ad=null,b0=i=>{ad=i},ld=()=>{S0++,ad&&ad(S0/Math.max(1,fh))};async function T0(i,{srgb:e=!0,flipY:t=!0,repeat:n=!1}={}){fh++;let s=await xo(i),r=new gt(s);return r.colorSpace=e?ot:Rn,r.flipY=t,n&&(r.wrapS=r.wrapT=Li),r.needsUpdate=!0,ld(),r}var ub=new ch;async function w0(i){fh++;let e=await _o(i),t=await new Promise((n,s)=>ub.parse(e,"",n,s));return ld(),t}async function E0(i){fh++;let e=await Kc(i);return ld(),e}var A0=.008585105326680513;function mh(i,e){return{scene:i.scene,clips:Object.fromEntries(i.animations.map(t=>[t.name,t])),minY:e}}var cd=new Map;function db(i,e){return cd.has(e)||cd.set(e,In(new ln({map:i}))),cd.get(e)}function Ls(i,e,{scale:t=1,cast:n=!0,tint:s=null}={}){let r=lh(i.scene);r.traverse(m=>{if(!m.isMesh)return;let p=(Array.isArray(m.material)?m.material:[m.material]).map(T=>{let R=e[T.name]||e["*"];return db(R,T.name+":"+(R&&R.uuid)+(s||""))});m.material=Array.isArray(m.material)?p:p[0],m.frustumCulled=!1,m.castShadow=n,m.receiveShadow=!1});let o=.7*t,a=new rn,l=new rn,c=new rn;a.add(l),l.add(c),c.add(r),l.position.y=o,c.scale.setScalar(A0*t),c.position.y=-i.minY*A0*t-o;let h={};r.traverse(m=>{m.isBone&&(h[m.name]=m)});let u=new ga(r),f={};for(let[m,g]of Object.entries(i.clips))f[m]=u.clipAction(g);let d=null,x={obj:a,tilt:l,holder:c,inner:r,mixer:u,actions:f,bones:h,heading:0,hands(m){let g=h.Wrist_L,p=h.Wrist_R;return!g||!p?null:(a.updateMatrixWorld(!0),g.getWorldPosition(dh),p.getWorldPosition(ph),m[0]=(dh.x+ph.x)/2,m[1]=(dh.y+ph.y)/2,m[2]=(dh.z+ph.z)/2,m)},play(m,g=.18,p=1){let T=f[m];T&&(T.timeScale=p,d!==T&&(T.reset(),T.enabled=!0,T.setEffectiveWeight(1),T.play(),d&&d.crossFadeTo(T,g,!1),d=T,x.anim=m))},update(m){u.update(m)},face(m,g=1){let p=Math.atan2(Math.sin(m-x.heading),Math.cos(m-x.heading));x.heading+=p*g,a.rotation.y=x.heading}};return n&&Ti(a),x}var dh=new C,ph=new C;var Pn=i=>Math.min(1,Math.max(0,i));var Ot=(i,e,t)=>i+(e-i)*t,dt=i=>(i=Pn(i),i*i*(3-2*i)),Sn=i=>{i=Pn(i);let e=1.7;return 1+(e+1)*(i-1)**3+e*(i-1)**2};var Be=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)},wi=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]),Ns=i=>Math.atan2(Math.sin(i),Math.cos(i));var wo=(i,e,t=0)=>i[0]>=e[0]-t&&i[0]<=e[1]+t&&i[1]>=e[2]-t&&i[1]<=e[3]+t;function R0(i,e,t,n,s){return i[0]=Ot(e[0],t[0],s),i[1]=Ot(e[1],t[1],s)+Math.sin(Math.PI*s)*n,i[2]=Ot(e[2],t[2],s),i}var Ei={fish:{thick:.274*.92,len:1.05},pack:{h:.25},cash:{h:.0886}},Ba=class{constructor(e,t,n=!0){this.n=0,this.max=t,this.meshes=e.map(([s,r])=>{let o=new Ui(s,r,t);return o.instanceMatrix.setUsage(Hi),o.frustumCulled=!1,o.castShadow=n,o.count=0,qe.add(o),o});for(let s=1;s<this.meshes.length;s++)this.meshes[s].instanceMatrix=this.meshes[0].instanceMatrix;n&&Ti(this.meshes[0])}push(e){this.n<this.max&&this.meshes[0].setMatrixAt(this.n++,e)}flush(){for(let e of this.meshes)e.count=this.n;this.meshes[0].instanceMatrix.needsUpdate=!0,this.n=0}},xh={};function fd(i){i.updateWorldMatrix(!0,!1);let e=new xt;for(let[t,n]of Object.entries(i.geometry.attributes)){let s=n.count,r=n.itemSize,o=new Float32Array(s*r);for(let a=0;a<s;a++)for(let l=0;l<r;l++)o[a*r+l]=n.getComponent(a,l);e.setAttribute(t,new tt(o,r))}return i.geometry.index&&e.setIndex(i.geometry.index.clone()),e.applyMatrix4(i.matrixWorld),e.computeBoundingSphere(),e}function N0(i,e){let t=c=>{let h=[];return c.scene.traverse(u=>{u.isMesh&&h.push([fd(u),u.material.name,u])}),h},n=t(i.fish)[0],s=In(new ln({map:e.fish}),{k:1.15}),o=t(i.pack).map(([c,h,u])=>[c,h.includes("food")?In(new ln({map:e.packFood}),{k:1.12}):In(new aa({color:new ve(3160141),specular:8018490,shininess:50}))]),a=t(i.cash)[0],l=In(new ln({map:e.cash,emissive:666116}),{k:1.1});return xh={fish:new Ba([[n[0],s]],420),pack:new Ba(o,420),cash:new Ba([[a[0],l]],420)},{fishGeo:n[0],fishMat:s}}var _h=[],ud=0,gr=class{constructor(e,t,n={}){var s;this.type=e,this.p=[...t],this.ry=n.ry||0,this.rx=0,this.scale=(s=n.scale)!=null?s:1,this.pop=n.pop?ud:-1,this.slot=null,this.fly=null,this.alive=!0,this.spin=Math.random()<.5?1:-1,_h.push(this)}goto(e,t=.35,n=1.2,s=null){this.fly={from:[...this.p],ry0:this.ry,t0:ud,dur:t,h:n,onArrive:s},this.slot=e}stick(e){this.slot=e,this.fly=null}kill(){this.alive=!1}},C0=new Le,I0=new wt,hd=new En,P0=new C,L0=new C,gh=[0,0,0];function D0(i){var e,t,n;ud=i;for(let s=_h.length-1;s>=0;s--){let r=_h[s];if(!r.alive){_h.splice(s,1);continue}let o=r.slot?r.slot():null;if(r.fly&&o){let c=Pn((i-r.fly.t0)/r.fly.dur);if(R0(gh,r.fly.from,o,r.fly.h,dt(c)*.35+c*.65),r.p[0]=gh[0],r.p[1]=gh[1],r.p[2]=gh[2],r.ry=Ot(r.fly.ry0,(e=o[3])!=null?e:0,c),r.rx=Math.sin(Math.PI*c)*.9*r.spin,c>=1){let h=r.fly.onArrive;r.fly=null,r.rx=0,h&&h(r)}}else o&&(r.p[0]=o[0],r.p[1]=o[1],r.p[2]=o[2],r.ry=(t=o[3])!=null?t:r.ry,r.rx=(n=o[4])!=null?n:0);if(!r.alive)continue;let a=r.pop>=0?Math.min(1,.2+.8*((i-r.pop)/.22)):1,l=r.scale*a;L0.set(r.p[0],r.p[1],r.p[2]),r.type==="fish"?hd.set(Math.PI/2+r.rx,r.ry,0,"YXZ"):hd.set(r.rx,r.ry,0,"YXZ"),I0.setFromEuler(hd),P0.set(l,l,l),C0.compose(L0,I0,P0),xh[r.type].push(C0)}for(let s in xh)xh[s].flush()}var ri=class{constructor(e,t,{cols:n=null,sway:s=null}={}){this.base=e,this.gap=t,this.items=[],this.cols=n,this.sway=s}get n(){return this.items.length}slot(e){return()=>{let t=this.base(),n=t[0],s=t[1],r=t[2],o=e;if(this.cols){let a=e%this.cols.length;o=Math.floor(e/this.cols.length),n+=this.cols[a][0],r+=this.cols[a][1]}if(s+=o*this.gap,this.sway){let a=Math.max(1,this.items.length),l=(o/Math.max(6,a))**1.6*Math.min(a,30)*this.gap*.55;n+=this.sway[0]*l,r+=this.sway[1]*l}return[n,s,r,t[3]||0]}}topPos(){return this.slot(this.items.length)()}add(e,t=.3,n=1,s=null){let r=this.items.length;return this.items.push(e),e.goto(this.slot(r),t,n,s),e}put(e){let t=this.items.length;return this.items.push(e),e.stick(this.slot(t)),e}pop(){return this.items.pop()}};var kd={};zh(kd,{G:()=>je,build:()=>Ud,chooseTarget:()=>Cg,emo:()=>us,heroFocus:()=>Uh,input:()=>un,route:()=>Od,state:()=>ks,update:()=>Bd,yOf:()=>Wa});var dd=new wt,U0=new wt,F0=new wt,O0=new wt,B0=new C;function re(i,e,t,n,s,r){let o=i.bones[e];if(!o||Math.abs(r)<1e-5)return;let a=i._actUndo||(i._actUndo=[]);a.some(l=>l[0]===o)||a.push([o,o.quaternion.clone()]),i.obj.getWorldQuaternion(F0),B0.set(t,n,s).normalize().applyQuaternion(F0),o.parent.getWorldQuaternion(dd),U0.setFromAxisAngle(B0,r),O0.copy(dd).invert(),o.quaternion.premultiply(O0.multiply(U0).multiply(dd))}var hn=(i,e,t,n,s)=>dt((i-e)/(t-e))*(1-dt((i-n)/(s-n))),oi=(i,e,t)=>{let n=(i-e)/t;return Math.abs(n)<1?.5+.5*Math.cos(Math.PI*n):0},it="Bip001-R-",Bt="Bip001-L-",Ds=(i,e,t,n)=>i<e?i>e-t?.5-.5*Math.cos(Math.PI*(i-e+t)/t):0:i<e+n?.5+.5*Math.cos(Math.PI*(i-e)/n):0,Eo={push:[[.38,.95],[.66,1.05]],push3:[[.33,.85],[.52,.95],[.71,1.15]]},pd=(i,e)=>{let t=0,n=0;for(let[s,r]of e)t+=r*Ds(i,s,.035,.085),n+=r*oi(i,s-.065,.035);return[t,n]},kt={s0:.14,s0p:.12,s0a:.06,s1:.24,s1p:.16,s1a:.1,ua:1.55,ul:.75,fa:1,fp:.8,hp:.04,hl:.6,sh0:.16,shh:.1,shd:.08,shr:.34,shl:.5,sl:.12,slh:-.12,bh:.3};function k0(i,e,t,n,s){let[r,o]=pd(e,n.map(([d])=>[d,1])),a=r*t,l=o*t,c=kt.s0*s+kt.s0p*a-kt.s0a*l,h=kt.s1*s+kt.s1p*a-kt.s1a*l,u=c+h;re(i,"Bip001-Spine",1,0,0,c),re(i,"Bip001-Spine1",1,0,0,h);let f=-(kt.ua*s+kt.ul*u);re(i,it+"UpperArm",1,0,0,f),re(i,Bt+"UpperArm",1,0,0,f),re(i,it+"UpperArm",0,1,0,.28*s),re(i,Bt+"UpperArm",0,1,0,-.28*s),re(i,it+"Forearm",1,0,0,-(kt.fa*s+.3*l-kt.fp*a)),re(i,Bt+"Forearm",1,0,0,-(kt.fa*s+.3*l-kt.fp*a)),re(i,it+"Clavicle",0,1,0,.2*a),re(i,Bt+"Clavicle",0,1,0,-.2*a),re(i,it+"Thigh",1,0,0,-.32*s),re(i,it+"Calf",1,0,0,.26*s),re(i,Bt+"Thigh",1,0,0,.14*a),re(i,Bt+"Calf",1,0,0,-.08*a),re(i,"Bip001-Head",1,0,0,kt.hp*a-.05*l-kt.hl*u)}var H0={raise:{D:1.3,fn(i,e,t){let n=hn(e,0,.22,.8,1)*t,s=(oi(e,.42,.11)+oi(e,.64,.11))*t;re(i,"Bip001-Spine1",1,0,0,.2*n),re(i,it+"UpperArm",0,0,1,-2.15*n-.3*s),re(i,it+"UpperArm",1,0,0,-.3*n),re(i,it+"Forearm",0,0,1,-(.2*n+1.1*s)),re(i,Bt+"UpperArm",0,0,1,.15*n),re(i,"Bip001-Head",1,0,0,-.2*n)}},wave:{D:1.2,fn(i,e,t){let n=hn(e,0,.2,.82,1)*t,s=Math.sin(2*Math.PI*3*Pn((e-.16)/.68))*dt(e/.25)*(1-dt((e-.75)/.2));re(i,"Bip001-Spine1",1,0,0,.16*n),re(i,it+"UpperArm",0,0,1,-2*n),re(i,it+"UpperArm",1,0,0,-.35*n),re(i,it+"Forearm",0,0,1,-.5*n+.75*s*t)}},bothUp:{D:1,fn(i,e,t){let n=hn(e,0,.2,.62,1)*t,s=.12*oi(e,.4,.22)*t;re(i,"Bip001-Spine1",1,0,0,-.1*n),re(i,it+"UpperArm",0,0,1,-2*n),re(i,Bt+"UpperArm",0,0,1,2*n),re(i,it+"Clavicle",0,0,1,-s),re(i,Bt+"Clavicle",0,0,1,s),re(i,it+"UpperArm",1,0,0,-.25*n),re(i,Bt+"UpperArm",1,0,0,-.25*n),re(i,it+"Forearm",0,0,1,-.35*n),re(i,Bt+"Forearm",0,0,1,.35*n)}},stomp:{D:1.1,fn(i,e,t){let n=hn(e,0,.12,.85,1)*t,s=(oi(e,.3,.17)+oi(e,.66,.17))*t;re(i,"Bip001-Spine1",1,0,0,.18*n),re(i,it+"Thigh",1,0,0,-1*s),re(i,it+"Calf",1,0,0,1.35*s),re(i,it+"UpperArm",0,0,1,.2*n),re(i,Bt+"UpperArm",0,0,1,-.2*n),re(i,it+"Forearm",1,0,0,-.5*n),re(i,Bt+"Forearm",1,0,0,-.5*n)}},shift:{D:1.6,fn(i,e,t){let n=hn(e,0,.15,.85,1)*t,s=Math.sin(2*Math.PI*e);re(i,"Bip001-Pelvis",0,0,1,.06*s*n),re(i,"Bip001-Spine",0,0,1,-.08*s*n),re(i,"Bip001-Head",0,1,0,.35*s*n)}},push:{D:1.5,fn(i,e,t){k0(i,e,t,Eo.push,hn(e,0,.16,.86,1)*t)}},push3:{D:1.7,fn(i,e,t){k0(i,e,t,Eo.push3,hn(e,0,.12,.88,1)*t)}},slap:{D:1.05,fn(i,e,t){let n=hn(e,0,.12,.86,1)*t,s=dt(e/.34)*(1-dt((e-.38)/.05)),r=Ds(e,.43,.03,.09),o=oi(e,.62,.08),a=Ds(e,.7,.03,.08),l=dt((e-.36)/.06)*(1-dt((e-.55)/.12)),c=dt((e-.62)/.06)*(1-dt((e-.82)/.1));re(i,"Bip001-Spine1",1,0,0,(.14*n+kt.sl*r+.18*a-.08*s)*t),re(i,"Bip001-Spine1",0,1,0,(.26*s-.16*r)*t),re(i,it+"UpperArm",0,0,1,-(2.35*s+.1*r)*t),re(i,it+"UpperArm",1,0,0,-(.3*s+1.75*l)*t),re(i,it+"UpperArm",0,1,0,.36*l*t),re(i,it+"Forearm",0,0,1,-(.7*s)*t),re(i,it+"Forearm",1,0,0,-(.35*s)*t),re(i,Bt+"UpperArm",0,0,1,1.2*o*(1-c)*t),re(i,Bt+"UpperArm",1,0,0,-(.25*o+1.55*c)*t),re(i,Bt+"UpperArm",0,1,0,-.3*c*t),re(i,it+"Thigh",1,0,0,-.2*n),re(i,"Bip001-Head",1,0,0,kt.slh*r*t)}},shoulder:{D:1.45,fn(i,e,t){let n=hn(e,0,.18,.8,1)*t,s=hn(e,.04,.22,.78,.95)*t,r=Ds(e,.42,.04,.1)*t,o=hn(e,.38,.46,.66,.8)*t,a=oi(e,.35,.04)*t;re(i,"Bip001-Pelvis",0,1,0,.4*n),re(i,"Bip001-Spine",0,1,0,.34*n),re(i,"Bip001-Spine1",1,0,0,kt.sh0*n+kt.shh*r+kt.shd*o-.1*a),re(i,"Bip001-Spine1",0,0,1,-kt.shr*(r+o)),re(i,"Bip001-Head",0,0,1,kt.shl*(r+o)),re(i,"Bip001-Head",1,0,0,-.5*kt.shl*(r+o)),re(i,Bt+"Thigh",1,0,0,-.65*s),re(i,Bt+"Calf",1,0,0,.4*s),re(i,it+"Thigh",1,0,0,.15*r),re(i,it+"Calf",1,0,0,-.1*r),re(i,Bt+"UpperArm",0,0,1,.5*n),re(i,Bt+"UpperArm",1,0,0,-.6*n),re(i,it+"UpperArm",0,0,1,.35*n),re(i,it+"Forearm",1,0,0,-.9*n)}},brace:{D:1.6,fn(i,e,t){let n=hn(e,0,.2,.82,1)*t,s=(.6+.4*Math.sin(e*Math.PI*6))*hn(e,.15,.3,.75,.9)*t;re(i,"Bip001-Spine",1,0,0,.14*n+.06*s),re(i,"Bip001-Spine1",1,0,0,.22*n+.08*s),re(i,it+"UpperArm",1,0,0,-1.4*n),re(i,Bt+"UpperArm",1,0,0,-1.4*n),re(i,it+"UpperArm",0,1,0,.4*n),re(i,Bt+"UpperArm",0,1,0,-.4*n),re(i,it+"Forearm",1,0,0,-(.8*n-.3*s)),re(i,Bt+"Forearm",1,0,0,-(.8*n-.3*s)),re(i,"Bip001-Head",1,0,0,-kt.bh*n)}}},pb={push:Eo.push,push3:Eo.push3,slap:[[.43,1.1],[.7,.7]],shoulder:[[.42,1.15]],brace:[[.3,.45],[.47,.5],[.63,.5]]},z0={push:i=>{let[e,t]=pd(i,Eo.push.map(([n])=>[n,1]));return[0,0,.035*hn(i,0,.16,.86,1)+.075*e-.03*t]},push3:i=>{let[e,t]=pd(i,Eo.push3.map(([n])=>[n,1]));return[0,0,.035*hn(i,0,.12,.88,1)+.075*e-.03*t]},slap:i=>[0,0,.055*Ds(i,.43,.03,.09)+.035*Ds(i,.7,.03,.08)-.02*oi(i,.3,.08)],shoulder:i=>[.04*Ds(i,.42,.04,.1),0,.07*hn(i,.04,.22,.78,.95)+.08*Ds(i,.42,.04,.1)],bothUp:i=>[0,.08*oi(i,.36,.2),0],stomp:i=>[0,-.025*(oi(i,.4,.07)+oi(i,.76,.07)),0],brace:i=>[0,0,.035*hn(i,0,.2,.82,1)]},mb=(i,e)=>z0[i]?z0[i](e):null;function gb(i){let e=i._actUndo;if(e){for(let[t,n]of e)t.quaternion.copy(n);i._actUndo=null}}function xb(i,e,t,n=1){let s=H0[e];!s||n<=0||s.fn(i,Pn(t),n)}function vh(i,e,t,n=0){return{c:i,s:null,next:n,pick:e,gap:t,hits:[]}}function yh(i,e,t,n=!0,s=1){gb(i.c),i.c.update(t);let r=[];if(!i.s&&n&&e>=i.next){let a=i.pick(),l=.85+.3*Math.random();i.s={a,t0:e,t1:e+H0[a].D/l},i.hits=(pb[a]||[]).map(([c,h])=>[i.s.t0+c*(i.s.t1-i.s.t0),h])}let o=null;if(i.s){let a=(e-i.s.t0)/(i.s.t1-i.s.t0);if(a>=1)i.s=null,i.next=e+i.gap();else for(xb(i.c,i.s.a,a,n?s:s*(1-dt(a))),o=mb(i.s.a,a);i.hits.length&&i.hits[0][0]<=e;)r.push(i.hits.shift()[1])}return{off:o,fired:r,a:i.s?i.s.a:null}}var V0=.155,G0=1.15,Mh=ie.plaza[3],_b=[[-4.565,-1.45],[2.1,4.174]],md=[28,29,30].map(i=>[-4.565,-.01,-2.54+i*((Mh+2.54)/35)]),W0="varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",X0=`precision highp float; uniform sampler2D tCol; uniform mat4 uVP; uniform vec3 uRef; uniform float uGlow; uniform vec2 uRes; uniform float uVig; varying vec3 vL;
void main(){
  vec4 c = uVP * vec4(uRef + vL * vec3(0.9, 0.99, 0.9), 1.0); vec2 uv = c.xy / c.w * 0.5 + 0.5;   // \u5F80\u5706\u5FC3\u6536\u4E00\u70B9\uFF0C\u8FB9\u4E0A\u4E0D\u91C7\u5230\u80CC\u540E\u7684\u96EA\u5730
  vec3 col = texture2D(tCol, uv).rgb;
  col = col + vec3(1.0, 0.165, 0.118) * 0.5 * uGlow;   // \u88AB\u63A8\u7684\u90A3\u4E00\u4E0B\u95EA\u7EA2\uFF08\u53E0\u52A0\uFF0C\u6728\u7EB9\u548C\u660E\u6697\u8FD8\u5728\uFF09
  vec2 d = gl_FragCoord.xy / uRes - 0.5; col *= 1.0 - uVig * smoothstep(0.35, 0.85, length(d * vec2(1.0, 1.25)));
  gl_FragColor = vec4(col, 1.0);
}`,xd=[],q0=[],gd=null,Y0=null;function K0(i,e){gd=i,Y0=e;let t=new oa(V0,V0,G0,14,1);t.translate(0,G0/2,0);let n=0;if(_b.forEach(([r,o],a)=>{let l=Math.max(1,Math.round((o-r)/.3));for(let c=0;c<=l;c++,n++){if(a===0&&c===0||a===1&&c===l)continue;let h=r+(o-r)*(c/l),u=new At({vertexShader:W0,fragmentShader:X0,uniforms:{tCol:Cs.uniforms.tCol,uVP:{value:Da},uRef:{value:new C(...md[n%md.length])},uGlow:{value:0},uRes:Mn.uRes,uVig:Mn.uVig}}),f=new ze(t,u);f.position.set(h,-.01,Mh),f.castShadow=!0,f.frustumCulled=!1,qe.add(f),Ti(f),xd.push({mesh:f,x:h,d:0,v:0,I:0})}}),hr.fencedbg)for(let r of md){let o=new At({vertexShader:W0,fragmentShader:X0,uniforms:{tCol:Cs.uniforms.tCol,uVP:{value:Da},uRef:{value:new C(...r)},uGlow:{value:+hr.fencedbg-1},uRes:Mn.uRes,uVig:{value:0}}}),a=new ze(t,o);a.position.set(...r),qe.add(a)}[-4.1,-3.5,-2.9,-2.3,-1.75,2.45,3.05,3.65].forEach((r,o)=>{let a=Ls(gd.cust,gd.custTex),l=[r+(Be(o*3.7)-.5)*.12,Mh+.55+(Be(o*5.1)-.5)*.06];a.obj.position.set(l[0],0,l[1]),a.face(Math.PI),a.play("idle",0,.9+.2*Be(o)),qe.add(a.obj),a.mixer.setTime(Be(o*9.1)*2);let c=0,h=()=>(c<=0&&(c=2+(Math.random()<.45?1:0)),c--,Math.random()<.12?Math.random()<.5?"raise":"bothUp":["push3","slap","shoulder","push3","slap","push","brace"][Math.floor(Math.random()*7)]),u=()=>c>0?.05+.2*Math.random():.6+.9*Math.random();q0.push({A:vh(a,h,u,.3+2.2*Be(o*4.7)),p:l})})}function Z0(i,e){for(let t of q0){let{off:n,fired:s}=yh(t.A,i,e),r=t.A.c,o=r.heading,a=t.p[0],l=0,c=t.p[1];n&&(a+=n[0]*Math.cos(o)+n[2]*Math.sin(o),l+=n[1],c+=-n[0]*Math.sin(o)+n[2]*Math.cos(o)),r.obj.position.set(a,l,c);for(let h of s){for(let u of xd){let f=Math.abs(u.x-t.p[0]);if(f>.5)continue;let d=Math.exp(-((f/.32)**2));u.v+=.95*h*d,u.I=Math.max(u.I,Math.min(1,h*d))}h>=.9&&Math.random()<.22&&Y0.push({kind:Math.random()<.5?"ang1":"ang0",p:[t.p[0],2.05,t.p[1]],t0:i,dur:1})}}for(let t of xd){let n=-70*t.d-10*t.v;t.v+=n*e,t.d+=t.v*e,t.I*=Math.exp(-e/.13),t.mesh.rotation.x=-1.25*t.d,t.mesh.position.z=Mh-.9*t.d,t.mesh.material.uniforms.uGlow.value=t.I}}var Us=(i,e,t)=>{let n=Rs(i,e),s=n.getContext("2d");t(s);let r=new gt(n);return r.colorSpace=ot,r.needsUpdate=!0,r.anisotropy=4,r},_r=(i,e)=>{let t=new ii(i,e);return t.rotateX(-Math.PI/2),t},vb={worker:i=>{i.fillStyle="#fff",i.beginPath(),i.arc(118,70,28,0,7),i.fill(),i.beginPath(),i.moveTo(58,160),i.bezierCurveTo(58,104,178,104,178,160),i.closePath(),i.fill(),_d(i,186,64,44,15)},conv:i=>{i.fillStyle="#fff",i.save(),i.transform(1,0,-.18,1,20,0);for(let e=0;e<4;e++)Zt(i,70+e*30,76,27,48,10),i.fill();i.restore(),Zt(i,60,124,134,32,16),i.fill(),i.save(),i.globalCompositeOperation="destination-out",i.fillRect(58,121,140,5);for(let e of[78,176])i.beginPath(),i.arc(e,140,7,0,7),i.fill();i.restore(),_d(i,188,44,44,15)},staff:i=>{i.fillStyle="#fff",i.beginPath(),i.arc(100,70,28,0,7),i.fill(),i.beginPath(),i.moveTo(40,160),i.bezierCurveTo(40,104,160,104,160,160),i.closePath(),i.fill();for(let e=0;e<4;e++)Zt(i,150,150-e*24,66,20,6),i.fill();_d(i,200,50,44,15)}};function _d(i,e,t,n=50,s=16){i.fillStyle="#fff",Zt(i,e-n/2,t-s/2,n,s,3),i.fill(),Zt(i,e-s/2,t-n/2,s,n,3),i.fill()}var yb={};function Mb(i){let e=Rs(256,256),t=e.getContext("2d");return vb[i](t),yb[i]=[30,30,230,180],e}function Sb(i,e,t,n,s){i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,320,320),i.translate(32,32),Zt(i,18,18,220,220,22),i.fillStyle="rgba(28,30,36,0.72)",i.fill(),n>0&&(i.save(),Zt(i,18,18,220,220,22),i.clip(),i.fillStyle="#1fff19",i.globalAlpha=.85,i.fillRect(0,238-220*n,256,220*n+2),i.restore());let r=s?1.12:1;i.save(),i.translate(128,128),i.scale(r,r),i.translate(-128,-128),i.strokeStyle=s?"#1fff19":"#ffffff",i.lineWidth=13/r,i.lineCap="round";for(let[m,g,p,T]of[[14,14,1,1],[242,14,-1,1],[14,242,1,-1],[242,242,-1,-1]])i.beginPath(),i.moveTo(m+p*40,g),i.lineTo(m+p*15,g),i.quadraticCurveTo(m,g,m,g+T*15),i.lineTo(m,g+T*40),i.stroke();i.restore();let o=vd[e];i.save(),i.translate(128,98);let a=Math.min(128/200,104/150);i.scale(a,a),i.translate(-130,-105),i.drawImage(o,0,0),i.restore();let l=56,c=21,h=9,u=String(t);i.font=`900 ${l}px "Arial Black", Arial, sans-serif`,i.textAlign="left",i.textBaseline="middle";let f=i.measureText(u).width,d=Math.min(1,150/(c*2+h+f));d<1&&(l*=d,c*=d,h*=d,i.font=`900 ${l}px "Arial Black", Arial, sans-serif`,f=i.measureText(u).width);let x=128-(c*2+h+f)/2;rh(i,x+c,193,c),i.lineWidth=7,i.strokeStyle="rgba(20,30,20,0.55)",i.lineJoin="round",i.strokeText(u,x+c*2+h,195),i.fillStyle="#ffffff",i.fillText(u,x+c*2+h,195)}var vd={},wh=class{constructor(e,t,n,s,r){vd[s]||(vd[s]=Mb(s)),this.id=e,this.c=t,this.price=n,this.left=n,this.icon=s,this.visible=!1,this.popT=-1,this.done=!1,this.on=!1,this.key="",this.cv=Rs(320,320),this.g=this.cv.getContext("2d"),this.tex=new gt(this.cv),this.tex.colorSpace=ot,this.tex.anisotropy=4,this.mesh=new ze(_r(1.45,1.45),new Kt({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),this.mesh.position.set(t[0],.035,t[1]),this.mesh.rotation.y=Math.atan2(-(r[0]-t[0]),-(r[1]-t[1])),this.mesh.renderOrder=3,this.mesh.visible=!1,qe.add(this.mesh),this.redraw()}redraw(){let e=Pn(1-this.left/this.price),t=`${this.left}_${Math.round(e*100)}_${this.on}`;t!==this.key&&(this.key=t,Sb(this.g,this.icon,this.left,e,this.on),this.tex.needsUpdate=!0)}show(e){this.visible||(this.visible=!0,this.popT=e)}update(e){if(this.mesh.visible=this.visible&&!this.done,!this.mesh.visible)return;this.redraw();let t=this.popT>=0?Math.max(.001,Sn((e-this.popT)/.32)):1;this.mesh.scale.setScalar(t*(this.on?1.04+.03*Math.sin(e*9):1))}},bb=Us(256,256,i=>{i.lineCap="round";for(let[e,t]of[[26,"rgba(16,24,32,0.42)"],[12,"#ffffff"]]){i.lineWidth=e,i.strokeStyle=t;for(let n=0;n<20;n++){let s=n/20*Math.PI*2;i.beginPath(),i.arc(128,128,112,s,s+Math.PI*2/20*.55),i.stroke()}}}),Eh=new ve("#ffffff"),yd=new ve("#1fff19"),Tb=new ve("#ff2a1a"),za=class{constructor(e,t,n=.035,s=null,r=null){this.c=e,this.R=t,this.v=0,this.on=0,this.spin=0,this.full=-9,this.t0=-1,this.ring=new ze(_r(2,2),new Kt({map:bb,transparent:!0,depthWrite:!1,color:Eh.clone()})),this.ring.position.set(e[0],n,e[1]),this.ring.renderOrder=4,qe.add(this.ring),s&&(this.icon=new ze(_r(1,1),new Kt({map:s,transparent:!0,depthWrite:!1})),this.icon.position.set(e[0],n+.005,e[1]),this.icon.renderOrder=5,r&&(this.icon.rotation.y=Math.atan2(-(r[0]-e[0]),-(r[1]-e[1]))),qe.add(this.icon))}update(e,t,n,s,r){let o=n?1:0;o&&this.t0<0&&(this.t0=e),this.v+=(o-this.v)*Math.min(1,t*8),this.on+=((s?1:0)-this.on)*Math.min(1,t*12);let a=this.v>.01;if(this.ring.visible=a,this.icon&&(this.icon.visible=a),!a)return;let l=Sn((e-this.t0)/.35),c=r?.5+.5*Math.sin(e*5.5):0;this.spin+=t*this.on*.7;let h=0,u=(e-this.full)/.36;if(u>=0&&u<2){let f=u%1;h=f<.65?Math.sin(Math.PI*f/.65):0}this.ring.rotation.y=this.spin,this.ring.scale.setScalar(this.R*(.6+.4*l)*(1+.06*c+.1*h)),this.ring.material.color.copy(Eh).lerp(yd,this.on).lerp(Tb,h),this.ring.material.opacity=this.v*Pn(l)*(.62+.38*Math.max(c,this.on,h)),this.icon&&(this.icon.scale.setScalar(this.R*.95*(.6+.4*l)),this.icon.material.opacity=this.v*Pn(l)*.92)}};function Sd(i){return Us(128,128,i)}var Ah=class{constructor(e){let t=e[1]-e[0],n=e[3]-e[2],s=Us(512,Math.round(512*n/t),o=>{let l=Math.round(512*n/t);o.lineWidth=16,o.strokeStyle="#fff",Zt(o,12,12,488,l-24,34),o.stroke()}),r=Us(256,128,o=>{Zt(o,8,8,240,112,20),o.fillStyle="#fff",o.fill()});this.frame=new ze(_r(t,n),new Kt({map:s,transparent:!0,depthWrite:!1,color:Eh.clone(),opacity:.9})),this.fill=new ze(_r(t,n),new Kt({map:r,transparent:!0,depthWrite:!1,color:yd.clone(),opacity:0}));for(let o of[this.fill,this.frame])o.position.set((e[0]+e[1])/2,.035,(e[2]+e[3])/2),o.renderOrder=3,qe.add(o);this.on=0}update(e,t){this.on+=((t?1:0)-this.on)*Math.min(1,e*10),this.frame.material.color.copy(Eh).lerp(yd,this.on),this.fill.material.opacity=.22*this.on}},Md=new At({uniforms:{uT:{value:0},uA:{value:0},uC:{value:new ve("#fff0b8")}},vertexShader:"varying vec2 vU; void main(){ vU = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uT, uA; uniform vec3 uC; varying vec2 vU;
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
}`,transparent:!0,depthWrite:!1}),cs=new ze(_r(2,2),Md);cs.renderOrder=4;cs.visible=!1;var J0="",$0=0,Sh=0;function j0(i,e,t,n){var l;let s=t?t.kind==="tile"?1.15:t.kind==="fish"?1.3:.9:0,r=t?t.kind+(t.kind==="fish"?"":t.p[0].toFixed(1)+t.p[1].toFixed(1)):"";r&&r!==J0&&(J0=r,$0=i);let o=t&&Math.hypot(t.p[0]-n[0],t.p[1]-n[1])<Math.max(.8,s*.9);if(Sh+=((t&&!o?1:0)-Sh)*Math.min(1,e*10),Sh<.01){cs.visible=!1;return}let a=Sn((i-$0)/.3);t&&(cs.position.set(t.p[0],((l=t.y)!=null?l:0)+.04,t.p[1]),cs.userData.R=s),cs.scale.setScalar((cs.userData.R||1)*(.6+.4*a)),Md.uniforms.uT.value=i,Md.uniforms.uA.value=Sh*Pn(a),cs.visible=!0}var Ha=90,nA=.18*.6/.46*.6,Q0=new Float32Array(Ha*2*3),eg=new Float32Array(Ha*2*2),Ro=new xt;Ro.setAttribute("position",new tt(Q0,3).setUsage(Hi));Ro.setAttribute("aU",new tt(eg,2).setUsage(Hi));{let i=[];for(let e=0;e<Ha-1;e++){let t=e*2;i.push(t,t+1,t+2,t+1,t+3,t+2)}Ro.setIndex(i)}var Ao=new At({uniforms:{uTime:{value:0},uS0:{value:0},uS1:{value:1},uA:{value:0},uC:{value:new ve("#ffd23f")},uO:{value:new ve("#5a3200")}},vertexShader:"attribute vec2 aU; varying vec2 vU; void main(){ vU = aU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uTime, uS0, uS1, uA; uniform vec3 uC, uO; varying vec2 vU;
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
}`,transparent:!0,depthWrite:!1,side:cn}),xr=new ze(Ro,Ao);xr.frustumCulled=!1;xr.renderOrder=4;xr.visible=!1;var wb=i=>{for(let e=0;e<2&&i.length>2;e++){let t=[i[0]];for(let n=0;n<i.length-1;n++){let[s,r]=i[n],[o,a]=i[n+1];n>0&&t.push([s*.75+o*.25,r*.75+a*.25]),n<i.length-2&&t.push([s*.25+o*.75,r*.25+a*.75])}t.push(i[i.length-1]),i=t}return i},bh=0;function tg(i,e,t,n,s){if(bh+=((s&&t&&t.length>1?1:0)-bh)*Math.min(1,e*8),bh<.01||!t||t.length<2){xr.visible=!1;return}let r=wb(t),o=[0];for(let u=1;u<r.length;u++)o.push(o[u-1]+Math.hypot(r[u][0]-r[u-1][0],r[u][1]-r[u-1][1]));let a=o[o.length-1];if(a<1.2){xr.visible=!1;return}let l=.42,c=1/(2*l),h=0;for(let u=0;u<Ha;u++){let f=Math.min(a,u/(Ha-1)*a);for(;h<o.length-2&&o[h+1]<f;)h++;let d=r[h],x=r[h+1],m=(f-o[h])/Math.max(1e-6,o[h+1]-o[h]),g=Ot(d[0],x[0],m),p=Ot(d[1],x[1],m),T=x[0]-d[0],R=x[1]-d[1],M=Math.hypot(T,R)||1,S=-R/M,b=T/M,A=n(g,p)+.03;Q0.set([g+S*l,A,p+b*l,g-S*l,A,p-b*l],u*6),eg.set([f*c,.5,f*c,-.5],u*4)}Ro.attributes.position.needsUpdate=!0,Ro.attributes.aU.needsUpdate=!0,Object.assign(Ao.uniforms,{}),Ao.uniforms.uTime.value=i,Ao.uniforms.uS0.value=.9*c,Ao.uniforms.uS1.value=(a-.6)*c,Ao.uniforms.uA.value=bh*.95,xr.visible=!0}var bd=new ra(1,40,-.95,1.9);bd.rotateX(-Math.PI/2);bd.rotateY(-Math.PI/2);var Eb=new At({uniforms:{uA:{value:0},uT:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uA, uT; varying vec2 vP;
void main(){ float r = length(vP); float edge = smoothstep(0.86, 0.97, r) * (1.0 - smoothstep(0.97, 1.0, r));
  float rip = 0.5 + 0.5 * sin(r * 24.0 - uT * 7.0);
  float a = (0.26 + 0.18 * rip * smoothstep(0.15, 0.9, r) + 0.45 * edge) * uA;
  gl_FragColor = vec4(vec3(0.62, 0.17, 0.18) + edge * 0.25, a);
#include <colorspace_fragment>
}`,transparent:!0,depthWrite:!1,side:cn});function Td(){let i=new ze(bd,Eb.clone());return i.renderOrder=6,i.visible=!1,qe.add(i),i}var Ab=Us(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,62);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,240,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)}),Rb=Us(128,128,i=>{for(let e=0;e<7;e++){let t=64+Math.cos(e*.9)*22,n=64+Math.sin(e*1.7)*18,s=26+e%3*6,r=i.createRadialGradient(t,n,0,t,n,s);r.addColorStop(0,"rgba(255,255,255,0.85)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.beginPath(),i.arc(t,n,s,0,7),i.fill()}}),Cb=Us(128,128,i=>{i.strokeStyle="rgba(255,255,255,0.95)",i.lineWidth=9,i.beginPath(),i.arc(64,64,52,0,7),i.stroke(),i.lineWidth=4,i.beginPath(),i.arc(64,64,38,0,7),i.stroke()}),Ib=Us(64,256,i=>{let e=i.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.6,"rgba(255,250,220,0.7)"),e.addColorStop(1,"rgba(255,255,255,0.95)"),i.fillStyle=e;let t=i.createLinearGradient(0,0,64,0);i.fillRect(0,0,64,256),i.globalCompositeOperation="destination-in",t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(.5,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,64,256)}),Th=[],Pb=new ii(1,1);function ka(i,e,t,n={}){let s=i==="glow"?Ab:i==="puff"?Rb:i==="pillar"?Ib:Cb,r=new ze(i==="splash"?_r(1,1):Pb,new Kt({map:s,transparent:!0,depthWrite:!1,depthTest:i!=="glow",blending:i==="puff"?Ts:_a}));r.renderOrder=8,r.position.set(e[0],e[1],e[2]),qe.add(r),Th.push({m:r,kind:i,t0:t,dur:n.dur||(i==="puff"?.55:i==="pillar"?.9:.6),size:n.size||1,p:[...e]})}var ng=(i,e)=>{ka("glow",[i[0],.6,i[1]],e,{size:4.2,dur:.55}),ka("pillar",[i[0],2,i[1]],e,{size:1.6,dur:.9}),ka("splash",[i[0],.06,i[1]],e,{size:3.2,dur:.6})},ig=(i,e,t=.7)=>ka("puff",i,e,{size:t}),Rh=(i,e,t=1.6)=>ka("splash",[i[0],-.22+.04,i[1]],e,{size:t,dur:.7});function sg(i){for(let e=Th.length-1;e>=0;e--){let t=Th[e],n=(i-t.t0)/t.dur;if(n>=1){qe.remove(t.m),t.m.material.dispose(),Th.splice(e,1);continue}t.kind!=="splash"&&t.m.quaternion.copy(yn.quaternion),t.kind==="glow"?(t.m.scale.setScalar(t.size*(.4+.8*dt(n))),t.m.material.opacity=1-n):t.kind==="pillar"?(t.m.scale.set(t.size*(1-.6*n),t.size*3.2,1),t.m.material.opacity=Math.sin(Math.PI*Math.min(1,n*1.3))):t.kind==="puff"?(t.m.scale.setScalar(t.size*(.5+.9*n)),t.m.position.y=t.p[1]+n*.5,t.m.material.opacity=.8*(1-n)):(t.m.scale.setScalar(t.size*(.3+.9*dt(n))),t.m.material.opacity=.9*(1-n))}}function rg(){qe.add(cs,xr)}function og(i=720){let e=new Float32Array(i*3);for(let r=0;r<i*3;r++)e[r]=Math.random();let t=new xt;t.setAttribute("position",new tt(new Float32Array(i*3),3)),t.setAttribute("aSeed",new tt(e,3)),t.boundingSphere=new on(new C,1e9);let n=new At({uniforms:{uT:{value:0},uC:{value:new C},uBox:{value:new C(16,9,30)},uPx:{value:1}},vertexShader:`attribute vec3 aSeed; uniform float uT; uniform vec3 uC; uniform vec3 uBox; uniform float uPx; varying float vA;
void main(){
  vec3 p = aSeed * uBox; float sp = 0.7 + aSeed.x * 0.7;
  p.y -= uT * sp; p.x += sin(uT * 0.8 + aSeed.z * 30.0) * 0.35 + uT * 0.22; p.z += cos(uT * 0.6 + aSeed.y * 20.0) * 0.25 + uT * 0.08;
  vec3 w; w.xz = uC.xz + mod(p.xz - uC.xz + uBox.xz * 0.5, uBox.xz) - uBox.xz * 0.5; w.y = mod(p.y, uBox.y) - 0.3;
  vA = 0.5 + 0.5 * aSeed.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
  gl_PointSize = (2.6 + aSeed.z * 4.4) * uPx;
}`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.15, length(d)) * vA; if (a < 0.01) discard; gl_FragColor = vec4(vec3(1.0), a); }",transparent:!0,depthWrite:!1}),s=new er(t,n);return s.frustumCulled=!1,s.renderOrder=9,qe.add(s),{p:s,update(r,o,a){n.uniforms.uT.value=r,n.uniforms.uC.value.set(o[0],0,o[1]),n.uniforms.uPx.value=a}}}var Dt=null,Ad=null,Ch=null,Rd=null,ag={},Io=null,Va=null,Co=null,Lb=!1,wd={},Ed=i=>new Promise((e,t)=>{try{let n=Dt.decodeAudioData(i,e,t);n&&n.then&&n.then(e,t)}catch(n){t(n)}});async function lg(i="assets/audio/"){if(Dt=h0(),!!Dt){Io=Dt.createGain(),Io.gain.value=.9,Io.connect(Dt.destination);try{Co=await Kc(i+"audio.json"),ag=Co.clips;let[e,t,n]=await Promise.all([_o(i+"sfx.mp3"),_o(i+"bgm.mp3"),_o(i+"endcard.mp3")]);[Ad,Ch,Rd]=await Promise.all([Ed(e),Ed(t),Ed(n)])}catch(e){console.warn("audio load",e)}Zc(()=>{try{Dt.resume&&Dt.resume()}catch(e){}},()=>{try{Dt.suspend&&Dt.suspend()}catch(e){}})}}function cg(){try{Dt&&Dt.state==="suspended"&&Dt.resume()}catch(i){}}function Jt(i,{vol:e=1,gap:t=.04,rate:n=1}={}){if(!Dt||!Ad||Lb)return;let s=ag[i];if(!s)return;let r=Dt.currentTime;if(!(wd[i]!==void 0&&r-wd[i]<t)){wd[i]=r;try{let o=Dt.createBufferSource();o.buffer=Ad,o.playbackRate.value=n;let a=Dt.createGain();a.gain.value=e,o.connect(a),a.connect(Io),o.start(0,s[0],s[1])}catch(o){}}}function hg(i=.42){if(!(!Dt||!Ch||Va))try{let e=Dt.createBufferSource();e.buffer=Ch,e.loop=!0,Co&&Co.loop&&(e.loopStart=Co.loop[0],e.loopEnd=Math.min(Ch.duration,Co.loop[1]));let t=Dt.createGain();t.gain.value=i,e.connect(t),t.connect(Io),e.start(0),Va={s:e,g:t}}catch(e){}}function ug(){if(Dt){try{Va&&(Va.g.gain.setTargetAtTime(0,Dt.currentTime,.15),Va.s.stop(Dt.currentTime+.8))}catch(i){}try{if(Rd){let i=Dt.createBufferSource();i.buffer=Rd;let e=Dt.createGain();e.gain.value=.8,i.connect(e),e.connect(Io),i.start(0)}}catch(i){}}}var je={t:0,ended:!1,endT:1/0,endAt:1/0,unlocked:{},served:0,firstCatch:!1},Nb=.045,Db=[.64,-6.4],Ub=1.1,_g=-.22-.72;function vg(i,e,t){i.tilt.rotation.x+=((e?Ub:0)-i.tilt.rotation.x)*Math.min(1,t*8)}var Nd=(i,e)=>wo([i,e],ie.walk.pier),Dd=(i,e)=>!Nd(i,e)&&e<-2.9,Wa=(i,e)=>Dd(i,e)?-.22:Nd(i,e)?Nb:.02,fg=i=>Nd(i[0],i[1])?1:i[1]<-2.9?0:2,Nh=i=>[Math.sin(i),Math.cos(i)],Hn=null,Ue,Vn,hs=null,Os=null,Ai,jn,ai,li=null,Lo=null,yr=null,Bs={},Dh={},yg,Fs,vr,No=[],zn={n:0,mesh:null,pos:[],heads:[]},Gn={n:0,mesh:null,f:[]},Po=[],Ga=[],us=[];function Ud(i,e){Hn=i,Ue={c:Ls(Hn.hero,Hn.heroTex),p:[...ie.start],v:[0,0],vel:[0,0],heading:Math.PI*.85,inWater:!1,sway:[0,0],nx:{},full:-9,divedT:-9},Ue.c.play("idle"),qe.add(Ue.c.obj);let t=()=>Ue.inWater?-.22+.12:.88,n=()=>Ue.inWater?-.02:.32;Ue.fish=new ri(()=>{let h=Nh(Ue.heading),u=n();return[Ue.p[0]-h[0]*u,t(),Ue.p[1]-h[1]*u,Ue.heading]},Ei.fish.thick,{sway:Ue.sway}),Ue.hold=[.45,.8],Ue.pack=new ri(()=>Mg(Ue),Ei.pack.h,{sway:Ue.sway}),Ue.cash=new ri(()=>{let h=Nh(Ue.heading),u=n()+(Ue.fish.n?.38:0);return[Ue.p[0]-h[0]*u,t(),Ue.p[1]-h[1]*u,Ue.heading]},Ei.cash.h*1.02,{sway:Ue.sway}),Vn=Ls(Hn.chef,Hn.chefTex),Vn.obj.position.set(ie.chef[0],0,ie.chef[1]),Vn.face(-Math.PI/2),Vn.play("idle"),qe.add(Vn.obj),Vn.busy=0;let s=ie.table.top;Ai=new ri(()=>[ie.intake[0],s,ie.intake[1],Math.PI/2],Ei.fish.thick),jn=new ri(()=>[ie.outStack[0][0],s,ie.outStack[0][1],Math.PI/2],Ei.pack.h,{cols:[[0,0],[0,ie.outStack[1][1]-ie.outStack[0][1]]]});let r=ie.cashStrip[0],o=ie.cashStrip[1],a=(ie.cashStrip[2]+ie.cashStrip[3])/2;ai=new ri(()=>[r,.06,a,0],Ei.cash.h,{cols:[0,1,2].map(h=>[(o-r)*(h/2),0]).concat([0,1,2].map(h=>[(o-r)*(h/2),.32]))});for(let h of ur){let u=ie.pads[h];Bs[h]=new wh(h,u.c,u.price,u.icon,[u.c[0]-.5,u.c[1]-.866])}Bs.hire.show(0);let l=Sd(h=>{h.save(),h.translate(64,64),h.rotate(-.4),h.fillStyle="rgba(255,255,255,0.75)",h.beginPath(),h.ellipse(0,0,40,16,0,0,7),h.fill(),h.beginPath(),h.moveTo(34,0),h.lineTo(56,-16),h.lineTo(56,16),h.closePath(),h.fill(),h.restore()}),c=Sd(h=>{h.globalAlpha=.85,h.drawImage(e.packIconImg,14,14,100,100)});Dh.drop=new za(ie.dropSpot,.85,.035,l,ie.intake),Dh.pick=new za(ie.pickSpot,.85,.035,c,ie.outStack[0]),yg=new Ah(ie.stand),Fs=Td(),vr=Td();for(let h=0;h<ie.front.length;h++)No.push(bg(h,0,!0));Bb(e),K0(Hn,us),kb(e)}var Ih=[0,0,0];function Mg(i){let e=Nh(i.heading);return[i.p[0]+e[0]*i.hold[0],i.c.obj.position.y+i.hold[1],i.p[1]+e[1]*i.hold[0],i.heading]}function Sg(i,e){if(!i.c.hands(Ih))return;let t=Nh(i.heading),n=(Ih[0]-i.p[0])*t[0]+(Ih[2]-i.p[1])*t[1],s=Math.max(.42,n+.06),r=Ih[1]-i.c.obj.position.y-Ei.pack.h*.7,o=Math.min(1,e*18);i.hold[0]+=(s-i.hold[0])*o,i.hold[1]+=(Math.max(.35,r)-i.hold[1])*o}function bg(i,e,t=!1){let n=Ls(Hn.cust,Hn.custTex),s=ie.front[i],r={c:n,i,need:He.need[0]+Math.floor(Be(i*7.3+e*3.1)*(He.need[1]-He.need[0]+1)),got:0,inFly:0,state:t?"wait":"enter",t0:e,lastGot:-9,p:t?[s[0],s[1]]:[s[0]+(Be(e)-.5)*.8,s[1]+1.4],head:null};r.head=new ri(()=>[r.p[0],1.48,r.p[1],Math.PI/2],Ei.pack.h*.95),n.obj.position.set(r.p[0],0,r.p[1]),n.face(Math.PI),n.play(t?"idle":"walk"),qe.add(n.obj);let o=["raise","wave","bothUp","stomp","raise","shift","wave"];return r.act=vh(n,()=>o[Math.floor(Math.random()*o.length)],()=>.5+1.4*Math.random(),e+.4+1.2*Be(i*2.9+e)),r}function Fb(i,e){for(let t=0;t<No.length;t++){let n=No[t],s=ie.front[t];if(n.state==="enter"){let c=Pn((i-n.t0)/.7);n.p[0]=Ot(n.p[0],s[0],Math.min(1,e*6)),n.p[1]=Ot(s[1]+1.4,s[1],dt(c)),c>=1&&(n.state="wait",n.c.play("idle"))}else if(n.state==="wait")n.got>=n.need&&n.inFly===0&&(n.state="done",n.t0=i,Jt("served",{vol:.7}),je.served++,kn(2003));else if(n.state==="done")n.c.anim!=="cheer"&&n.c.play("cheer",.15,1.3),i-n.t0>.95&&(n.state="leave",n.t0=i,n.c.play("walk"));else if(n.state==="leave"){let c=i-n.t0;if(n.c.face(0,Math.min(1,e*8)),n.p[1]+=e*2,c>1.5){qe.remove(n.c.obj);for(let h of n.head.items)h.kill();No[t]=bg(t,i);continue}}let{off:r}=yh(n.act,i,e,n.state==="wait"),o=0,a=0,l=0;if(r){let c=n.c.heading;o=r[0]*Math.cos(c)+r[2]*Math.sin(c),a=r[1],l=-r[0]*Math.sin(c)+r[2]*Math.cos(c)}n.c.obj.position.set(n.p[0]+o,a,n.p[1]+l)}}var Ob=()=>{let i=null;for(let e of No)e.state==="wait"&&e.got+e.inFly<e.need&&(!i||e.i<i.i)&&(i=e);return i};function Bb(i){let e=[];Hn.crowd.scene.traverse(d=>{d.isMesh&&e.push([fd(d),d.material])}),e.sort((d,x)=>(d[1].name.includes("eye")?1:0)-(x[1].name.includes("eye")?1:0));for(let[d]of e)for(let x of Object.keys(d.attributes))["position","normal","uv"].includes(x)||d.deleteAttribute(x);let t=m0(e.map(d=>d[0]),!0),s=e.map(d=>d[1]).map(d=>{let x=In(new ln({map:d.name.includes("eye")?i.custEye:i.cust})),m=x.onBeforeCompile;x.onBeforeCompile=(p,T)=>{m(p,T),p.uniforms.uT=Fd,p.vertexShader=p.vertexShader.replace("void main() {",`uniform float uT;
void main() {`).replace("#include <begin_vertex>",`#include <begin_vertex>
  { float ph = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    transformed.y *= 1.0 + 0.016 * sin(uT * 2.6 + ph);
    transformed.x += sin(uT * 1.6 + ph) * 0.035 * transformed.y; transformed.z += cos(uT * 1.3 + ph * 1.7) * 0.02 * transformed.y; }`)};let g=x.customProgramCacheKey();return x.customProgramCacheKey=()=>g+"|crowd",x}),r=ie.crowd,o=.7,a=[];for(let d=r.z0;d<r.z1;d+=o*.9)for(let x=r.x0;x<r.x1;x+=o){let m=a.length;a.push([x+(Be(m*1.7)-.5)*.36+Math.round((d-r.z0)/o)%2*o/2,d+(Be(m*3.1)-.5)*.3])}zn.n=a.length,zn.mesh=new Ui(t,s,zn.n),zn.mesh.castShadow=!0,zn.mesh.frustumCulled=!1;let l=new Le,c=new wt,h=new C,u=new C,f=new ve;a.forEach((d,x)=>{c.setFromAxisAngle(new C(0,1,0),Math.PI+(Be(x*5.7)-.5)*.9);let m=.94+Be(x*9.1)*.12;h.set(m,m,m),u.set(d[0],0,d[1]),l.compose(u,c,h),zn.mesh.setMatrixAt(x,l),f.setRGB(.88+Be(x*2.3)*.2,.88+Be(x*4.1)*.18,.86+Be(x*6.7)*.2),zn.mesh.setColorAt(x,f),zn.pos.push(d),zn.heads.push([d[0],1.42*m,d[1]])}),qe.add(zn.mesh),Ti(zn.mesh)}var Fd={value:0};function kb(i){let e=Hn.fishGeo,t=new ln({map:i.fish});t.onBeforeCompile=s=>{s.uniforms.uT=Fd,s.vertexShader=s.vertexShader.replace("void main() {",`uniform float uT;
void main() {`).replace("#include <begin_vertex>",`#include <begin_vertex>
  { float ph = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    float tail = smoothstep(0.35, -0.55, transformed.x); transformed.z += sin(transformed.x * 4.5 - uT * 11.0 + ph) * 0.11 * tail; }`),s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight = mix(outgoingLight * vec3(0.7, 0.86, 0.95), vec3(0.04, 0.2, 0.27), 0.5);
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>"school",Gn.mesh=new Ui(e,t,He.fishN),Gn.mesh.renderOrder=-5,Gn.mesh.frustumCulled=!1,Gn.mesh.castShadow=!1;let n=ie.pondRect;for(let s=0;s<He.fishN;s++)Gn.f.push({x:Ot(n[0],n[1],Be(s*1.3)),z:Ot(n[2],n[3],Be(s*2.9)),h:Be(s*4.4)*6.28,sp:.8+Be(s*7.1)*.8,tx:0,tz:0,tt:-1,alive:!0,back:0,y:-.22-.32-Be(s)*.2,s:(.85+Be(s*3.3)*.3)*.72});qe.add(Gn.mesh)}var dg=new Le,pg=new wt,mg=new C,gg=new C,xg=new En;function zb(i,e){let t=ie.pondRect,n=0;for(let s=0;s<Gn.f.length;s++){let r=Gn.f[s];if(!r.alive)if(i>r.back)r.alive=!0,r.x=Be(i+s)<.5?t[0]+.2:t[1]-.2,r.z=Ot(t[2],t[3],Be(i*3+s));else continue;i>r.tt&&(r.tx=Ot(t[0]+.3,t[1]-.3,Be(s*3.7+Math.floor(i/3)*1.9)),r.tz=Ot(t[2]+.3,t[3]-.2,Be(s*5.1+Math.floor(i/3)*2.3)),r.tt=i+2+Be(s+i)*2.5);let o=r.tx-r.x,a=r.tz-r.z;for(let c of Hb()){let h=r.x-c[0],u=r.z-c[1],f=Math.hypot(h,u);f<1.4&&(o+=h/f*2.2,a+=u/f*2.2)}let l=Math.atan2(o,a);r.h+=Ns(l-r.h)*Math.min(1,e*2.2),r.x+=Math.sin(r.h)*r.sp*e,r.z+=Math.cos(r.h)*r.sp*e,r.x=Math.min(t[1],Math.max(t[0],r.x)),r.z=Math.min(t[3],Math.max(t[2],r.z)),xg.set(0,r.h-Math.PI/2,0),pg.setFromEuler(xg),gg.set(r.x,r.y,r.z),mg.setScalar(r.s),dg.compose(gg,pg,mg),Gn.mesh.setMatrixAt(n++,dg),r.slot=n-1}Gn.mesh.count=n,Gn.mesh.instanceMatrix.needsUpdate=!0}var Hb=()=>{let i=[];return Ue.inWater&&i.push(Ue.p),hs&&hs.inWater&&i.push(hs.p),i};function Tg(i,e,t,n){let s=null,r=1e9;for(let o of Gn.f){if(!o.alive)continue;let a=o.x-i[0],l=o.z-i[1],c=Math.hypot(a,l);c>t||c<.2||Math.abs(Ns(Math.atan2(a,l)-e))>n/2||c<r&&(r=c,s=o)}return s}function wg(i,e){return i.alive=!1,i.back=e+2.5+Be(e)*2,new gr("fish",[i.x,i.y+.2,i.z],{ry:i.h-Math.PI/2})}var Vb=()=>{let i=[ie.tableBlock];return Lo&&i.push([ie.frame[0]-.75,ie.frame[0]+.75,ie.frame[1]-.6,ie.frame[1]+.6]),yr&&i.push([ie.belt[0][0]-.38,ie.belt[0][0]+.38,ie.belt[0][1],ie.belt[1][1]]),i},Lh=i=>{for(let e of Object.values(ie.walk))if(wo(i,e))return!0;return!1};function Ph(i){if(!Lh(i))return!1;for(let e of Vb())if(wo(i,e))return!1;return!0}function Id(i,e,t,n){let s=i.p[0]+e*n,r=i.p[1]+t*n;if(!Ph(i.p)){Lh([s,r])?(i.p[0]=s,i.p[1]=r):Lh([s,i.p[1]])?i.p[0]=s:Lh([i.p[0],r])&&(i.p[1]=r);return}Ph([s,r])?(i.p[0]=s,i.p[1]=r):Ph([s,i.p[1]])?i.p[0]=s:Ph([i.p[0],r])&&(i.p[1]=r)}function Od(i,e){let t=fg(i),n=fg(e),s=ie.gateX,r=[];return t<n?(t===0&&r.push([s,-4.6]),n===2&&r.push([s,-2.45])):t>n&&(t===2&&r.push([s,-2.7]),n===0&&r.push([s,-4.98])),r.push(e),r}function Pd(i,e,t,n,s=.12){let r=Od(i.p,e),o=r[0],a=wi(i.p,o),l=r.length===1;if(l&&a<s)return!1;let c=l?Math.min(1,a/Math.max(.05,t*n)):1,h=(o[0]-i.p[0])/a*t*c,u=(o[1]-i.p[1])/a*t*c;return Id(i,h,u,n),!0}var un={vx:0,vz:0,active:!1};function Eg(){return{fish:He.heroFishCap[je.unlocked.hire?1:0],pack:He.meatCap[je.unlocked.belt?2:je.unlocked.hire?1:0]}}function Gb(i,e,t){let n=Ue,s=n.inWater?He.swim:n.fish.n||n.pack.n?He.walkCarry:He.walk,r=!1;if(je.ended)n.vel=[0,0];else if(un.active){let d=Math.hypot(un.vx,un.vz);if(d>.05){let x=un.vx/d*s*Math.min(1,d),m=un.vz/d*s*Math.min(1,d),g=[...n.p];Id(n,x,m,e),n.vel=[(n.p[0]-g[0])/e,(n.p[1]-g[1])/e],r=Math.hypot(...n.vel)>.3,r?n.heading=n.heading+Ns(Math.atan2(x,m)-n.heading)*Math.min(1,e*14):n.vel=[x*0,m*0]}else n.vel=[0,0]}else if(t&&je.target){let d=[...n.p],x=je.target;if(x.kind==="fish"&&n.inWater){let m=Ag(n.p);if(m){let g=Math.hypot(m.x-n.p[0],m.z-n.p[1]);if(g>1.3){let p=(m.x-n.p[0])/g*s*.75,T=(m.z-n.p[1])/g*s*.75;Id(n,p,T,e)}else n.heading+=Ns(Math.atan2(m.x-n.p[0],m.z-n.p[1])-n.heading)*Math.min(1,e*5)}}else Pd(n,x.p,s,e,x.r||.15);n.vel=[(n.p[0]-d[0])/e,(n.p[1]-d[1])/e],r=Math.hypot(...n.vel)>.3,r&&(n.heading+=Ns(Math.atan2(n.vel[0],n.vel[1])-n.heading)*Math.min(1,e*12))}let o=n.inWater;n.inWater=Dd(n.p[0],n.p[1]),n.inWater&&!o&&(Rh(n.p,i,2),Jt("wet",{vol:.8}),n.divedT=i,kn(2004)),!n.inWater&&o&&(Rh(n.p,i,1.4),Jt("wet",{vol:.5}));let a=-n.vel[0]*.07,l=-n.vel[1]*.07;n.sway[0]+=(a-n.sway[0])*Math.min(1,e*6),n.sway[1]+=(l-n.sway[1])*Math.min(1,e*6);let c=n.pack.n>0;n.c.play(n.inWater?"swim":r?c?"carry":"run":c?"carryIdle":"idle",.15,n.inWater?1.2:1);let h=n.inWater?_g:Wa(n.p[0],n.p[1]);vg(n.c,n.inWater,e),n.c.obj.position.set(n.p[0],Ot(n.c.obj.position.y,h,Math.min(1,e*12)),n.p[1]),n.c.obj.rotation.y=n.heading,n.c.update(e),Sg(n,e);let u=Eg();if(Fs.visible=n.inWater&&!je.ended,Fs.visible){let d=Math.sin(i*2.4)*.3,x=He.netR;if(Fs.position.set(n.p[0],-.22+.07,n.p[1]),Fs.rotation.y=n.heading+d,Fs.scale.setScalar(x),Fs.material.uniforms.uA.value=n.fish.n<u.fish?1:.35,Fs.material.uniforms.uT.value=i,n.fish.n<u.fish&&n.pack.n===0&&i>=(n.nx.catch||0)&&i-n.divedT>.35){let m=Tg(n.p,n.heading+d,x,He.netAng);if(m){let g=wg(m,i);n.fish.add(g,.42,1.5),n.nx.catch=i+He.catchDt,Jt("pop",{vol:.55,gap:.05,rate:.9+.2*Be(i)}),je.firstCatch||(je.firstCatch=!0,kn(2002))}}n.fish.n>=u.fish&&Cd(i)}if(n.fish.n&&wi(n.p,ie.dropSpot)<.95&&i>=(n.nx.drop||0)){let d=n.fish.pop();Ai.add(d,.3,.9,()=>Jt("wet",{vol:.35,gap:.05})),n.nx.drop=i+He.dropDt}if(!n.fish.n&&wi(n.p,ie.pickSpot)<.95&&jn.n&&n.pack.n<u.pack&&i>=(n.nx.pick||0)){let d=jn.pop();n.pack.add(d,.28,.9),n.nx.pick=i+He.pickDt,Jt("drop",{vol:.5,gap:.05}),n.pack.n>=u.pack&&Cd(i)}if(li&&!je.unlocked.belt&&!n.pack.n&&wi(n.p,ie.frame)<1.7&&li.n&&n.fish.n<u.fish&&i>=(n.nx.frame||0)){let d=li.pop();n.fish.add(d,.3,1),n.nx.frame=i+He.pickDt*.7,Jt("pop",{vol:.4,gap:.05}),n.fish.n>=u.fish&&Cd(i)}let f=wo(n.p,ie.stand,.1);yg.update(e,f&&(n.pack.n>0||ai.n>0)),f&&(Rg(n,i),qb(i));for(let d of ur){let x=Bs[d];if(x.on=!1,!x.visible||x.done)continue;let m=wi(n.p,x.c)<.8;if(x.on=m&&n.cash.n>0,m&&n.cash.n&&i>=(n.nx.pay||0)&&x.left>0){let g=n.cash.pop();x.left-=He.billVal,n.nx.pay=i+He.payDt,g.goto(()=>[x.c[0],.08,x.c[1],0],.32,1,p=>{p.kill()}),Jt("pay",{vol:.5,gap:.035}),x.left<=0&&Kb(d,i)}}}function Ag(i){let e=null,t=1e9;for(let n of Gn.f){if(!n.alive)continue;let s=Math.hypot(n.x-i[0],n.z-i[1]);s<t&&(t=s,e=n)}return e}function Cd(i){i-Ue.full>1.6&&(Ue.full=i,Jt("warn",{vol:.4}))}function Rg(i,e){if(!i.pack.n||e<(i.nx.serve||0))return;let t=Ob();if(!t)return;let n=i.pack.pop();t.inFly++,i.nx.serve=e+He.serveDt;let s=t.head.items.length;t.head.items.push(n),n.goto(t.head.slot(s),.42,1.7,()=>{t.inFly--,t.got++,t.lastGot=e,Jt("box",{vol:.35,gap:.09});for(let r=0;r<He.packPrice/He.billVal&&!(ai.n>=60);r++){let o=new gr("cash",[t.p[0],1.2,t.p[1]-.4],{pop:!0});ai.add(o,.35+r*.06,.8)}Jt("coin",{vol:.3,gap:.06}),Wb(e)}),Jt("whoosh",{vol:.35,gap:.1})}function Wb(i){for(let e=0;e<2;e++){let t=Math.floor(Be(i*13.1+e*7.7)*zn.n),n=zn.heads[t];if(Ga.some(r=>r.j===t)||n[2]>ie.front[0][1]+5)continue;let s=new gr("pack",[ie.counter.x0+(ie.counter.x1-ie.counter.x0)*Be(i+e),1,ie.counter.z]);s.goto(()=>[n[0],n[1]+.06,n[2],.4],.5+Be(i*3+e)*.2,2.2),Ga.push({j:t,it:s,t0:i}),us.push({kind:Be(i*7+e)<.6?"smile1":"heart1",p:[n[0],n[1]+.6,n[2]],t0:i+.5,dur:1.3})}}function Xb(i){for(let e=Ga.length-1;e>=0;e--){let t=Ga[e];i-t.t0>2.6?(t.it.kill(),Ga.splice(e,1)):i-t.t0>2.3&&(t.it.scale=Math.max(.01,1-(i-t.t0-2.3)/.3))}}function qb(i){if(!ai.n||i<(Ue.nx.cash||0))return;let e=ai.items[ai.n-1];e.fly||(ai.pop(),Ue.cash.add(e,.26,1.1),Ue.nx.cash=i+He.cashDt,Jt("coin",{vol:.45,gap:.03}))}function Yb(i,e){if(Ai.n&&jn.n<24&&i>=(Vn.next||0)){let t=Ai.pop();Vn.next=i+He.cutDt,Vn.busy=i+.8,t.goto(()=>[ie.cutSpot[0],ie.table.top+.05,ie.cutSpot[1],Math.PI/2],.14,.25,n=>{n.kill(),ig([ie.cutSpot[0],ie.table.top+.25,ie.cutSpot[1]],i,.6),Jt("chopW",{vol:.45,gap:.12});let s=new gr("pack",[ie.cutSpot[0],ie.table.top,ie.cutSpot[1]],{pop:!0,ry:Math.PI/2});jn.add(s,.26,.6)})}Vn.play(i<Vn.busy?"cut":"idle",.2,1.6),Vn.update(e)}function Kb(i,e){let t=Bs[i];t.done=!0,je.unlocked[i]=e,console.log("[flow] unlock "+i+" t="+e.toFixed(1)+" served="+je.served),ng(t.c,e),Jt("bell",{vol:.8}),Jt("full",{vol:.5}),kn({hire:1008,belt:1009,staff:1010}[i]),kn({hire:2006,belt:2007,staff:2008}[i]);let n=ur[ur.indexOf(i)+1];n&&(Bs[n].showAt=e+.7),i==="hire"&&(hs={c:Ls(Hn.hero,Hn.fisherTex),p:[...t.c],vel:[0,0],heading:0,inWater:!1,nx:{},spot:[2,-7.2],t0:e},hs.c.obj.scale.setScalar(.001),qe.add(hs.c.obj),hs.c.play("run"),li=new ri(()=>[ie.frame[0],.05,ie.frame[1],0],Ei.fish.thick,{cols:[[0,-.36],[0,0],[0,.36]]}),Lo=Zb(),Lo.userData.t0=e+.3),i==="belt"&&(yr=Jb(),yr.userData.t0=e),i==="staff"&&(Os={c:Ls(Hn.hero,Hn.fisherTex),p:[...t.c],vel:[0,0],heading:Math.PI,nx:{},t0:e,state:"toPick"},Os.hold=[.45,.8],Os.pack=new ri(()=>Mg(Os),Ei.pack.h),Os.c.obj.scale.setScalar(.001),qe.add(Os.c.obj),je.endAt=e+He.endAfter)}function Zb(){let i=new rn,e=In(new ln({color:9071178})),t=1.5,n=1.25,s=.22,r=.08;for(let[a,l,c,h]of[[0,-n/2,t,r],[0,n/2,t,r],[-t/2,0,r,n],[t/2,0,r,n]]){let u=new ze(new Mi(c,s,h),e);u.position.set(a,s/2,l),u.castShadow=!0,i.add(u)}let o=new ze(new Mi(t,.04,n),In(new ln({color:7164472})));return o.position.y=.02,i.add(o),i.position.set(ie.frame[0],0,ie.frame[1]),qe.add(i),Ti(i),i}function Jb(){let i=ie.belt[0],e=ie.belt[1],t=e[1]-i[1],n=new rn,s=In(new ln({color:3108808})),r=In(new ln({color:2047850})),o=In(new ln({color:6053734})),a=10;for(let l=0;l<a;l++){let c=(l+.5)/a,h=Ld(c),u=new ze(new Mi(.62,.05,t/a*.92),l%2?s:r);u.position.set(0,h,i[1]+t*c),u.castShadow=!0,n.add(u);let f=new ze(new Mi(.06,h,.06),o);f.position.set(.28,h/2,i[1]+t*c),n.add(f);let d=f.clone();d.position.x=-.28,n.add(d)}return n.position.x=i[0],n.scale.z=.001,qe.add(n),Ti(n),n}var Ld=i=>.18+(ie.table.top-.15)*dt(Math.min(1,i/.8));function $b(i,e){if(Lo){let t=Sn((i-Lo.userData.t0)/.35);Lo.scale.setScalar(Math.max(.001,t))}if(hs){let t=hs,n=Sn((i-t.t0)/.3);if(t.c.obj.scale.setScalar(Math.max(.001,n)),!t.inWater||wi(t.p,t.spot)>.3){let r=[...t.p];Pd(t,t.spot,t.inWater?He.swim:He.walk*1.05,e,.25);let o=(t.p[0]-r[0])/e,a=(t.p[1]-r[1])/e;Math.hypot(o,a)>.2&&(t.heading+=Ns(Math.atan2(o,a)-t.heading)*Math.min(1,e*10))}else t.heading+=e*.5;let s=t.inWater;if(t.inWater=Dd(t.p[0],t.p[1]),t.inWater&&!s&&(Rh(t.p,i,1.8),Jt("wet",{vol:.5})),t.c.play(t.inWater?"swim":"run",.15,t.inWater?1.1:1),t.c.obj.position.set(t.p[0],t.inWater?_g:Wa(t.p[0],t.p[1]),t.p[1]),vg(t.c,t.inWater,e),t.c.obj.rotation.y=t.heading,t.c.update(e),vr.visible=t.inWater,t.inWater){let r=Math.sin(i*2.1+1)*.35;if(vr.position.set(t.p[0],-.22+.07,t.p[1]),vr.rotation.y=t.heading+r,vr.scale.setScalar(He.netR*.9),vr.material.uniforms.uA.value=.85,vr.material.uniforms.uT.value=i,li.n<He.frameCap&&i>=(t.nx.catch||0)){let o=Tg(t.p,t.heading+r,He.netR*1.2,Math.PI*1.2)||Ag(t.p);if(o){let a=wg(o,i);li.add(a,1,3.2,()=>Jt("wet",{vol:.25,gap:.08})),t.nx.catch=i+He.workerCatchDt}}}}if(yr){if(yr.scale.z=Math.max(.001,dt((i-yr.userData.t0)/.5)),i-yr.userData.t0>.5&&li.n&&Ai.n<8&&i>=(je.beltNext||0)&&Po.length<9){let t=li.pop();je.beltNext=i+He.beltDt;let n=i+.45,s=ie.belt[0],r=ie.belt[1];t.goto(()=>[s[0],Ld(0)+.15,s[1],0],.45,.8),Po.push({it:t,t0:n}),t._belt=o=>{let a=Pn((o-n)/2.2);return[s[0],Ld(a)+.15,Ot(s[1],r[1],a),0]}}for(let t=Po.length-1;t>=0;t--){let n=Po[t];i>=n.t0&&!n.on&&(n.on=!0,n.it.stick(()=>n.it._belt(je.t))),n.on&&i-n.t0>=2.2&&(Po.splice(t,1),Ai.add(n.it,.25,.5))}}if(Os){let t=Os,n=Sn((i-t.t0)/.3);t.c.obj.scale.setScalar(Math.max(.001,n));let s=t.state==="toPick"?[ie.pickSpot[0]+.25,ie.pickSpot[1]+.35]:[ie.stand[1]-.2,(ie.stand[2]+ie.stand[3])/2],r=[...t.p],o=Pd(t,s,He.walk*.9,e,.2),a=(t.p[0]-r[0])/e,l=(t.p[1]-r[1])/e,c=Math.hypot(a,l)>.2;c&&(t.heading+=Ns(Math.atan2(a,l)-t.heading)*Math.min(1,e*10)),t.state==="toPick"&&!o&&(jn.n&&t.pack.n<10&&i>=(t.nx.pick||0)&&(t.pack.add(jn.pop(),.28,.9),t.nx.pick=i+He.pickDt),(t.pack.n>=10||t.pack.n>=4&&!jn.n)&&(t.state="toStand")),t.state==="toStand"&&!o&&(Rg(t,i),t.pack.n||(t.state="toPick")),t.c.play(t.pack.n?c?"carry":"carryIdle":c?"run":"idle",.15),t.c.obj.position.set(t.p[0],0,t.p[1]),t.c.obj.rotation.y=t.heading,t.c.update(e),Sg(t,e)}}function jb(){for(let i of ur){let e=Bs[i];if(e.visible&&!e.done)return e}return null}function Cg(){let i=Ue,e=Eg(),t=jb(),n=i.cash.n*He.billVal,s=[(ie.stand[0]+ie.stand[1])/2,(ie.stand[2]+ie.stand[3])/2];if(je.ended)return null;if(t&&n>=t.left)return{kind:"tile",p:t.c,r:.15};if(i.fish.n)return i.inWater&&i.fish.n<e.fish?{kind:"fish",p:[i.p[0],i.p[1]],y:-.22,r:9}:!i.inWater&&li&&li.n&&!je.unlocked.belt&&i.fish.n<e.fish&&wi(i.p,ie.frame)<2.2?{kind:"frame",p:[ie.frame[0]+1,ie.frame[1]+.2],r:.2}:{kind:"drop",p:ie.dropSpot,r:.2};if(i.pack.n){let r=wo(i.p,ie.stand,.1),o=wi(i.p,ie.pickSpot)<.95;return r?{kind:"stand",p:s,r:.3}:i.pack.n>=e.pack||!jn.n&&!(o&&(Ai.n||Po.length||Vn.busy>je.t))?{kind:"stand",p:s,r:.3}:{kind:"pick",p:ie.pickSpot,r:.2}}return ai.n&&t&&n+ai.n*He.billVal>=t.left?{kind:"stand",p:s,r:.3}:jn.n||Ai.n||Vn.busy>je.t?{kind:"pick",p:ie.pickSpot,r:.2}:ai.n?{kind:"stand",p:s,r:.3}:je.unlocked.belt?{kind:"pick",p:ie.pickSpot,r:.2}:li?{kind:"frame",p:[ie.frame[0]+1,ie.frame[1]+.2],r:.2}:{kind:"fish",p:Db,y:-.22,r:.6}}function Bd(i,e,t){je.t=i,Fd.value=i;for(let r of ur){let o=Bs[r];o.showAt!==void 0&&i>=o.showAt&&!o.visible&&(o.show(i),Jt("pop",{vol:.6})),o.update(i)}je.target=Cg(),Gb(i,e,t),Yb(i,e),$b(i,e),Fb(i,e),Z0(i,e),zb(i,e),Xb(i),D0(i),sg(i),Dh.drop.update(i,e,Ue.fish.n>0||Ai.n>0,wi(Ue.p,ie.dropSpot)<.95&&Ue.fish.n>0,je.target&&je.target.kind==="drop"),Dh.pick.update(i,e,jn.n>0||Ue.pack.n>0||Ai.n>0,wi(Ue.p,ie.pickSpot)<.95&&jn.n>0&&!Ue.fish.n,je.target&&je.target.kind==="pick");let n=je.target;j0(i,e,n&&n.kind!=="fish"?{...n,y:Wa(n.p[0],n.p[1])}:n&&!Ue.inWater?{...n,kind:"fish",y:-.22}:null,Ue.p);let s=n?[Ue.p,...Od(Ue.p,n.p)]:null;tg(i,e,s,Wa,!!n&&!(n.kind==="fish"&&Ue.inWater)&&!je.ended);for(let r=us.length-1;r>=0;r--)i>us[r].t0+us[r].dur&&us.splice(r,1)}var ks=()=>({hero:Ue,front:No,crowd:zn,tiles:Bs,strip:ai,outStack:jn,intake:Ai,frameStack:li,school:Gn});function Uh(){return[Ue.p[0],Ue.inWater?-.22:.9,Ue.p[1]]}var tn=1080,Wn=1920,Uo=!1,Zd=!1,Qe={touching:!1,lastTouch:-1/0,firstTouch:1/0,auto:!0,autoT:0,ended:!1,endT:1/0,joy:null},vt={id:null,ox:0,oy:0,dx:0,dy:0},Qb=10,Sr=80,zd=0,Fh=0,Yi=0,Qn=1,Xa=-1,br=.05,Mr=0,zs=qc(),Dg=i=>[i.x*tn/zs.w,i.y*Wn/zs.h],fs={x:28,y:34,w:300,h:89},ui={x:44,y:0,w:268,h:82},Ig={cx:0,cy:0,w:ls.w,h:ls.h},Wd=92;async function e1(){kn(1001),{W:tn,H:Wn}=_f(),ui.y=fs.y+fs.h+10,Ig.cx=tn/2,Ig.cy=Wn-170;let i=Wn/zs.h;zs.safeTop&&(fs.y=Math.max(fs.y,zs.safeTop*i+10)),zs.menu&&zs.menu.bottom&&(Wd=Math.max(Wd,zs.menu.bottom*i+48));let[e,t,n]=await Promise.all([xo("assets/ui/logo.png"),xo("assets/ui/cover.jpg"),xo("assets/ui/pack_icon.png")]),{LOGO:s}=Rf({W:tn,H:Wn,logo:e,packIcon:n,coverImg:t});fs.h=s.h,ui.y=fs.y+fs.h+10,b0(f=>{br=Math.max(br,.08+f*.82)}),mf(Ug);let r=await E0("assets/env/meta.json");vf(r);let o={},a=(f,d,x={repeat:!0})=>T0(d,x).then(m=>{o[f]=m}),l={},c=(f,d)=>w0(d).then(x=>{l[f]=x});await Promise.all([a("col","assets/env/color.jpg",{srgb:!1,repeat:!1}),a("dep","assets/env/depth.png",{srgb:!1,repeat:!1}),a("flow","assets/env/flow.png",{srgb:!1,repeat:!1}),a("heroBody","assets/tex/hero_body.jpg"),a("heroLan","assets/tex/hero_lan.jpg"),a("fisherBody","assets/tex/fisher_body.jpg"),a("fisherLan","assets/tex/fisher_lan.jpg"),a("chef","assets/tex/chef.jpg"),a("cust","assets/tex/cust.jpg"),a("custEye","assets/tex/cust_eye.jpg"),a("fish","assets/tex/fish.jpg"),a("packFood","assets/tex/pack_food.jpg"),a("cash","assets/tex/cash.jpg"),c("hero","assets/models/hero.glb"),c("chef","assets/models/chef.glb"),c("cust","assets/models/cust.glb"),c("crowd","assets/models/crowd.glb"),c("fish","assets/models/fish.glb"),c("pack","assets/models/pack.glb"),c("cash","assets/models/cash.glb"),lg()]),o.packIconImg=n,Sf({col:o.col,dep:o.dep,flow:o.flow}),bf();let h=N0(l,o),u={hero:mh(l.hero,.04497987710180218),chef:mh(l.chef,-.0006233895371590902),cust:mh(l.cust,.10685263368247756),crowd:l.crowd,fishGeo:h.fishGeo,heroTex:{hero_body:o.heroBody,hero_eye:o.heroBody,hero_lan:o.heroLan},fisherTex:{hero_body:o.fisherBody,hero_eye:o.fisherBody,hero_lan:o.fisherLan},chefTex:{chef_body:o.chef,"*":o.chef},custTex:{cust_body:o.cust,cust_eye:o.custEye}};Ud(u,o),rg(),Kd=og(),c0(t1,n1,i1),Zc(()=>{Fh=La()},()=>{}),hi=Uh(),Xd(0,!0);try{Rt.compile(qe,yn)}catch(f){}Uo=!0,Xa=-1,br=1,hg()}function t1(i){cg();let[e,t]=Dg(i);if(!Uo){Zd&&Na();return}if(Qe.ended){Na(!1);return}if(r1(e,t)){Na(!1);return}vt.id===null&&(vt.id=i.id,vt.ox=e,vt.oy=t,vt.dx=vt.dy=0,Qe.touching=!0,s1())}function n1(i){if(i.id!==vt.id)return;let[e,t]=Dg(i),n=e-vt.ox,s=t-vt.oy,r=Math.hypot(n,s);r>Sr&&(vt.ox=e-n/r*Sr,vt.oy=t-s/r*Sr,n=n/r*Sr,s=s/r*Sr),vt.dx=n,vt.dy=s}function i1(i){i.id===vt.id&&(vt.id=null,vt.dx=vt.dy=0,Qe.touching=!1,Qe.lastTouch=Yi)}function s1(){Qe.firstTouch===1/0&&(Qe.firstTouch=Yi,kn(1004),kn(2001))}var r1=(i,e)=>i>=ui.x-10&&i<=ui.x+ui.w+10&&e>=ui.y-10&&e<=ui.y+ui.h+10;function o1(){let i=vn,e=i.R[0],t=i.R[2],n=Math.hypot(i.F[0],i.F[2]),s=i.F[0]/n,r=i.F[2]/n,o=vt.dx/Sr,a=vt.dy/Sr;return[e*o-s*a,t*o-r*a]}function a1(i){if(Qe.ended){un.active=!1;return}if(Qe.joy=Qe.touching?{x:vt.ox,y:vt.oy,dx:vt.dx,dy:vt.dy}:null,Qe.touching){if(Qe.auto=!1,Qe.lastTouch=i,Math.hypot(vt.dx,vt.dy)>Qb){let[t,n]=o1();un.vx=t,un.vz=n}else un.vx=un.vz=0;un.active=!0}else i-Qe.lastTouch>=He.idle?(Qe.auto||(Qe.autoT=i),Qe.auto=!0,un.active=!1):(Qe.auto=!1,un.active=!0,un.vx=un.vz=0);i>=Math.min(je.endAt,He.cap)&&l1(i)}function l1(i){console.log("[flow] end t="+i.toFixed(1)+" served="+je.served+" fps~"+(Jd/Math.max(1,i)).toFixed(0)),Qe.ended=!0,Qe.endT=i,je.ended=!0,vt.id=null,vt.dx=vt.dy=0,Qe.touching=!1,Qe.joy=null,kn(1011),kn(1013),ug(),setTimeout(()=>Na(!0),200)}var hi=[0,0,0],Hd=Ua;function Xd(i,e=!1){let t=Oh.look||Uh(),s=(ks().hero.inWater?Ua*.8:Ua)*+(hr.zoom||1),r=e?1:1-Math.exp(-i*4.5);hi=[Ot(hi[0],t[0],r),Ot(hi[1],t[1],r),Ot(hi[2],t[2],r)],Hd=e?s:Ot(Hd,s,1-Math.exp(-i*2.2));let o=yf(hi[0],hi[1],hi[2]);Mf(o[0],o[1]-.04*fr.h,Hd)}var Do=0,Pg=-9,Lg=0;function c1(i,e){Cf(),Uo&&Qn<1&&(h1(i),u1(i),f1(i),qd(i),d1(i),p1(),m1(i),g1(i)),oh(Qn),Qn>.003&&x1(e),Nt||(window.__nq=Af()),If()}var zt=[0,0];function h1(i){if(Qe.ended)return;let e=ks(),t=e.crowd;for(let n=0;n<7;n++){let r=n*2.5/7+Be(n)*.4,o=i+r,a=Math.floor(o/2.5),l=o-a*2.5;if(l>1.9)continue;let c=Math.floor(Be(n*13.1+a*7.7)*t.n),h=t.heads[c];if(Mo(h[0],h[1]+.55,h[2],zt),zt[0]<60||zt[0]>tn-60||zt[1]<260||zt[1]>Wn-260)continue;let u=Sn(l/.22)*(1-dt((l-1.6)/.3)),f=l>.6&&l<1.1?Math.cos(Math.PI*2*(l-.6)/.5):1;_t(Be(n*5.3+a*1.9)<.5?"ang1":"ang0",zt[0],zt[1]-10*l,{sx:u*Math.max(.06,Math.abs(f))*.9,sy:u*.9})}for(let n of us){let s=i-n.t0;if(s<0)continue;Mo(n.p[0],n.p[1],n.p[2],zt);let r=Sn(s/.22)*(1-dt((s-n.dur+.3)/.3));_t(n.kind,zt[0],zt[1]-14*s,{s:r*.85})}}function u1(i){for(let e of ks().front){Mo(e.p[0],2.05+e.head.n*.24,e.p[1],zt);let t=i-e.t0;if(e.state==="done"||e.state==="leave"){let o=e.state==="leave"?t+.45:t,a=Sn(o/.16),l=1-dt((o-.5)/.15);l>.01&&_t("check",zt[0],zt[1]+10,{s:a*.9,a:l});continue}let n=e.state==="enter"?Sn(t/.4):1,s=i-e.lastGot<.15?1.12:1,r=.82*n*s;_t("bub",zt[0],zt[1],{s:r}),e.got>0&&_t("bubFill",zt[0],zt[1],{s:r,crop:e.got/e.need}),_t("bubIcon",zt[0],zt[1],{s:r*.9})}}function f1(i){let e=ks().hero,t=i-e.full;if(t>1.4||Qe.ended)return;let n=e.fish.n?e.fish.topPos():e.pack.topPos();Mo(n[0],n[1]+.5,n[2],zt);let s=Sn(t/.25)*(1-dt((t-1.1)/.3));_t("full",zt[0],zt[1],{s})}function qd(i){var c;let e=ks().hero.cash.n*He.billVal;e!==Lg&&(Pg=i,Lg=e);let t=Math.min(.1,i-((c=qd.lt)!=null?c:i));qd.lt=i;let n=240*t*Math.max(1,Math.abs(e-Do)/60);Do=Math.abs(e-Do)<=n?e:Do+Math.sign(e-Do)*n;let s=tn-40,r=s-250,o=Wd;_t("hudBg",r,o);let a=i-Pg,l=a>=0&&a<.18?1+Math.sin(Math.PI*a/.18)*.18:1;ah(Math.round(Do),s-22,o+2,{set:"a",sc:l})}function d1(i){if(!Qe.auto||Qe.ended)return;let e=dt((i-Qe.autoT)/.3),t=tn/2,n=Wn-510,s=i%1.6/1.6,r=1.35,o=Math.sin(s*Math.PI*2)*150*r;_t("tutLine",t,n,{a:e}),_t("hand",t+o,n+18*r,{a:e}),_t("tutText",t,n+150*r,{a:e})}function p1(){let i=Qe.joy;i&&(_t("joyBase",i.x,i.y),_t("joyKnob",i.x+i.dx,i.y+i.dy))}function m1(i){_t("logo",fs.x,fs.y),_t("btnTop",ui.x+ui.w/2,ui.y+ui.h/2,{s:Qe.ended?1:1+.05*Math.sin(i*6)})}function g1(i){if(!Qe.ended)return;let e=i-Qe.endT,t=dt(e/.25),n=Sn((e-.1)/.45),s=Sn((e-.3)/.45);_t("black",0,0,{w:tn,h:Wn,a:.55*t}),n>.01&&_t("logoBig",tn/2,Wn*.4,{s:n}),s>.01&&_t("btnEnd",tn/2,Wn*.55,{s:s*(1+.05*Math.sin(e*6))})}function x1(i){oh(Qn),Mr+=(Math.min(.97,br+.12)-Mr)*(Mr<br?.3:.025)*.6,br>=1&&(Mr=1);for(let r=0;r<28;r++){let o=Be(r*3.1)*tn,a=.08+Be(r*5.7)*.08,l=(i*a+Be(r*1.7))%1.05*Wn,c=.25+Be(r*9.3)*.5;_t("snow",o+Math.sin(i*2.4+r)*9,l,{s:c,a:Qn*(.35+Be(r)*.5)})}_t("logoLoad",tn/2,Wn*.31,{a:Qn,s:1+.04*Math.sin(i*2.4)});let e=tn*.17,t=Wn*.52;_t("barBg",e,t,{w:tn*.66,h:16,a:Qn}),_t("barFill",e,t,{w:Math.max(2,tn*.66*Mr),h:16,a:Qn});let n=Math.floor(Mr*100),s=150;_t("loading",tn/2-60,t+52,{a:Qn}),ah(n,tn/2+46,t+52,{set:"p",align:"left",a:Qn}),_t("pct",tn/2+46+(n>=10?n>=100?66:44:22)+16,t+52,{a:Qn})}var _1=hr.debug==="1",qa=[];Nt&&wx.onError&&wx.onError(i=>{qa.push(String(i&&(i.message||i)).slice(0,300))});var ci=null,Vd=null,Ng=-1;function v1(i){if(!(!(_1||qa.length)||!Uo)){if(!ci){Vd=Rs(512,256);let e=new gt(Vd);e.colorSpace=ot,ci=new ze(new ii(2,2),new Kt({map:e,transparent:!0,depthTest:!1,depthWrite:!1})),ci.frustumCulled=!1,ci.userData.sc=new Di,ci.userData.sc.add(ci),ci.userData.cam=new Fn(-1,1,1,-1,-1,1),ci.scale.set(.46,.115*(tn/Wn)/.5625,1),ci.position.set(-.52,-.46,0)}if(i-Ng>.5){Ng=i;let e=Vd.getContext("2d");e.clearRect(0,0,512,256),e.fillStyle="rgba(0,0,0,0.55)",e.fillRect(0,0,512,256),e.fillStyle="#9f9",e.font="20px monospace";let t=je,n=ks().hero;["t="+Yi.toFixed(1)+" fps="+Yd.toFixed(0)+" auto="+(Qe.auto?1:0)+" end="+(Qe.ended?1:0),"unl="+Object.keys(t.unlocked).join("+")+" served="+t.served,"fish="+n.fish.n+" pack="+n.pack.n+" cash="+n.cash.n+" tgt="+(t.target&&t.target.kind)].forEach((r,o)=>e.fillText(r,8,26+o*24)),e.fillStyle="#f88",qa.slice(-5).forEach((r,o)=>{for(let a=0;a<2;a++)e.fillText(r.slice(a*44,a*44+44),8,110+o*30+a*14)}),ci.material.map.needsUpdate=!0}Rt.render(ci.userData.sc,ci.userData.cam)}}var Yd=0,Jd=0,Gd=0,Kd=null,y1=+(hr.speed||1);function Ug(){mf(Ug);let i=La();zd||(zd=i,Fh=i);let e=(i-zd)/1e3,t=Math.min(.05,(i-Fh)/1e3);if(Fh=i,Uo){Xa<0&&(Xa=e,Gd=i,kn(1003),console.log("[flow] first frame load="+e.toFixed(2)+"s canvas="+en.width+"x"+en.height+" webgl2="+Rt.capabilities.isWebGL2),typeof window!="undefined"&&window.__ready&&window.__ready()),Qn=1-dt((e-Xa-.15)/.5);let n=Oh.paused?0:Math.min(.5,(i-Gd)/1e3)*y1;Gd=i;try{for(;n>1e-4;){let s=Math.min(n,.03333333333333333);n-=s,Yi+=s,Mn.uTime.value=Yi,a1(Yi),Bd(Yi,s,Qe.auto&&!Qe.ended),Xd(s)}Oh.paused&&Oh.look&&Xd(0,!0)}catch(s){qa.length<50&&(qa.push(String(s&&(s.stack||s.message)||s).slice(0,300)),console.error(s))}Yd=Yd*.95+1/Math.max(.001,t)*.05,Kd&&Kd.update(Yi,[hi[0],hi[2]],en.height/1920),Tf([hi[0],hi[2]]),Jd++}else Rt&&Rt.setRenderTarget(null),Rt&&Rt.clear(),!Zd&&e>25&&Fg("timeout");if(c1(Yi,e),v1(e),!Nt&&window.__cap){let n=window.__cap;window.__cap=null,n(en.toDataURL("image/jpeg",.82))}}function Fg(i){Zd=!0,console.error("playable fail:",i),Nt&&Xc()}var Oh=(Nt?GameGlobal:window).__dbg={UI:Pf,GM:kd,world:wf,flow:Qe,T:He,paused:!1,look:null,st:()=>({coverA:Qn,readyT:Xa,ready:Uo,progress:br,shown:Mr,gameT:Yi,frames:Jd})};e1().catch(i=>{console.error(i),Fg(i)});})();
