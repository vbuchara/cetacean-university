<?php

add_action('rest_api_init', 'cetacean_university_register_search');

function cetacean_university_register_search(){
    register_rest_route('cetacean_university/v1', 'search', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'search_results'
    ]);
}

/**
 * @param array{term: string} $params
 */
function search_results(
    WP_REST_Request $request
){
    $searchTerm = $request->get_param('term');

    $postsQuery = new WP_Query([
        'post_type' => [
            'professor', 
            'post', 
            'page',
            'campus',
            'event',
            'program'
        ],
        'posts_per_page' => -1,
        'extend_where' => "(post_title LIKE '%$searchTerm%')"
            . "OR (post_content LIKE '%$searchTerm%' AND post_type != 'program')"
            . "OR (post_excerpt LIKE '%$searchTerm%' AND post_type != 'program')"
    ]);
    
    $posts = [
        'postAndPage' => [],
        'program' => [],
        'professor' => [],
        'event' => [],
        'campus' => []
    ];
    
    while($postsQuery->have_posts()){
        $postsQuery->the_post();

        $postType = get_post_type() === 'post' || get_post_type() === 'page'
                    ? 'postAndPage'
                    : get_post_type();

        if($postType === 'postAndPage'){
            $showAuthor =  get_post_type() === 'post';

            $posts[$postType][get_the_ID()] = [
                'type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'excerpt' => has_excerpt() 
                    ? get_the_excerpt()
                    : wp_trim_words(get_the_content(), 20),
                'authorName' => $showAuthor ? get_the_author() : null
            ];
        }

        if($postType === 'program'){
            /** @var WP_Post[] */
            $relatedCampuses = get_field('related_campus');

            if(!empty($relatedCampuses)){
                foreach($relatedCampuses as $relatedCampus){
                    $posts['campus'][$relatedCampus->ID] = [
                        'type' => get_post_type($relatedCampus),
                        'title' => get_the_title($relatedCampus),
                        'permalink' => get_the_permalink($relatedCampus)
                    ];
                }
            }

            $posts[$postType][get_the_ID()] = [
                'type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'excerpt' => has_excerpt() 
                    ? get_the_excerpt()
                    : wp_trim_words(get_the_content(), 20),
            ];
        }

        if($postType === 'professor'){
            $posts[$postType][get_the_ID()] = [
                'type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'imageSrc' => get_the_post_thumbnail_url(null, 'professor-landscape')
            ];
        }

        if($postType === 'event'){
            $eventDate = new DateTime(get_field("event_date"));

            $posts[$postType][get_the_ID()] = [
                'type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'excerpt' => has_excerpt() 
                    ? get_the_excerpt()
                    : wp_trim_words(get_the_content(), 20),
                'month' => $eventDate->format("M"),
                'day' => $eventDate->format("d"),
            ];
        }

        if($postType === 'campus'){
            $posts[$postType][get_the_ID()] = [
                'type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink()
            ];
        }
    }
    wp_reset_postdata();

    if(!empty($posts['program'])){
        $programIds = array_keys($posts['program']);

        $programRelationshipQuery = new WP_Query([
            'post_type' => ['professor', 'event'],
            'meta_query' => [
                'relation' => 'OR',
                ...array_map(fn($programId) => [
                    'key' => 'related_programs',
                    'value' => $programId,
                    'compare' => 'LIKE'
                ], $programIds),
            ]
        ]);

        while($programRelationshipQuery->have_posts()){
            $programRelationshipQuery->the_post();

            if(get_post_type() === "professor"){
                $posts['professor'][get_the_ID()] = [
                    'type' => get_post_type(),
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'imageSrc' => get_the_post_thumbnail_url(
                        null, 
                        'professor-landscape'
                    )
                ];
            }

            if(get_post_type() === "event"){
                $eventDate = new DateTime(get_field("event_date"));

                $posts['event'][get_the_ID()] = [
                    'type' => get_post_type(),
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'excerpt' => has_excerpt() 
                        ? get_the_excerpt()
                        : wp_trim_words(get_the_content(), 20),
                    'month' => $eventDate->format("M"),
                    'day' => $eventDate->format("d"),
                ];
            }
        }
        wp_reset_postdata();
    }

    // Removing the keys from the post arrays
    foreach($posts as $key => $postTypeArray){
        $posts[$key] = array_values($postTypeArray);
    }

    return $posts;
}