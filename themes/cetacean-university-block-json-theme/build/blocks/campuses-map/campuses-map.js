(()=>{"use strict";var e,t,r,n,o,a,c,i,l,s={872:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(1609),o=r(4997),a=r(982),c=r(4717),i=r(542);const e=(await r.e(8652).then(r.t.bind(r,8652,19))).default;(0,o.registerBlockType)(e.name,{...e,icon:()=>(0,n.createElement)(a.g,{icon:c.I9}),edit:i.i}),t()}catch(e){t(e)}}),1)},542:(e,t,r)=>{r.d(t,{i:()=>h});var n=r(1609),o=r(4550);const a=window.wp.coreData,c=window.wp.data,i=window.wp.blockEditor;function l({children:e,style:t,...r}){const o=(0,i.useBlockProps)();return console.log(o),(0,n.createElement)("div",{...o,...r,style:{...o.style,padding:0,...t}},e)}function s(e){e.preventDefault()}function u(e){return(0,n.createElement)("a",{onClick:s,...e})}var p=r(7438),d=r(3643);function f(e,t={}){const r={stripTags:!0,...t},{stripTags:n}=r;return(0,d.pipe)(e.title.rendered,n?e=>(0,p.QZ)(e).result:e=>e)}const m=(0,n.forwardRef)((function({campus:e,withLink:t=!0},r){const{acf:{map_location:a}}=e,c=(0,n.useRef)(null),[i,l]=(0,n.useState)(!1);return(0,n.useImperativeHandle)(r,(()=>c.current),[]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.J8,{position:new google.maps.LatLng(a.lat,a.lng),ref:c,clickable:!0,onClick:function(){l(!0)}},(0,n.createElement)(o.yU,null)),i?(0,n.createElement)(o.Fu,{anchor:c.current,onClose:function(){l(!1)}},(0,n.createElement)("h3",null,t?(0,n.createElement)(u,{href:e.link},f(e)):f(e)),a.address):"")}));function g({campuses:e,isSingle:t}){const r=(0,o.ko)(),a=e.reduce(((e,t)=>{const{acf:{map_location:r}}=t;return e+r.lat+r.lng}),"");return(0,n.useEffect)((()=>{if(!r||0===e.length)return;const t=new google.maps.LatLngBounds;if(e.forEach((({acf:{map_location:e}})=>{const r=new google.maps.LatLng(e.lat,e.lng);t.extend(r)})),1===e.length)return r.setCenter(t.getCenter()),void r.setZoom(4);r.fitBounds(t)}),[r,a]),(0,n.createElement)(n.Fragment,null,(e||[]).map((e=>(0,n.createElement)(m,{campus:e,key:e.id,withLink:!t}))))}const b=(0,n.memo)((function(e){return(0,n.createElement)(o.T5,{mapId:"CAMPUS_MAP_ID",className:"acf-map",mapTypeId:google.maps.MapTypeId.ROADMAP,defaultZoom:0,defaultCenter:{lat:0,lng:0}},(0,n.createElement)(g,{...e}))}),((e,t)=>{const{campuses:r}=e,{campuses:n}=t;function o(e,t){const{acf:{map_location:r}}=t;return e+t.id+r.lat+r.lng+r.address}return r.reduce(o,"")===n.reduce(o,"")}));function h(e){const{attributes:t,setAttributes:r}=e,i=(0,c.useSelect)((e=>e(a.store).getEntityRecords("postType","campus",{per_page:-1})),[]);return(0,n.createElement)(o.c4,{apiKey:"",onLoad:()=>console.log("Google Maps API Loaded")},(0,n.createElement)(l,null,(0,n.createElement)("div",{className:"container container--narrow page-section"},(0,n.createElement)(b,{campuses:i||[]}))))}},1609:e=>{e.exports=window.React},5795:e=>{e.exports=window.ReactDOM},6087:e=>{e.exports=window.lodash},4997:e=>{e.exports=window.wp.blocks}},u={};function p(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return s[e].call(r.exports,r,r.exports,p),r.exports}p.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},p.a=(o,a,c)=>{var i;c&&((i=[]).d=-1);var l,s,u,p=new Set,d=o.exports,f=new Promise(((e,t)=>{u=t,s=e}));f[t]=d,f[e]=e=>(i&&e(i),p.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{c[t]=e,n(a)}),(e=>{c[r]=e,n(a)}));var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var c=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),s=new Promise((t=>{(a=()=>t(c)).r=0;var r=e=>e!==i&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](r)))}));return a.r?s:c()}),(e=>(e?u(f[r]=e):s(d),n(i)))),i&&i.d<0&&(i.d=0)},o=[],p.O=(e,t,r,n)=>{if(!t){var a=1/0;for(s=0;s<o.length;s++){for(var[t,r,n]=o[s],c=!0,i=0;i<t.length;i++)(!1&n||a>=n)&&Object.keys(p.O).every((e=>p.O[e](t[i])))?t.splice(i--,1):(c=!1,n<a&&(a=n));if(c){o.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var s=o.length;s>0&&o[s-1][2]>n;s--)o[s]=o[s-1];o[s]=[t,r,n]},p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);p.r(r);var n={};a=a||[null,c({}),c([]),c(c)];for(var o=2&t&&e;"object"==typeof o&&!~a.indexOf(o);o=c(o))Object.getOwnPropertyNames(o).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,p.d(r,n),r},p.d=(e,t)=>{for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((t,r)=>(p.f[r](e,t),t)),[])),p.u=e=>e+".js",p.miniCssF=e=>{},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},l="cetacean-university-block-json-theme:",p.l=(e,t,r,n)=>{if(i[e])i[e].push(t);else{var o,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==l+r){o=u;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.setAttribute("data-webpack",l+r),o.src=e),i[e]=[t];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var n=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),a&&document.head.appendChild(o)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.j=4291,(()=>{var e;p.g.importScripts&&(e=p.g.location+"");var t=p.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e+"../../"})(),(()=>{var e={4291:0};p.f.j=(t,r)=>{var n=p.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=p.p+p.u(t),c=new Error;p.l(a,(r=>{if(p.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}}),"chunk-"+t,t)}},p.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,c,i]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in c)p.o(c,n)&&(p.m[n]=c[n]);if(i)var s=i(p)}for(t&&t(r);l<a.length;l++)o=a[l],p.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return p.O(s)},r=globalThis.webpackChunkcetacean_university_block_json_theme=globalThis.webpackChunkcetacean_university_block_json_theme||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var d=p.O(void 0,[8096],(()=>p(872)));d=p.O(d)})();