<div class="container container--narrow page-section">
    <div class="acf-map">
        <?php while(have_posts()): ?>
            <?php the_post(); ?>
            <?php $mapLocation = get_field('map_location'); ?>
            <script>console.log(`<?= var_dump($mapLocation) ?>`);</script>
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