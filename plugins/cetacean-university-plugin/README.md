# 🐬 Cetacean University Plugin 🔌

A Wordpress plugin that adds a lot of features, such as a **Word Filter**, **Post Statics** and two **block types**.

It was developed during during the course I took called **Become a WordPress Developer - Unlocking Power With Code**, by **Brad Schiff**. 

## 👩‍💻 Technologies

This plugin was developed using both **Typescript** and **PHP**. The modules of **Word Count** and **Word Filter** were purely done with **PHP**, while the two **block types** were all done in **Typescript**, with the help of **PHP** for setup and initial rendering.  

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

- This plugin can be separated into **4 modules**, they being:
  
  - **Word Count**: A system that injects on the content of some posts statistics. It has a configuration page that can be accessed on the **Settings** menu, on the option **Word Count**.
  
  - **Word Filter**: A word filtering system, that can replace words on some posts with a configurable placeholder. It has two configuration pages found on the menu **Word Filter** on the admin dashboard.
  
  - **Quiz Block**: A block that **editors** can setup on the posts, which displays a question and multiple answers to pick, and validates to the views which one they picked correctly or wrong. 
  
  - **Featured Professor**: A block that **editors** can setup to highlight a specific professor in a post.
  
- The **Word Count** feature has configurations for where to display, the title of the section where the information is going to be displayed, and what information to display.

  - It displays information about the **amount of words**, the **number of characters**, and **how much time it would take for someone to read** based on a simple calculus. Each one can be enabled or not.
  
  - If all information options are disabled, no section is shown on the view side.
  
- The **Word Filter** has a configuration page where words can be input in a **textarea**. It also has a configuration page for the replacement text. 

  - Each word to be filtered should be listed separated by **comma**.    
  
- The **Quiz block type** has one input field for the question, and by default comes with only one row for the answer. 

  - At least **one answer** must be present, and at most 4 answers can be in one single **Quiz block**.
  

  - Each **answer** row has buttons for **marking it as correct** and to **delete** the answer.
  
    - A **star** symbol button represents and marks a correct answer.
    
    - A **trash bin** symbol button represents the option to delete the answer.
    
  - Multiple correct answers can be picked. 
    
  - Multiple quiz blocks can be present on the same post.    
  
  - On the view side of the site, the quiz will be shown, with the question and the answers to be picked. 
    
    - A quiz shows the result as **correct** in **green** only if a **correct answer** was picked, and no **wrong answer**. It says if all correct answers were picked, or just the few selected if some was missing.
    
    - A quiz shows the result as **wrong** in a **red** sorry message if no **correct answers** were picked,or if some **correct answer** was picked alongside with a **wrong answer**.

- The **Professor Featured block type** has a **selector** containing all **Professors post type** registered on the site. 

  - Once one is picked, their information is shown on the container bellow, with their **name**, **description**, **programs offered**, and their **thumbnail image**. 
  
  - The exact same info on the **editor** is shown on the **viewer** side, with the exception of the selector, of course.