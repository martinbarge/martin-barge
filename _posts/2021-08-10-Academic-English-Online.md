---
layout: post
title: Academic English Online
subtitle: Rebuilding a website
gh-badge: [star, fork, follow]
---

## Introduction
In around 2010, we developed an in-house website designed to help students at UK universities develop their academic English language skills. 
The website is named Academic English Online, and was build using static HTML pages, created using the University of Southampton Learning Object Creator tool (LOC Tool).
The LOC tool generates structured HTML pages, with CSS designs and JavaScript for interactive components (mostly div display objects). 
Each Learning Object (page) links across to a varied range of additional interactive activites, made using Hot Potatoes (see <a href="https://hotpot.uvic.ca/">Hot Potatoes</a>), Tanida Quizbuilder (see <a href="https://www.quiz-builder.com/download.html">Tanida Quizbuilder</a>), Articulate Studio (see: <a href="https://articulate.com/360/studio">Articulate 360</a>, and some custom coded FlashMX objects. 
The entire site was hosted on one of the University's FTP servers.
Over time, the website technologies were surpassed by developments in web technologies, most notably the advent of HTML5 and the phasing out of Flash. 

As an idea of how the original site looked, here's a screenshot of the homepage:

![Image of old homepage](https://martinbarge.github.io/img/AEO-July-2020-homepage.png)
[View larger image](https://martinbarge.github.io/img/AEO-July-2020-home.png)

And other showing one of the Learning object pages:
![Image of old page](https://martinbarge.github.io/img/AEO-July-2020-pron.png)
[View larger image](https://martinbarge.github.io/img/AEO-July-2020-home.png)

A more in-depth view can be found at [Wayback Machine AEO](https://web.archive.org/web/20200721184211/http://aeo.sllf.qmul.ac.uk/) .

## Rebuilding the site
Towards the end of 2020, I was tasked with rebuilding the site to bring it more in line with current web technology standards. This was brought about as follows:

### Migration of Learning Objects to WordPress
The university installed a WordPress instance for us to carry this out.
We extracted the core HTML content, CSS and JS from the Learning Objects and rebuilt them into WordPress pages.
We then converted a small number of Hot Potatoes quizzes to the newer HTML5 compliant version of the tool (see: <a href="https://hotpot.uvic.ca/">Hot Potatoes</a>)
We converted a larger number of items using the H5P WordPress plugin (see: <a href="https://h5p.org/">H5P.org</a>)
In addition to this, for activities for which neither Hot Potatoes nor H5P provided a suitable application, we custom-coded some interactives using freely-available JavaScript tools and libraries. Most notable [Sortable JS](https://github.com/SortableJS/Sortable) and JQuery. We used the [WP Coder plugin](https://wordpress.org/plugins/wp-coder/) to incorporate these JS rich activities. 
We also made use of the [Accordions Plugin](https://pickplugins.com/item/accordions-html-css3-responsive-accordion-grid-for-wordpress) to build some of the interactive presentation units.

For an idea of how the new site looks, here's a screenshot of the homepage:
![Image of new homepage](https://martinbarge.github.io/img/AEO-August-2021-home.png)
[View larger image](https://martinbarge.github.io/img/AEO-August-2021-home.png)

And other showing one of the Learning object pages:
![Image of new page](https://martinbarge.github.io/img/AEO-August-2021-pron.png)
[View larger image](https://martinbarge.github.io/img/AEO-August-2021-pron.png)

The new site is available at: [Academic English Online](https://aeo.sllf.qmul.ac.uk/) .

### Further work
We are continuing to work on tweaking the interactive activities and learning objects to bring them to greater adaptive design functionality, particularly for use on very small screens.
We are also continuing to work on bringing the objects up to full Web accessibility standards. 
Consequently, over time, the site will continue to evolve.

### Conclusion
This development project has been demanding and time-consuming, and some of the Learning Objects are still being worked on to improve the user experience.

