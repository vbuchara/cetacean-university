<?php

require_once PET_ADOPTION__PLUGIN_DIR_PATH . "classes/GetPets.php";

get_header(); ?>

<div class="page-banner">
  <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('/images/ocean.jpg'); ?>);"></div>
  <div class="page-banner__content container container--narrow">
    <h1 class="page-banner__title">Pet Adoption</h1>
    <div class="page-banner__intro">
      <p>Providing forever homes one search at a time.</p>
    </div>
  </div>  
</div>

<div class="container container--narrow page-section">
  <?php
    $pets = new PetAdoptionPlugin\GetPets();

    $totalCount = number_format($pets->getTotalCount());
    $count = number_format($pets->getCount());
  ?>
  <p>
    This page took <strong><?php echo timer_stop();?></strong> seconds to prepare. 
    Found <strong><?= $totalCount ?></strong> results (showing the first <?= $count ?>).
  </p>
  <table class="pet-adoption-table">
    <tr>
      <th>Name</th>
      <th>Species</th>
      <th>Weight</th>
      <th>Birth Year</th>
      <th>Hobby</th>
      <th>Favorite Color</th>
      <th>Favorite Food</th>
      <?php if(current_user_can("administrator")): ?>
        <th>Delete</th>
      <?php endif; ?>
    </tr>
    <?php foreach($pets->getAll() as $pet): ?>
      <tr>
        <td><?= $pet->pet_name ?></td>
        <td><?= $pet->species ?></td>
        <td><?= $pet->pet_weight ?></td>
        <td><?= $pet->birth_year ?></td>
        <td><?= $pet->fav_hobby ?></td>
        <td><?= $pet->fav_color ?></td>
        <td><?= $pet->fav_food ?></td>
        <?php if(current_user_can("administrator")): ?>
          <td align="center">
            <form 
              action="<?= esc_url(admin_url('admin-post.php'))?>" 
              method="POST"
            >
              <input type="hidden" name="action" value="delete_pet">
              <input type="hidden" name="pet_id" value="<?= $pet->id?>">
              <button class="delete-pet-button">X</button>
            </form>
          </td>
        <?php endif; ?>
      </tr>
    <?php endforeach; ?>
  </table>
  <?php if(current_user_can("administrator")): ?>
    <form action="<?= esc_url(admin_url('admin-post.php')) ?>" class="create-pet-form" method="POST">
      <input type="hidden" name="action" value="create_pet">
      <p>Enter a name for a pet. All the rest will be randomly generated.</p>
      <input type="text" name="pet_name" placeholder="Pet Name" required />
      <button>Add Pet</button>
    </form>
  <?php endif; ?>
</div>

<?php get_footer(); ?>