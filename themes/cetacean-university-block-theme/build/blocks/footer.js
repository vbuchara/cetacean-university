/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/footer/components/controls.tsx":
/*!***************************************************!*\
  !*** ./src/blocks/footer/components/controls.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterInspectorControls: () => (/* binding */ FooterInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function FooterInspectorControls({
  attributes,
  setAttributes
}) {
  const {
    links,
    siteAnchor,
    siteAnchorWithLink,
    phoneNumber
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Site Information",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Site Title Redirect",
    checked: siteAnchorWithLink,
    onChange: value => setAttributes({
      siteAnchorWithLink: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "site-phone-number",
    label: "Phone Number",
    value: phoneNumber || "",
    onChange: value => setAttributes({
      phoneNumber: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "site-phone-number-link",
    label: "Phone Number Link",
    value: links.phoneNumber || "",
    onChange: value => setAttributes({
      links: {
        ...links,
        phoneNumber: value
      }
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Social Media",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "facebook-url",
    label: "Facebook",
    value: links.facebook || "",
    onChange: value => setAttributes({
      links: {
        ...links,
        facebook: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "twitter-url",
    label: "Twitter",
    value: links.twitter || "",
    onChange: value => setAttributes({
      links: {
        ...links,
        twitter: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "youtube-url",
    label: "Youtube",
    value: links.youtube || "",
    onChange: value => setAttributes({
      links: {
        ...links,
        youtube: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "linkedin-url",
    label: "Linkedin",
    value: links.linkedin || "",
    onChange: value => setAttributes({
      links: {
        ...links,
        linkedin: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    name: "instagram-url",
    label: "Instagram",
    value: links.instagram || "",
    onChange: value => setAttributes({
      links: {
        ...links,
        instagram: value
      }
    })
  }))));
}

/***/ }),

/***/ "./src/blocks/footer/components/explore-menu.tsx":
/*!*******************************************************!*\
  !*** ./src/blocks/footer/components/explore-menu.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreMenu: () => (/* binding */ ExploreMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/editor-anchor */ "./src/components/editor-anchor.tsx");


function ExploreMenu({
  isOnEditor
}) {
  const MenuAnchor = props => {
    return isOnEditor ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__.EditorAnchor, {
      ...props
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      ...props
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "nav-list footer-menu-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "menu-explore-menu-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    id: "menu-explore-menu",
    className: "menu"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
    href: CetaceanUniversityFooterData.program_archive_link
  }, "Programs")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
    href: CetaceanUniversityFooterData.events_archive_link
  }, "Events")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
    href: CetaceanUniversityFooterData.campus_archive_link
  }, "Campuses")))));
}

/***/ }),

/***/ "./src/blocks/footer/components/learn-menu.tsx":
/*!*****************************************************!*\
  !*** ./src/blocks/footer/components/learn-menu.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LearnMenu: () => (/* binding */ LearnMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/editor-anchor */ "./src/components/editor-anchor.tsx");


function LearnMenu({
  isOnEditor
}) {
  const MenuAnchor = props => {
    return isOnEditor ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__.EditorAnchor, {
      ...props
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      ...props
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "nav-list"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "menu-learn-menu-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    id: "menu-learn-menu",
    className: "menu"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
    href: CetaceanUniversityFooterData.blog_link
  }, "Blog")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
    href: CetaceanUniversityFooterData.about_us_link
  }, "About Us")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "menu-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
    rel: "privacy-policy",
    href: CetaceanUniversityFooterData.privacy_policy_link
  }, "Privacy Policy")))));
}

/***/ }),

/***/ "./src/blocks/footer/components/social-menu.tsx":
/*!******************************************************!*\
  !*** ./src/blocks/footer/components/social-menu.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialMenu: () => (/* binding */ SocialMenu),
/* harmony export */   socialMediaForMenu: () => (/* binding */ socialMediaForMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookF */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faYoutube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faYoutube */ "./node_modules/@fortawesome/free-brands-svg-icons/faYoutube.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedin */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedin.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faInstagram */ "./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js");
/* harmony import */ var _src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/components/editor-anchor */ "./src/components/editor-anchor.tsx");








const socialMediaForMenu = ["facebook", "instagram", "linkedin", "youtube", "twitter"];
function SocialMenu({
  isOnEditor,
  socialLinks: anySocialLinks
}) {
  const socialLinks = {
    facebook: anySocialLinks.facebook,
    twitter: anySocialLinks.twitter,
    youtube: anySocialLinks.youtube,
    linkedin: anySocialLinks.linkedin,
    instagram: anySocialLinks.instagram
  };
  const filteredSocialLinkEntries = Object.entries(socialLinks).filter(([_, link]) => link);
  const BrandIcon = props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      height: "20px",
      ...props
    });
  };
  const socialMediaIconsMap = new Map([["facebook", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BrandIcon, {
    icon: _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_3__.faFacebookF
  })], ["twitter", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BrandIcon, {
    icon: _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_4__.faTwitter
  })], ["youtube", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BrandIcon, {
    icon: _fortawesome_free_brands_svg_icons_faYoutube__WEBPACK_IMPORTED_MODULE_5__.faYoutube
  })], ["linkedin", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BrandIcon, {
    icon: _fortawesome_free_brands_svg_icons_faLinkedin__WEBPACK_IMPORTED_MODULE_6__.faLinkedin
  })], ["instagram", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BrandIcon, {
    icon: _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_7__.faInstagram
  })]]);
  const MenuAnchor = props => {
    return isOnEditor ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__.EditorAnchor, {
      ...props
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      ...props
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "min-list social-icons-list"
  }, filteredSocialLinkEntries.map(entry => {
    const [socialMedia, link] = entry;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: socialMedia
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuAnchor, {
      href: link,
      className: `social-media-icon social-color-${socialMedia}`
    }, socialMediaIconsMap.get(socialMedia)));
  })));
}

/***/ }),

/***/ "./src/blocks/footer/edit.tsx":
/*!************************************!*\
  !*** ./src/blocks/footer/edit.tsx ***!
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
/* harmony import */ var _src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _components_explore_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/explore-menu */ "./src/blocks/footer/components/explore-menu.tsx");
/* harmony import */ var _components_learn_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/learn-menu */ "./src/blocks/footer/components/learn-menu.tsx");
/* harmony import */ var _components_social_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/social-menu */ "./src/blocks/footer/components/social-menu.tsx");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/footer/components/controls.tsx");







function EditComponent({
  attributes,
  setAttributes
}) {
  const {
    siteAnchor,
    siteAnchorWithLink,
    phoneNumber,
    links
  } = attributes;
  const hasSocialLinks = Object.entries(links).some(entry => {
    const [key, value] = entry;
    const socialMediaSet = new Set(_components_social_menu__WEBPACK_IMPORTED_MODULE_5__.socialMediaForMenu);
    return socialMediaSet.has(key) && value;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls__WEBPACK_IMPORTED_MODULE_6__.FooterInspectorControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
    className: "site-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__inner container container--narrow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__main-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__col-one"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "school-logo-text school-logo-text--alt-color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    href: siteAnchorWithLink ? CetaceanUniversityFooterData.site_url : undefined,
    tagName: "a",
    allowedFormats: ["core/bold", "core/italic"],
    value: siteAnchor,
    onChange: value => setAttributes({
      siteAnchor: value
    })
  })), !phoneNumber ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_src_components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__.EditorAnchor, {
    className: "site-footer__link",
    href: links.phoneNumber
  }, phoneNumber))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__col-two-three-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__col-two"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "headline headline--small"
  }, "Explore"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_explore_menu__WEBPACK_IMPORTED_MODULE_3__.ExploreMenu, {
    isOnEditor: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__col-three"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "headline headline--small"
  }, "Learn"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_learn_menu__WEBPACK_IMPORTED_MODULE_4__.LearnMenu, {
    isOnEditor: true
  }))), !hasSocialLinks ? "" : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__col-four"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "headline headline--small"
  }, "Connect With Us"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_social_menu__WEBPACK_IMPORTED_MODULE_5__.SocialMenu, {
    socialLinks: links,
    isOnEditor: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-footer__copyright"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Copyright \xA9 2001-2024 Cetacean University All Rights Reserved")))));
}

/***/ }),

/***/ "./src/blocks/footer/footer.tsx":
/*!**************************************!*\
  !*** ./src/blocks/footer/footer.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/footer.js");
/* harmony import */ var _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/footer/edit.tsx");




;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.Footer, {
  title: "Footer",
  category: _classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_1__.CetaceanUniversityBlocks.BlockCategory,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: {
    siteAnchor: {
      type: "string",
      default: CetaceanUniversityFooterData.site_name
    },
    siteAnchorWithLink: {
      type: "boolean",
      default: true
    },
    phoneNumber: {
      type: "string"
    },
    links: {
      type: "object",
      default: {}
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.EditComponent
});

/***/ }),

/***/ "./src/blocks/footer/index.ts":
/*!************************************!*\
  !*** ./src/blocks/footer/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/blocks/footer/footer.tsx");


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
/******/ 			"blocks/footer": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/footer/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=footer.js.map