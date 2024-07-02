/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/page-banner-title/components/controls.tsx":
/*!**************************************************************!*\
  !*** ./src/blocks/page-banner-title/components/controls.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageBannerTitleBlockControls: () => (/* binding */ PageBannerTitleBlockControls),
/* harmony export */   PageBannerTitleInspectorControls: () => (/* binding */ PageBannerTitleInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSliders */ "./node_modules/@fortawesome/free-solid-svg-icons/faSliders.js");
/* harmony import */ var voca_insert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! voca/insert */ "./node_modules/voca/insert.js");
/* harmony import */ var voca_insert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(voca_insert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_editor_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/editor-select */ "./src/components/editor-select.tsx");








function PageBannerTitleInspectorControls(props) {
  const {
    loading,
    response
  } = props;
  const variablesOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!response) return [];
    const {
      variables,
      indicator
    } = response;
    return variables.map(variable => {
      return {
        label: variable,
        value: indicator.replace("variable", variable)
      };
    });
  }, [loading, response]);
  const variablesOptionsSelected = props.attributes.showConditionalVariables.map(variableSelected => {
    return variablesOptions.find(variable => variable.value === variableSelected);
  }).filter(variable => typeof variable !== undefined);
  function onChangeVariable(variables) {
    props.setAttributes({
      showConditionalVariables: variables.map(({
        value
      }) => value)
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Exhibition"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGrid, {
    columns: 1,
    style: {
      flex: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Show only if variable(s) is set"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_select__WEBPACK_IMPORTED_MODULE_5__.EditorSelect, {
    name: "title-variable-show-condition",
    isLoading: loading,
    options: variablesOptions,
    value: variablesOptionsSelected,
    isMulti: true,
    onChange: onChangeVariable
  }))))));
}
;
function PageBannerTitleBlockControls(props) {
  const {
    loading,
    response,
    textSelectionOffset
  } = props;
  const [isVariablePopoverVisible, setIsVariablePopoverVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [variableButtonTrigger, setVariableButtonTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const variablesOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!response) return [];
    const {
      variables,
      indicator
    } = response;
    return variables.map(variable => {
      return {
        label: variable,
        value: indicator.replace("variable", variable)
      };
    });
  }, [loading, response]);
  function onClickVariableButton() {
    setIsVariablePopoverVisible(true);
  }
  function onChangeVariable(variable) {
    if (!variable) return;
    props.setAttributes({
      text: props.attributes.text ? voca_insert__WEBPACK_IMPORTED_MODULE_4___default()(props.attributes.text, variable.value, textSelectionOffset) : variable.value
    });
    setIsVariablePopoverVisible(false);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons_faSliders__WEBPACK_IMPORTED_MODULE_6__.faSliders
    }),
    onClick: onClickVariableButton,
    title: "Add a variable",
    ref: setVariableButtonTrigger
  }))), !isVariablePopoverVisible ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    placement: "bottom",
    onClose: () => setIsVariablePopoverVisible(false),
    anchor: variableButtonTrigger
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_select__WEBPACK_IMPORTED_MODULE_5__.EditorSelect, {
    name: "title-variable",
    isLoading: loading,
    options: variablesOptions,
    onChange: onChangeVariable,
    menuPortalTarget: document.body,
    styles: {
      container: base => ({
        ...base,
        width: "200px"
      }),
      menu: base => ({
        ...base,
        marginTop: 0
      })
    }
  })));
}

/***/ }),

/***/ "./src/blocks/page-banner-title/edit.tsx":
/*!***********************************************!*\
  !*** ./src/blocks/page-banner-title/edit.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use/lib/useAsync */ "./node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/page-banner-title/components/controls.tsx");






function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [textSelectionOffset, setTextSelectionOffset] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    loading,
    value: response
  } = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/cetacean-university/v1/editor/variables",
      method: "GET"
    });
    return response;
  }, []);
  function onSelectText(event) {
    const eventDocument = event.currentTarget.getRootNode();
    const selection = eventDocument.getSelection();
    if (!selection) return;
    setTextSelectionOffset(selection.focusOffset);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_3__.PageBannerTitleInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes,
    loading: loading,
    response: response
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_3__.PageBannerTitleBlockControls, {
    attributes: attributes,
    setAttributes: setAttributes,
    loading: loading,
    response: response,
    textSelectionOffset: textSelectionOffset
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    allowedFormats: ["core/bold", "core/italic"],
    className: "page-banner__title",
    onChange: value => setAttributes({
      text: value
    }),
    value: attributes.text,
    onSelect: onSelectText
  }));
}

/***/ }),

/***/ "./src/blocks/page-banner-title/index.ts":
/*!***********************************************!*\
  !*** ./src/blocks/page-banner-title/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_banner_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-banner-title */ "./src/blocks/page-banner-title/page-banner-title.tsx");


/***/ }),

/***/ "./src/blocks/page-banner-title/page-banner-title.tsx":
/*!************************************************************!*\
  !*** ./src/blocks/page-banner-title/page-banner-title.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/title.js");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-banner-title/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-banner-title/save.tsx");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.PageBannerTitle, {
  title: "Page Banner Title",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.BlockCategory,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: {
    text: {
      type: "string",
      default: "Page Banner Title"
    },
    showConditionalVariables: {
      type: "array",
      default: []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.SaveComponent,
  parent: [_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.PageBannerGeneric]
});

/***/ }),

/***/ "./src/blocks/page-banner-title/save.tsx":
/*!***********************************************!*\
  !*** ./src/blocks/page-banner-title/save.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function SaveComponent(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h1",
    className: "page-banner__title",
    value: props.attributes.text
  });
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

/***/ "./src/components/editor-select.tsx":
/*!******************************************!*\
  !*** ./src/components/editor-select.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorSelect: () => (/* binding */ EditorSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");


function EditorSelect({
  styles,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isSearchable: true,
    styles: {
      container: (base, props) => ({
        ...base,
        flex: 1,
        ...styles?.container?.(base, props)
      }),
      input: (base, props) => ({
        ...base,
        "input:focus": {
          boxShadow: "none"
        },
        ...styles?.input?.(base, props)
      }),
      ...styles
    },
    ...props
  });
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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
/******/ 			"blocks/page-banner-title": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/page-banner-title/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=page-banner-title.js.map