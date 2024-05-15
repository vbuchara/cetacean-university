import $ from 'jquery';

export default class MyNotes {
    constructor() {
        this.setupEvents();
    }

    setupEvents(){
        $('#my-notes-list').on(
            'click',
            '.btn--delete-note',
            this.deleteNote.bind(this) 
        );
        $('#my-notes-list').on(
            'click',
            '.btn--edit-note',
            this.editNote.bind(this)
        );
        $('#my-notes-list').on(
            'click',
            '.btn--cancel-edit',
            this.cancelEdit.bind(this)
        );
        $('#my-notes-list').on(
            'click',
            '.btn--update-note',
            this.updateNote.bind(this)
        );
        $('.submit-note').on(
            'click',
            this.createNote.bind(this)
        );
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
    async deleteNote(event){
        try {
            const noteItemLi = $(event.currentTarget).parents('.note-item');
            const noteId = Number(noteItemLi.data('note-id'));
            
            /** @type {import('wordpress-types').Note} */
            const response = await $.ajax({
                url: `${cetaceanUniversityData.root_url}/wp-json/wp/v2/note/${noteId}`,
                type: 'DELETE',
                headers: {
                    'X-WP-Nonce': cetaceanUniversityData.nonce
                }
            });

            if(response.id !== noteId) {
                alert("Something went wrong")
                return
            };

            noteItemLi.slideUp({
                complete: () => noteItemLi.remove(),
            });

            if(!response.hasReachedLimit){
                $('.note-error-message')
                    .removeClass('active')
                    .empty();
            }
        } catch(
            error
        ){
            if(!('readyState' in error)){
                console.log(error);
                return;
            }

            /** @type {JQuery.jqXHR} */
            const jqueryError = error;
            /** @type {import('wordpress-types').WP_ErrorResponse} */
            const wpErrorResponse = jqueryError.responseJSON;
            
            alert(wpErrorResponse.message);
        }
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
    editNote(event){
        try {
            const editNote = $(event.currentTarget);
            const noteItemLi = editNote.parents('.note-item');
            
            this.makeFieldsEditable(noteItemLi);
        } catch(
            error
        ){
            if(!('readyState' in error)){
                console.log(error);
                return;
            }

            /** @type {JQuery.jqXHR} */
            const jqueryError = error;
            /** @type {import('wordpress-types').WP_ErrorResponse} */
            const wpErrorResponse = jqueryError.responseJSON;
            
            alert(wpErrorResponse.message);
        }
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
    cancelEdit(event){
        const cancelEditNote = $(event.currentTarget);
        const noteItemLi = cancelEditNote.parents('.note-item');

        this.makeFieldsReadonly(noteItemLi);
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
    async updateNote(event){
        try {
            const noteItemLi = $(event.currentTarget).parents('.note-item');
            const noteId = Number(noteItemLi.data('note-id'));
            
            /** @type {import('wordpress-types').WP_Post} */
            const response = await $.ajax({
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

            if(response.id !== noteId) {
                alert("Something went wrong")
                return
            };

            this.makeFieldsReadonly(noteItemLi);
        } catch(
            error
        ){
            if(!('readyState' in error)){
                console.log(error);
                return;
            }

            /** @type {JQuery.jqXHR} */
            const jqueryError = error;
            /** @type {import('wordpress-types').WP_ErrorResponse} */
            const wpErrorResponse = jqueryError.responseJSON;
            
            alert(wpErrorResponse.message);
        }
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
    async createNote(event){
        try {
            const newNoteTitleInput = $('.new-note-title');
            const newNoteContentTextarea = $('.new-note-body');

            /** @type {import('wordpress-types').WP_Post} */
            const response = await $.ajax({
                url: `${cetaceanUniversityData.root_url}/wp-json/wp/v2/note`,
                type: 'POST',
                headers: {
                    'X-WP-Nonce': cetaceanUniversityData.nonce
                },
                /** @type {import('wordpress-types').WP_Post} */
                data: {
                    title: newNoteTitleInput.val(),
                    content: newNoteContentTextarea.val(),
                    status: "publish",
                }
            });

            $('.note-error-message')
                .removeClass('active')
                .empty()

            const noteList = $('#my-notes-list');

            newNoteTitleInput.val("");
            newNoteContentTextarea.val("");

            const defaultIcon = $('<i>')
                .addClass('fa')
                .attr('aria-hidden', 'true');

            const newNoteItem = $('<li>')
                .prependTo(noteList)
                .addClass('note-item')
                .attr('data-note-id', response.id);
            const newTitleFieldInput = $('<input>')
                .appendTo(newNoteItem)
                .addClass('note-title-field')
                .val(response.title.raw)
                .attr('readonly', 'true');
            const noteActionsDiv = $('<div>')
                .appendTo(newNoteItem)
                .addClass('note-actions');
            const editNoteCancelButton = $('<button>')
                .appendTo(noteActionsDiv)
                .addClass('btn')
                .addClass('btn--cancel-edit')
                .addClass('btn--cancel-edit--hidden')
                .attr('aria-hidden', 'true')
                .append(defaultIcon.clone().addClass('fa-times'))
                .append(" Cancel ");
            const editNoteButton = $('<button>')
                .appendTo(noteActionsDiv)
                .addClass('btn')
                .addClass('btn--edit-note')
                .append(defaultIcon.clone().addClass('fa-pencil'))
                .append(" Edit ");
            const deleteNoteButton = $('<button>')
                .appendTo(noteActionsDiv)
                .addClass('btn')
                .addClass('btn--delete-note')
                .append(defaultIcon.clone().addClass('fa-trash-o'))
                .append(" Delete ");
            const newContentFieldTextarea = $('<textarea>')
                .appendTo(newNoteItem)
                .addClass('note-body-field')
                .attr('readonly', 'true')
                .text(response.content.raw);
            const updateNoteButton = $('<button>')
                .appendTo(newNoteItem)
                .addClass('btn')
                .addClass('btn--update-note')
                .addClass('btn--primary')
                .addClass('btn--slide-from-top')
                .append(defaultIcon.clone().addClass('fa-arrow-right'))
                .append(" Save ");
        } catch(error){
            if(!('readyState' in error)){
                console.log(error);
                return;
            }

            /** @type {JQuery.jqXHR} */
            const jqueryError = error;
            /** @type {import('wordpress-types').WP_ErrorResponse} */
            const wpErrorResponse = jqueryError.responseJSON;

            if(wpErrorResponse.code === "note_limit_error"){
                $('.note-error-message')
                    .addClass('active')
                    .text(wpErrorResponse.message);
                return;
            }
            
            alert(wpErrorResponse.message);
        }
    }

    /**
     * 
     * @param {JQuery} noteItemLi 
     */
    makeFieldsEditable(noteItemLi){
        const editNote = noteItemLi.find('.btn--edit-note');
        const cancelEditNote = noteItemLi.find(".btn--cancel-edit");
        
        const noteFields = noteItemLi
            .find('.note-title-field, .note-body-field');
        noteFields.removeAttr('readonly')
            .addClass('note-active-field');

        editNote.toggleClass("btn--edit-note--hidden")
            .attr('aria-hidden', 'true');
        cancelEditNote.toggleClass("btn--cancel-edit--hidden")
            .removeAttr('aria-hidden');

        const saveNote = noteItemLi.find('.btn--update-note');
        saveNote.addClass("btn--update-note--visible");
    }

    /**
     * 
     * @param {JQuery} noteItemLi 
     */
    makeFieldsReadonly(noteItemLi){
        const editNote = noteItemLi.find('.btn--edit-note');
        const cancelEditNote = noteItemLi.find(".btn--cancel-edit");

        const noteFields = noteItemLi
            .find('.note-title-field, .note-body-field');
        noteFields.attr('readonly', 'true')
            .removeClass('note-active-field');

        cancelEditNote.toggleClass("btn--cancel-edit--hidden")
            .attr('aria-hidden', 'true');
        editNote.toggleClass("btn--edit-note--hidden")
            .removeAttr('aria-hidden');

        const saveNote = noteItemLi.find('.btn--update-note');
        saveNote.removeClass("btn--update-note--visible");
    }
}