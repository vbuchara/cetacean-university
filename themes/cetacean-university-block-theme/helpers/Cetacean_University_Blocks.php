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

    public function register_block_type(
        string $blockName
    ){
        $blockAssetsFile = "/build/blocks/$blockName.asset.php";
        $blockScriptFile = "/build/blocks/$blockName.js";

        if(!file_exists(get_theme_file_path($blockAssetsFile)) || !file_exists(get_theme_file_path($blockAssetsFile))) 
            return false;

        /** 
         * @var array{
         *  dependencies: array<string>,
         *  version: string
         * } 
         */
        $blockAssets = include get_theme_file_path($blockAssetsFile);
    
        $scriptName = "cetacean_university_" . $blockName . "_block";
    
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
                ]
            );
        }
    
        return register_block_type(
            "cetacean-university-theme/$blockName",
            [
                "editor_script" => $scriptName,
            ]
        );
    }
}