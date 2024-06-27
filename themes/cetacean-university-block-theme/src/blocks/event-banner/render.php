<?php
    /**
     * @var array{
     *  title: string,
     *  subtitle: string,
     *  page_banner_image: string
     * } $args
     */

    /** @var string[] */
    
    $title = get_the_title();
    $subtitle = get_field("page_banner_subtitle");
    $postBannerImage = get_field("page_banner_background_image");
    $defaultBannerImage = get_theme_file_uri("/images/ocean.jpg");
?>
<div class="page-banner">
    <div 
        class="page-banner__bg-image" 
        style="--bg-image: url(<?= 
            !empty($postBannerImage) ? $postBannerImage['sizes']['page-banner'] : $defaultBannerImage
        ?>)"
        >
    </div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">
            <?= $title; ?>
        </h1>
        <?php if($subtitle): ?>
            <div class="page-banner__intro">
                <p>
                    <?= $subtitle; ?>
                </p>
            </div>
        <?php endif; ?>
    </div>
    <div class="metabox metabox--position-down metabox--align-with-post metabox--with-home-link">
        <p>
            <a 
                class="metabox__blog-home-link" 
                href="<?= get_post_type_archive_link("event") ?>"
            >
                <i class="fa fa-home" aria-hidden="true"></i>
                All Upcoming Events
            </a>
            <span class="metabox__main">
                <?php the_title() ?>
            </span>
        </p>
    </div>
</div>