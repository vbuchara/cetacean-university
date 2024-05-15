<?php 
    /**
     * @var array{
     *  site_url: string
     * } $args 
     */

    if(!isset($args['site_url'])){
        $args['site_url'] = '/';
    }
?>

<form
    class="search-form"
    action="<?= esc_url(site_url($args['site_url'])) ?>"
    method="get"
>
    <label
        class="headline headline--medium" 
        for="search-input"
    >
        What are you searching for?
    </label>
    <div class="search-form-row">
        <input 
            id="search-input"
            class="s"
            type="search"
            placeholder="Type what you want to search for!"
            name="s"
        />
        <button
            class="search-submit btn btn--primary btn--slide-from-top"
            type="submit"
        >Search</button>
    </div>
</form>