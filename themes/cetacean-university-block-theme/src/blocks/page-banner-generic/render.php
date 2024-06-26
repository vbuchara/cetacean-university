<?php
    /**
     * @var array{
     *  bannerImageId: number,
     * } $attributes
     * @var string $content 
     */
    $postBannerImage = isset($attributes['bannerImageId']) 
        ? wp_get_attachment_image_src($attributes['bannerImageId'], "page-banner")[0]
        : "";
    $defaultBannerImage = get_theme_file_uri("/images/ocean.jpg");
?>
<div class="page-banner">
    <div 
        class="page-banner__bg-image" 
        style="--bg-image: url(<?= 
            !empty($postBannerImage) ? $postBannerImage : $defaultBannerImage
        ?>)"
        >
    </div>
    <div class="page-banner__content container container--narrow">
        <?= $content ?>
    </div>
</div>