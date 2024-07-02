<?php
$editorVariables = Cetacean_University_Editor_Variables::getInstance();

/** @var array<string, array{data: array}>|array<string> */
$blocks = [
    'button',
    'heading',
    'banner' => [
        'data' => [
            'theme_path' => get_theme_file_uri()
        ]
    ],
    'slider',
    'slide' => [
        'data' => [
            'theme_path' => get_theme_file_uri(),
        ]
    ],
    'page-banner-title',
    'page-banner-subtitle',
    'page-banner-generic' => [
        'data' => [
            'theme_path' => get_theme_file_uri(),
        ]
    ],
    'blog-posts' => [
        'data' => [
            'posts_per_page' => get_option( 'posts_per_page' ),
        ]
    ],
    'post-content',
    "page-content",
    'campus-content' => [
        'deps' => ["google_map_js"]
    ],
    'event-content',
    'program-content',
    'professor-content',
    'events-and-posts',
    'upcoming-events', 
    'past-events',
    'all-programs',
    'campuses-map' => [
        'deps' => ["google-maps"]
    ],
    'note-manager',
    'search-form' => [
        'data' => [
            "search_form_action_link" => $editorVariables->getVariableNameWithIndicator("Search Form Action Link"),
        ]
    ],
    'search-results',
    'header',
    'menu' => [
        'data' => [
            'avatar_url' => get_avatar_url(get_current_user_id())
        ]
    ],
    'footer',
];

return $blocks;
