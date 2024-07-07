# 🐬 Cetacean University Block Json Theme 🖌

![Cover of the Cetacean University Theme](screenshot.png)

A Wordpress Block theme created for the [**Cetacean University site**](../../README.md) during my learning on the course **Become a WordPress Developer - Unlocking Power With Code**, by **Brad Schiff**. 

Essentially, the same as [**Cetacean University Block Theme**](../cetacean-university-block-theme/README.md), except the **Block types** are organized by the **block.json** structure, the official way Wordpress recommend to declare blocks.

## 👩‍💻 Technologies

This theme was mainly developed using **Typescript** and React. All base templates are in **HTML** in the **templates** folder, but their HTML was created using the **Full Site Editor**.

Basically, all technologies in [**Cetacean University Block Theme**](../cetacean-university-block-theme/README.md) are here as well. The only difference is that this theme relies on the usage of the **block.json** to register its **block types**, as such, it doesn't need some configurations on the [**webpack.config.js**](./webpack.config.js) and on the **PHP side**.

| Front-end | Back-end |
|--|--|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width="18"/> Typescript||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="18" /> ReactJS||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="18"/> Sass||

# ✅ How to Use 

To use the theme, drag this folder on the **wp-content/theme** folder of the Wordpress site you want to use it. 

You can clone this repository, and then copy and paste the folder on the theme folder of the site you want to have it.

```bash
git clone https://github.com/vbuchara/cetacean-university.git
```

After so, clone the **.env.example** file, renaming it to just **.env**, and then change the **GOOGLE_MAPS_API_KEY** variable to the value of your **Google Maps API** key. More on how **Google Maps API keys** works on https://developers.google.com/maps/documentation/javascript/get-api-key.

```
GOOGLE_MAPS_API_KEY="KEY"
```

Finally, open the folder on a terminal of your choice, and run **yarn** and **yarn build**. More on how to install **Yarn** on https://classic.yarnpkg.com/lang/en/docs/install/.

- **NOTE**: It's also necessary to setup a **constant** on the **wp-config** file of your site, in order to make the Google Maps work on the pages it is used.

```php
define('GOOGLE_MAPS_API_KEY', "YOUR_KEY");
```

- **IMPORTANT**: For the **custom post types** used on the pages to work you will need to also get the **must use plugin** on the file [**university_post_types.php**](../../mu-plugins/university_post_types.php) and place it on the same folder on your **wp-content** directory.

## ⭐ Features

- It includes all [**the general features listed here**](../../README.md), plus the fact of being a **Block theme**, all pages are customizable in the **Editor** page in the **Appearances** menu.

    - It's possible to add other blocks to the pages, belonging to this theme or not, and remove some of existing pages. 
  
- The [**Pet Adoption**](../../plugins/pet-adoption/README.md) plugin does not work properly with this theme, since it relies on a **traditional Wordpress template** to display information such as **header** and **footer**.    