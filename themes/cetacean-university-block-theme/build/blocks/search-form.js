/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/search-form/components/block.tsx":
/*!*****************************************************!*\
  !*** ./src/blocks/search-form/components/block.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFormBlock: () => (/* binding */ SearchFormBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SearchFormBlock({
  searchAction
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container container--narrow page-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "generic-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "search-form",
    action: searchAction,
    method: "get"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "headline headline--medium",
    htmlFor: "search-input"
  }, "What are you searching for?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-form-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "search-input",
    className: "s",
    type: "search",
    placeholder: "Type what you want to search for!",
    name: "s"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "search-submit btn btn--primary btn--slide-from-top",
    type: "submit"
  }, "Search")))));
}

/***/ }),

/***/ "./src/blocks/search-form/components/controls.tsx":
/*!********************************************************!*\
  !*** ./src/blocks/search-form/components/controls.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFormInspectorControls: () => (/* binding */ SearchFormInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_panel_link_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/panel-link-control */ "./src/components/panel-link-control.tsx");




function SearchFormInspectorControls({
  attributes,
  setAttributes
}) {
  function onChangeSearchFormActionLink(value) {
    setAttributes({
      formActionLink: value.url
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Form Settings",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_panel_link_control__WEBPACK_IMPORTED_MODULE_3__.PanelLinkControl, {
    label: "Form Action Link",
    settings: [],
    value: {
      url: attributes.formActionLink
    },
    onChange: onChangeSearchFormActionLink
  }))));
}

/***/ }),

/***/ "./src/blocks/search-form/edit.tsx":
/*!*****************************************!*\
  !*** ./src/blocks/search-form/edit.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/block */ "./src/blocks/search-form/components/block.tsx");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/search-form/components/controls.tsx");



function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_2__.SearchFormInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_block__WEBPACK_IMPORTED_MODULE_1__.SearchFormBlock, {
    searchAction: attributes.formActionLink
  }));
}

/***/ }),

/***/ "./src/blocks/search-form/index.ts":
/*!*****************************************!*\
  !*** ./src/blocks/search-form/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form */ "./src/blocks/search-form/search-form.tsx");


/***/ }),

/***/ "./src/blocks/search-form/save.tsx":
/*!*****************************************!*\
  !*** ./src/blocks/search-form/save.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/block */ "./src/blocks/search-form/components/block.tsx");


function SaveComponent(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_block__WEBPACK_IMPORTED_MODULE_1__.SearchFormBlock, {
    searchAction: props.attributes.formActionLink
  });
}

/***/ }),

/***/ "./src/blocks/search-form/search-form.tsx":
/*!************************************************!*\
  !*** ./src/blocks/search-form/search-form.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMagnifyingGlass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMagnifyingGlass */ "./node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass.js");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-form/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/search-form/save.tsx");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.SearchForm, {
  title: "Search Form",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.BlockCategory,
  icon: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons_faMagnifyingGlass__WEBPACK_IMPORTED_MODULE_6__.faMagnifyingGlass
  }),
  attributes: {
    formActionLink: {
      type: "string",
      default: CetaceanUniversitySearchFormData.search_form_action_link
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_5__.SaveComponent
});

/***/ }),

/***/ "./src/classes/CetaceanUniversityBlocks.ts":
/*!*************************************************!*\
  !*** ./src/classes/CetaceanUniversityBlocks.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CetaceanUniversityBlocks: () => (/* binding */ CetaceanUniversityBlocks)
/* harmony export */ });
class CetaceanUniversityBlocks {
  static DomainName = "cetacean-university-theme";
  static Banner = `${this.DomainName}/banner`;
  static Heading = `${this.DomainName}/heading`;
  static Button = `${this.DomainName}/button`;
  static EventsAndPosts = `${this.DomainName}/events-and-posts`;
  static Header = `${this.DomainName}/header`;
  static Footer = `${this.DomainName}/footer`;
  static Menu = `${this.DomainName}/menu`;
  static Slider = `${this.DomainName}/slider`;
  static Slide = `${this.DomainName}/slide`;
  static PageBannerTitle = `${this.DomainName}/page-banner-title`;
  static PageBannerSubtitle = `${this.DomainName}/page-banner-subtitle`;
  static PageBannerGeneric = `${this.DomainName}/page-banner-generic`;
  static PostContent = `${this.DomainName}/post-content`;
  static PageContent = `${this.DomainName}/page-content`;
  static CampusContent = `${this.DomainName}/campus-content`;
  static EventContent = `${this.DomainName}/event-content`;
  static ProgramContent = `${this.DomainName}/program-content`;
  static ProfessorContent = `${this.DomainName}/professor-content`;
  static BlogPosts = `${this.DomainName}/blog-posts`;
  static UpcomingEvents = `${this.DomainName}/upcoming-events`;
  static PastEvents = `${this.DomainName}/past-events`;
  static AllPrograms = `${this.DomainName}/all-programs`;
  static CampusesMap = `${this.DomainName}/campuses-map`;
  static NoteManager = `${this.DomainName}/note-manager`;
  static SearchForm = `${this.DomainName}/search-form`;
  static SearchResults = `${this.DomainName}/search-results`;
  static BlockCategory = "cetacean-university";
}
;

/***/ }),

/***/ "./src/components/panel-link-control.tsx":
/*!***********************************************!*\
  !*** ./src/components/panel-link-control.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelLinkControl: () => (/* binding */ PanelLinkControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rooks */ "./node_modules/rooks/dist/esm/hooks/useMutationObserverRef.js");
/* harmony import */ var _utils_typeCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/typeCheck */ "./src/utils/typeCheck.ts");






function PanelLinkControl({
  label,
  wrapperDivProps: {
    style,
    className,
    ...wrapperDivProps
  } = {},
  ...props
}) {
  const [hasChanged, setHasChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [linkControlRef] = (0,rooks__WEBPACK_IMPORTED_MODULE_4__.useMutationObserverRef)(mutations => {
    const targetMutated = mutations[0]?.target;
    if (!targetMutated) return;
    const elementMutated = targetMutated instanceof Element ? targetMutated : targetMutated.parentElement;
    if (!elementMutated || !(0,_utils_typeCheck__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(elementMutated)) return;
    const linkControl = elementMutated.classList.contains("block-editor-link-control") ? elementMutated : elementMutated.closest(".block-editor-link-control");
    if (!linkControl || !(0,_utils_typeCheck__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(linkControl)) return;
    adjustLinkControlStyle(linkControl);
  });
  const setLinkControlRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (!element) return;
    const linkControlElement = element.getElementsByClassName("block-editor-link-control").item(0);
    if (!linkControlElement || !(0,_utils_typeCheck__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(linkControlElement)) return;
    linkControlRef(linkControlElement);
    if (!linkControlElement) return;
    adjustLinkControlStyle(linkControlElement);
  }, [props.value, hasChanged]);
  function adjustLinkControlStyle(linkControl) {
    linkControl.style.setProperty("min-width", "unset");
    const otherElementsWithMinWidthSetBreakingTheStyle = linkControl.querySelectorAll(".components-menu-item__item");
    Array.from(otherElementsWithMinWidthSetBreakingTheStyle).forEach(element => {
      element.style.setProperty("min-width", "unset");
      element.style.setProperty("white-space", "unset");
      element.style.setProperty("overflow-wrap", "anywhere");
    });
    const inputField = linkControl.querySelectorAll(".block-editor-link-control__field");
    Array.from(inputField).forEach(element => {
      element.style.setProperty("margin-left", "0px");
      element.style.setProperty("margin-right", "0px");
    });
    const searchResults = linkControl.querySelectorAll(".block-editor-link-control__search-results");
    Array.from(searchResults).forEach(element => {
      element.style.setProperty("padding-left", "0px");
      element.style.setProperty("padding-right", "0px");
    });
    const searchItem = linkControl.querySelectorAll(".block-editor-link-control__search-item");
    Array.from(searchItem).forEach(element => {
      element.style.setProperty("padding-left", "0px");
      element.style.setProperty("padding-right", "0px");
    });
    const componentGroup = linkControl.querySelector(".block-editor-link-control__search-results > .components-menu-group");
    if (componentGroup) {
      componentGroup.style.setProperty("padding-inline", "1.5px");
    }
    const menuItemShortcut = linkControl.querySelectorAll(".components-menu-item__shortcut");
    Array.from(menuItemShortcut).forEach(element => {
      element.style.setProperty("padding-left", "0px");
    });
  }
  function onLinkChanged(value) {
    props.onChange?.(value);
    setHasChanged(true);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGrid, {
    ...wrapperDivProps,
    ref: setLinkControlRef,
    className: `link-control-wrapper ${className ? className : ""}}`,
    columns: wrapperDivProps.columns ? wrapperDivProps.columns : 1,
    style: {
      flex: 1,
      ...style
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: label
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
    ...props,
    onChange: onLinkChanged
  })));
}

/***/ }),

/***/ "./src/utils/typeCheck.ts":
/*!********************************!*\
  !*** ./src/utils/typeCheck.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHTMLDivElement: () => (/* binding */ isHTMLDivElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isString: () => (/* binding */ isString)
/* harmony export */ });
function isString(value) {
  return typeof value === "string";
}
function isHTMLElement(value) {
  return typeof value !== "undefined" && value instanceof HTMLElement && value !== null;
}
function isHTMLDivElement(value) {
  return isHTMLElement(value) && value instanceof HTMLDivElement;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/search-form": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcetacean_university_block_theme"] = globalThis["webpackChunkcetacean_university_block_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/search-form/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=search-form.js.map