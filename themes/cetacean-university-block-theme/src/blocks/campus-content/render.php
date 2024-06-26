<div class="container container--narrow page-section">
    <div class="generic-content">
        <?php the_content() ?>
    </div>

    <div class="acf-map">
        <?php $mapLocation = get_field('map_location'); ?>
        <div
            class="marker"
            data-lat="<?= $mapLocation['lat'] ?>"
            data-lng="<?= $mapLocation['lng'] ?>"
        >
            <h3>
                <?php the_title() ?>
            </h3>
            <?= $mapLocation['address'] ?>
        </div>
    </div>

    <?php 
        $relatedPrograms = new WP_Query([
            'posts_per_page' => -1,
            'post_type' => 'program',
            'orderby' => 'title',
            'order' => 'ASC',
            'meta_query' => [
                [
                    'key' => 'related_campus',
                    'value' => "\"" . get_the_ID() . "\"",
                    'compare' => 'LIKE',
                    "CHAR"
                ]
            ]
        ]);
    ?>
    <?php if($relatedPrograms->have_posts()): ?>
        <hr class="section-break" />
        <h2 class="headline headline--medium">
            Offered Programs 
        </h2>
        
        <ul class="link-list min-list" >
            <?php while($relatedPrograms->have_posts()): ?>
                <?php $relatedPrograms->the_post(); ?>
                <li>
                    <a
                        href="<?php the_permalink() ?>"
                    >
                        <?php the_title() ?>
                    </a>
                </li>
            <?php endwhile; ?>
            <?php wp_reset_postdata() ?>
        </ul>
    <?php endif; ?>
    <?php 
        $relatedEvents = new WP_Query([
            'posts_per_page' => -1,
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
                ],
                [
                    'key' => 'related_campus',
                    'value' => "\"" . get_the_ID() . "\"",
                    'compare' => 'LIKE',
                    "CHAR"
                ]
            ]
        ]);
    ?>
    <?php if($relatedEvents->have_posts()): ?>
        <hr class="section-break" />
        <h2 class="headline headline--medium">
            Upcoming Events on the Campus
        </h2>

        <?php while($relatedEvents->have_posts()): ?>
            <?php $relatedEvents->the_post(); ?>
            <?php get_template_part('template-parts/content-event') ?>
        <?php endwhile; ?>
        <?php wp_reset_postdata() ?>
    <?php endif; ?>
</div>