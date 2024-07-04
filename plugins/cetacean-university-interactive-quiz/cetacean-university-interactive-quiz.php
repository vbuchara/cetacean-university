<?php
/**
 * Plugin Name:       Cetacean University Interactive Quiz
 * Description:       An interactive quiz block using the Interactivity API
 * Version:           1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cetacean-university-interactive-quiz
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
require "vendor/autoload.php";

define('CU_IQ_PLUGIN_BASENAME', dirname(plugin_basename(__FILE__)));
define('CU_IQ_PLUGIN_DIR_URL', plugin_dir_url(__FILE__));
define('CU_IQ_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_cetacean_university_interactive_quiz_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build/blocks/interactive-quiz/' );
	register_block_type_from_metadata( __DIR__ . '/build/blocks/solved-quizzes-counter/' );
}
add_action('init', 'create_block_cetacean_university_interactive_quiz_block_init');
