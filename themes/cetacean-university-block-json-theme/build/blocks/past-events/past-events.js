(()=>{"use strict";var e,t,r,n,a,o,c,i,l,s={7466:(e,t,r)=>{r.d(t,{i:()=>h});var n=r(1609);function a(e){e.preventDefault()}function o(e){return(0,n.createElement)("a",{onClick:a,...e})}const c=window.wp.coreData,i=window.wp.data;var l=r(876),s=r(1486),u=r(255),d=r(7438),m=r(3643),p=r(1239);function f({event:e,isOnEditor:t}){const r=(0,s.qg)(e.acf.event_date,"yyyy-MM-dd HH:mm:ss",new Date),o=e.link,c=(0,n.useMemo)((()=>()=>(0,n.createElement)(u.A,{containerClassName:"event-summary__date t-center event-summary__date--loading",circle:!0,height:"100%",width:"100%"})),[e.isPlaceholder]),i=(0,n.useMemo)((()=>()=>(0,n.createElement)(u.A,{count:.5})),[e.isPlaceholder]),f=(0,n.useMemo)((()=>()=>(0,n.createElement)("p",null,(0,n.createElement)(u.A,{count:3}))),[e.isPlaceholder]),v=(0,n.useMemo)((()=>e=>(0,n.createElement)("a",{href:o,onClick:t?a:void 0,...e},e.children)),[o,t]);return(0,n.createElement)("div",{className:"event-summary"},e.isPlaceholder?(0,n.createElement)(c,null):(0,n.createElement)(v,{className:"event-summary__date t-center"},(0,n.createElement)("span",{className:"event-summary__month"},(0,l.GP)(r,"MMM")),(0,n.createElement)("span",{className:"event-summary__day"},(0,l.GP)(r,"dd"))),(0,n.createElement)("div",{className:"event-summary__content"},(0,n.createElement)("h5",{className:"event-summary__title headline headline--tiny"},e.isPlaceholder?(0,n.createElement)(i,null):(0,n.createElement)(v,null,function(e,t={}){const r={stripTags:!0,...t},{stripTags:n}=r;return(0,m.pipe)(e.title.rendered,n?e=>(0,d.QZ)(e).result:e=>e)}(e))),e.isPlaceholder?(0,n.createElement)(f,null):(0,n.createElement)("p",null,function(e,t={}){const r={stripTags:!0,trimWords:30,...t},{stripTags:n,trimWords:a}=r,o=e.excerpt&&e.excerpt.rendered?e.excerpt.rendered:e.content.rendered;return(0,m.pipe)(o,n?e=>(0,d.QZ)(e).result:e=>e,(e=>function(e,t,r="..."){const n=p.A.words(e.trim(),/[^\s]+/g);return t>n.length?e:n.slice(0,t).join(" ").concat(r)}(e,a,"...")))}(e,{trimWords:20})+" ",(0,n.createElement)(v,{className:"nu gray"},"Learn more"))))}const v=window.wp.blockEditor;function y({children:e,style:t,...r}){const a=(0,v.useBlockProps)();return console.log(a),(0,n.createElement)("div",{...a,...r,style:{...a.style,padding:0,...t}},e)}function h(e){const{attributes:t,setAttributes:r}=e,a=new Date,s=(0,i.useSelect)((e=>e(c.store).getEntityRecords("postType","event",{orderby:"meta_value",order:"asc",meta_key:"event_date",meta_query_key:"event_date",meta_query_value:(0,l.GP)(a,"yyyyMMddHHmmss"),meta_query_compare:"<",meta_query_type:"DATE"})),[]);return(0,n.createElement)(y,null,(0,n.createElement)("div",{className:"container container--narrow page-section"},s?s.map((e=>(0,n.createElement)(f,{key:e.id,event:e,isOnEditor:!0}))):"",(0,n.createElement)("hr",{className:"section-break"}),(0,n.createElement)("p",null,(0,n.createElement)(o,null,"See Upcoming Events"))))}},2402:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(4997),a=r(7466);const e=(await r.e(3172).then(r.t.bind(r,3172,19))).default;(0,n.registerBlockType)(e.name,{...e,icon:"calendar",edit:a.i}),t()}catch(e){t(e)}}),1)},1609:e=>{e.exports=window.React},6087:e=>{e.exports=window.lodash},4997:e=>{e.exports=window.wp.blocks}},u={};function d(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return s[e].call(r.exports,r,r.exports,d),r.exports}d.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},d.a=(a,o,c)=>{var i;c&&((i=[]).d=-1);var l,s,u,d=new Set,m=a.exports,p=new Promise(((e,t)=>{u=t,s=e}));p[t]=m,p[e]=e=>(i&&e(i),d.forEach(e),p.catch((e=>{}))),a.exports=p,o((a=>{var o;l=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{c[t]=e,n(o)}),(e=>{c[r]=e,n(o)}));var c={};return c[e]=e=>e(o),c}}var i={};return i[e]=e=>{},i[t]=a,i})))(a);var c=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),s=new Promise((t=>{(o=()=>t(c)).r=0;var r=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(o.r++,e.push(o)));l.map((t=>t[e](r)))}));return o.r?s:c()}),(e=>(e?u(p[r]=e):s(m),n(i)))),i&&i.d<0&&(i.d=0)},a=[],d.O=(e,t,r,n)=>{if(!t){var o=1/0;for(s=0;s<a.length;s++){for(var[t,r,n]=a[s],c=!0,i=0;i<t.length;i++)(!1&n||o>=n)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(c=!1,n<o&&(o=n));if(c){a.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var s=a.length;s>0&&a[s-1][2]>n;s--)a[s]=a[s-1];a[s]=[t,r,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var n={};o=o||[null,c({}),c([]),c(c)];for(var a=2&t&&e;"object"==typeof a&&!~o.indexOf(a);a=c(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(r,n),r},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},l="cetacean-university-block-json-theme:",d.l=(e,t,r,n)=>{if(i[e])i[e].push(t);else{var a,o;if(void 0!==r)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==l+r){a=u;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",l+r),a.src=e),i[e]=[t];var m=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var n=i[e];if(delete i[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),o&&document.head.appendChild(a)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.j=4957,(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e+"../../"})(),(()=>{var e={4957:0};d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=d.p+d.u(t),c=new Error;d.l(o,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,c,i]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in c)d.o(c,n)&&(d.m[n]=c[n]);if(i)var s=i(d)}for(t&&t(r);l<o.length;l++)a=o[l],d.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return d.O(s)},r=globalThis.webpackChunkcetacean_university_block_json_theme=globalThis.webpackChunkcetacean_university_block_json_theme||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var m=d.O(void 0,[8096],(()=>d(2402)));m=d.O(m)})();