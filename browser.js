// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a,l="function"==typeof Symbol?Symbol:void 0,c="function"==typeof l?l.toStringTag:"",f=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[c]=e:delete t[c],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}a=function(){return p(arguments)}();var s=a,g="function"==typeof Object.defineProperty?Object.defineProperty:null,b=Object.defineProperty;function y(t){return"number"==typeof t}function m(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function d(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+m(i):m(i)+t,r&&(t="-"+t)),t}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!y(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=d(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=d(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===v.call(t.specifier)?v.call(e):h.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var x=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,E=/e\+(\d)$/,S=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":x(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=O.call(e,V,"$1e"),e=O.call(e,P,"e"),e=O.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=O.call(e,E,"e+0$1"),e=O.call(e,S,"e-0$1"),t.alternate&&(e=O.call(e,T,"$1."),e=O.call(e,k,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===_.call(t.specifier)?_.call(e):j.call(e)}function F(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}var C=String.fromCharCode,N=Array.isArray;function $(t){return t!=t}function B(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function L(t){var n,e,r,i,o,u,a,l,c,f,p,s,g;if(!N(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,l=0;l<t.length;l++)if("string"==typeof(r=t[l]))u+=r;else{if(n=void 0!==r.precision,!(r=B(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),e=r.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,$(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,$(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!$(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=$(o)?String(r.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=A(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=d(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,p=r.width,s=r.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+F(g):F(g)+f)),u+=r.arg||"",a+=1}return u}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function W(t){var n,e,r,i;for(e=[],i=0,r=R.exec(t);r;)(n=t.slice(i,R.lastIndex-r[0].length)).length&&e.push(n),e.push(G(r)),i=R.lastIndex,r=R.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function X(t){var n,e;if("string"!=typeof t)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[W(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return L.apply(null,n)}var Z,M=Object.prototype,U=M.toString,Y=M.__defineGetter__,D=M.__defineSetter__,H=M.__lookupGetter__,z=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(H.call(t,n)||z.call(t,n)?(r=t.__proto__,t.__proto__=M,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(t,n,e.get),u&&D&&D.call(t,n,e.set),t};var q=Z;function J(t,n,e){q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function K(t){return"string"==typeof t}var Q=String.prototype.valueOf,tt=r();function nt(t){return"object"==typeof t&&(t instanceof String||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function et(t){return K(t)||nt(t)}function rt(t){return"number"==typeof t}J(et,"isPrimitive",K),J(et,"isObject",nt);var it=Number,ot=it.prototype.toString,ut=r();function at(t){return"object"==typeof t&&(t instanceof it||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function lt(t){return rt(t)||at(t)}function ct(t){return t!=t}function ft(t){return rt(t)&&ct(t)}function pt(t){return at(t)&&ct(t.valueOf())}function st(t){return ft(t)||pt(t)}J(lt,"isPrimitive",rt),J(lt,"isObject",at),J(st,"isPrimitive",ft),J(st,"isObject",pt);var gt=Number.POSITIVE_INFINITY,bt=it.NEGATIVE_INFINITY,yt=Math.floor;function mt(t){return yt(t)===t}function dt(t){return t<gt&&t>bt&&mt(t)}function ht(t){return rt(t)&&dt(t)}function vt(t){return at(t)&&dt(t.valueOf())}function wt(t){return ht(t)||vt(t)}J(wt,"isPrimitive",ht),J(wt,"isObject",vt);var xt=Object.prototype.propertyIsEnumerable,jt=!xt.call("beep","0");function _t(t,n){var e;return null!=t&&(!(e=xt.call(t,n))&&jt&&et(t)?!ft(n=+n)&&ht(n)&&n>=0&&n<t.length:e)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)},Et=s?p:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&mt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!_t(t,"callee")},St=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}J(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Ot(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Tt));var kt=_t((function(){}),"prototype"),It=!_t({toString:null},"toString"),Pt=9007199254740991;function Vt(t,n,e){var r,i,o;if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&mt(o.length)&&o.length>=0&&o.length<=Pt||K(t)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!ht(e))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(st(n)){for(;i<r;i++)if(st(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var At=/./;function Ft(t){return"boolean"==typeof t}var Ct=Boolean,Nt=Boolean.prototype.toString,$t=r();function Bt(t){return"object"==typeof t&&(t instanceof Ct||($t?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Lt(t){return Ft(t)||Bt(t)}J(Lt,"isPrimitive",Ft),J(Lt,"isObject",Bt);var Rt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Wt="object"==typeof globalThis?globalThis:null,Xt=function(t){if(arguments.length){if(!Ft(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Wt)return Wt;if(Rt)return Rt;if(Gt)return Gt;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Xt.document&&Xt.document.childNodes,Mt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Yt=/^\s*function\s*([^(]*)/i;function Dt(t){var n,e,r,i;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Yt.exec(r.toString()))return n[1]}return Tt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}J(Ut,"REGEXP",Yt);var Ht="function"==typeof At||"object"==typeof Mt||"function"==typeof Zt?function(t){return Dt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"==(n=typeof t)?Dt(t).toLowerCase():n};function zt(t){return t.constructor&&t.constructor.prototype===t}var qt,Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window,Qt=function(){var t;if("undefined"===Ht(Kt))return!1;for(t in Kt)try{-1===Vt(Jt,t)&&u(Kt,t)&&null!==Kt[t]&&"object"===Ht(Kt[t])&&zt(Kt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window,nn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qt=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Et(n)?t(St.call(n)):t(n)}:t:function(t){var n,e,r,i,o,a,l;if(i=[],Et(t)){for(l=0;l<t.length;l++)i.push(l.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(l=0;l<t.length;l++)i.push(l.toString())}else{if(0==(r="function"==typeof t)&&!Tt(t))return i;e=kt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(It)for(n=function(t){if(!1===tn&&!Qt)return zt(t);try{return zt(t)}catch(t){return!1}}(t),l=0;l<nn.length;l++)a=nn[l],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var en=qt;function rn(t){return"function"===Ht(t)}var on,un=Object,an=Object.getPrototypeOf;on=rn(Object.getPrototypeOf)?an:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ln=on,cn=Object.prototype;function fn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(n=function(t){return null==t?null:(t=un(t),ln(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&rn(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===cn||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}function pn(t,n){var e,r,i,o,a,l,c,f=!0;if(!Tt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fn(n))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!Ft(f=n.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=en(t)).length,a={},f)for(c=0;c<r;c++)u(a,o=t[i=e[c]])?(l=a[o],Ot(l)?a[o].push(i):a[o]=[l,i]):a[o]=i;else for(c=0;c<r;c++)a[t[i=e[c]]]=i;return a}var sn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function gn(){var t;return 0===arguments.length?sn.all.slice():(t=sn[arguments[0]])?t.slice():[]}function bn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function yn(t,n,e){q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}J(gn,"enum",bn),function(t,n){var e,r,i;for(e=en(n),i=0;i<e.length;i++)yn(t,r=e[i],n[r])}(gn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var mn=pn({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1}),dn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function hn(t){var n=typeof t;return"string"===n?null===function(t){var n=dn[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=mn[t];return"string"==typeof n?n:null}(t):null}var vn,wn={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1,bool:0},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1,bool:0},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1,bool:0},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1,bool:0},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1,bool:0},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1,bool:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1,bool:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1,bool:0},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0,bool:0},bool:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1,bool:1}};function xn(t){return 0===arguments.length?function(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=en(wn)).length,l=0;l<n;l++){for(i=t[l],u=wn[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}():(void 0===vn&&(vn=function(){var t,n,e,r,i,o,u,a,l;for(e={},n=(t=en(wn)).length,l=0;l<n;l++){for(i=t[l],u=wn[i],r=[],a=0;a<n;a++)1===u[o=t[a]]&&r.push(o);e[i]=r}return e}()),t=hn(t),u(vn,t)?vn[t].slice():null)}var jn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function _n(){return jn.slice()}var On={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function En(){return{bool:On.bool,int8:On.int8,uint8:On.uint8,uint8c:On.uint8c,int16:On.int16,uint16:On.uint16,int32:On.int32,uint32:On.uint32,int64:On.int64,uint64:On.uint64,float32:On.float32,float64:On.float64,complex64:On.complex64,complex128:On.complex128,binary:On.binary,generic:On.generic,notype:On.notype,userdefined_type:On.userdefined_type}}J(_n,"enum",En),function(t,n){var e,r,i;for(e=en(n),i=0;i<e.length;i++)yn(t,r=e[i],n[r])}(_n,En());var Sn=pn(En(),{duplicates:!1});function Tn(t){var n=Sn[t];return"string"==typeof n?n:null}var kn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function In(){return kn.slice()}var Pn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Vn(){return{bool:Pn.bool,int8:Pn.int8,uint8:Pn.uint8,uint8c:Pn.uint8c,int16:Pn.int16,uint16:Pn.uint16,int32:Pn.int32,uint32:Pn.uint32,int64:Pn.int64,uint64:Pn.uint64,float32:Pn.float32,float64:Pn.float64,complex64:Pn.complex64,complex128:Pn.complex128,binary:Pn.binary,generic:Pn.generic,notype:Pn.notype,userdefined_type:Pn.userdefined_type}}J(In,"enum",Vn),function(t,n){var e,r,i;for(e=en(n),i=0;i<e.length;i++)yn(t,r=e[i],n[r])}(In,Vn());var An=Vn();function Fn(t){var n=An[t];return"number"==typeof n?n:null}function Cn(){var t,n=arguments,e="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}function Nn(t,n){var e,r,i,o,u,a,l;for(r=t.length,i=n.length,e=[],l=0,u=0;u<r&&!(l>=i);u++)for(o=t[u],a=l;a<i;a++)if(o===n[a]){l=a+1,e.push(o);break}return e}function $n(t){var n,e,r,i,o;for(n=[],r=0;r<t.length;r++){if(i=t[r],o=void 0,null===(e="string"==(o=typeof i)?null===Fn(i)?null:i:"number"===o?Tn(i):null))return new TypeError(Cn("1fNDj",t[r]));n.push(e)}return n}return function(t,n,e){var r,i,o,u,a,l,c,f,p,s,g,b;if(i=arguments.length>2?e:{},(a=$n(t))instanceof Error)throw a;if(n===t)l=a;else if((l=$n(n))instanceof Error)throw l;for(l.sort(),f=a.length,u=[],p=0;p<f;p++)if(null!==(r=xn(c=a[p])))for(r=Nn(l,r.sort()),s=0;s<r.length;s++)u.push(c,"uint8",r[s]);if(i.enums){for(o=[],p=0;p<u.length;p++)o.push((g=u[p],b=void 0,"number"==(b=typeof g)?Tn(g)?g:null:"string"===b?Fn(g):null));u=o}return u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).signatures=n();
//# sourceMappingURL=browser.js.map
