<?php 
    $parentPostId = wp_get_post_parent_id(get_the_ID());
    $hasChildren = !empty(get_pages(['child_of' => get_the_ID()]));
?>

<?php get_header() ?>

<?php while (have_posts()): ?>
    <?php the_post(); ?>
    <?php get_template_part('template-parts/page-banner') ?>

    <div class="container container--narrow page-section">
        <?php if ($parentPostId !== 0): ?>
            <div class="metabox metabox--position-up metabox--with-home-link">
                <p>
                    <a 
                        class="metabox__blog-home-link" 
                        href="<?= get_permalink($parentPostId) ?>"
                    >
                        <i class="fa fa-home" aria-hidden="true"></i> 
                        Back to <?= get_the_title($parentPostId) ?>
                    </a> 
                    <span class="metabox__main">
                        <?php the_title() ?>
                    </span>
                </p>
            </div>
        <?php endif; ?>
        
        <?php if($parentPostId || $hasChildren): ?>
            <div class="page-links">
                <h2 class="page-links__title">
                    <a href="<?= get_permalink($parentPostId) ?>">
                        <?= get_the_title($parentPostId) ?>
                    </a>
                </h2>
                <ul class="min-list">
                    <?php 
                        wp_list_pages([
                            'title_li' => null,
                            'child_of' => $parentPostId ? $parentPostId : get_the_ID()
                        ]) 
                    ?>
                </ul>
            </div>
        <?php endif; ?>

        <div class="generic-content">
            <?php the_content() ?>
        </div>
    </div>
<?php endwhile; ?>

<?php get_footer(); ?>