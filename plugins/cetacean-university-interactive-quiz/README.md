# 🐬 Cetacean University Interactive Quiz 🔌

A Wordpress plugin that adds a new **Quiz block type**, as well as a **Solved Quizzes Counter block type** using the new **Interactivity API** of **Wordpress**.

## 👩‍💻 Technologies

This project was created through the **@wordpress/create-block** tool, with the template **@wordpress/create-block-interactive-template**. It uses both **Typescript** and **PHP** to development of both blocks.

This project also uses **composer** only to download a package called `masterminds/html5` to manipulate **DOM elements**, by transpiling a file containing **HTML5**.

A **Redux store** was also used to keep track about the answers created on the **Interactive Quiz** blocks, so to correct duplication of ids that can cause problems at the **viewer side** of the site.

| Front-end | Back-end |
|--|--|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" width="18"/> Wordpress|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="18" /> PHP|
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width="18"/> Typescript||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="18" /> ReactJS||
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="18"/> Sass||

# ✅ How to Use 

To use this plugin, drag this folder on the **wp-content/plugin** folder of the Wordpress site you want to use it. 

You can clone this repository, and then copy and paste the folder on the theme folder of the site you want to have it.

```bash
git clone https://github.com/vbuchara/cetacean-university.git
```

## ⭐ Features

- There are two **block types** featured on this plugin. They are the **Interactive Quiz** and the **Solved Quizzes Counter**. 

  - The **Interactive Quiz** block is essentially the same as the **Quiz** on the [**Cetacean University Plugin**](../cetacean-university-plugin/README.md), except it uses the **Interactivity API** of Wordpress on the **viewer** side to make the user interactions.
  
  - The **Solved Quizzes Counter** simply display the information of how many **Interactive Quiz** blocks were completed by the user on the **viewer** side. It only works with the **Interactivity Quiz** of this plugin. 