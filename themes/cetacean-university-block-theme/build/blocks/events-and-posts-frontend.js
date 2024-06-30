/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/button/components/color-button.tsx":
/*!*******************************************************!*\
  !*** ./src/blocks/button/components/color-button.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorButton: () => (/* binding */ ColorButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function ColorButton({
  children,
  colorValue,
  style,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    ...props,
    style: {
      flex: 1,
      padding: 10,
      border: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: colorValue
  }), children);
}

/***/ }),

/***/ "./src/blocks/button/components/color-palette-popover.tsx":
/*!****************************************************************!*\
  !*** ./src/blocks/button/components/color-palette-popover.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPalettePopover: () => (/* binding */ ColorPalettePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/WordpressColorsPresets */ "./src/classes/WordpressColorsPresets.ts");



function ColorPalettePopover({
  value,
  onChange,
  onClose,
  style
}) {
  const colors = _classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_2__.WordpressColorsPresets.getColorsList();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    expandOnMobile: true,
    placement: "left-start",
    onClose: onClose
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    colors: colors,
    value: value,
    onChange: onChange,
    style: {
      padding: 15,
      ...style
    }
  }));
}

/***/ }),

/***/ "./src/blocks/button/components/controls.tsx":
/*!***************************************************!*\
  !*** ./src/blocks/button/components/controls.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonBlockControls: () => (/* binding */ ButtonBlockControls),
/* harmony export */   ButtonInspectorControls: () => (/* binding */ ButtonInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-button */ "./src/blocks/button/components/color-button.tsx");
/* harmony import */ var _color_palette_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-palette-popover */ "./src/blocks/button/components/color-palette-popover.tsx");







function ButtonInspectorControls({
  attributes,
  setAttributes
}) {
  const [isBackgroundColorPaletteVisible, setIsBackgroundColorPaletteVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isColorPaletteVisible, setIsColorPaletteVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function onChangeAnimationsOnHover(value) {
    setAttributes({
      animations: {
        ...attributes.animations,
        onHover: value
      }
    });
  }
  ;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Colors",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column",
    gap: 0,
    style: {
      flex: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_button__WEBPACK_IMPORTED_MODULE_3__.ColorButton, {
    colorValue: attributes.backgroundColor,
    onClick: () => setIsBackgroundColorPaletteVisible(prev => !prev),
    style: {
      borderBottom: 0
    }
  }, "Background"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_button__WEBPACK_IMPORTED_MODULE_3__.ColorButton, {
    colorValue: attributes.color,
    onClick: () => setIsColorPaletteVisible(prev => !prev)
  }, "Text"))), !isBackgroundColorPaletteVisible ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palette_popover__WEBPACK_IMPORTED_MODULE_4__.ColorPalettePopover, {
    value: attributes.backgroundColor,
    onChange: color => setAttributes({
      backgroundColor: color
    }),
    onClose: () => setIsBackgroundColorPaletteVisible(false)
  }), !isColorPaletteVisible ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palette_popover__WEBPACK_IMPORTED_MODULE_4__.ColorPalettePopover, {
    value: attributes.color,
    onChange: color => setAttributes({
      color: color
    }),
    onClose: () => setIsColorPaletteVisible(false)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Animations",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGrid, {
    columns: 1,
    style: {
      flex: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "On Hover",
    value: attributes.animations.onHover,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Slide from Top',
      value: 'slide-from-top'
    }, {
      label: 'Slide from Bottom',
      value: 'slide-from-bottom'
    }, {
      label: 'Slide from Left',
      value: 'slide-from-left'
    }, {
      label: 'Slide from Right',
      value: 'slide-from-right'
    }],
    onChange: onChangeAnimationsOnHover
  }))))));
}
function ButtonBlockControls({
  attributes,
  setAttributes
}) {
  const [isLinkPickerVisible, setIsLinkPickerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function isSizeButtonPressed(buttonSizeType) {
    return buttonSizeType === attributes.size;
  }
  function getOnSizeButtonPressed(buttonSizeType) {
    return () => setAttributes({
      size: buttonSizeType
    });
  }
  function onLinkButtonClick() {
    setIsLinkPickerVisible(isLinkPickerVisible => !isLinkPickerVisible);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    onClick: onLinkButtonClick,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    isPressed: isSizeButtonPressed("large"),
    onClick: getOnSizeButtonPressed("large")
  }, "Large"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    isPressed: isSizeButtonPressed("medium"),
    onClick: getOnSizeButtonPressed("medium")
  }, "Medium"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    isPressed: isSizeButtonPressed("small"),
    onClick: getOnSizeButtonPressed("small")
  }, "Small"))), !isLinkPickerVisible ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "middle center",
    onClose: () => setIsLinkPickerVisible(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
    settings: [],
    value: attributes.linkObject,
    onChange: value => setAttributes({
      linkObject: value
    }),
    renderControlBottom: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      justify: "center",
      style: {
        paddingBottom: "10px"
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "primary",
      onClick: () => setIsLinkPickerVisible(false)
    }, "Confirm Link"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: () => setAttributes({
        linkObject: undefined
      })
    }, "Clear Link"))
  })));
}
;

/***/ }),

/***/ "./src/blocks/button/edit.tsx":
/*!************************************!*\
  !*** ./src/blocks/button/edit.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent),
/* harmony export */   buttonAnimationsOnHoverClasses: () => (/* binding */ buttonAnimationsOnHoverClasses),
/* harmony export */   buttonSizeClasses: () => (/* binding */ buttonSizeClasses)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/button/components/controls.tsx");




const buttonSizeClasses = new Map([["small", "btn--small"], ["medium", "btn--medium"], ["large", "btn--large"]]);
const buttonAnimationsOnHoverClasses = new Map([["none", ""], ["slide-from-top", "btn--slide-from-top"], ["slide-from-bottom", "btn--slide-from-bottom"], ["slide-from-left", "btn--slide-from-left"], ["slide-from-right", "btn--slide-from-right"]]);
function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [buttonClassNames, setButtonClassNames] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set(["btn"]));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setButtonClassNames(classNames => {
      const sizeClassName = attributes.size ? buttonSizeClasses.get(attributes.size) : undefined;
      const animationOnHoverClassName = buttonAnimationsOnHoverClasses.get(attributes.animations.onHover);
      if (sizeClassName) {
        buttonSizeClasses.forEach(className => {
          classNames.delete(className);
        });
        classNames.add(sizeClassName);
      }
      if (typeof animationOnHoverClassName === "string") {
        buttonAnimationsOnHoverClasses.forEach(className => {
          classNames.delete(className);
        });
        classNames.add(animationOnHoverClassName);
      }
      return new Set(classNames);
    });
  }, [attributes.size, attributes.backgroundColor, attributes.animations.onHover]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_2__.ButtonInspectorControls, {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_2__.ButtonBlockControls, {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "a",
    className: Array.from(buttonClassNames).join(" "),
    allowedFormats: [],
    value: attributes.text,
    onChange: value => setAttributes({
      text: value
    }),
    style: {
      "--background-color": attributes.backgroundColor,
      "--color": attributes.color
    }
  }));
}

/***/ }),

/***/ "./src/blocks/button/save.tsx":
/*!************************************!*\
  !*** ./src/blocks/button/save.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/utils/cancelRedirect */ "./src/utils/cancelRedirect.ts");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/edit.tsx");



function SaveComponent(props) {
  const {
    attributes
  } = props;
  const buttonLink = attributes.linkObject?.url ? attributes.linkObject?.url : undefined;
  const buttonClassNames = new Set(["btn", attributes.size ? _edit__WEBPACK_IMPORTED_MODULE_2__.buttonSizeClasses.get(attributes.size) || "" : "", _edit__WEBPACK_IMPORTED_MODULE_2__.buttonAnimationsOnHoverClasses.get(attributes.animations.onHover) || ""]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: buttonLink,
    onClick: !buttonLink ? _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__.cancelRedirect : undefined,
    className: Array.from(buttonClassNames).join(" "),
    style: {
      "--background-color": attributes.backgroundColor,
      "--color": attributes.color
    }
  }, attributes.text);
}

/***/ }),

/***/ "./src/blocks/events-and-posts/components/blog-post.tsx":
/*!**************************************************************!*\
  !*** ./src/blocks/events-and-posts/components/blog-post.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPost: () => (/* binding */ BlogPost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/utils/cancelRedirect */ "./src/utils/cancelRedirect.ts");
/* harmony import */ var _src_utils_getExcerpt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/utils/getExcerpt */ "./src/utils/getExcerpt.ts");
/* harmony import */ var _src_utils_getTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils/getTitle */ "./src/utils/getTitle.ts");







function BlogPost({
  post,
  isOnEditor
}) {
  const postLink = !isOnEditor ? post.link : "";
  const EventSummaryPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      containerClassName: "event-summary__date event-summary__date--alt t-center event-summary__date--loading",
      circle: true,
      height: "100%",
      width: "100%"
    });
  }, [post.isPlaceholder]);
  const TitlePlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      count: 0.5
    });
  }, [post.isPlaceholder]);
  const ExcerptPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      count: 3
    }));
  }, [post.isPlaceholder]);
  const PostLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return props => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: postLink,
        onClick: !postLink ? _src_utils_cancelRedirect__WEBPACK_IMPORTED_MODULE_1__.cancelRedirect : undefined,
        ...props
      }, props.children);
    };
  }, [postLink]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "event-summary"
  }, post.isPlaceholder ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventSummaryPlaceholder, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostLink, {
    className: "event-summary__date event-summary__date--alt t-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "event-summary__month"
  }, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(post.date, "MMM")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "event-summary__day"
  }, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(post.date, "dd"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "event-summary__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "event-summary__title headline headline--tiny"
  }, post.isPlaceholder ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TitlePlaceholder, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostLink, null, (0,_src_utils_getTitle__WEBPACK_IMPORTED_MODULE_3__.getTitle)(post))), post.isPlaceholder ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExcerptPlaceholder, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_src_utils_getExcerpt__WEBPACK_IMPORTED_MODULE_2__.getExcerpt)(post, {
    trimWords: 20
  }) + " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostLink, {
    className: "nu text-color--dark-gray"
  }, "Read more"))));
}

/***/ }),

/***/ "./src/blocks/events-and-posts/components/recent-posts.tsx":
/*!*****************************************************************!*\
  !*** ./src/blocks/events-and-posts/components/recent-posts.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentPosts: () => (/* binding */ RecentPosts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_blocks_button_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/blocks/button/save */ "./src/blocks/button/save.tsx");
/* harmony import */ var _classes_Placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/Placeholders */ "./src/classes/Placeholders.ts");
/* harmony import */ var _classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/WordpressColorsPresets */ "./src/classes/WordpressColorsPresets.ts");
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-post */ "./src/blocks/events-and-posts/components/blog-post.tsx");








function RecentPosts({
  blogLink,
  onLoadFinish,
  onLayoutChange,
  isOnEditor
}) {
  const placeholderPosts = _classes_Placeholders__WEBPACK_IMPORTED_MODULE_4__.Placeholders.getPlaceholderPosts();
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords("postType", "post", {
      context: "view",
      per_page: 2
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (posts) {
      onLoadFinish && onLoadFinish();
    }
  }, [posts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    onLayoutChange && onLayoutChange();
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "full-width-split__two"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "full-width-split__inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "headline headline--small-plus t-center"
  }, "From Our Blogs"), (posts || placeholderPosts).map(post => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blog_post__WEBPACK_IMPORTED_MODULE_6__.BlogPost, {
      key: post.id,
      post: post,
      isOnEditor: isOnEditor
    });
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "t-center no-margin"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_blocks_button_save__WEBPACK_IMPORTED_MODULE_3__.SaveComponent, {
    className: "",
    attributes: {
      animations: {
        onHover: "slide-from-top"
      },
      backgroundColor: `var(${_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_5__.WordpressColorsPresets.Secondary})`,
      color: `var(${_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_5__.WordpressColorsPresets.White})`,
      text: "View All Blog Posts",
      linkObject: {
        url: !isOnEditor ? blogLink : ""
      }
    }
  }))));
}

/***/ }),

/***/ "./src/blocks/events-and-posts/components/upcoming-events.tsx":
/*!********************************************************************!*\
  !*** ./src/blocks/events-and-posts/components/upcoming-events.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingEvents: () => (/* binding */ UpcomingEvents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _src_blocks_button_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/blocks/button/save */ "./src/blocks/button/save.tsx");
/* harmony import */ var _classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/WordpressColorsPresets */ "./src/classes/WordpressColorsPresets.ts");
/* harmony import */ var _src_components_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/components/event */ "./src/components/event.tsx");
/* harmony import */ var _classes_Placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/Placeholders */ "./src/classes/Placeholders.ts");









function UpcomingEvents({
  eventsArchiveLink,
  onLoadFinish,
  onLayoutChange,
  isOnEditor
}) {
  const dateNow = new Date();
  const placeholderEvents = _classes_Placeholders__WEBPACK_IMPORTED_MODULE_6__.Placeholders.getPlaceholderEvents();
  const events = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords("postType", "event", {
      context: "view",
      per_page: 2,
      orderby: "meta_value",
      order: "asc",
      meta_key: "event_date",
      meta_query_key: "event_date",
      meta_query_value: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(dateNow, "yyyyMMddHHmmss"),
      meta_query_compare: ">=",
      meta_query_type: "DATE"
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (events) {
      onLoadFinish && onLoadFinish();
    }
  }, [events]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    onLayoutChange && onLayoutChange();
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "full-width-split__one"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "full-width-split__inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "headline headline--small-plus t-center"
  }, "Upcoming Events"), (events || placeholderEvents).map(event => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_event__WEBPACK_IMPORTED_MODULE_5__.Event, {
      key: event.id,
      event: event,
      isOnEditor: isOnEditor
    });
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "t-center no-margin"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_blocks_button_save__WEBPACK_IMPORTED_MODULE_3__.SaveComponent, {
    className: "",
    attributes: {
      animations: {
        onHover: "slide-from-top"
      },
      backgroundColor: `var(${_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_4__.WordpressColorsPresets.Primary})`,
      color: `var(${_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_4__.WordpressColorsPresets.White})`,
      text: "View All Events",
      linkObject: {
        url: !isOnEditor ? eventsArchiveLink : ""
      }
    }
  }))));
}

/***/ }),

/***/ "./src/blocks/events-and-posts/frontend.tsx":
/*!**************************************************!*\
  !*** ./src/blocks/events-and-posts/frontend.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_utils_renderFrontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/utils/renderFrontend */ "./src/utils/renderFrontend.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/events-and-posts/save.tsx");


(0,_src_utils_renderFrontend__WEBPACK_IMPORTED_MODULE_0__.renderFrontend)("cetacean-university-events-and-blogs-root", _save__WEBPACK_IMPORTED_MODULE_1__.SaveComponent);

/***/ }),

/***/ "./src/blocks/events-and-posts/save.tsx":
/*!**********************************************!*\
  !*** ./src/blocks/events-and-posts/save.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_upcoming_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/upcoming-events */ "./src/blocks/events-and-posts/components/upcoming-events.tsx");
/* harmony import */ var _components_recent_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/recent-posts */ "./src/blocks/events-and-posts/components/recent-posts.tsx");




function SaveComponent({
  attributes
}) {
  const {
    eventsArchiveLink,
    blogLink
  } = attributes;
  const [mainDiv, setMainDiv] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [hasLoadEventsFinish, setHasLoadEventsFinish] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [hasLoadPostsFinish, setHasLoadPostsFinish] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function onLoadEventsFinish() {
    setHasLoadEventsFinish(true);
  }
  function onLoadPostsFinish() {
    setHasLoadPostsFinish(true);
  }
  function adjustParentHeight() {
    if (!mainDiv) return;
    const height = getComputedStyle(mainDiv).height;
    const rootDiv = mainDiv.parentElement;
    if (!rootDiv) return;
    rootDiv.style.setProperty("--height", height);
  }
  function onLoadFinish() {
    if (!hasLoadEventsFinish || !hasLoadPostsFinish || !mainDiv) return;
    const rootDiv = mainDiv.parentElement;
    if (!rootDiv) return;
    rootDiv.style.setProperty("--height", "auto");
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    adjustParentHeight();
    onLoadFinish();
  }, [mainDiv, hasLoadEventsFinish, hasLoadPostsFinish]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: setMainDiv,
    className: "full-width-split group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_upcoming_events__WEBPACK_IMPORTED_MODULE_1__.UpcomingEvents, {
    eventsArchiveLink: eventsArchiveLink,
    onLoadFinish: onLoadEventsFinish
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_recent_posts__WEBPACK_IMPORTED_MODULE_2__.RecentPosts, {
    blogLink: blogLink,
    onLoadFinish: onLoadPostsFinish
  }));
}

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

/***/ "./src/utils/parseDataset.ts":
/*!***********************************!*\
  !*** ./src/utils/parseDataset.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDataset: () => (/* binding */ parseDataset)
/* harmony export */ });
/* harmony import */ var _typeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeCheck */ "./src/utils/typeCheck.ts");

function parseDataset(dataset) {
  const datasetEntries = Object.entries(dataset);
  const isValidEntry = entry => {
    const [_, value] = entry;
    return (0,_typeCheck__WEBPACK_IMPORTED_MODULE_0__.isString)(value);
  };
  const mapDatasetEntries = entry => {
    const [key, value] = entry;
    try {
      return [key, JSON.parse(value)];
    } catch {
      return [key, value];
    }
  };
  const parsedDatasetEntries = datasetEntries.filter(isValidEntry).map(mapDatasetEntries);
  return Object.fromEntries(parsedDatasetEntries);
}

/***/ }),

/***/ "./src/utils/renderFrontend.tsx":
/*!**************************************!*\
  !*** ./src/utils/renderFrontend.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFrontend: () => (/* binding */ renderFrontend)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _parseDataset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseDataset */ "./src/utils/parseDataset.ts");



function renderFrontend(rootClassName, Component) {
  const blocksRoots = document.querySelectorAll(`.${rootClassName}`);
  blocksRoots.forEach(div => {
    const dataset = (0,_parseDataset__WEBPACK_IMPORTED_MODULE_2__.parseDataset)(div.dataset);
    const attributes = dataset;
    const reactRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(div);
    reactRoot.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
      className: rootClassName,
      attributes: attributes
    }));
    Array.from(div.attributes).forEach(attr => {
      if (attr.name.startsWith("data-")) div.removeAttribute(attr.name);
    });
  });
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
/******/ 			"blocks/events-and-posts-frontend": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/events-and-posts/frontend.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=events-and-posts-frontend.js.map