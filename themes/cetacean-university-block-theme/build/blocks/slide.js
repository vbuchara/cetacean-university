(()=>{"use strict";var e,t={447:(e,t,a)=>{var n=a(1609);const i=window.wp.blocks;var r=a(982),o=a(1088);class s{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}const c=window.wp.blockEditor,l=window.wp.apiFetch;var m=a.n(l);const u=window.wp.components;function d(e){const{attributes:t,setAttributes:a}=e;function i(){a({imageId:0,imageUrl:CetaceanUniversitySlideData.theme_path+t.imageDefault})}return(0,n.createElement)(c.InspectorControls,null,(0,n.createElement)(u.PanelBody,{title:"Background Image",initialOpen:!0},(0,n.createElement)(u.PanelRow,null,(0,n.createElement)(u.Flex,{justify:"flex-start"},(0,n.createElement)(c.MediaUploadCheck,null,(0,n.createElement)(c.MediaUpload,{onSelect:async function(e){try{const{source_url:t,media_details:n}=await m()({path:`/wp/v2/media/${e.id}`}),i=n.sizes.large;a({imageId:e.id,imageUrl:i?i.source_url:t})}catch(e){console.log(e)}},value:t.imageId,render:({open:e})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.Button,{variant:"primary",onClick:e},"Choose Image"),(0,n.createElement)(u.Button,{variant:"secondary",onClick:i},"Set to Default"))}))))))}(0,i.registerBlockType)(s.Slide,{title:"Slide",category:s.BlockCategory,icon:()=>(0,n.createElement)(r.g,{icon:o.jb}),ancestor:[s.Slider],attributes:{imageId:{type:"number",default:0},imageUrl:{type:"string"},imageDefault:{type:"string",default:"/images/boat.jpg"}},edit:function(e){const{attributes:t,setAttributes:a}=e,i=t.imageUrl?t.imageUrl:CetaceanUniversitySlideData.theme_path+t.imageDefault;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(d,{attributes:t,setAttributes:a}),(0,n.createElement)("div",{className:"hero-slider__slide",style:{"--bg-image":`url(${i})`}},(0,n.createElement)("div",{className:"hero-slider__interior container"},(0,n.createElement)("div",{className:"hero-slider__overlay t-center"},(0,n.createElement)(c.InnerBlocks,{allowedBlocks:[s.Heading,s.Button,"core/paragraph"]})))))},save:function(e){return(0,n.createElement)(c.InnerBlocks.Content,null)}})},1609:e=>{e.exports=window.React}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,i,r)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,i,r]=e[m],s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(m--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,i,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=891,(()=>{var e={891:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[o,s,c]=a,l=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var m=c(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=globalThis.webpackChunkcetacean_university_block_theme=globalThis.webpackChunkcetacean_university_block_theme||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=n.O(void 0,[96],(()=>n(447)));i=n.O(i)})();