<?php

/*
  Plugin Name: Pet Adoption (Custom Table)
  Version: 1.0
  Author: Vinicius Vieira Buchara
  Author Uri: https://cetacean-university.buchara.site
  Text Domain: pet-adoption
  Domain Path: /languages
*/

if (!defined('ABSPATH')) exit; 

define('PET_ADOPTION_PLUGIN_BASENAME', dirname(plugin_basename(__FILE__)));
define('PET_ADOPTION__PLUGIN_DIR_URL', plugin_dir_url(__FILE__));
define('PET_ADOPTION__PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));

require_once PET_ADOPTION__PLUGIN_DIR_PATH . 'functions/generatePet.php';
require_once PET_ADOPTION__PLUGIN_DIR_PATH . 'model/Pet.php';

class Pet_Adoption_Plugin
{
	public $tablename;

	public $charset;

	public $numberOfPetsToCreate = 1000;

	/**
	 * @var array<string, array{
	 * 	type: string,
	 * 	primaryKey?: boolean,
	 *  autoIncrement?: boolean,
	 *  required?: boolean,
	 * 	default?: mixed
	 * }>
	 */
	public $attributes = [
		"id" => [
			"type" => "bigint(20)",
			"primaryKey" => true,
			"autoIncrement" => true,
		],
		"pet_name" => [
			"type" => "varchar(60)",
			"required" => true,
			"default" => "\"\""
		],
		"pet_weight" => [
			"type" => "smallint(5)",
            "required" => true,
            "default" => 0
		],
		"birth_year" => [
			"type" => "smallint(5)",
            "required" => true,
            "default" => 0
		],
		"species" => [
			"type" => "varchar(60)",
            "required" => true,
            "default" => "\"\""
		],
        "fav_food" => [
			"type" => "varchar(60)",
            "required" => true,
            "default" => "\"\""
		],
        "fav_hobby" => [
			"type" => "varchar(60)",
            "required" => true,
            "default" => "\"\""
		],
        "fav_color" => [
			"type" => "varchar(60)",
            "required" => true,
            "default" => "\"\""
		]
	];

	function __construct()
	{
		global $wpdb;

		$this->charset = $wpdb->get_charset_collate();
		$this->tablename = $wpdb->prefix . 'pets';

		add_action('activate_pet-adoption/pet-adoption.php', [$this, 'on_activate']);
		// add_action('admin_head', [$this, 'insert_dummy_data']);
		add_action('wp_enqueue_scripts', [$this, 'load_assets']);
		add_action('admin_post_create_pet', [$this, 'create_pet']);
		add_action('admin_post_nopriv_create_pet', [$this, 'create_pet']);
		add_action('admin_post_delete_pet', [$this, 'delete_pet']);
		add_action('admin_post_nopriv_delete_pet', [$this, 'delete_pet']);

		add_filter('template_include', [$this, 'load_template'], 99);
	}

	function on_activate()
	{
		$tableName = $this->tablename;
		$charset = $this->charset;
		$attrs = $this->getAttrsForCreate();
		$query = "CREATE TABLE $tableName ($attrs) $charset";

		require_once(ABSPATH . "wp-admin/includes/upgrade.php");
		dbDelta($query);
	}

	function load_assets()
	{
		if (!is_page('pet-adoption')) return;
			
		wp_enqueue_style(
			'petadoptioncss', 
			PET_ADOPTION__PLUGIN_DIR_URL . 'build/index.css'
		);
	}

	function create_pet(){
		if(!current_user_can("administrator")){
			wp_safe_redirect(site_url());
			exit;
		}
		
		global $wpdb;

		$pet = new PetAdoptionPlugin\Pet(generatePet());
		$pet->pet_name = sanitize_text_field($_POST['pet_name']);

		$wpdb->insert(
			$this->tablename,
			$pet->toArray()
		);

		wp_safe_redirect(site_url('/pet-adoption'));
		exit;
	}

	function delete_pet(){
		if(!current_user_can("administrator")){
			wp_safe_redirect(site_url());
			exit;
		}
		
		global $wpdb;

		$id = sanitize_text_field($_POST['pet_id']);

		$wpdb->delete($this->tablename, ["id" => $id]);

		wp_safe_redirect(site_url('/pet-adoption'));
		exit;
	}

	function load_template($template)
	{
		if (!is_page('pet-adoption')) return $template;

		return PET_ADOPTION__PLUGIN_DIR_PATH . 'templates/template-pets.php';
	}

	function insert_dummy_data()
	{
		$attrsToSelect = array_filter(
			$this->attributes, 
			fn($attr) => $attr != 'id',
			ARRAY_FILTER_USE_KEY
		);
		$attrsToSelectQuery = implode(", ", array_map(fn($attr) => "`$attr`", array_keys($attrsToSelect)));

		$query = "INSERT INTO $this->tablename ($attrsToSelectQuery) VALUES ";

		$numberOfPets = $this->numberOfPetsToCreate;

		for ($i = 0; $i < $numberOfPets; $i++) {
			$pet = generatePet();

			/**
			 * @param string $attr
			 * @param array{
			 * 	type: string,
			 * 	primaryKey?: boolean,
			 *  autoIncrement?: boolean,
			 *  required?: boolean,
			 * 	default?: mixed
			 * } $attrProps
			 */
			$attrsToInsert = array_map(function($attr, $attrProps) use ($pet) {
				return str_starts_with($attrProps['type'], "varchar")
					? "'" . $pet[$attr] . "'"
					: "" . $pet[$attr] . "";
			}, array_keys($attrsToSelect), array_values($attrsToSelect));
			$attrsToInsertQuery = implode(", ", $attrsToInsert);

			$query.= "($attrsToInsertQuery)";

			if ($i != $numberOfPets - 1) {
				$query.= ", ";
			}
		}
		/*
		Never use query directly like this without using $wpdb->prepare in the
		real world. I'm only using it this way here because the values I'm 
		inserting are coming from my innocent pet generator function so I
		know they are not malicious, and I simply want this example script
		to execute as quickly as possible and not use too much memory.
		*/
		global $wpdb;
		$wpdb->query($query);
	}
	
	/**
	 * @return string
	 */
	function getAttrsForCreate(){
		/**
		 * @param string $attr
		 * @param array{
		 * 	type: string,
		 * 	primaryKey?: boolean,
		 *  autoIncrement?: boolean,
		 *  required?: boolean,
		 * 	default?: mixed
		 * } $attrProps
		 * @var string[] $attrsToCreate
		 */
		$attrsToCreate = array_map(function($attr, $attrProps){
			$finalAttr = $attr . " " . $attrProps["type"];

			if (isset($attrProps["primaryKey"]) && $attrProps["primaryKey"]) {
                $finalAttr.= " unsigned NOT NULL";

				if(isset($attrProps["primaryKey"]) && $attrProps["autoIncrement"]){
					$finalAttr.= " AUTO_INCREMENT";
				}

				return $finalAttr;
            }

			if(isset($attrProps["required"]) && $attrProps["required"]) {
				$finalAttr.= " NOT NULL";
			}

			if(isset($attrProps['default'])){
				$finalAttr.= " DEFAULT " . $attrProps['default'];
			}

			return $finalAttr;
		}, array_keys($this->attributes), array_values($this->attributes));

		/**
		 * @param array{
		 * 	type: string,
		 * 	primaryKey?: boolean,
		 *  autoIncrement?: boolean,
		 *  required?: boolean,
		 * 	default?: mixed
		 * } $attrProps
		 */
		$primaryKeyAttr = array_filter(
			$this->attributes, 
			fn($attrProps) => isset($attrProps['primaryKey']) && $attrProps['primaryKey']
		);
		$primaryKey = array_keys($primaryKeyAttr)[0];
		$attrsToCreate[] = "PRIMARY KEY  (" . $primaryKey . ")";

		return implode("," . PHP_EOL, $attrsToCreate);
	}
}

$petAdoptionPlugin = new Pet_Adoption_Plugin();