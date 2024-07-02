<?php 

final class Cetacean_University_Editor_Variables {

    /** @var \Cetacean_University_Editor_Variables */
    private static $instance;

    private $variableIndicator = "#{variable}";

    /** @var array<string, Closure(): string> */
    private $possibleVariables = [];

    /** @var array<string, Closure(): string> */
    private $possibleLinkVariables = [];

    private function __construct() {
        $this->initPossibleVariables();
        $this->initPossibleLinkVariables();
    }

    private function initPossibleVariables() {
        $this->possibleVariables = [
            "Archive Title" => fn() => get_the_archive_title(),
            "Post/Page Title" => fn() => get_the_title(),
            "Post/Page Subtitle" => function(){
                $subtitle = get_field("page_banner_subtitle");
                return !empty($subtitle) ? $subtitle : "";
            },
            "Page Parent Title" => function(){
                $parentPostId = wp_get_post_parent_id(get_the_ID());

                if(!$parentPostId) return "";

                return get_the_title($parentPostId);
            },
            "Post Author With Link" => fn() => get_the_author_posts_link(),
            "Post Date" => fn() => get_the_time("d/m/Y"),
            "Post Category List With Link" => fn() => get_the_category_list(", "),
            "Search Query" => fn() => esc_html(get_search_query(false))
        ];
    }


    private function initPossibleLinkVariables() {
        $this->possibleLinkVariables = [
            "Blog Link" => fn() => site_url("/blog"),
            "Campuses Link" => fn() => get_post_type_archive_link("campus"),
            "Events Link" => fn() => get_post_type_archive_link("event"),
            "Programs Link" => fn() => get_post_type_archive_link("program"),
            "Professors Link" => fn() => get_post_type_archive_link("professor"),
            "Page Parent Link" => function(){
                $parentPostId = wp_get_post_parent_id(get_the_ID());

                if(!$parentPostId) return "";

                return get_permalink($parentPostId);
            },
            "Search Form Action Link" => fn() => esc_url(site_url('/'))
        ];
    }

    public static function getInstance() {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * @return array<string, Closure(): string>
     */
    public function getPossibleVariables(){
        $possibleVariablesKeys = array_keys($this->possibleVariables);

        return array_reduce($possibleVariablesKeys, function($result, $key){
            $newKey = str_replace("variable", $key, $this->variableIndicator);
            $result[$newKey] = $this->possibleVariables[$key];
        
            return $result;
        }, []);
    }

    /**
     * @return array<string, Closure(): string>
     */
    public function getPossibleLinkVariables(){
        $possibleLinkVariablesKeys = array_keys($this->possibleLinkVariables);

        return array_reduce($possibleLinkVariablesKeys, function($result, $key){
            $newKey = str_replace("variable", $key, $this->variableIndicator);
            $result[$newKey] = $this->possibleLinkVariables[$key];
        
            return $result;
        }, []);
    }

    /** @return string[] */
    public function getPossibleVariablesNames(){
        return array_keys($this->possibleVariables);
    }

    /** @return string[] */
    public function getPossibleLinkVariablesNames(){
        return array_keys($this->possibleLinkVariables);
    }

    public function getVariableIndicator(){
        return $this->variableIndicator;
    }

    /**
     * Returns the variable name with the configured indicator, or `false` in case the variable
     * does not exist in the possible variables arrays.
     * 
     * @param string $variableName The name of the variable. Must be present in the arrays of possible
     * variables.
     * @return string|false The variable name with the configured indicator, or `false` in case 
     * the variable was not found.
     */
    public function getVariableNameWithIndicator(string $variableName): string | bool{
        $isInPossibleVariables = in_array($variableName, array_keys($this->possibleVariables));
        $isInPossibleLinkVariables = in_array($variableName, array_keys($this->possibleLinkVariables));

        if(!$isInPossibleVariables && !$isInPossibleLinkVariables) return false;

        return str_replace("variable", $variableName, $this->variableIndicator);
    }
}