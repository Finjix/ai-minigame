// 所有游戏共用（shared/playable）。
// 微信小游戏里给 three.js 补的最小环境（浏览器里什么都不做）。
// three r186 对 window / document / HTMLImageElement 都有 typeof 判断，这里只补它真正会碰到、又没判断的东西：
// TextDecoder（GLTFLoader 解 GLB 的 JSON 块）、self、navigator、performance。不定义 window，免得 three 以为在浏览器里。
const G = typeof GameGlobal !== 'undefined' ? GameGlobal : null;
if (G) {
  if (typeof G.self === 'undefined') G.self = G;
  if (typeof G.navigator === 'undefined') G.navigator = { userAgent: 'wechatgame', maxTouchPoints: 5 };
  if (typeof G.performance === 'undefined' || !G.performance.now) {
    const p = typeof wx !== 'undefined' && wx.getPerformance ? wx.getPerformance() : null;
    G.performance = { now: p ? () => p.now() / 1000 : () => Date.now() };   // wx.getPerformance().now() 是微秒
  }
  if (typeof G.AbortController === 'undefined') {   // GLTFLoader 解析时会 new 一个（只用来取消加载）
    class AbortSignal { constructor() { this.aborted = false; this.reason = undefined; this.onabort = null; this._l = []; } addEventListener(t, f) { this._l.push(f); } removeEventListener(t, f) { this._l = this._l.filter((x) => x !== f); } throwIfAborted() { if (this.aborted) throw this.reason; } }
    G.AbortSignal = AbortSignal;
    G.AbortController = class AbortController { constructor() { this.signal = new AbortSignal(); } abort(r) { const s = this.signal; if (s.aborted) return; s.aborted = true; s.reason = r; for (const f of s._l) try { f({ type: 'abort' }); } catch (e) {} if (s.onabort) s.onabort({ type: 'abort' }); } };
  }
  if (typeof G.TextDecoder === 'undefined') {
    G.TextDecoder = class TextDecoder {
      decode(buf) {
        const b = buf instanceof Uint8Array ? buf : new Uint8Array(buf.buffer ? buf.buffer : buf, buf.byteOffset || 0, buf.byteLength);
        let s = '', i = 0;
        while (i < b.length) {
          let c = b[i++];
          if (c > 127) {
            if (c > 191 && c < 224) c = ((c & 31) << 6) | (b[i++] & 63);
            else if (c > 223 && c < 240) c = ((c & 15) << 12) | ((b[i++] & 63) << 6) | (b[i++] & 63);
            else { c = ((c & 7) << 18) | ((b[i++] & 63) << 12) | ((b[i++] & 63) << 6) | (b[i++] & 63); c -= 0x10000; s += String.fromCharCode(0xd800 + (c >> 10), 0xdc00 + (c & 1023)); continue; }
          }
          s += String.fromCharCode(c);
        }
        return s;
      }
    };
  }
}
export {};
