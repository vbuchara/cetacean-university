<?php

add_action('rest_api_init', 'university_register_likes_routes');

function university_register_likes_routes(){
    register_rest_route('university/v1', 'like/(?P<professor_id>\d+)', [
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'update_like',
        'permission_callback' => fn() => is_user_logged_in(),
        'args' => [
            'professor_id' => [
                'validate_callback' => function($param){
                    return is_numeric($param) && 
                        get_post_type($param) === 'professor';
                }
            ]
        ]
    ]);
}

function update_like(
    WP_REST_Request $request
){
    /** @var int */
    $professor_id = (int) $request->get_param('professor_id');

    /** Retrieves the Post Like type of the logged user */
    $likePostQuery = new WP_Query([
        'post_type' => 'like',
        'author' => get_current_user_id()
    ]);

    /** Like count for the professor being liked/unliked */
    $likeCount = (new WP_Query([
        'post_type' => 'like',
        'meta_query' => [
            [
                'key' => 'liked_professors',
                'compare' => 'LIKE',
                'value' =>  "\"" . $professor_id . "\""
            ]
        ]
    ]))->found_posts;
    
    /** Assures the logged user has at least one Post Like type */
    $likePostId = wp_insert_post([
        'ID' => $likePostQuery->have_posts()
            ? $likePostQuery->get_posts()[0]->ID
            : 0,
        'post_title' => wp_get_current_user()->display_name,
        'post_type' => 'like',
        'post_status' => 'publish',
    ]);

    /** @var int[]|null Professors liked by the logged user  */
    $likedPostProfessorIDs = get_field('liked_professors', $likePostId);

    /**
     * Check if user has already liked the professor
     */
    if(
        !empty($likedPostProfessorIDs) && 
            in_array($professor_id, $likedPostProfessorIDs)
    ){
        /** 
         * Filter the professors liked array to remove the professor like 
         */
        $likedProfessorsFiltered = array_filter(
            $likedPostProfessorIDs, 
            function($likedProfessorID) use ($professor_id){
                return $likedProfessorID !== $professor_id;
            }
        );

        /** Update the ACF field with the removed professor like */
        update_field(
            'liked_professors', 
            $likedProfessorsFiltered,
            $likePostId 
        );

        return [
            'professor_id' => $professor_id,
            'professor_likes_count' => $likeCount - 1,
            'like' => 'removed'
        ];
    }

    /** Update the ACF field adding the new professor liked */
    update_field(
        'liked_professors', 
        empty($likedPostProfessorIDs)
            ? [$professor_id]
            : [...$likedPostProfessorIDs, $professor_id],
        $likePostId 
    );

    return [
        'professor_id' => $professor_id,
        'professor_likes_count' => $likeCount + 1,
        'like' => 'added',
    ];
}