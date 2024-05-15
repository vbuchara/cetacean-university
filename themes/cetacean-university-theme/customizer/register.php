<?php

// Modify customizations
add_action('customize_register', 'university_customize_register', 10, 1);

function university_customize_register(
    WP_Customize_Manager $wp_cutomize
){
    $wp_cutomize->add_setting('phone_number', [
        'type' => 'theme_mod',
        'default' => '',
        'sanitize_callback' => function(string $setting){
            return sanitize_text_field($setting);
        }
    ]);

    $wp_cutomize->add_control('phone_number', [
        'label' => 'Phone Number',
        'description' => 'Set the phone number for the site that appears on the footer',
        'section' => 'title_tagline',
        'priority' => 10,
        'setting' => 'phone_number'
    ]);

    $wp_cutomize->add_setting('primary_color', [
        'type' => 'theme_mod',
        'default' => '#115a82',
        'sanitize_callback' => 'sanitize_hex_color'
    ]);

    $wp_cutomize->add_control(
        new WP_Customize_Color_Control(
            $wp_cutomize,
            'primary_color',
            [
                'section' => 'colors',
                'label' => 'Primary Color',
                'description' => 'Set primary color for the site',
                'priority' => 9,
                'setting' => 'primary_color'
            ]
        )
    );

    $wp_cutomize->add_setting('secondary_color', [
        'type' => 'theme_mod',
        'default' => '#86c4da',
        'sanitize_callback' => 'sanitize_hex_color'
    ]);

    $wp_cutomize->add_control(
        new WP_Customize_Color_Control(
            $wp_cutomize,
            'secondary_color',
            [
                'section' => 'colors',
                'label' => 'Secondary Color',
                'description' => 'Set secondary color for the site',
                'priority' => 10,
                'setting' => 'secondary_color'
            ]
        )
    );
}