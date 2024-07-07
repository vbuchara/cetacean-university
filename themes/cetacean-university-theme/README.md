# 🐬 Cetacean University Theme 🖌

![Cover of the Cetacean University Theme](screenshot.png)

A traditional Wordpress theme created for the [**Cetacean University site**](../../README.md) during my learning on the course **Become a WordPress Developer - Unlocking Power With Code**, by **Brad Schiff**. 

## 👩‍💻 Technologies

This theme was mainly developed using the basic core features of **Wordpress**. All templates are in **PHP**, and **Javascript** was used along with **@wordpress/scripts npm package** to build it.

One unique API used on this theme, in comparison to the other themes on the site, was the **Customize API** of Wordpress, to make some parts of the site editable through the **Customize** page.

| Front-end | Back-end |
|--|--|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="18"/> Javascript||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" width="18"/> jQuery||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="18"/> Sass||

# ✅ How to Use 

To use the theme, simply drag this folder on the **wp-content/theme** folder of the Wordpress site you want to use it. 

You can clone this repository, and then copy and paste the folder on the theme folder of the site you want to have it.

```bash
git clone https://github.com/vbuchara/cetacean-university.git
```

- **NOTE**: It's also necessary to setup a **constant** on the **wp-config** file of your site, in order to make the Google Maps work on the pages it is used. More on **Goole Maps API keys** can be found in https://developers.google.com/maps/documentation/javascript/get-api-key.

```php
define('GOOGLE_MAPS_API_KEY', "YOUR_KEY");
```

- **IMPORTANT**: For the **custom post types** used on the pages to work you will need to also get the **must use plugin** on the file [**university_post_types.php**](../../mu-plugins/university_post_types.php) and place it on the same folder on your **wp-content** directory.

## ⭐ Features

- Aside from all [**the general features listed here**](../../README.md), this theme include some unique features, such as:
  
    - **Customizable menu** through the **Menu** options in the **Appearances** menu. 
    
    - **Customizable** primary and secondary colors through the **Customize** page, accessible through the **Appearances** menu. 
    
    - **Customizable** site name and phone number on the footer of the site through the same **Customize** page.
  
- The [**Pet Adoption**](../../plugins/pet-adoption/README.md) plugin only works properly with this theme, since it relies on a **php template** to generate its content.    