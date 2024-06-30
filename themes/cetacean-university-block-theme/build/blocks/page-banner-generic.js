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
/* harmony export */   PageBannerGenericBlockControls: () => (/* binding */ PageBannerGenericBlockControls),
/* harmony export */   PageBannerGenericInspectorControls: () => (/* binding */ PageBannerGenericInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-use/lib/useAsync */ "./node_modules/react-use/lib/useAsync.js");
/* harmony import */ var rooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rooks */ "./node_modules/rooks/dist/esm/hooks/useMutationObserverRef.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var voca_insert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! voca/insert */ "./node_modules/voca/insert.js");
/* harmony import */ var voca_insert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(voca_insert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_editor_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var _utils_typeCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/typeCheck */ "./src/utils/typeCheck.ts");












;
function PageBannerGenericInspectorControls({
  attributes,
  setAttributes
}) {
  const [hasChanged, setHasChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    loading,
    value: response
  } = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/cetacean-university/v1/editor/variables",
      method: "GET"
    });
    return response;
  }, []);
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
  const [linkControlRef] = (0,rooks__WEBPACK_IMPORTED_MODULE_9__.useMutationObserverRef)(mutations => {
    const targetMutated = mutations[0]?.target;
    if (!targetMutated) return;
    const elementMutated = targetMutated instanceof Element ? targetMutated : targetMutated.parentElement;
    if (!elementMutated || !(0,_utils_typeCheck__WEBPACK_IMPORTED_MODULE_7__.isHTMLElement)(elementMutated)) return;
    const linkControl = elementMutated.classList.contains("block-editor-link-control") ? elementMutated : elementMutated.closest(".block-editor-link-control");
    if (!linkControl || !(0,_utils_typeCheck__WEBPACK_IMPORTED_MODULE_7__.isHTMLElement)(linkControl)) return;
    adjustLinkControlStyle(linkControl);
  });
  const setLinkControlRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (!element) return;
    const linkControlElement = element.getElementsByClassName("block-editor-link-control").item(0);
    if (!linkControlElement || !(0,_utils_typeCheck__WEBPACK_IMPORTED_MODULE_7__.isHTMLElement)(linkControlElement)) return;
    linkControlRef(linkControlElement);
    if (!linkControlElement) return;
    adjustLinkControlStyle(linkControlElement);
  }, [attributes.metaboxInfo.homeLinkObject?.url, hasChanged]);
  const variablesOptionsSelected = attributes.metaboxInfo.showConditionalVariables.map(variableSelected => {
    return variablesOptions.find(variable => variable.value === variableSelected);
  }).filter(variable => typeof variable !== undefined);
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
  function onChangeVariable(variables) {
    setAttributes({
      metaboxInfo: {
        ...attributes.metaboxInfo,
        showConditionalVariables: variables.map(({
          value
        }) => value)
      }
    });
  }
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
  function onChangeMetaboxHomeLink(value) {
    setHasChanged(prevValue => !prevValue);
    setAttributes({
      metaboxInfo: {
        ...attributes.metaboxInfo,
        homeLinkObject: {
          url: value.url,
          title: value.title,
          type: value.type
        }
      }
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background Image",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    justify: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectMedia,
    value: attributes.bannerImageId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      onClick: open
    }, "Choose Image"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      onClick: onClickSetToDefault
    }, "Set to Default"))
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Metabox Configuration",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Enable Metabox",
    checked: attributes.enableMetabox,
    onChange: value => setAttributes({
      enableMetabox: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalGrid, {
    ref: setLinkControlRef,
    className: "link-control-wrapper",
    columns: 1,
    style: {
      flex: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: "Home Link Url"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    settings: [],
    value: attributes.metaboxInfo.homeLinkObject ? {
      ...attributes.metaboxInfo.homeLinkObject,
      title: undefined
    } : undefined,
    onChange: onChangeMetaboxHomeLink
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalGrid, {
    columns: 1,
    style: {
      flex: 1
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: "Show only if variable(s) is set"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_select__WEBPACK_IMPORTED_MODULE_6__.EditorSelect, {
    name: "metabox-variable-show-condition",
    isLoading: loading,
    options: variablesOptions,
    value: variablesOptionsSelected,
    isMulti: true,
    onChange: onChangeVariable
  }))))));
}
;
function PageBannerGenericBlockControls(props) {
  const {
    loading,
    response,
    textSelectionOffset,
    metaboxSelectionType
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
    const {
      attributes: {
        metaboxInfo
      }
    } = props;
    if (metaboxSelectionType === "metabox-home-link") {
      props.setAttributes({
        metaboxInfo: {
          ...props.attributes.metaboxInfo,
          homeLinkText: metaboxInfo.homeLinkText ? voca_insert__WEBPACK_IMPORTED_MODULE_5___default()(metaboxInfo.homeLinkText, variable.value, textSelectionOffset) : variable.value
        }
      });
    }
    if (metaboxSelectionType === "metabox-main") {
      props.setAttributes({
        metaboxInfo: {
          ...props.attributes.metaboxInfo,
          mainText: metaboxInfo.mainText ? voca_insert__WEBPACK_IMPORTED_MODULE_5___default()(metaboxInfo.mainText, variable.value, textSelectionOffset) : variable.value
        }
      });
    }
    setIsVariablePopoverVisible(false);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSliders
    }),
    onClick: onClickVariableButton,
    title: "Add a variable",
    ref: setVariableButtonTrigger
  }))), !isVariablePopoverVisible ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    placement: "bottom",
    onClose: () => setIsVariablePopoverVisible(false),
    anchor: variableButtonTrigger
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_select__WEBPACK_IMPORTED_MODULE_6__.EditorSelect, {
    name: "metabox-variable",
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

/***/ "./src/blocks/page-banner-generic/components/metabox.tsx":
/*!***************************************************************!*\
  !*** ./src/blocks/page-banner-generic/components/metabox.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metabox: () => (/* binding */ Metabox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHome */ "./node_modules/@fortawesome/free-solid-svg-icons/faHome.js");
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");






function Metabox(props) {
  const {
    attributes,
    setAttributes,
    onSelectHomeLinkText,
    onSelectMainText
  } = props;
  const {
    metaboxInfo
  } = attributes;
  const metaboxClasses = ["metabox", "metabox--position-down", "metabox--align-with-post", "metabox--with-home-link", "metabox--editor"];
  const metaboxHomeLinkUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!metaboxInfo.homeLinkObject) return undefined;
    const {
      url,
      type,
      title
    } = metaboxInfo.homeLinkObject;
    return type === "Variable" ? title : url;
  }, []);
  function onChangeHomeLinkText(value) {
    setAttributes({
      metaboxInfo: {
        ...metaboxInfo,
        homeLinkText: value
      }
    });
  }
  function onChangeMainText(value) {
    setAttributes({
      metaboxInfo: {
        ...metaboxInfo,
        mainText: value
      }
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: metaboxClasses.join(" ")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_3__.EditorAnchor, {
    className: "metabox__blog-home-link",
    href: metaboxHomeLinkUrl
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_4__.faHome,
    width: "0.9rem",
    height: "0.9rem"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    allowedFormats: ["core/italic", "core/bold"],
    value: metaboxInfo.homeLinkText,
    onChange: onChangeHomeLinkText,
    onSelect: onSelectHomeLinkText
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "metabox__main",
    allowedFormats: ["core/italic", "core/bold"],
    value: metaboxInfo.mainText,
    onChange: onChangeMainText,
    onSelect: onSelectMainText
  })));
}

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
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-use/lib/useAsync */ "./node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _components_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/control */ "./src/blocks/page-banner-generic/components/control.tsx");
/* harmony import */ var _components_metabox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/metabox */ "./src/blocks/page-banner-generic/components/metabox.tsx");









function EditComponent(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const defaultBannerImage = CetaceanUniversityPageBannerGenericData.theme_path + "/images/ocean.jpg";
  const [bannerImage, setBannerImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [textSelectionOffset, setTextSelectionOffset] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [metaboxTextSelectionType, setMetaboxTextSelectionType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("metabox-main");
  const previousInnerBlocksIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
  const {
    loading,
    value: response
  } = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/cetacean-university/v1/editor/variables",
      method: "GET"
    });
    return response;
  }, []);
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
    const bannerTitleNames = new Set([_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerTitle]);
    function countPageBannerTitleBlocks(count, {
      name
    }) {
      return bannerTitleNames.has(name) ? count + 1 : count;
    }
    return innerBlocks.reduce(countPageBannerTitleBlocks, 0);
  }, [innerBlocksDependency]);
  const pageBannerSubtitleBlocksCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const bannerSubtitleNames = new Set([_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerSubtitle]);
    function countPageBannerSubtitleBlocks(count, {
      name
    }) {
      return bannerSubtitleNames.has(name) ? count + 1 : count;
    }
    return innerBlocks.reduce(countPageBannerSubtitleBlocks, 0);
  }, [innerBlocksDependency]);
  async function validadeBlocks() {
    const previousBlocksIds = previousInnerBlocksIds.current;
    const hasMoreThanOneEachBlock = pageBannerTitleBlocksCount > 1 || pageBannerSubtitleBlocksCount > 1;
    if (previousBlocksIds.size > 0 && hasMoreThanOneEachBlock) {
      const promises = innerBlocks.map(async block => {
        if (!previousBlocksIds.has(block.clientId)) {
          await removeBlock(block.clientId);
          alert("You can only have 1 of Title and Subtitle");
        }
      });
      await Promise.all(promises);
    }
    innerBlocks.forEach(({
      clientId
    }) => previousBlocksIds.add(clientId));
  }
  function getMetaboxOnSelectText(type) {
    return event => {
      const eventDocument = event.currentTarget.getRootNode();
      const selection = eventDocument.getSelection();
      if (!selection) return;
      setTextSelectionOffset(selection.focusOffset);
      setMetaboxTextSelectionType(type);
    };
  }
  const RenderAppender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const hasOneOrMoreOfEachBlock = pageBannerTitleBlocksCount >= 1 && pageBannerSubtitleBlocksCount >= 1;
    return () => hasOneOrMoreOfEachBlock ? null : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ButtonBlockAppender, {
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
    setAttributes: setAttributes,
    loading: loading,
    response: response
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_control__WEBPACK_IMPORTED_MODULE_5__.PageBannerGenericBlockControls, {
    attributes: attributes,
    setAttributes: setAttributes,
    loading: loading,
    response: response,
    textSelectionOffset: textSelectionOffset,
    metaboxSelectionType: metaboxTextSelectionType
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
    allowedBlocks: [_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerTitle, _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerSubtitle],
    template: [[_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerTitle], [_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_4__.CetaceanUniversityBlocks.PageBannerSubtitle]],
    renderAppender: RenderAppender
  })), !attributes.enableMetabox ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_metabox__WEBPACK_IMPORTED_MODULE_6__.Metabox, {
    attributes: attributes,
    setAttributes: setAttributes,
    onSelectHomeLinkText: getMetaboxOnSelectText("metabox-home-link"),
    onSelectMainText: getMetaboxOnSelectText("metabox-main")
  })));
}

/***/ }),

/***/ "./src/blocks/page-banner-generic/index.ts":
/*!*************************************************!*\
  !*** ./src/blocks/page-banner-generic/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_banner_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-banner-generic */ "./src/blocks/page-banner-generic/page-banner-generic.tsx");


/***/ }),

/***/ "./src/blocks/page-banner-generic/page-banner-generic.tsx":
/*!****************************************************************!*\
  !*** ./src/blocks/page-banner-generic/page-banner-generic.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-banner-generic/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-banner-generic/save.tsx");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.PageBannerGeneric, {
  title: "Page Banner Generic",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.BlockCategory,
  icon: "cover-image",
  attributes: {
    bannerImageId: {
      type: "number",
      default: 0
    },
    enableMetabox: {
      type: "boolean",
      default: false
    },
    metaboxInfo: {
      type: "object",
      default: {
        homeLinkText: "Home Link",
        mainText: "Main Metabox",
        showConditionalVariables: []
      }
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
/******/ 			"blocks/page-banner-generic": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/page-banner-generic/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=page-banner-generic.js.map