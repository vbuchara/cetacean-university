<?php
/** @var array<string, array{data: array}>|array<string> */
$blocks = [
    'button',
    'heading',
    'slider',
    'post-banner' => [
        'data' => [
            'theme_path' => get_theme_file_uri(),
            "blog_link" => site_url("/blog"),
        ]
    ],
    'post-content',
    "page-banner" => [
        'data' => [
            'theme_path' => get_theme_file_uri(),
        ]
    ],
    "page-content",
    'blog-banner' => [
        'data' => [
            'theme_path' => get_theme_file_uri(),
        ]
    ],
    'blog-content' => [
        'data' => [
            'posts_per_page' => get_option( 'posts_per_page' ),
        ]
    ],
    'slide' => [
        'data' => [
            'theme_path' => get_theme_file_uri(),
        ]
    ],
    'banner' => [
        'data' => [
            'theme_path' => get_theme_file_uri()
        ]
    ],
    'events-and-posts' => [
        'data' => [
            "blog_link" => site_url("/blog"),
            "events_archive_link" => get_post_type_archive_link("event"),
        ]
    ],
    'header' => [
        'data' => [
            "search_link" => esc_url(site_url('/search')),
            "site_name" => get_bloginfo("name"),
            "site_url" => site_url(),
        ]
    ],
    'menu' => [
        'data' => [
            'avatar_url' => get_avatar_url(get_current_user_id()),
            "search_link" => esc_url(site_url('/search')),
            "login_link" => wp_login_url(),
            "register_link" => wp_registration_url(),
            "logout_link" => wp_logout_url(),
            "my_notes_link" => esc_url(site_url('/my-notes')),
            "blog_link" => site_url("/blog"),
            "events_archive_link" => get_post_type_archive_link("event"),
            "program_archive_link" => get_post_type_archive_link("program"),
            "campus_archive_link" => get_post_type_archive_link("campus"),
            "about_us_link" => site_url("/about-us")
        ]
    ],
    'footer' => [
        'data' => [
            "site_name" => get_bloginfo("name"),
            "site_url" => site_url(),
            "events_archive_link" => get_post_type_archive_link("event"),
            "program_archive_link" => get_post_type_archive_link("program"),
            "campus_archive_link" => get_post_type_archive_link("campus"),
            "blog_link" => site_url("/blog"),
            "about_us_link" => site_url("/about-us"),
            "privacy_policy_link" => site_url("/privacy-policy"),
        ]
    ]
];

return $blocks;
