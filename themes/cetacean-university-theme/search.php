<?php get_header() ?>

<?php get_template_part('template-parts/page-banner', null, [
    'title' => "Search Results",
    'subtitle' => "Searching for \"". esc_html(get_search_query(false)) ."\""
]) ?>

<div class="container container--narrow page-section">
    <?php if(!have_posts()): ?>
        <h2 class="headline headline--small-plus">
            No Results Found for the search.
        </h2>
    <?php endif;?>
    <?php while(have_posts()): ?>
        <?php the_post() ?>
        <?php get_template_part('template-parts/content', get_post_type()) ?>
    <?php endwhile; ?>

    <?= paginate_links() ?>

    <?php 
        get_template_part('template-parts/search-form', null) 
    ?>

</div>

<?php get_footer() ?>