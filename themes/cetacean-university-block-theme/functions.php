<?php

require_once get_theme_file_path('/helpers/Cetacean_University_Blocks.php');
require_once get_theme_file_path("/helpers/Cetacean_University_Editor_Variables.php");
require_once get_theme_file_path("/helpers/Cetacean_University_Editor_Variables_Helper.php");

foreach (glob(get_theme_file_path("/restapi") . "/*.php") as $file){
    if(is_file($file)){
        require_once $file;
    }
};

/**
 * Load the css and js scripts for the theme
 */
function university_scripts() {
    $jsAssetsPath = get_theme_file_path("/build/index.asset.php");
    /** 
     * @var array{
     *  dependencies: array<string>,
     *  version: string
     * } 
     */
    $jsAssets = file_exists($jsAssetsPath) ? include $jsAssetsPath : [];

    wp_enqueue_style(
        "google-fonts",
        "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i"
    );
    wp_enqueue_style(
        "font-awesome",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    );
    wp_enqueue_style(
        "cetacean_university_index",
        get_theme_file_uri("/build/index.css")
    );
    wp_enqueue_script(
        "google_map_js",
        "//maps.googleapis.com/maps/api/js?key=" . GOOGLE_MAPS_API_KEY,
        [],
        "1.0",
        true
    );
    wp_enqueue_script(
        "cetacean_university_js",
        get_theme_file_uri("/build/index.js"),
        isset($jsAssets['dependencies']) ? $jsAssets['dependencies'] : ['jquery'],
        isset($jsAssets['version']) ? $jsAssets['version'] : "1.0",
        true
    );

    wp_localize_script(
        "cetacean_university_js", 
        "cetaceanUniversityData",
        [
            "root_url" => get_site_url(),
            "nonce" => wp_create_nonce("wp_rest")
        ]
    );
}

function university_login_scripts(){
    wp_enqueue_style(
        "google-fonts",
        "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i"
    );
    wp_enqueue_style(
        "font-awesome",
        "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    );
    wp_enqueue_style(
        "cetacean_university_index",
        get_theme_file_uri("/build/index.css")
    );
}

function cetacean_university_after_setup(){
    add_theme_support("title-tag");
    add_theme_support("post-thumbnails");
    add_theme_support("editor-styles");

    add_editor_style([
        "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i",
        "/build/index.css"
    ]);

    add_image_size("page-banner", 1500, 350, true);
    add_image_size("professor-landscape", 400, 260, true);
    add_image_size("professor-portrait", 480, 650, true);

    register_nav_menu("main-menu", "Main Menu Location");
    register_nav_menu("footer-menu-1", "Footer Menu Location 1");
    register_nav_menu("footer-menu-2", "Footer Menu Location 2");
}

function cetacean_university_adjust_queries(
    WP_Query $query
){
    if(
        !is_admin() &&
        is_post_type_archive('event') &&
        $query->is_main_query()
    ){
        $query->set("meta_key", 'event_date');
        $query->set("orderby", 'meta_value');
        $query->set("order", 'ASC');
        $query->set("meta_query", [
            [
                'key' => 'event_date',
                'value' => date('YmdHis'),
                'compare' => '>=',
                'type' => 'DATE'
            ]
        ]);
    };

    if(
        !is_admin() &&
        is_post_type_archive('program') &&
        $query->is_main_query()
    ){
        $query->set("posts_per_page", -1);
        $query->set("orderby", 'title');
        $query->set("order", 'ASC');
    }

    if(
        !is_admin() &&
        is_post_type_archive('campus') &&
        $query->is_main_query()
    ){
        $query->set("posts_per_page", -1);
    }
}

function university_redirect_subscribers() {
    $currentUser = wp_get_current_user();

    if(
        count($currentUser->roles) === 1 && 
        $currentUser->roles[0] === 'subscriber'
    ){
        wp_redirect(site_url('/'));
        exit;
    }
}

function university_no_subscriber_admin_bar(){
    $currentUser = wp_get_current_user();

    if(
        count($currentUser->roles) === 1 && 
        $currentUser->roles[0] === 'subscriber'
    ){
        show_admin_bar(false);
        return;
    }
}

function cetacean_university_init_blocks(){
    /** @var array<string, array{data: array}>|array<string> */
    $blocks = require get_theme_file_path("/helpers/blocksToRegister.php");

    new Cetacean_University_Blocks($blocks);
}

// Actions to load the CSS and JS scripts
add_action("wp_enqueue_scripts", "university_scripts");

// Add CSS theme files on login page
add_action('login_enqueue_scripts', 'university_login_scripts');

// Set additional information after theme setup
add_action("after_setup_theme", "cetacean_university_after_setup");

add_action('pre_get_posts', 'cetacean_university_adjust_queries');

// Redirect subscribers out of the admin panel
add_action('admin_init', 'university_redirect_subscribers');

// Remove the admin bar from subscribers
add_action('wp_loaded', 'university_no_subscriber_admin_bar');

add_action('init', 'cetacean_university_init_blocks');

function cetacean_theme_get_the_archive_title(
    $title, $original_title, $prefix
) {
	if(is_day()){
        return sprintf(
			/* translators: 1: Title prefix. 2: Title. */
			_x( '%1$s %2$s', 'archive title' ),
			$prefix,
			'<span>'. date("d F, Y", strtotime($original_title)) .'</span>'
		);;
    }

    return $title;
}

function cetacean_university_nav_classes(
    array $classes, $item
) {
    $postParentId = wp_get_post_parent_id();

    $itemsToActivate = [
        'Blog' => get_post_type() == "post",
        'Events' => is_singular("event") 
            || is_page("past-events"),
        'Programs' => is_singular("program"),
        'Campuses' => is_singular("campus"),
        'About Us' => get_post_field('post_name', $postParentId) === "about-us",
        'Privacy Policy' => get_post_field('post_name', $postParentId) === "privacy-policy"
    ];

    foreach($itemsToActivate as $itemTitle => $activate){
        if($item->title === $itemTitle && $activate){
            $classes[] = 'current-menu-item';
        }
    }

    return $classes;
}    

function cetacean_university_map_key($api){
    $api['key'] = GOOGLE_MAPS_API_KEY;
    
    return $api;
}


function university_posts_query_where( 
    string $where, 
    WP_Query $wp_query 
) {
    $extend_where = $wp_query->get('extend_where');

    if(!empty($extend_where)) {
        $where .= " AND " . $extend_where;
    }

    return $where;
}

function university_header_url() {
    return esc_url(site_url('/'));
}

function university_header_text(){
    return get_bloginfo('name');
}

/**
 * @param array{
 *  post_author: mixed,
 *  post_date: mixed,
 *  post_date_gmt: mixed,
 *  post_content: mixed,
 *  post_content_filtered: mixed,
 *  post_title: mixed,
 *  post_excerpt: mixed,
 *  post_status: mixed,
 *  post_type: mixed,
 *  comment_status: mixed,
 *  ping_status: mixed,
 *  post_password: mixed,
 *  post_name: mixed,
 *  to_ping: mixed,
 *  pinged: mixed,
 *  post_modified: mixed,
 *  post_modified_gmt: mixed,
 *  post_parent: mixed,
 *  menu_order: mixed,
 *  guid: mixed
 * } $data
 * @param array{
 *  post_status: mixed,
 *  post_type: mixed,
 *  post_author: mixed,
 *  ping_status: mixed,
 *  post_parent: mixed,
 *  menu_order: mixed,
 *  to_ping: mixed,
 *  pinged: mixed,
 *  post_password: mixed,
 *  guid: mixed,
 *  post_content_filtered: mixed,
 *  post_excerpt: mixed,
 *  import_id: mixed,
 *  post_content: mixed,
 *  post_title: mixed,
 *  ID: mixed,
 *  post_date: mixed,
 *  post_date_gmt: mixed,
 *  comment_status: mixed,
 *  post_name: mixed,
 *  post_modified: mixed,
 *  post_modified_gmt: mixed,
 *  post_mime_type: mixed,
 *  comment_count: mixed,
 *  ancestors: mixed,
 *  post_category: mixed,
 *  tags_input: mixed,
 *  filter: mixed
 * } $post
 * @param boolean $isUpdate
 */
function university_manipulate_note_data(
    $data,
    $post,
    $_,
    $isUpdate
){
    if($data['post_type'] === 'note'){

        if(
            count_user_posts(get_current_user_id(), 'note') >= 10 &&
            !$isUpdate
        ){
            wp_send_json([
                'message' => "Sorry, you have reached your note limit. Try delete some older note.",
                'code' => 'note_limit_error'
            ], 400);
        }

        if($data['post_status'] !== 'trash'){
            $data['post_status'] = "private";
        }

        $data['post_title'] = sanitize_text_field($data['post_title']);
        $data['post_content'] = sanitize_textarea_field($data['post_content']);
    }

    return $data;
}

function university_notes_title_format(
    string $prepend,
    WP_Post $post
){
    if(get_post_type($post) === 'note'){
        return "%s";
    }

    return $prepend;
}

function cetacean_university_blocks_category(array $categories){
    $cetaceanUniversityCategory = [
        'slug' => 'cetacean-university',
        'title' => 'Cetacean University'
    ];

    return [$cetaceanUniversityCategory, ...$categories];
}

function cetacean_university_adjust_rest_query(array $args, WP_REST_Request $request){
    require get_theme_file_path("/helpers/get_meta_queries.php");
    
    $metaQuery = cetacean_university_get_meta_queries($request);

    $newArgs = [
        'meta_key'   => $request->get_param('meta_key'),
        'meta_value' => $request->get_param('meta_value'),
        'meta_query' => $metaQuery,
        'author' => $request->get_param("author")
    ];

    return array_merge($args, $newArgs);
}

function cetacean_university_add_meta_value_to_orderby(array $params){
    $params['orderby']['enum'][] = 'meta_value';
	return $params;
}

/**
 * @param WP_REST_Response|WP_HTTP_Response|WP_Error $response
 */
function cetacean_university_add_has_children_to_page_response(
    mixed $response, 
    array $handler, 
    WP_REST_Request $request
){
    if($response instanceof WP_REST_Response && !$response->is_error()){
        if(get_post_type() !== "page") return $response;
        if($request->get_method() !== "GET") return $response;
        if(!$request->get_param("withHasChildren")) return $response;
        /** @var array */
        $pagesOrPage = $response->get_data();
        $urlParams = $request->get_url_params();
        $pages = !isset($urlParams["id"]) ? $pagesOrPage : null;
        $singlePage = isset($urlParams["id"]) ? $pagesOrPage : null;
        
        if($pages) {
            $newData = array_map(function(array $page){
                $childrenPagesQuery = new WP_Query([
                    'post_type' => 'page',
                    'posts_per_page' => -1,
                    'post_parent' => $page['id']
                ]);

                $page["hasChildren"] = $childrenPagesQuery->post_count > 0;

                return $page;
            }, $pages);

            $response->set_data($newData);
        }

        if($singlePage){
            $newData = [...$singlePage];
            $childrenPagesQuery = new WP_Query([
                'post_type' => 'page',
                'posts_per_page' => -1,
                'post_parent' => $singlePage['id']
            ]);

            $newData["hasChildren"] = $childrenPagesQuery->post_count > 0;

            $response->set_data($newData);
        }
    }

    return $response;
}

function cetacean_university_add_link_variables_to_search(
    mixed $response, 
    array $handler, 
    WP_REST_Request $request
){
    if($response instanceof WP_REST_Response && !$response->is_error()){
        if($request->get_route() !== "/wp/v2/search") return $response;
        if($request->get_method() !== "GET") return $response;
        if(!$request->get_param("type")) return $response;
        if(!$request->get_param("search")) return $response;
        if($request->get_param("type") !== "term") return $response;

        /** @var array */
        $searchResults = $response->get_data();
        $searchTerm = $request->get_param("search");
        $editorVariables = Cetacean_University_Editor_Variables::getInstance();

        $possibleLinkVariablesNames = $editorVariables->getPossibleLinkVariablesNames();
        $linkVariables = array_map(function($variable, $index) use ($editorVariables){
            return [
                'id' => ($index + 1) * -1,
                'title' => $variable,
                'type' => "Variable",
                'url' => $editorVariables->getVariableNameWithIndicator($variable),
                "_links" => []
            ];
        }, $possibleLinkVariablesNames, array_keys($possibleLinkVariablesNames));
        $filteredLinkVariables = array_filter($linkVariables, function($variableItem) use ($searchTerm){
            return str_contains($variableItem["title"], $searchTerm);
        });
        $modifiedData = array_merge($searchResults, $filteredLinkVariables);
        
        $response->set_data($modifiedData);
    }

    return $response;
}

// Filter for the function get_the_archive_title
add_filter("get_the_archive_title", "cetacean_theme_get_the_archive_title", 10, 3);

add_filter('nav_menu_css_class', 'cetacean_university_nav_classes', 10, 2 );

add_filter('acf/fields/google_map/api', 'cetacean_university_map_key');

add_filter('posts_where', 'university_posts_query_where', 10, 2 );

// Customize Login Screen Url
add_filter('login_headerurl', 'university_header_url');

// Customize Login Screen Title
add_filter('login_headertext', 'university_header_text');

// Manipulates the data to create/update a note
add_filter('wp_insert_post_data', 'university_manipulate_note_data', 10, 4);

// Remove "Private:" prepend from notes
add_filter('private_title_format', 'university_notes_title_format', 10, 2);

// Add Category for Cetacean University Blocks
add_filter('block_categories_all', 'cetacean_university_blocks_category');

// Filter to add Query Params to the rest api
add_filter("rest_post_query", "cetacean_university_adjust_rest_query", 10, 2);
add_filter("rest_event_query", "cetacean_university_adjust_rest_query", 10, 2);
add_filter("rest_campus_query", "cetacean_university_adjust_rest_query", 10, 2);
add_filter("rest_program_query", "cetacean_university_adjust_rest_query", 10, 2);
add_filter("rest_professor_query", "cetacean_university_adjust_rest_query", 10, 2);
add_filter("rest_note_query", "cetacean_university_adjust_rest_query", 10, 2);
add_filter("rest_like_query", "cetacean_university_adjust_rest_query", 10, 2);

// Filter to add meta_value to orderby enum in the rest api
add_filter('rest_post_collection_params', 'cetacean_university_add_meta_value_to_orderby', 10);
add_filter('rest_event_collection_params', 'cetacean_university_add_meta_value_to_orderby', 10);

add_filter('rest_request_after_callbacks', 'cetacean_university_add_has_children_to_page_response', 10, 3);
add_filter('rest_request_after_callbacks', 'cetacean_university_add_link_variables_to_search', 11, 3);