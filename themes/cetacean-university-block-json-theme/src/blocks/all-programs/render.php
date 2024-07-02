<?php 
    /**
     * @var array{} $attributes
     * @var string $content
     */
?>
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