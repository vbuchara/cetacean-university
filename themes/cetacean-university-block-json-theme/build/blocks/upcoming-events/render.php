<?php 
    /**
     * @var array{
     *  enablePastEventsLink: boolean
     * } $attributes
     * @var string $content
     */
    $enablePastEventsLink = isset($attributes['enablePastEventsLink']) ? $attributes['enablePastEventsLink'] : true;
?>
<div class="container container--narrow page-section">
    <?php while (have_posts()): ?>
        <?php the_post() ?>
        <?php get_template_part('template-parts/content-event') ?>
    <?php endwhile; ?>
    <?= paginate_links() ?>
    <?php if($enablePastEventsLink): ?>
        <hr class="section-break">
        <p>
            <a href="<?= site_url("/past-events") ?>">
                See Past Events
            </a>
        </p>
    <?php endif; ?>
</div>