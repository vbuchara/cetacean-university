<div class="container container--narrow page-section">
    <div class="generic-content">
        <?php the_content() ?>
    </div>
    <?php
        /** @var WP_Post[]|null */
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