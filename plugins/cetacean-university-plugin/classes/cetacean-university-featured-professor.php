<?php 



class Cetacean_University_Featured_Professor {

    public $assets;
    
    function __construct() {
        /** 
         * @var array{
         *  dependencies: array<string>,
         *  version: string
         * } 
         */
        $this->assets = include CUP_PLUGIN_DIR_PATH . 'build/CupFeaturedProfessorBlock/index.asset.php';

        add_action('init', [$this, 'block_assets']);
        add_action("enqueue_block_assets", function(){
            wp_enqueue_style('dashicons');
        });
        add_filter("the_content", [$this, "professor_add_related_posts"]);
    }

    function block_assets() {

        register_meta('post', 'featuredProfessor', [
            'show_in_rest' => true,
            'type' => 'number',
            'single' => false
        ]);
        
        wp_register_style(
            'CupFeaturedProfessorBlock',
            CUP_PLUGIN_DIR_URL. 'build/CupFeaturedProfessorBlock/index.css',
        );
        wp_enqueue_style(
            "google-fonts",
            "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i"
        );
        wp_register_script(
            'CupFeaturedProfessorBlock',
            CUP_PLUGIN_DIR_URL . 'build/CupFeaturedProfessorBlock/index.js',
            $this->assets['dependencies'],
            $this->assets['version'],
            true
        );

        wp_set_script_translations(
            'CupFeaturedProfessorBlock',
            'cupdomain',
            CUP_PLUGIN_DIR_PATH . 'languages'
        );

        register_block_type("cetacean-university-plugin/featured-professor", [
            'editor_script' => 'CupFeaturedProfessorBlock',
            'editor_style' => 'CupFeaturedProfessorBlock',
            'render_callback' => [$this, 'featured_professor_render_HTML']
        ]);
    }

    function professor_add_related_posts(string $content){
        if (!is_singular("professor") || !in_the_loop() || !is_main_query()) return $content;

        return $content . $this->professor_related_posts_HTML();
    }

    /**
     * @param array{
     *  professorFeaturedId: string
     * } $attributes
     */
    function featured_professor_render_HTML($attributes) {
        if(!isset($attributes['professorFeaturedId'])) return null;
        $professorId = $attributes['professorFeaturedId'];

        if(!$this->is_valid_professor($professorId)) return null;

        if(!is_admin()){
            wp_enqueue_script(
                "CupFeaturedProfessorBlockFrontend", 
                CUP_PLUGIN_DIR_URL . 'build/CupFeaturedProfessorBlock/frontend.js',
                $this->assets['dependencies'],
                $this->assets['version'],
                true
            );
            wp_enqueue_style(
                "CupFeaturedProfessorBlock", 
                CUP_PLUGIN_DIR_URL . 'build/CupQuizBlock/index.css'
            );
        }

        if(!isset($attributes["styles"])){
            $attributes['styles'] = [];
        }

        ob_start();
    ?>
        <div class="cup-featured-professor-save-block-root">
            <pre>
                <?= wp_json_encode($attributes) ?>
            </pre>
        </div>
    <?php 
        return ob_get_clean();
    }

    function professor_related_posts_HTML(){
        $posts = new WP_Query([
            'posts_per_page' => -1,
            'post_type' => 'post',
            'meta_query' => [
                [
                    'key' => 'featuredProfessor',
                    'compare' => '=',
                    'value' => get_the_ID()
                ]
            ]
        ]);

        if(!$posts->found_posts) return "";

        ob_start();
    ?>  
        <h4 class="">Professor is mentioned in: </h4>
        <ul>
            <?php while($posts->have_posts()): ?>
                <?php $posts->the_post(); ?>
                <li>
                    <a href="<?php the_permalink() ?>">
                        <?php the_title() ?>
                    </a>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php 
        wp_reset_postdata();
        return ob_get_clean();
    }

    function is_valid_professor(
        string $professorId
    ){
        return get_post_type((string) $professorId) === 'professor';
    }
}