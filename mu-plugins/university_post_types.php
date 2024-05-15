<?php 

function cetacean_university_init(){

    // Create Event Post Type
    register_post_type('event', [
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-calendar',
        'capability_type' => 'event',
        'map_meta_cap' => true,
        'supports' => [
            'title',
            'editor',
            'excerpt'
        ],
        'rewrite' => [
            'slug' => 'events'
        ],
        'labels' => [
            'name' => 'Events',
            'singular_name' => 'Event',
            'add_new_item' => 'Add New Event',
            'add_new' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => "All Events",
        ]
    ]);

    // Create Program Post Type
    register_post_type('program', [
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-welcome-learn-more',
        'supports' => [
            'title',
            'editor'
        ],
        'rewrite' => [
            'slug' => 'programs'
        ],
        'labels' => [
            'name' => 'Programs',
            'singular_name' => 'Program',
            'add_new_item' => 'Add New Program',
            'add_new' => 'Add New Program',
            'edit_item' => 'Edit Program',
            'all_items' => "All Programs",
        ]
    ]);

    // Create Professor Post Type
    register_post_type('professor', [
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-businessperson',
        'supports' => [
            'title',
            'editor',
            'thumbnail'
        ],
        'labels' => [
            'name' => 'Professors',
            'singular_name' => 'Professor',
            'add_new_item' => 'Add New Professor',
            'add_new' => 'Add New Professor',
            'edit_item' => 'Edit Professor',
            'all_items' => "All Professors",
        ]
    ]);

    // Create Campus Post Type
    register_post_type('campus', [
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-location',
        'capability_type' => 'campus',
        'map_meta_cap' => true,
        'supports' => [
            'title',
            'editor',
            'excerpt'
        ],
        'rewrite' => [
            'slug' => 'campuses'
        ],
        'labels' => [
            'name' => 'Campuses',
            'singular_name' => 'Campus',
            'add_new_item' => 'Add New Campus',
            'add_new' => 'Add New Campus',
            'edit_item' => 'Edit Campus',
            'all_items' => "All Campuses",
        ]
    ]);

    // Create Note Post Type
    register_post_type('note', [
        'public' => false,
        'show_ui' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-format-aside',
        'capability_type' => 'note',
        'map_meta_cap' => true,
        'supports' => [
            'title',
            'editor'
        ],
        'labels' => [
            'name' => 'Notes',
            'singular_name' => 'Note',
            'add_new_item' => 'Add New Note',
            'add_new' => 'Add New Note',
            'edit_item' => 'Edit Note',
            'all_items' => "All Notes",
        ]
    ]);

    // Create Like Post Type
    register_post_type('like', [
        'public' => false,
        'show_ui' => true,
        'menu_icon' => 'dashicons-heart',
        'supports' => [
            'title',
        ],
        'labels' => [
            'name' => 'Likes',
            'singular_name' => 'Like',
            'add_new_item' => 'Add New Like',
            'add_new' => 'Add New Like',
            'edit_item' => 'Edit Like',
            'all_items' => "All Likes",
        ]
    ]);
}

add_action("init", "cetacean_university_init");
