# 🐬 Cetacean University

The main content of a website I built in a Wordpress learning course, made for a fictional Cetacean 🐬 University. 

The course in question is named **Become a WordPress Developer - Unlocking Power With Code**, by **Brad Schiff**. All my thanks to him!

The site is live and can be viewed on https://cetacean-university.buchara.site/

## 🖌️ Themes

This repository contains **three themes** developed during my time through the course. Each one composes the same amount of page templates, with a basically the same features. 

- ### [Cetacean University Theme](./themes/cetacean-university-theme/README.md)

- ### [Cetacean University Block Theme](./themes/cetacean-university-block-theme/README.md)

- ### [Cetacean University Json Theme](./themes/cetacean-university-block-json-theme/README.md)

## 🔌 Plugins 

**Three plugins** were developed by me and stored here during the course. One contains **two block types**, a **word filter** and a **post info stats**, other contains a **pet adoption table** for the sake of learning how to use custom database tables on Wordpress, and the last one is a **quiz block** using the new **Interactivity API** of Wordpress.

- ### [Cetacean University Plugin](./plugins/cetacean-university-plugin/README.md)
  
- ### [Pet Adoption](./plugins/pet-adoption/README.md)
  
- ### [Cetacean University Interactive Quiz](./plugins/cetacean-university-interactive-quiz/README.md)

## 👩‍💻 Technologies

All project was developed using **Wordpress**, along with **Javascript**, **jQuery** and **Sass** related to styling and front-end coding.

Also was used a lot of **Typescript** and **React** for the **Block development**, as well as a lot other **npm packages**, besides the **Wordpress ones**, like **Google Maps** and **Webpack**. The package manager used was **Yarn**.

| Front-end | Back-end |
|--|--|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width="18"/> Typescript||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="18"/> Javascript||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="18" /> ReactJS||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" width="18"/> jQuery||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="18"/> Sass||

## ⭐ General Features

- A total of **three themes** were created by me.
  - **Cetacean University Theme** is a **traditional WP Theme** that allows you to **customize** the **primary and secondary colors** shown on the site through the **Customize API** of Wordpress.
  - **Cetacean University Block Theme** and **Cetacean University Block Json Theme** are **Block Themes** that allow customization of all pages through the **Full Site Editor** screen.

- All themes contain fairly the same content and functionalities on the frontend site. Their only major differences are in how they were built. 

- Some of the major features that all themes share include:  

  - Manageable **Post Types** of **Events**, **Programs**, **Campuses** and **Professors** and their relations between each other.  
    - **Events** can be linked to **Programs**, which is shown in their pages. They can also be liked to **Campuses**.
    - **Programs** can be linked to many different **Professors**, **Events** and **Campuses**, which are all shown in their pages.
    - **Campuses** can be linked to **Programs** and **Events**, which are shown in their pages.
    - **Professors** are linked to **Programs**, which are shown in their pages.

  - **Archives** for **Blog Posts**, **Events**, **Programs** and **Campuses**.

  - **Custom banner** and **subtitle** for each **Post Type**.

  - **Like** feature for each **Professor**.
    - **Likes** can be given only by logged users. 

  - **Google Maps** map for the location of each **Campus**.

  - **Dynamic Search** that searches through all site contents. 
    - Done with **Javascript**, but there is a search fallback done with **PHP** only in case **Javascript** isn't functioning.

  - **My notes** page for logged users, for managing **notes** in real time. 

