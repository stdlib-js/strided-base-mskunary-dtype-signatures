// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-str@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(e,t){var r,s,n,i,o,d,l;for(s=e.length,n=t.length,r=[],l=0,o=0;o<s&&!(l>=n);o++)for(i=e[o],d=l;d<n;d++)if(i===t[d]){l=d+1,r.push(i);break}return r}function i(e){var t,n,i;for(t=[],i=0;i<e.length;i++){if(null===(n=r(e[i])))return new TypeError(s("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",e[i]));t.push(n)}return t}function o(r,s,o){var d,l,f,a,h,m,u,p,v,g;if(l=arguments.length>2?o:{},(h=i(r))instanceof Error)throw h;if(s===r)m=h;else if((m=i(s))instanceof Error)throw m;for(m.sort(),p=h.length,a=[],v=0;v<p;v++)if(u=h[v],null!==(d=e(u)))for(d=n(m,d.sort()),g=0;g<d.length;g++)a.push(u,"uint8",d[g]);if(l.enums){for(f=[],v=0;v<a.length;v++)f.push(t(a[v]));a=f}return a}export{o as default};
//# sourceMappingURL=index.mjs.map
