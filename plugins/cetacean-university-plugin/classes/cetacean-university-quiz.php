<?php

/**
 * 
 */
class Cetacean_University_Quiz {
    function __construct(){
        add_action('init', [$this, 'block_assets']);
        add_action("enqueue_block_assets", function(){
            wp_enqueue_style('dashicons');
        });
    }

    function block_assets(){
        wp_register_style(
            'CupQuizBlock',
            CUP_PLUGIN_DIR_URL . 'build/CupQuizBlock/index.css',
        );
        wp_register_script(
            'CupQuizBlock',
            CUP_PLUGIN_DIR_URL . 'build/CupQuizBlock/index.js',
            [
                'wp-blocks', 
                'wp-element',
                'wp-editor'
            ],
            null,
            true
        );
        register_block_type("cetacean-university-plugin/quiz", [
            'editor_script' => 'CupQuizBlock',
            'editor_style' => 'CupQuizBlock',
            'render_callback' => [$this, 'quiz_render_HTML']
        ]);
    }

    /**
     * @param array{
     *  question: string,
     *  answers: array,
     *  styles: array,
     * } $attributes
     */
    function quiz_render_HTML(
        $attributes
    ){
        if(!is_admin()){
            wp_enqueue_script(
                "CupQuizBlockFrontend", 
                CUP_PLUGIN_DIR_URL . 'build/CupQuizBlock/frontend.js',
                ['wp-element'],
                null,
                true
            );
            wp_enqueue_style(
                "CupQuizBlock", 
                CUP_PLUGIN_DIR_URL . 'build/CupQuizBlock/index.css'
            );
        }

        if(!isset($attributes["styles"])){
            $attributes['styles'] = [];
        }

        ob_start();
    ?>
        <div class="cup-quiz-save-block-root">
            <pre>
                <?= wp_json_encode($attributes) ?>
            </pre>
        </div>
    <?php 
        return ob_get_clean();
    }
}