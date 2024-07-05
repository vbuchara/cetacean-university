(()=>{"use strict";var e,t,a,n,r,o,i,s,c={2224:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var n=a(4997),r=a(4345),o=a(7449);const e=(await a.e(228).then(a.t.bind(a,228,19))).default;(0,n.registerBlockType)(e.name,{...e,icon:"cover-image",edit:r.i,save:o.l}),t()}catch(e){t(e)}}),1)},4345:(e,t,a)=>{a.d(t,{i:()=>u});var n=a(1609),r=a(4715);class o{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}function i({children:e,style:t,...a}){const o=(0,r.useBlockProps)();return console.log(o),(0,n.createElement)("div",{...o,...a,style:{...o.style,padding:0,...t}},e)}const s=window.wp.apiFetch;var c=a.n(s);const l=window.wp.components;function m({attributes:e,setAttributes:t}){function a(){t({bannerImageId:0,bannerImageUrl:CetaceanUniversityBannerData.theme_path+"/images/library-hero.jpg"})}return(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:"Background Image",initialOpen:!0},(0,n.createElement)(l.PanelRow,null,(0,n.createElement)(l.Flex,{justify:"flex-start"},(0,n.createElement)(r.MediaUploadCheck,null,(0,n.createElement)(r.MediaUpload,{onSelect:async function(e){try{const{source_url:a,media_details:n}=await c()({path:`/wp/v2/media/${e.id}`}),r=n.sizes["page-banner"];t({bannerImageId:e.id,bannerImageUrl:r?r.source_url:a})}catch(e){console.log(e)}},value:e.bannerImageId,render:({open:e})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.Button,{variant:"primary",onClick:e},"Choose Image"),(0,n.createElement)(l.Button,{variant:"secondary",onClick:a},"Set to Default"))}))))))}function u(e){const{attributes:t}=e,a=t.bannerImageUrl?t.bannerImageUrl:CetaceanUniversityBannerData.theme_path+"/images/library-hero.jpg";return(0,n.createElement)(i,null,(0,n.createElement)(m,{...e}),(0,n.createElement)("div",{className:"page-banner"},(0,n.createElement)("div",{className:"page-banner__bg-image",style:{"--bg-image":`url(${a})`}}),(0,n.createElement)("div",{className:"page-banner__content container t-center c-white"},(0,n.createElement)(r.InnerBlocks,{allowedBlocks:[o.Heading,o.Button]}))))}},7449:(e,t,a)=>{a.d(t,{l:()=>o});var n=a(1609),r=a(4715);function o({attributes:e}){return(0,n.createElement)(r.InnerBlocks.Content,null)}},1609:e=>{e.exports=window.React},4715:e=>{e.exports=window.wp.blockEditor},4997:e=>{e.exports=window.wp.blocks}},l={};function m(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return c[e](a,a.exports,m),a.exports}m.m=c,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},m.a=(r,o,i)=>{var s;i&&((s=[]).d=-1);var c,l,m,u=new Set,p=r.exports,d=new Promise(((e,t)=>{m=t,l=e}));d[t]=p,d[e]=e=>(s&&e(s),u.forEach(e),d.catch((e=>{}))),r.exports=d,o((r=>{var o;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var o=[];o.d=0,r.then((e=>{i[t]=e,n(o)}),(e=>{i[a]=e,n(o)}));var i={};return i[e]=e=>e(o),i}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var i=()=>c.map((e=>{if(e[a])throw e[a];return e[t]})),l=new Promise((t=>{(o=()=>t(i)).r=0;var a=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(o.r++,e.push(o)));c.map((t=>t[e](a)))}));return o.r?l:i()}),(e=>(e?m(d[a]=e):l(p),n(s)))),s&&s.d<0&&(s.d=0)},m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,m.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);m.r(a);var n={};r=r||[null,o({}),o([]),o(o)];for(var i=2&t&&e;"object"==typeof i&&!~r.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,m.d(a,n),a},m.d=(e,t)=>{for(var a in t)m.o(t,a)&&!m.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((t,a)=>(m.f[a](e,t),t)),[])),m.u=e=>e+".js",m.miniCssF=e=>{},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},s="cetacean-university-block-json-theme:",m.l=(e,t,a,n)=>{if(i[e])i[e].push(t);else{var r,o;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+a){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,m.nc&&r.setAttribute("nonce",m.nc),r.setAttribute("data-webpack",s+a),r.src=e),i[e]=[t];var p=(t,a)=>{r.onerror=r.onload=null,clearTimeout(d);var n=i[e];if(delete i[e],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(a))),t)return t(a)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),o&&document.head.appendChild(r)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var t=m.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e+"../../"})(),(()=>{var e={9547:0};m.f.j=(t,a)=>{var n=m.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var o=m.p+m.u(t),i=new Error;m.l(o,(a=>{if(m.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,r,[o,i,s]=a,c=0;if(o.some((t=>0!==e[t]))){for(n in i)m.o(i,n)&&(m.m[n]=i[n]);s&&s(m)}for(t&&t(a);c<o.length;c++)r=o[c],m.o(e,r)&&e[r]&&e[r][0](),e[r]=0},a=globalThis.webpackChunkcetacean_university_block_json_theme=globalThis.webpackChunkcetacean_university_block_json_theme||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),m(2224)})();