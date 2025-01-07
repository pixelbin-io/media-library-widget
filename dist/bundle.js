(()=>{"use strict";var e={831:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MAX",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"v1ToV6",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"v6",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"v6ToV1",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"v7",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return y.default}});var n=m(r(213)),i=m(r(808)),o=m(r(792)),a=m(r(910)),l=m(r(518)),s=m(r(343)),d=m(r(948)),u=m(r(73)),f=m(r(186)),c=m(r(671)),h=m(r(507)),p=m(r(744)),v=m(r(37)),y=m(r(775));function m(e){return e&&e.__esModule?e:{default:e}}},213:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="ffffffff-ffff-ffff-ffff-ffffffffffff"},311:(e,t)=>{function r(e){return 14+(e+64>>>9<<4)+1}function n(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e,t,r,i,o,a){return n((l=n(n(t,e),n(i,a)))<<(s=o)|l>>>32-s,r);var l,s}function o(e,t,r,n,o,a,l){return i(t&r|~t&n,e,t,o,a,l)}function a(e,t,r,n,o,a,l){return i(t&n|r&~n,e,t,o,a,l)}function l(e,t,r,n,o,a,l){return i(t^r^n,e,t,o,a,l)}function s(e,t,r,n,o,a,l){return i(r^(t|~n),e,t,o,a,l)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var i=0;i<t.length;++i)e[i]=t.charCodeAt(i)}return function(e){for(var t=[],r=32*e.length,n="0123456789abcdef",i=0;i<r;i+=8){var o=e[i>>5]>>>i%32&255,a=parseInt(n.charAt(o>>>4&15)+n.charAt(15&o),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[r(t)-1]=t;for(var i=1732584193,d=-271733879,u=-1732584194,f=271733878,c=0;c<e.length;c+=16){var h=i,p=d,v=u,y=f;i=o(i,d,u,f,e[c],7,-680876936),f=o(f,i,d,u,e[c+1],12,-389564586),u=o(u,f,i,d,e[c+2],17,606105819),d=o(d,u,f,i,e[c+3],22,-1044525330),i=o(i,d,u,f,e[c+4],7,-176418897),f=o(f,i,d,u,e[c+5],12,1200080426),u=o(u,f,i,d,e[c+6],17,-1473231341),d=o(d,u,f,i,e[c+7],22,-45705983),i=o(i,d,u,f,e[c+8],7,1770035416),f=o(f,i,d,u,e[c+9],12,-1958414417),u=o(u,f,i,d,e[c+10],17,-42063),d=o(d,u,f,i,e[c+11],22,-1990404162),i=o(i,d,u,f,e[c+12],7,1804603682),f=o(f,i,d,u,e[c+13],12,-40341101),u=o(u,f,i,d,e[c+14],17,-1502002290),i=a(i,d=o(d,u,f,i,e[c+15],22,1236535329),u,f,e[c+1],5,-165796510),f=a(f,i,d,u,e[c+6],9,-1069501632),u=a(u,f,i,d,e[c+11],14,643717713),d=a(d,u,f,i,e[c],20,-373897302),i=a(i,d,u,f,e[c+5],5,-701558691),f=a(f,i,d,u,e[c+10],9,38016083),u=a(u,f,i,d,e[c+15],14,-660478335),d=a(d,u,f,i,e[c+4],20,-405537848),i=a(i,d,u,f,e[c+9],5,568446438),f=a(f,i,d,u,e[c+14],9,-1019803690),u=a(u,f,i,d,e[c+3],14,-187363961),d=a(d,u,f,i,e[c+8],20,1163531501),i=a(i,d,u,f,e[c+13],5,-1444681467),f=a(f,i,d,u,e[c+2],9,-51403784),u=a(u,f,i,d,e[c+7],14,1735328473),i=l(i,d=a(d,u,f,i,e[c+12],20,-1926607734),u,f,e[c+5],4,-378558),f=l(f,i,d,u,e[c+8],11,-2022574463),u=l(u,f,i,d,e[c+11],16,1839030562),d=l(d,u,f,i,e[c+14],23,-35309556),i=l(i,d,u,f,e[c+1],4,-1530992060),f=l(f,i,d,u,e[c+4],11,1272893353),u=l(u,f,i,d,e[c+7],16,-155497632),d=l(d,u,f,i,e[c+10],23,-1094730640),i=l(i,d,u,f,e[c+13],4,681279174),f=l(f,i,d,u,e[c],11,-358537222),u=l(u,f,i,d,e[c+3],16,-722521979),d=l(d,u,f,i,e[c+6],23,76029189),i=l(i,d,u,f,e[c+9],4,-640364487),f=l(f,i,d,u,e[c+12],11,-421815835),u=l(u,f,i,d,e[c+15],16,530742520),i=s(i,d=l(d,u,f,i,e[c+2],23,-995338651),u,f,e[c],6,-198630844),f=s(f,i,d,u,e[c+7],10,1126891415),u=s(u,f,i,d,e[c+14],15,-1416354905),d=s(d,u,f,i,e[c+5],21,-57434055),i=s(i,d,u,f,e[c+12],6,1700485571),f=s(f,i,d,u,e[c+3],10,-1894986606),u=s(u,f,i,d,e[c+10],15,-1051523),d=s(d,u,f,i,e[c+1],21,-2054922799),i=s(i,d,u,f,e[c+8],6,1873313359),f=s(f,i,d,u,e[c+15],10,-30611744),u=s(u,f,i,d,e[c+6],15,-1560198380),d=s(d,u,f,i,e[c+13],21,1309151649),i=s(i,d,u,f,e[c+4],6,-145523070),f=s(f,i,d,u,e[c+11],10,-1120210379),u=s(u,f,i,d,e[c+2],15,718787259),d=s(d,u,f,i,e[c+9],21,-343485551),i=n(i,h),d=n(d,p),u=n(u,v),f=n(f,y)}return[i,d,u,f]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(r(t)),i=0;i<t;i+=8)n[i>>5]|=(255&e[i/8])<<i%32;return n}(e),8*e.length))}},140:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);t.default={randomUUID:r}},808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},792:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(37))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}},656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i},858:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)};var n=new Uint8Array(16)},42:(e,t)=>{function r(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function n(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){var t=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var o=unescape(encodeURIComponent(e));e=[];for(var a=0;a<o.length;++a)e.push(o.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var l=e.length/4+2,s=Math.ceil(l/16),d=new Array(s),u=0;u<s;++u){for(var f=new Uint32Array(16),c=0;c<16;++c)f[c]=e[64*u+4*c]<<24|e[64*u+4*c+1]<<16|e[64*u+4*c+2]<<8|e[64*u+4*c+3];d[u]=f}d[s-1][14]=8*(e.length-1)/Math.pow(2,32),d[s-1][14]=Math.floor(d[s-1][14]),d[s-1][15]=8*(e.length-1)&4294967295;for(var h=0;h<s;++h){for(var p=new Uint32Array(80),v=0;v<16;++v)p[v]=d[h][v];for(var y=16;y<80;++y)p[y]=n(p[y-3]^p[y-8]^p[y-14]^p[y-16],1);for(var m=i[0],b=i[1],g=i[2],_=i[3],w=i[4],O=0;O<80;++O){var M=Math.floor(O/20),L=n(m,5)+r(M,b,g,_)+w+t[M]+p[O]>>>0;w=_,_=g,g=n(b,30)>>>0,b=m,m=L}i[0]=i[0]+m>>>0,i[1]=i[1]+b>>>0,i[2]=i[2]+g>>>0,i[3]=i[3]+_>>>0,i[4]=i[4]+w>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]}},910:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=l;for(var n,i=(n=r(37))&&n.__esModule?n:{default:n},o=[],a=0;a<256;++a)o.push((a+256).toString(16).slice(1));function l(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}t.default=function(e,t=0){var r=l(e,t);if(!(0,i.default)(r))throw TypeError("Stringified UUID is invalid");return r}},518:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,o,a=(n=r(858))&&n.__esModule?n:{default:n},l=r(910),s=0,d=0;t.default=function(e,t,r){var n=t&&r||0,u=t||new Array(16),f=(e=e||{}).node,c=e.clockseq;if(e._v6||(f||(f=i),null==c&&(c=o)),null==f||null==c){var h=e.random||(e.rng||a.default)();null==f&&(f=[h[0],h[1],h[2],h[3],h[4],h[5]],i||e._v6||(f[0]|=1,i=f)),null==c&&(c=16383&(h[6]<<8|h[7]),void 0!==o||e._v6||(o=c))}var p=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:d+1,y=p-s+(v-d)/1e4;if(y<0&&void 0===e.clockseq&&(c=c+1&16383),(y<0||p>s)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=p,d=v,o=c;var m=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;u[n++]=m>>>24&255,u[n++]=m>>>16&255,u[n++]=m>>>8&255,u[n++]=255&m;var b=p/4294967296*1e4&268435455;u[n++]=b>>>8&255,u[n++]=255&b,u[n++]=b>>>24&15|16,u[n++]=b>>>16&255,u[n++]=c>>>8|128,u[n++]=255&c;for(var g=0;g<6;++g)u[n+g]=f[g];return t||(0,l.unsafeStringify)(u)}},343:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=(t="string"==typeof e?(0,i.default)(e):e,Uint8Array.of((15&t[6])<<4|t[7]>>4&15,(15&t[7])<<4|(240&t[4])>>4,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,(15&t[1])<<4|(240&t[2])>>4,96|15&t[2],t[3],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,o.unsafeStringify)(r):r};var n,i=(n=r(792))&&n.__esModule?n:{default:n},o=r(910)},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(25)),i=o(r(311));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v3",48,i.default);t.default=a},25:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,r){function n(e,n,a,l){var s;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=(0,o.default)(n)),16!==(null===(s=n)||void 0===s?void 0:s.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var d=new Uint8Array(16+e.length);if(d.set(n),d.set(e,n.length),(d=r(d))[6]=15&d[6]|t,d[8]=63&d[8]|128,a){l=l||0;for(var u=0;u<16;++u)a[l+u]=d[u];return a}return(0,i.unsafeStringify)(d)}try{n.name=e}catch(e){}return n.DNS=a,n.URL=l,n};var n,i=r(910),o=(n=r(792))&&n.__esModule?n:{default:n},a=t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",l=t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8"},73:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(140)),i=a(r(858)),o=r(910);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){if(n.default.randomUUID&&!t&&!e)return n.default.randomUUID();var a=(e=e||{}).random||(e.rng||i.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(var l=0;l<16;++l)t[r+l]=a[l];return t}return(0,o.unsafeStringify)(a)}},186:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(25)),i=o(r(42));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v5",80,i.default);t.default=a},671:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e={},t,r=0){var a=(0,i.default)(s(s({},e),{},{_v6:!0}),new Uint8Array(16));if(a=(0,o.default)(a),t){for(var l=0;l<16;l++)t[r+l]=a[l];return t}return(0,n.unsafeStringify)(a)};var n=r(910),i=a(r(518)),o=a(r(343));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},507:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=(t="string"==typeof e?(0,i.default)(e):e,Uint8Array.of((15&t[3])<<4|t[4]>>4&15,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|15&t[6],t[7],(15&t[1])<<4|(240&t[2])>>4,(15&t[2])<<4|(240&t[3])>>4,16|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,o.unsafeStringify)(r):r};var n,i=(n=r(792))&&n.__esModule?n:{default:n},o=r(910)},744:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(858))&&n.__esModule?n:{default:n},o=r(910),a=null,l=null,s=0;t.default=function(e,t,r){e=e||{};var n=t&&r||0,d=t||new Uint8Array(16),u=e.random||(e.rng||i.default)(),f=void 0!==e.msecs?e.msecs:Date.now(),c=void 0!==e.seq?e.seq:null,h=l,p=a;return f>s&&void 0===e.msecs&&(s=f,null!==c&&(h=null,p=null)),null!==c&&(c>2147483647&&(c=2147483647),h=c>>>19&4095,p=524287&c),null!==h&&null!==p||(h=(h=127&u[6])<<8|u[7],p=(p=(p=63&u[8])<<8|u[9])<<5|u[10]>>>3),f+1e4>s&&null===c?++p>524287&&(p=0,++h>4095&&(h=0,s++)):s=f,l=h,a=p,d[n++]=s/1099511627776&255,d[n++]=s/4294967296&255,d[n++]=s/16777216&255,d[n++]=s/65536&255,d[n++]=s/256&255,d[n++]=255&s,d[n++]=h>>>4&15|112,d[n++]=255&h,d[n++]=p>>>13&63|128,d[n++]=p>>>5&255,d[n++]=p<<3&255|7&u[10],d[n++]=u[11],d[n++]=u[12],d[n++]=u[13],d[n++]=u[14],d[n++]=u[15],t||(0,o.unsafeStringify)(d)}},37:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(656))&&n.__esModule?n:{default:n};t.default=function(e){return"string"==typeof e&&i.default.test(e)}},775:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=r(37))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};const r=self.console,n=Object.freeze({NONE:0,ERROR:1,WARN:2,INFO:3,LOG:4}),i=["error","warn","info","log"],o=void 0!==r&&"function"==typeof r.log&&"function"==typeof r.error&&"function"==typeof r.debug&&"function"==typeof r.warn&&"function"==typeof Function.prototype.apply;let a;const l=(e,t,n,i)=>{r[t]?n?r[t](n):r[t]():e.log(`----------- ${n||i} ----------- `)},s=(e={})=>{e.level=e.level||n.NONE;const t=e.newInstance||!a?((e={})=>{let t=e.level||n.NONE;const a={setLevel:e=>(t=e,a),getLevel:()=>t||void 0};return i.forEach((e=>{a[e]=(...t)=>{if(o){const n=i.indexOf(e),o=a.getLevel();n>=0&&n+1<=o&&r[e].apply(r,t)}return a}})),a.groupCollapsed=e=>l(a,"groupCollapsed",e,"GROUP START"),a.group=e=>l(a,"group",e,"GROUP START"),a.groupEnd=()=>l(a,"groupEnd",null,"GROUP END"),a.debug=a.log,a})(e):a;return a||e.newInstance||(a=t),t},d=s();s();const u={init:"ML_WIDGET_INIT",show:"ML_WIDGET_SHOW",hide:"ML_WIDGET_HIDE",error:"ML_WIDGET_ERROR",insert:"ML_WIDGET_INSERT_DATA",identity:"ML_WIDGET_EXPOSE_IDENTITY",adjustMultiSelector:"ML_WIDGET_ADJUST_MULTISELECT"},f=["zone_url","access_key","use_saml"],c=["remove_header"],h=["inline_container","z_index","multiple","max_files","default_transformations","insert_caption","remove_header","mode","folder"],p=["datasourceId","sortBy","orderBy","path","search"],v=(e,t)=>{let r=null;try{r="string"==typeof e?JSON.parse(e):e}catch(e){d.error(`[postmessage]: failed to parse data from ${t}`,e)}return r};class y extends EventTarget{emit(e,t){const r=new CustomEvent(e,{detail:t});this.dispatchEvent(r)}on(e,t){const r=e=>{if(e.detail){const r=v(e.detail);t(r.data)}else t()};this.addEventListener(e,r),this._listeners||(this._listeners=new Map),this._listeners.has(t)||this._listeners.set(t,r)}off(e,t){if(this._listeners&&this._listeners.has(t)){const r=this._listeners.get(t);this.removeEventListener(e,r),this._listeners.delete(t)}}}function m(e,t,r,n={}){const i=t.dev?t.pixelbinURL:`https://console.${t.pixelbinURL}`;let o=function(e,t,r){let n=[];return Object.entries(e).forEach((([e,t])=>{n.push(`${e}=${encodeURIComponent(t)}`)})),t.filter((e=>Boolean(r[e]))).forEach((e=>{const t=r[e];var i;"object"!=typeof t||Array.isArray(t)?n.push(`${e}=${encodeURIComponent(t)}`):n.push(`${e}=${i=t,Object.keys(i).map((e=>`${e}:${encodeURIComponent(i[e])}`)).join("|")}`)})),n}(n,r,t);return{origin:i,href:`${i}${e}?${o.join("&")}`}}class b extends y{isMediaLibraryVisible=!1;isLibraryLoaded=!1;originalBodyOverflow=null;iframe;fullscreenContainer;messageHandler=null;isFullscreen=!1;pixelbinURL="pixelbin.io";constructor({options:e,callbacks:t={},element:r,mlId:n}){super(),e.pixelbinURL=e.pixelbinURL||this.pixelbinURL;const i={...e};this.setupEventHandlers(t),this.isFullscreen=!!e.inline_container;var{initialURL:o,mediaLibraryUrl:a}=function(e,t){const r=e.cloud_name,n=`/organization/${r}/media-library`,i=`/organization/${r}/playground`;let o=self.location;"null"===o.origin&&(o=new URL(self.origin));const a={is_widget:!0,frameHost:`${o.protocol}//${o.host}`,ml_id:t};var l="";return"playground"===e.mode?(e.url=e.asset_url,l=m(i,e,[...f,...c],a)):(e.path=e.folder,l=m(n,e,[...f,...c,...p,...h],a)),{initialURL:l,mediaLibraryUrl:l.href}}(e,n);i.mlUrl=o,i.callbacks=t,this.createIFrameAndContainer(e,a);const l=i,s=h.reduce(((e,t)=>(void 0!==l[t]&&(e[t]=l[t]),e)),{});console.log(o),this.messageHandler=(e=>new Promise(((t,r)=>{var n=!1;const i=function(e){let t,r=e.ifr,n=[e.mlUrl.origin];const i={[u.insert]:e.callbacks.insertHandler,[u.delete]:e.callbacks.deleteHandler,[u.identity]:e.callbacks.identityHandler,[u.hide]:()=>{e.hideCms()},[u.error]:e.callbacks.errorHandler,[u.upload]:e.callbacks.uploadHandler},o=e=>{if(!e||!e.length)throw"PostMessage - target not set!"},a=r=>{var o;if(~n.indexOf(r.origin)&&(t=r.origin,(o=v(r.data,r.origin))&&o.mlId&&o.mlId==e.mlId)){const e=o.type,t=i[e];t&&(d.log(`[postmessage]: found matching handler for '${r.type}' event from: ${r.origin}`,r.data),t(r.data,r.data.type,r))}};return o(n),self.addEventListener("message",a,!1),{send:(e,n,i={})=>{i=i.target||t,o(i);try{d.log(`[postmessage]: posting message to: ${i}`),r=r instanceof HTMLIFrameElement?r.contentWindow:r,r.postMessage(JSON.stringify({type:e,data:n}),i)}catch(e){d.error(`[postmessage]: failed to post message to target: ${i}`,e)}},close:()=>self.removeEventListener("message",a)}}(e),o=(t,r)=>{i.send(t,r,{target:e.mlUrl.origin})};e.ifr.addEventListener("load",(()=>{n||(n=!0,e.iframeLoaded(),t({sendMessage:o}))})),self.addEventListener("message",(t=>{let r=v(t);r=v(r.data),r&&"object"==typeof r&&"consoleLoaded"===r.type&&o(u.init,e)}),!1),e.ifr.addEventListener("error",(function(){}))})))({ifr:this.iframe,mlId:n,mlUrl:o,callbacks:{uploadHandler:this.emitUploadData.bind(this),errorHandler:this.emitErrorData.bind(this),identityHandler:this.emitIdentityData.bind(this),deleteHandler:this.emitDeleteData.bind(this),insertHandler:e=>{this.emitInsertData(e),this.isFullscreen||this.handleHide()}},iframeLoaded:this.handleLibraryLoaded,hideCms:this.handleHide,config:s}),this.appendAndFocus(i),this.handleShow(),this.show=(e={})=>(this.messageHandler.then((t=>{t.sendMessage(u.show,{mlId:n,options:{...e,config:e},config:e}),this.handleShow()})),this),this.hide=()=>(this.messageHandler.then((e=>{e.sendMessage(u.hide,{mlId:n}),this.handleHide()})),this)}appendAndFocus(e){var t=this.isFullscreen?this.iframe:this.fullscreenContainer;let r=document.body;if(this.isFullscreen&&(r=e.inline_container,"string"==typeof r&&(r=document.querySelector(r)),!r))throw new Error("Element Not Found ("+e.inline_container+")");r.appendChild(t),this.iframe.focus()}createIFrameAndContainer(e,t){const r=e=>{window.requestAnimationFrame((()=>{e.matches?this.fullscreenContainer.style.padding="25px":this.fullscreenContainer.style.padding="25px 0"}))};if(this.iframe=document.createElement("iframe"),this.iframe.setAttribute("src",t),this.iframe.setAttribute("frameborder","no"),this.iframe.setAttribute("allow","camera"),this.isFullscreen?(this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("height","100%"),this.iframe.style.border="none"):(this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("height","100%"),this.iframe.style.boxShadow="0 0 50px rgba(0, 0, 0, 0.8)"),!this.isFullscreen){if(this.fullscreenContainer=document.createElement("div"),this.fullscreenContainer.style.position="fixed",this.fullscreenContainer.style.top="0",this.fullscreenContainer.style.left="0",this.fullscreenContainer.style.height="100%",this.fullscreenContainer.style.width="100%",this.fullscreenContainer.style.boxSizing="border-box",this.fullscreenContainer.style.backgroundColor="rgba(0,0,0,0.5)",this.fullscreenContainer.style.zIndex=e.z_index||99999,matchMedia){const e=window.matchMedia("(min-width: 700px)");e.addListener(r),r(e)}this.fullscreenContainer.style.visibility="hidden",this.fullscreenContainer.appendChild(this.iframe)}}toggleVisibility=()=>{const e=e=>{27===e.keyCode&&this.hide()},t=()=>{var e=this.iframe.getBoundingClientRect();this.messageHandler.then((t=>{t.sendMessage(u.adjustMultiSelector,{iframeTop:e.top,iframeBottom:e.bottom,viewportHeight:window.innerHeight,iframeHeight:e.height})}))},r=this.isFullscreen?this.iframe:this.fullscreenContainer;this.isLibraryLoaded&&this.isMediaLibraryVisible?(r.style.visibility="visible",r.focus(),this.isFullscreen||document.addEventListener("keyup",e),this.isFullscreen&&(t(),document.addEventListener("scroll",t))):(r.style.visibility="hidden",document.removeEventListener("keyup",e),document.removeEventListener("scroll",t))};handleShow=()=>{!this.isFullscreen&&document.body&&(null===this.originalBodyOverflow&&(this.originalBodyOverflow=document.body.style.overflow),document.body.style.overflow="hidden"),this.isMediaLibraryVisible=!0,this.toggleVisibility(),this.emitShowData()};handleHide=()=>{!this.isFullscreen&&document.body&&null!==this.originalBodyOverflow&&(document.body.style.overflow=this.originalBodyOverflow,this.originalBodyOverflow=null),this.isMediaLibraryVisible=!1,this.toggleVisibility(),this.emitHideData()};handleLibraryLoaded=()=>{this.isLibraryLoaded=!0,this.toggleVisibility()};emitShowData(){return this.emit("show")}emitHideData(){return this.emit("hide")}emitInsertData(e){return this.emit("insert",e)}emitIdentityData(e){return this.emit("identity",e)}emitErrorData(e){return this.emit("error",e)}emitUploadData(e){return this.emit("upload",e)}emitDeleteData(e){return this.emit("delete",e)}setupEventHandlers({showHandler:e=()=>{},hideHandler:t=()=>{},insertHandler:r=()=>{},identityHandler:n=()=>{},errorHandler:i=()=>{}}={}){this.on("show",e),this.on("hide",t),this.on("insert",r),this.on("identity",n),this.on("error",i)}}const{v4:g}=function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(831);(e=>{const t=(e,t,r)=>new b({options:e,callbacks:t,element:r,mlId:g()});e.pixelbin=e.pixelbin||{},e.pixelbin.openMediaLibrary=(e,r,n)=>t(e,r,n).show(e),e.pixelbin.createMediaLibrary=(e,r,n)=>t(e,r,n)})(self)})();