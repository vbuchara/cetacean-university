<?php get_header() ?>

<?php while (have_posts()): ?>
    <?php the_post(); ?>
    <?php get_template_part('template-parts/page-banner') ?>

    <div class="container container--narrow page-section">
        <div 
            class="metabox metabox--position-up metabox--with-home-link"
        >
            <p>
                <a class="metabox__blog-home-link" href="<?= site_url("/blog") ?>">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    All Posts
                </a>
                <span class="metabox__main">
                    Posted by <?php the_author_posts_link() ?> 
                    on <?php the_time("d/m/Y") ?>
                    in <?= get_the_category_list(", ") ?>
                </span>
            </p>
        </div>
        <div class="generic-content">
            <?php the_content() ?>
        </div>
    </div>
<?php endwhile; ?>

<?php get_footer(); ?>