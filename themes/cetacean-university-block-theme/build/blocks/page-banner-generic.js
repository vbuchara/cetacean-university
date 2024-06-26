/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/page-banner-generic/components/control.tsx":
/*!***************************************************************!*\
  !*** ./src/blocks/page-banner-generic/components/control.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageBannerGenericInspectorControls: () => (/* binding */ PageBannerGenericInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function PageBannerGenericInspectorControls({
  attributes,
  setAttributes
}) {
  function onSelectMedia(media) {
    setAttributes({
      bannerImageId: media.id
    });
  }
  function onClickSetToDefault() {
    setAttributes({
      bannerImageId: 0
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Background Image",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectMedia,
    value: attributes.bannerImageId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "primary",
      onClick: open
    }, "Choose Image"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: onClickSetToDefault
    }, "Set to Default"))
  }))))));
}
;

/***/ }),

/***/ "./src/blocks/page-banner-generic/edit.tsx":
/*!*************************************************!*\
  !*** ./src/blocks/page-banner-generic/edit.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _components_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/control */ "./src/blocks/page-banner-generic/components/control.tsx");







function EditComponent(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const defaultBannerImage = CetaceanUniversityPageBannerGenericData.theme_path + "/images/ocean.jpg";
  const [bannerImage, setBannerImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const previousInnerBlocksIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
  const {
    removeBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    innerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlocks
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    return {
      innerBlocks: getBlocks(clientId)
    };
  }, [clientId]);
  const innerBlocksDependency = innerBlocks.reduce((result, {
    clientId
  }) => result + clientId, "");
  const pageBannerTitleBlocksCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    function countPageBannerTitleBlocks(count, {
      name
    }) {
      return name === _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerTitle ? count + 1 : count;
    }
    return innerBlocks.reduce(countPageBannerTitleBlocks, 0);
  }, [innerBlocksDependency]);
  const pageBannerSubtitleBlocksCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    function countPageBannerSubtitleBlocks(count, {
      name
    }) {
      return name === _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerSubtitle ? count + 1 : count;
    }
    return innerBlocks.reduce(countPageBannerSubtitleBlocks, 0);
  }, [innerBlocksDependency]);
  async function validadeBlocks() {
    const previousBlocksIds = previousInnerBlocksIds.current;
    const hasMoreThanOneTitleOrSubtitle = pageBannerTitleBlocksCount > 1 || pageBannerSubtitleBlocksCount > 1;
    if (previousBlocksIds.size > 0 && hasMoreThanOneTitleOrSubtitle) {
      const promises = innerBlocks.map(async block => {
        if (!previousBlocksIds.has(block.clientId)) {
          await removeBlock(block.clientId);
          alert("You can only have 1 Title and 1 Subtitle in the Page Banner Generic block.");
        }
      });
      await Promise.all(promises);
    }
    innerBlocks.forEach(({
      clientId
    }) => previousBlocksIds.add(clientId));
  }
  const RenderAppender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const hasOneOrMoreTitleAndSubtitle = pageBannerTitleBlocksCount >= 1 && pageBannerSubtitleBlocksCount >= 1;
    return () => hasOneOrMoreTitleAndSubtitle ? null : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ButtonBlockAppender, {
      rootClientId: clientId,
      className: "block-list-appender__toggle block-editor-button-block-appender"
    });
  }, [clientId, innerBlocksDependency, pageBannerTitleBlocksCount, pageBannerSubtitleBlocksCount]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attributes.bannerImageId) {
      setBannerImage(defaultBannerImage);
      return;
    }
    (async () => {
      try {
        const {
          source_url,
          media_details
        } = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
          path: `/wp/v2/media/${attributes.bannerImageId}`
        });
        const pageBannerSize = media_details.sizes['page-banner'];
        if (!pageBannerSize && !source_url) throw new Error("No image found.");
        if (!pageBannerSize) return setBannerImage(source_url);
        setBannerImage(pageBannerSize.source_url);
      } catch (error) {
        setBannerImage(defaultBannerImage);
        console.error(error);
      }
    })();
  }, [attributes.bannerImageId, defaultBannerImage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    validadeBlocks();
  }, [innerBlocksDependency, pageBannerTitleBlocksCount, pageBannerSubtitleBlocksCount]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_control__WEBPACK_IMPORTED_MODULE_5__.PageBannerGenericInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "page-banner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "page-banner__bg-image",
    style: {
      "--bg-image": `url(${bannerImage})`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "page-banner__content container container--narrow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: [_src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerTitle, _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerSubtitle],
    template: [[_src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerTitle], [_src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerSubtitle]],
    renderAppender: RenderAppender
  }))));
}

/***/ }),

/***/ "./src/blocks/page-banner-generic/page-banner-generic.tsx":
/*!****************************************************************!*\
  !*** ./src/blocks/page-banner-generic/page-banner-generic.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-banner-generic/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-banner-generic/save.tsx");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.PageBannerGeneric, {
  title: "Page Banner Generic",
  category: _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.BlockCategory,
  icon: "cover-image",
  attributes: {
    bannerImageId: {
      type: "number",
      default: 0
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_3__.SaveComponent
});

/***/ }),

/***/ "./src/blocks/page-banner-generic/save.tsx":
/*!*************************************************!*\
  !*** ./src/blocks/page-banner-generic/save.tsx ***!
  \*************************************************/
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
  static PostBanner = `${this.DomainName}/post-banner`;
  static PostContent = `${this.DomainName}/post-content`;
  static BlogPosts = `${this.DomainName}/blog-posts`;
  static PageBanner = `${this.DomainName}/page-banner`;
  static PageContent = `${this.DomainName}/page-content`;
  static UpcomingEvents = `${this.DomainName}/upcoming-events`;
  static AllPrograms = `${this.DomainName}/all-programs`;
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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
/*!*************************************************!*\
  !*** ./src/blocks/page-banner-generic/index.ts ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_banner_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-banner-generic */ "./src/blocks/page-banner-generic/page-banner-generic.tsx");

/******/ })()
;
//# sourceMappingURL=page-banner-generic.js.map