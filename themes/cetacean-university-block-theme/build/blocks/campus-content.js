/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/campus-content/campus-content.tsx":
/*!******************************************************!*\
  !*** ./src/blocks/campus-content/campus-content.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/campus-content/edit.tsx");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");



;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.CampusContent, {
  title: "Campus Content",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.BlockCategory,
  icon: "location",
  attributes: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.EditComponent
});

/***/ }),

/***/ "./src/blocks/campus-content/components/controls.tsx":
/*!***********************************************************!*\
  !*** ./src/blocks/campus-content/components/controls.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampusContentInspectorControls: () => (/* binding */ CampusContentInspectorControls)
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
/* harmony import */ var _utils_getTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/getTitle */ "./src/utils/getTitle.ts");







;
function CampusContentInspectorControls({
  campusInfoPreview,
  setCampusInfoPreview
}) {
  const campuses = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords("postType", "campus", {
      per_page: -1
    });
  }, []);
  const campusOptions = campuses?.map(campus => ({
    label: (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_6__.getTitle)(campus),
    value: campus.id,
    title: campus.title,
    content: campus.content.rendered,
    id: campus.id,
    link: campus.link,
    acf: campus.acf
  }));
  function onCampusSelected(campus) {
    setCampusInfoPreview(campus ? campus : undefined);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Campus Preview",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_select__WEBPACK_IMPORTED_MODULE_5__.EditorSelect, {
    name: "campus",
    isLoading: !campuses,
    value: campusInfoPreview,
    onChange: onCampusSelected,
    options: campusOptions
  }))));
}

/***/ }),

/***/ "./src/blocks/campus-content/edit.tsx":
/*!********************************************!*\
  !*** ./src/blocks/campus-content/edit.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/event */ "./src/components/event.tsx");
/* harmony import */ var _utils_getTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/getTitle */ "./src/utils/getTitle.ts");
/* harmony import */ var _campuses_map_components_campus_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../campuses-map/components/campus-map */ "./src/blocks/campuses-map/components/campus-map.tsx");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/campus-content/components/controls.tsx");
/* harmony import */ var _src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/components/editor-anchor */ "./src/components/editor-anchor.tsx");












function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const dateNow = new Date();
  const defaultCampus = {
    id: 0,
    title: {
      rendered: "{Campus Title}"
    },
    link: "/",
    content: "{Campus Content}",
    acf: {
      map_location: {
        address: "{Address}",
        lat: 0,
        lng: 0,
        zoom: 10,
        place_id: "{id}"
      }
    },
    relatedPrograms: [{
      id: 0,
      title: {
        rendered: "{Program Title}"
      },
      link: "/"
    }],
    relatedEvents: [{
      id: 0,
      title: {
        rendered: "{Event Title}"
      },
      link: "/",
      content: {
        rendered: "{Event Content}",
        protected: false
      },
      excerpt: {
        rendered: "{Event Excerpt}",
        protected: false
      },
      acf: {
        event_date: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(dateNow, "yyyy-MM-dd HH:mm:ss"),
        related_programs: []
      }
    }]
  };
  const [campusInfoPreview, setCampusInfoPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const relatedPrograms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    if (!campusInfoPreview) return null;
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecords("postType", "program", {
      per_page: -1,
      orderby: "title",
      order: "asc",
      meta_query_key: "related_campus",
      meta_query_compare: "LIKE",
      meta_query_value: `"${campusInfoPreview.id}"`
    });
  }, [campusInfoPreview?.id]);
  const relatedEvents = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    if (!campusInfoPreview) return null;
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecords("postType", "event", {
      per_page: -1,
      orderby: "meta_value",
      order: "asc",
      meta_key: "event_date",
      meta_query_key: "related_campus",
      meta_query_compare: "LIKE",
      meta_query_value: `"${campusInfoPreview.id}"`,
      meta_query_key_2: "event_date",
      meta_query_value_2: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(dateNow, "yyyyMMddHHmmss"),
      meta_query_compare_2: ">=",
      meta_query_type_2: "DATE"
    });
  }, [campusInfoPreview?.id]);
  const campus = {
    ...defaultCampus,
    ...campusInfoPreview,
    relatedPrograms: relatedPrograms?.map(program => {
      return {
        id: program.id,
        title: program.title,
        link: program.link
      };
    }) || defaultCampus.relatedPrograms,
    relatedEvents: relatedEvents?.map(event => {
      return {
        id: event.id,
        title: event.title,
        link: event.link,
        content: event.content,
        excerpt: event.excerpt,
        acf: event.acf
      };
    }) || defaultCampus.relatedEvents
  };
  const {
    relatedPrograms: campusRelatedPrograms,
    relatedEvents: campusRelatedEvents
  } = campus;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.APIProvider, {
    apiKey: "AIzaSyAgrW0x_IwZHjQ2bMJFmE8IrGClTgFX6qE",
    onLoad: () => console.log("Google Maps API Loaded")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_8__.CampusContentInspectorControls, {
    campusInfoPreview: campusInfoPreview,
    setCampusInfoPreview: setCampusInfoPreview
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container container--narrow page-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.RawHTML, {
    className: "generic-content"
  }, campus.content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_campuses_map_components_campus_map__WEBPACK_IMPORTED_MODULE_7__.CampusMap, {
    campuses: [campus],
    isSingle: true
  }), !campusRelatedPrograms || campusRelatedPrograms.length === 0 ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "section-break"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "headline headline--medium"
  }, "Offered Programs"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "link-list min-list"
  }, campusRelatedPrograms.map(program => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: program.id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_9__.EditorAnchor, {
    href: program.link
  }, (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_6__.getTitle)(program)))))), !campusRelatedEvents || campusRelatedEvents.length === 0 ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "section-break"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "headline headline--medium"
  }, "Upcoming Events on the Campus"), campusRelatedEvents.map(event => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_event__WEBPACK_IMPORTED_MODULE_5__.Event, {
    key: event.id,
    event: event,
    isOnEditor: true
  })))));
}

/***/ }),

/***/ "./src/blocks/campus-content/index.ts":
/*!********************************************!*\
  !*** ./src/blocks/campus-content/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _campus_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campus-content */ "./src/blocks/campus-content/campus-content.tsx");


/***/ }),

/***/ "./src/blocks/campuses-map/components/campus-map.tsx":
/*!***********************************************************!*\
  !*** ./src/blocks/campuses-map/components/campus-map.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampusMap: () => (/* binding */ CampusMap),
/* harmony export */   mapId: () => (/* binding */ mapId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
/* harmony import */ var _campus_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campus-marker */ "./src/blocks/campuses-map/components/campus-marker.tsx");




const mapId = "CAMPUS_MAP_ID";
function CampusMapComponent({
  campuses,
  isSingle
}) {
  const campusMap = (0,_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.useMap)();
  const campusesBoundsDependency = campuses.reduce((result, campus) => {
    const {
      acf: {
        map_location
      }
    } = campus;
    return result + map_location.lat + map_location.lng;
  }, "");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!campusMap || campuses.length === 0) return;
    const newBounds = new google.maps.LatLngBounds();
    campuses.forEach(({
      acf: {
        map_location
      }
    }) => {
      const newLatLang = new google.maps.LatLng(map_location.lat, map_location.lng);
      newBounds.extend(newLatLang);
    });
    if (campuses.length === 1) {
      campusMap.setCenter(newBounds.getCenter());
      campusMap.setZoom(4);
      return;
    }
    campusMap.fitBounds(newBounds);
  }, [campusMap, campusesBoundsDependency]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (campuses || []).map(campus => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_campus_marker__WEBPACK_IMPORTED_MODULE_2__.CampusMarker, {
    campus: campus,
    key: campus.id,
    withLink: !isSingle
  })));
}
function GoogleMapWrapper(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.Map, {
    mapId: mapId,
    className: "acf-map",
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    defaultZoom: 0,
    defaultCenter: {
      lat: 0,
      lng: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CampusMapComponent, {
    ...props
  }));
}
const CampusMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(GoogleMapWrapper, (prevProps, nextProps) => {
  const {
    campuses: prevCampuses
  } = prevProps;
  const {
    campuses: nextCampuses
  } = nextProps;
  function reduceCampusInfo(reduce, campus) {
    const {
      acf: {
        map_location
      }
    } = campus;
    return reduce + campus.id + map_location.lat + map_location.lng + map_location.address;
  }
  const prevCampusesReduced = prevCampuses.reduce(reduceCampusInfo, "");
  const nextCampusesReduced = nextCampuses.reduce(reduceCampusInfo, "");
  return prevCampusesReduced === nextCampusesReduced;
});

/***/ }),

/***/ "./src/blocks/campuses-map/components/campus-marker.tsx":
/*!**************************************************************!*\
  !*** ./src/blocks/campuses-map/components/campus-marker.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampusMarker: () => (/* binding */ CampusMarker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _utils_getTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/getTitle */ "./src/utils/getTitle.ts");





function CampusMarkerComponent({
  campus,
  withLink = true
}, ref) {
  const {
    acf: {
      map_location
    }
  } = campus;
  const markerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isInfoVisible, setIsInfoVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => markerRef.current, []);
  function onMarkerClick() {
    setIsInfoVisible(true);
  }
  function onCloseInfo() {
    setIsInfoVisible(false);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.AdvancedMarker, {
    position: new google.maps.LatLng(map_location.lat, map_location.lng),
    ref: markerRef,
    clickable: true,
    onClick: onMarkerClick
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.Pin, null)), !isInfoVisible ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.InfoWindow, {
    anchor: markerRef.current,
    onClose: onCloseInfo
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, !withLink ? (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_3__.getTitle)(campus) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__.EditorAnchor, {
    href: campus.link
  }, (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_3__.getTitle)(campus))), map_location.address));
}
const CampusMarker = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(CampusMarkerComponent);

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
  static AllPrograms = `${this.DomainName}/all-programs`;
  static CampusesMap = `${this.DomainName}/campuses-map`;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/campus-content": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/campus-content/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=campus-content.js.map