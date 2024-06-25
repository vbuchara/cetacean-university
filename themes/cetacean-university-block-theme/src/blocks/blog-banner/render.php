<?php
    /**
     * @var array{
     *  title: string,
     *  subtitle: string,
     *  bannerImageId: number,
     * } $attributes
     * @var $content string
     */
    $postBannerImage = isset($attributes['bannerImageId']) ? wp_get_attachment_url($attributes['bannerImageId']) : "";
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
        <h1 class="page-banner__title">
            <?= isset($attributes['title']) ? $attributes['title'] : "Our Blog"; ?>
        </h1>
        <div class="page-banner__intro">
            <p>
                <?= isset($attributes['subtitle']) ? $attributes['subtitle'] : "Check out our latest posts!"; ?>
            </p>
        </div>
    </div>
</div>