<?php
/**
 * @var array{} $attributes
 * @var string $content
 */
    $parentPostId = wp_get_post_parent_id(get_the_ID());
    $hasChildren = !empty(get_pages(['child_of' => get_the_ID()])); 
?>
<div class="container container--narrow page-section">
    <?php if ($parentPostId || $hasChildren): ?>
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