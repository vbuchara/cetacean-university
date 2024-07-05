(()=>{"use strict";var e,t,r,a,i,n,o,s,c,l={958:(e,t,r)=>{r.d(t,{i:()=>v});var a=r(1609),i=r(4715),n=r(982),o=r(5371),s=r(4350),c=r(5976),l=r(3008);class m{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}class u{static PresetPrefix="--wp--preset--color";static Black=`${this.PresetPrefix}--black`;static White=`${this.PresetPrefix}--white`;static CyanBluishGray=`${this.PresetPrefix}--cyan-bluish-gray`;static PalePink=`${this.PresetPrefix}--pale-pink`;static VividRed=`${this.PresetPrefix}--vivid-red`;static LuminousVividOrange=`${this.PresetPrefix}--luminous-vivid-orange`;static LuminousVividAmber=`${this.PresetPrefix}--luminous-vivid-amber`;static LightGreenCyan=`${this.PresetPrefix}--light-green-cyan`;static VividGreenCyan=`${this.PresetPrefix}--vivid-green-cyan`;static PaleCyanBlue=`${this.PresetPrefix}--pale-cyan-blue`;static VividCyanBlue=`${this.PresetPrefix}--vivid-cyan-blue`;static VividPurple=`${this.PresetPrefix}--vivid-purple`;static Primary=`${this.PresetPrefix}--primary`;static Secondary=`${this.PresetPrefix}--secondary`;static getColorFromVar(e){return getComputedStyle(document.body).getPropertyValue(e)}static getColorsList(){return[{name:"Primary",color:`var(${this.Primary})`},{name:"Secondary",color:`var(${this.Secondary})`},{name:"Black",color:`var(${this.Black})`},{name:"White",color:`var(${this.White})`},{name:"Cyan Bluish Gray",color:`var(${this.CyanBluishGray})`},{name:"Pale Pink",color:`var(${this.PalePink})`},{name:"Vivid Red",color:`var(${this.VividRed})`},{name:"Luminous Vivid Orange",color:`var(${this.LuminousVividOrange})`},{name:"Luminous Vivid Amber",color:`var(${this.LuminousVividAmber})`},{name:"Light Green Cyan",color:`var(${this.LightGreenCyan})`},{name:"Vivid Green Cyan",color:`var(${this.VividGreenCyan})`},{name:"Pale Cyan Blue",color:`var(${this.PaleCyanBlue})`},{name:"Vivid Cyan Blue",color:`var(${this.VividCyanBlue})`},{name:"Vivid Purple",color:`var(${this.VividPurple})`}]}}function h(e){e.preventDefault()}function d(e){return(0,a.createElement)("a",{onClick:h,...e})}function p({children:e,style:t,...r}){const n=(0,i.useBlockProps)();return console.log(n),(0,a.createElement)("div",{...n,...r,style:{...n.style,padding:0,...t}},e)}function v(e){const{attributes:t,setAttributes:r}=e,{siteAnchor:h}=t,v=(0,l.No)(.3)(u.getColorFromVar(u.Primary));return(0,i.useBlockProps)(),(0,a.createElement)(p,null,(0,a.createElement)("header",{className:"site-header site-header--editor",style:{"--background-color":v}},(0,a.createElement)("div",{className:"site-header__container"},(0,a.createElement)("h1",{className:"school-logo-text"},(0,a.createElement)(i.RichText,{tagName:"a",allowedFormats:["core/bold","core/italic"],value:h,onChange:e=>r({siteAnchor:e})})),(0,a.createElement)(d,{className:"js-search-trigger site-header__search-trigger"},(0,a.createElement)(n.g,{className:"site-header__search-trigger-icon",icon:s.$U,width:"1.4rem",height:"1.4rem"})),(0,a.createElement)("button",{className:"site-header__menu-trigger site-header__menu-trigger--closed"},(0,a.createElement)(n.g,{className:"site-header__menu-trigger-open-icon",icon:o.ck,width:"1.4rem",height:"1.4rem"}),(0,a.createElement)(n.g,{className:"site-header__menu-trigger-close-icon",icon:c.Jy,width:"1.4rem",height:"1.4rem"})),(0,a.createElement)(i.InnerBlocks,{allowedBlocks:[m.Menu],template:[[m.Menu,{}]],templateLock:"all"}))))}u||(u={})},8622:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(4997),i=r(3382),n=r(958),o=r(5210);const e=(await r.e(4651).then(r.t.bind(r,4651,19))).default;(0,a.registerBlockType)(e.name,{...e,icon:i.A,edit:n.i,save:o.l}),t()}catch(e){t(e)}}),1)},5210:(e,t,r)=>{r.d(t,{l:()=>n});var a=r(1609),i=r(4715);function n(e){return(0,a.createElement)(i.InnerBlocks.Content,null)}},1609:e=>{e.exports=window.React},4715:e=>{e.exports=window.wp.blockEditor},4997:e=>{e.exports=window.wp.blocks},5573:e=>{e.exports=window.wp.primitives}},m={};function u(e){var t=m[e];if(void 0!==t)return t.exports;var r=m[e]={exports:{}};return l[e].call(r.exports,r,r.exports,u),r.exports}u.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},u.a=(i,n,o)=>{var s;o&&((s=[]).d=-1);var c,l,m,u=new Set,h=i.exports,d=new Promise(((e,t)=>{m=t,l=e}));d[t]=h,d[e]=e=>(s&&e(s),u.forEach(e),d.catch((e=>{}))),i.exports=d,n((i=>{var n;c=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var n=[];n.d=0,i.then((e=>{o[t]=e,a(n)}),(e=>{o[r]=e,a(n)}));var o={};return o[e]=e=>e(n),o}}var s={};return s[e]=e=>{},s[t]=i,s})))(i);var o=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(n=()=>t(o)).r=0;var r=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(n.r++,e.push(n)));c.map((t=>t[e](r)))}));return n.r?l:o()}),(e=>(e?m(d[r]=e):l(h),a(s)))),s&&s.d<0&&(s.d=0)},i=[],u.O=(e,t,r,a)=>{if(!t){var n=1/0;for(l=0;l<i.length;l++){for(var[t,r,a]=i[l],o=!0,s=0;s<t.length;s++)(!1&a||n>=a)&&Object.keys(u.O).every((e=>u.O[e](t[s])))?t.splice(s--,1):(o=!1,a<n&&(n=a));if(o){i.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=i.length;l>0&&i[l-1][2]>a;l--)i[l]=i[l-1];i[l]=[t,r,a]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);u.r(r);var a={};n=n||[null,o({}),o([]),o(o)];for(var i=2&t&&e;"object"==typeof i&&!~n.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,u.d(r,a),r},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>e+".js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},c="cetacean-university-block-json-theme:",u.l=(e,t,r,a)=>{if(s[e])s[e].push(t);else{var i,n;if(void 0!==r)for(var o=document.getElementsByTagName("script"),l=0;l<o.length;l++){var m=o[l];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==c+r){i=m;break}}i||(n=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",c+r),i.src=e),s[e]=[t];var h=(t,r)=>{i.onerror=i.onload=null,clearTimeout(d);var a=s[e];if(delete s[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),n&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.j=7513,(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e+"../../"})(),(()=>{var e={7513:0};u.f.j=(t,r)=>{var a=u.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((r,i)=>a=e[t]=[r,i]));r.push(a[2]=i);var n=u.p+u.u(t),o=new Error;u.l(n,(r=>{if(u.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,a[1](o)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[n,o,s]=r,c=0;if(n.some((t=>0!==e[t]))){for(a in o)u.o(o,a)&&(u.m[a]=o[a]);if(s)var l=s(u)}for(t&&t(r);c<n.length;c++)i=n[c],u.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return u.O(l)},r=globalThis.webpackChunkcetacean_university_block_json_theme=globalThis.webpackChunkcetacean_university_block_json_theme||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var h=u.O(void 0,[8096],(()=>u(8622)));h=u.O(h)})();