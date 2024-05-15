<?php get_header() ?>

<?php get_template_part('template-parts/page-banner', null, [
    'title' => "Our Blog",
    'subtitle' => "Check out our latest posts!"   
]) ?>

<div class="container container--narrow page-section">
    <?php while(have_posts()): ?>
        <?php the_post() ?>
        <div class="post-item">
            <h2 class="headline headline--medium headline--post-title">
                <a href="<?php the_permalink() ?>">
                    <?php the_title(); ?>
                </a>
            </h2>
            <div class="metabox">
                <p>
                    Posted by <?php the_author_posts_link() ?> 
                    on <?php the_time("d/m/Y") ?>
                    in <?= get_the_category_list(", ") ?>
                </p>
            </div>

            <div class="generic-content">
                <?php the_excerpt() ?>
                <p>
                    <a class="btn btn--primary btn--slide-from-top" href="<?php the_permalink() ?>">
                        Continue reading &raquo;
                    </a>
                </p>
            </div>
        </div>
    <?php endwhile; ?>
    <?= paginate_links() ?>
</div>

<?php get_footer() ?>