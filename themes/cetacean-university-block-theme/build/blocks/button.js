/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/button/button.tsx":
/*!**************************************!*\
  !*** ./src/blocks/button/button.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/button/save.tsx");
/* harmony import */ var _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _src_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/classes/WordpressColorsPresets */ "./src/classes/WordpressColorsPresets.ts");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.Button, {
  title: "Button",
  icon: "button",
  category: _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_3__.CetaceanUniversityBlocks.BlockCategory,
  attributes: {
    text: {
      type: "string"
    },
    size: {
      type: "string",
      default: "large"
    },
    backgroundColor: {
      type: "string",
      default: `var(${_src_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_4__.WordpressColorsPresets.Primary})`
    },
    color: {
      type: "string",
      default: `var(${_src_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_4__.WordpressColorsPresets.White})`
    },
    animations: {
      type: "object",
      default: {}
    },
    linkObject: {
      type: "object",
      default: {}
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.SaveComponent
});

/***/ }),

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
/* harmony import */ var _src_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/classes/WordpressColorsPresets */ "./src/classes/WordpressColorsPresets.ts");



function ColorPalettePopover({
  value,
  onChange,
  onClose,
  style
}) {
  const colors = _src_classes_WordpressColorsPresets__WEBPACK_IMPORTED_MODULE_2__.WordpressColorsPresets.getColorsList();
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

/***/ "./src/blocks/button/index.ts":
/*!************************************!*\
  !*** ./src/blocks/button/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/blocks/button/button.tsx");


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
  static BlogPosts = `${this.DomainName}/blog-posts`;
  static UpcomingEvents = `${this.DomainName}/upcoming-events`;
  static AllPrograms = `${this.DomainName}/all-programs`;
  static CampusesMap = `${this.DomainName}/campuses-map`;
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
/******/ 			"blocks/button": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/button/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=button.js.map