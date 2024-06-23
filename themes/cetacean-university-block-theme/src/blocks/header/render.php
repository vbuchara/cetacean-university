<?php 
    /**
     * @var array{siteAnchor: string} $attributes
     * @var string $content
     */
    if(!isset($attributes['siteAnchor'])){
        $attributes['siteAnchor'] = get_bloginfo("name");
    };
?>
<header class="site-header">
    <div class="site-header__container">
        <h1 class="school-logo-text">
            <a href="<?= site_url() ?>" >
                <?= $attributes["siteAnchor"] ?>
            </a>
        </h1>
        <a 
            href="<?= esc_url(site_url('/search')) ?>"
            class="js-search-trigger site-header__search-trigger"
        >
            <i class="fa-solid fa-magnifying-glass site-header__search-trigger-icon" aria-hidden="true"></i>
        </a>
        <button
            class="site-header__menu-trigger site-header__menu-trigger--closed" 
        >
            <i class="fa-solid fa-bars site-header__menu-trigger-open-icon" aria-hidden="true"></i>
            <i class="fa-solid fa-xmark site-header__menu-trigger-close-icon" aria-hidden="true"></i>
        </button>
        <?= $content ?>
    </div>
</header>