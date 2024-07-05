(()=>{"use strict";var e,t={2965:(e,t,n)=>{var r=n(1609);const a=window.wp.blocks;var o=n(982),i=n(4350);class s{static DomainName="cetacean-university-theme";static Banner=`${this.DomainName}/banner`;static Heading=`${this.DomainName}/heading`;static Button=`${this.DomainName}/button`;static EventsAndPosts=`${this.DomainName}/events-and-posts`;static Header=`${this.DomainName}/header`;static Footer=`${this.DomainName}/footer`;static Menu=`${this.DomainName}/menu`;static Slider=`${this.DomainName}/slider`;static Slide=`${this.DomainName}/slide`;static PageBannerTitle=`${this.DomainName}/page-banner-title`;static PageBannerSubtitle=`${this.DomainName}/page-banner-subtitle`;static PageBannerGeneric=`${this.DomainName}/page-banner-generic`;static PostContent=`${this.DomainName}/post-content`;static PageContent=`${this.DomainName}/page-content`;static CampusContent=`${this.DomainName}/campus-content`;static EventContent=`${this.DomainName}/event-content`;static ProgramContent=`${this.DomainName}/program-content`;static ProfessorContent=`${this.DomainName}/professor-content`;static BlogPosts=`${this.DomainName}/blog-posts`;static UpcomingEvents=`${this.DomainName}/upcoming-events`;static PastEvents=`${this.DomainName}/past-events`;static AllPrograms=`${this.DomainName}/all-programs`;static CampusesMap=`${this.DomainName}/campuses-map`;static NoteManager=`${this.DomainName}/note-manager`;static SearchForm=`${this.DomainName}/search-form`;static SearchResults=`${this.DomainName}/search-results`;static BlockCategory="cetacean-university"}function c({searchAction:e}){return(0,r.createElement)("div",{className:"container container--narrow page-section"},(0,r.createElement)("div",{className:"generic-content"},(0,r.createElement)("form",{className:"search-form",action:e,method:"get"},(0,r.createElement)("label",{className:"headline headline--medium",htmlFor:"search-input"},"What are you searching for?"),(0,r.createElement)("div",{className:"search-form-row"},(0,r.createElement)("input",{id:"search-input",className:"s",type:"search",placeholder:"Type what you want to search for!",name:"s"}),(0,r.createElement)("button",{className:"search-submit btn btn--primary btn--slide-from-top",type:"submit"},"Search")))))}const l=window.wp.blockEditor,m=window.wp.components;var u=n(6282);function p(e){return void 0!==e&&e instanceof HTMLElement&&null!==e}function h({label:e,wrapperDivProps:{style:t,className:n,...a}={},...o}){const[i,s]=(0,r.useState)(!1),[c]=(0,u.q)((e=>{const t=e[0]?.target;if(!t)return;const n=t instanceof Element?t:t.parentElement;if(!n||!p(n))return;const r=n.classList.contains("block-editor-link-control")?n:n.closest(".block-editor-link-control");r&&p(r)&&f(r)})),h=(0,r.useCallback)((e=>{if(!e)return;const t=e.getElementsByClassName("block-editor-link-control").item(0);t&&p(t)&&(c(t),t&&f(t))}),[o.value,i]);function f(e){e.style.setProperty("min-width","unset");const t=e.querySelectorAll(".components-menu-item__item");Array.from(t).forEach((e=>{e.style.setProperty("min-width","unset"),e.style.setProperty("white-space","unset"),e.style.setProperty("overflow-wrap","anywhere")}));const n=e.querySelectorAll(".block-editor-link-control__field");Array.from(n).forEach((e=>{e.style.setProperty("margin-left","0px"),e.style.setProperty("margin-right","0px")}));const r=e.querySelectorAll(".block-editor-link-control__search-results");Array.from(r).forEach((e=>{e.style.setProperty("padding-left","0px"),e.style.setProperty("padding-right","0px")}));const a=e.querySelectorAll(".block-editor-link-control__search-item");Array.from(a).forEach((e=>{e.style.setProperty("padding-left","0px"),e.style.setProperty("padding-right","0px")}));const o=e.querySelector(".block-editor-link-control__search-results > .components-menu-group");o&&o.style.setProperty("padding-inline","1.5px");const i=e.querySelectorAll(".components-menu-item__shortcut");Array.from(i).forEach((e=>{e.style.setProperty("padding-left","0px")}))}return(0,r.createElement)(m.__experimentalGrid,{...a,ref:h,className:`link-control-wrapper ${n||""}}`,columns:a.columns?a.columns:1,style:{flex:1,...t}},(0,r.createElement)(m.BaseControl,{label:e},(0,r.createElement)(l.__experimentalLinkControl,{...o,onChange:function(e){o.onChange?.(e),s(!0)}})))}function f({attributes:e,setAttributes:t}){return(0,r.createElement)(l.InspectorControls,{group:"settings"},(0,r.createElement)(m.PanelBody,{title:"Form Settings",initialOpen:!0},(0,r.createElement)(m.PanelRow,null,(0,r.createElement)(h,{label:"Form Action Link",settings:[],value:{url:e.formActionLink},onChange:function(e){t({formActionLink:e.url})}}))))}(0,a.registerBlockType)(s.SearchForm,{title:"Search Form",category:s.BlockCategory,icon:()=>(0,r.createElement)(o.g,{icon:i.$U}),attributes:{formActionLink:{type:"string",default:CetaceanUniversitySearchFormData.search_form_action_link}},edit:function(e){const{attributes:t,setAttributes:n}=e;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(f,{attributes:t,setAttributes:n}),(0,r.createElement)(c,{searchAction:t.formActionLink}))},save:function(e){return(0,r.createElement)(c,{searchAction:e.attributes.formActionLink})}})},1609:e=>{e.exports=window.React}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],s=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(m--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=311,(()=>{var e={311:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var m=c(r)}for(t&&t(n);l<i.length;l++)o=i[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=globalThis.webpackChunkcetacean_university_block_theme=globalThis.webpackChunkcetacean_university_block_theme||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[96],(()=>r(2965)));a=r.O(a)})();