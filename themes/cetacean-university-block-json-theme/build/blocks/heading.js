/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/heading/edit.tsx":
/*!*************************************!*\
  !*** ./src/blocks/heading/edit.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent),
/* harmony export */   headingSizeClasses: () => (/* binding */ headingSizeClasses),
/* harmony export */   headingSizeTagNames: () => (/* binding */ headingSizeTagNames)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const headingSizeClasses = new Map([["tiny", "headline--tiny"], ["small", "headline--small"], ["medium", "headline--medium"], ["large", "headline--large"]]);
const headingSizeTagNames = new Map([["tiny", "h4"], ["small", "h3"], ["medium", "h2"], ["large", "h1"]]);
function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [headingClassNames, setHeadingClassNames] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(["headline"]));
  const [headingTagName, setHeadingTagName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("h1");
  function isButtonPressed(buttonSizeType) {
    return buttonSizeType === attributes.size;
  }
  function getOnButtonPressed(buttonSizeType) {
    return () => setAttributes({
      size: buttonSizeType
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setHeadingClassNames(classNames => {
      const sizeClassName = headingSizeClasses.get(attributes.size);
      if (sizeClassName) {
        headingSizeClasses.forEach(className => {
          classNames.delete(className);
        });
        classNames.add(sizeClassName);
      }
      return new Set(classNames);
    });
    setHeadingTagName(() => {
      return headingSizeTagNames.get(attributes.size) || "h1";
    });
  }, [attributes.size]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: isButtonPressed("large"),
    onClick: getOnButtonPressed("large")
  }, "Large"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: isButtonPressed("medium"),
    onClick: getOnButtonPressed("medium")
  }, "Medium"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    isPressed: isButtonPressed("small"),
    onClick: getOnButtonPressed("small")
  }, "Small"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: headingTagName,
    className: Array.from(headingClassNames).join(" "),
    allowedFormats: ["core/bold", "core/italic"],
    value: attributes.text,
    onChange: value => setAttributes({
      text: value
    })
  }));
}

/***/ }),

/***/ "./src/blocks/heading/heading.tsx":
/*!****************************************!*\
  !*** ./src/blocks/heading/heading.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/heading/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/heading/save.tsx");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.Heading, {
  title: "Heading",
  icon: "heading",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.BlockCategory,
  attributes: {
    text: {
      type: "string"
    },
    size: {
      type: "string",
      default: "large"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.SaveComponent
});

/***/ }),

/***/ "./src/blocks/heading/save.tsx":
/*!*************************************!*\
  !*** ./src/blocks/heading/save.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/heading/edit.tsx");



function SaveComponent(props) {
  const headingClassNames = new Set(["headline", _edit__WEBPACK_IMPORTED_MODULE_2__.headingSizeClasses.get(props.attributes.size) || ""]);
  const headingTagName = _edit__WEBPACK_IMPORTED_MODULE_2__.headingSizeTagNames.get(props.attributes.size) || "h1";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: headingTagName,
    className: Array.from(headingClassNames).join(" "),
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/blocks/heading/index.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading */ "./src/blocks/heading/heading.tsx");

/******/ })()
;
//# sourceMappingURL=heading.js.map