/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/upcoming-events/components/controls.tsx":
/*!************************************************************!*\
  !*** ./src/blocks/upcoming-events/components/controls.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingEventsInspectorControls: () => (/* binding */ UpcomingEventsInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function UpcomingEventsInspectorControls(props) {
  const {
    attributes,
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Options",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Enable Past Events link",
    checked: attributes.enablePastEventsLink,
    onChange: value => setAttributes({
      enablePastEventsLink: value
    })
  }))));
}

/***/ }),

/***/ "./src/blocks/upcoming-events/edit.tsx":
/*!*********************************************!*\
  !*** ./src/blocks/upcoming-events/edit.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _classes_Placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/Placeholders */ "./src/classes/Placeholders.ts");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/event */ "./src/components/event.tsx");
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/upcoming-events/components/controls.tsx");








function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const dateNow = new Date();
  const placeholderEvents = _classes_Placeholders__WEBPACK_IMPORTED_MODULE_3__.Placeholders.getPlaceholderEvents(4);
  const upcomingEvents = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords("postType", "event", {
      orderby: "meta_value",
      meta_key: "event_date",
      order: "asc",
      meta_query_key: "event_date",
      meta_query_value: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(dateNow, "yyyyMMddHHmmss"),
      meta_query_compare: ">=",
      meta_query_type: "DATE"
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_6__.UpcomingEventsInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container container--narrow page-section"
  }, (upcomingEvents || placeholderEvents).map(event => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_event__WEBPACK_IMPORTED_MODULE_4__.Event, {
      key: event.id,
      event: event,
      isOnEditor: true
    });
  }), !attributes.enablePastEventsLink ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "section-break"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_5__.EditorAnchor, {
    href: CetaceanUniversityUpcomingEventsData.past_events_link
  }, "See Past Events")))));
}

/***/ }),

/***/ "./src/blocks/upcoming-events/index.ts":
/*!*********************************************!*\
  !*** ./src/blocks/upcoming-events/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upcoming_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upcoming-events */ "./src/blocks/upcoming-events/upcoming-events.tsx");


/***/ }),

/***/ "./src/blocks/upcoming-events/upcoming-events.tsx":
/*!********************************************************!*\
  !*** ./src/blocks/upcoming-events/upcoming-events.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/upcoming-events/edit.tsx");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.UpcomingEvents, {
  title: "Upcoming Events",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.BlockCategory,
  icon: "calendar",
  attributes: {
    enablePastEventsLink: {
      type: "boolean",
      default: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.EditComponent
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

/***/ "./src/classes/Placeholders.ts":
/*!*************************************!*\
  !*** ./src/classes/Placeholders.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Placeholders: () => (/* binding */ Placeholders)
/* harmony export */ });
class Placeholders {
  static PostPlaceholder = {
    isPlaceholder: true,
    date: new Date(),
    date_gmt: new Date(),
    guid: {
      rendered: "guid"
    },
    modified: new Date(),
    modified_gmt: new Date(),
    slug: "slug",
    status: "publish",
    type: "event",
    link: "",
    title: {
      rendered: "Title Placeholder"
    },
    content: {
      rendered: "Description",
      protected: false
    },
    excerpt: {
      rendered: "Description",
      protected: false
    },
    template: "",
    acf: {},
    _links: {
      "self": [],
      "collection": [],
      "about": [],
      "wp:attachment": [],
      "curies": [],
      author: [],
      replies: [],
      "version-history": [],
      "predecessor-version": [],
      "wp:term": []
    },
    author: -1,
    featured_media: -1,
    comment_status: "status",
    ping_status: "status",
    sticky: false,
    format: "format",
    meta: {
      _acf_changed: false,
      footnotes: ""
    },
    categories: [],
    tags: []
  };
  static getPlaceholderPosts(quantity = 2) {
    return Array.from({
      length: quantity
    }, (_, index) => {
      return {
        ...Placeholders.PostPlaceholder,
        id: index + 1
      };
    });
  }
  static getPlaceholderEvents(quantity = 2) {
    return Array.from({
      length: quantity
    }, (_, index) => {
      return {
        ...Placeholders.PostPlaceholder,
        id: index + 1,
        acf: {
          event_date: "2024-06-28 15:00:00",
          related_programs: []
        }
      };
    });
  }
}

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

/***/ "./src/components/event.tsx":
/*!**********************************!*\
  !*** ./src/components/event.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Event: () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/utils/cancelRedirect */ "./src/utils/cancelRedirect.ts");
/* harmony import */ var _src_utils_getTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/utils/getTitle */ "./src/utils/getTitle.ts");
/* harmony import */ var _src_utils_getExcerpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils/getExcerpt */ "./src/utils/getExcerpt.ts");







function Event({
  event,
  isOnEditor
}) {
  const eventDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.parse)(event.acf.event_date, "yyyy-MM-dd HH:mm:ss", new Date());
  const eventLink = event.link;
  const EventSummaryPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      containerClassName: "event-summary__date t-center event-summary__date--loading",
      circle: true,
      height: "100%",
      width: "100%"
    });
  }, [event.isPlaceholder]);
  const TitlePlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      count: 0.5
    });
  }, [event.isPlaceholder]);
  const ExcerptPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      count: 3
    }));
  }, [event.isPlaceholder]);
  const EventLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return props => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: eventLink,
        onClick: isOnEditor ? _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__.cancelRedirect : undefined,
        ...props
      }, props.children);
    };
  }, [eventLink, isOnEditor]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "event-summary"
  }, event.isPlaceholder ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventSummaryPlaceholder, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventLink, {
    className: "event-summary__date t-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "event-summary__month"
  }, (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(eventDate, "MMM")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "event-summary__day"
  }, (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(eventDate, "dd"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "event-summary__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "event-summary__title headline headline--tiny"
  }, event.isPlaceholder ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TitlePlaceholder, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventLink, null, (0,_src_utils_getTitle__WEBPACK_IMPORTED_MODULE_2__.getTitle)(event))), event.isPlaceholder ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExcerptPlaceholder, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_src_utils_getExcerpt__WEBPACK_IMPORTED_MODULE_3__.getExcerpt)(event, {
    trimWords: 20
  }) + " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventLink, {
    className: "nu gray"
  }, "Learn more"))));
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

/***/ "./src/utils/getExcerpt.ts":
/*!*********************************!*\
  !*** ./src/utils/getExcerpt.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getExcerpt: () => (/* binding */ getExcerpt)
/* harmony export */ });
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fp-ts/lib/function */ "./node_modules/fp-ts/lib/function.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _truncateWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncateWords */ "./src/utils/truncateWords.ts");
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! string-strip-html */ "./node_modules/string-strip-html/dist/string-strip-html.esm.js");



function getExcerpt(post, options = {}) {
  const allOptions = {
    stripTags: true,
    trimWords: 30,
    ...options
  };
  const {
    stripTags,
    trimWords
  } = allOptions;
  const excerpt = post.excerpt && post.excerpt.rendered ? post.excerpt.rendered : post.content.rendered;
  const stripHtmlTags = value => {
    return (0,string_strip_html__WEBPACK_IMPORTED_MODULE_1__.stripHtml)(value).result;
  };
  const truncate = text => {
    return (0,_truncateWords__WEBPACK_IMPORTED_MODULE_0__.truncateWords)(text, trimWords, "...");
  };
  return (0,fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_2__.pipe)(excerpt, stripTags ? stripHtmlTags : text => text, truncate);
}

/***/ }),

/***/ "./src/utils/getTitle.ts":
/*!*******************************!*\
  !*** ./src/utils/getTitle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTitle: () => (/* binding */ getTitle)
/* harmony export */ });
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-strip-html */ "./node_modules/string-strip-html/dist/string-strip-html.esm.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/lib/function */ "./node_modules/fp-ts/lib/function.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__);


function getTitle(post, options = {}) {
  const allOptions = {
    stripTags: true,
    ...options
  };
  const {
    stripTags
  } = allOptions;
  const stripHtmlTags = value => {
    return (0,string_strip_html__WEBPACK_IMPORTED_MODULE_0__.stripHtml)(value).result;
  };
  return (0,fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(post.title.rendered, stripTags ? stripHtmlTags : value => value);
}

/***/ }),

/***/ "./src/utils/truncateWords.ts":
/*!************************************!*\
  !*** ./src/utils/truncateWords.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   truncateWords: () => (/* binding */ truncateWords)
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ "./node_modules/voca/es/index.js");

function truncateWords(text, length, suffix = '...') {
  const allWords = voca__WEBPACK_IMPORTED_MODULE_0__["default"].words(text.trim(), /[^\s]+/g);
  if (length > allWords.length) {
    return text;
  }
  return allWords.slice(0, length).join(" ").concat(suffix);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "lodash-es":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

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
/******/ 			"blocks/upcoming-events": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/upcoming-events/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=upcoming-events.js.map