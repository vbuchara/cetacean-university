<?php 
    /**
     * @var array{bannerImageUrl: string} $attributes
     * @var string $content
     */
    if(!isset($attributes['bannerImageUrl'])){
        $attributes['bannerImageUrl'] = get_theme_file_uri("/images/library-hero.jpg");
    };
?>
<div class="page-banner">
    <div 
        class="page-banner__bg-image" 
        style="--bg-image: url(<?= $attributes["bannerImageUrl"] ?>)"
    ></div>
    <div class="page-banner__content container t-center c-white">
        <?= $content ?>
    </div>
</div>