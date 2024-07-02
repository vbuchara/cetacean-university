<?php

add_action('rest_api_init', 'university_note_return_count');

function university_note_return_count(){
    register_rest_field('note', 'hasReachedLimit', [
        'get_callback' => function(){
            return count_user_posts(get_current_user_id(), 'note') >= 10;
        },
    ]);
}