<?php get_header() ?>

<?php get_template_part('template-parts/page-banner', null, [
    'title' => "Our Campuses",
    'subtitle' => 'All our Campuses are shown here!'
]) ?>

<div class="container container--narrow page-section">
    <div class="acf-map">
        <?php while(have_posts()): ?>
            <?php the_post(); ?>
            <?php $mapLocation = get_field('map_location'); ?>
            <div
                class="marker"
                data-lat="<?= $mapLocation['lat'] ?>"
                data-lng="<?= $mapLocation['lng'] ?>"
            >
                <h3>
                    <a href="<?php the_permalink() ?>">
                        <?php the_title() ?>
                    </a>
                </h3>
                <?= $mapLocation['address'] ?>
            </div>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer() ?>