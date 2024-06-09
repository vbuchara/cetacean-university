<?php
/**
 * Plugin Name: Cetacean University Plugin
 * Description: A custom plugin developed for the Cetacean University website
 * Version: 1.0
 * Author: Vinicius Vieira Buchara
 * Author Uri: https://cetacean-university.buchara.site
 * Text Domain: cupdomain
 * Domain Path: /languages
 */

if(!defined('ABSPATH')) exit;

define('CUP_PLUGIN_BASENAME', dirname(plugin_basename(__FILE__)));
define('CUP_PLUGIN_DIR_URL', plugin_dir_url(__FILE__));
define('CUP_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));

require_once CUP_PLUGIN_DIR_PATH . 'helpers.php';
require_once CUP_PLUGIN_DIR_PATH . 'classes/cetacean-university-word-count.php';
require_once CUP_PLUGIN_DIR_PATH . 'classes/cetacean-university-word-filter.php';
require_once CUP_PLUGIN_DIR_PATH . 'classes/cetacean-university-quiz.php';

class Cetacean_University_Plugin {
    public Cetacean_University_Word_Count $cetacean_university_word_count;
    public Cetacean_University_Word_Filter $cetacean_university_word_filter;
    public Cetacean_University_Quiz $cetacean_university_quiz;


    function __construct(){
        add_action('init', [$this, 'plugin_language']);
        $this->cetacean_university_word_count = new Cetacean_University_Word_Count();
        $this->cetacean_university_word_filter = new Cetacean_University_Word_Filter();
        $this->cetacean_university_quiz = new Cetacean_University_Quiz();
    }

    function plugin_language() {
        load_plugin_textdomain(
            'cupdomain', 
            false, 
            CUP_PLUGIN_BASENAME . '/languages'
        );
    }
}

$cetacean_university_plugin = new Cetacean_University_Plugin();