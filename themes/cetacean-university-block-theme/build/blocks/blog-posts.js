/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/blog-posts/blog-posts.tsx":
/*!**********************************************!*\
  !*** ./src/blocks/blog-posts/blog-posts.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/blog-posts/edit.tsx");
/* harmony import */ var _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/classes/CetaceanUniversityBlocks */ "./src/classes/CetaceanUniversityBlocks.ts");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.BlogPosts, {
  title: "Blog Posts",
  category: _src_classes_CetaceanUniversityBlocks__WEBPACK_IMPORTED_MODULE_2__.CetaceanUniversityBlocks.BlockCategory,
  icon: "admin-post",
  attributes: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.EditComponent
});

/***/ }),

/***/ "./src/blocks/blog-posts/components/post.tsx":
/*!***************************************************!*\
  !*** ./src/blocks/blog-posts/components/post.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Post: () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _utils_getTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/getTitle */ "./src/utils/getTitle.ts");
/* harmony import */ var _utils_getExcerpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/getExcerpt */ "./src/utils/getExcerpt.ts");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/getDate */ "./src/utils/getDate.ts");






function Post({
  post
}) {
  const autor = post._embedded.author[0];
  const categories = post._embedded["wp:term"][0].map(category => {
    return {
      name: category.name,
      id: category.id,
      link: category.link
    };
  });
  const categoriesDependency = categories.reduce((result, {
    id,
    link,
    name
  }) => result + id + link + name, "");
  const AutorLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__.EditorAnchor, {
      href: autor.link,
      title: `Posted by ${autor.name}`,
      rel: "author"
    }, autor.name);
  }, [autor.name, autor.link]);
  const CategoryLinks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, categories.reduce((CategoriesLinks, category) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, CategoriesLinks, CategoriesLinks ? ", " : "", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__.EditorAnchor, {
        key: category.id,
        href: category.link,
        rel: "category tag"
      }, category.name));
    }, ""));
  }, [categoriesDependency]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "post-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "headline headline--medium headline--post-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__.EditorAnchor, {
    href: post.link
  }, (0,_utils_getTitle__WEBPACK_IMPORTED_MODULE_2__.getTitle)(post))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "metabox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Posted by ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AutorLink, null), " ", "on ", (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_4__.getDate)(post) + " ", "in ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CategoryLinks, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "generic-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_utils_getExcerpt__WEBPACK_IMPORTED_MODULE_3__.getExcerpt)(post)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_1__.EditorAnchor, {
    className: "btn btn--primary btn--slide-from-top",
    href: post.link
  }, "Continue reading \xBB"))));
}

/***/ }),

/***/ "./src/blocks/blog-posts/edit.tsx":
/*!****************************************!*\
  !*** ./src/blocks/blog-posts/edit.tsx ***!
  \****************************************/
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
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post */ "./src/blocks/blog-posts/components/post.tsx");




function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const postsPerPage = Number(CetaceanUniversityBlogPostsData.posts_per_page);
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords("postType", "post", {
      per_page: postsPerPage ? postsPerPage : 10,
      _embed: true
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container container--narrow page-section"
  }, posts?.map(post => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post__WEBPACK_IMPORTED_MODULE_3__.Post, {
    key: post.id,
    post: post
  })));
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
  static PageBannerArchiveTitle = `${this.DomainName}/page-banner-archive-title`;
  static PageBannerGeneric = `${this.DomainName}/page-banner-generic`;
  static PostBanner = `${this.DomainName}/post-banner`;
  static PostContent = `${this.DomainName}/post-content`;
  static BlogPosts = `${this.DomainName}/blog-posts`;
  static PageBanner = `${this.DomainName}/page-banner`;
  static PageContent = `${this.DomainName}/page-content`;
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

/***/ "./src/utils/getDate.ts":
/*!******************************!*\
  !*** ./src/utils/getDate.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDate: () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");

function getDate(post, formatStr = "dd/MM/yyyy") {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(post.date, formatStr);
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

/***/ "./node_modules/fp-ts/lib/function.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/lib/function.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dual = exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
var getBooleanAlgebra = function (B) {
    return function () { return ({
        meet: function (x, y) { return function (a) { return B.meet(x(a), y(a)); }; },
        join: function (x, y) { return function (a) { return B.join(x(a), y(a)); }; },
        zero: function () { return B.zero; },
        one: function () { return B.one; },
        implies: function (x, y) { return function (a) { return B.implies(x(a), y(a)); }; },
        not: function (x) { return function (a) { return B.not(x(a)); }; }
    }); };
};
exports.getBooleanAlgebra = getBooleanAlgebra;
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate, getSemigroup } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.concat(f, g)(1), true)
 * assert.deepStrictEqual(S1.concat(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.concat(f, g)(1), true)
 * assert.deepStrictEqual(S2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getSemigroup = function (S) {
    return function () { return ({
        concat: function (f, g) { return function (a) { return S.concat(f(a), g(a)); }; }
    }); };
};
exports.getSemigroup = getSemigroup;
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate } from 'fp-ts/Predicate'
 * import { getMonoid } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.concat(f, g)(1), true)
 * assert.deepStrictEqual(M1.concat(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.concat(f, g)(1), true)
 * assert.deepStrictEqual(M2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */
var getMonoid = function (M) {
    var getSemigroupM = (0, exports.getSemigroup)(M);
    return function () { return ({
        concat: getSemigroupM().concat,
        empty: function () { return M.empty; }
    }); };
};
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.10.0
 */
var getSemiring = function (S) { return ({
    add: function (f, g) { return function (x) { return S.add(f(x), g(x)); }; },
    zero: function () { return S.zero; },
    mul: function (f, g) { return function (x) { return S.mul(f(x), g(x)); }; },
    one: function () { return S.one; }
}); };
exports.getSemiring = getSemiring;
/**
 * @category instances
 * @since 2.10.0
 */
var getRing = function (R) {
    var S = (0, exports.getSemiring)(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function (f, g) { return function (x) { return R.sub(f(x), g(x)); }; }
    };
};
exports.getRing = getRing;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.11.0
 */
var apply = function (a) {
    return function (f) {
        return f(a);
    };
};
exports.apply = apply;
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
exports.identity = identity;
/**
 * @since 2.0.0
 */
exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
exports.constant = constant;
/**
 * A thunk that returns always `true`.
 *
 * @since 2.0.0
 */
exports.constTrue = constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 2.0.0
 */
exports.constFalse = constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 2.0.0
 */
exports.constNull = constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @since 2.0.0
 */
exports.constUndefined = constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 2.0.0
 */
exports.constVoid = exports.constUndefined;
function flip(f) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length > 1) {
            return f(args[1], args[0]);
        }
        return function (a) { return f(a)(args[0]); };
    };
}
exports.flip = flip;
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
exports.flow = flow;
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
exports.tuple = tuple;
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
exports.increment = increment;
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
exports.decrement = decrement;
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}
exports.untupled = untupled;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default: {
            var ret = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                ret = arguments[i](ret);
            }
            return ret;
        }
    }
}
exports.pipe = pipe;
/**
 * Type hole simulation
 *
 * @since 2.7.0
 */
exports.hole = absurd;
/**
 * @since 2.11.0
 */
var SK = function (_, b) { return b; };
exports.SK = SK;
/**
 * Use `Predicate` module instead.
 *
 * @category zone of death
 * @since 2.0.0
 * @deprecated
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
exports.not = not;
/**
 * Use `Endomorphism` module instead.
 *
 * @category zone of death
 * @since 2.10.0
 * @deprecated
 */
var getEndomorphismMonoid = function () { return ({
    concat: function (first, second) { return flow(first, second); },
    empty: identity
}); };
exports.getEndomorphismMonoid = getEndomorphismMonoid;
/** @internal */
var dual = function (arity, body) {
    var isDataFirst = typeof arity === 'number' ? function (args) { return args.length >= arity; } : arity;
    return function () {
        var args = Array.from(arguments);
        if (isDataFirst(arguments)) {
            return body.apply(this, args);
        }
        return function (self) { return body.apply(void 0, __spreadArray([self], args, false)); };
    };
};
exports.dual = dual;


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign.apply(this,arguments)};Object.defineProperty(exports, "__esModule", ({value:true}));var named_references_1=__webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");var numeric_unicode_map_1=__webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");var surrogate_pairs_1=__webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");var allNamedReferences=__assign(__assign({},named_references_1.namedReferences),{all:named_references_1.namedReferences.html5});function replaceUsingRegExp(macroText,macroRegExp,macroReplacer){macroRegExp.lastIndex=0;var replaceMatch=macroRegExp.exec(macroText);var replaceResult;if(replaceMatch){replaceResult="";var replaceLastIndex=0;do{if(replaceLastIndex!==replaceMatch.index){replaceResult+=macroText.substring(replaceLastIndex,replaceMatch.index)}var replaceInput=replaceMatch[0];replaceResult+=macroReplacer(replaceInput);replaceLastIndex=replaceMatch.index+replaceInput.length}while(replaceMatch=macroRegExp.exec(macroText));if(replaceLastIndex!==macroText.length){replaceResult+=macroText.substring(replaceLastIndex)}}else{replaceResult=macroText}return replaceResult}var encodeRegExps={specialChars:/[<>'"&]/g,nonAscii:/[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,nonAsciiPrintable:/[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,nonAsciiPrintableOnly:/[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,extensive:/[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g};var defaultEncodeOptions={mode:"specialChars",level:"all",numeric:"decimal"};function encode(text,_a){var _b=_a===void 0?defaultEncodeOptions:_a,_c=_b.mode,mode=_c===void 0?"specialChars":_c,_d=_b.numeric,numeric=_d===void 0?"decimal":_d,_e=_b.level,level=_e===void 0?"all":_e;if(!text){return""}var encodeRegExp=encodeRegExps[mode];var references=allNamedReferences[level].characters;var isHex=numeric==="hexadecimal";return replaceUsingRegExp(text,encodeRegExp,(function(input){var result=references[input];if(!result){var code=input.length>1?surrogate_pairs_1.getCodePoint(input,0):input.charCodeAt(0);result=(isHex?"&#x"+code.toString(16):"&#"+code)+";"}return result}))}exports.encode=encode;var defaultDecodeOptions={scope:"body",level:"all"};var strict=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;var attribute=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;var baseDecodeRegExps={xml:{strict:strict,attribute:attribute,body:named_references_1.bodyRegExps.xml},html4:{strict:strict,attribute:attribute,body:named_references_1.bodyRegExps.html4},html5:{strict:strict,attribute:attribute,body:named_references_1.bodyRegExps.html5}};var decodeRegExps=__assign(__assign({},baseDecodeRegExps),{all:baseDecodeRegExps.html5});var fromCharCode=String.fromCharCode;var outOfBoundsChar=fromCharCode(65533);var defaultDecodeEntityOptions={level:"all"};function getDecodedEntity(entity,references,isAttribute,isStrict){var decodeResult=entity;var decodeEntityLastChar=entity[entity.length-1];if(isAttribute&&decodeEntityLastChar==="="){decodeResult=entity}else if(isStrict&&decodeEntityLastChar!==";"){decodeResult=entity}else{var decodeResultByReference=references[entity];if(decodeResultByReference){decodeResult=decodeResultByReference}else if(entity[0]==="&"&&entity[1]==="#"){var decodeSecondChar=entity[2];var decodeCode=decodeSecondChar=="x"||decodeSecondChar=="X"?parseInt(entity.substr(3),16):parseInt(entity.substr(2));decodeResult=decodeCode>=1114111?outOfBoundsChar:decodeCode>65535?surrogate_pairs_1.fromCodePoint(decodeCode):fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode]||decodeCode)}}return decodeResult}function decodeEntity(entity,_a){var _b=(_a===void 0?defaultDecodeEntityOptions:_a).level,level=_b===void 0?"all":_b;if(!entity){return""}return getDecodedEntity(entity,allNamedReferences[level].entities,false,false)}exports.decodeEntity=decodeEntity;function decode(text,_a){var _b=_a===void 0?defaultDecodeOptions:_a,_c=_b.level,level=_c===void 0?"all":_c,_d=_b.scope,scope=_d===void 0?level==="xml"?"strict":"body":_d;if(!text){return""}var decodeRegExp=decodeRegExps[level][scope];var references=allNamedReferences[level].entities;var isAttribute=scope==="attribute";var isStrict=scope==="strict";return replaceUsingRegExp(text,decodeRegExp,(function(entity){return getDecodedEntity(entity,references,isAttribute,isStrict)}))}exports.decode=decode;
//# sourceMappingURL=./index.js.map

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};
//# sourceMappingURL=./named-references.js.map

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};
//# sourceMappingURL=./numeric-unicode-map.js.map

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;
//# sourceMappingURL=./surrogate-pairs.js.map

/***/ }),

/***/ "./node_modules/rfdc/index.js":
/*!************************************!*\
  !*** ./node_modules/rfdc/index.js ***!
  \************************************/
/***/ ((module) => {


module.exports = rfdc

function copyBuffer (cur) {
  if (cur instanceof Buffer) {
    return Buffer.from(cur)
  }

  return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length)
}

function rfdc (opts) {
  opts = opts || {}
  if (opts.circles) return rfdcCircles(opts)

  const constructorHandlers = new Map()
  constructorHandlers.set(Date, (o) => new Date(o))
  constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)))
  constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)))
  if (opts.constructorHandlers) {
    for (const handler of opts.constructorHandlers) {
      constructorHandlers.set(handler[0], handler[1])
    }
  }

  let handler = null

  return opts.proto ? cloneProto : clone

  function cloneArray (a, fn) {
    const keys = Object.keys(a)
    const a2 = new Array(keys.length)
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]
      const cur = a[k]
      if (typeof cur !== 'object' || cur === null) {
        a2[k] = cur
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        a2[k] = handler(cur, fn)
      } else if (ArrayBuffer.isView(cur)) {
        a2[k] = copyBuffer(cur)
      } else {
        a2[k] = fn(cur)
      }
    }
    return a2
  }

  function clone (o) {
    if (typeof o !== 'object' || o === null) return o
    if (Array.isArray(o)) return cloneArray(o, clone)
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, clone)
    }
    const o2 = {}
    for (const k in o) {
      if (Object.hasOwnProperty.call(o, k) === false) continue
      const cur = o[k]
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, clone)
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur)
      } else {
        o2[k] = clone(cur)
      }
    }
    return o2
  }

  function cloneProto (o) {
    if (typeof o !== 'object' || o === null) return o
    if (Array.isArray(o)) return cloneArray(o, cloneProto)
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, cloneProto)
    }
    const o2 = {}
    for (const k in o) {
      const cur = o[k]
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, cloneProto)
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur)
      } else {
        o2[k] = cloneProto(cur)
      }
    }
    return o2
  }
}

function rfdcCircles (opts) {
  const refs = []
  const refsNew = []

  const constructorHandlers = new Map()
  constructorHandlers.set(Date, (o) => new Date(o))
  constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)))
  constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)))
  if (opts.constructorHandlers) {
    for (const handler of opts.constructorHandlers) {
      constructorHandlers.set(handler[0], handler[1])
    }
  }

  let handler = null
  return opts.proto ? cloneProto : clone

  function cloneArray (a, fn) {
    const keys = Object.keys(a)
    const a2 = new Array(keys.length)
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]
      const cur = a[k]
      if (typeof cur !== 'object' || cur === null) {
        a2[k] = cur
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        a2[k] = handler(cur, fn)
      } else if (ArrayBuffer.isView(cur)) {
        a2[k] = copyBuffer(cur)
      } else {
        const index = refs.indexOf(cur)
        if (index !== -1) {
          a2[k] = refsNew[index]
        } else {
          a2[k] = fn(cur)
        }
      }
    }
    return a2
  }

  function clone (o) {
    if (typeof o !== 'object' || o === null) return o
    if (Array.isArray(o)) return cloneArray(o, clone)
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, clone)
    }
    const o2 = {}
    refs.push(o)
    refsNew.push(o2)
    for (const k in o) {
      if (Object.hasOwnProperty.call(o, k) === false) continue
      const cur = o[k]
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, clone)
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur)
      } else {
        const i = refs.indexOf(cur)
        if (i !== -1) {
          o2[k] = refsNew[i]
        } else {
          o2[k] = clone(cur)
        }
      }
    }
    refs.pop()
    refsNew.pop()
    return o2
  }

  function cloneProto (o) {
    if (typeof o !== 'object' || o === null) return o
    if (Array.isArray(o)) return cloneArray(o, cloneProto)
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
      return handler(o, cloneProto)
    }
    const o2 = {}
    refs.push(o)
    refsNew.push(o2)
    for (const k in o) {
      const cur = o[k]
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur
      } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
        o2[k] = handler(cur, cloneProto)
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur)
      } else {
        const i = refs.indexOf(cur)
        if (i !== -1) {
          o2[k] = refsNew[i]
        } else {
          o2[k] = cloneProto(cur)
        }
      }
    }
    refs.pop()
    refsNew.pop()
    return o2
  }
}


/***/ }),

/***/ "./node_modules/voca/es/index.js":
/*!***************************************!*\
  !*** ./node_modules/voca/es/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! 
 * Voca string library 1.4.1
 * https://vocajs.pages.dev
 *
 * Copyright Dmitri Pavlutin and other contributors
 * Released under the MIT license
 */

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Checks if `value` is `null` or `undefined`
 *
 * @ignore
 * @function isNil
 * @param {*} value The object to check
 * @return {boolean} Returns `true` is `value` is `undefined` or `null`, `false` otherwise
 */
function isNil(value) {
  return value === undefined || value === null;
}

/**
 * Converts the `value` to a boolean. If `value` is `undefined` or `null`, returns `defaultValue`.
 *
 * @ignore
 * @function toBoolean
 * @param {*} value The value to convert.
 * @param {boolean} [defaultValue=false] The default value.
 * @return {boolean} Returns the coercion to boolean.
 */

function coerceToBoolean(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isNil(value)) {
    return defaultValue;
  }

  return Boolean(value);
}

/**
 * Checks whether `subject` is a string primitive type.
 *
 * @function isString
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} subject The value to verify.
 * @return {boolean} Returns `true` if `subject` is string primitive type or `false` otherwise.
 * @example
 * v.isString('vacation');
 * // => true
 *
 * v.isString(560);
 * // => false
 */
function isString(subject) {
  return typeof subject === 'string';
}

/**
 * Get the string representation of the `value`.
 * Converts the `value` to string.
 * If `value` is `null` or `undefined`, return `defaultValue`.
 *
 * @ignore
 * @function toString
 * @param {*} value             The value to convert.
 * @param {*} [defaultValue=''] The default value to return.
 * @return {string|null}        Returns the string representation of `value`. Returns `defaultValue` if `value` is
 *                              `null` or `undefined`.
 */

function coerceToString(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (isNil(value)) {
    return defaultValue;
  }

  if (isString(value)) {
    return value;
  }

  return String(value);
}

/**
 * Converts the first character of `subject` to upper case. If `restToLower` is `true`, convert the rest of
 * `subject` to lower case.
 *
 * @function capitalize
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string}  [subject='']        The string to capitalize.
 * @param  {boolean} [restToLower=false] Convert the rest of `subject` to lower case.
 * @return {string}                      Returns the capitalized string.
 * @example
 * v.capitalize('apple');
 * // => 'Apple'
 *
 * v.capitalize('aPPle', true);
 * // => 'Apple'
 */

function capitalize(subject, restToLower) {
  var subjectString = coerceToString(subject);
  var restToLowerCaseBoolean = coerceToBoolean(restToLower);

  if (subjectString === '') {
    return '';
  }

  if (restToLowerCaseBoolean) {
    subjectString = subjectString.toLowerCase();
  }

  return subjectString.substr(0, 1).toUpperCase() + subjectString.substr(1);
}

/**
 * Converts the `subject` to lower case.
 *
 * @function lowerCase
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to lower case.
 * @return {string}              Returns the lower case string.
 * @example
 * v.lowerCase('Green');
 * // => 'green'
 *
 * v.lowerCase('BLUE');
 * // => 'blue'
 */

function lowerCase(subject) {
  var subjectString = coerceToString(subject, '');
  return subjectString.toLowerCase();
}

/**
 * A regular expression string matching digits
 *
 * @type {string}
 * @ignore
 */
var digit = '\\d';
/**
 * A regular expression string matching whitespace
 *
 * @type {string}
 * @ignore
 */

var whitespace = '\\s\\uFEFF\\xA0';
/**
 * A regular expression string matching high surrogate
 *
 * @type {string}
 * @ignore
 */

var highSurrogate = '\\uD800-\\uDBFF';
/**
 * A regular expression string matching low surrogate
 *
 * @type {string}
 * @ignore
 */

var lowSurrogate = '\\uDC00-\\uDFFF';
/**
 * A regular expression string matching diacritical mark
 *
 * @type {string}
 * @ignore
 */

var diacriticalMark = '\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F';
/**
 * A regular expression to match the base character for a combining mark
 *
 * @type {string}
 * @ignore
 */

var base = '\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF';
/**
 * Regular expression to match combining marks
 *
 * @see http://unicode.org/faq/char_combmark.html
 * @type {RegExp}
 * @ignore
 */

var REGEXP_COMBINING_MARKS = new RegExp('([' + base + ']|[' + highSurrogate + '][' + lowSurrogate + ']|[' + highSurrogate + '](?![' + lowSurrogate + '])|(?:[^' + highSurrogate + ']|^)[' + lowSurrogate + '])([' + diacriticalMark + ']+)', 'g');
/**
 * Regular expression to match surrogate pairs
 *
 * @see http://www.unicode.org/faq/utf_bom.html#utf16-2
 * @type {RegExp}
 * @ignore
 */

var REGEXP_SURROGATE_PAIRS = new RegExp('([' + highSurrogate + '])([' + lowSurrogate + '])', 'g');
/**
 * Regular expression to match a unicode character
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_UNICODE_CHARACTER = new RegExp('((?:[' + base + ']|[' + highSurrogate + '][' + lowSurrogate + ']|[' + highSurrogate + '](?![' + lowSurrogate + '])|(?:[^' + highSurrogate + ']|^)[' + lowSurrogate + '])(?:[' + diacriticalMark + ']+))|\
([' + highSurrogate + '][' + lowSurrogate + '])|\
([\\n\\r\\u2028\\u2029])|\
(.)', 'g');
/**
 * Regular expression to match whitespaces
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_WHITESPACE = new RegExp('[' + whitespace + ']');
/**
 * Regular expression to match whitespaces from the left side
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_TRIM_LEFT = new RegExp('^[' + whitespace + ']+');
/**
 * Regular expression to match whitespaces from the right side
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_TRIM_RIGHT = new RegExp('[' + whitespace + ']+$');
/**
 * Regular expression to match digit characters
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_DIGIT = new RegExp('^' + digit + '+$');
/**
 * Regular expression to match regular expression special characters
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_SPECIAL_CHARACTERS = /[-[\]{}()*+!<=:?./\\^$|#,]/g;
/**
 * Regular expression to match not latin characters
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_NON_LATIN = /[^A-Za-z0-9]/g;
/**
 * Regular expression to match HTML special characters.
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g;
/**
 * Regular expression to match sprintf format string
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_CONVERSION_SPECIFICATION = /(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g;
/**
 * Regular expression to match trailing zeros in a number
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_TRAILING_ZEROS = /\.?0+$/g;
/**
 * Regular expression to match a list of tags.
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-name
 * @type {RegExp}
 * @ignore
 */

var REGEXP_TAG_LIST = /<([A-Za-z0-9]+)>/g;

/**
 * A regular expression to match the General Punctuation Unicode block
 *
 * @type {string}
 * @ignore
 */

var generalPunctuationBlock = '\\u2000-\\u206F';
/**
 * A regular expression to match non characters from from Basic Latin and Latin-1 Supplement Unicode blocks
 *
 * @type {string}
 * @ignore
 */

var nonCharacter = '\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7';
/**
 * A regular expression to match the dingbat Unicode block
 *
 * @type {string}
 * @ignore
 */

var dingbatBlock = '\\u2700-\\u27BF';
/**
 * A regular expression string that matches lower case letters: LATIN
 *
 * @type {string}
 * @ignore
 */

var lowerCaseLetter = 'a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F';
/**
 * A regular expression string that matches upper case letters: LATIN
 *
 * @type {string}
 * @ignore
 */

var upperCaseLetter = '\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e';
/**
 * Regular expression to match Unicode words
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_WORD = new RegExp('(?:[' + upperCaseLetter + '][' + diacriticalMark + ']*)?(?:[' + lowerCaseLetter + '][' + diacriticalMark + ']*)+|\
(?:[' + upperCaseLetter + '][' + diacriticalMark + ']*)+(?![' + lowerCaseLetter + '])|\
[' + digit + ']+|\
[' + dingbatBlock + ']|\
[^' + nonCharacter + generalPunctuationBlock + whitespace + ']+', 'g');
/**
 * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_LATIN_WORD = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
/**
 * Regular expression to match alpha characters
 *
 * @see http://stackoverflow.com/a/22075070/1894471
 * @type {RegExp}
 * @ignore
 */

var REGEXP_ALPHA = new RegExp('^(?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)+$');
/**
 * Regular expression to match alpha and digit characters
 *
 * @see http://stackoverflow.com/a/22075070/1894471
 * @type {RegExp}
 * @ignore
 */

var REGEXP_ALPHA_DIGIT = new RegExp('^((?:[' + lowerCaseLetter + upperCaseLetter + '][' + diacriticalMark + ']*)|[' + digit + '])+$');
/**
 * Regular expression to match Extended ASCII characters, i.e. the first 255
 *
 * @type {RegExp}
 * @ignore
 */

var REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/;

/**
 * Verifies if `value` is `undefined` or `null` and returns `defaultValue`. In other case returns `value`.
 *
 * @ignore
 * @function nilDefault
 * @param {*} value The value to verify.
 * @param {*} defaultValue The default value.
 * @return {*} Returns `defaultValue` if `value` is `undefined` or `null`, otherwise `defaultValue`.
 */
function nilDefault(value, defaultValue) {
  return value == null ? defaultValue : value;
}

/**
 * Get the string representation of the `value`.
 * Converts the `value` to string.
 *
 * @ignore
 * @function toString
 * @param {*} value             The value to convert.
 * @return {string|null}        Returns the string representation of `value`.
 */

function toString(value) {
  if (isNil(value)) {
    return null;
  }

  if (isString(value)) {
    return value;
  }

  return String(value);
}

/**
 * Splits `subject` into an array of words.
 *
 * @function words
 * @static
 * @since 1.0.0
 * @memberOf Split
 * @param {string} [subject=''] The string to split into words.
 * @param {string|RegExp} [pattern] The pattern to watch words. If `pattern` is not RegExp, it is transformed to `new RegExp(pattern, flags)`.
 * @param {string} [flags=''] The regular expression flags. Applies when `pattern` is string type.
 * @return {Array} Returns the array of words.
 * @example
 * v.words('gravity can cross dimensions');
 * // => ['gravity', 'can', 'cross', 'dimensions']
 *
 * v.words('GravityCanCrossDimensions');
 * // => ['Gravity', 'Can', 'Cross', 'Dimensions']
 *
 * v.words('Gravity - can cross dimensions!');
 * // => ['Gravity', 'can', 'cross', 'dimensions']
 *
 * v.words('Earth gravity', /[^\s]+/g);
 * // => ['Earth', 'gravity']
 */

function words(subject, pattern, flags) {
  var subjectString = coerceToString(subject);
  var patternRegExp;

  if (isNil(pattern)) {
    patternRegExp = REGEXP_EXTENDED_ASCII.test(subjectString) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  } else if (pattern instanceof RegExp) {
    patternRegExp = pattern;
  } else {
    var flagsString = toString(nilDefault(flags, ''));
    patternRegExp = new RegExp(toString(pattern), flagsString);
  }

  return nilDefault(subjectString.match(patternRegExp), []);
}

/**
 * Transforms the `word` into camel case chunk.
 *
 * @param  {string} word  The word string
 * @param  {number} index The index of the word in phrase.
 * @return {string}       The transformed word.
 * @ignore
 */

function wordToCamel(word, index) {
  return index === 0 ? lowerCase(word) : capitalize(word, true);
}
/**
 * Converts the `subject` to <a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.
 *
 * @function camelCase
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to camel case.
 * @return {string}              The camel case string.
 * @example
 * v.camelCase('bird flight');
 * // => 'birdFlight'
 *
 * v.camelCase('BirdFlight');
 * // => 'birdFlight'
 *
 * v.camelCase('-BIRD-FLIGHT-');
 * // => 'birdFlight'
 */


function camelCase(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  return words(subjectString).map(wordToCamel).join('');
}

/**
 * Converts the first character of `subject` to lower case.
 *
 * @function decapitalize
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to decapitalize.
 * @return {string}              Returns the decapitalized string.
 * @example
 * v.decapitalize('Sun');
 * // => 'sun'
 *
 * v.decapitalize('moon');
 * // => 'moon'
 */

function decapitalize(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  return subjectString.substr(0, 1).toLowerCase() + subjectString.substr(1);
}

/**
 * Converts the `subject` to <a href="https://en.wikipedia.org/wiki/Letter_case#cite_ref-13">kebab case</a>,
 * also called <i>spinal case</i> or <i>lisp case</i>.
 *
 * @function kebabCase
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to kebab case.
 * @return {string}              Returns the kebab case string.
 * @example
 * v.kebabCase('goodbye blue sky');
 * // => 'goodbye-blue-sky'
 *
 * v.kebabCase('GoodbyeBlueSky');
 * // => 'goodbye-blue-sky'
 *
 * v.kebabCase('-Goodbye-Blue-Sky-');
 * // => 'goodbye-blue-sky'
 */

function kebabCase(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  return words(subjectString).map(lowerCase).join('-');
}

/**
 * Converts the `subject` to <a href="https://en.wikipedia.org/wiki/Snake_case">snake case</a>.
 *
 * @function snakeCase
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to snake case.
 * @return {string}              Returns the snake case string.
 * @example
 * v.snakeCase('learning to fly');
 * // => 'learning_to_fly'
 *
 * v.snakeCase('LearningToFly');
 * // => 'learning_to_fly'
 *
 * v.snakeCase('-Learning-To-Fly-');
 * // => 'learning_to_fly'
 */

function snakeCase(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  return words(subjectString).map(lowerCase).join('_');
}

/**
 * Converts the `subject` to upper case.
 *
 * @function upperCase
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to upper case.
 * @return {string}              Returns the upper case string.
 * @example
 * v.upperCase('school');
 * // => 'SCHOOL'
 */

function upperCase(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.toUpperCase();
}

/**
 * Converts the uppercase alpha characters of `subject` to lowercase and lowercase
 * characters to uppercase.
 *
 * @function swapCase
 * @static
 * @since 1.3.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to swap the case.
 * @return {string}              Returns the converted string.
 * @example
 * v.swapCase('League of Shadows');
 * // => 'lEAGUE OF sHADOWS'
 *
 * v.swapCase('2 Bees');
 * // => '2 bEES'
 */

function swapCase(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.split('').reduce(swapAndConcat, '');
}

function swapAndConcat(swapped, character) {
  var lowerCase = character.toLowerCase();
  var upperCase = character.toUpperCase();
  return swapped + (character === lowerCase ? upperCase : lowerCase);
}

/**
 * Converts the subject to title case.
 *
 * @function titleCase
 * @static
 * @since 1.4.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to title case.
 * @param  {Array}  [noSplit]    Do not split words at the specified characters.
 * @return {string}              Returns the title case string.
 * @example
 * v.titleCase('learning to fly');
 * // => 'Learning To Fly'
 *
 * v.titleCase('jean-luc is good-looking', ['-']);
 * // => 'Jean-luc Is Good-looking'
 */

function titleCase(subject, noSplit) {
  var subjectString = coerceToString(subject);
  var noSplitArray = Array.isArray(noSplit) ? noSplit : [];
  var wordsRegExp = REGEXP_EXTENDED_ASCII.test(subjectString) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  return subjectString.replace(wordsRegExp, function (word, index) {
    var isNoSplit = index > 0 && noSplitArray.indexOf(subjectString[index - 1]) >= 0;
    return isNoSplit ? word.toLowerCase() : capitalize(word, true);
  });
}

/**
 * Clip the number to interval `downLimit` to `upLimit`.
 *
 * @ignore
 * @function clipNumber
 * @param {number} value The number to clip
 * @param {number} downLimit The down limit
 * @param {number} upLimit The upper limit
 * @return {number} The clipped number
 */
function clipNumber(value, downLimit, upLimit) {
  if (value <= downLimit) {
    return downLimit;
  }

  if (value >= upLimit) {
    return upLimit;
  }

  return value;
}

/**
 * Max save integer value
 *
 * @ignore
 * @type {number}
 */
var MAX_SAFE_INTEGER = 0x1fffffffffffff;

/**
 * Transforms `value` to an integer.
 *
 * @ignore
 * @function toInteger
 * @param {number} value The number to transform.
 * @returns {number} Returns the transformed integer.
 */

function toInteger(value) {
  if (value === Infinity) {
    return MAX_SAFE_INTEGER;
  }

  if (value === -Infinity) {
    return -MAX_SAFE_INTEGER;
  }

  return ~~value;
}

/**
 * Truncates `subject` to a new `length`.
 *
 * @function truncate
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to truncate.
 * @param  {int}    length       The length to truncate the string.
 * @param  {string} [end='...']  The string to be added at the end.
 * @return {string}              Returns the truncated string.
 * @example
 * v.truncate('Once upon a time', 7);
 * // => 'Once...'
 *
 * v.truncate('Good day, Little Red Riding Hood', 14, ' (...)');
 * // => 'Good day (...)'
 *
 * v.truncate('Once upon', 10);
 * // => 'Once upon'
 */

function truncate(subject, length, end) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? subjectString.length : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var endString = coerceToString(end, '...');

  if (lengthInt >= subjectString.length) {
    return subjectString;
  }

  return subjectString.substr(0, length - endString.length) + endString;
}

/**
 * Access a character from `subject` at specified `position`.
 *
 * @function charAt
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to extract from.
 * @param  {numbers} position The position to get the character.
 * @return {string} Returns the character at specified position.
 * @example
 * v.charAt('helicopter', 0);
 * // => 'h'
 *
 * v.charAt('helicopter', 1);
 * // => 'e'
 */

function charAt(subject, position) {
  var subjectString = coerceToString(subject);
  return subjectString.charAt(position);
}

var HIGH_SURROGATE_START = 0xd800;
var HIGH_SURROGATE_END = 0xdbff;
var LOW_SURROGATE_START = 0xdc00;
var LOW_SURROGATE_END = 0xdfff;
/**
 * Checks if `codePoint` is a high-surrogate number from range 0xD800 to 0xDBFF.
 *
 * @ignore
 * @param {number} codePoint The code point number to be verified
 * @return {boolean} Returns a boolean whether `codePoint` is a high-surrogate number.
 */

function isHighSurrogate(codePoint) {
  return codePoint >= HIGH_SURROGATE_START && codePoint <= HIGH_SURROGATE_END;
}
/**
 * Checks if `codePoint` is a low-surrogate number from range 0xDC00 to 0xDFFF.
 *
 * @ignore
 * @param {number} codePoint The code point number to be verified
 * @return {boolean} Returns a boolean whether `codePoint` is a low-surrogate number.
 */

function isLowSurrogate(codePoint) {
  return codePoint >= LOW_SURROGATE_START && codePoint <= LOW_SURROGATE_END;
}
/**
 * Get the astral code point number based on surrogate pair numbers.
 *
 * @ignore
 * @param {number} highSurrogate The high-surrogate code point number.
 * @param {number} lowSurrogate The low-surrogate code point number.
 * @return {number} Returns the astral symbol number.
 */

function getAstralNumberFromSurrogatePair(highSurrogate, lowSurrogate) {
  return (highSurrogate - HIGH_SURROGATE_START) * 0x400 + lowSurrogate - LOW_SURROGATE_START + 0x10000;
}

/**
 * Get the number representation of the `value`.
 * Converts the `value` to number.
 * If `value` is `null` or `undefined`, return `defaultValue`.
 *
 * @ignore
 * @function toString
 * @param {*} value             The value to convert.
 * @param {*} [defaultValue=''] The default value to return.
 * @return {number|null}        Returns the number representation of `value`. Returns `defaultValue` if `value` is
 *                              `null` or `undefined`.
 */

function coerceToNumber(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isNil(value)) {
    return defaultValue;
  }

  if (typeof value === 'number') {
    return value;
  }

  return Number(value);
}

/**
 * If `value` is `NaN`, return `defaultValue`. In other case returns `value`.
 *
 * @ignore
 * @function nanDefault
 * @param {*} value The value to verify.
 * @param {*} defaultValue The default value.
 * @return {*} Returns `defaultValue` if `value` is `NaN`, otherwise `defaultValue`.
 */
function nanDefault(value, defaultValue) {
  return value !== value ? defaultValue : value;
}

/**
 * Get the Unicode code point value of the character at `position`. <br/>
 * If a valid UTF-16 <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#24surrogatepairs">
 * surrogate pair</a> starts at `position`, the
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#astralplanes">astral code point</a>
 * value at `position` is returned.
 *
 * @function codePointAt
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to extract from.
 * @param  {number} position The position to get the code point number.
 * @return {number} Returns a non-negative number less than or equal to `0x10FFFF`.
 * @example
 * v.codePointAt('rain', 1);
 * // => 97, or 0x0061
 *
 * v.codePointAt('\uD83D\uDE00 is smile', 0); // or '😀 is smile'
 * // => 128512, or 0x1F600
 */

function codePointAt(subject, position) {
  var subjectString = coerceToString(subject);
  var subjectStringLength = subjectString.length;
  var positionNumber = coerceToNumber(position);
  positionNumber = nanDefault(positionNumber, 0);

  if (positionNumber < 0 || positionNumber >= subjectStringLength) {
    return undefined;
  }

  var firstCodePoint = subjectString.charCodeAt(positionNumber);
  var secondCodePoint;

  if (isHighSurrogate(firstCodePoint) && subjectStringLength > positionNumber + 1) {
    secondCodePoint = subjectString.charCodeAt(positionNumber + 1);

    if (isLowSurrogate(secondCodePoint)) {
      return getAstralNumberFromSurrogatePair(firstCodePoint, secondCodePoint);
    }
  }

  return firstCodePoint;
}

/**
 * Extracts the first `length` characters from `subject`.
 *
 * @function first
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to extract from.
 * @param  {int}    [length=1]   The number of characters to extract.
 * @return {string}              Returns the first characters string.
 * @example
 * v.first('helicopter');
 * // => 'h'
 *
 * v.first('vehicle', 2);
 * // => 've'
 *
 * v.first('car', 5);
 * // => 'car'
 */

function first(subject, length) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 1 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);

  if (subjectString.length <= lengthInt) {
    return subjectString;
  }

  return subjectString.substr(0, lengthInt);
}

/**
 * Get a grapheme from `subject` at specified `position` taking care of
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#24surrogatepairs">surrogate pairs</a> and
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#25combiningmarks">combining marks</a>.
 *
 * @function graphemeAt
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to extract from.
 * @param  {number} position The position to get the grapheme.
 * @return {string} Returns the grapheme at specified position.
 * @example
 * v.graphemeAt('\uD835\uDC00\uD835\uDC01', 0); // or '𝐀𝐁'
 * // => 'A'
 *
 * v.graphemeAt('cafe\u0301', 3); // or 'café'
 * // => 'é'
 */

function graphemeAt(subject, position) {
  var subjectString = coerceToString(subject);
  var positionNumber = coerceToNumber(position);
  var graphemeMatch;
  var graphemeMatchIndex = 0;
  positionNumber = nanDefault(positionNumber, 0);

  while ((graphemeMatch = REGEXP_UNICODE_CHARACTER.exec(subjectString)) !== null) {
    if (graphemeMatchIndex === positionNumber) {
      REGEXP_UNICODE_CHARACTER.lastIndex = 0;
      return graphemeMatch[0];
    }

    graphemeMatchIndex++;
  }

  return '';
}

/**
 * Extracts the last `length` characters from `subject`.
 *
 * @function last
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to extract from.
 * @param  {int}    [length=1]   The number of characters to extract.
 * @return {string}              Returns the last characters string.
 * @example
 * v.last('helicopter');
 * // => 'r'
 *
 * v.last('vehicle', 2);
 * // => 'le'
 *
 * v.last('car', 5);
 * // => 'car'
 */

function last(subject, length) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 1 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);

  if (subjectString.length <= lengthInt) {
    return subjectString;
  }

  return subjectString.substr(subjectString.length - lengthInt, lengthInt);
}

/**
 * Truncates `subject` to a new `length` and does not break the words. Guarantees that the truncated string is no longer
 * than `length`.
 *
 * @static
 * @function prune
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject=''] The string to prune.
 * @param  {int}    length       The length to prune the string.
 * @param  {string} [end='...']  The string to be added at the end.
 * @return {string}              Returns the pruned string.
 * @example
 * v.prune('Once upon a time', 7);
 * // => 'Once...'
 *
 * v.prune('Good day, Little Red Riding Hood', 16, ' (more)');
 * // => 'Good day (more)'
 *
 * v.prune('Once upon', 10);
 * // => 'Once upon'
 */

function prune(subject, length, end) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? subjectString.length : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var endString = coerceToString(end, '...');

  if (lengthInt >= subjectString.length) {
    return subjectString;
  }

  var pattern = REGEXP_EXTENDED_ASCII.test(subjectString) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  var truncatedLength = 0;
  subjectString.replace(pattern, function (word, offset) {
    var wordInsertLength = offset + word.length;

    if (wordInsertLength <= lengthInt - endString.length) {
      truncatedLength = wordInsertLength;
    }
  });
  return subjectString.substr(0, truncatedLength) + endString;
}

/**
 * Extracts from `subject` a string from `start` position up to `end` position. The character at `end` position is not
 * included.
 *
 * @function slice
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject='']         The string to extract from.
 * @param  {number} start                The position to start extraction. If negative use `subject.length + start`.
 * @param  {number} [end=subject.length] The position to end extraction. If negative use `subject.length + end`.
 * @return {string}                      Returns the extracted string.
 * @note Uses native `String.prototype.slice()`
 * @example
 * v.slice('miami', 1);
 * // => 'iami'
 *
 * v.slice('florida', -4);
 * // => 'rida'
 *
 * v.slice('florida', 1, 4);
 * // => "lor"
 */

function slice(subject, start, end) {
  return coerceToString(subject).slice(start, end);
}

/**
 * Extracts from `subject` a string from `start` position a number of `length` characters.
 *
 * @function substr
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject='']                 The string to extract from.
 * @param  {number} start                        The position to start extraction.
 * @param  {number} [length=subject.endOfString] The number of characters to extract. If omitted, extract to the end of `subject`.
 * @return {string}                              Returns the extracted string.
 * @note Uses native `String.prototype.substr()`
 * @example
 * v.substr('infinite loop', 9);
 * // => 'loop'
 *
 * v.substr('dreams', 2, 2);
 * // => 'ea'
 */

function substr(subject, start, length) {
  return coerceToString(subject).substr(start, length);
}

/**
 * Extracts from `subject` a string from `start` position up to `end` position. The character at `end` position is not
 * included.
 *
 * @function substring
 * @static
 * @since 1.0.0
 * @memberOf Chop
 * @param  {string} [subject='']         The string to extract from.
 * @param  {number} start                The position to start extraction.
 * @param  {number} [end=subject.length] The position to end extraction.
 * @return {string}                      Returns the extracted string.
 * @note Uses native `String.prototype.substring()`
 * @example
 * v.substring('beach', 1);
 * // => 'each'
 *
 * v.substring('ocean', 1, 3);
 * // => 'ea'
 */

function substring(subject, start, end) {
  return coerceToString(subject).substring(start, end);
}

/**
 * Counts the characters in `subject`.<br/>
 *
 * @function count
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param  {string} [subject=''] The string to count characters.
 * @return {number}              Returns the number of characters in `subject`.
 * @example
 * v.count('rain');
 * // => 4
 */

function count(subject) {
  return coerceToString(subject).length;
}

/**
 * Counts the graphemes in `subject` taking care of
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#24surrogatepairs">surrogate pairs</a> and
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#25combiningmarks">combining marks</a>.
 *
 * @function  countGraphemes
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param  {string} [subject=''] The string to count graphemes.
 * @return {number}              Returns the number of graphemes in `subject`.
 * @example
 * v.countGraphemes('cafe\u0301'); // or 'café'
 * // => 4
 *
 * v.countGraphemes('\uD835\uDC00\uD835\uDC01'); // or '𝐀𝐁'
 * // => 2
 *
 * v.countGraphemes('rain');
 * // => 4
 */

function countGrapheme(subject) {
  return coerceToString(subject).replace(REGEXP_COMBINING_MARKS, '*').replace(REGEXP_SURROGATE_PAIRS, '*').length;
}

/**
 * Counts the number of `substring` appearances in `subject`.
 *
 * @function countSubstrings
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param  {string} [subject=''] The string where to count.
 * @param  {string} substring    The substring to be counted.
 * @return {number}              Returns the number of `substring` appearances.
 * @example
 * v.countSubstrings('bad boys, bad boys whatcha gonna do?', 'boys');
 * // => 2
 *
 * v.countSubstrings('every dog has its day', 'cat');
 * // => 0
 */

function countSubstrings(subject, substring) {
  var subjectString = coerceToString(subject);
  var substringString = coerceToString(substring);
  var substringLength = substringString.length;
  var count = 0;
  var matchIndex = 0;

  if (subjectString === '' || substringString === '') {
    return count;
  }

  do {
    matchIndex = subjectString.indexOf(substringString, matchIndex);

    if (matchIndex !== -1) {
      count++;
      matchIndex += substringLength;
    }
  } while (matchIndex !== -1);

  return count;
}

var reduce = Array.prototype.reduce;
/**
 * Counts the characters in `subject` for which `predicate` returns truthy.
 *
 * @function  countWhere
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param  {string}   [subject=''] The string to count characters.
 * @param  {Function} predicate    The predicate function invoked on each character with parameters `(character, index, string)`.
 * @param  {Object}   [context]    The context to invoke the `predicate`.
 * @return {number}                Returns the number of characters for which `predicate` returns truthy.
 * @example
 * v.countWhere('hola!', v.isAlpha);
 * // => 4
 *
 * v.countWhere('2022', function(character, index, str) {
 *   return character === '2';
 * });
 * // => 3
 */

function countWhere(subject, predicate, context) {
  var subjectString = coerceToString(subject);

  if (subjectString === '' || typeof predicate !== 'function') {
    return 0;
  }

  var predicateWithContext = predicate.bind(context);
  return reduce.call(subjectString, function (countTruthy, character, index) {
    return predicateWithContext(character, index, subjectString) ? countTruthy + 1 : countTruthy;
  }, 0);
}

/**
 * Counts the number of words in `subject`.
 *
 * @function countWords
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param {string} [subject=''] The string to split into words.
 * @param {string|RegExp} [pattern] The pattern to watch words. If `pattern` is not RegExp, it is transformed to `new RegExp(pattern, flags)`.
 * @param {string} [flags=''] The regular expression flags. Applies when `pattern` is string type.
 * @return {number} Returns the number of words.
 * @example
 * v.countWords('gravity can cross dimensions');
 * // => 4
 *
 * v.countWords('GravityCanCrossDimensions');
 * // => 4
 *
 * v.countWords('Gravity - can cross dimensions!');
 * // => 4
 *
 * v.words('Earth gravity', /[^\s]+/g);
 * // => 2
 */

function countWords(subject, pattern, flags) {
  return words(subject, pattern, flags).length;
}

/**
 * The current index.
 *
 * @ignore
 * @name ReplacementIndex#index
 * @type {number}
 * @return {ReplacementIndex} ReplacementIndex instance.
 */

function ReplacementIndex() {
  this.index = 0;
}
/**
 * Increment the current index.
 *
 * @ignore
 * @return {undefined}
 */


ReplacementIndex.prototype.increment = function () {
  this.index++;
};
/**
 * Increment the current index by position.
 *
 * @ignore
 * @param {number} [position] The replacement position.
 * @return {undefined}
 */


ReplacementIndex.prototype.incrementOnEmptyPosition = function (position) {
  if (isNil(position)) {
    this.increment();
  }
};
/**
 * Get the replacement index by position.
 *
 * @ignore
 * @param {number} [position] The replacement position.
 * @return {number} The replacement index.
 */


ReplacementIndex.prototype.getIndexByPosition = function (position) {
  return isNil(position) ? this.index : position - 1;
};

// Type specifiers
var TYPE_INTEGER = 'i';
var TYPE_INTEGER_BINARY = 'b';
var TYPE_INTEGER_ASCII_CHARACTER = 'c';
var TYPE_INTEGER_DECIMAL = 'd';
var TYPE_INTEGER_OCTAL = 'o';
var TYPE_INTEGER_UNSIGNED_DECIMAL = 'u';
var TYPE_INTEGER_HEXADECIMAL = 'x';
var TYPE_INTEGER_HEXADECIMAL_UPPERCASE = 'X';
var TYPE_FLOAT_SCIENTIFIC = 'e';
var TYPE_FLOAT_SCIENTIFIC_UPPERCASE = 'E';
var TYPE_FLOAT = 'f';
var TYPE_FLOAT_SHORT = 'g';
var TYPE_FLOAT_SHORT_UPPERCASE = 'G';
var TYPE_STRING = 's'; // Simple literals
var LITERAL_SINGLE_QUOTE = "'";
var LITERAL_PLUS = '+';
var LITERAL_MINUS = '-';
var LITERAL_PERCENT_SPECIFIER = '%%'; // Radix constants to format numbers

var RADIX_BINARY = 2;
var RADIX_OCTAL = 8;
var RADIX_HEXADECIMAL = 16;

/**
 * Repeats the `subject` number of `times`.
 *
 * @function repeat
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to repeat.
 * @param {number} [times=1] The number of times to repeat.
 * @return {string} Returns the repeated string.
 * @example
 * v.repeat('w', 3);
 * // => 'www'
 *
 * v.repeat('world', 0);
 * // => ''
 */

function repeat(subject, times) {
  var subjectString = coerceToString(subject);
  var timesInt = isNil(times) ? 1 : clipNumber(toInteger(times), 0, MAX_SAFE_INTEGER);
  var repeatString = '';

  while (timesInt) {
    if (timesInt & 1) {
      repeatString += subjectString;
    }

    if (timesInt > 1) {
      subjectString += subjectString;
    }

    timesInt >>= 1;
  }

  return repeatString;
}

/**
 * Creates the padding string.
 *
 * @ignore
 * @param {string} padCharacters The characters to create padding string.
 * @param {number} length The padding string length.
 * @return {string} The padding string.
 */

function buildPadding(padCharacters, length) {
  var padStringRepeat = toInteger(length / padCharacters.length);
  var padStringRest = length % padCharacters.length;
  return repeat(padCharacters, padStringRepeat + padStringRest).substr(0, length);
}

/**
 * Pads `subject` from left to a new `length`.
 *
 * @function padLeft
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to pad.
 * @param {int} [length=0] The length to left pad the string. No changes are made if `length` is less than `subject.length`.
 * @param {string} [pad=' '] The string to be used for padding.
 * @return {string} Returns the left padded string.
 * @example
 * v.padLeft('dog', 5);
 * // => '  dog'
 *
 * v.padLeft('bird', 6, '-');
 * // => '--bird'
 *
 * v.padLeft('cat', 6, '-=');
 * // => '-=-cat'
 */

function padLeft(subject, length, pad) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 0 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var padString = coerceToString(pad, ' ');

  if (lengthInt <= subjectString.length) {
    return subjectString;
  }

  return buildPadding(padString, lengthInt - subjectString.length) + subjectString;
}

/**
 * Pads `subject` from right to a new `length`.
 *
 * @function padRight
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to pad.
 * @param {int} [length=0] The length to right pad the string. No changes are made if `length` is less than `subject.length`.
 * @param {string} [pad=' '] The string to be used for padding.
 * @return {string} Returns the right padded string.
 * @example
 * v.padRight('dog', 5);
 * // => 'dog  '
 *
 * v.padRight('bird', 6, '-');
 * // => 'bird--'
 *
 * v.padRight('cat', 6, '-=');
 * // => 'cat-=-'
 */

function padRight(subject, length, pad) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 0 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var padString = coerceToString(pad, ' ');

  if (lengthInt <= subjectString.length) {
    return subjectString;
  }

  return subjectString + buildPadding(padString, lengthInt - subjectString.length);
}

/**
 * Aligns and pads `subject` string.
 *
 * @ignore
 * @param {string} subject The subject string.
 * @param {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the aligned and padded string.
 */

function alignAndPad(subject, conversion) {
  var width = conversion.width;

  if (isNil(width) || subject.length >= width) {
    return subject;
  }

  var padType = conversion.alignmentSpecifier === LITERAL_MINUS ? padRight : padLeft;
  return padType(subject, width, conversion.getPaddingCharacter());
}

/**
 * Add sign to the formatted number.
 *
 * @ignore
 * @name addSignToFormattedNumber
 * @param  {number} replacementNumber The number to be replaced.
 * @param  {string} formattedReplacement The formatted version of number.
 * @param  {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the formatted number string with a sign.
 */

function addSignToFormattedNumber(replacementNumber, formattedReplacement, conversion) {
  if (conversion.signSpecifier === LITERAL_PLUS && replacementNumber >= 0) {
    formattedReplacement = LITERAL_PLUS + formattedReplacement;
  }

  return formattedReplacement;
}

/**
 * Formats a float type according to specifiers.
 *
 * @ignore
 * @param  {string} replacement The string to be formatted.
 * @param  {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the formatted string.
 */

function float(replacement, conversion) {
  var replacementNumber = parseFloat(replacement);
  var formattedReplacement;

  if (isNaN(replacementNumber)) {
    replacementNumber = 0;
  }

  var precision = coerceToNumber(conversion.precision, 6);

  switch (conversion.typeSpecifier) {
    case TYPE_FLOAT:
      formattedReplacement = replacementNumber.toFixed(precision);
      break;

    case TYPE_FLOAT_SCIENTIFIC:
      formattedReplacement = replacementNumber.toExponential(precision);
      break;

    case TYPE_FLOAT_SCIENTIFIC_UPPERCASE:
      formattedReplacement = replacementNumber.toExponential(precision).toUpperCase();
      break;

    case TYPE_FLOAT_SHORT:
    case TYPE_FLOAT_SHORT_UPPERCASE:
      formattedReplacement = formatFloatAsShort(replacementNumber, precision, conversion);
      break;
  }

  formattedReplacement = addSignToFormattedNumber(replacementNumber, formattedReplacement, conversion);
  return coerceToString(formattedReplacement);
}
/**
 * Formats the short float.
 *
 * @ignore
 * @param  {number} replacementNumber The number to format.
 * @param  {number} precision The precision to format the float.
 * @param  {ConversionSpecification} conversion The conversion specification object.
 * @return {string}  Returns the formatted short float.
 */

function formatFloatAsShort(replacementNumber, precision, conversion) {
  if (replacementNumber === 0) {
    return '0';
  }

  var nonZeroPrecision = precision === 0 ? 1 : precision;
  var formattedReplacement = replacementNumber.toPrecision(nonZeroPrecision).replace(REGEXP_TRAILING_ZEROS, '');

  if (conversion.typeSpecifier === TYPE_FLOAT_SHORT_UPPERCASE) {
    formattedReplacement = formattedReplacement.toUpperCase();
  }

  return formattedReplacement;
}

/**
 * Formats an integer type according to specifiers.
 *
 * @ignore
 * @param  {string} replacement The string to be formatted.
 * @param  {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the formatted string.
 */

function integerBase(replacement, conversion) {
  var integer = parseInt(replacement);

  if (isNaN(integer)) {
    integer = 0;
  }

  integer = integer >>> 0;

  switch (conversion.typeSpecifier) {
    case TYPE_INTEGER_ASCII_CHARACTER:
      integer = String.fromCharCode(integer);
      break;

    case TYPE_INTEGER_BINARY:
      integer = integer.toString(RADIX_BINARY);
      break;

    case TYPE_INTEGER_OCTAL:
      integer = integer.toString(RADIX_OCTAL);
      break;

    case TYPE_INTEGER_HEXADECIMAL:
      integer = integer.toString(RADIX_HEXADECIMAL);
      break;

    case TYPE_INTEGER_HEXADECIMAL_UPPERCASE:
      integer = integer.toString(RADIX_HEXADECIMAL).toUpperCase();
      break;
  }

  return coerceToString(integer);
}

/**
 * Formats a decimal integer type according to specifiers.
 *
 * @ignore
 * @param  {string} replacement The string to be formatted.
 * @param  {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the formatted string.
 */

function integerDecimal(replacement, conversion) {
  var integer = parseInt(replacement);

  if (isNaN(integer)) {
    integer = 0;
  }

  return addSignToFormattedNumber(integer, toString(integer), conversion);
}

/**
 * Formats a string type according to specifiers.
 *
 * @ignore
 * @param {string} replacement The string to be formatted.
 * @param {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the formatted string.
 */

function stringFormat(replacement, conversion) {
  var formattedReplacement = replacement;
  var precision = conversion.precision;

  if (!isNil(precision) && formattedReplacement.length > precision) {
    formattedReplacement = truncate(formattedReplacement, precision, '');
  }

  return formattedReplacement;
}

/**
 * Returns the computed string based on format specifiers.
 *
 * @ignore
 * @name computeReplacement
 * @param {string} replacement The replacement value.
 * @param {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the computed string.
 */

function compute(replacement, conversion) {
  var formatFunction;

  switch (conversion.typeSpecifier) {
    case TYPE_STRING:
      formatFunction = stringFormat;
      break;

    case TYPE_INTEGER_DECIMAL:
    case TYPE_INTEGER:
      formatFunction = integerDecimal;
      break;

    case TYPE_INTEGER_ASCII_CHARACTER:
    case TYPE_INTEGER_BINARY:
    case TYPE_INTEGER_OCTAL:
    case TYPE_INTEGER_HEXADECIMAL:
    case TYPE_INTEGER_HEXADECIMAL_UPPERCASE:
    case TYPE_INTEGER_UNSIGNED_DECIMAL:
      formatFunction = integerBase;
      break;

    case TYPE_FLOAT:
    case TYPE_FLOAT_SCIENTIFIC:
    case TYPE_FLOAT_SCIENTIFIC_UPPERCASE:
    case TYPE_FLOAT_SHORT:
    case TYPE_FLOAT_SHORT_UPPERCASE:
      formatFunction = float;
      break;
  }

  var formattedString = formatFunction(replacement, conversion);
  return alignAndPad(formattedString, conversion);
}

/**
 * Construct the new conversion specification object.
 *
 * @ignore
 * @param {Object} properties An object with properties to initialize.
 * @return {ConversionSpecification} ConversionSpecification instance.
 */

function ConversionSpecification(properties) {
  /**
   * The percent characters from conversion specification.
   *
   * @ignore
   * @name ConversionSpecification#percent
   * @type {string}
   */
  this.percent = properties.percent;
  /**
   *  The sign specifier to force a sign to be used on a number.
   *
   * @ignore
   * @name ConversionSpecification#signSpecifier
   * @type {string}
   */

  this.signSpecifier = properties.signSpecifier;
  /**
   * The padding specifier that says what padding character will be used.
   *
   * @ignore
   * @name ConversionSpecification#paddingSpecifier
   * @type {string}
   */

  this.paddingSpecifier = properties.paddingSpecifier;
  /**
   * The alignment specifier that says if the result should be left-justified or right-justified.
   *
   * @ignore
   * @name ConversionSpecification#alignmentSpecifier
   * @type {string}
   */

  this.alignmentSpecifier = properties.alignmentSpecifier;
  /**
   * The width specifier how many characters this conversion should result in.
   *
   * @ignore
   * @name ConversionSpecification#width
   * @type {number}
   */

  this.width = properties.width;
  /**
   * The precision specifier says how many decimal digits should be displayed for floating-point numbers.
   *
   * @ignore
   * @name ConversionSpecification#precision
   * @type {number}
   */

  this.precision = properties.precision;
  /**
   * The type specifier says what type the argument data should be treated as.
   *
   * @ignore
   * @name ConversionSpecification#typeSpecifier
   * @type {string}
   */

  this.typeSpecifier = properties.typeSpecifier;
}
/**
 * Check if the conversion specification is a percent literal "%%".
 *
 * @ignore
 * @return {boolean} Returns true if the conversion is a percent literal, false otherwise.
 */


ConversionSpecification.prototype.isPercentLiteral = function () {
  return LITERAL_PERCENT_SPECIFIER === this.percent;
};
/**
 * Get the padding character from padding specifier.
 *
 * @ignore
 * @returns {string} Returns the padding character.
 */


ConversionSpecification.prototype.getPaddingCharacter = function () {
  var paddingCharacter = nilDefault(this.paddingSpecifier, ' ');

  if (paddingCharacter.length === 2 && paddingCharacter[0] === LITERAL_SINGLE_QUOTE) {
    paddingCharacter = paddingCharacter[1];
  }

  return paddingCharacter;
};

/**
 * Validates the specifier type and replacement position.
 *
 * @ignore
 * @throws {Error} Throws an exception on insufficient arguments or unknown specifier.
 * @param  {number} index The index of the matched specifier.
 * @param  {number} replacementsLength The number of replacements.
 * @param  {ConversionSpecification} conversion The conversion specification object.
 * @return {undefined}
 */

function validate(index, replacementsLength, conversion) {
  if (isNil(conversion.typeSpecifier)) {
    throw new Error('sprintf(): Unknown type specifier');
  }

  if (index > replacementsLength - 1) {
    throw new Error('sprintf(): Too few arguments');
  }

  if (index < 0) {
    throw new Error('sprintf(): Argument number must be greater than zero');
  }
}

/**
 * Return the replacement for regular expression match of the conversion specification.
 *
 * @ignore
 * @name matchReplacement
 * @param {ReplacementIndex} replacementIndex The replacement index object.
 * @param {string[]} replacements The array of replacements.
 * @param {string} conversionSpecification The conversion specification.
 * @param {string} percent The percent characters from conversion specification.
 * @param {string} position The position to insert the replacement.
 * @param {string} signSpecifier The sign specifier to force a sign to be used on a number.
 * @param {string} paddingSpecifier The padding specifier that says what padding character will be used.
 * @param {string} alignmentSpecifier The alignment specifier that says if the result should be left-justified or right-justified.
 * @param {string} widthSpecifier The width specifier how many characters this conversion should result in.
 * @param {string} precisionSpecifier The precision specifier says how many decimal digits should be displayed for floating-point numbers.
 * @param {string} typeSpecifier The type specifier says what type the argument data should be treated as.
 * @return {string} Returns the computed replacement.
 */

function match(replacementIndex, replacements, conversionSpecification, percent, position, signSpecifier, paddingSpecifier, alignmentSpecifier, widthSpecifier, precisionSpecifier, typeSpecifier) {
  var conversion = new ConversionSpecification({
    percent: percent,
    signSpecifier: signSpecifier,
    paddingSpecifier: paddingSpecifier,
    alignmentSpecifier: alignmentSpecifier,
    width: coerceToNumber(widthSpecifier, null),
    precision: coerceToNumber(precisionSpecifier, null),
    typeSpecifier: typeSpecifier
  });

  if (conversion.isPercentLiteral()) {
    return conversionSpecification.slice(1);
  }

  var actualReplacementIndex = replacementIndex.getIndexByPosition(position);
  replacementIndex.incrementOnEmptyPosition(position);
  validate(actualReplacementIndex, replacements.length, conversion);
  return compute(replacements[actualReplacementIndex], conversion);
}

/**
 * Produces a string according to `format`.
 *
 * <div id="sprintf-format" class="smaller">
 * `format` string is composed of zero or more directives: ordinary characters (not <code>%</code>), which are  copied  unchanged
 * to  the  output string and <i>conversion specifications</i>, each of which results in fetching zero or more subsequent
 * arguments. <br/> <br/>
 *
 * Each <b>conversion specification</b> is introduced by the character <code>%</code>, and ends with a <b>conversion
 * specifier</b>. In between there may be (in this order) zero or more <b>flags</b>, an optional <b>minimum field width</b>
 * and an optional <b>precision</b>.<br/>
 * The syntax is: <b>ConversionSpecification</b> = <b>"%"</b> { <b>Flags</b> }
 * [ <b>MinimumFieldWidth</b> ] [ <b>Precision</b> ] <b>ConversionSpecifier</b>, where curly braces { } denote repetition
 * and square brackets [ ] optionality. <br/><br/>
 *
 * By default, the arguments are used in the given order.<br/>
 * For argument numbering and swapping, `%m$` (where `m` is a number indicating the argument order)
 * is used instead of `%` to specify explicitly which argument is taken. For instance `%1$s` fetches the 1st argument,
 * `%2$s` the 2nd and so on, no matter what position  the conversion specification has in `format`.
 * <br/><br/>
 *
 * <b>The flags</b><br/>
 * The character <code>%</code> is followed by zero or more of the following flags:<br/>
 * <table class="light-params">
 *   <tr>
 *     <td><code>+</code></td>
 *     <td>
 *       A  sign (<code>+</code> or <code>-</code>) should always be placed before a number produced by a
 *       signed conversion. By default a sign is used only for negative numbers.
 *     </td>
 *   </tr>
 *   <tr>
 *     <td><code>0</code></td>
 *     <td>The value should be zero padded.</td>
 *   </tr>
 *   <tr>
 *     <td><code>&blank;</code></td>
 *     <td>(a space) The value should be space padded.</td>
 *   </tr>
 *   <tr>
 *    <td><code>'</code></td>
 *    <td>Indicates alternate padding character, specified by prefixing it with a single quote <code>'</code>.</td>
 *   </tr>
 *   <tr>
 *     <td><code>-</code></td>
 *     <td>The converted value is to be left adjusted on the field boundary (the default is right justification).</td>
 *   </tr>
 * </table>
 *
 * <b>The minimum field width</b><br/>
 * An  optional decimal digit string (with nonzero first digit) specifying a minimum field width.  If the converted
 * value has fewer characters than the field width, it will be padded with spaces on the left (or right, if the
 * left-adjustment flag has been given).<br/><br/>
 *
 * <b>The precision</b><br/>
 * An optional precision, in the form of a period `.` followed by an optional decimal digit string.<br/>
 * This gives the number of digits to appear after the radix character for `e`, `E`, `f` and `F` conversions, the
 * maximum number of significant digits for `g` and `G` conversions or the maximum number of characters to be printed
 * from a string for `s` conversion.<br/><br/>
 *
 * <b>The conversion specifier</b><br/>
 * A specifier that mentions what type the argument should be treated as:
 *
 * <table class="light-params">
 *   <tr>
 *     <td>`s`</td>
 *     <td>The string argument is treated as and presented as a string.</td>
 *   </tr>
 *   <tr>
 *     <td>`d` `i`</td>
 *     <td>The integer argument is converted to signed decimal notation.</td>
 *   </tr>
 *   <tr>
 *     <td>`b`</td>
 *     <td>The unsigned integer argument is converted to unsigned binary.</td>
 *   </tr>
 *   <tr>
 *     <td>`c`</td>
 *     <td>The unsigned integer argument is converted to an ASCII character with that number.</td>
 *   </tr>
 *   <tr>
 *     <td>`o`</td>
 *     <td>The unsigned integer argument is converted to unsigned octal.</td>
 *   </tr>
 *   <tr>
 *     <td>`u`</td>
 *     <td>The unsigned integer argument is converted to unsigned decimal.</td>
 *   </tr>
 *   <tr>
 *     <td>`x` `X`</td>
 *     <td>The unsigned integer argument is converted to unsigned hexadecimal. The letters `abcdef` are used for `x`
 *     conversions; the letters `ABCDEF` are used for `X` conversions.</td>
 *   </tr>
 *   <tr>
 *     <td>`f`</td>
 *     <td>
 *      The float argument is rounded and converted to decimal notation in the style `[-]ddd.ddd`, where the number of
 *      digits after the decimal-point character is equal to the precision specification. If the precision is missing,
 *      it is taken as 6; if the precision is explicitly zero, no decimal-point character appears.
 *      If a decimal point appears, at least one digit appears before it.
 *     </td>
 *   </tr>
 *   <tr>
 *     <td>`e` `E`</td>
 *     <td>
 *       The float argument is rounded and converted in the style `[-]d.ddde±dd`, where there is one digit
 *       before the decimal-point character and the number of digits after it is equal to the precision. If
 *       the precision is missing, it is taken as `6`; if the precision is zero, no decimal-point character
 *       appears. An `E` conversion uses the letter `E` (rather than `e`) to introduce the exponent.
 *     </td>
 *   </tr>
 *   <tr>
 *     <td>`g` `G`</td>
 *     <td>
 *       The float argument is converted in style `f` or `e` (or `F` or `E` for `G` conversions). The precision specifies
 *       the number of significant digits. If the precision is missing, `6` digits are given; if the
 *       precision is zero, it is treated as `1`. Style `e` is used if the exponent from its conversion is less
 *       than `-6` or greater than or equal to the precision. Trailing zeros are removed from the fractional
 *       part of the result; a decimal point appears only if it is followed by at least one digit.
 *     </td>
 *   </tr>
 *   <tr>
 *     <td>`%`</td>
 *     <td>A literal `%` is written. No argument is converted. The complete conversion specification is `%%`.</td>
 *   </tr>
 *
 * </table>
 * </div>
 *
 * @function sprintf
 * @static
 * @since 1.0.0
 * @memberOf Format
 * @param  {string} [format=''] The format string.
 * @param  {...*}               replacements The replacements to produce the string.
 * @return {string}             Returns the produced string.
 * @example
 * v.sprintf('%s, %s!', 'Hello', 'World');
 * // => 'Hello World!'
 *
 * v.sprintf('%s costs $%d', 'coffee', 2);
 * // => 'coffee costs $2'
 *
 * v.sprintf('%1$s %2$s %1$s %2$s, watcha gonna %3$s', 'bad', 'boys', 'do')
 * // => 'bad boys bad boys, watcha gonna do'
 *
 * v.sprintf('% 6s', 'bird');
 * // => '  bird'
 *
 * v.sprintf('% -6s', 'crab');
 * // => 'crab  '
 *
 * v.sprintf("%'*5s", 'cat');
 * // => '**cat'
 *
 * v.sprintf("%'*-6s", 'duck');
 * // => 'duck**'
 *
 * v.sprintf('%d %i %+d', 15, -2, 25);
 * // => '15 -2 +25'
 *
 * v.sprintf("%06d", 15);
 * // => '000015'
 *
 * v.sprintf('0b%b 0o%o 0x%X', 12, 9, 155);
 * // => '0b1100 0o11 0x9B'
 *
 * v.sprintf('%.2f', 10.469);
 * // => '10.47'
 *
 * v.sprintf('%.2e %g', 100.5, 0.455);
 * // => '1.01e+2 0.455'
 *
 */

function sprintf(format) {
  var formatString = coerceToString(format);

  if (formatString === '') {
    return formatString;
  }

  for (var _len = arguments.length, replacements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    replacements[_key - 1] = arguments[_key];
  }

  var boundReplacementMatch = match.bind(undefined, new ReplacementIndex(), replacements);
  return formatString.replace(REGEXP_CONVERSION_SPECIFICATION, boundReplacementMatch);
}

/**
 * Produces a string according to `format`. Works exactly like <a href="#sprintf"><code>sprintf()</code></a>,
 * with the only difference that accepts the formatting arguments in an array `values`.<br/>
 * See <a href="#sprintf-format">here</a> `format` string specifications.
 *
 * @function vprintf
 * @static
 * @since 1.0.0
 * @memberOf Format
 * @param  {string} format='']  The format string.
 * @param  {Array} replacements The array of replacements to produce the string.
 * @return {string}             Returns the produced string.
 * @example
 * v.vprintf('%s', ['Welcome'])
 * // => 'Welcome'
 *
 * v.vprintf('%s has %d apples', ['Alexandra', 3]);
 * // => 'Alexandra has 3 apples'
 */

function vprintf(format, replacements) {
  return sprintf.apply(void 0, [format].concat(_toConsumableArray(nilDefault(replacements, []))));
}

var escapeCharactersMap = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
/**
 * Return the escaped version of `character`.
 *
 * @ignore
 * @param  {string} character The character to be escape.
 * @return {string}           The escaped version of character.
 */

function replaceSpecialCharacter(character) {
  return escapeCharactersMap[character];
}
/**
 * Escapes HTML special characters  <code>< > & ' " `</code> in <code>subject</code>.
 *
 * @function escapeHtml
 * @static
 * @since 1.0.0
 * @memberOf Escape
 * @param {string} [subject=''] The string to escape.
 * @return {string} Returns the escaped string.
 * @example
 * v.escapeHtml('<p>wonderful world</p>');
 * // => '&lt;p&gt;wonderful world&lt;/p&gt;'
 */


function escapeHtml(subject) {
  return coerceToString(subject).replace(REGEXP_HTML_SPECIAL_CHARACTERS, replaceSpecialCharacter);
}

/**
 * Escapes the regular expression special characters `- [ ] / { } ( ) * + ? . \ ^ $ |` in `subject`.
 *
 * @function escapeRegExp
 * @static
 * @since 1.0.0
 * @memberOf Escape
 * @param {string} [subject=''] The string to escape.
 * @return {string} Returns the escaped string.
 * @example
 * v.escapeRegExp('(hours)[minutes]{seconds}');
 * // => '\(hours\)\[minutes\]\{seconds\}'
 */

function escapeRegExp(subject) {
  return coerceToString(subject).replace(REGEXP_SPECIAL_CHARACTERS, '\\$&');
}

var unescapeCharactersMap = {
  '<': /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
  '>': /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
  '&': /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
  '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
  "'": /(&#x0*27;)|(&#0*39;)/gi,
  '`': /(&#x0*60;)|(&#0*96;)/gi
};
var characters = Object.keys(unescapeCharactersMap);
/**
 * Replaces the HTML entities with corresponding characters.
 *
 * @ignore
 * @param  {string} string The accumulator string.
 * @param  {string} key    The character.
 * @return {string}        The string with replaced HTML entity
 */

function reduceUnescapedString(string, key) {
  return string.replace(unescapeCharactersMap[key], key);
}
/**
 * Unescapes HTML special characters from <code>&amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;#x27; &amp;#x60;</code>
 * to corresponding <code>< > & ' " `</code> in <code>subject</code>.
 *
 * @function unescapeHtml
 * @static
 * @since 1.0.0
 * @memberOf Escape
 * @param  {string} [subject=''] The string to unescape.
 * @return {string}              Returns the unescaped string.
 * @example
 * v.unescapeHtml('&lt;p&gt;wonderful world&lt;/p&gt;');
 * // => '<p>wonderful world</p>'
 */


function unescapeHtml(subject) {
  var subjectString = coerceToString(subject);
  return characters.reduce(reduceUnescapedString, subjectString);
}

/**
 * Returns the first occurrence index of `search` in `subject`.
 *
 * @function indexOf
 * @static
 * @since 1.0.0
 * @memberOf Index
 * @param {string} [subject=''] The string where to search.
 * @param {string} search The string to search.
 * @param {number} [fromIndex=0] The index to start searching.
 * @return {number} Returns the first occurrence index or `-1` if not found.
 * @example
 * v.indexOf('morning', 'n');
 * // => 3
 *
 * v.indexOf('evening', 'o');
 * // => -1
 */

function indexOf(subject, search, fromIndex) {
  var subjectString = coerceToString(subject);
  return subjectString.indexOf(search, fromIndex);
}

/**
 * Returns the last occurrence index of `search` in `subject`.
 *
 * @function lastIndexOf
 * @static
 * @since 1.0.0
 * @memberOf Index
 * @param {string} [subject=''] The string where to search.
 * @param {string} search The string to search.
 * @param {number} [fromIndex=subject.length - 1] The index to start searching backward in the string.
 * @return {number} Returns the last occurrence index or `-1` if not found.
 * @example
 * v.lastIndexOf('morning', 'n');
 * // => 5
 *
 * v.lastIndexOf('evening', 'o');
 * // => -1
 */

function lastIndexOf(subject, search, fromIndex) {
  var subjectString = coerceToString(subject);
  return subjectString.lastIndexOf(search, fromIndex);
}

/**
 * Returns the first index of a `pattern` match in `subject`.
 *
 * @function search
 * @static
 * @since 1.0.0
 * @memberOf Index
 * @param {string} [subject=''] The string where to search.
 * @param {string|RegExp} pattern The pattern to match. If `pattern` is not RegExp, it is transformed to `new RegExp(pattern)`.
 * @param {number} [fromIndex=0] The index to start searching.
 * @return {number} Returns the first match index or `-1` if not found.
 * @example
 * v.search('morning', /rn/);
 * // => 2
 *
 * v.search('evening', '/\d/');
 * // => -1
 */

function search(subject, pattern, fromIndex) {
  var subjectString = coerceToString(subject);
  var fromIndexNumber = isNil(fromIndex) ? 0 : clipNumber(toInteger(fromIndex), 0, subjectString.length);
  var matchIndex = subjectString.substr(fromIndexNumber).search(pattern);

  if (matchIndex !== -1 && !isNaN(fromIndexNumber)) {
    matchIndex += fromIndexNumber;
  }

  return matchIndex;
}

/**
 * Inserts into `subject` a string `toInsert` at specified `position`.
 *
 * @function insert
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string where to insert.
 * @param {string} [toInsert=''] The string to be inserted.
 * @param {number} [position=0] The position to insert.
 * @return {string} Returns the string after insertion.
 * @example
 * v.insert('ct', 'a', 1);
 * // => 'cat'
 *
 * v.insert('sunny', ' day', 5);
 * // => 'sunny day'
 */

function insert(subject, toInsert, position) {
  var subjectString = coerceToString(subject);
  var toInsertString = coerceToString(toInsert);
  var positionNumber = coerceToNumber(position);

  if (positionNumber < 0 || positionNumber > subjectString.length || toInsertString === '') {
    return subjectString;
  }

  return subjectString.slice(0, positionNumber) + toInsertString + subjectString.slice(positionNumber);
}

/**
 * Generated diacritics map. See bellow the base code.
 * @ignore
 * @type Object
 */
var diacritics = {
  '3': '\u039e\u03be',
  '8': '\u0398\u03b8',
  A: '\x41\xc0\xc1\xc2\xc3\xc4\xc5\u0100\u0102\u0104\u01cd\u01de\u01e0\u01fa\u0200\u0202\u0226\u023a\u0386\u0391\u0410',
  B: '\x42\u0181\u0182\u0243\u0392\u0411',
  C: '\x43\xc7\u0106\u0108\u010a\u010c\u0187\u023b\u0426',
  D: '\x44\u010e\u0110\u0189\u018a\u018b\xd0\u0394\u0414',
  E: '\x45\xc8\xc9\xca\xcb\u0112\u0114\u0116\u0118\u011a\u018e\u0190\u0204\u0206\u0228\u0388\u0395\u0415\u042d',
  F: '\x46\u0191\u03a6\u0424',
  G: '\x47\u011c\u011e\u0120\u0122\u0193\u01e4\u01e6\u01f4\u0393\u0413\u0490',
  H: '\x48\u0124\u0126\u021e\u0389\u0397\u0425',
  I: '\x49\xcc\xcd\xce\xcf\u0128\u012a\u012c\u012e\u0130\u0197\u01cf\u0208\u020a\u038a\u0399\u03aa\u0406\u0418',
  J: '\x4a\u0134\u0248\u0419',
  K: '\x4b\u0136\u0198\u01e8\u039a\u041a',
  L: '\x4c\u0139\u013b\u013d\u013f\u0141\u023d\u039b\u041b',
  M: '\x4d\u019c\u039c\u041c',
  N: '\x4e\xd1\u0143\u0145\u0147\u019d\u01f8\u0220\u039d\u041d',
  O: '\x4f\xd2\xd3\xd4\xd5\xd6\xd8\u014c\u014e\u0150\u0186\u019f\u01a0\u01d1\u01ea\u01ec\u01fe\u020c\u020e\u022a\u022c\u022e\u0230\u038c\u039f\u041e',
  P: '\x50\u01a4\u03a0\u041f',
  Q: '\x51\u024a',
  R: '\x52\u0154\u0156\u0158\u0210\u0212\u024c\u03a1\u0420',
  S: '\x53\u015a\u015c\u015e\u0160\u0218\u03a3\u0421',
  T: '\x54\u0162\u0164\u0166\u01ac\u01ae\u021a\u023e\u03a4\u0422',
  U: '\x55\xd9\xda\xdb\xdc\u0168\u016a\u016c\u016e\u0170\u0172\u01af\u01d3\u01d5\u01d7\u01d9\u01db\u0214\u0216\u0244\u0423\u042a',
  V: '\x56\u01b2\u0245\u0412',
  W: '\x57\u0174\u038f\u03a9',
  X: '\x58\u03a7',
  Y: '\x59\xdd\u0176\u0178\u01b3\u0232\u024e\u038e\u03a5\u03ab\u042b',
  Z: '\x5a\u0179\u017b\u017d\u01b5\u0224\u0396\u0417',
  a: '\x61\xe0\xe1\xe2\xe3\xe4\xe5\u0101\u0103\u0105\u01ce\u01df\u01e1\u01fb\u0201\u0203\u0227\u0250\u03ac\u03b1\u0430',
  b: '\x62\u0180\u0183\u0253\u03b2\u0431',
  c: '\x63\xe7\u0107\u0109\u010b\u010d\u0188\u023c\u0446',
  d: '\x64\u010f\u0111\u018c\u0256\u0257\xf0\u03b4\u0434',
  e: '\x65\xe8\xe9\xea\xeb\u0113\u0115\u0117\u0119\u011b\u01dd\u0205\u0207\u0229\u0247\u025b\u03ad\u03b5\u0435\u044d',
  f: '\x66\u0192\u03c6\u0444',
  g: '\x67\u011d\u011f\u0121\u0123\u01e5\u01e7\u01f5\u0260\u03b3\u0433\u0491',
  h: '\x68\u0125\u0127\u021f\u0265\u03ae\u03b7\u0445',
  i: '\x69\xec\xed\xee\xef\u0129\u012b\u012d\u012f\u0131\u01d0\u0209\u020b\u0268\u0390\u03af\u03b9\u03ca\u0438\u0456',
  j: '\x6a\u0135\u01f0\u0249\u0439',
  k: '\x6b\u0137\u0199\u01e9\u03ba\u043a',
  l: '\x6c\u013a\u013c\u013e\u0140\u0142\u017f\u019a\u026b\u03bb\u043b',
  m: '\x6d\u026f\u0271\u03bc\u043c',
  n: '\x6e\xf1\u0144\u0146\u0148\u0149\u019e\u01f9\u0272\u03bd\u043d',
  o: '\x6f\xf2\xf3\xf4\xf5\xf6\xf8\u014d\u014f\u0151\u01a1\u01d2\u01eb\u01ed\u01ff\u020d\u020f\u022b\u022d\u022f\u0231\u0254\u0275\u03bf\u03cc\u043e',
  p: '\x70\u01a5\u03c0\u043f',
  q: '\x71\u024b',
  r: '\x72\u0155\u0157\u0159\u0211\u0213\u024d\u027d\u03c1\u0440',
  s: '\x73\xdf\u015b\u015d\u015f\u0161\u0219\u023f\u03c2\u03c3\u0441',
  t: '\x74\u0163\u0165\u0167\u01ad\u021b\u0288\u03c4\u0442',
  u: '\x75\xf9\xfa\xfb\xfc\u0169\u016b\u016d\u016f\u0171\u0173\u01b0\u01d4\u01d6\u01d8\u01da\u01dc\u0215\u0217\u0289\u0443\u044a',
  v: '\x76\u028b\u028c\u0432',
  w: '\x77\u0175\u03c9\u03ce',
  x: '\x78\u03c7',
  y: '\x79\xfd\xff\u0177\u01b4\u0233\u024f\u03b0\u03c5\u03cb\u03cd\u044b',
  z: '\x7a\u017a\u017c\u017e\u01b6\u0225\u0240\u03b6\u0437',
  OE: '\x8c\u0152',
  oe: '\x9c\u0153',
  AE: '\xc6\u01e2\u01fc',
  ae: '\xe6\u01e3\u01fd',
  hv: '\u0195',
  OI: '\u01a2',
  oi: '\u01a3',
  DZ: '\u01c4\u01f1',
  Dz: '\u01c5\u01f2',
  dz: '\u01c6\u01f3',
  LJ: '\u01c7',
  Lj: '\u01c8',
  lj: '\u01c9',
  NJ: '\u01ca',
  Nj: '\u01cb',
  nj: '\u01cc',
  OU: '\u0222',
  ou: '\u0223',
  TH: '\xde',
  th: '\xfe',
  PS: '\u03a8',
  ps: '\u03c8',
  Yo: '\u0401',
  Ye: '\u0404',
  Yi: '\u0407',
  Zh: '\u0416',
  Ch: '\u0427',
  Sh: '\u0428\u0429',
  '': '\u042a\u042c\u044c',
  Yu: '\u042e',
  Ya: '\u042f',
  zh: '\u0436',
  ch: '\u0447',
  sh: '\u0448\u0449',
  yu: '\u044e',
  ya: '\u044f',
  yo: '\u0451',
  ye: '\u0454',
  yi: '\u0457'
};
var diacriticsMap = null;
/**
 * Creates a map of the diacritics.
 *
 * @ignore
 * @returns {Object} Returns the diacritics map.
 */

function getDiacriticsMap() {
  if (diacriticsMap !== null) {
    return diacriticsMap;
  }

  diacriticsMap = {};
  Object.keys(diacritics).forEach(function (key) {
    var characters = diacritics[key];

    for (var index = 0; index < characters.length; index++) {
      var character = characters[index];
      diacriticsMap[character] = key;
    }
  });
  return diacriticsMap;
}
/**
 * Get the latin character from character with diacritics.
 *
 * @ignore
 * @param   {string} character The character with diacritics.
 * @returns {string}           Returns the character without diacritics.
 */


function getLatinCharacter(character) {
  var characterWithoutDiacritic = getDiacriticsMap()[character];
  return characterWithoutDiacritic ? characterWithoutDiacritic : character;
}

/**
 * Returns the `cleanCharacter` from combining marks regular expression match.
 *
 * @ignore
 * @param {string} character The character with combining marks
 * @param {string} cleanCharacter The character without combining marks.
 * @return {string} The character without combining marks.
 */

function removeCombiningMarks(character, cleanCharacter) {
  return cleanCharacter;
}
/**
 * Latinises the `subject` by removing diacritic characters.
 *
 * @function latinise
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to latinise.
 * @return {string} Returns the latinised string.
 * @example
 * v.latinise('cafe\u0301'); // or 'café'
 * // => 'cafe'
 *
 * v.latinise('août décembre');
 * // => 'aout decembre'
 *
 * v.latinise('как прекрасен этот мир');
 * // => 'kak prekrasen etot mir'
 */


function latinise(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  return subjectString.replace(REGEXP_NON_LATIN, getLatinCharacter).replace(REGEXP_COMBINING_MARKS, removeCombiningMarks);
}

/**
 * Pads `subject` to a new `length`.
 *
 * @function pad
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to pad.
 * @param {int} [length=0] The length to pad the string. No changes are made if `length` is less than `subject.length`.
 * @param {string} [pad=' '] The string to be used for padding.
 * @return {string} Returns the padded string.
 * @example
 * v.pad('dog', 5);
 * // => ' dog '
 *
 * v.pad('bird', 6, '-');
 * // => '-bird-'
 *
 * v.pad('cat', 6, '-=');
 * // => '-cat-='
 */

function pad(subject, length, pad) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 0 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var padString = coerceToString(pad, ' ');

  if (lengthInt <= subjectString.length) {
    return subjectString;
  }

  var paddingLength = lengthInt - subjectString.length;
  var paddingSideLength = toInteger(paddingLength / 2);
  var paddingSideRemainingLength = paddingLength % 2;
  return buildPadding(padString, paddingSideLength) + subjectString + buildPadding(padString, paddingSideLength + paddingSideRemainingLength);
}

/**
 * Replaces the matches of `search` with `replace`. <br/>
 *
 * @function replace
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to verify.
 * @param {string|RegExp} search The search pattern to replace. If `search` is a string,
 * a simple string match is evaluated and only the first occurrence replaced.
 * @param {string|Function} replace The string or function which invocation result replaces `search` match.
 * @return {string} Returns the replacement result.
 * @example
 * v.replace('swan', 'wa', 'u');
 * // => 'sun'
 *
 * v.replace('domestic duck', /domestic\s/, '');
 * // => 'duck'
 *
 * v.replace('nice duck', /(nice)(duck)/, function(match, nice, duck) {
 *   return 'the ' + duck + ' is ' + nice;
 * });
 * // => 'the duck is nice'
 */

function replace(subject, search, replace) {
  var subjectString = coerceToString(subject);
  return subjectString.replace(search, replace);
}

/**
 * Replaces all occurrences of `search` with `replace`. <br/>
 *
 * @function replaceAll
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to verify.
 * @param {string|RegExp} search The search pattern to replace. If `search` is a string, a simple string match is evaluated.
 * All matches are replaced.
 * @param {string|Function} replace The string or function which invocation result replaces all `search` matches.
 * @return {string} Returns the replacement result.
 * @example
 * v.replaceAll('good morning', 'o', '*');
 * // => 'g**d m*rning'
 * v.replaceAll('evening', /n/g, 's');
 * // => 'evesisg'
 *
 */

function replaceAll(subject, search, replace) {
  var subjectString = coerceToString(subject);

  if (search instanceof RegExp) {
    if (search.flags.indexOf('g') === -1) {
      throw new TypeError('search argument is a non-global regular expression');
    }

    return subjectString.replace(search, replace);
  }

  var searchString = coerceToString(search);
  var isFunctionalReplace = typeof replace === 'function';

  if (!isFunctionalReplace) {
    replace = coerceToString(replace);
  }

  var searchLength = searchString.length;

  if (searchLength === 0) {
    return replaceAll(subject, /(?:)/g, replace);
  }

  var advanceBy = searchLength > 1 ? searchLength : 1;
  var matchPositions = [];
  var position = subjectString.indexOf(searchString, 0);

  while (position !== -1) {
    matchPositions.push(position);
    position = subjectString.indexOf(searchString, position + advanceBy);
  }

  var endOfLastMatch = 0;
  var result = '';

  for (var i = 0; i < matchPositions.length; i++) {
    var _position = matchPositions[i];
    var replacement = replace;

    if (isFunctionalReplace) {
      replacement = coerceToString(replace.call(undefined, searchString, _position, subjectString));
    }

    result += subjectString.slice(endOfLastMatch, _position) + replacement;
    endOfLastMatch = _position + searchLength;
  }

  if (endOfLastMatch < subjectString.length) {
    result += subjectString.slice(endOfLastMatch);
  }

  return result;
}

/**
 * Reverses the `subject`.
 *
 * @function reverse
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to reverse.
 * @return {string} Returns the reversed string.
 * @example
 * v.reverse('winter');
 * // => 'retniw'
 */

function reverse(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.split('').reverse().join('');
}

/**
 * Reverses the `subject` taking care of
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#24surrogatepairs">surrogate pairs</a> and
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#25combiningmarks">combining marks</a>.
 *
 * @function reverseGrapheme
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to reverse.
 * @return {string} Returns the reversed string.
 * @example
 * v.reverseGrapheme('summer');
 * // => 'remmus'
 *
 * v.reverseGrapheme('𝌆 bar mañana mañana');
 * // => 'anañam anañam rab 𝌆'
 */

function reverseGrapheme(subject) {
  var subjectString = coerceToString(subject);
  /**
   * @see https://github.com/mathiasbynens/esrever
   */

  subjectString = subjectString.replace(REGEXP_COMBINING_MARKS, function ($0, $1, $2) {
    return reverseGrapheme($2) + $1;
  }).replace(REGEXP_SURROGATE_PAIRS, '$2$1');
  var reversedString = '';
  var index = subjectString.length;

  while (index--) {
    reversedString += subjectString.charAt(index);
  }

  return reversedString;
}

/**
 * Slugifies the `subject`. Cleans the `subject` by replacing diacritics with corresponding latin characters.
 *
 * @function slugify
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to slugify.
 * @return {string} Returns the slugified string.
 * @example
 * v.slugify('Italian cappuccino drink');
 * // => 'italian-cappuccino-drink'
 *
 * v.slugify('caffé latté');
 * // => 'caffe-latte'
 *
 * v.slugify('хорошая погода');
 * // => 'horoshaya-pogoda'
 */

function slugify(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  var cleanSubjectString = latinise(subjectString).replace(REGEXP_NON_LATIN, '-');
  return kebabCase(cleanSubjectString);
}

/**
 * Changes `subject` by deleting `deleteCount` of characters starting at position `start`. Places a new string
 * `toAdd` instead of deleted characters.
 *
 * @function splice
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string where to insert.
 * @param {string} start The position to start changing the string. For a negative position will start from the end of
 * the string.
 * @param {number} [deleteCount=subject.length-start] The number of characters to delete from string.
 * @param {string} [toAdd=''] The string to be added instead of deleted characters.
 * @return {string} Returns the modified string.
 * @example
 * v.splice('new year', 0, 4);
 * // => 'year'
 *
 * v.splice('new year', 0, 3, 'happy');
 * // => 'happy year'
 *
 * v.splice('new year', -4, 4, 'day');
 * // => 'new day'
 */

function splice(subject, start, deleteCount, toAdd) {
  var subjectString = coerceToString(subject);
  var toAddString = coerceToString(toAdd);
  var startPosition = coerceToNumber(start);

  if (startPosition < 0) {
    startPosition = subjectString.length + startPosition;

    if (startPosition < 0) {
      startPosition = 0;
    }
  } else if (startPosition > subjectString.length) {
    startPosition = subjectString.length;
  }

  var deleteCountNumber = coerceToNumber(deleteCount, subjectString.length - startPosition);

  if (deleteCountNumber < 0) {
    deleteCountNumber = 0;
  }

  return subjectString.slice(0, startPosition) + toAddString + subjectString.slice(startPosition + deleteCountNumber);
}

/**
 * Translates characters or replaces substrings in `subject`.
 *
 * @function tr
 * @static
 * @since 1.3.0
 * @memberOf Manipulate
 * @param  {string} [subject=''] The string to translate.
 * @param  {string|Object} from The string of characters to translate from. Or an object, then the object keys are replaced with corresponding values (longest keys are tried first).
 * @param  {string} to The string of characters to translate to. Ignored when `from` is an object.
 * @return {string} Returns the translated string.
 * @example
 * v.tr('hello', 'el', 'ip');
 * // => 'hippo'
 *
 * v.tr('légèreté', 'éè', 'ee');
 * // => 'legerete'
 *
 * v.tr('Yes. The fire rises.', {
 *   'Yes': 'Awesome',
 *   'fire': 'flame'
 * })
 * // => 'Awesome. The flame rises.'
 *
 * v.tr(':where is the birthplace of :what', {
 *   ':where': 'Africa',
 *   ':what': 'Humanity'
 * });
 * // => 'Africa is the birthplace of Humanity'
 *
 */

function tr(subject, from, to) {
  var subjectString = coerceToString(subject);
  var keys;
  var values;

  if (isString(from) && isString(to)) {
    keys = from.split('');
    values = to.split('');
  } else {
    var _extractKeysAndValues = extractKeysAndValues(nilDefault(from, {}));

    var _extractKeysAndValues2 = _slicedToArray(_extractKeysAndValues, 2);

    keys = _extractKeysAndValues2[0];
    values = _extractKeysAndValues2[1];
  }

  var keysLength = keys.length;

  if (keysLength === 0) {
    return subjectString;
  }

  var result = '';
  var valuesLength = values.length;

  for (var index = 0; index < subjectString.length; index++) {
    var isMatch = false;
    var matchValue = void 0;

    for (var keyIndex = 0; keyIndex < keysLength && keyIndex < valuesLength; keyIndex++) {
      var key = keys[keyIndex];

      if (subjectString.substr(index, key.length) === key) {
        isMatch = true;
        matchValue = values[keyIndex];
        index = index + key.length - 1;
        break;
      }
    }

    result += isMatch ? matchValue : subjectString[index];
  }

  return result;
}

function extractKeysAndValues(object) {
  var keys = Object.keys(object);
  var values = keys.sort(sortStringByLength).map(function (key) {
    return object[key];
  });
  return [keys, values];
}

function sortStringByLength(str1, str2) {
  if (str1.length === str2.length) {
    return 0;
  }

  return str1.length < str2.length ? 1 : -1;
}

/**
 * Checks whether `subject` includes `search` starting from `position`.
 *
 * @function includes
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string where to search.
 * @param {string} search The string to search.
 * @param {number} [position=0] The position to start searching.
 * @return {boolean} Returns `true` if `subject` includes `search` or `false` otherwise.
 * @example
 * v.includes('starship', 'star');
 * // => true
 *
 * v.includes('galaxy', 'g', 1);
 * // => false
 */

function includes(subject, search, position) {
  var subjectString = coerceToString(subject);
  var searchString = toString(search);

  if (searchString === null) {
    return false;
  }

  if (searchString === '') {
    return true;
  }

  position = isNil(position) ? 0 : clipNumber(toInteger(position), 0, subjectString.length);
  return subjectString.indexOf(searchString, position) !== -1;
}

var reduce$1 = Array.prototype.reduce;
/**
 * Removes whitespaces from the left side of the `subject`.
 *
 * @function trimLeft
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to trim.
 * @param {string} [whitespace=whitespace] The whitespace characters to trim. List all characters that you want to be stripped.
 * @return {string} Returns the trimmed string.
 * @example
 * v.trimLeft('  Starship Troopers');
 * // => 'Starship Troopers'
 *
 * v.trimLeft('***Mobile Infantry', '*');
 * // => 'Mobile Infantry'
 */

function trimLeft(subject, whitespace) {
  var subjectString = coerceToString(subject);

  if (whitespace === '' || subjectString === '') {
    return subjectString;
  }

  var whitespaceString = toString(whitespace);

  if (isNil(whitespaceString)) {
    return subjectString.replace(REGEXP_TRIM_LEFT, '');
  }

  var matchWhitespace = true;
  return reduce$1.call(subjectString, function (trimmed, character) {
    if (matchWhitespace && includes(whitespaceString, character)) {
      return trimmed;
    }

    matchWhitespace = false;
    return trimmed + character;
  }, '');
}

var reduceRight = Array.prototype.reduceRight;
/**
 * Removes whitespaces from the right side of the `subject`.
 *
 * @function trimRight
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to trim.
 * @param {string} [whitespace=whitespace] The whitespace characters to trim. List all characters that you want to be stripped.
 * @return {string} Returns the trimmed string.
 * @example
 * v.trimRight('the fire rises   ');
 * // => 'the fire rises'
 *
 * v.trimRight('do you feel in charge?!!!', '!');
 * // => 'do you feel in charge?'
 */

function trimRight(subject, whitespace) {
  var subjectString = coerceToString(subject);

  if (whitespace === '' || subjectString === '') {
    return subjectString;
  }

  var whitespaceString = toString(whitespace);

  if (isNil(whitespaceString)) {
    return subjectString.replace(REGEXP_TRIM_RIGHT, '');
  }

  var matchWhitespace = true;
  return reduceRight.call(subjectString, function (trimmed, character) {
    if (matchWhitespace && includes(whitespaceString, character)) {
      return trimmed;
    }

    matchWhitespace = false;
    return character + trimmed;
  }, '');
}

/**
 * Removes whitespaces from left and right sides of the `subject`.
 *
 * @function trim
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to trim.
 * @param {string} [whitespace=whitespace] The whitespace characters to trim. List all characters that you want to be stripped.
 * @return {string} Returns the trimmed string.
 * @example
 * v.trim(' Mother nature ');
 * // => 'Mother nature'
 *
 * v.trim('--Earth--', '-');
 * // => 'Earth'
 */

function trim(subject, whitespace) {
  var subjectString = coerceToString(subject);

  if (whitespace === '' || subjectString === '') {
    return subjectString;
  }

  var whitespaceString = toString(whitespace);

  if (isNil(whitespaceString)) {
    return subjectString.trim();
  }

  return trimRight(trimLeft(subjectString, whitespaceString), whitespaceString);
}

var OPTION_WIDTH = 'width';
var OPTION_NEW_LINE = 'newLine';
var OPTION_INDENT = 'indent';
var OPTION_CUT = 'cut';
/**
 * Wraps `subject` to a given number of characters using a string break character.
 *
 * @function wordWrap
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param  {string} [subject=''] The string to wrap.
 * @param  {Object} [options={}] The wrap options.
 * @param  {number} [options.width=75] The number of characters at which to wrap.
 * @param  {string} [options.newLine='\n'] The string to add at the end of line.
 * @param  {string} [options.indent='']  The string to intend the line.
 * @param  {boolean} [options.cut=false] When `false` (default) does not split the word even if word length is bigger than `width`. <br/>
 *                                       When `true` breaks the word that has length bigger than `width`.
 *
 * @return {string} Returns wrapped string.
 * @example
 * v.wordWrap('Hello world', {
 *   width: 5
 * });
 * // => 'Hello\nworld'
 *
 * v.wordWrap('Hello world', {
 *   width: 5,
 *   newLine: '<br/>',
 *   indent: '__'
 * });
 * // => '__Hello<br/>__world'
 *
 * v.wordWrap('Wonderful world', {
 *   width: 5,
 *   cut: true
 * });
 * // => 'Wonde\nrful\nworld'
 *
 */

function wordWrap(subject) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var subjectString = coerceToString(subject);

  var _determineOptions = determineOptions(options),
      width = _determineOptions.width,
      newLine = _determineOptions.newLine,
      indent = _determineOptions.indent,
      cut = _determineOptions.cut;

  if (subjectString === '' || width <= 0) {
    return indent;
  }

  var subjectLength = subjectString.length;
  var substring = subjectString.substring.bind(subjectString);
  var offset = 0;
  var wrappedLine = '';

  while (subjectLength - offset > width) {
    if (subjectString[offset] === ' ') {
      offset++;
      continue;
    }

    var spaceToWrapAt = subjectString.lastIndexOf(' ', width + offset);

    if (spaceToWrapAt >= offset) {
      wrappedLine += indent + substring(offset, spaceToWrapAt) + newLine;
      offset = spaceToWrapAt + 1;
    } else {
      if (cut) {
        wrappedLine += indent + substring(offset, width + offset) + newLine;
        offset += width;
      } else {
        spaceToWrapAt = subjectString.indexOf(' ', width + offset);

        if (spaceToWrapAt >= 0) {
          wrappedLine += indent + substring(offset, spaceToWrapAt) + newLine;
          offset = spaceToWrapAt + 1;
        } else {
          wrappedLine += indent + substring(offset);
          offset = subjectLength;
        }
      }
    }
  }

  if (offset < subjectLength) {
    wrappedLine += indent + substring(offset);
  }

  return wrappedLine;
}
/**
 * Determine the word wrap options. The missing values are filled with defaults.
 *
 * @param  {Object} options  The options object.
 * @return {Object}          The word wrap options, with default settings if necessary.
 * @ignore
 */

function determineOptions(options) {
  return {
    width: coerceToNumber(options[OPTION_WIDTH], 75),
    newLine: coerceToString(options[OPTION_NEW_LINE], '\n'),
    indent: coerceToString(options[OPTION_INDENT], ''),
    cut: coerceToBoolean(options[OPTION_CUT], false)
  };
}

/**
 * Checks whether `subject` ends with `end`.
 *
 * @function endsWith
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @param {string} end The ending string.
 * @param {number} [position=subject.length] Search within `subject` as if the string were only `position` long.
 * @return {boolean} Returns `true` if `subject` ends with `end` or `false` otherwise.
 * @example
 * v.endsWith('red alert', 'alert');
 * // => true
 *
 * v.endsWith('metro south', 'metro');
 * // => false
 *
 * v.endsWith('Murphy', 'ph', 5);
 * // => true
 */

function endsWith(subject, end, position) {
  if (isNil(end)) {
    return false;
  }

  var subjectString = coerceToString(subject);
  var endString = coerceToString(end);

  if (endString === '') {
    return true;
  }

  position = isNil(position) ? subjectString.length : clipNumber(toInteger(position), 0, subjectString.length);
  position -= endString.length;
  var lastIndex = subjectString.indexOf(endString, position);
  return lastIndex !== -1 && lastIndex === position;
}

/**
 * Checks whether `subject` contains only alpha characters.
 *
 * @function isAlpha
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` contains only alpha characters or `false` otherwise.
 * @example
 * v.isAlpha('bart');
 * // => true
 *
 * v.isAlpha('lisa!');
 * // => false
 *
 * v.isAlpha('lisa and bart');
 * // => false
 */

function isAlpha(subject) {
  var subjectString = coerceToString(subject);
  return REGEXP_ALPHA.test(subjectString);
}

/**
 * Checks whether `subject` contains only alpha and digit characters.
 *
 * @function isAlphaDigit
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` contains only alpha and digit characters or `false` otherwise.
 * @example
 * v.isAlphaDigit('year2020');
 * // => true
 *
 * v.isAlphaDigit('1448');
 * // => true
 *
 * v.isAlphaDigit('40-20');
 * // => false
 */

function isAlphaDigit(subject) {
  var subjectString = coerceToString(subject);
  return REGEXP_ALPHA_DIGIT.test(subjectString);
}

/**
 * Checks whether `subject` is empty or contains only whitespaces.
 *
 * @function isBlank
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` is empty or contains only whitespaces or `false` otherwise.
 * @example
 * v.isBlank('');
 * // => true
 *
 * v.isBlank('  ');
 * // => true
 *
 * v.isBlank('World');
 * // => false
 */

function isBlank(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.trim().length === 0;
}

/**
 * Checks whether `subject` contains only digit characters.
 *
 * @function isDigit
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` contains only digit characters or `false` otherwise.
 * @example
 * v.isDigit('35');
 * // => true
 *
 * v.isDigit('1.5');
 * // => false
 *
 * v.isDigit('ten');
 * // => false
 */

function isDigit(subject) {
  var subjectString = coerceToString(subject);
  return REGEXP_DIGIT.test(subjectString);
}

/**
 * Checks whether `subject` is empty.
 *
 * @function isEmpty
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` is empty or `false` otherwise
 * @example
 * v.isEmpty('');
 * // => true
 *
 * v.isEmpty('  ');
 * // => false
 *
 * v.isEmpty('sun');
 * // => false
 */

function isEmpty(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.length === 0;
}

/**
 * Checks whether `subject` has only lower case characters.
 *
 * @function isLowerCase
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` is lower case or `false` otherwise.
 * @example
 * v.isLowerCase('motorcycle');
 * // => true
 *
 * v.isLowerCase('John');
 * // => false
 *
 * v.isLowerCase('T1000');
 * // => false
 */

function isLowerCase(subject) {
  var valueString = coerceToString(subject);
  return isAlpha(valueString) && valueString.toLowerCase() === valueString;
}

/**
 * Checks whether `subject` is numeric.
 *
 * @function isNumeric
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` is numeric or `false` otherwise.
 * @example
 * v.isNumeric('350');
 * // => true
 *
 * v.isNumeric('-20.5');
 * // => true
 *
 * v.isNumeric('1.5E+2');
 * // => true
 *
 * v.isNumeric('five');
 * // => false
 */

function isNumeric(subject) {
  var valueNumeric = typeof subject === 'object' && !isNil(subject) ? Number(subject) : subject;
  return (typeof valueNumeric === 'number' || typeof valueNumeric === 'string') && !isNaN(valueNumeric - parseFloat(valueNumeric));
}

/**
 * Checks whether `subject` contains only upper case characters.
 *
 * @function isUpperCase
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @return {boolean} Returns `true` if `subject` is upper case or `false` otherwise.
 * @example
 * v.isUpperCase('ACDC');
 * // => true
 *
 * v.isUpperCase('Morning');
 * // => false
 */

function isUpperCase(subject) {
  var subjectString = coerceToString(subject);
  return isAlpha(subjectString) && subjectString.toUpperCase() === subjectString;
}

/**
 * Checks whether `subject` matches the regular expression `pattern`.
 *
 * @function matches
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @param {RegExp|string} pattern The pattern to match. If `pattern` is not RegExp, it is transformed to `new RegExp(pattern, flags)`.
 * @param {string} [flags=''] The regular expression flags. Applies when `pattern` is string type.
 * @return {boolean} Returns `true` if `subject` matches `pattern` or `false` otherwise.
 * @example
 * v.matches('pluto', /plu.{2}/);
 * // => true
 *
 * v.matches('sun', 'S', 'i');
 * // => true
 *
 * v.matches('apollo 11', '\\d{3}');
 * // => false
 */

function matches(subject, pattern, flags) {
  var subjectString = coerceToString(subject);
  var flagsString = coerceToString(flags);
  var patternString;

  if (!(pattern instanceof RegExp)) {
    patternString = toString(pattern);

    if (patternString === null) {
      return false;
    }

    pattern = new RegExp(patternString, flagsString);
  }

  return pattern.test(subjectString);
}

/**
 * Checks whether `subject` starts with `start`.
 *
 * @function startsWith
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} [subject=''] The string to verify.
 * @param {string} start The starting string.
 * @param {number} [position=0] The position to start searching.
 * @return {boolean} Returns `true` if `subject` starts with `start` or `false` otherwise.
 * @example
 * v.startsWith('say hello to my little friend', 'say hello');
 * // => true
 *
 * v.startsWith('tony', 'on', 1);
 * // => true
 *
 * v.startsWith('the world is yours', 'world');
 * // => false
 */

function startsWith(subject, start, position) {
  var subjectString = coerceToString(subject);
  var startString = toString(start);

  if (startString === null) {
    return false;
  }

  if (startString === '') {
    return true;
  }

  position = isNil(position) ? 0 : clipNumber(toInteger(position), 0, subjectString.length);
  return subjectString.substr(position, startString.length) === startString;
}

/**
 * Splits `subject` into an array of characters.
 *
 * @function chars
 * @static
 * @since 1.0.0
 * @memberOf Split
 * @param {string} [subject=''] The string to split into characters.
 * @return {Array} Returns the array of characters.
 * @example
 * v.chars('cloud');
 * // => ['c', 'l', 'o', 'u', 'd']
 */

function chars(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.split('');
}

/**
 * Returns an array of Unicode code point values from characters of `subject`.
 *
 * @function codePoints
 * @static
 * @since 1.0.0
 * @memberOf Split
 * @param  {string} [subject=''] The string to extract from.
 * @return {Array} Returns an array of non-negative numbers less than or equal to `0x10FFFF`.
 * @example
 * v.codePoints('rain');
 * // => [114, 97, 105, 110], or
 * //    [0x72, 0x61, 0x69, 0x6E]
 *
 * v.codePoints('\uD83D\uDE00 smile'); // or '😀 smile'
 * // => [128512, 32, 115, 109, 105, 108, 101], or
 * //    [0x1F600, 0x20, 0x73, 0x6D, 0x69, 0x6C, 0x65]
 */

function codePoints(subject) {
  var subjectString = coerceToString(subject);
  var subjectStringLength = subjectString.length;
  var codePointArray = [];
  var index = 0;
  var codePointNumber;

  while (index < subjectStringLength) {
    codePointNumber = codePointAt(subjectString, index);
    codePointArray.push(codePointNumber);
    index += codePointNumber > 0xffff ? 2 : 1;
  }

  return codePointArray;
}

/**
 * Splits `subject` into an array of graphemes taking care of
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#24surrogatepairs">surrogate pairs</a> and
 * <a href="https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/#25combiningmarks">combining marks</a>.
 *
 * @function graphemes
 * @static
 * @since 1.0.0
 * @memberOf Split
 * @param {string} [subject=''] The string to split into characters.
 * @return {Array} Returns the array of graphemes.
 * @example
 * v.graphemes('\uD835\uDC00\uD835\uDC01'); // or '𝐀𝐁'
 * // => ['\uD835\uDC00', '\uD835\uDC01'], or
 * //    ['𝐀', '𝐁']
 *
 * v.graphemes('cafe\u0301'); // or 'café'
 * // => ['c', 'a', 'f', 'e\u0301'], or
 * //    ['c', 'a', 'f', 'é']
 */

function graphemes(subject) {
  var subjectString = coerceToString(subject);
  return nilDefault(subjectString.match(REGEXP_UNICODE_CHARACTER), []);
}

/**
 * Splits `subject` into an array of chunks by `separator`.
 *
 * @function split
 * @static
 * @since 1.0.0
 * @memberOf Split
 * @param {string} [subject=''] The string to split into characters.
 * @param {string|RegExp} [separator] The pattern to match the separator.
 * @param {number} [limit] Limit the number of chunks to be found.
 * @return {Array} Returns the array of chunks.
 * @example
 * v.split('rage against the dying of the light', ' ');
 * // => ['rage', 'against', 'the', 'dying', 'of', 'the', 'light']
 *
 * v.split('the dying of the light', /\s/, 3);
 * // => ['the', 'dying', 'of']
 */

function split(subject, separator, limit) {
  var subjectString = coerceToString(subject);
  return subjectString.split(separator, limit);
}

var BYRE_ORDER_MARK = '\uFEFF';
/**
 * Strips the byte order mark (BOM) from the beginning of `subject`.
 *
 * @function stripBom
 * @static
 * @since 1.2.0
 * @memberOf Strip
 * @param {string} [subject=''] The string to strip from.
 * @return {string} Returns the stripped string.
 * @example
 *
 * v.stripBom('\uFEFFsummertime sadness');
 * // => 'summertime sadness'
 *
 * v.stripBom('summertime happiness');
 * // => 'summertime happiness'
 *
 */

function trim$1(subject) {
  var subjectString = coerceToString(subject);

  if (subjectString === '') {
    return '';
  }

  if (subjectString[0] === BYRE_ORDER_MARK) {
    return subjectString.substring(1);
  }

  return subjectString;
}

/**
 * Checks whether `subject` contains substring at specific `index`.
 *
 * @ignore
 * @param {string} subject The subject to search in.
 * @param {string} substring The substring to search/
 * @param {number} index The index to search substring.
 * @param {boolean} lookBehind Whether to look behind (true) or ahead (false).
 * @return {boolean} Returns a boolean whether the substring exists.
 */
function hasSubstringAtIndex(subject, substring, index) {
  var lookBehind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var indexOffset = 0;

  if (lookBehind) {
    indexOffset = -substring.length + 1;
  }

  var extractedSubstring = subject.substr(index + indexOffset, substring.length);
  return extractedSubstring.toLowerCase() === substring;
}

/**
 * Parses the tags from the string '<tag1><tag2>...<tagN>'.
 *
 * @ignore
 * @param {string} tags The string that contains the tags.
 * @return {string[]} Returns the array of tag names.
 */

function parseTagList(tags) {
  var tagsList = [];
  var match;

  while ((match = REGEXP_TAG_LIST.exec(tags)) !== null) {
    tagsList.push(match[1]);
  }

  return tagsList;
}

var STATE_START_TAG = 0;
var STATE_NON_WHITESPACE = 1;
var STATE_DONE = 2;
/**
 * Parses the tag name from html content.
 *
 * @ignore
 * @param {string} tagContent The tag content.
 * @return {string} Returns the tag name.
 */

function parseTagName(tagContent) {
  var state = STATE_START_TAG;
  var tagName = '';
  var index = 0;

  while (state !== STATE_DONE) {
    var char = tagContent[index++].toLowerCase();

    switch (char) {
      case '<':
        break;

      case '>':
        state = STATE_DONE;
        break;

      default:
        if (REGEXP_WHITESPACE.test(char)) {
          if (state === STATE_NON_WHITESPACE) {
            state = STATE_DONE;
          }
        } else {
          if (state === STATE_START_TAG) {
            state = STATE_NON_WHITESPACE;
          }

          if (char !== '/') {
            tagName += char;
          }
        }

        break;
    }
  }

  return tagName;
}

var STATE_OUTPUT = 0;
var STATE_HTML = 1;
var STATE_EXCLAMATION = 2;
var STATE_COMMENT = 3;
/**
 * Strips HTML tags from `subject`.
 *
 * @function stripTags
 * @static
 * @since 1.1.0
 * @memberOf Strip
 * @param {string} [subject=''] The string to strip from.
 * @param {string|Array} [allowableTags] The string `'<tag1><tag2>'` or array `['tag1', 'tag2']` of tags that should not be stripped.
 * @param {string} [replacement=''] The string to replace the stripped tag.
 * @return {string} Returns the stripped string.
 * @example
 *
 * v.stripTags('<span><a href="#">Summer</a> is nice</span>');
 * // => 'Summer is nice'
 *
 * v.stripTags('<span><i>Winter</i> is <b>cold</b></span>', ['b', 'i']);
 * // => '<i>Winter</i> is <b>cold</b>'
 *
 * v.stripTags('Sun<br/>set', '', '-');
 * // => 'Sun-set'
 */

function trim$2(subject, allowableTags, replacement) {
  subject = coerceToString(subject);

  if (subject === '') {
    return '';
  }

  if (!Array.isArray(allowableTags)) {
    var allowableTagsString = coerceToString(allowableTags);
    allowableTags = allowableTagsString === '' ? [] : parseTagList(allowableTagsString);
  }

  var replacementString = coerceToString(replacement);
  var length = subject.length;
  var hasAllowableTags = allowableTags.length > 0;
  var hasSubstring = hasSubstringAtIndex.bind(null, subject);
  var state = STATE_OUTPUT;
  var depth = 0;
  var output = '';
  var tagContent = '';
  var quote = null;

  for (var index = 0; index < length; index++) {
    var char = subject[index];
    var advance = false;

    switch (char) {
      case '<':
        if (quote) {
          break;
        }

        if (hasSubstring('< ', index, false)) {
          advance = true;
          break;
        }

        if (state === STATE_OUTPUT) {
          advance = true;
          state = STATE_HTML;
          break;
        }

        if (state === STATE_HTML) {
          depth++;
          break;
        }

        advance = true;
        break;

      case '!':
        if (state === STATE_HTML && hasSubstring('<!', index)) {
          state = STATE_EXCLAMATION;
          break;
        }

        advance = true;
        break;

      case '-':
        if (state === STATE_EXCLAMATION && hasSubstring('!--', index)) {
          state = STATE_COMMENT;
          break;
        }

        advance = true;
        break;

      case '"':
      case "'":
        if (state === STATE_HTML) {
          if (quote === char) {
            quote = null;
          } else if (!quote) {
            quote = char;
          }
        }

        advance = true;
        break;

      case 'E':
      case 'e':
        if (state === STATE_EXCLAMATION && hasSubstring('doctype', index)) {
          state = STATE_HTML;
          break;
        }

        advance = true;
        break;

      case '>':
        if (depth > 0) {
          depth--;
          break;
        }

        if (quote) {
          break;
        }

        if (state === STATE_HTML) {
          quote = null;
          state = STATE_OUTPUT;

          if (hasAllowableTags) {
            tagContent += '>';
            var tagName = parseTagName(tagContent);

            if (allowableTags.indexOf(tagName.toLowerCase()) !== -1) {
              output += tagContent;
            } else {
              output += replacementString;
            }

            tagContent = '';
          } else {
            output += replacementString;
          }

          break;
        }

        if (state === STATE_EXCLAMATION || state === STATE_COMMENT && hasSubstring('-->', index)) {
          quote = null;
          state = STATE_OUTPUT;
          tagContent = '';
          break;
        }

        advance = true;
        break;

      default:
        advance = true;
    }

    if (advance) {
      switch (state) {
        case STATE_OUTPUT:
          output += char;
          break;

        case STATE_HTML:
          if (hasAllowableTags) {
            tagContent += char;
          }

          break;
      }
    }
  }

  return output;
}

var globalObject = null;

function getGlobalObject() {
  if (globalObject !== null) {
    return globalObject;
  }
  /* istanbul ignore next */
  // It's hard to mock the global variables. This code surely works fine. I hope :)


  if (typeof __webpack_require__.g === 'object' && __webpack_require__.g.Object === Object) {
    // NodeJS global object
    globalObject = __webpack_require__.g;
  } else if (typeof self === 'object' && self.Object === Object) {
    // self property from Window object
    globalObject = self;
  } else {
    // Other cases. Function constructor always has the context as global object
    globalObject = new Function('return this')();
  }

  return globalObject;
}

var globalObject$1 = getGlobalObject();
var previousV = globalObject$1.v;
/**
 * Restores `v` variable to previous value and returns Voca library instance.
 *
 * @function noConflict
 * @static
 * @since 1.0.0
 * @memberOf Util
 * @return {Object} Returns Voca library instance.
 * @example
 * var voca = v.noConflict();
 * voca.isAlpha('Hello');
 * // => true
 */

function noConflict() {
  if (this === globalObject$1.v) {
    globalObject$1.v = previousV;
  }

  return this;
}

/**
 * A property that contains the library <a href="http://semver.org/">semantic version number</a>.
 * @name version
 * @static
 * @since 1.0.0
 * @memberOf Util
 * @type string
 * @example
 * v.version
 * // => '1.4.0'
 */
var version = '1.4.0';

/* eslint sort-imports: "off" */
var functions = {
  camelCase: camelCase,
  capitalize: capitalize,
  decapitalize: decapitalize,
  kebabCase: kebabCase,
  lowerCase: lowerCase,
  snakeCase: snakeCase,
  swapCase: swapCase,
  titleCase: titleCase,
  upperCase: upperCase,
  count: count,
  countGraphemes: countGrapheme,
  countSubstrings: countSubstrings,
  countWhere: countWhere,
  countWords: countWords,
  escapeHtml: escapeHtml,
  escapeRegExp: escapeRegExp,
  unescapeHtml: unescapeHtml,
  sprintf: sprintf,
  vprintf: vprintf,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  search: search,
  charAt: charAt,
  codePointAt: codePointAt,
  first: first,
  graphemeAt: graphemeAt,
  last: last,
  prune: prune,
  slice: slice,
  substr: substr,
  substring: substring,
  truncate: truncate,
  insert: insert,
  latinise: latinise,
  pad: pad,
  padLeft: padLeft,
  padRight: padRight,
  repeat: repeat,
  replace: replace,
  replaceAll: replaceAll,
  reverse: reverse,
  reverseGrapheme: reverseGrapheme,
  slugify: slugify,
  splice: splice,
  tr: tr,
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  wordWrap: wordWrap,
  endsWith: endsWith,
  includes: includes,
  isAlpha: isAlpha,
  isAlphaDigit: isAlphaDigit,
  isBlank: isBlank,
  isDigit: isDigit,
  isEmpty: isEmpty,
  isLowerCase: isLowerCase,
  isNumeric: isNumeric,
  isString: isString,
  isUpperCase: isUpperCase,
  matches: matches,
  startsWith: startsWith,
  chars: chars,
  codePoints: codePoints,
  graphemes: graphemes,
  split: split,
  words: words,
  stripBom: trim$1,
  stripTags: trim$2,
  noConflict: noConflict,
  version: version
};

/**
 * The chain wrapper constructor.
 *
 * @ignore
 * @param  {string}       subject               The string to be wrapped.
 * @param  {boolean}      [explicitChain=false] A boolean that indicates if the chain sequence is explicit or implicit.
 * @return {ChainWrapper}                       Returns a new instance of `ChainWrapper`
 * @constructor
 */

function ChainWrapper(subject, explicitChain) {
  this._wrappedValue = subject;
  this._explicitChain = explicitChain;
}
/**
 * Unwraps the chain sequence wrapped value.
 *
 * @memberof Chain
 * @since 1.0.0
 * @function __proto__value
 * @return {*} Returns the unwrapped value.
 * @example
 * v
 *  .chain('Hello world')
 *  .replace('Hello', 'Hi')
 *  .lowerCase()
 *  .slugify()
 *  .value()
 * // => 'hi-world'
 *
 * v(' Space travel ')
 *  .trim()
 *  .truncate(8)
 *  .value()
 * // => 'Space...'
 */


ChainWrapper.prototype.value = function () {
  return this._wrappedValue;
};
/**
 * Override the default object valueOf().
 *
 * @ignore
 * @return {*} Returns the wrapped value.
 */


ChainWrapper.prototype.valueOf = function () {
  return this.value();
};
/**
 * Returns the wrapped value to be used in JSON.stringify().
 *
 * @ignore
 * @return {*} Returns the wrapped value.
 */


ChainWrapper.prototype.toJSON = function () {
  return this.value();
};
/**
 * Returns the string representation of the wrapped value.
 *
 * @ignore
 * @return {string} Returns the string representation.
 */


ChainWrapper.prototype.toString = function () {
  return String(this.value());
};
/**
 * Creates a new chain object that enables <i>explicit</i> chain sequences.
 * Use `v.prototype.value()` to unwrap the result. <br/>
 * Does not modify the wrapped value.
 *
 * @memberof Chain
 * @since 1.0.0
 * @function __proto__chain
 * @return {Object} Returns the wrapper in <i>explicit</i> mode.
 * @example
 * v('Back to School')
 *  .chain()
 *  .lowerCase()
 *  .words()
 *  .value()
 * // => ['back', 'to', 'school']
 *
 * v(" Back to School ")
 *  .chain()
 *  .trim()
 *  .truncate(7)
 *  .value()
 * // => 'Back...'
 */


ChainWrapper.prototype.chain = function () {
  return new ChainWrapper(this._wrappedValue, true);
};
/**
 * Modifies the wrapped value with the invocation result of `changer` function. The current wrapped value is the
 * argument of `changer` invocation.
 *
 * @memberof Chain
 * @since 1.0.0
 * @function __proto__thru
 * @param  {Function} changer The function to invoke.
 * @return {Object}           Returns the new wrapper that wraps the invocation result of `changer`.
 * @example
 * v
 *  .chain('sun is shining')
 *  .words()
 *  .thru(function(words) {
 *    return words[0];
 *  })
 *  .value()
 * // => 'sun'
 *
 */


ChainWrapper.prototype.thru = function (changer) {
  if (typeof changer === 'function') {
    return new ChainWrapper(changer(this._wrappedValue), this._explicitChain);
  }

  return this;
};
/**
 * A boolean that indicates if the chain sequence is explicit or implicit.
 * @ignore
 * @type {boolean}
 * @private
 */


ChainWrapper.prototype._explicitChain = true;
/**
 * Make a voca function chainable.
 *
 * @ignore
 * @param  {Function} functionInstance The function to make chainable
 * @return {Function}                  Returns the chainable function
 */

function makeFunctionChainable(functionInstance) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = functionInstance.apply(void 0, [this._wrappedValue].concat(args));

    if (this._explicitChain || typeof result === 'string') {
      return new ChainWrapper(result, this._explicitChain);
    } else {
      return result;
    }
  };
}

Object.keys(functions).forEach(function (name) {
  ChainWrapper.prototype[name] = makeFunctionChainable(functions[name]);
});

/**
 * Creates a chain object that wraps `subject`, enabling <i>explicit</i> chain sequences. <br/>
 * Use `v.prototype.value()` to unwrap the result.
 *
 * @memberOf Chain
 * @since 1.0.0
 * @function chain
 * @param  {string} subject The string to wrap.
 * @return {Object}         Returns the new wrapper object.
 * @example
 * v
 *  .chain('Back to School')
 *  .lowerCase()
 *  .words()
 *  .value()
 * // => ['back', 'to', 'school']
 */

function chain(subject) {
  return new ChainWrapper(subject, true);
}

/**
 * Creates a chain object that wraps `subject`, enabling <i>implicit</i> chain sequences.<br/>
 * A function that returns `number`, `boolean` or `array` type <i>terminates</i> the chain sequence and returns the unwrapped value.
 * Otherwise use `v.prototype.value()` to unwrap the result.
 *
 * @memberOf Chain
 * @since 1.0.0
 * @function v
 * @param {string} subject The string to wrap.
 * @return {Object}  Returns the new wrapper object.
 * @example
 * v('Back to School')
 *  .lowerCase()
 *  .words()
 * // => ['back', 'to', 'school']
 *
 * v(" Back to School ")
 *  .trim()
 *  .truncate(7)
 *  .value()
 * // => 'Back...'
 */

function Voca(subject) {
  return new ChainWrapper(subject, false);
}

_extends(Voca, functions, {
  chain: chain
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Voca);


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

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

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

/***/ "./node_modules/codsen-utils/dist/codsen-utils.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/codsen-utils/dist/codsen-utils.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backslash: () => (/* binding */ J),
/* harmony export */   backtick: () => (/* binding */ $),
/* harmony export */   compareFn: () => (/* binding */ tt),
/* harmony export */   detectEol: () => (/* binding */ g),
/* harmony export */   doublePrime: () => (/* binding */ T),
/* harmony export */   ellipsis: () => (/* binding */ N),
/* harmony export */   existy: () => (/* binding */ G),
/* harmony export */   findAllIdx: () => (/* binding */ _),
/* harmony export */   hairspace: () => (/* binding */ A),
/* harmony export */   hasOwnProp: () => (/* binding */ v),
/* harmony export */   includes: () => (/* binding */ rt),
/* harmony export */   inlineTags: () => (/* binding */ nt),
/* harmony export */   intersection: () => (/* binding */ ot),
/* harmony export */   isBool: () => (/* binding */ H),
/* harmony export */   isCurrencyChar: () => (/* binding */ x),
/* harmony export */   isCurrencySymbol: () => (/* binding */ F),
/* harmony export */   isInt: () => (/* binding */ q),
/* harmony export */   isLatinLetter: () => (/* binding */ I),
/* harmony export */   isLetter: () => (/* binding */ i),
/* harmony export */   isLowercaseLetter: () => (/* binding */ M),
/* harmony export */   isNull: () => (/* binding */ Z),
/* harmony export */   isNum: () => (/* binding */ W),
/* harmony export */   isNumberChar: () => (/* binding */ U),
/* harmony export */   isPlainObject: () => (/* binding */ u),
/* harmony export */   isQuote: () => (/* binding */ P),
/* harmony export */   isRegExp: () => (/* binding */ b),
/* harmony export */   isStr: () => (/* binding */ r),
/* harmony export */   isUppercaseLetter: () => (/* binding */ Q),
/* harmony export */   isWhitespaceChar: () => (/* binding */ V),
/* harmony export */   leftDoubleQuote: () => (/* binding */ d),
/* harmony export */   leftSingleQuote: () => (/* binding */ a),
/* harmony export */   multiplicationSign: () => (/* binding */ L),
/* harmony export */   omit: () => (/* binding */ st),
/* harmony export */   pullAll: () => (/* binding */ z),
/* harmony export */   punctuationChars: () => (/* binding */ D),
/* harmony export */   rawMDash: () => (/* binding */ O),
/* harmony export */   rawNDash: () => (/* binding */ S),
/* harmony export */   rawNbsp: () => (/* binding */ C),
/* harmony export */   rawReplacementMark: () => (/* binding */ R),
/* harmony export */   removeTrailingSlash: () => (/* binding */ B),
/* harmony export */   resolveEolSetting: () => (/* binding */ Y),
/* harmony export */   rightDoubleQuote: () => (/* binding */ m),
/* harmony export */   rightSingleQuote: () => (/* binding */ f),
/* harmony export */   singlePrime: () => (/* binding */ E),
/* harmony export */   stringSplice: () => (/* binding */ K),
/* harmony export */   thinSpace: () => (/* binding */ j),
/* harmony export */   uniq: () => (/* binding */ X),
/* harmony export */   version: () => (/* binding */ k),
/* harmony export */   voidTags: () => (/* binding */ et)
/* harmony export */ });
/* harmony import */ var rfdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfdc */ "./node_modules/rfdc/index.js");
/**
 * @name codsen-utils
 * @fileoverview Various utility functions
 * @version 1.6.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/codsen-utils/}
 */

var s="1.6.4";var l=rfdc__WEBPACK_IMPORTED_MODULE_0__(),k=s,a="\u2018",f="\u2019",d="\u201C",m="\u201D",S="\u2013",O="\u2014",C="\xA0",N="\u2026",A="\u200A",j="\u2009",E="\u2032",T="\u2033",J="\\",R="\uFFFD",$="`",L="\xD7",D=[".",",",";","!","?"];function U(t){return r(t)&&t.charCodeAt(0)>=48&&t.charCodeAt(0)<=57}function x(t){return r(t)&&"\u060B$\u20BC\u17DB\xA5\u20A1\u20B1\xA3\u20AC\xA2\u20B9\uFDFC\u20AA\u20A9\u20AD\u20A8\u20AE\u20A6\u20BD\u20AB\u0E3F\u20A9\u20BA\u20B4".includes(t)}function F(t){let e=new Set(["$U","$b","B/.","BZ$","Br","Bs","C$","CHF","Ft","Gs","J$","KM","K\u010D","L","MT","NT$","P","Q","R","R$","RD$","RM","Rp","S","S/.","TT$","Z$","kn","kr","lei","z\u0142","\u0192","\u0414\u0438\u043D.","\u0434\u0435\u043D","\u043B\u0432","\u062F.\u0625","Lek"]);return r(t)&&!!t.trim()&&(x(t)||e.has(t))}function i(t){return r(t)&&t.length===1&&t.toUpperCase()!==t.toLowerCase()}function I(t){return!!(t&&r(t)&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123))}function P(t){return r(t)&&(t==='"'||t==="'"||t===a||t===f||t===d||t===m)}function M(t){return!r(t)||!i(t)?!1:t===t.toLowerCase()&&t!==t.toUpperCase()}function Q(t){return!r(t)||!i(t)?!1:t===t.toUpperCase()&&t!==t.toLowerCase()}function V(t){return!r(t)||!t?!1:!t[0].trim()}var B=t=>r(t)&&t.length&&t.endsWith("/")?t.slice(0,-1).trim():t;function u(t){if(t==null||typeof t!="object")return!1;let e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null?!1:!(Symbol.iterator in t)&&!(Symbol.toStringTag in t)}function K(t="",e=0,n=0,o=""){return e<0&&(e+=t.length,e<0&&(e=0)),t.slice(0,e)+(o||"")+t.slice(e+n)}function r(t){return typeof t=="string"}function W(t){return Number.isFinite(t)}function q(t){return Number.isSafeInteger(t)&&t>=0}function H(t){return typeof t=="boolean"}function Z(t){return t===null}function b(t){return t instanceof RegExp}function _(t,e){if(!r(t)||!r(e))return[];let n=[],o=-1;for(;(o=t.indexOf(e,o+1))>=0;)n.push(o);return n}function z(t=[],e=[]){return!t||!Array.isArray(t)||!t.length?[]:!e||!Array.isArray(e)||!e.length?t:t.filter(n=>!e.includes(n))}function G(t){return t!=null}function X(t){return[...new Set(t)]}function g(t){if(!(typeof t!="string"||!t)){if(t.includes(`\r
`))return`\r
`;if(t.includes(`
`))return`
`;if(t.includes("\r"))return"\r"}}function Y(t,e,n=`
`){if(![`\r
`,"\r",`
`].includes(n))throw new Error(`codsen-utils/resolveEolSetting(): the input argument defaultEolChar should be one of EOL values: "\\n", "\\r", or "\\r\\n", but it was given as ${JSON.stringify(n,null,0)}`);return e==="crlf"?`\r
`:e==="cr"?"\r":e==="lf"?`
`:g(t)||n}function v(t,e){return u(t)&&r(e)&&e in t}function tt(t,e){return t.localeCompare(e)}var et=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],nt=new Set(["a","abbr","acronym","audio","b","bdi","bdo","big","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","label","map","mark","meter","noscript","object","output","picture","progress","q","ruby","s","samp","script","select","slot","small","span","strong","sub","sup","svg","template","textarea","time","u","tt","var","video","wbr"]);function rt(t,e){return!Array.isArray(t)||!t.length?!1:t.some(n=>b(n)&&e.match(n)||typeof n=="string"&&e===n)}function ot(t=[],e=[]){return!t||!e?[]:Array.from(new Set(Array.from(t).filter(n=>new Set(e).has(n))))}function st(t,e=[]){if(!t)return t;if(!u(t))throw new Error(`codsen-utils/omit(): [THROW_ID_01] Input must be a plain object! It was given as ${JSON.stringify(t,null,4)} (typeof is "${typeof t}")`);let n=l(t);return e.forEach(o=>{delete n[o]}),n}


/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/ranges-apply/dist/ranges-apply.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/ranges-apply/dist/ranges-apply.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rApply: () => (/* binding */ _),
/* harmony export */   version: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var ranges_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ranges-merge */ "./node_modules/ranges-merge/dist/ranges-merge.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 7.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */

var m="7.0.16";var T=m;function _(s,n,r){let t=0,p=0;if(arguments.length===0)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(typeof s!="string")throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof s}, equal to: ${JSON.stringify(s,null,4)}`);if(n&&!Array.isArray(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(r&&typeof r!="function")throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!n?.filter(e=>e).length)return s;let i;Array.isArray(n)&&Number.isInteger(n[0])&&Number.isInteger(n[1])?i=[Array.from(n)]:i=Array.from(n);let f=i.length,c=0;i.filter(e=>e).forEach((e,a)=>{if(r&&(t=Math.floor(c/f*10),t!==p&&(p=t,r(t))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);i[a][0]=+i[a][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);i[a][1]=+i[a][1]}c+=1});let o=(0,ranges_merge__WEBPACK_IMPORTED_MODULE_0__.rMerge)(i,{progressFn:e=>{r&&(t=10+Math.floor(e/10),t!==p&&(p=t,r(t)))}});(0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(o);let u=o.length;if(u>0){let e=s.slice(o[u-1][1]);s=o.reduce((a,$,l,y)=>{r&&(t=20+Math.floor(l/u*80),t!==p&&(p=t,r(t)));let g=l===0?0:y[l-1][1],d=y[l][0];return`${a}${s.slice(g,d)}${y[l][2]||""}`},""),s+=e}return s}


/***/ }),

/***/ "./node_modules/ranges-merge/dist/ranges-merge.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/ranges-merge/dist/ranges-merge.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaults: () => (/* binding */ d),
/* harmony export */   rMerge: () => (/* binding */ b),
/* harmony export */   version: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var ranges_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ranges-sort */ "./node_modules/ranges-sort/dist/ranges-sort.esm.js");
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 9.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */

var u="9.0.15";var y=u,d={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function b(i,r){function l(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}if(!Array.isArray(i)||!i.length)return null;let n;if(r)if(l(r)){if(n={...d,...r},n.progressFn&&l(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&typeof n.progressFn!="function")throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(![1,2,"1","2"].includes(n.mergeType))throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if(typeof n.joinRangesThatTouchEdges!="boolean")throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(r,null,4)} (type ${typeof r})`);else n={...d};let g=i.filter(e=>Array.isArray(e)).map(e=>[...e]).filter(e=>e[2]!==void 0||e[0]!==e[1]),s,o,t;n.progressFn?s=(0,ranges_sort__WEBPACK_IMPORTED_MODULE_0__.rSort)(g,{progressFn:e=>{t=Math.floor(e/5),t!==o&&(o=t,n.progressFn(t))}}):s=(0,ranges_sort__WEBPACK_IMPORTED_MODULE_0__.rSort)(g);let a=s.length-1;for(let e=a;e>0;e--)n.progressFn&&(t=Math.floor((1-e/a)*78)+21,t!==o&&t>o&&(o=t,n.progressFn(t))),(s[e][0]<=s[e-1][0]||!n.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||n.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),s[e][2]!==void 0&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&s[e-1][2]!==null&&(s[e][2]===null&&s[e-1][2]!==null?s[e-1][2]=null:s[e-1][2]!=null?+n.mergeType==2&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s.length?s:null}


/***/ }),

/***/ "./node_modules/ranges-push/dist/ranges-push.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/ranges-push/dist/ranges-push.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ranges: () => (/* binding */ y),
/* harmony export */   defaults: () => (/* binding */ R),
/* harmony export */   version: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var string_collapse_leading_whitespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-collapse-leading-whitespace */ "./node_modules/string-collapse-leading-whitespace/dist/string-collapse-leading-whitespace.esm.js");
/* harmony import */ var codsen_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codsen-utils */ "./node_modules/codsen-utils/dist/codsen-utils.esm.js");
/* harmony import */ var ranges_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ranges-sort */ "./node_modules/ranges-sort/dist/ranges-sort.esm.js");
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 7.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */

var d="7.0.15";var f={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function $(p,t){function r(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}if(!Array.isArray(p)||!p.length)return null;let s;if(t)if(r(t)){if(s={...f,...t},s.progressFn&&r(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&typeof s.progressFn!="function")throw new Error(`ranges-merge: [THROW_ID_01] resolvedOpts.progressFn must be a function! It was given of a type: "${typeof s.progressFn}", equal to ${JSON.stringify(s.progressFn,null,4)}`);if(![1,2,"1","2"].includes(s.mergeType))throw new Error(`ranges-merge: [THROW_ID_02] resolvedOpts.mergeType was customised to a wrong thing! It was given of a type: "${typeof s.mergeType}", equal to ${JSON.stringify(s.mergeType,null,4)}`);if(typeof s.joinRangesThatTouchEdges!="boolean")throw new Error(`ranges-merge: [THROW_ID_04] resolvedOpts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof s.joinRangesThatTouchEdges}", equal to ${JSON.stringify(s.joinRangesThatTouchEdges,null,4)}`)}else throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:
${JSON.stringify(t,null,4)} (type ${typeof t})`);else s={...f};let i=p.filter(e=>Array.isArray(e)).map(e=>[...e]).filter(e=>e[2]!==void 0||e[0]!==e[1]),n,o,l;s.progressFn?n=(0,ranges_sort__WEBPACK_IMPORTED_MODULE_2__.rSort)(i,{progressFn:e=>{l=Math.floor(e/5),l!==o&&(o=l,s.progressFn(l))}}):n=(0,ranges_sort__WEBPACK_IMPORTED_MODULE_2__.rSort)(i);let h=n.length-1;for(let e=h;e>0;e--)s.progressFn&&(l=Math.floor((1-e/h)*78)+21,l!==o&&l>o&&(o=l,s.progressFn(l))),(n[e][0]<=n[e-1][0]||!s.joinRangesThatTouchEdges&&n[e][0]<n[e-1][1]||s.joinRangesThatTouchEdges&&n[e][0]<=n[e-1][1])&&(n[e-1][0]=Math.min(n[e][0],n[e-1][0]),n[e-1][1]=Math.max(n[e][1],n[e-1][1]),n[e][2]!==void 0&&(n[e-1][0]>=n[e][0]||n[e-1][1]<=n[e][1])&&n[e-1][2]!==null&&(n[e][2]===null&&n[e-1][2]!==null?n[e-1][2]=null:n[e-1][2]!=null?+s.mergeType==2&&n[e-1][0]===n[e][0]?n[e-1][2]=n[e][2]:n[e-1][2]+=n[e][2]:n[e-1][2]=n[e][2]),n.splice(e,1),e=n.length);return n.length?n:null}var v=d,R={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},y=class{constructor(t){let r={...R,...t};if(r.mergeType&&r.mergeType!==1&&r.mergeType!==2)if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isStr)(r.mergeType)&&r.mergeType.trim()==="1")r.mergeType=1;else if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isStr)(r.mergeType)&&r.mergeType.trim()==="2")r.mergeType=2;else throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);this.opts=r,this.ranges=[]}ranges;opts;add(t,r,s){if(t==null&&r==null)return;if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(t)&&!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(r)){if(Array.isArray(t)){if(t.length){if(t.some(o=>Array.isArray(o))){t.forEach(o=>{Array.isArray(o)&&this.add(...o)});return}t.length&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(+t[0])&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(+t[1])&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}else if(!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(t)&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);let i=+t,n=+r;if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(s)&&(s=String(s)),(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(i)&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(n)){if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(s)&&!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isStr)(s)&&!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(s))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof s}, equal to:
${JSON.stringify(s,null,4)}`);if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(this.ranges)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=n,this.last()[2],this.last()[2]!==null&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(s)){let o=this.last()[2]&&this.last()[2].length&&(!this.opts?.mergeType||this.opts.mergeType===1)?`${this.last()[2]}${s}`:s;this.opts.limitToBeAddedWhitespace&&(o=(0,string_collapse_leading_whitespace__WEBPACK_IMPORTED_MODULE_0__.collWhitespace)(o,this.opts.limitLinebreaksCount)),(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isStr)(o)&&!o.length||(this.last()[2]=o)}}else{this.ranges||(this.ranges=[]);let o=s!==void 0&&!((0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isStr)(s)&&!s.length)?[i,n,s&&this.opts.limitToBeAddedWhitespace?(0,string_collapse_leading_whitespace__WEBPACK_IMPORTED_MODULE_0__.collWhitespace)(s,this.opts.limitLinebreaksCount):s]:[i,n];this.ranges.push(o)}}else throw (0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(i)&&i>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`)}push(t,r,s){this.add(t,r,s)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=$(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map(t=>(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.existy)(t[2])?[t[0],t[1],(0,string_collapse_leading_whitespace__WEBPACK_IMPORTED_MODULE_0__.collWhitespace)(t[2],this.opts.limitLinebreaksCount)]:t):this.ranges):null}wipe(){this.ranges=[]}replace(t){if(Array.isArray(t)&&t.length)if(Array.isArray(t[0])&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_1__.isInt)(t[0][0]))this.ranges=Array.from(t);else throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}};


/***/ }),

/***/ "./node_modules/ranges-sort/dist/ranges-sort.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/ranges-sort/dist/ranges-sort.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaults: () => (/* binding */ d),
/* harmony export */   rSort: () => (/* binding */ g),
/* harmony export */   version: () => (/* binding */ y)
/* harmony export */ });
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 6.0.11
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */

var l="6.0.11";var y=l,d={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function g(t,u){if(!Array.isArray(t)||!t.length)return t;let n={...d,...u},s,o;if(n.strictlyTwoElementsInRangeArrays&&!t.every((e,r)=>!Array.isArray(e)||e.length!==2?(s=r,o=e.length,!1):!0))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(t[s],null,4)}) has not two but ${o} elements!`);if(!t.every((e,r)=>!Array.isArray(e)||!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0?(s=r,!1):!0))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(t[s],null,4)}) does not consist of only natural numbers!`);let p=t.length**2,i=0;return Array.from(t).sort((e,r)=>(n.progressFn&&(i+=1,n.progressFn(Math.floor(i*100/p))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}


/***/ }),

/***/ "./node_modules/string-collapse-leading-whitespace/dist/string-collapse-leading-whitespace.esm.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/string-collapse-leading-whitespace/dist/string-collapse-leading-whitespace.esm.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collWhitespace: () => (/* binding */ D),
/* harmony export */   version: () => (/* binding */ E)
/* harmony export */ });
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 7.0.7
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */

var a="7.0.7";var E=a;function D(n,u=1){let $="\xA0";function g(e){return Array.from(e).reverse().join("")}function p(e,s,r){let t=r?`
`:"\r",i=r?"\r":`
`;if(!e)return e;let m=0,c=0,o="";for(let l=0,f=e.length;l<f;l++)(e[l]===t||e[l]===i&&e[l-1]!==t)&&c++,`\r
`.includes(e[l])||e[l]===$?(m=0,e[l]===$?o+=e[l]:e[l]===t?c<=s&&(o+=e[l],e[l+1]===i&&(o+=e[l+1],l++)):e[l]===i&&e?.[l-1]!==t&&c<=s&&(o+=e[l])):(m++,!e[l+1]&&!c&&(o+=" "));return o}if(typeof n=="string"&&n.length){let e=1;typeof+u=="number"&&Number.isInteger(+u)&&+u>=0&&(e=+u);let s="",r="";if(!n.trim())s=n;else if(!n[0].trim()){for(let t=0,i=n.length;t<i;t++)if(n[t].trim()){s=n.slice(0,t);break}}if(n.trim()&&(n.slice(-1).trim()===""||n.slice(-1)===$)){for(let t=n.length;t--;)if(n[t].trim()){r=n.slice(t+1);break}}return`${p(s,e,!1)}${n.trim()}${g(p(g(r),e,!0))}`}return n}


/***/ }),

/***/ "./node_modules/string-left-right/dist/string-left-right.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/string-left-right/dist/string-left-right.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chompLeft: () => (/* binding */ H),
/* harmony export */   chompRight: () => (/* binding */ P),
/* harmony export */   left: () => (/* binding */ y),
/* harmony export */   leftSeq: () => (/* binding */ L),
/* harmony export */   leftStopAtNewLines: () => (/* binding */ W),
/* harmony export */   leftStopAtRawNbsp: () => (/* binding */ _),
/* harmony export */   right: () => (/* binding */ E),
/* harmony export */   rightSeq: () => (/* binding */ A),
/* harmony export */   rightStopAtNewLines: () => (/* binding */ k),
/* harmony export */   rightStopAtRawNbsp: () => (/* binding */ M),
/* harmony export */   version: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var codsen_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codsen-utils */ "./node_modules/codsen-utils/dist/codsen-utils.esm.js");
/* harmony import */ var rfdc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rfdc */ "./node_modules/rfdc/index.js");
/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 6.0.17
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */

var S="6.0.17";var $=rfdc__WEBPACK_IMPORTED_MODULE_1__(),j=S,c="\xA0";function J(n){let e={value:n,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,~-e.value.length),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,~-e.value.length),e.hungry=!0),e}function D({str:n,idx:e=0,stopAtNewlines:l=!1,stopAtRawNbsp:o=!1}){if(typeof n!="string"||!n.length||((!e||typeof e!="number")&&(e=0),!n[e+1]))return null;if(n[e+1]&&(n[e+1].trim()||l&&`
\r`.includes(n[e+1])||o&&n[e+1]===c))return e+1;if(n[e+2]&&(n[e+2].trim()||l&&`
\r`.includes(n[e+2])||o&&n[e+2]===c))return e+2;for(let t=e+1,m=n.length;t<m;t++)if(n[t].trim()||l&&`
\r`.includes(n[t])||o&&n[t]===c)return t;return null}function E(n,e=0){return D({str:n,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function k(n,e){return D({str:n,idx:e,stopAtNewlines:!0,stopAtRawNbsp:!1})}function M(n,e){return D({str:n,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!0})}function V({str:n,idx:e,stopAtNewlines:l,stopAtRawNbsp:o}){if(typeof n!="string"||!n.length||((!e||typeof e!="number")&&(e=0),e<1))return null;if(n[~-e]&&(n[~-e].trim()||l&&`
\r`.includes(n[~-e])||o&&n[~-e]===c))return~-e;if(n[e-2]&&(n[e-2].trim()||l&&`
\r`.includes(n[e-2])||o&&n[e-2]===c))return e-2;for(let t=e;t--;)if(n[t]&&(n[t].trim()||l&&`
\r`.includes(n[t])||o&&n[t]===c))return t;return null}function y(n,e=0){return V({str:n,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function W(n,e){return V({str:n,idx:e,stopAtNewlines:!0,stopAtRawNbsp:!1})}function _(n,e){return V({str:n,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!0})}function O(n,e,l,o,t){if(typeof e!="string"||!e.length||(typeof l!="number"&&(l=0),n==="right"&&!e[l+1]||n==="left"&&!e[~-l]))return null;let m=l,u=[],f,i,s,r=0;for(;r<t.length;){if(!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isStr)(t[r])||!t[r].length){r+=1;continue}let{value:a,optional:w,hungry:T}=J(t[r]),g=n==="right"?E(e,m):y(e,m);if(o.i&&e[g].toLowerCase()===a.toLowerCase()||!o.i&&e[g]===a){let N=n==="right"?E(e,g):y(e,g);T&&(o.i&&e[N].toLowerCase()===a.toLowerCase()||!o.i&&e[N]===a)?s=!0:r+=1,typeof g=="number"&&n==="right"&&g>m+1?u.push([m+1,g]):n==="left"&&typeof g=="number"&&g<~-m&&u.unshift([g+1,m]),m=g,n==="right"?(f===void 0&&(f=g),i=g):(i===void 0&&(i=g),f=g)}else if(w){r+=1;continue}else if(s){r+=1,s=void 0;continue}else return null}return f===void 0||i===void 0?null:{gaps:u,leftmostChar:f,rightmostChar:i}}var d={i:!1};function L(n,e,...l){if(!l?.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");let o;return (0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(l[0])?o={...d,...l.shift()}:o=d,O("left",n,e,o,Array.from(l).reverse())}function A(n,e,...l){if(!l?.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");let o;return (0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(l[0])?o={...d,...l.shift()}:o=d,O("right",n,e,o,l)}function h(n,e,l,o,t=[]){if(typeof e!="string"||!e.length||((!l||typeof l!="number")&&(l=0),n==="right"&&!e[l+1]||n==="left"&&+l==0))return null;let m=null,u=null;do m=n==="right"?A(e,typeof u=="number"?u:l,...t):L(e,typeof u=="number"?u:l,...t),m!==null&&(u=n==="right"?m.rightmostChar:m.leftmostChar);while(m);if(u!=null&&n==="right"&&(u+=1),u===null)return null;if(n==="right"){if(e[u]?.trim())return u;let i=E(e,u);if(!o||o.mode===0){if(i===u+1)return u;if(e.slice(u,i||e.length).trim()||e.slice(u,i||e.length).includes(`
`)||e.slice(u,i||e.length).includes("\r")){for(let s=u,r=e.length;s<r;s++)if(`
\r`.includes(e[s]))return s}else return i?~-i:e.length}else{if(o.mode===1)return u;if(o.mode===2){let s=e.slice(u);if(s.trim()||s.includes(`
`)||s.includes("\r")){for(let r=u,a=e.length;r<a;r++)if(e[r].trim()||`
\r`.includes(e[r]))return r}return e.length}}return i||e.length}if(e[u]&&e[~-u]?.trim())return u;let f=y(e,u);if(!o||o.mode===0){if(f===u-2)return u;if(e.slice(0,u).trim()||e.slice(0,u).includes(`
`)||e.slice(0,u).includes("\r")){for(let i=u;i--;)if(`
\r`.includes(e[i])||e[i].trim())return i+1+(e[i].trim()?1:0)}return 0}if(o.mode===1)return u;if(o.mode===2){let i=e.slice(0,u);if(i.trim()||i.includes(`
`)||i.includes("\r")){for(let s=u;s--;)if(e[s].trim()||`
\r`.includes(e[s]))return s+1}return 0}return f!==null?f+1:0}function H(n,e,...l){if(!l.length||l.length===1&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(l[0]))return null;let o={mode:0};if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(l[0])){let t={...o,...$(l[0])};if(!t.mode)t.mode=0;else if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isStr)(t.mode)&&t.mode.length===1&&"0123".includes(t.mode))t.mode=+t.mode;else if(!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isInt)(t.mode))throw new Error(`string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${t.mode} (type ${typeof t.mode})`);return h("left",n,e,t,$(l).slice(1))}return (0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isStr)(l[0])?h("left",n,e,o,$(l)):h("left",n,e,o,$(l).slice(1))}function P(n,e,...l){if(!l.length||l.length===1&&(0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(l[0]))return null;let o={mode:0};if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(l[0])){let t={...o,...$(l[0])};if(!t.mode)t.mode=0;else if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isStr)(t.mode)&&"0123".includes(t.mode))t.mode=Number.parseInt(t.mode,10);else if(!(0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isInt)(t.mode))throw new Error(`string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${t.mode} (type ${typeof t.mode})`);return h("right",n,e,t,$(l).slice(1))}return (0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isStr)(l[0])?h("right",n,e,o,$(l)):h("right",n,e,o,$(l).slice(1))}


/***/ }),

/***/ "./node_modules/string-strip-html/dist/string-strip-html.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/string-strip-html/dist/string-strip-html.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaults: () => (/* binding */ ae),
/* harmony export */   stripHtml: () => (/* binding */ fe),
/* harmony export */   version: () => (/* binding */ Ne)
/* harmony export */ });
/* harmony import */ var codsen_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codsen-utils */ "./node_modules/codsen-utils/dist/codsen-utils.esm.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var ranges_apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ranges-apply */ "./node_modules/ranges-apply/dist/ranges-apply.esm.js");
/* harmony import */ var ranges_push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ranges-push */ "./node_modules/ranges-push/dist/ranges-push.esm.js");
/* harmony import */ var string_left_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! string-left-right */ "./node_modules/string-left-right/dist/string-left-right.esm.js");
/**
 * @name string-strip-html
 * @fileoverview Strip HTML tags from strings. No parser, accepts mixed sources.
 * @version 13.4.8
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-strip-html/}
 */

function ee(t){return/[-_A-Za-z0-9]/.test(t)}function G(t,m){if(!t)return[];if(Array.isArray(t))return t.filter(y=>typeof y=="string"&&y.trim());if(typeof t=="string")return t.trim()?[t]:[];throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_05] ${m} must be array containing zero or more strings or something falsey. Currently it's equal to: ${t}, that a type of ${typeof t}.`)}function j(t,m,y,c){for(let f=m,b=t.length;f<b;f++){if(t.startsWith(y,f))return!0;if(t.startsWith(c,f))return!1}return!1}function Y(t,m,y){let c=!t?.quotes,f=!!t?.quotes?.value&&!j(m,y+1,t.quotes.value,">"),b=t?.quotes?.next!==-1,$=!j(m,t?.quotes?.next-1,t?.quotes?.value,">");return!t?.quotes||!j(m,y+1,t.quotes.value,">")&&t?.quotes?.next!==-1&&j(m,t?.quotes?.next-1,t?.quotes?.value,">")}function ne(t,m){return(m.match(new RegExp(t,"g"))||[]).length}var P=new Set(["!doctype","abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"]),x=new Set(["a","b","i","p","q","s","u"]),q=new Set([".",",",";","!","?"]),Q=new Set([".",",","?",";",")","\u2026",'"',"\xBB"]),te=new Set(["a","abbr","acronym","audio","b","bdi","bdo","big","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","input","ins","kbd","label","map","mark","meter","noscript","object","output","picture","progress","q","ruby","s","samp","select","slot","small","span","strong","sub","sup","svg","template","textarea","time","u","tt","var","video","wbr"]);var le="13.4.8";var Ne=le,ae={ignoreTags:[],ignoreTagsWithTheirContents:[],onlyStripTags:[],stripTogetherWithTheirContents:["script","style","xml"],skipHtmlDecoding:!1,trimOnlySpaces:!1,stripRecognisedHTMLOnly:!1,dumpLinkHrefsNearby:{enabled:!1,putOnNewLine:!1,wrapHeads:"",wrapTails:""},ignoreIndentations:!1,cb:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function fe(t,m){let y=Date.now(),c=[],f=[],b=[],$=[],n={};function re(){n={attributes:[]}}re();let V=null,w=null,N=null,J=!1,o={},d={tagName:"",hrefValue:"",openingTagEnds:void 0},E="",C=!1,B=null,F=!0;function v(e,s,a){if(Array.isArray(s.stripTogetherWithTheirContents)&&(s.stripTogetherWithTheirContents.includes(n.name)||s.stripTogetherWithTheirContents.includes("*")))if(n.slashPresent&&Array.isArray(c)&&c.some(i=>i.name===n.name)){for(let i=c.length;i--;)if(c[i].name===n.name){$=$.filter(([u,p])=>(u<c[i].lastOpeningBracketAt||u>=e+1)&&(p<=c[i].lastOpeningBracketAt||p>e+1));let g=e+1;n.lastClosingBracketAt&&(g=n.lastClosingBracketAt+1),$.push([c[i].lastOpeningBracketAt,g]),Q.has(t[e])&&s.cb?s.cb({tag:n,deleteFrom:c[i].lastOpeningBracketAt,deleteTo:e+1,insert:null,rangesArr:a,proposedReturn:[c[i].lastOpeningBracketAt,e,null]}):s.cb&&s.cb({tag:n,deleteFrom:c[i].lastOpeningBracketAt,deleteTo:e,insert:"",rangesArr:a,proposedReturn:[c[i].lastOpeningBracketAt,e,""]}),c.splice(i,1);break}}else n.slashPresent||c.push(n);else Array.isArray(s.ignoreTagsWithTheirContents)&&M(e,s,n)&&(F=!1)}function L(e,s,a,i,g,u){if(Array.isArray(r.current())&&typeof a=="number"&&r.current()[0][0]===0&&r.current()[0][1]>=a)return"";if(t.length===i&&u&&!l?.dumpLinkHrefsNearby?.enabled)return null;let p="";if(Number.isInteger(a)&&a<g&&(p+=e.slice(a,g)),Number.isInteger(i)&&i>u+1){let D=e.slice(u+1,i);i&&!(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,i-1)&&(D=D.trimEnd()),D.includes(`
`)&&S(i,e)?p+=" ":p+=D}let W=!Q.has(e[s]),Z=e[i-1]!==">"||!e[a].trim(),X=!['"',"("].includes(e[g-1]),ge=![";",".",":","!"].includes(e[s]);if((W||Z&&X&&ge)&&(Z||X)&&e[s]!=="!"&&(!te.has(n.name)||typeof a=="number"&&a<g||typeof i=="number"&&i>u+1)){let D=p.match(/\n/g);return Array.isArray(D)&&D.length?D.length===1?`
`:D.length===2?`

`:`


`:" "}return""}function U(e,s){if(e.dumpLinkHrefsNearby?.enabled&&d.tagName&&d.tagName===n.name&&n.lastOpeningBracketAt&&(d.openingTagEnds&&n.lastOpeningBracketAt>d.openingTagEnds||!d.openingTagEnds)&&(C=!0),C){let a=e.dumpLinkHrefsNearby?.putOnNewLine?`

`:"";E=`${a}${d.hrefValue}`,(typeof s!="number"||(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,s-1))&&(E+=a)}}function S(e,s){return s?s[e]==="<"&&s[e+1]!=="%":t[e]==="<"&&t[e+1]!=="%"}function A(e){return t[e]===">"&&t[e-1]!=="%"}function M(e,s,a){if(s.ignoreTagsWithTheirContents.includes("*"))return!0;let i=t.indexOf(`<${a.name}`,e),g=t.indexOf(`</${a.name}`,e);return!a.slashPresent&&g===-1||a.slashPresent&&!f.some(u=>u.name===a.name)||g>-1&&i>-1&&i<g?!1:s.ignoreTagsWithTheirContents.includes(a.name)}if(typeof t!="string")throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ${(typeof t).toLowerCase()}, equal to:
${JSON.stringify(t,null,4)}`);if(m)if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(m)){if(m.reportProgressFunc&&typeof m.reportProgressFunc!="function")throw new Error(`string-strip-html/stripHtml(): [THROW_ID_03] The Optional Options Object's key reportProgressFunc, callback function, should be a function but it was given as type ${typeof m.reportProgressFunc}, equal to ${JSON.stringify(m.reportProgressFunc,null,4)}`);if(typeof m.dumpLinkHrefsNearby=="boolean"&&m.dumpLinkHrefsNearby!=null)throw new Error(`string-strip-html/stripHtml(): [THROW_ID_04] The Optional Options Object's key should be a plain object but it was given as type ${typeof m.dumpLinkHrefsNearby}, equal to ${JSON.stringify(m.dumpLinkHrefsNearby,null,4)}`)}else throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ${(typeof m).toLowerCase()}, equal to:
${JSON.stringify(m,null,4)}`);function _(){C&&(d={tagName:"",hrefValue:"",openingTagEnds:void 0},C=!1)}let l={...ae,...m,dumpLinkHrefsNearby:Object.assign({},ae.dumpLinkHrefsNearby,m?.dumpLinkHrefsNearby)};if((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.hasOwnProp)(l,"returnRangesOnly"))throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_05] The Optional Options Object's key returnRangesOnly has been removed from the API since v.5 release.");if(l.reportProgressFunc){if(typeof l.reportProgressFuncFrom!="number")throw new Error(`string-strip-html/stripHtml(): [THROW_ID_06] The Optional Options Object's key reportProgressFuncFrom, callback function's "from" range, should be a number but it was given as type ${typeof l.reportProgressFuncFrom}, equal to ${JSON.stringify(l.reportProgressFuncFrom,null,4)}`);if(typeof l.reportProgressFuncTo!="number")throw new Error(`string-strip-html/stripHtml(): [THROW_ID_07] The Optional Options Object's key reportProgressFuncTo, callback function's "to" range, should be a number but it was given as type ${typeof l.reportProgressFuncTo}, equal to ${JSON.stringify(l.reportProgressFuncTo,null,4)}`)}l.ignoreTags=G(l.ignoreTags,"resolvedOpts.ignoreTags"),l.onlyStripTags=G(l.onlyStripTags,"resolvedOpts.onlyStripTags");let z=!!l.onlyStripTags.length;l.onlyStripTags.length&&l.ignoreTags.length&&(l.onlyStripTags=(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.without)(l.onlyStripTags,...l.ignoreTags)),l.stripTogetherWithTheirContents?typeof l.stripTogetherWithTheirContents=="string"&&l.stripTogetherWithTheirContents.length&&(l.stripTogetherWithTheirContents=[l.stripTogetherWithTheirContents]):l.stripTogetherWithTheirContents=[];let I={};if(l.stripTogetherWithTheirContents&&Array.isArray(l.stripTogetherWithTheirContents)&&l.stripTogetherWithTheirContents.length&&!l.stripTogetherWithTheirContents.every((e,s)=>typeof e!="string"?(I.el=e,I.i=s,!1):!0))throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_08] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ${I.i} has a value ${I.el} which is not string but ${(typeof I.el).toLowerCase()}.`);l.cb||(l.cb=({rangesArr:e,proposedReturn:s})=>{s&&e.push(...s)});let r=new ranges_push__WEBPACK_IMPORTED_MODULE_3__.Ranges({limitToBeAddedWhitespace:!0,limitLinebreaksCount:2});if(!l.skipHtmlDecoding)for(;t!==(0,html_entities__WEBPACK_IMPORTED_MODULE_5__.decode)(t,{scope:"strict"});)t=(0,html_entities__WEBPACK_IMPORTED_MODULE_5__.decode)(t,{scope:"strict"});let R=!1,k=!1,H=0,K=0,h=t.length,ue=Math.floor(h/2);for(let e=0;e<h;e++){if(l.reportProgressFunc&&(h>1e3&&h<2e3?e===ue&&l.reportProgressFunc(Math.floor((l.reportProgressFuncTo-l.reportProgressFuncFrom)/2)):h>=2e3&&(H=l.reportProgressFuncFrom+Math.floor(e/h*(l.reportProgressFuncTo-l.reportProgressFuncFrom)),H!==K&&(K=H,l.reportProgressFunc(H)))),Object.keys(n).length>1&&n.lastClosingBracketAt&&n.lastClosingBracketAt<e&&t[e]!==" "&&B===null&&(B=e),!R&&t[e]==="%"&&t[e-1]==="{"&&t.includes("%}",e+1)){N=null;let s=t.indexOf("%}",e)-1;if(s>e){e=s;continue}}if(!R&&A(e)&&(!n||Object.keys(n).length<2)&&e>1){for(let s=e;s--;)if(t[s-1]===void 0||A(s)){let a=t[s-1]===void 0?s:s+1,i=t.slice(a,e+1)||"";if((i.includes("/>")||i.includes("/ >")||i.includes('="')||i.includes("='"))&&t!==`<${(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.trim)(i.trim(),"/>")}>`&&[...P].some(g=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.trim)(i.trim().split(/\s+/).filter(u=>u.trim()).filter((u,p)=>p===0),"/>").toLowerCase()===g)&&fe(`<${i.trim()}>`,l).result===""){(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([a,e+1]),(!$.length||$[$.length-1][0]!==n.lastOpeningBracketAt)&&$.push([a,e+1]);let g=L(t,e,a,e+1,a,e+1),u=e+1;if(t[u]&&!t[u].trim()){for(let p=u;p<h;p++)if(t[p].trim()){u=p;break}}l.cb({tag:n,deleteFrom:a,deleteTo:u,insert:g,rangesArr:r,proposedReturn:[a,u,g]})}break}}if(!k&&t[e]==="/"&&!n.quotes?.value&&Number.isInteger(n.lastOpeningBracketAt)&&!Number.isInteger(n.lastClosingBracketAt)&&(n.slashPresent=e),t[e]==='"'||t[e]==="'")if(!k&&n.nameStarts&&n?.quotes?.value===t[e])if(o.valueStarts===void 0)o={},delete n.quotes;else{o.valueEnds=e,o.value=t.slice(o.valueStarts,e),n.attributes.push(o),o={},delete n.quotes;let s;l.dumpLinkHrefsNearby?.enabled&&!c.length&&n.attributes.some(a=>{if(typeof a.name=="string"&&a.name.toLowerCase()==="href")return s=`${l.dumpLinkHrefsNearby?.wrapHeads||""}${a.value}${l.dumpLinkHrefsNearby?.wrapTails||""}`,!0})&&(d={tagName:n.name,hrefValue:s,openingTagEnds:void 0})}else!k&&!n.quotes&&n.nameStarts&&(n.quotes={},n.quotes.value=t[e],n.quotes.start=e,n.quotes.next=t.indexOf(t[e],e+1),o.nameStarts&&o.nameEnds&&o.nameEnds<e&&o.nameStarts<e&&!o.valueStarts&&(o.name=t.slice(o.nameStarts,o.nameEnds)));if(n.nameStarts!==void 0&&n.nameEnds===void 0&&(!t[e].trim()||!ee(t[e]))){if(n.nameEnds=e,n.name=t.slice(n.nameStarts,n.nameEnds+(!A(e)&&t[e]!=="/"&&t[e+1]===void 0?1:0)),t[n.nameStarts-1]!=="!"&&!n.name.replace(/-/g,"").length||/^\d+$/.test(n.name[0])){n={};continue}if(typeof n.name=="string"&&n.name.toLowerCase()==="doctype"&&(k=!0),S(e)){U(l);let s=L(t,e,n.leftOuterWhitespace,e,n.lastOpeningBracketAt,e);(l.stripTogetherWithTheirContents.includes(n.name)||l.stripTogetherWithTheirContents.includes("*"))&&($=$.filter(([a,i])=>!(a===n.leftOuterWhitespace&&i===e))),l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:e,insert:`${s}${E}${s}`,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,e,`${s}${E}${s}`]}),_(),v(e,l,r)}}if(n.quotes?.start&&n.quotes.start<e&&!n.quotes.end&&o.nameEnds&&o.equalsAt&&!o.valueStarts&&(o.valueStarts=e),!n.quotes&&o.nameEnds&&t[e]==="="&&!o.valueStarts&&!o.equalsAt&&(o.equalsAt=e),!n.quotes&&o.nameStarts&&o.nameEnds&&!o.valueStarts&&t[e].trim()&&t[e]!=="="&&(n.attributes.push(o),o={}),!n.quotes&&o.nameStarts&&!o.nameEnds&&(k&&`'"`.includes(t[o.nameStarts])?o.nameStarts<e&&t[e]===t[o.nameStarts]&&(o.nameEnds=e+1,o.name=t.slice(o.nameStarts,o.nameEnds)):t[e].trim()?t[e]==="="?o.equalsAt||(o.nameEnds=e,o.equalsAt=e,o.name=t.slice(o.nameStarts,o.nameEnds)):t[e]==="/"||A(e)?(o.nameEnds=e,o.name=t.slice(o.nameStarts,o.nameEnds),n.attributes.push(o),o={}):S(e)&&(o.nameEnds=e,o.name=t.slice(o.nameStarts,o.nameEnds),n.attributes.push(o),o={}):(o.nameEnds=e,o.name=t.slice(o.nameStarts,o.nameEnds))),!n.quotes&&n.nameEnds<e&&!t[e-1].trim()&&t[e].trim()&&!"<>/!".includes(t[e])&&!o.nameStarts&&!n.lastClosingBracketAt&&(o.nameStarts=e),n.lastOpeningBracketAt!==null&&n.lastOpeningBracketAt<e&&t[e]==="/"&&n.onlyPlausible&&(n.onlyPlausible=!1),n.lastOpeningBracketAt!==null&&n.lastOpeningBracketAt<e&&t[e]!=="/"&&(n.onlyPlausible===void 0&&((!t[e].trim()||S(e))&&!n.slashPresent?n.onlyPlausible=!0:n.onlyPlausible=!1),t[e].trim()&&n.nameStarts===void 0&&!S(e)&&t[e]!=="/"&&!A(e)&&t[e]!=="!"&&(n.nameStarts=e,n.nameContainsLetters=!1)),n.nameStarts&&!n.quotes&&typeof t[e]=="string"&&t[e].toLowerCase()!==t[e].toUpperCase()&&(n.nameContainsLetters=!0),A(e)&&(Y(n,t,e)||n.quotes.value&&typeof n.lastOpeningBracketAt=="number"&&ne(n.quotes.value,t.slice(n.lastOpeningBracketAt,e))%2===1&&!t.slice(n.lastOpeningBracketAt+1,e).includes("<")&&!t.slice(n.lastOpeningBracketAt+1,e).includes(">"))&&n.lastOpeningBracketAt!==void 0&&(n.lastClosingBracketAt=e,B=null,Object.keys(o).length&&(n.attributes.push(o),o={}),l.dumpLinkHrefsNearby?.enabled&&d.tagName&&!d.openingTagEnds&&(d.openingTagEnds=e)),(!k||t[e]===">")&&n.lastOpeningBracketAt!==void 0){if(n.lastClosingBracketAt===void 0){if(n.lastOpeningBracketAt<e&&!S(e)&&(t[e+1]===void 0||S(e+1)&&!n?.quotes?.value)&&n.nameContainsLetters&&typeof n.nameStarts=="number"){if(n.name=t.slice(n.nameStarts,n.nameEnds||e+1).toLowerCase(),(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([n.lastOpeningBracketAt,e+1]),l.ignoreTags.includes(n.name)||M(e,l,n)||!P.has(n.name)&&(n.onlyPlausible||l.stripRecognisedHTMLOnly)){n={},o={};continue}if((P.has(n.name)||x.has(n.name))&&(n.onlyPlausible===!1||n.onlyPlausible===!0&&n.attributes.length)||t[e+1]===void 0){U(l);let s=L(t,e,n.leftOuterWhitespace,e+1,n.lastOpeningBracketAt,n.lastClosingBracketAt);R&&n.name==="script"&&n.slashPresent&&(R=!1);let a;s===null||E===null?a=null:a=`${s}${E}${s}`,l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:e+1,insert:a,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,e+1,a]}),_(),v(e,l,r)}if(!$.length||$[$.length-1][0]!==n.lastOpeningBracketAt&&$[$.length-1][1]!==e+1)if(l.stripTogetherWithTheirContents.includes(n.name)||l.stripTogetherWithTheirContents.includes("*")){let s;for(let a=c.length;a--;)c[a].name===n.name&&(s=c[a]);s?($=$.filter(([a])=>a!==s.lastOpeningBracketAt),$.push([s.lastOpeningBracketAt,e+1])):$.push([n.lastOpeningBracketAt,e+1])}else $.push([n.lastOpeningBracketAt,e+1])}}else if(e>n.lastClosingBracketAt&&t[e].trim()||t[e+1]===void 0||l.ignoreIndentations&&`\r
`.includes(t[e])){let s=n.lastClosingBracketAt===e?e+1:e;l.trimOnlySpaces&&s===h-1&&B!==null&&B<e&&(s=B),(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([n.lastOpeningBracketAt,n.lastClosingBracketAt+1]);let a=l.ignoreTags.includes(n.name),i=M(e,l,n);if(!F||l.stripRecognisedHTMLOnly&&typeof n.name=="string"&&!P.has(n.name.toLowerCase())&&!x.has(n.name.toLowerCase())||!z&&(a||i)||z&&!l.onlyStripTags.includes(n.name)||l.ignoreTagsWithTheirContents.includes(n.name)){if(i)if(n.slashPresent){for(let g=f.length;g--;)if(f[g].name===n.name){f.splice(g,1);break}f.length||(F=!0)}else F&&(F=!1),f.push(n);l.cb({tag:n,deleteFrom:null,deleteTo:null,insert:null,rangesArr:r,proposedReturn:null}),n={},o={}}else if(!n.onlyPlausible||n.attributes.length===0&&n.name&&(P.has(n.name.toLowerCase())||x.has(n.name.toLowerCase()))||n.attributes?.some(g=>g.equalsAt)){(!$.length||$[$.length-1][0]!==n.lastOpeningBracketAt)&&$.push([n.lastOpeningBracketAt,n.lastClosingBracketAt+1]);let g=L(t,e,n.leftOuterWhitespace,s,n.lastOpeningBracketAt,n.lastClosingBracketAt);E="",C=!1,U(l,s);let u;typeof E=="string"&&E.length?(u=`${g}${E}${g===`

`?`
`:g}`,s===n.lastClosingBracketAt+1&&(!t[s]||!q.has(t[s]))&&(u+=" "),n.leftOuterWhitespace===n.lastOpeningBracketAt&&r.last()&&r.last()[1]<n.lastOpeningBracketAt&&(!l?.dumpLinkHrefsNearby?.putOnNewLine||!q.has(t[s]))&&(u=" "+u)):u=g,u!==null&&(n.leftOuterWhitespace===0||!(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,s-1))&&(!l.dumpLinkHrefsNearby?.enabled||n.name!=="a")&&(u=void 0);let p=0;if(C&&q.has(t[s])){l.dumpLinkHrefsNearby?.putOnNewLine&&(u=`${t[s]}${u||""}`);let W=(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,s);W&&u?.endsWith(`
`)?p+=W-e:(!W||W>e)&&p++}l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:s+p,insert:u,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,s+p,u]}),_(),v(e,l,r)}else n={};A(e)||(n={})}k&&(k=!1)}if((!R||t[e]==="<"&&(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,e))&&t[(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,e)]==="/"&&t.startsWith("script",(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,(0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,e))))&&S(e)&&!S(e-1)&&!`'"`.includes(t[e+1])&&(!`'"`.includes(t[e+2])||/\w/.test(t[e+1]))&&!(t[e+1]==="c"&&t[e+2]===":")&&!(t[e+1]==="f"&&t[e+2]==="m"&&t[e+3]==="t"&&t[e+4]===":")&&!(t[e+1]==="s"&&t[e+2]==="q"&&t[e+3]==="l"&&t[e+4]===":")&&!(t[e+1]==="x"&&t[e+2]===":")&&!(t[e+1]==="f"&&t[e+2]==="n"&&t[e+3]===":")&&Y(n,t,e)){if(A((0,string_left_right__WEBPACK_IMPORTED_MODULE_4__.right)(t,e)))continue;if(n.nameEnds&&n.nameEnds<e&&!n.lastClosingBracketAt&&(n.onlyPlausible===!0&&n.attributes?.length||n.onlyPlausible===!1)){let s=L(t,e,n.leftOuterWhitespace,e,n.lastOpeningBracketAt,e);l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:e,insert:s,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,e,s]}),v(e,l,r),n={},o={}}if(n.lastOpeningBracketAt!==void 0&&n.onlyPlausible&&n.name&&!n.quotes&&(n.lastOpeningBracketAt=void 0,n.name=void 0,n.onlyPlausible=!1),(n.lastOpeningBracketAt===void 0||!n.onlyPlausible)&&!n.quotes&&(n.lastOpeningBracketAt=e,n.slashPresent=!1,n.attributes=[],V===null?n.leftOuterWhitespace=e:l.trimOnlySpaces&&V===0?n.leftOuterWhitespace=w||e:n.leftOuterWhitespace=V,`${t[e+1]}${t[e+2]}${t[e+3]}`=="!--"||`${t[e+1]}${t[e+2]}${t[e+3]}${t[e+4]}${t[e+5]}${t[e+6]}${t[e+7]}${t[e+8]}`=="![CDATA[")){let s=!0;t[e+2]==="-"&&(s=!1);let a;for(let i=e;i<h;i++)if((!a&&s&&`${t[i-2]}${t[i-1]}${t[i]}`=="]]>"||!s&&`${t[i-2]}${t[i-1]}${t[i]}`=="-->")&&(a=i),a&&(a<i&&t[i].trim()||t[i+1]===void 0)){let g=i;(t[i+1]===void 0&&!t[i].trim()||t[i]===">")&&(g+=1),(!b.length||b[b.length-1][0]!==n.lastOpeningBracketAt)&&b.push([n.lastOpeningBracketAt,a+1]),(!$.length||$[$.length-1][0]!==n.lastOpeningBracketAt)&&$.push([n.lastOpeningBracketAt,a+1]);let u=L(t,i,n.leftOuterWhitespace,g,n.lastOpeningBracketAt,a);l.cb({tag:n,deleteFrom:n.leftOuterWhitespace,deleteTo:g,insert:u,rangesArr:r,proposedReturn:[n.leftOuterWhitespace,g,u]}),e=i-1,t[i]===">"&&(e=i),n={},o={};break}}}!t[e].trim()||t[e].charCodeAt(0)===847?(V===null&&(V=e,n.lastOpeningBracketAt!==void 0&&n.lastOpeningBracketAt<e&&n.nameStarts&&n.nameStarts<n.lastOpeningBracketAt&&e===n.lastOpeningBracketAt+1&&!c.some(s=>s.name===n.name)&&(n.onlyPlausible=!0,n.name=void 0,n.nameStarts=void 0)),(t[e]===`
`||t[e]==="\r")&&(N=e,J&&(J=!1))):(V!==null&&(!n.quotes&&o.equalsAt>V-1&&o.nameEnds&&o.equalsAt>o.nameEnds&&t[e]!=='"'&&t[e]!=="'"&&((0,codsen_utils__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(o)&&n.attributes.push(o),o={},n.equalsSpottedAt=void 0),V=null),J||(J=!0,F&&!R&&typeof N=="number"&&e&&N<e-1&&(t.slice(N+1,e).trim()?N=null:l.ignoreIndentations||r.push([N+1,e])))),t[e]===" "?w===null&&(w=e):w!==null&&(w=null),n.name==="script"&&(R=!n.slashPresent)}if(t&&!l.ignoreIndentations&&(l.trimOnlySpaces&&t[0]===" "||!l.trimOnlySpaces&&!t[0].trim()))for(let e=0;e<h;e++)if(l.trimOnlySpaces&&t[e]!==" "||!l.trimOnlySpaces&&t[e].trim()){r.push([0,e]);break}else t[e+1]||r.push([0,e+1]);if(t&&(l.trimOnlySpaces&&t[~-t.length]===" "||!l.trimOnlySpaces&&!t[~-t.length].trim())){for(let e=t.length;e--;)if(l.trimOnlySpaces&&t[e]!==" "||!l.trimOnlySpaces&&t[e].trim()){r.push([e+1,h]);break}}let O=r.current();if(!m?.cb&&O){if(O[0]&&!O[0][0]){let e=O[0][1];r.ranges[0]=[r.ranges[0][0],r.ranges[0][1]]}if(O[O.length-1]&&O[O.length-1][1]===t.length){let e=O[O.length-1][0];if(r.ranges){let s=r.ranges[r.ranges.length-1][0];t[s-1]&&(l.trimOnlySpaces&&t[s-1]===" "||!l.trimOnlySpaces&&!t[s-1].trim())&&(s-=1);let a=r.ranges[r.ranges.length-1][2];r.ranges[r.ranges.length-1]=[s,r.ranges[r.ranges.length-1][1]],a?.trim()&&r.ranges[r.ranges.length-1].push(a.trimEnd())}}}return{log:{timeTakenInMilliseconds:Date.now()-y},result:(0,ranges_apply__WEBPACK_IMPORTED_MODULE_2__.rApply)(t,r.current()),ranges:r.current(),allTagLocations:b,filteredTagLocations:$}}


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




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
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/blocks/blog-posts/index.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-posts */ "./src/blocks/blog-posts/blog-posts.tsx");

/******/ })()
;
//# sourceMappingURL=blog-posts.js.map