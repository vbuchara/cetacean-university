<?php 

class Cetacean_University_Editor_Variables_Helper {
    private function __construct(){}

    public static function block_parse_variables(WP_Block $block){
        $editorVariables = Cetacean_University_Editor_Variables::getInstance();
        $possibleVariables = $editorVariables->getPossibleVariables();
        $innerBlocks = $block->inner_blocks;
        $innerBlocksHTML = "";
    
        /** @var WP_Block $innerBlock */
        foreach ($innerBlocks as $innerBlock){
            /** @var array{showConditionalVariables: string[]} */
            $blockAttrs = $innerBlock->attributes;
    
            if(isset($blockAttrs["showConditionalVariables"])){
                $showConditionalVariables = is_array($blockAttrs["showConditionalVariables"])
                    ? $blockAttrs["showConditionalVariables"]
                    : [];
    
                $shouldExhibit = array_reduce($showConditionalVariables, function(
                    $result, 
                    $variableKey
                ) use ($possibleVariables){
                    if(!$result) return $result;
                    if(!isset($possibleVariables[$variableKey])) return $result;
                    $variable = $possibleVariables[$variableKey]();
    
                    return !empty($variable);
                }, true);
    
                if(!$shouldExhibit) continue;
            }
    
            $parsedInnerBlockContent = array_reduce(array_keys($possibleVariables), function(
                string $result, string $key
            ) use ($possibleVariables) {;
                return str_replace($key, $possibleVariables[$key](), $result);
            }, $innerBlock->render());
            
            $innerBlocksHTML .= $parsedInnerBlockContent;
        }
    
        return $innerBlocksHTML;
    }

    public static function parse_variables(
        string $content
    ){
        $editorVariables = Cetacean_University_Editor_Variables::getInstance();
        $possibleVariables = $editorVariables->getPossibleVariables();
    
        $contentParsed = array_reduce(array_keys($possibleVariables), function(
            string $result, string $key
        ) use ($possibleVariables) {;
            return str_replace($key, $possibleVariables[$key](), $result);
        }, $content);
    
        return $contentParsed;
    }

    public static function parse_link_variables(
        string $link
    ){
        $editorVariables = Cetacean_University_Editor_Variables::getInstance();
        $possibleLinkVariables = $editorVariables->getPossibleLinkVariables();
    
        $linkParsed = array_reduce(array_keys($possibleLinkVariables), function(
            string $result, string $key
        ) use ($possibleLinkVariables) {;
            return str_replace($key, $possibleLinkVariables[$key](), $result);
        }, $link);
    
        return $linkParsed;
    }

    /**
     * @param string[] $showConditionalVariables
     */
    public static function validate_conditional_variables(
        array $showConditionalVariables,
        bool $default = false
    ){
        $editorVariables = Cetacean_University_Editor_Variables::getInstance();
        $possibleVariables = $editorVariables->getPossibleVariables();

        if(count($showConditionalVariables) === 0) return $default;

        $shouldExhibit = array_reduce($showConditionalVariables, function(
            $result, 
            $variableKey
        ) use ($possibleVariables){
            if(!$result) return $result;
            if(!isset($possibleVariables[$variableKey])) return $result;
            $variable = $possibleVariables[$variableKey]();

            return !empty($variable);
        }, true);

        return $shouldExhibit;
    }
}