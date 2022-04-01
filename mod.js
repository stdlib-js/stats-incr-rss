// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)};var n=function(){var n,t,u,e,a,f,i;return n=0,t=0,e=0,function(o){if(0===arguments.length)return u?n+e+t:null;u=!0,f=n+o,i=r(n)>=r(o)?n-f+o:o-f+n;n=f,f=e+i,a=r(e)>=r(i)?e-f+i:i-f+e;return n+(e=f)+(t+=a)}};var t=function(){var r=n();return function(n,t){var u;if(0===arguments.length)return r();return r((u=t-n)*u)}};export{t as default};
//# sourceMappingURL=mod.js.map
