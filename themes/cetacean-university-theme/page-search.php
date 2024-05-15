<?php get_header() ?>

<?php while (have_posts()): ?>
    <?php the_post(); ?>
    <?php get_template_part('template-parts/page-banner') ?>

    <div class="container container--narrow page-section">

        <div class="generic-content">
            <?php 
                get_template_part('template-parts/search-form', null)  
            ?>
        </div>
    </div>
<?php endwhile; ?>

<?php get_footer(); ?>