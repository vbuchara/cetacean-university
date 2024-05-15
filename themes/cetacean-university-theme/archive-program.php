<?php get_header() ?>

<?php get_template_part('template-parts/page-banner', null, [
    'title' => "Programs",
    'subtitle' => 'Check all of our programs!'
]) ?>

<div class="container container--narrow page-section">
    <ul class="link-list min-list" >
        <?php while (have_posts()): ?>
            <?php the_post() ?>
            <li>
                <a
                    href="<?php the_permalink() ?>"
                >
                    <?php the_title() ?>
                </a>
            </li>
        <?php endwhile; ?>
    </ul>
    <?= paginate_links() ?>
</div>

<?php get_footer() ?>