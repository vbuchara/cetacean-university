(()=>{"use strict";var e,t={9595:(e,t,a)=>{var n=a(1609);const o=window.wp.blocks;var i=a(982),s=a(4717);class r{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}var c=a(4550);const m=window.wp.coreData,l=window.wp.data;function u(e){e.preventDefault()}function p(e){return(0,n.createElement)("a",{onClick:u,...e})}var g=a(7438),d=a(3643);function h(e,t={}){const a={stripTags:!0,...t},{stripTags:n}=a;return(0,d.pipe)(e.title.rendered,n?e=>(0,g.QZ)(e).result:e=>e)}const f=(0,n.forwardRef)((function({campus:e,withLink:t=!0},a){const{acf:{map_location:o}}=e,i=(0,n.useRef)(null),[s,r]=(0,n.useState)(!1);return(0,n.useImperativeHandle)(a,(()=>i.current),[]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.J8,{position:new google.maps.LatLng(o.lat,o.lng),ref:i,clickable:!0,onClick:function(){r(!0)}},(0,n.createElement)(c.yU,null)),s?(0,n.createElement)(c.Fu,{anchor:i.current,onClose:function(){r(!1)}},(0,n.createElement)("h3",null,t?(0,n.createElement)(p,{href:e.link},h(e)):h(e)),o.address):"")}));function v({campuses:e,isSingle:t}){const a=(0,c.ko)(),o=e.reduce(((e,t)=>{const{acf:{map_location:a}}=t;return e+a.lat+a.lng}),"");return(0,n.useEffect)((()=>{if(!a||0===e.length)return;const t=new google.maps.LatLngBounds;if(e.forEach((({acf:{map_location:e}})=>{const a=new google.maps.LatLng(e.lat,e.lng);t.extend(a)})),1===e.length)return a.setCenter(t.getCenter()),void a.setZoom(4);a.fitBounds(t)}),[a,o]),(0,n.createElement)(n.Fragment,null,(e||[]).map((e=>(0,n.createElement)(f,{campus:e,key:e.id,withLink:!t}))))}const b=(0,n.memo)((function(e){return(0,n.createElement)(c.T5,{mapId:"CAMPUS_MAP_ID",className:"acf-map",mapTypeId:google.maps.MapTypeId.ROADMAP,defaultZoom:0,defaultCenter:{lat:0,lng:0}},(0,n.createElement)(v,{...e}))}),((e,t)=>{const{campuses:a}=e,{campuses:n}=t;function o(e,t){const{acf:{map_location:a}}=t;return e+t.id+a.lat+a.lng+a.address}return a.reduce(o,"")===n.reduce(o,"")}));(0,o.registerBlockType)(r.CampusesMap,{title:"Campuses Map",category:r.BlockCategory,icon:()=>(0,n.createElement)(i.g,{icon:s.I9}),attributes:{},edit:function(e){const{attributes:t,setAttributes:a}=e,o=(0,l.useSelect)((e=>e(m.store).getEntityRecords("postType","campus",{per_page:-1})),[]);return(0,n.createElement)(c.c4,{apiKey:"",onLoad:()=>console.log("Google Maps API Loaded")},(0,n.createElement)("div",{className:"container container--narrow page-section"},(0,n.createElement)(b,{campuses:o||[]})))}})},1609:e=>{e.exports=window.React},5795:e=>{e.exports=window.ReactDOM},6087:e=>{e.exports=window.lodash}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,o,i)=>{if(!a){var s=1/0;for(l=0;l<e.length;l++){for(var[a,o,i]=e[l],r=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(l--,1);var m=o();void 0!==m&&(t=m)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=366,(()=>{var e={366:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[s,r,c]=a,m=0;if(s.some((t=>0!==e[t]))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var l=c(n)}for(t&&t(a);m<s.length;m++)i=s[m],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},a=globalThis.webpackChunkcetacean_university_block_theme=globalThis.webpackChunkcetacean_university_block_theme||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[96],(()=>n(9595)));o=n.O(o)})();