<?php
    /**
     * @var array{
     *  title: string,
     *  subtitle: string,
     *  page_banner_image: string
     * } $args
     */

    /** @var string[] */
    $pageBannerImage = get_field("page_banner_background_image");

    if(!isset($args['title'])){
        $args['title'] = get_the_title();
    }

    if(!isset($args['subtitle'])){
        $args['subtitle'] = get_field("page_banner_subtitle");
    }

    if(!isset($args['page_banner_image'])){
        if(!empty($pageBannerImage)){
            $args['page_banner_image'] = $pageBannerImage['sizes']['page-banner'];
        } else {
            $args['page_banner_image'] = get_theme_file_uri("/images/ocean.jpg");
        }
    }
?>
<div class="page-banner">
    <div 
        class="page-banner__bg-image" 
        style="--bg-image: url(<?= $args['page_banner_image'] ?>)"
        >
    </div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">
            <?= $args['title'] ?>
        </h1>
        <div class="page-banner__intro">
            <p>
                <?= $args['subtitle'] ?>
            </p>
        </div>
    </div>
</div>