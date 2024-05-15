<?php get_header() ?>

<?php get_template_part('template-parts/page-banner', null, [
    'title' => "Upcoming Events",
    'subtitle' => 'Check all upcoming our events!'
]) ?>

<div class="container container--narrow page-section">
    <?php while (have_posts()): ?>
        <?php the_post() ?>
        <?php get_template_part('template-parts/content-event') ?>
    <?php endwhile; ?>
    <?= paginate_links() ?>
    <hr class="section-break">
    <p>
        <a
            href="<?= site_url("/past-events") ?>"
        >See Past Events</a>
    </p>
</div>

<?php get_footer() ?>