// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return Math.abs(n)};var r=function(){var r,t,u,e,a,f,i;return r=0,t=0,e=0,function(o){if(0===arguments.length)return u?r+e+t:null;u=!0,f=r+o,i=n(r)>=n(o)?r-f+o:o-f+r;r=f,f=e+i,a=n(e)>=n(i)?e-f+i:i-f+e;return r+(e=f)+(t+=a)}};function t(){var n=r();return function(r,t){var u;if(0===arguments.length)return n();return n((u=t-r)*u)}}export{t as default};
//# sourceMappingURL=mod.js.map
