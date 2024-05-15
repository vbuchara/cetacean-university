<footer class="site-footer">
    <div class="site-footer__inner container container--narrow">
        <div class="group">
            <div class="site-footer__col-one">
                <h1 class="school-logo-text school-logo-text--alt-color">
                    <a href="<?= site_url() ?>">
                        <strong>Cetacean</strong> University
                    </a>
                </h1>
                <p>
                    <?php $phoneNumber = get_theme_mod('phone_number'); ?>
                    <?php if(!empty($phoneNumber)): ?>
                        <a 
                            class="site-footer__link" 
                            href="#"
                        >
                            <?= $phoneNumber ?>
                        </a>
                    <?php endif; ?>
                </p>
            </div>

            <div class="site-footer__col-two-three-group">
                <div class="site-footer__col-two">
                    <h3 class="headline headline--small">Explore</h3>
                    <nav class="nav-list footer-menu-1">
                        <ul>
                           <?php 
                                wp_nav_menu([
                                    "theme_location" => "footer-menu-1"
                                ]) 
                           ?>
                        </ul>
                    </nav>
                </div>

                <div class="site-footer__col-three">
                    <h3 class="headline headline--small">Learn</h3>
                    <nav class="nav-list">
                        <ul>
                            <?php 
                                wp_nav_menu([
                                    "theme_location" => "footer-menu-2"
                                ]) 
                           ?>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="site-footer__col-four">
                <h3 class="headline headline--small">Connect With Us</h3>
                <nav>
                    <ul class="min-list social-icons-list group">
                        <li>
                            <a href="#" class="social-color-facebook"><i class="fa fa-facebook"
                                    aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-color-twitter"><i class="fa fa-twitter"
                                    aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-color-youtube"><i class="fa fa-youtube"
                                    aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-color-linkedin"><i class="fa fa-linkedin"
                                    aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-color-instagram"><i class="fa fa-instagram"
                                    aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="site-footer__copyright">
            <p>Copyright © 2001-2024 Cetacean University All Rights Reserved</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>