<?php
    /**
     * @var array{
     *  siteAnchor: string,
     *  siteAnchorWithLink: boolean,
     *  phoneNumber?: string,
     *  links: array{
     *   phoneNumber?: string,
     *   facebook?: string;,
     *   instagram?: string,
     *   linkedin?: string,
     *   twitter?: string,
     *   youtube?: string,
     *  }
     * } $attributes
     * @var string $content
     */
    if (!isset($attributes['siteAnchor'])) {
        $attributes['siteAnchor'] = get_bloginfo("name");
    };
    if (!isset($attributes['siteAnchorWithLink'])) {
        $attributes['siteAnchorWithLink'] = true;
    };
    if (!isset($attributes['links'])) {
        $attributes['links'] = [];
    };

    $links = $attributes["links"];

    /**
     * @var array{
     *  facebook?: string;,
     *  instagram?: string,
     *  linkedin?: string,
     *  twitter?: string,
     *  youtube?: string,
     * }
     */
    $socialLinks = array_filter([
        "facebook" => isset($links["facebook"])? $links["facebook"] : "",
        "twitter" => isset($links["twitter"])? $links["twitter"] : "",
        "youtube" => isset($links["youtube"])? $links["youtube"] : "",
        "linkedin" => isset($links["linkedin"])? $links["linkedin"] : "",
        "instagram" => isset($links["instagram"])? $links["instagram"] : "",
    ], fn($link) => !empty($link));
    $socialMediaIcons = [
        "facebook" => "fa-brands fa-facebook-f",
        "twitter" => "fa-brands fa-twitter",
        "youtube" => "fa-brands fa-youtube",
        "linkedin" => "fa-brands fa-linkedin",
        "instagram" => "fa-brands fa-instagram",
    ];
?>
<footer class="site-footer">
    <div class="site-footer__inner container container--narrow">
        <div class="site-footer__main-info">
            <div class="site-footer__col-one">
                <h1 class="school-logo-text school-logo-text--alt-color">
                    <a
                        href="<?= $attributes["siteAnchorWithLink"] ? site_url() : "" ?>"
                    >
                        <?= $attributes["siteAnchor"] ?>
                    </a>
                </h1>
                <?php if(isset($attributes["phoneNumber"]) && $attributes["phoneNumber"]): ?>
                    <p>
                        <a
                            class="site-footer__link"
                            href="<?= isset($links["phoneNumber"]) ? $links["phoneNumber"] : "" ?>"
                        >
                            <?= $attributes["phoneNumber"] ?>
                        </a>
                    </p>
                <?php endif; ?>
            </div>
            <div class="site-footer__col-two-three-group">
                <div class="site-footer__col-two">
                    <h3 class="headline headline--small">Explore</h3>
                    <nav class="nav-list footer-menu-1">
                        <div class="menu-explore-menu-container">
                            <ul id="menu-explore-menu" class="menu">
                                <li class="menu-item">
                                    <a href="<?= get_post_type_archive_link("program") ?>">
                                        Programs
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="<?= get_post_type_archive_link("event") ?>">
                                        Events
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="<?= get_post_type_archive_link("campus") ?>">
                                        Campuses
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div class="site-footer__col-three">
                    <h3 class="headline headline--small">Learn</h3>
                    <nav class="nav-list">
                        <div class="menu-learn-menu-container">
                            <ul id="menu-learn-menu" class="menu">
                                <li class="menu-item">
                                    <a href="<?= site_url("/blog") ?>">
                                        Blog
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="<?= site_url("/about-us") ?>">
                                        About Us
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a 
                                        rel="privacy-policy" 
                                        href="<?= site_url("/privacy-policy") ?>"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>                      
                    </nav>
                </div>
            </div>
            <?php if(count($socialLinks) > 0): ?>
                <div class="site-footer__col-four">
                    <h3 class="headline headline--small">Connect With Us</h3>
                    <nav>
                        <ul class="min-list social-icons-list">
                            <?php foreach($socialLinks as $socialMedia => $link): ?>
                                <li>
                                    <a 
                                        href="<?= $link ?>"
                                        class="social-media-icon social-color-<?= $socialMedia ?>"
                                    >
                                        <i class="<?= $socialMediaIcons[$socialMedia] ?>"></i>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </nav>
                </div>
            <?php endif; ?>
        </div>
        <div class="site-footer__copyright">
            <p>Copyright © 2001-2024 Cetacean University All Rights Reserved</p>
        </div>
    </div>
</footer>