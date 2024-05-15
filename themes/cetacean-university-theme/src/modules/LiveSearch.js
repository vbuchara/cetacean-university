import $ from 'jquery';

export default class LiveSearch {
    constructor() {
        this.setupSearchOverlay();

        this.openSearchTrigger = $(".js-search-trigger");
        this.closeSearchTrigger = $(".search-overlay__close");
        this.inputSearch = $("#search-term");
        this.searchOverlay = $(".search-overlay");
        this.searchResults = $("#search-overlay__results");

        this.isSearchOverlayOpen = false;
        this.isShowingLoadingSpinner = false;

        this.searchTimeout;
    
        this.setupEvents();
    }

    setupEvents(){
        this.openSearchTrigger.on(
            "click", this.openSearchOverlay.bind(this)
        );
        this.closeSearchTrigger.on(
            "click", this.closeSearchOverlay.bind(this)
        );
        $(document).on(
            "keydown", this.onOpenSearchKeyReleased.bind(this)
        );
        $(document).on(
            "keydown", this.onCloseSearchKeyReleased.bind(this)
        );
        this.inputSearch.on(
            "input", this.onSearchInput.bind(this)
        );
    }

    setupSearchOverlay(){
        const inputContainerDiv = $("<div>")
            .addClass("container")
            .append(
                $("<i>")
                    .addClass("fa fa-search search-overlay__icon")
                    .attr("aria-hidden", "true"),
                $('<input>')
                    .attr("type", "text")
                    .addClass("search-term")
                    .attr("placeholder", "Type here to search across the site!")
                    .attr("aria-label", "Type here to search across the site!")
                    .attr("id", "search-term"),
                $("<i>")
                    .addClass("fa fa-window-close search-overlay__close")
                    .attr("aria-hidden", "true"),
            );
        const resultsContainerDiv = $('<div>')
            .addClass("container")
            .append(
                $('<div>').attr('id', "search-overlay__results")
            );
        const searchOverlayDiv = $('<div>')
            .addClass('search-overlay')
            .append(
                $('<div>')
                    .addClass('search-overlay__top')
                    .append(inputContainerDiv),
                resultsContainerDiv
            );

        $("body").append(searchOverlayDiv);
    }

    /**
     * 
     * @param {JQuery.Event|undefined} event 
     */
    openSearchOverlay(event) {
        if(event) event.preventDefault();

        this.inputSearch.val("");

        this.searchOverlay.addClass("search-overlay--active");
        this.searchOverlay.one("transitionend", () => {
            this.inputSearch.trigger("focus")
        })
        $("body").addClass("body-no-scroll");

        this.isSearchOverlayOpen = true;
    }

    closeSearchOverlay() {
        this.searchOverlay.removeClass("search-overlay--active");
        $("body").removeClass("body-no-scroll");
        this.isSearchOverlayOpen = false;
    }

    /** 
     * @param {JQuery.Event} event
    */
    onOpenSearchKeyReleased(event){
        if(
            event.key !== "s" || 
            $("input, textarea").is(":focus") ||
            this.isSearchOverlayOpen
        ) return;
        this.openSearchOverlay();
        console.log("Open");
    }

    /** 
     * @param {JQuery.Event} event
    */
    onCloseSearchKeyReleased(event) {
        if(
            event.key !== "Escape" 
            || !this.isSearchOverlayOpen
        ) return;
        this.closeSearchOverlay();
        console.log("Close");
    }

    /** 
     * @param {JQuery.UIEventBase<
     *  HTMLInputElement, HTMLInputElement, any, HTMLInputElement
     * >} event
    */
    onSearchInput(event){        
        clearTimeout(this.searchTimeout);
        
        this.showLoadingSpinner();

        if(!event.target.value){
            this.hideLoadingSpinner("");
            return;
        };

        this.searchTimeout = setTimeout(
            () => this.getSearchResults(event), 
            500
        );
    }

    /** 
     * @param {JQuery.UIEventBase<
     *  HTMLInputElement, HTMLInputElement, any, HTMLInputElement
     * >} event
    */
    async getSearchResults(event){
        try {
            const { root_url } = cetaceanUniversityData;

            /** @type {import('wordpress-types').SearchGet>} */
            const allPosts = await $.getJSON(
                `${root_url}/wp-json/cetacean_university/v1/search?term=${event.target.value}`
            );

            const noResultsParagraph = $('<p>')
                .text('No Results Found for the search.');

            // Main Div for the results
            const resultDiv = $('<div>')
                .addClass('row');

            // Posts and Pages results
            const postsAndPagesResultDiv = $('<div>')
                .appendTo(resultDiv)
                .addClass('one-third');
            const postAndPageResultTitle =  $('<h2>')
                .appendTo(postsAndPagesResultDiv)
                .addClass('search-overlay__section-title')
                .text('Pages and Posts');
            const postAndPagesResultList = $('<ul>')
                .addClass('link-list min-list');

            allPosts.postAndPage.forEach((post) => {
                const postLi = $('<li>')
                    .appendTo(postAndPagesResultList); 
                const titleAnchor = $('<a>')
                    .appendTo(postLi)
                    .attr('href', post.permalink)
                    .text(post.title);
                const excerptDiv = $('<div>')
                    .appendTo(postLi)
                    .addClass('generic-content')
                    .html(post.excerpt);

                if(post.type === "post"){
                    const authorNameParagraph = $('<p>')
                        .insertAfter(titleAnchor)
                        .text(`By ${post.authorName}`);
                }
            }); 

            if(allPosts.postAndPage.length === 0){
                noResultsParagraph
                    .clone()
                    .insertAfter(postAndPageResultTitle)
            }

            if(allPosts.postAndPage.length > 0){
                postAndPagesResultList
                    .insertAfter(postAndPageResultTitle)
            }

            // Programs and Professors results
            const programsAndProfessorsResultDiv = $('<div>')
                .appendTo(resultDiv)
                .addClass('one-third');

            // Programs results
            const programsResultTitle = $('<h2>')
                .appendTo(programsAndProfessorsResultDiv)
                .addClass('search-overlay__section-title')
                .text('Programs');
            const programsResultList = $('<ul>')
                .addClass('link-list min-list');

            allPosts.program.forEach((post) => {
                const postLi = $('<li>')
                    .appendTo(programsResultList); 
                const titleAnchor = $('<a>')
                    .appendTo(postLi)
                    .attr('href', post.permalink)
                    .text(post.title);
                const excerptDiv = $('<div>')
                    .appendTo(postLi)
                    .addClass('generic-content')
                    .html(post.excerpt);
            }); 

            if(allPosts.program.length === 0){
                noResultsParagraph
                    .clone()
                    .insertAfter(programsResultTitle)
            }

            if(allPosts.program.length > 0){
                programsResultList
                    .insertAfter(programsResultTitle)
            }

            // Professors results
            const professorsResultTitle = $('<h2>')
                .appendTo(programsAndProfessorsResultDiv)
                .addClass('search-overlay__section-title')
                .text('Professors');
            const professorsResultList = $('<ul>')
                .addClass('professor-cards');

            allPosts.professor.forEach((post) => {
                const postLi = $('<li>')
                    .appendTo(professorsResultList)
                    .addClass('professor-card__list-item');
                const titleAnchor = $('<a>')
                    .appendTo(postLi)
                    .addClass('professor-card')
                    .attr('href', post.permalink);
                const professorImage = $('<img>')
                    .appendTo(titleAnchor)
                    .addClass('professor-card__image')
                    .attr('src', post.imageSrc)
                    .attr('alt', `Image of Professor ${post.title}`)
                const professorNameSpan = $('<span>')
                    .appendTo(titleAnchor)
                    .addClass('professor-card__name')
                    .text(post.title);
            }); 

            if(allPosts.professor.length === 0){
                noResultsParagraph
                    .clone()
                    .insertAfter(professorsResultTitle)
            }

            if(allPosts.professor.length > 0){
                professorsResultList
                    .insertAfter(professorsResultTitle)
            }

            // Campuses and Events results
            const campusesAndEventsResultDiv = $('<div>')
                .appendTo(resultDiv)
                .addClass('one-third');

            // Campuses results
            const campusesResultTitle = $('<h2>')
                .appendTo(campusesAndEventsResultDiv)
                .addClass('search-overlay__section-title')
                .text('Campuses');
            const campusesResultList = $('<ul>')
                .addClass('link-list min-list');

            allPosts.campus.forEach((post) => {
                const postLi = $('<li>')
                    .appendTo(campusesResultList); 
                const titleAnchor = $('<a>')
                    .appendTo(postLi)
                    .attr('href', post.permalink)
                    .text(post.title);
                const excerptDiv = $('<div>')
                    .appendTo(postLi)
                    .addClass('generic-content')
                    .html(post.excerpt);
            }); 

            if(allPosts.campus.length === 0){
                noResultsParagraph
                    .clone()
                    .insertAfter(campusesResultTitle)
            }

            if(allPosts.campus.length > 0){
                campusesResultList
                    .insertAfter(campusesResultTitle)
            }

            // Events results
            const eventsResultTitle = $('<h2>')
                .appendTo(campusesAndEventsResultDiv)
                .addClass('search-overlay__section-title')
                .text('Events');
            const eventsResultsTmpDiv = $('<div>');

            allPosts.event.forEach((post) => {
                const eventSummaryDiv = $('<div>')
                    .appendTo(eventsResultsTmpDiv)
                    .addClass('event-summary')
                    .text(post.title);
                const eventDateLink = $('<a>')
                    .appendTo(eventSummaryDiv)
                    .addClass('event-summary__date t-center')
                    .attr('href', post.permalink);
                const eventMonthSpan = $('<span>')
                    .appendTo(eventDateLink)
                    .addClass('event-summary__month')
                    .text(post.month);
                const eventDaySpan = $('<span>')
                    .appendTo(eventDateLink)
                    .addClass('event-summary__day')
                    .text(post.day);

                const eventSummaryContent = $('<div>')
                    .appendTo(eventSummaryDiv)
                    .addClass('event-summary__content');
                const eventSummaryTitle = $('<h5>')
                    .appendTo(eventSummaryContent)
                    .addClass('event-summary__title headline headline--tiny');
                const eventSummaryTitleLink = $('<a>')
                    .appendTo(eventSummaryTitle)
                    .attr('href', post.permalink)
                    .text(post.title);
                const eventSummaryParagraph = $('<p>')
                    .appendTo(eventSummaryContent)
                    .text(`${post.excerpt} `);
                const eventLearnMoreLink = $('<a>')
                    .appendTo(eventSummaryParagraph)
                    .addClass('nu gray')
                    .attr('href', post.permalink)
                    .text('Learn More');
            }); 

            if(allPosts.event.length === 0){
                noResultsParagraph
                    .clone()
                    .insertAfter(eventsResultTitle)
            }

            if(allPosts.event.length > 0){
                eventsResultsTmpDiv
                    .children()
                    .insertAfter(eventsResultTitle)
            }

            this.hideLoadingSpinner(resultDiv.prop("outerHTML"));
        } catch(error){
            const errorMessageParagraph = $("<p>")
                .text("An unexpected error has occurred. Please try again later.");
            this.hideLoadingSpinner(errorMessageParagraph.html());
        }
    }

    showLoadingSpinner(){
        if(this.isShowingLoadingSpinner) return;
        this.searchResults.html(
            '<div class="spinner-loader"></div>'
        );
        this.isShowingLoadingSpinner = true;
    }

    hideLoadingSpinner(html = ""){
        if(!this.isShowingLoadingSpinner) return;
        this.searchResults.html(html);
        this.isShowingLoadingSpinner = false;
    }
}