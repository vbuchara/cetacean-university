import $ from 'jquery';

export default class Likes {
    constructor() {
        this.setupEvents();
    }

    setupEvents(){
        $(".like-box").on(
            'click',
            this.toggleLike.bind(this)
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
    async toggleLike(event: JQuery.ClickEvent<HTMLButtonElement, undefined, HTMLButtonElement, HTMLButtonElement>){
        const likeBox = $(event.currentTarget);
        const professorId = Number(likeBox.data("professor-id"));
        const dataExists = String(likeBox.data("exists"));

        try {
            likeBox.attr(
                "data-exists", 
                dataExists === "yes" ? "no" : "yes"
            );

            /** @type {import('wordpress-types').LikePost} */
            const response = await $.ajax({
                url: `${cetaceanUniversityData.root_url}/wp-json/university/v1/like/${professorId}`,
                type: 'POST',
                headers: {
                    'X-WP-Nonce': cetaceanUniversityData.nonce
                }
            });

            if(response.like === "added"){
                likeBox.attr("data-exists", "yes");
            } 

            if(response.like === "removed") {
                likeBox.attr("data-exists", "no");
            }

            likeBox.find('.like-count').text(response.professor_likes_count);
        } catch (error) {
            likeBox.attr("data-exists", dataExists);

            if(!('readyState' in error)){
                console.log(error);
                return;
            }

            /** @type {JQuery.jqXHR} */
            const jqueryError = error;
            /** @type {import('wordpress-types').WP_ErrorResponse} */
            const wpErrorResponse = jqueryError.responseJSON;
            
            if(wpErrorResponse.code === "rest_forbidden"){
                window.location.href = `${cetaceanUniversityData.root_url}/wp-login.php`;
                return;
            }

            if(wpErrorResponse.code === "rest_cookie_invalid_nonce"){
                window.location.reload();
                return;
            }

            alert(wpErrorResponse.message);
        }
    }
}