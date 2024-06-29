<?php

add_action('rest_api_init', 'cetacean_university_register_editor_routes');

function cetacean_university_register_editor_routes(){
    register_rest_route('cetacean-university/v1', '/editor/variables', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'cetacean_university_get_possible_variables',
    ));
}

function cetacean_university_get_possible_variables(){
    /** @var Cetacean_University_Editor_Variables */
    $editorVariables = Cetacean_University_Editor_Variables::getInstance();

    return [
        'variables' => $editorVariables->getPossibleVariablesNames(),
        'indicator' => $editorVariables->getVariableIndicator(),
        'link_variables' => $editorVariables->getPossibleLinkVariables()
    ];
}