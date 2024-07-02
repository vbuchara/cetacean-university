<?php 
    /**
     * @var array{imageUrl: string, imageDefault: string} $attributes
     * @var string $content
     */
    if(!isset($attributes['imageDefault'])){
        $attributes['imageDefault'] = "/images/boat.jpg";
    };

    if(!isset($attributes['imageUrl']) || empty($attributes['imageUrl'])){
        $attributes["imageUrl"] = get_theme_file_uri($attributes["imageDefault"]);
    }
?>
<div 
    class="hero-slider__slide" 
    style="--bg-image: url(<?= $attributes["imageUrl"] ?>)"
>
    <div class="hero-slider__interior container">
        <div class="hero-slider__overlay t-center">
            <?= $content ?>
        </div>
    </div>
</div>