/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/header/edit.tsx":
/*!************************************!*\
  !*** ./src/blocks/header/edit.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBars */ "./node_modules/@fortawesome/free-solid-svg-icons/faBars.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMagnifyingGlass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMagnifyingGlass */ "./node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faXmark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faXmark */ "./node_modules/@fortawesome/free-solid-svg-icons/faXmark.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/WordpressColorsPresets */ "./src/classes/WordpressColorsPresets.ts");










function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    siteAnchor
  } = attributes;
  const backgroundColor = (0,polished__WEBPACK_IMPORTED_MODULE_6__.transparentize)(0.3)(_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_5__.WordpressColorsPresets.getColorFromVar(_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_5__.WordpressColorsPresets.Primary));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
    className: "site-header site-header--editor",
    style: {
      "--background-color": backgroundColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-header__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "school-logo-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    href: CetaceanUniversityHeaderData.site_url,
    tagName: "a",
    allowedFormats: ["core/bold", "core/italic"],
    value: siteAnchor,
    onChange: value => setAttributes({
      siteAnchor: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_3__.EditorAnchor, {
    href: CetaceanUniversityHeaderData.search_link,
    className: "js-search-trigger site-header__search-trigger"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    className: "site-header__search-trigger-icon",
    icon: _fortawesome_free_solid_svg_icons_faMagnifyingGlass__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass,
    width: "1.4rem",
    height: "1.4rem"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "site-header__menu-trigger site-header__menu-trigger--closed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    className: "site-header__menu-trigger-open-icon",
    icon: _fortawesome_free_solid_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_8__.faBars,
    width: "1.4rem",
    height: "1.4rem"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    className: "site-header__menu-trigger-close-icon",
    icon: _fortawesome_free_solid_svg_icons_faXmark__WEBPACK_IMPORTED_MODULE_9__.faXmark,
    width: "1.4rem",
    height: "1.4rem"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: [_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.Menu],
    template: [[_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.Menu, {}]],
    templateLock: "all"
  })));
}

/***/ }),

/***/ "./src/blocks/header/header.tsx":
/*!**************************************!*\
  !*** ./src/blocks/header/header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/header.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/header/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/header/save.tsx");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.Header, {
  title: "Header",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.BlockCategory,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: {
    siteAnchor: {
      type: "string",
      default: CetaceanUniversityHeaderData.site_name
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.SaveComponent
});

/***/ }),

/***/ "./src/blocks/header/index.ts":
/*!************************************!*\
  !*** ./src/blocks/header/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/blocks/header/header.tsx");


/***/ }),

/***/ "./src/blocks/header/save.tsx":
/*!************************************!*\
  !*** ./src/blocks/header/save.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function SaveComponent(_) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

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

/***/ "./src/classes/WordpressColorsPresets.ts":
/*!***********************************************!*\
  !*** ./src/classes/WordpressColorsPresets.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WordpressColorsPresets: () => (/* binding */ WordpressColorsPresets)
/* harmony export */ });
class WordpressColorsPresets {
  static PresetPrefix = "--wp--preset--color";

  // Default
  static Black = `${this.PresetPrefix}--black`;
  static White = `${this.PresetPrefix}--white`;
  static CyanBluishGray = `${this.PresetPrefix}--cyan-bluish-gray`;
  static PalePink = `${this.PresetPrefix}--pale-pink`;
  static VividRed = `${this.PresetPrefix}--vivid-red`;
  static LuminousVividOrange = `${this.PresetPrefix}--luminous-vivid-orange`;
  static LuminousVividAmber = `${this.PresetPrefix}--luminous-vivid-amber`;
  static LightGreenCyan = `${this.PresetPrefix}--light-green-cyan`;
  static VividGreenCyan = `${this.PresetPrefix}--vivid-green-cyan`;
  static PaleCyanBlue = `${this.PresetPrefix}--pale-cyan-blue`;
  static VividCyanBlue = `${this.PresetPrefix}--vivid-cyan-blue`;
  static VividPurple = `${this.PresetPrefix}--vivid-purple`;

  // Cetacean University Theme
  static Primary = `${this.PresetPrefix}--primary`;
  static Secondary = `${this.PresetPrefix}--secondary`;
  static getColorFromVar(name) {
    return getComputedStyle(document.body).getPropertyValue(name);
  }
  static getColorsList() {
    return [{
      name: "Primary",
      color: `var(${this.Primary})`
    }, {
      name: "Secondary",
      color: `var(${this.Secondary})`
    }, {
      name: "Black",
      color: `var(${this.Black})`
    }, {
      name: "White",
      color: `var(${this.White})`
    }, {
      name: "Cyan Bluish Gray",
      color: `var(${this.CyanBluishGray})`
    }, {
      name: "Pale Pink",
      color: `var(${this.PalePink})`
    }, {
      name: "Vivid Red",
      color: `var(${this.VividRed})`
    }, {
      name: "Luminous Vivid Orange",
      color: `var(${this.LuminousVividOrange})`
    }, {
      name: "Luminous Vivid Amber",
      color: `var(${this.LuminousVividAmber})`
    }, {
      name: "Light Green Cyan",
      color: `var(${this.LightGreenCyan})`
    }, {
      name: "Vivid Green Cyan",
      color: `var(${this.VividGreenCyan})`
    }, {
      name: "Pale Cyan Blue",
      color: `var(${this.PaleCyanBlue})`
    }, {
      name: "Vivid Cyan Blue",
      color: `var(${this.VividCyanBlue})`
    }, {
      name: "Vivid Purple",
      color: `var(${this.VividPurple})`
    }];
  }
}
;
(function (_WordpressColorsPresets) {
  ;
})(WordpressColorsPresets || (WordpressColorsPresets = {}));

/***/ }),

/***/ "./src/components/editor-anchor.tsx":
/*!******************************************!*\
  !*** ./src/components/editor-anchor.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorAnchor: () => (/* binding */ EditorAnchor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/utils/cancelRedirect */ "./src/utils/cancelRedirect.ts");


function EditorAnchor(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__.cancelRedirect,
    ...props
  });
}

/***/ }),

/***/ "./src/utils/cancelRedirect.ts":
/*!*************************************!*\
  !*** ./src/utils/cancelRedirect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelRedirect: () => (/* binding */ cancelRedirect)
/* harmony export */ });
function cancelRedirect(event) {
  event.preventDefault();
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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

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
/******/ 			"blocks/header": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcetacean_university_block_json_theme"] = globalThis["webpackChunkcetacean_university_block_json_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/header/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=header.js.map