<?php get_header() ?>

<?php while (have_posts()): ?>
    <?php the_post(); ?>
    <?php get_template_part('template-parts/page-banner') ?>

    <div class="container container--narrow page-section">
        <div 
            class="metabox metabox--position-up metabox--with-home-link"
        >
            <p>
                <a 
                    class="metabox__blog-home-link" 
                    href="<?= get_post_type_archive_link("event") ?>"
                >
                    <i class="fa fa-home" aria-hidden="true"></i>
                    All Upcoming Events
                </a>
                <span class="metabox__main">
                    <?php the_title() ?>
                </span>
            </p>
        </div>
        <div class="generic-content">
            <?php the_content() ?>
        </div>
        <?php
            /** @var WP_Post[]|NULL */
            $relatedPrograms = get_field('related_programs');
        ?>
        <?php if($relatedPrograms): ?>
            <hr class="section-break"/>
            <h2 class="headline headline--medium">
                Related Program(s)
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
<?php endwhile; ?>

<?php get_footer(); ?>