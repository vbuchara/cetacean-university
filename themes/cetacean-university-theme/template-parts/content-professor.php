<div class="post-item">
    <div class="professor-card__list-item">
        <a
            class="professor-card"
            href="<?php the_permalink() ?>"
        >
            <img
                class="professor-card__image"
                src="<?php the_post_thumbnail_url('professor-landscape') ?>"
                alt="Image of Professor <?php the_title() ?>"
            />
            <span class="professor-card__name">
                <?php the_title() ?>
            </span>
        </a>
    </div>
</div>