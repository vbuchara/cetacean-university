<?php 
    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */
?>
<div class="container container--narrow page-section">
    <?php
        $pastEvents = new WP_Query([
            'paged' => get_query_var('paged', 1),
            'post_type' => 'event',
            'orderby' => 'meta_value',
            'order' => 'ASC',
            'meta_key' => 'event_date',
            'meta_query' => [
                [
                    'key' => 'event_date',
                    'value' => date('YmdHis'),
                    'compare' => '<',
                    'type' => 'DATE'
                ]
            ]
        ]);
    ?>
    <?php while ($pastEvents->have_posts()): ?>
        <?php $pastEvents->the_post() ?>
        <?php get_template_part('template-parts/content-event') ?>
    <?php endwhile; ?>
    <?= 
        paginate_links([
            'total' => $pastEvents->max_num_pages
        ]) 
    ?>
    <?php wp_reset_postdata() ?>
    <hr class="section-break">
    <p>
        <a
            href="<?= get_post_type_archive_link("event") ?>"
        >See Upcoming Events</a>
    </p>
</div>