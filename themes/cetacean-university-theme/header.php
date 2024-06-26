<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo("charset") ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <header class="site-header">
            <div class="container">
                <h1 class="school-logo-text float-left">
                    <a href="<?= site_url(); ?>">
                        <strong>Cetacean</strong> University
                    </a>
                </h1>
                <a 
                    href="<?= esc_url(site_url('/search')) ?>"
                    class="js-search-trigger site-header__search-trigger"
                >
                    <i class="fa fa-search" aria-hidden="true"></i>
                </a>
                <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
                <div class="site-header__menu group">
                    <nav class="main-navigation">
                        <?php 
                            wp_nav_menu([
                                "theme_location" => "main-menu"
                            ]) 
                        ?>
                    </nav>
                    <div class="site-header__util">
                        <?php if(is_user_logged_in()): ?>
                            <a 
                                href="<?= esc_url(site_url('/my-notes')) ?>" 
                                class="btn btn--small btn--secondary float-left push-right btn--slide-from-left"
                            >
                                My Notes
                            </a>
                            <a 
                                href="<?= wp_logout_url() ?>" 
                                class="btn btn--small btn--secondary float-left btn--with-photo btn--slide-from-left"
                            >
                                <span
                                    class="site-header__avatar"
                                >
                                    <?= get_avatar(get_current_user_id(), 60) ?>
                                </span>
                                <span
                                    class="btn__text"
                                >
                                    Log Out
                                </span>
                            </a>
                            <a 
                                href="<?= esc_url(site_url('/search')) ?>"
                                class="search-trigger js-search-trigger"
                            >
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </a>
                        <?php else: ?>
                            <a 
                                href="<?= wp_login_url()?>" 
                                class="btn btn--small btn--secondary float-left push-right btn--slide-from-left"
                            >
                                Login
                            </a>
                            <a 
                                href="<?= wp_registration_url() ?>" 
                                class="btn btn--small btn--secondary float-left btn--slide-from-left"
                            >
                                Sign Up
                            </a>
                            <a 
                                href="<?= esc_url(site_url('/search')) ?>"
                                class="search-trigger js-search-trigger"
                            >
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </header>
    </body>
</html>