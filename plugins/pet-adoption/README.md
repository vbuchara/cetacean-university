# 🐬 Pet Adoption 🔌

A simple Wordpress plugin that displays a table of generated pets at a page **Pet Adoption**.

It was developed for learning purposes during the course I took called **Become a WordPress Developer - Unlocking Power With Code**, by **Brad Schiff**. 

## 👩‍💻 Technologies

This plugin was manly developed to learn how to setup a **custom database table** in Wordpress, and make usage of it, such as **reading** and **adding data**.

It only uses a couple of styles made with **Sass** and no actual **Javascript** code. 

| Front-end | Back-end |
|--|--|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="18"/> Sass||

# ✅ How to Use 

To use this plugin, drag this folder on the **wp-content/plugin** folder of the Wordpress site you want to use it. 

You can clone this repository, and then copy and paste the folder on the theme folder of the site you want to have it.

```bash
git clone https://github.com/vbuchara/cetacean-university.git
```

- **NOTE**: This plugin only displays the page properly if you have setup **traditional header** and **footer**. Block themes aren't supported. 

## ⭐ Features

- It includes a table of information about pets on the page **Pet Adoption** (With the slug `pet-adoption`).

    - The page needs to be created through the **admin dashboard** so it can be accessed on the site viewer.

- The list needs to be generated through an action on [**pet-adoption.php**](./pet-adoption.php) that is commented out, at the constructor of the class `Pet_Adoption_Plugin`. 

```php
add_action('admin_head', [$this, 'insert_dummy_data']);
```

- The amount of pets generated can also be edited through the variable `$numberOfPetsToCreate` on the same class.

- On the **Pet Adoption** page, it is displayed a table of pets, with the columns **Name**, **Species**, **Weight**, **Birth Year**, **Hobby**, **Favorite Food**, and **Favorite Color**.
  
  - It's also shown how many seconds the query took to take all the pets, how many pets were found in the database, and how many pets were displayed. 
  
  - The pets retrieved can be filtered through **query parameters**. The parameters available to filter are:
   
    - `pet_name`: The name of the pet
    - `species`: The species of the pet
    - `fav_food`: The favorite food of the pet
    - `fav_color`: The favorite color of the pet
    - `fav_hobby`: The favorite hobby of the pet
    - `min_year`: The minimum year for the the pet's `birth_year` to be retrieved. Only pets with birth year after that year will be taken.
    - `max_year`: The maximum year for the pet's `birth_year`. Only pets with birth year before that year will be taken.
    - `min_weight`: The minimum weight of the pet's `pet_weight` to be retrieved. Only pets that weight more than the value will be taken.
    - `max_weight`: The maximum weight of the pet's `pet_weight` to be retrieved. Only pets that weight more than the value will be taken.

- Admins of the site can access the **Pet Adoption** page and being able to either delete a row of **pet**, or add a new **pet** by inserting a **new name**. Other data of the pet will be randomly taken from a pool.