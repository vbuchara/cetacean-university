<?php 
    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */
?>
<div class="container container--narrow page-section">
    <div class="generic-content">
        <?php the_content() ?>
    </div>

    <?php 
        $relatedProfessors = new WP_Query([
            'posts_per_page' => -1,
            'post_type' => 'professor',
            'orderby' => 'title',
            'order' => 'ASC',
            'meta_query' => [
                [
                    'key' => 'related_programs',
                    'value' => "\"" . get_the_ID() . "\"",
                    'compare' => 'LIKE',
                    "CHAR"
                ]
            ]
        ]);
    ?>
    <?php if($relatedProfessors->have_posts()): ?>
        <hr class="section-break" />
        <h2 class="headline headline--medium">
            <?= get_the_title() ?> Professors
        </h2>
        
        <ul class="professor-cards" >
            <?php while($relatedProfessors->have_posts()): ?>
                <?php $relatedProfessors->the_post(); ?>
                <?php 
                    $professorThumbnail = get_the_post_thumbnail_url(null, 'professor-landscape');
                    $defaultAvatar = get_theme_file_uri("/images/default-user-landscape.png");
                ?>
                <li class="professor-card__list-item">
                    <a
                        class="professor-card"
                        href="<?php the_permalink() ?>"
                    >
                        <img
                            class="professor-card__image"
                            src="<?= $professorThumbnail ? $professorThumbnail : $defaultAvatar ?>"
                            alt="Image of Professor <?php the_title() ?>"
                        />
                        <span class="professor-card__name">
                            <?php the_title() ?>
                        </span>
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
                    'key' => 'related_programs',
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
            Upcoming <?= get_the_title() ?> Events
        </h2>

        <?php while($relatedEvents->have_posts()): ?>
            <?php $relatedEvents->the_post(); ?>
            <?php get_template_part('template-parts/content-event') ?>
        <?php endwhile; ?>
        <?php wp_reset_postdata() ?>
    <?php endif; ?>

    <?php
        /** @var WP_Post[]|NULL */
        $relatedCampuses = get_field('related_campus');
    ?>

    <?php if(!empty($relatedCampuses)): ?>
        <hr class="section-break" />
        <h2 class="headline headline--medium">
            Campuses Offering
        </h2>

        <ul class="link-list min-list">
            <?php foreach($relatedCampuses as $campus): ?>
                <li>
                    <a
                        href="<?= get_the_permalink($campus) ?>"
                    >
                        <?= get_the_title($campus) ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</div>