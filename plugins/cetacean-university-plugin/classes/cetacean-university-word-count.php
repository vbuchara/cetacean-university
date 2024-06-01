<?php

/**
 * @phpstan-type WordCountOptions array{
 *  'cup_word_count_location': string,
 *  'cup_word_count_headline': string,
 *  'cup_word_count_word_count': string,
 *  'cup_word_count_character_count': string,
 *  'cup_word_count_read_time': string
 * }
 */
class Cetacean_University_Word_Count {
    /**
     * @var WordCountOptions
     */
    static $cupWordCountOptions = [
        'cup_word_count_location' => '0',
        'cup_word_count_headline' => 'Post Statistics',
        'cup_word_count_word_count' => '1',
        'cup_word_count_character_count' => '1',
        'cup_word_count_read_time' => '1'
    ];

    function __construct(){
        add_action('admin_menu', [$this, 'plugin_settings_menu']);
        add_action('admin_init', [$this, 'plugin_settings_init']);

        add_filter('the_content', [$this, 'wrap_content']);
    }

    function plugin_settings_menu() {
        add_options_page(
            'Word Count Settings', 
            esc_html__('Word Count', 'cupdomain'),
            'manage_options', 
            'cetacean-university-plugin-word-count-page', 
            [$this, 'plugin_settings_page_HTML']
        );
    }

    function plugin_settings_init() {
        add_settings_section(
            'cetacean-university-plugin-word-count-section', 
            null, 
            function(){}, 
            'cetacean-university-plugin-word-count-page'
        );
        // Display Location Setting
        add_settings_field(
            'cup_word_count_location', 
            esc_html__('Display Location', 'cupdomain'), 
            [$this, 'word_count_location_HTML'], 
            'cetacean-university-plugin-word-count-page', 
            'cetacean-university-plugin-word-count-section'
        );
        register_setting(
            'cetacean-university-plugin-word-count', 
            'cup_word_count_location',
            [
                'sanitize_callback' => [$this, 'sanitize_location'],
                'default' => static::$cupWordCountOptions['cup_word_count_location']
            ]
        );
        // Headline Setting
        add_settings_field(
            'cup_word_count_headline', 
            esc_html__('Headline Text', 'cupdomain'), 
            [$this, 'word_count_headline_HTML'], 
            'cetacean-university-plugin-word-count-page', 
            'cetacean-university-plugin-word-count-section'
        );
        register_setting(
            'cetacean-university-plugin-word-count', 
            'cup_word_count_headline',
            [
                'sanitize_callback' => 'sanitize_text_field',
                'default' => static::$cupWordCountOptions['cup_word_count_headline']
            ]
        );
        // Word Count Setting
        add_settings_field(
            'cup_word_count_word_count', 
            esc_html__('Display Word Count', 'cupdomain'), 
            [$this, 'word_count_checkbox_setting_HTML'], 
            'cetacean-university-plugin-word-count-page', 
            'cetacean-university-plugin-word-count-section',
            ['name' => 'cup_word_count_word_count']
        );
        register_setting(
            'cetacean-university-plugin-word-count', 
            'cup_word_count_word_count',
            [
                'sanitize_callback' => 'sanitize_text_field',
                'default' => static::$cupWordCountOptions['cup_word_count_word_count']
            ]
        );
        // Character Count Setting
        add_settings_field(
            'cup_word_count_character_count',
            esc_html__('Display Character Count', 'cupdomain'), 
            [$this, 'word_count_checkbox_setting_HTML'], 
            'cetacean-university-plugin-word-count-page', 
            'cetacean-university-plugin-word-count-section',
            ['name' => 'cup_word_count_character_count']
        );
        register_setting(
            'cetacean-university-plugin-word-count', 
            'cup_word_count_character_count',
            [
                'sanitize_callback' => 'sanitize_text_field',
                'default' => static::$cupWordCountOptions['cup_word_count_character_count']
            ]
        );
        // Read Time Setting
        add_settings_field(
            'cup_word_count_read_time', 
            esc_html__('Display Read Time', 'cupdomain'), 
            [$this, 'word_count_checkbox_setting_HTML'], 
            'cetacean-university-plugin-word-count-page', 
            'cetacean-university-plugin-word-count-section',
            ['name' => 'cup_word_count_read_time']
        );
        register_setting(
            'cetacean-university-plugin-word-count', 
            'cup_word_count_read_time',
            [
                'sanitize_callback' => 'sanitize_text_field',
                'default' => static::$cupWordCountOptions['cup_word_count_read_time']
            ]
        );
    }

    function wrap_content(string $content){
        /** @var WordCountOptions */
        $cupWordCountOptions = $this->get_word_count_options();
        $optionsActive = [
            'cup_word_count_word_count' => $cupWordCountOptions['cup_word_count_word_count'],
            'cup_word_count_character_count' => $cupWordCountOptions['cup_word_count_character_count'],
            'cup_word_count_read_time' => $cupWordCountOptions['cup_word_count_read_time']
        ];
        $isSomeWordCountOptionActive = in_array('1', $optionsActive);

        if(is_main_query() && is_single() && $isSomeWordCountOptionActive){
            return $this->word_count_main_HTML($content);
        }

        return $content;
    }

    function word_count_main_HTML(string $content){
        /** @var WordCountOptions */
        $cupWordCountOptions = $this->get_word_count_options();

        $contentWithoutTags = strip_tags($content);

        $useWordCountOptions = [
            'cup_word_count_word_count' => $cupWordCountOptions['cup_word_count_word_count'],
            'cup_word_count_read_time' => $cupWordCountOptions['cup_word_count_read_time']
        ];
        $useWordCount = in_array('1', $useWordCountOptions);
        $wordCount = ($useWordCount)
            ? str_word_count($contentWithoutTags)
            : 0;

        $characterCount = strlen($contentWithoutTags);

        $averageWordsReadByAdultPerMinute = 225;
        $useReadTimeOption = $cupWordCountOptions['cup_word_count_read_time'] == 1;
        $readTimeInMinutes = ($useReadTimeOption)
            ? floor($wordCount / $averageWordsReadByAdultPerMinute)
            : 0;
        $readTimeInSeconds = ($cupWordCountOptions['cup_word_count_read_time'] == 1)
            ? floor(
                (($wordCount / $averageWordsReadByAdultPerMinute) - $readTimeInMinutes) * 60
            ) : 0;
        
        ob_start();
    ?>
        <div class="cup-word-count-container">
            <h3><?= esc_attr($cupWordCountOptions['cup_word_count_headline']) ?></h3>
            <?php if($cupWordCountOptions['cup_word_count_word_count'] == '1'): ?>
                <p><?= 
                    esc_html__('This post has', 'cupdomain')
                ?> <?= $wordCount ?> <?= 
                    esc_html__('words', 'cupdomain') 
                ?>.</p>
            <?php endif; ?>
            <?php if($cupWordCountOptions['cup_word_count_character_count'] == '1'): ?>
                <p><?= 
                    esc_html__('This post has', 'cupdomain') 
                ?> <?= $characterCount ?> <?= 
                    esc_html__('characters', 'cupdomain')
                ?>.</p>
            <?php endif; ?>
            <?php if($cupWordCountOptions['cup_word_count_read_time'] == '1'): ?>
                <p><?=
                    esc_html__('This post is estimated to take', 'cupdomain') 
                ?> <?=
                    !empty($readTimeInMinutes) 
                        ? $readTimeInMinutes . " " . esc_html__('minute(s)', 'cupdomain') 
                        : ""
                ?><?= 
                    !empty($readTimeInMinutes && $readTimeInSeconds) 
                        ? " " . esc_html__('and', 'cupdomain') . " "
                        : ""
                ?><?= 
                    !empty($readTimeInSeconds) 
                        ? $readTimeInSeconds . " " . esc_html__('second(s)', 'cupdomain') 
                        : ""
                ?> <?= 
                    esc_html__('to read', 'cupdomain')
                ?>.</p>
            <?php endif; ?>
        </div>
    <?php
        $html = ob_get_clean();

        if($cupWordCountOptions['cup_word_count_location'] == '0'){
            return  $html . $content;
        }

        return $content . $html;
    }
    
    function plugin_settings_page_HTML(){
    ?> 
        <div class="wrap">
            <h1><?= esc_html__('Word Count Settings', 'cupdomain') ?></h1>
            <form method="post" action="options.php">
                <?php
                    settings_fields('cetacean-university-plugin-word-count');
                    do_settings_sections('cetacean-university-plugin-word-count-page');
                    submit_button();
                ?>
            </form>
        </div>
    <?php
    }

    function word_count_location_HTML() {
        $wordCountLocation = get_option('cup_word_count_location');
    ?> 
        <select name="cup_word_count_location">
            <option 
                value="0" 
                <?php selected($wordCountLocation, '0') ?>
            ><?= esc_html__('Beginning of post', 'cupdomain')?></option>
            <option 
                value="1" 
                <?php selected($wordCountLocation, '1') ?> 
            ><?= esc_html__('End of post', 'cupdomain')?></option>
        </select>
    <?php    
    }

    function word_count_headline_HTML() {
        $wordCountHeadline = get_option('cup_word_count_headline');
    ?> 
        <input 
            type="text"
            name="cup_word_count_headline"
            value="<?= esc_attr($wordCountHeadline) ?>"
        />
    <?php    
    }

    /**
     * @param array{name: string} $args
     */
    function word_count_checkbox_setting_HTML($args) {
        $wordCountSetting = get_option($args['name']);
    ?> 
        <input 
            type="checkbox"
            name="<?= $args['name'] ?>"
            value="1"
            <?php checked($wordCountSetting, '1') ?> 
        />
    <?php
    }

    function sanitize_location(string $location) {
        $validOptions = ['0', '1'];

        if(!in_array($location, $validOptions)){
            add_settings_error(
                'cup_word_count_location',
                'cup_word_count_location_error',
                'Display Location was provided an invalid value'
            );

            return get_option('cup_word_count_location');
        }

        return $location;
    }

    /**
     * @return WordCountOptions
     */
    function get_word_count_options(){
        /** @var WordCountOptions */
        $options = [];

        foreach(static::$cupWordCountOptions as $optionName => $defaultValue){
            $options[$optionName] = get_option($optionName, $defaultValue);
        }

        return $options;
    }
}