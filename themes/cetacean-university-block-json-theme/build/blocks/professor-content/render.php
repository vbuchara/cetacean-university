<?php 
    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */
?>
<div class="container container--narrow page-section">
    <div class="generic-content">
        <div class="row group">
            <div class="one-third">
                <?php the_post_thumbnail('professor-portrait') ?>
            </div>
            <div class="two-thirds">
                <?php 
                    $likeCount = new WP_Query([
                        'post_type' => 'like',
                        'meta_query' => [
                            [
                                'key' => 'liked_professors',
                                'compare' => 'LIKE',
                                'value' =>  "\"" . get_the_ID() . "\""
                            ]
                        ]
                    ]);

                    $hasUserLiked = new WP_Query([
                        'post_type' => 'like',
                        'author' => get_current_user_id(),
                        'meta_query' => [
                            [
                                'key' => 'liked_professors',
                                'compare' => 'LIKE',
                                'value' =>  "\"" . get_the_ID() . "\""
                            ]
                        ]
                    ]);
                ?>
                <button 
                    class="like-box"
                    data-exists="<?= 
                        (
                            $hasUserLiked->found_posts > 0 &&
                                is_user_logged_in()
                        )
                            ? 'yes'
                            : 'no' 
                    ?>"
                    data-professor-id="<?= get_the_ID() ?>"
                >
                    <i class="fa-regular fa-heart like-box__empty-heart" aria-hidden="true"></i>
                    <i class="fa-solid fa-heart like-box__filled-heart" aria-hidden="true"></i>
                    <span class="like-count">
                        <?= $likeCount->found_posts ?>
                    </span>
                </button>
                <?php the_content() ?>
            </div>
        </div>
    </div>
    <?php
        /** @var WP_Post[]|NULL */
        $relatedPrograms = get_field('related_programs');
    ?>
    <?php if(!empty($relatedPrograms)): ?>
        <hr class="section-break"/>
        <h2 class="headline headline--medium">
            Subject(s) Taught
        </h2>
        <ul class="link-list min-list" >
            <?php foreach($relatedPrograms as $relatedProgram): ?>
                <li>
                <a
                    href="<?= get_the_permalink($relatedProgram) ?>"
                >
                        <?= get_the_title($relatedProgram) ?>
                </a> 
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</div>