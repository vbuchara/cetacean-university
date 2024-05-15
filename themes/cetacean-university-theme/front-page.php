<?php get_header() ?>

<div class="page-banner">
    <div 
        class="page-banner__bg-image" 
        style="--bg-image: url(<?= get_theme_file_uri("/images/library-hero.jpg") ?>)"
    ></div>
    <div class="page-banner__content container t-center c-white">
        <h1 class="headline headline--large">Welcome!!!</h1>
        <h2 class="headline headline--medium">We think you&rsquo;ll like it here.</h2>
        <h3 class="headline headline--small">Check out our majors and enroll today!</h3>
        <a 
            href="<?= get_post_type_archive_link("program") ?>" 
            class="btn btn--large btn--primary btn--slide-from-top"
        >
            Find Your Major
        </a>
    </div>
</div>

<div class="full-width-split group">
    <div class="full-width-split__one">
        <div class="full-width-split__inner">
            <h2 class="headline headline--small-plus t-center">Upcoming Events</h2>
            <?php 
                $homepageEvents = new WP_Query([
                    'posts_per_page' => 2,
                    'post_type' => 'event',
                    'orderby' => 'meta_value',
                    'order' => 'ASC',
                    'meta_key' => 'event_date',
                    'meta_query' => [
                        [
                            'key' => 'event_date',
                            'value' => date('YmdHis'),
                            'compare' => '>=',
                            'type' => 'DATE'
                        ]
                    ]
                ]);
            ?>
            <?php while($homepageEvents->have_posts()): ?>
                <?php $homepageEvents->the_post(); ?>
                <?php get_template_part('template-parts/content-event') ?>
            <?php endwhile; ?>
            <?php wp_reset_postdata() ?>

            <p class="t-center no-margin">
                <a 
                    href="<?= get_post_type_archive_link("event") ?>" 
                    class="btn btn--primary btn--slide-from-top"
                >
                    View All Events
                </a>
            </p>
        </div>
    </div>
    <div class="full-width-split__two">
        <div class="full-width-split__inner">
            <h2 class="headline headline--small-plus t-center">From Our Blogs</h2>
            <?php 
                $homepagePosts = new WP_Query([
                    'posts_per_page' => 2,
                    'post_type' => 'post'
                ]);
            ?>
            <?php while($homepagePosts->have_posts()): ?>
                <?php $homepagePosts->the_post(); ?>
                <div class="event-summary">
                    <a 
                        class="event-summary__date event-summary__date--alt t-center" 
                        href="<?php the_permalink() ?>"
                    >
                        <span class="event-summary__month">
                            <?php the_time("M") ?>
                        </span>
                        <span class="event-summary__day">
                            <?php the_time("d") ?>
                        </span>
                    </a>
                    <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny">
                            <a href="<?php the_permalink() ?>">
                                <?php the_title() ?>
                            </a>
                        </h5>
                        <p>
                            <?= has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 20) ?>
                            <a href="<?php the_permalink() ?>" class="nu text-color--dark-gray">
                                Read more
                            </a>
                        </p>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata() ?>
            <p class="t-center no-margin">
                <a href="<?= site_url("/blog") ?>" class="btn btn--secondary btn--slide-from-top">
                    View All Blog Posts
                </a>
            </p>
        </div>
    </div>
</div>

<div class="hero-slider">
    <div data-glide-el="track" class="glide__track">
        <div class="glide__slides">
            <div 
                class="hero-slider__slide" 
                style="--bg-image: url(<?= get_theme_file_uri("/images/boat.jpg") ?>)"
            >
                <div class="hero-slider__interior container">
                    <div class="hero-slider__overlay">
                        <h2 class="headline headline--medium t-center">Free Transportation</h2>
                        <p class="t-center">All students have free boat trips to our campuses.</p>
                        <p class="t-center no-margin"><a href="#" class="btn btn--primary btn--slide-from-top">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div 
                class="hero-slider__slide" 
                style="--bg-image: url(<?= get_theme_file_uri("/images/salmon.jpg") ?>)"
            >
                <div class="hero-slider__interior container">
                    <div class="hero-slider__overlay">
                        <h2 class="headline headline--medium t-center">A Salmon a Day</h2>
                        <p class="t-center">Our healthcare program recommends eating salmons.</p>
                        <p class="t-center no-margin"><a href="#" class="btn btn--primary btn--slide-from-top">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div 
                class="hero-slider__slide" 
                style="--bg-image: url(<?= get_theme_file_uri("/images/sardine.jpg") ?>)"
            >
                <div class="hero-slider__interior container">
                    <div class="hero-slider__overlay">
                        <h2 class="headline headline--medium t-center">Free Food</h2>
                        <p class="t-center">Cetacean University offers lunch plans for those in need.</p>
                        <p class="t-center no-margin"><a href="#" class="btn btn--primary btn--slide-from-top">Learn more</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider__bullets glide__bullets" data-glide-el="controls[nav]"></div>
    </div>
</div>

<?php get_footer(); ?>