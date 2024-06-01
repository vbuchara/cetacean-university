<?php

/**
 * 
 */
class Cetacean_University_Word_Filter {
    function __construct() {
        add_action('admin_menu', [$this, 'plugin_admin_menu']);
        add_action('admin_init', [$this, 'plugin_settings_init']);
        add_action('the_content', [$this, 'plugin_filter_content']);
    }

    function plugin_admin_menu() {
        $svgEncoded = base64_encode(
            file_get_contents(CUP_PLUGIN_DIR_PATH . 'assets/filter.svg')
        );

        $wordFilterPageHook = add_menu_page(
            esc_html__('Word Filter', 'cupdomain'),
            esc_html__('Word Filter', 'cupdomain'),
            'manage_options',
            'cup-word-filter',
            [$this, 'word_filter_HTML'],
            "data:image/svg+xml;base64,$svgEncoded",
            100
        );
        add_submenu_page(
            'cup-word-filter',
            esc_html__('Words List', 'cupdomain'),
            esc_html__('Words List', 'cupdomain'),
            'manage_options',
            'cup-word-filter',
            [$this, 'word_filter_HTML'],
        );
        add_submenu_page(
            'cup-word-filter',
            esc_html__('Word Filter Options', 'cupdomain'),
            esc_html__('Options', 'cupdomain'),
            'manage_options',
            'cup-word-filter-options',
            [$this, 'word_filter_options_HTML'],
        );
        add_action("load-{$wordFilterPageHook}", [$this, 'word_filter_page_assets']);
    }

    function plugin_settings_init(){
        add_settings_section(
            'cetacean-university-plugin-word-replacement-section',
            null,
            function(){},
            'cup-word-filter-options'
        );
        add_settings_field(
            'cup_word_filter_replacement_word',
            'Replacement Text',
            [$this, 'word_filter_replacement_text_HTML'],
            'cup-word-filter-options',
            'cetacean-university-plugin-word-replacement-section'
        );
        register_setting(
            'cetacean-university-plugin-word-filter',
            'cup_word_filter_replacement_word'
        );
    }

    function plugin_filter_content(string $content) {
        $wordsToFilter = get_option('cup_word_filter_words');
        $wordFilterReplacementWord = get_option('cup_word_filter_replacement_word', '****');

        if(empty($wordsToFilter)) return;

        $wordsToFilterArray = array_map('trim', explode(',', $wordsToFilter));
        return str_ireplace(
            $wordsToFilterArray, 
            esc_html($wordFilterReplacementWord), 
            $content
        );
    }

    function word_filter_replacement_text_HTML(){
        $wordFilterReplacementWord = get_option('cup_word_filter_replacement_word', '****');
    ?>
        <input 
            type="text"
            name="cup_word_filter_replacement_word"
            value="<?= esc_attr($wordFilterReplacementWord) ?>"
        />
    <?php
    }

    function word_filter_HTML() {
    ?>
        <div class="wrap">
            <h1><?= esc_html__('Words to Filter', 'cupdomain') ?></h1>
            <?php if(isset($_POST["hasSubmitted"]) && $_POST['hasSubmitted']): ?>
                <?php $this->word_filter_handle_form() ?>
            <?php endif; ?>
            <form class="word-filter__words-form" action="" method="post">
                <?php wp_nonce_field('save-filtered-words', 'nonce') ?>
                <input type="hidden" name="hasSubmitted" value="true"/>
                <label for="cup-words-to-filter">
                    <?= 
                        esc_html__('Enter a', 'cupdomain')
                    ?> <b><?= esc_html__('comma-separated', 'cupdomain') ?></b> <?=
                        esc_html('list of words you want to filter')
                    ?>.
                </label>
                <div class="word-filter__flex-container">
                    <textarea 
                        name="cup-words-to-filter" 
                        id="cup-words-to-filter"
                        placeholder="<?= esc_html__('awful, things, here', 'cupdomain') ?>"
                    ><?= esc_textarea(get_option('cup_word_filter_words')) ?></textarea>
                </div>
                <button
                    type="submit"
                    name="submit"
                    id="submit"
                    class="button button-primary"
                >
                    <?= esc_html__('Save Changes', 'cupdomain') ?>
                </button>
            </form>
        </div>
    <?php
    }

    function word_filter_handle_form(){
        if(
            !isset($_POST['nonce']) ||
            !wp_verify_nonce($_POST['nonce'], 'save-filtered-words') ||
            !current_user_can('manage_options')
        ) {
        ?>
            <div class="error">
                <p><?= 
                    esc_html__('Sorry, you do not have permission to do that', 'cupdomain')
                ?>.</p>
            </div>
        <?php
            return;
        }   

        /** @var string */
        $wordsToFilter = sanitize_text_field($_POST['cup-words-to-filter']);
        update_option('cup_word_filter_words', $wordsToFilter);
    ?>
        <div class="updated">
            <p><?= 
                esc_html__('Your filter words were saved', 'cupdomain')
            ?>!</p>
        </div>
    <?php
    }

    function word_filter_options_HTML() {
    ?>
        <div class="wrap">
            <h1><?= esc_html__('Word Filter Options', 'cupdomain') ?></h1>
            <form method="post" action="options.php">
                <?php
                    settings_errors();
                    settings_fields('cetacean-university-plugin-word-filter');
                    do_settings_sections('cup-word-filter-options');
                    submit_button();
                ?>
            </form>
        </div>
    <?php
    }

    function word_filter_page_assets(){
        wp_enqueue_style('word-filter-admin-css', CUP_PLUGIN_DIR_URL . 'style.css');
    }
}