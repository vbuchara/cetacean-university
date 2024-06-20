<?php

class Cetacean_University_Blocks {
    /**
     * @var array<string, WP_Block_Type>
     */
    public $registeredBlocks = [];

    /**
     * @param string[] $blockNames
     */
    public function __construct(
        array $blockNames
    ){
        foreach ($blockNames as $blockName) {
            $registeredBlock = $this->register_block_type($blockName);

            if($registeredBlock instanceof WP_Block_Type) {
                $this->registeredBlocks[$blockName] = $registeredBlock;
            }
        }
    }

    private function register_block_type(
        string $blockName
    ){
        $blockAssetsFile = "/build/blocks/$blockName.asset.php";
        $blockScriptFile = "/build/blocks/$blockName.js";

        if(!file_exists(get_theme_file_path($blockAssetsFile)) || !file_exists(get_theme_file_path($blockScriptFile))) 
            return false;

        /** 
         * @var array{
         *  dependencies: array<string>,
         *  version: string
         * } 
         */
        $blockAssets = include get_theme_file_path($blockAssetsFile);
    
        $scriptName = "cetacean-university-" . $blockName . "-block";
    
        wp_register_script(
            $scriptName, 
            get_theme_file_uri($blockScriptFile),
            $blockAssets['dependencies'],
            $blockAssets['version'],
        );

        if(count($this->registeredBlocks) == 0) {
            wp_localize_script(
                $scriptName, 
                "cetaceanUniversityData",
                [
                    "theme_path" => get_theme_file_uri(),
                    "events_archive_link" => get_post_type_archive_link("event"),
                    "blog_link" => site_url("/blog")
                ]
            );
        }
    
        return register_block_type(
            "cetacean-university-theme/$blockName",
            [
                "editor_script" => $scriptName,
                "render_callback" => $this->get_render_callback($blockName)
            ]
        );
    }

    private function get_render_callback(
        string $blockName
    ){
        $blockRenderHTMLPath = "/src/blocks/$blockName/render.php";
        $blockFrontendAssetsFile = "/build/blocks/$blockName-frontend.asset.php";
        $blockFrontendScriptFile = "/build/blocks/$blockName-frontend.js";

        if(!file_exists(get_theme_file_path($blockRenderHTMLPath))) return null;
    
        return function(
            array $attributes,
            string $content
        ) use ($blockName, $blockFrontendAssetsFile, $blockFrontendScriptFile, $blockRenderHTMLPath) {
            ob_start();

            if(!is_admin() && $this->files_exist([$blockFrontendAssetsFile, $blockFrontendScriptFile])){
                /** 
                 * @var array{
                 *  dependencies: array<string>,
                 *  version: string
                 * } 
                 */
                $blockFrontendAssets = include get_theme_file_path($blockFrontendAssetsFile);
                $scriptName = "cetacean-university-" . $blockName . "-frontend-block";

                wp_enqueue_script(
                    $scriptName, 
                    get_theme_file_uri($blockFrontendScriptFile),
                    $blockFrontendAssets['dependencies'],
                    $blockFrontendAssets['version'],
                    true
                );
            }

            require get_theme_file_path($blockRenderHTMLPath);

            return ob_get_clean();
        };
    }

    /**
     * @param string[] $files
     */
    private function files_exist(
        array $files
    ){
        foreach ($files as $file){
            if(!file_exists(get_theme_file_path($file))) return false;
        }

        return true;
    }
}