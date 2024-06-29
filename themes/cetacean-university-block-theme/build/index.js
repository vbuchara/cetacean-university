/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/GoogleMap.ts":
/*!**********************************!*\
  !*** ./src/classes/GoogleMap.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GMap {
  constructor() {
    document.querySelectorAll(".acf-map").forEach(element => {
      this.new_map(element);
    });
  }
  new_map($el) {
    var $markers = $el.querySelectorAll(".marker");
    var args = {
      zoom: 16,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapId: "CAMPUS_MAP_ID"
    };
    var map = new google.maps.Map($el, args);
    map.markers = [];
    var that = this;

    // add markers
    $markers.forEach(function (x) {
      that.add_marker(x, map);
    });

    // center map
    this.center_map(map);
  } // end new_map

  add_marker($marker, map) {
    var latlng = new google.maps.LatLng(Number($marker.getAttribute("data-lat")), Number($marker.getAttribute("data-lng")));
    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
    map.markers?.push(marker);

    // if marker contains HTML, add it to an infoWindow
    if ($marker.innerHTML) {
      // create info window
      var infowindow = new google.maps.InfoWindow({
        content: $marker.innerHTML
      });

      // show info window when marker is clicked
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    }
  } // end add_marker

  center_map(map) {
    var bounds = new google.maps.LatLngBounds();

    // loop through all markers and create bounds
    map.markers?.forEach(function (marker) {
      var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      bounds.extend(latlng);
    });

    // only 1 marker?
    if (map.markers?.length == 1) {
      // set center of map
      map.setCenter(bounds.getCenter());
      map.setZoom(4);
    } else {
      // fit to bounds
      map.fitBounds(bounds);
    }
  } // end center_map
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GMap);

/***/ }),

/***/ "./src/classes/HeroSlider.ts":
/*!***********************************!*\
  !*** ./src/classes/HeroSlider.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

class HeroSlider {
  constructor() {
    const sliders = document.querySelectorAll(".hero-slider");
    if (!sliders) return;
    sliders.forEach(slider => {
      this.initGlide(slider);
    });
  }
  initGlide(slider) {
    // count how many slides there are
    const slides = slider.querySelectorAll(".hero-slider__slide");

    // Generate the HTML for the navigation dots
    const dotHTML = Array.from(slides).reduce((html, _, index) => {
      return html + `<button class="slider__bullet glide__bullet" data-glide-dir="=${index}"></button>`;
    }, "");

    // Add the dots HTML to the DOM
    const glideBullets = slider.querySelector(".glide__bullets");
    if (glideBullets) glideBullets.insertAdjacentHTML("beforeend", dotHTML);

    // Actually initialize the glide / slider script
    const glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      type: "carousel",
      perView: 1,
      autoplay: 3000
    });
    glide.mount();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSlider);

/***/ }),

/***/ "./src/classes/Likes.ts":
/*!******************************!*\
  !*** ./src/classes/Likes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Likes)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Likes {
  constructor() {
    this.setupEvents();
  }
  setupEvents() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".like-box").on('click', this.toggleLike.bind(this));
  }

  /**
   * 
   * @param {JQuery.ClickEvent<
   *  HTMLButtonElement, 
   *  undefined, 
   *  HTMLButtonElement, 
   *  HTMLButtonElement
   * >} event 
   */
  async toggleLike(event) {
    const likeBox = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const professorId = Number(likeBox.data("professor-id"));
    const dataExists = String(likeBox.data("exists"));
    try {
      likeBox.attr("data-exists", dataExists === "yes" ? "no" : "yes");

      /** @type {import('wordpress-types').LikePost} */
      const response = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: `${cetaceanUniversityData.root_url}/wp-json/university/v1/like/${professorId}`,
        type: 'POST',
        headers: {
          'X-WP-Nonce': cetaceanUniversityData.nonce
        }
      });
      if (response.like === "added") {
        likeBox.attr("data-exists", "yes");
      }
      if (response.like === "removed") {
        likeBox.attr("data-exists", "no");
      }
      likeBox.find('.like-count').text(response.professor_likes_count);
    } catch (error) {
      likeBox.attr("data-exists", dataExists);
      if (!('readyState' in error)) {
        console.log(error);
        return;
      }

      /** @type {JQuery.jqXHR} */
      const jqueryError = error;
      /** @type {import('wordpress-types').WP_ErrorResponse} */
      const wpErrorResponse = jqueryError.responseJSON;
      if (wpErrorResponse.code === "rest_forbidden") {
        window.location.href = `${cetaceanUniversityData.root_url}/wp-login.php`;
        return;
      }
      if (wpErrorResponse.code === "rest_cookie_invalid_nonce") {
        window.location.reload();
        return;
      }
      alert(wpErrorResponse.message);
    }
  }
}

/***/ }),

/***/ "./src/classes/LiveSearch.ts":
/*!***********************************!*\
  !*** ./src/classes/LiveSearch.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveSearch)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class LiveSearch {
  constructor() {
    this.setupSearchOverlay();
    this.openSearchTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-search-trigger");
    this.closeSearchTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".search-overlay__close");
    this.inputSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-term");
    this.searchOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".search-overlay");
    this.searchResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-overlay__results");
    this.isSearchOverlayOpen = false;
    this.isShowingLoadingSpinner = false;
    this.searchTimeout;
    this.setupEvents();
  }
  setupEvents() {
    this.openSearchTrigger.on("click", this.openSearchOverlay.bind(this));
    this.closeSearchTrigger.on("click", this.closeSearchOverlay.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("keydown", this.onOpenSearchKeyReleased.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("keydown", this.onCloseSearchKeyReleased.bind(this));
    this.inputSearch.on("input", this.onSearchInput.bind(this));
  }
  setupSearchOverlay() {
    const inputContainerDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div>").addClass("container").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<i>").addClass("fa fa-search search-overlay__icon").attr("aria-hidden", "true"), jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').attr("type", "text").addClass("search-term").attr("placeholder", "Type here to search across the site!").attr("aria-label", "Type here to search across the site!").attr("id", "search-term"), jquery__WEBPACK_IMPORTED_MODULE_0___default()("<i>").addClass("fa fa-window-close search-overlay__close").attr("aria-hidden", "true"));
    const resultsContainerDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass("container").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').attr('id', "search-overlay__results"));
    const searchOverlayDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('search-overlay').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('search-overlay__top').append(inputContainerDiv), resultsContainerDiv);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append(searchOverlayDiv);
  }
  openSearchOverlay(event) {
    if (event) event.preventDefault();
    this.inputSearch.val("");
    this.searchOverlay.addClass("search-overlay--active");
    this.searchOverlay.one("transitionend", () => {
      this.inputSearch.trigger("focus");
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
    this.isSearchOverlayOpen = true;
  }
  closeSearchOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
    this.isSearchOverlayOpen = false;
  }
  onOpenSearchKeyReleased(event) {
    if (event.key !== "s" || jquery__WEBPACK_IMPORTED_MODULE_0___default()("input, textarea").is(":focus") || this.isSearchOverlayOpen) return;
    this.openSearchOverlay();
    console.log("Open");
  }
  onCloseSearchKeyReleased(event) {
    if (event.key !== "Escape" || !this.isSearchOverlayOpen) return;
    this.closeSearchOverlay();
    console.log("Close");
  }
  onSearchInput(event) {
    clearTimeout(this.searchTimeout);
    this.showLoadingSpinner();
    if (!event.target.value) {
      this.hideLoadingSpinner("");
      return;
    }
    ;
    this.searchTimeout = window.setTimeout(() => this.getSearchResults(event), 500);
  }
  async getSearchResults(event) {
    try {
      const {
        root_url
      } = cetaceanUniversityData;
      const allPosts = await jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON(`${root_url}/wp-json/cetacean_university/v1/search?term=${event.target.value}`);
      const noResultsParagraph = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p>').text('No Results Found for the search.');

      // Main Div for the results
      const resultDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('row');

      // Posts and Pages results
      const postsAndPagesResultDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(resultDiv).addClass('one-third');
      const postAndPageResultTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h2>').appendTo(postsAndPagesResultDiv).addClass('search-overlay__section-title').text('Pages and Posts');
      const postAndPagesResultList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('link-list min-list');
      allPosts.postAndPage.forEach(post => {
        const postLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').appendTo(postAndPagesResultList);
        const titleAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(postLi).attr('href', post.permalink).text(post.title);
        const excerptDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(postLi).addClass('generic-content').html(post.excerpt);
        if (post.type === "post") {
          const authorNameParagraph = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p>').insertAfter(titleAnchor).text(`By ${post.authorName}`);
        }
      });
      if (allPosts.postAndPage.length === 0) {
        noResultsParagraph.clone().insertAfter(postAndPageResultTitle);
      }
      if (allPosts.postAndPage.length > 0) {
        postAndPagesResultList.insertAfter(postAndPageResultTitle);
      }

      // Programs and Professors results
      const programsAndProfessorsResultDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(resultDiv).addClass('one-third');

      // Programs results
      const programsResultTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h2>').appendTo(programsAndProfessorsResultDiv).addClass('search-overlay__section-title').text('Programs');
      const programsResultList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('link-list min-list');
      allPosts.program.forEach(post => {
        const postLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').appendTo(programsResultList);
        const titleAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(postLi).attr('href', post.permalink).text(post.title);
        const excerptDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(postLi).addClass('generic-content').html(post.excerpt);
      });
      if (allPosts.program.length === 0) {
        noResultsParagraph.clone().insertAfter(programsResultTitle);
      }
      if (allPosts.program.length > 0) {
        programsResultList.insertAfter(programsResultTitle);
      }

      // Professors results
      const professorsResultTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h2>').appendTo(programsAndProfessorsResultDiv).addClass('search-overlay__section-title').text('Professors');
      const professorsResultList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('professor-cards');
      allPosts.professor.forEach(post => {
        const postLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').appendTo(professorsResultList).addClass('professor-card__list-item');
        const titleAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(postLi).addClass('professor-card').attr('href', post.permalink);
        const professorImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img>').appendTo(titleAnchor).addClass('professor-card__image').attr('src', post.imageSrc).attr('alt', `Image of Professor ${post.title}`);
        const professorNameSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').appendTo(titleAnchor).addClass('professor-card__name').text(post.title);
      });
      if (allPosts.professor.length === 0) {
        noResultsParagraph.clone().insertAfter(professorsResultTitle);
      }
      if (allPosts.professor.length > 0) {
        professorsResultList.insertAfter(professorsResultTitle);
      }

      // Campuses and Events results
      const campusesAndEventsResultDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(resultDiv).addClass('one-third');

      // Campuses results
      const campusesResultTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h2>').appendTo(campusesAndEventsResultDiv).addClass('search-overlay__section-title').text('Campuses');
      const campusesResultList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul>').addClass('link-list min-list');
      allPosts.campus.forEach(post => {
        const postLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').appendTo(campusesResultList);
        const titleAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(postLi).attr('href', post.permalink).text(post.title);
        const excerptDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(postLi).addClass('generic-content');
        if (post.excerpt) excerptDiv.html(post.excerpt);
      });
      if (allPosts.campus.length === 0) {
        noResultsParagraph.clone().insertAfter(campusesResultTitle);
      }
      if (allPosts.campus.length > 0) {
        campusesResultList.insertAfter(campusesResultTitle);
      }

      // Events results
      const eventsResultTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h2>').appendTo(campusesAndEventsResultDiv).addClass('search-overlay__section-title').text('Events');
      const eventsResultsTmpDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
      allPosts.event.forEach(post => {
        const eventSummaryDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(eventsResultsTmpDiv).addClass('event-summary').text(post.title);
        const eventDateLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(eventSummaryDiv).addClass('event-summary__date t-center').attr('href', post.permalink);
        const eventMonthSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').appendTo(eventDateLink).addClass('event-summary__month').text(post.month);
        const eventDaySpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').appendTo(eventDateLink).addClass('event-summary__day').text(post.day);
        const eventSummaryContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(eventSummaryDiv).addClass('event-summary__content');
        const eventSummaryTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h5>').appendTo(eventSummaryContent).addClass('event-summary__title headline headline--tiny');
        const eventSummaryTitleLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(eventSummaryTitle).attr('href', post.permalink).text(post.title);
        const eventSummaryParagraph = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p>').appendTo(eventSummaryContent).text(`${post.excerpt} `);
        const eventLearnMoreLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a>').appendTo(eventSummaryParagraph).addClass('nu gray').attr('href', post.permalink).text('Learn More');
      });
      if (allPosts.event.length === 0) {
        noResultsParagraph.clone().insertAfter(eventsResultTitle);
      }
      if (allPosts.event.length > 0) {
        eventsResultsTmpDiv.children().insertAfter(eventsResultTitle);
      }
      this.hideLoadingSpinner(resultDiv.prop("outerHTML"));
    } catch (error) {
      const errorMessageParagraph = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<p>").text("An unexpected error has occurred. Please try again later.");
      this.hideLoadingSpinner(errorMessageParagraph.html());
    }
  }
  showLoadingSpinner() {
    if (this.isShowingLoadingSpinner) return;
    this.searchResults.html('<div class="spinner-loader"></div>');
    this.isShowingLoadingSpinner = true;
  }
  hideLoadingSpinner(html = "") {
    if (!this.isShowingLoadingSpinner) return;
    this.searchResults.html(html);
    this.isShowingLoadingSpinner = false;
  }
}

/***/ }),

/***/ "./src/classes/MobileMenu.ts":
/*!***********************************!*\
  !*** ./src/classes/MobileMenu.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".site-header__menu");
    this.openButton = document.querySelector(".site-header__menu-trigger");
    this.events();
  }
  events() {
    this.openButton?.addEventListener("click", () => this.openMenu());
  }
  openMenu() {
    this.openButton?.classList.toggle("site-header__menu-trigger--open");
    this.openButton?.classList.toggle("site-header__menu-trigger--closed");
    this.menu?.classList.toggle("site-header__menu--active");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/classes/MyNotes.ts":
/*!********************************!*\
  !*** ./src/classes/MyNotes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyNotes)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_utils_getContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/utils/getContent */ "./src/utils/getContent.ts");
/* harmony import */ var _src_utils_getTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/utils/getTitle */ "./src/utils/getTitle.ts");



class MyNotes {
  constructor() {
    this.setupEvents();
  }
  setupEvents() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#my-notes-list').on('click', '.btn--delete-note', this.deleteNote.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#my-notes-list').on('click', '.btn--edit-note', this.editNote.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#my-notes-list').on('click', '.btn--cancel-edit', this.cancelEdit.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#my-notes-list').on('click', '.btn--update-note', this.updateNote.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submit-note').on('click', this.createNote.bind(this));
  }
  async deleteNote(event) {
    try {
      const noteItemLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).parents('.note-item');
      const noteId = Number(noteItemLi.data('note-id'));
      const response = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: `${cetaceanUniversityData.root_url}/wp-json/wp/v2/note/${noteId}`,
        type: 'DELETE',
        headers: {
          'X-WP-Nonce': cetaceanUniversityData.nonce
        }
      });
      if (response.id !== noteId) {
        alert("Something went wrong");
        return;
      }
      ;
      noteItemLi.slideUp({
        complete: () => noteItemLi.remove()
      });
      if (!response.hasReachedLimit) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.note-error-message').removeClass('active').empty();
      }
    } catch (error) {
      if (!('readyState' in error)) {
        console.log(error);
        return;
      }
      const jqueryError = error;
      const wpErrorResponse = jqueryError.responseJSON;
      alert(wpErrorResponse.message);
    }
  }
  editNote(event) {
    try {
      const editNote = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      const noteItemLi = editNote.parents('.note-item');
      this.makeFieldsEditable(noteItemLi);
    } catch (error) {
      if (!('readyState' in error)) {
        console.log(error);
        return;
      }
      const jqueryError = error;
      const wpErrorResponse = jqueryError.responseJSON;
      alert(wpErrorResponse.message);
    }
  }
  cancelEdit(event) {
    const cancelEditNote = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const noteItemLi = cancelEditNote.parents('.note-item');
    this.makeFieldsReadonly(noteItemLi);
  }
  async updateNote(event) {
    try {
      const noteItemLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).parents('.note-item');
      const noteId = Number(noteItemLi.data('note-id'));
      const response = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: `${cetaceanUniversityData.root_url}/wp-json/wp/v2/note/${noteId}`,
        type: 'POST',
        headers: {
          'X-WP-Nonce': cetaceanUniversityData.nonce
        },
        data: {
          title: noteItemLi.find('.note-title-field').val(),
          content: noteItemLi.find('.note-body-field').val()
        }
      });
      if (response.id !== noteId) {
        alert("Something went wrong");
        return;
      }
      ;
      this.makeFieldsReadonly(noteItemLi);
    } catch (error) {
      if (!('readyState' in error)) {
        console.log(error);
        return;
      }
      const jqueryError = error;
      const wpErrorResponse = jqueryError.responseJSON;
      alert(wpErrorResponse.message);
    }
  }
  async createNote() {
    try {
      const newNoteTitleInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.new-note-title');
      const newNoteContentTextarea = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.new-note-body');
      const response = await jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        url: `${cetaceanUniversityData.root_url}/wp-json/wp/v2/note`,
        type: 'POST',
        headers: {
          'X-WP-Nonce': cetaceanUniversityData.nonce
        },
        data: {
          title: newNoteTitleInput.val(),
          content: newNoteContentTextarea.val(),
          status: "publish"
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.note-error-message').removeClass('active').empty();
      const noteList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#my-notes-list');
      newNoteTitleInput.val("");
      newNoteContentTextarea.val("");
      const defaultIcon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa').attr('aria-hidden', 'true');
      const newNoteItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li>').prependTo(noteList).addClass('note-item').attr('data-note-id', response.id);
      const newTitleFieldInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>').appendTo(newNoteItem).addClass('note-title-field').val((0,_src_utils_getTitle__WEBPACK_IMPORTED_MODULE_2__.getTitle)(response)).attr('readonly', 'true');
      const noteActionsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').appendTo(newNoteItem).addClass('note-actions');
      const editNoteCancelButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button>').appendTo(noteActionsDiv).addClass('btn').addClass('btn--cancel-edit').addClass('btn--cancel-edit--hidden').attr('aria-hidden', 'true').append(defaultIcon.clone().addClass('fa-times')).append(" Cancel ");
      const editNoteButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button>').appendTo(noteActionsDiv).addClass('btn').addClass('btn--edit-note').append(defaultIcon.clone().addClass('fa-pencil')).append(" Edit ");
      const deleteNoteButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button>').appendTo(noteActionsDiv).addClass('btn').addClass('btn--delete-note').append(defaultIcon.clone().addClass('fa-trash-o')).append(" Delete ");
      const newContentFieldTextarea = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<textarea>').appendTo(newNoteItem).addClass('note-body-field').attr('readonly', 'true').text((0,_src_utils_getContent__WEBPACK_IMPORTED_MODULE_1__.getContent)(response));
      const updateNoteButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button>').appendTo(newNoteItem).addClass('btn').addClass('btn--update-note').addClass('btn--primary').addClass('btn--slide-from-top').append(defaultIcon.clone().addClass('fa-arrow-right')).append(" Save ");
    } catch (error) {
      if (!('readyState' in error)) {
        console.log(error);
        return;
      }
      const jqueryError = error;
      const wpErrorResponse = jqueryError.responseJSON;
      if (wpErrorResponse.code === "note_limit_error") {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.note-error-message').addClass('active').text(wpErrorResponse.message);
        return;
      }
      alert(wpErrorResponse.message);
    }
  }
  makeFieldsEditable(noteItemLi) {
    const editNote = noteItemLi.find('.btn--edit-note');
    const cancelEditNote = noteItemLi.find(".btn--cancel-edit");
    const noteFields = noteItemLi.find('.note-title-field, .note-body-field');
    noteFields.removeAttr('readonly').addClass('note-active-field');
    editNote.toggleClass("btn--edit-note--hidden").attr('aria-hidden', 'true');
    cancelEditNote.toggleClass("btn--cancel-edit--hidden").removeAttr('aria-hidden');
    const saveNote = noteItemLi.find('.btn--update-note');
    saveNote.addClass("btn--update-note--visible");
  }
  makeFieldsReadonly(noteItemLi) {
    const editNote = noteItemLi.find('.btn--edit-note');
    const cancelEditNote = noteItemLi.find(".btn--cancel-edit");
    const noteFields = noteItemLi.find('.note-title-field, .note-body-field');
    noteFields.attr('readonly', 'true').removeClass('note-active-field');
    cancelEditNote.toggleClass("btn--cancel-edit--hidden").attr('aria-hidden', 'true');
    editNote.toggleClass("btn--edit-note--hidden").removeAttr('aria-hidden');
    const saveNote = noteItemLi.find('.btn--update-note');
    saveNote.removeClass("btn--update-note--visible");
  }
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ "./node_modules/react-loading-skeleton/dist/skeleton.css");
/* harmony import */ var _src_classes_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/classes/MobileMenu */ "./src/classes/MobileMenu.ts");
/* harmony import */ var _src_classes_HeroSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/classes/HeroSlider */ "./src/classes/HeroSlider.ts");
/* harmony import */ var _src_classes_GoogleMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/classes/GoogleMap */ "./src/classes/GoogleMap.ts");
/* harmony import */ var _src_classes_LiveSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/classes/LiveSearch */ "./src/classes/LiveSearch.ts");
/* harmony import */ var _src_classes_MyNotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/classes/MyNotes */ "./src/classes/MyNotes.ts");
/* harmony import */ var _src_classes_Likes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/classes/Likes */ "./src/classes/Likes.ts");



// Our modules / classes







// Instantiate a new object using our modules/classes
new _src_classes_MobileMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _src_classes_HeroSlider__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _src_classes_GoogleMap__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _src_classes_LiveSearch__WEBPACK_IMPORTED_MODULE_5__["default"]();
new _src_classes_MyNotes__WEBPACK_IMPORTED_MODULE_6__["default"]();
new _src_classes_Likes__WEBPACK_IMPORTED_MODULE_7__["default"]();

/***/ }),

/***/ "./src/utils/getContent.ts":
/*!*********************************!*\
  !*** ./src/utils/getContent.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContent: () => (/* binding */ getContent)
/* harmony export */ });
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-strip-html */ "./node_modules/string-strip-html/dist/string-strip-html.esm.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/lib/function */ "./node_modules/fp-ts/lib/function.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__);


function getContent(post, options = {}) {
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
  return (0,fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__.pipe)(post.content.rendered, stripTags ? stripHtmlTags : value => value);
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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ }),

/***/ "lodash-es":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map