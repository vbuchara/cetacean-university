<?php 
    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */
?>
<div class="container container--narrow page-section">
    <?php if(!have_posts()): ?>
        <h2 class="headline headline--small-plus">
            No Results Found for the search.
        </h2>
    <?php endif;?>
    <?php while(have_posts()): ?>
        <?php the_post() ?>

        <?php if(get_post_type() === "event"): ?>
            <div class="post-item">
                <?php get_template_part('template-parts/content', get_post_type()) ?>
            </div>
        <?php else: ?>
            <?php get_template_part('template-parts/content', get_post_type()) ?>
        <?php endif; ?>
    <?php endwhile; ?>

    <?= paginate_links() ?>
</div>