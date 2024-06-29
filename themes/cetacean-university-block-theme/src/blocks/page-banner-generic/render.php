<?php
    /**
     * @var array{
     *  bannerImageId: number,
     *  enableMetabox: boolean,
     *  metaboxInfo: array{
     *      homeLinkText: string,
     *      mainText: string,
     *      homeLinkObject?: array{ url: string },
     *      showConditionalVariables: string[],
     *  }
     * } $attributes
     * @var string $content 
     * @var WP_Block $block
     */
    $postBannerImage = get_field("page_banner_background_image");
    $defaultBannerImage = isset($attributes['bannerImageId']) 
        ? wp_get_attachment_image_src($attributes['bannerImageId'], "page-banner")[0]
        : get_theme_file_uri("/images/ocean.jpg");

    
    $enableMetabox = isset($attributes["enableMetabox"]) ? $attributes['enableMetabox'] : false;
    /** 
     *  @var array{
     *      homeLinkText: string,
     *      mainText: string,
     *      homeLinkObject?: array{ url: string },
     *      showConditionalVariables: string[],
     *  }
     */
    $metaboxInfo = isset($attributes["metaboxInfo"])? $attributes["metaboxInfo"] : [
        "homeLinkText" => "Home Link Text",
        "mainText" => "Main Text",
        "showConditionalVariables" => [],
    ];

    $shouldExhibitMetabox = Cetacean_University_Editor_Variables_Helper::validate_conditional_variables(
        $metaboxInfo["showConditionalVariables"]
    ) && $enableMetabox;
    
    $metaboxLink = isset($metaboxInfo["homeLinkObject"])
        ? Cetacean_University_Editor_Variables_Helper::parse_link_variables($metaboxInfo["homeLinkObject"]["url"])
        : "";

    $metaboxHomeLinkText = Cetacean_University_Editor_Variables_Helper::parse_variables(
        $metaboxInfo["homeLinkText"]
    );
    $metaboxMainText = Cetacean_University_Editor_Variables_Helper::parse_variables(
        $metaboxInfo["mainText"]
    );
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
        <?= Cetacean_University_Editor_Variables_Helper::block_parse_variables($block) ?>
    </div>
    <?php if($shouldExhibitMetabox): ?>
        <div class="metabox metabox--position-down metabox--align-with-post metabox--with-home-link">
            <p>
                <a 
                    class="metabox__blog-home-link" 
                    href="<?= $metaboxLink ?>"
                >
                    <i class="fa fa-home" aria-hidden="true"></i> 
                    <?= $metaboxHomeLinkText ?>
                </a> 
                <span class="metabox__main">
                    <?= $metaboxMainText ?>
                </span>
            </p>
        </div>
    <?php endif; ?>
</div>