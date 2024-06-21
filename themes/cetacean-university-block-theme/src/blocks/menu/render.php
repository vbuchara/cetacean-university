<?php
    function is_active(string $page){
        $postParentId = wp_get_post_parent_id();

        $itemsToActivate = [
            'Blog' => get_post_type() == "post" || is_page("blog"),
            'Events' => is_singular("event") || is_page("past-events") || get_post_type() == "event",
            'Programs' => is_singular("program") || get_post_type() == "program",
            'Campuses' => is_singular("campus") || get_post_type() == "campus",
            'About Us' => get_post_field('post_name', $postParentId) === "about-us" || is_page("about-us"),
            'Privacy Policy' => get_post_field('post_name', $postParentId) === "privacy-policy" || is_page("privacy-policy")
        ];

        foreach($itemsToActivate as $itemTitle => $activate){
            if($page === $itemTitle && $activate){
                return true;
            }
        }

        return false;
    }
?>
<div class="site-header__menu group">
    <nav class="main-navigation">
        <div class="menu-main-menu-container">
            <ul id="menu-main-menu" class="menu">
                <li class="menu-item <?= is_active("Blog") ? "current-menu-item" : "" ?>">
                    <a href="<?= site_url("/blog") ?>">Blog</a>
                </li>
                <li class="menu-item <?= is_active("Events") ? "current-menu-item" : "" ?>">
                    <a href="<?= get_post_type_archive_link("event") ?>">
                        Events
                    </a>
                </li>
                <li class="menu-item <?= is_active("Programs") ? "current-menu-item" : "" ?>">
                    <a href="<?= get_post_type_archive_link("program") ?>">
                        Programs
                    </a>
                </li>
                <li class="menu-item <?= is_active("Campuses") ? "current-menu-item" : "" ?>">
                    <a href="<?= get_post_type_archive_link("campus") ?>">
                        Campuses
                    </a>
                </li>
                <li class="menu-item  <?= is_active("About Us") ? "current-menu-item" : "" ?>">
                    <a href="<?= site_url("/about-us") ?>">
                        About Us
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="site-header__util">
        <?php if (is_user_logged_in()): ?>
            <a href="<?= esc_url(site_url('/my-notes')) ?>"
                class="btn btn--small btn--secondary float-left push-right btn--slide-from-left">
                My Notes
            </a>
            <a href="<?= wp_logout_url() ?>"
                class="btn btn--small btn--secondary float-left btn--with-photo btn--slide-from-left">
                <span class="site-header__avatar">
                    <?= get_avatar(get_current_user_id(), 60) ?>
                </span>
                <span class="btn__text">
                    Log Out
                </span>
            </a>
        <?php else: ?>
            <a href="<?= wp_login_url() ?>"
                class="btn btn--small btn--secondary float-left push-right btn--slide-from-left">
                Login
            </a>
            <a href="<?= wp_registration_url() ?>"
                class="btn btn--small btn--secondary float-left btn--slide-from-left">
                Sign Up
            </a>
        <?php endif; ?>
        <a href="<?= esc_url(site_url('/search')) ?>" class="search-trigger js-search-trigger">
            <i class="fa fa-search" aria-hidden="true"></i>
        </a>
    </div>
</div>