(()=>{"use strict";var e,t,a,n,r,o,i,s,c,l={3174:(e,t,a)=>{a.d(t,{i:()=>d});var n=a(1609);function r(e){e.preventDefault()}function o(e){return(0,n.createElement)("a",{onClick:r,...e})}const i=window.wp.blockEditor;function s({children:e,style:t,...a}){const r=(0,i.useBlockProps)();return console.log(r),(0,n.createElement)("div",{...r,...a,style:{...r.style,padding:0,...t}},e)}const c=window.wp.components;function l({showLoggedMenu:e,setShowLoggedMenu:t}){return(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(c.PanelBody,{title:"Exhibition",initialOpen:!0},(0,n.createElement)(c.PanelRow,null,(0,n.createElement)(c.ToggleControl,{label:"Show logged user (Editor only)",checked:e,onChange:t}))))}var m=a(982),u=a(4350);function h(){return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o,{className:"btn btn--small btn--secondary float-left push-right btn--slide-from-left"},"My Notes"),(0,n.createElement)(o,{className:"btn btn--small btn--secondary float-left btn--with-photo btn--slide-from-left"},(0,n.createElement)("span",{className:"site-header__avatar"},(0,n.createElement)("img",{src:CetaceanUniversityMenuData.avatar_url,className:"avatar avatar-60 photo",width:60,height:60})),(0,n.createElement)("span",{className:"btn__text"},"Log Out")),(0,n.createElement)(o,{className:"search-trigger js-search-trigger"},(0,n.createElement)(m.g,{icon:u.$U,width:"1.4rem",height:"1.4rem"})))}function p(){return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o,{className:"btn btn--small btn--secondary float-left push-right btn--slide-from-left"},"Login"),(0,n.createElement)(o,{className:"btn btn--small btn--secondary float-left btn--slide-from-left"},"Sign Up"),(0,n.createElement)(o,{className:"search-trigger js-search-trigger"},(0,n.createElement)(m.g,{icon:u.$U,width:"1.4rem",height:"1.4rem"})))}function d({attributes:e,setAttributes:t}){const{}=e,[a,r]=(0,n.useState)(!0);return(0,n.createElement)(s,null,(0,n.createElement)(l,{attributes:e,setAttributes:t,showLoggedMenu:a,setShowLoggedMenu:r}),(0,n.createElement)("div",{className:"site-header__menu group"},(0,n.createElement)("nav",{className:"main-navigation"},(0,n.createElement)("div",{className:"menu-main-menu-container"},(0,n.createElement)("ul",{id:"menu-main-menu",className:"menu"},(0,n.createElement)("li",{className:"menu-item"},(0,n.createElement)(o,null,"Blog")),(0,n.createElement)("li",{className:"menu-item"},(0,n.createElement)(o,null,"Events")),(0,n.createElement)("li",{className:"menu-item"},(0,n.createElement)(o,null,"Programs")),(0,n.createElement)("li",{className:"menu-item"},(0,n.createElement)(o,null,"Campuses")),(0,n.createElement)("li",{className:"menu-item"},(0,n.createElement)(o,null,"About Us"))))),(0,n.createElement)("div",{className:"site-header__util"},a?(0,n.createElement)(h,null):(0,n.createElement)(p,null))))}},4766:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var n=a(4997),r=a(6620),o=a(3174),i=a(8595);const e=(await a.e(2741).then(a.t.bind(a,2741,19))).default;(0,n.registerBlockType)(e.name,{...e,icon:r.A,ancestor:[i.D.Header],edit:o.i}),t()}catch(e){t(e)}}),1)},8595:(e,t,a)=>{a.d(t,{D:()=>n});class n{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}},1609:e=>{e.exports=window.React},4997:e=>{e.exports=window.wp.blocks},5573:e=>{e.exports=window.wp.primitives}},m={};function u(e){var t=m[e];if(void 0!==t)return t.exports;var a=m[e]={exports:{}};return l[e].call(a.exports,a,a.exports,u),a.exports}u.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},u.a=(r,o,i)=>{var s;i&&((s=[]).d=-1);var c,l,m,u=new Set,h=r.exports,p=new Promise(((e,t)=>{m=t,l=e}));p[t]=h,p[e]=e=>(s&&e(s),u.forEach(e),p.catch((e=>{}))),r.exports=p,o((r=>{var o;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var o=[];o.d=0,r.then((e=>{i[t]=e,n(o)}),(e=>{i[a]=e,n(o)}));var i={};return i[e]=e=>e(o),i}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var i=()=>c.map((e=>{if(e[a])throw e[a];return e[t]})),l=new Promise((t=>{(o=()=>t(i)).r=0;var a=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(o.r++,e.push(o)));c.map((t=>t[e](a)))}));return o.r?l:i()}),(e=>(e?m(p[a]=e):l(h),n(s)))),s&&s.d<0&&(s.d=0)},r=[],u.O=(e,t,a,n)=>{if(!t){var o=1/0;for(l=0;l<r.length;l++){for(var[t,a,n]=r[l],i=!0,s=0;s<t.length;s++)(!1&n||o>=n)&&Object.keys(u.O).every((e=>u.O[e](t[s])))?t.splice(s--,1):(i=!1,n<o&&(o=n));if(i){r.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var l=r.length;l>0&&r[l-1][2]>n;l--)r[l]=r[l-1];r[l]=[t,a,n]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);u.r(a);var n={};o=o||[null,i({}),i([]),i(i)];for(var r=2&t&&e;"object"==typeof r&&!~o.indexOf(r);r=i(r))Object.getOwnPropertyNames(r).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,u.d(a,n),a},u.d=(e,t)=>{for(var a in t)u.o(t,a)&&!u.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,a)=>(u.f[a](e,t),t)),[])),u.u=e=>e+".js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},c="cetacean-university-block-json-theme:",u.l=(e,t,a,n)=>{if(s[e])s[e].push(t);else{var r,o;if(void 0!==a)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var m=i[l];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==c+a){r=m;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,u.nc&&r.setAttribute("nonce",u.nc),r.setAttribute("data-webpack",c+a),r.src=e),s[e]=[t];var h=(t,a)=>{r.onerror=r.onload=null,clearTimeout(p);var n=s[e];if(delete s[e],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(a))),t)return t(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),o&&document.head.appendChild(r)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.j=8297,(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e+"../../"})(),(()=>{var e={8297:0};u.f.j=(t,a)=>{var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var o=u.p+u.u(t),i=new Error;u.l(o,(a=>{if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[o,i,s]=a,c=0;if(o.some((t=>0!==e[t]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);if(s)var l=s(u)}for(t&&t(a);c<o.length;c++)r=o[c],u.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return u.O(l)},a=globalThis.webpackChunkcetacean_university_block_json_theme=globalThis.webpackChunkcetacean_university_block_json_theme||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var h=u.O(void 0,[8096],(()=>u(4766)));h=u.O(h)})();