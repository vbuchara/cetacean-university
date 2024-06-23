<?php

class Cetacean_University_Blocks {
    /**
     * @var array<string, WP_Block_Type>
     */
    public $registeredBlocks = [];

    /**
     * @param array<string, array{data: array}>|array<string> $blocks
     */
    public function __construct(
        array $blocks
    ){
        foreach ($blocks as $key => $value) {
            /** @var string */
            $blockName = is_string($value) ? $value : $key;
            $blockOptions = is_array($value) ? $value : [];

            $registeredBlock = $this->register_block_type($blockName, $blockOptions);

            if($registeredBlock instanceof WP_Block_Type) {
                $this->registeredBlocks[$blockName] = $registeredBlock;
            }
        }
    }

    /**
     * @param string $blockName
     * @param array{data: array} $blockOptions
     */
    private function register_block_type(
        string $blockName,
        array $blockOptions = []
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

        if(isset($blockOptions["data"])){
            $objectName = $this->convertKebabToPascalCase("cetacean-university-" . $blockName);

            wp_localize_script(
                $scriptName, 
                $objectName . "Data",
                $blockOptions["data"]
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
            string $content,
            WP_Block $block
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

    private function convertKebabToPascalCase(string $value){
        return str_replace('-', '', ucwords($value, '-'));
    }
}