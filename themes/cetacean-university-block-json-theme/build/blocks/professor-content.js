/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/professor-content/components/controls.tsx":
/*!**************************************************************!*\
  !*** ./src/blocks/professor-content/components/controls.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfessorContentInspectorControls: () => (/* binding */ ProfessorContentInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_editor_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/components/editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var _images_default_user_portrait_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @images/default-user-portrait.png */ "./images/default-user-portrait.png");
/* harmony import */ var _utils_getTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/getTitle */ "./src/utils/getTitle.ts");
/* harmony import */ var _utils_getThumbnail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/getThumbnail */ "./src/utils/getThumbnail.ts");









;
function ProfessorContentInspectorControls({
  professorInfoPreview,
  setProfessorInfoPreview
}) {
  const professor = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords("postType", "professor", {
      per_page: -1,
      _embed: true
    });
  }, []);
  const professorOptions = professor?.map(professor => ({
    label: (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_7__.getTitle)(professor),
    value: professor.id,
    id: professor.id,
    content: professor.content.rendered,
    thumbnailUrl: (0,_utils_getThumbnail__WEBPACK_IMPORTED_MODULE_8__.getThumbnail)(professor, {
      size: "professor-portrait",
      defaultImg: _images_default_user_portrait_png__WEBPACK_IMPORTED_MODULE_6__
    }),
    hasLiked: false,
    likeCount: 0,
    relatedProgramsIds: professor.acf.related_programs
  }));
  function onProfessorSelected(program) {
    setProfessorInfoPreview(program ? program : undefined);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Professor Preview",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_select__WEBPACK_IMPORTED_MODULE_5__.EditorSelect, {
    name: "professor",
    isLoading: !professor,
    value: professorInfoPreview,
    onChange: onProfessorSelected,
    options: professorOptions
  }))));
}

/***/ }),

/***/ "./src/blocks/professor-content/edit.tsx":
/*!***********************************************!*\
  !*** ./src/blocks/professor-content/edit.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHeart */ "./node_modules/@fortawesome/free-solid-svg-icons/faHeart.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons/faHeart */ "./node_modules/@fortawesome/free-regular-svg-icons/faHeart.js");
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _images_default_user_portrait_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @images/default-user-portrait.png */ "./images/default-user-portrait.png");
/* harmony import */ var _utils_getTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/getTitle */ "./src/utils/getTitle.ts");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/professor-content/components/controls.tsx");














function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const defaultProfessor = {
    id: 0,
    content: "{Professor Content}",
    hasLiked: false,
    likeCount: 0,
    thumbnailUrl: _images_default_user_portrait_png__WEBPACK_IMPORTED_MODULE_7__,
    relatedProgramsIds: [0],
    relatedPrograms: [{
      id: 0,
      title: "{Program Title}",
      link: "/"
    }]
  };
  const [professorInfoPreview, setProfessorInfoPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const relatedPrograms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    if (!professorInfoPreview) return null;
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords("postType", "program", {
      per_page: -1,
      include: professorInfoPreview?.relatedProgramsIds
    });
  }, [professorInfoPreview?.relatedProgramsIds.reduce((result, id) => result + id, "")]);
  const {
    value: likeCount
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
    if (!professorInfoPreview) return undefined;
    const {
      likes_count
    } = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `university/v1/like/count/${professorInfoPreview.id}`,
      method: "GET"
    });
    return likes_count;
  }, [professorInfoPreview?.id]);
  const {
    value: hasLiked
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
    if (!professorInfoPreview) return undefined;
    const {
      has_logged_user_liked
    } = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: `university/v1/like/check/${professorInfoPreview.id}`,
      method: "GET"
    });
    return has_logged_user_liked;
  }, [professorInfoPreview?.id]);
  const professor = {
    ...defaultProfessor,
    ...professorInfoPreview,
    likeCount: typeof likeCount !== "undefined" ? likeCount : defaultProfessor.likeCount,
    hasLiked: typeof hasLiked !== "undefined" ? hasLiked : defaultProfessor.hasLiked,
    relatedPrograms: relatedPrograms?.map(program => {
      return {
        id: program.id,
        title: (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_8__.getTitle)(program),
        link: program.link
      };
    }) || defaultProfessor.relatedPrograms
  };
  const {
    relatedPrograms: professorRelatedPrograms,
    likeCount: professorLikeCount,
    hasLiked: professorHasLiked
  } = professor;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_9__.ProfessorContentInspectorControls, {
    professorInfoPreview: professorInfoPreview,
    setProfessorInfoPreview: setProfessorInfoPreview
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container container--narrow page-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "generic-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "one-third"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    width: 480,
    height: 650,
    className: "attachment-professor-portrait size-professor-portrait wp-post-image",
    src: professor.thumbnailUrl
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "two-thirds"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "like-box",
    "data-exists": professorHasLiked ? "yes" : "no",
    "data-professor-id": professor.id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
    icon: _fortawesome_free_regular_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_11__.faHeart,
    className: "like-box__empty-heart",
    width: "1rem",
    height: "1rem"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_12__.faHeart,
    className: "like-box__filled-heart",
    width: "1rem",
    height: "1rem"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "like-count"
  }, professorLikeCount)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.RawHTML, null, professor.content)))), !professorRelatedPrograms || professorRelatedPrograms.length === 0 ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "section-break"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "headline headline--medium"
  }, "Subject(s) Taught"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "link-list min-list"
  }, professorRelatedPrograms.map(program => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: program.id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_6__.EditorAnchor, {
    href: program.link
  }, program.title)))))));
}

/***/ }),

/***/ "./src/blocks/professor-content/index.ts":
/*!***********************************************!*\
  !*** ./src/blocks/professor-content/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _professor_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./professor-content */ "./src/blocks/professor-content/professor-content.tsx");


/***/ }),

/***/ "./src/blocks/professor-content/professor-content.tsx":
/*!************************************************************!*\
  !*** ./src/blocks/professor-content/professor-content.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/professor-content/edit.tsx");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.ProfessorContent, {
  title: "Professor Content",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.BlockCategory,
  icon: "businessman",
  attributes: {},
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

/***/ "./src/utils/getThumbnail.ts":
/*!***********************************!*\
  !*** ./src/utils/getThumbnail.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoFeaturedImageError: () => (/* binding */ NoFeaturedImageError),
/* harmony export */   getThumbnail: () => (/* binding */ getThumbnail)
/* harmony export */ });
/* harmony import */ var _images_default_user_landscape_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/default-user-landscape.png */ "./images/default-user-landscape.png");

function getThumbnail(post, options = {}) {
  const allOptions = {
    defaultImg: _images_default_user_landscape_png__WEBPACK_IMPORTED_MODULE_0__,
    ...options
  };
  const {
    defaultImg,
    size
  } = allOptions;
  const {
    _embedded
  } = post;
  try {
    if (!_embedded) throw new NoFeaturedImageError();
    if (_embedded['wp:featuredmedia'].length === 0) throw new NoFeaturedImageError();
    const featuredMedia = _embedded['wp:featuredmedia'][0];
    if (!featuredMedia) throw new NoFeaturedImageError();
    if (!size) {
      if (!featuredMedia?.source_url) {
        throw new NoFeaturedImageError();
      }
      return featuredMedia.source_url;
    }
    const imageInfo = featuredMedia.media_details.sizes[size];
    if (!imageInfo) {
      if (!featuredMedia.source_url) {
        throw new NoFeaturedImageError();
      }
      return featuredMedia.source_url;
    }
    return imageInfo.source_url;
  } catch (error) {
    return defaultImg;
  }
}
class NoFeaturedImageError extends Error {}

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

/***/ "./images/default-user-landscape.png":
/*!*******************************************!*\
  !*** ./images/default-user-landscape.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/default-user-landscape.0cd19a25.png";

/***/ }),

/***/ "./images/default-user-portrait.png":
/*!******************************************!*\
  !*** ./images/default-user-portrait.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/default-user-portrait.bdc37e1b.png";

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

/***/ "lodash-es":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

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

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"blocks/professor-content": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/professor-content/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=professor-content.js.map