<?php 
    if(!is_user_logged_in()){
        wp_redirect(esc_url('/'));
        exit;
    }
?>

<?php get_header() ?>

<?php while (have_posts()): ?>
    <?php the_post(); ?>
    <?php get_template_part('template-parts/page-banner') ?>

    <div class="container container--narrow page-section">
        <div class="create-note">
            <h2 class="headline headline--medium">
                Create New Note
            </h2>
            <input 
                class="new-note-title" 
                type="text" 
                placeholder="Title"
                name="note-title"
            >
            <textarea 
                class="new-note-body"
                placeholder="Content of your note here"
            ></textarea>
            <button class="submit-note btn btn--primary btn--slide-from-top">
                Create Note
            </button>
            <span class="note-error-message"></span>
        </div>

        <ul
            id="my-notes-list" 
            class="min-list link-list"
        >
            <?php 
                $userNotes = new WP_Query([
                    'post_type' => 'note',
                    'posts_per_page' => -1,
                    'author' => get_current_user_id()
                ]);
            ?>
            <?php while($userNotes->have_posts()): ?>
                <?php $userNotes->the_post() ?>
                <li class="note-item" data-note-id="<?= get_the_ID() ?>" >
                    <input 
                        class="note-title-field"
                        value="<?= esc_attr(get_the_title()) ?>" 
                        readonly
                    />
                    <div class="note-actions">
                        <button 
                            class="btn btn--cancel-edit btn--slide-from-top btn--cancel-edit--hidden"
                            aria-hidden="true"
                        >
                            <i class="fa fa-times" aria-hidden="true"></i>
                            Cancel
                        </button>
                        <button class="btn btn--edit-note btn--slide-from-top">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                            Edit
                        </button>
                        <button class="btn btn--delete-note btn--slide-from-top">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                            Delete
                        </button>
                    </div>
                    <textarea
                        class="note-body-field"
                        readonly
                    ><?= 
                        esc_textarea(strip_tags(get_the_content())) 
                    ?></textarea>
                    <button class="btn btn--update-note btn--primary btn--slide-from-top btn--slide-from-top">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        Save
                    </button>
                </li>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        </ul>
    </div>
<?php endwhile; ?>

<?php get_footer(); ?>