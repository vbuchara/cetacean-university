(()=>{"use strict";var e,t={6898:(e,t,a)=>{var n=a(1609);const r=window.wp.blocks;var s=a(982),i=a(4350);class c{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}var o=a(876);function l(e){e.preventDefault()}function m(e){return(0,n.createElement)("a",{onClick:l,...e})}var d=a(1486),p=a(255),u=a(7438),h=a(3643),g=a(1239);function v({event:e,isOnEditor:t}){const a=(0,d.qg)(e.acf.event_date,"yyyy-MM-dd HH:mm:ss",new Date),r=e.link,s=(0,n.useMemo)((()=>()=>(0,n.createElement)(p.A,{containerClassName:"event-summary__date t-center event-summary__date--loading",circle:!0,height:"100%",width:"100%"})),[e.isPlaceholder]),i=(0,n.useMemo)((()=>()=>(0,n.createElement)(p.A,{count:.5})),[e.isPlaceholder]),c=(0,n.useMemo)((()=>()=>(0,n.createElement)("p",null,(0,n.createElement)(p.A,{count:3}))),[e.isPlaceholder]),m=(0,n.useMemo)((()=>e=>(0,n.createElement)("a",{href:r,onClick:t?l:void 0,...e},e.children)),[r,t]);return(0,n.createElement)("div",{className:"event-summary"},e.isPlaceholder?(0,n.createElement)(s,null):(0,n.createElement)(m,{className:"event-summary__date t-center"},(0,n.createElement)("span",{className:"event-summary__month"},(0,o.GP)(a,"MMM")),(0,n.createElement)("span",{className:"event-summary__day"},(0,o.GP)(a,"dd"))),(0,n.createElement)("div",{className:"event-summary__content"},(0,n.createElement)("h5",{className:"event-summary__title headline headline--tiny"},e.isPlaceholder?(0,n.createElement)(i,null):(0,n.createElement)(m,null,function(e,t={}){const a={stripTags:!0,...t},{stripTags:n}=a;return(0,h.pipe)(e.title.rendered,n?e=>(0,u.QZ)(e).result:e=>e)}(e))),e.isPlaceholder?(0,n.createElement)(c,null):(0,n.createElement)("p",null,function(e,t={}){const a={stripTags:!0,trimWords:30,...t},{stripTags:n,trimWords:r}=a,s=e.excerpt&&e.excerpt.rendered?e.excerpt.rendered:e.content.rendered;return(0,h.pipe)(s,n?e=>(0,u.QZ)(e).result:e=>e,(e=>function(e,t,a="..."){const n=g.A.words(e.trim(),/[^\s]+/g);return t>n.length?e:n.slice(0,t).join(" ").concat(a)}(e,r,"...")))}(e,{trimWords:20})+" ",(0,n.createElement)(m,{className:"nu gray"},"Learn more"))))}const E=a.p+"images/default-user-landscape.0cd19a25.png";(0,r.registerBlockType)(c.SearchResults,{title:"Search Results",category:c.BlockCategory,icon:()=>(0,n.createElement)(s.g,{icon:i.$U}),attributes:{},edit:function(e){const{attributes:t,setAttributes:a}=e,r=new Date;return(0,n.createElement)("div",{className:"container container--narrow page-section"},(0,n.createElement)("div",{className:"post-item"},(0,n.createElement)("h2",{className:"headline headline--medium headline--post-title"},(0,n.createElement)(m,{href:"/"},"{Campus Title}")),(0,n.createElement)("div",{className:"generic-content"},(0,n.createElement)("p",null,"{Campus Content}"),(0,n.createElement)("p",null,(0,n.createElement)(m,{className:"btn btn--primary btn--slide-from-top",href:"/"},"View Campus »")))),(0,n.createElement)("div",{className:"post-item"},(0,n.createElement)(v,{event:{title:{rendered:"{Event Title}"},content:{rendered:"{Event Content}",protected:!1},excerpt:{rendered:"{Event Content}",protected:!1},link:"/",acf:{event_date:(0,o.GP)(r,"yyyy-MM-dd HH:mm:ss")}},isOnEditor:!0})),(0,n.createElement)("div",{className:"post-item"},(0,n.createElement)("h2",{className:"headline headline--medium headline--post-title"},(0,n.createElement)(m,{href:"/"},"{Page Title}")),(0,n.createElement)("div",{className:"generic-content"},(0,n.createElement)("p",null,"{Page Excerpt}"),(0,n.createElement)("p",null,(0,n.createElement)(m,{className:"btn btn--primary btn--slide-from-top",href:"/"},"Continue reading »")))),(0,n.createElement)("div",{className:"post-item"},(0,n.createElement)("h2",{className:"headline headline--medium headline--post-title"},(0,n.createElement)(m,{href:"/"},"{Post Title}")),(0,n.createElement)("div",{className:"metabox"},(0,n.createElement)("p",null,"Posted by ","{Post Author}","on ","{Post Date}","in ","{Post Categories}")),(0,n.createElement)("div",{className:"generic-content"},(0,n.createElement)("p",null,"{Post Excerpt}"),(0,n.createElement)("p",null,(0,n.createElement)("a",{className:"btn btn--primary btn--slide-from-top",href:"/"},"Continue reading »")))),(0,n.createElement)("div",{className:"post-item"},(0,n.createElement)("div",{className:"professor-card__list-item"},(0,n.createElement)(m,{className:"professor-card",href:"/"},(0,n.createElement)("img",{className:"professor-card__image",src:E,alt:"Image of Professor {Professor Title}"}),(0,n.createElement)("span",{className:"professor-card__name"},"{Professor Title}")))),(0,n.createElement)("div",{className:"post-item"},(0,n.createElement)("h2",{className:"headline headline--medium headline--post-title"},(0,n.createElement)(m,{href:"/"},"{Program Title}")),(0,n.createElement)("div",{className:"generic-content"},(0,n.createElement)("p",null,"{Program Excerpt}"),(0,n.createElement)("p",null,(0,n.createElement)(m,{className:"btn btn--primary btn--slide-from-top",href:"/"},"View Program »")))))}})},1609:e=>{e.exports=window.React},6087:e=>{e.exports=window.lodash}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,r,s)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,r,s]=e[m],c=!0,o=0;o<a.length;o++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](a[o])))?a.splice(o--,1):(c=!1,s<i&&(i=s));if(c){e.splice(m--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=589,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{var e={589:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[i,c,o]=a,l=0;if(i.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(o)var m=o(n)}for(t&&t(a);l<i.length;l++)s=i[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(m)},a=globalThis.webpackChunkcetacean_university_block_theme=globalThis.webpackChunkcetacean_university_block_theme||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[96],(()=>n(6898)));r=n.O(r)})();