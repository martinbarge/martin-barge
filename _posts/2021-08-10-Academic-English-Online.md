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

<figure style="border: 2px solid darkslategray;">
  <img src="https://martinbarge.github.io/img/AEO-July-2020-homepage.png" alt="AEO Homepage 2008-2020" style="width:100%">
  <figcaption style="font-weight:bold;">Figure 1.1: Academic English Online Homepage 2008-2020.</figcaption>
</figure>


And other showing one of the Learning object pages:

<figure style="border: 2px solid darkslategray;">
  <img src="https://martinbarge.github.io/img/AEO-July-2020-pron.png" alt="Pronunciation page" style="width:100%">
  <figcaption>Figure 1.2: Example learning object page 2020.</figcaption>
</figure>


A more in-depth view can be found at [Wayback Machine AEO](https://web.archive.org/web/20200721184211/http://aeo.sllf.qmul.ac.uk/) .

## Rebuilding the site
Towards the end of 2020, I was tasked with rebuilding the site to bring it more in line with current web technology standards. This was brought about as follows:

### Migration of Learning Objects to WordPress

We took the following steps to bring about the conversion to the new platform:

1. Audit the site to identify items to be migrated and assets to convert.
2. Installation of WordPress on QMUL university server.
3. We extracted the core HTML content, CSS and JS from the Learning Objects and rebuilt them into WordPress pages.
4. We then converted a small number of Hot Potatoes quizzes to the newer HTML5 compliant version of the tool (see: <a href="https://hotpot.uvic.ca/">Hot Potatoes</a>)
5. We converted a larger number of items using the H5P WordPress plugin (see: <a href="https://h5p.org/">H5P.org</a>)
6. In addition to this, for activities for which neither Hot Potatoes nor H5P provided a suitable application, we custom-coded some interactives using freely-available JavaScript tools and libraries. Most notable [Sortable JS](https://github.com/SortableJS/Sortable) and JQuery. We used the [WP Coder plugin](https://wordpress.org/plugins/wp-coder/) to incorporate these JS rich activities. 
7. We also made use of the [Accordions Plugin](https://pickplugins.com/item/accordions-html-css3-responsive-accordion-grid-for-wordpress) to build some of the interactive presentation units.

For an idea of how the new site looks, here's a screenshot of the homepage:

<figure style="border: 2px solid darkslategray;">
  <img src="https://martinbarge.github.io/img/AEO-August-2021-home.png" alt="AEO Homepage 2021" style="width:100%">
  <figcaption>Figure 2.1: AEO Homepage 2021.</figcaption>
</figure>

The two following images show one of the Learning object pages in desktop and mobile view. 

<figure style="border: 2px solid darkslategray;">
  <img src="https://martinbarge.github.io/img/AEO-August-2021-pron.png" alt="AEO Homepage 2021" style="width:100%">
  <figcaption>Figure 2.2.a.: Example learning object page 2021: Desktop view.</figcaption>
</figure>

Although the new desktop view is not hugely different from the original design shown, we have modified the CSS to enable responsive viewports, as shown in this image:

<figure style="border: 2px solid darkslategray;">
  <img src="https://martinbarge.github.io/img/pron-mobile-view.png" alt="AEO Homepage 2021" style="width:100%">
  <figcaption>Figure 2.2.b.: Example learning object page 2021: Mobile view</figcaption>
</figure>

### Comments

- **CSS:** Editing the original CSS by incorporating responsive media queries was the quickest way to implement this design feature without rebuilding each learning object from scratch in a new template framework. The CSS is at the site level with custom classes called where needed in each page. 

- **JS:** Furthermore, the orginal page codes utilised JavaScript getElementsByClassname loop iteration, to action the Show/Hide functions of the feedback and review boxes within each learning object page. This feature didn't function in the pages code of our Wordpress installation, so we developed JavaScript code blocks using element identifiers to enable this interactive feature. This is an area for further exploration, to obviate the necessity of including a unique 'id' for each page element.

The new site is available at: [Academic English Online](https://aeo.sllf.qmul.ac.uk/) .

### Further work
- We are continuing to work on tweaking the interactive activities and learning objects to bring them to greater adaptive design functionality, particularly for use on very small screens.
- We are also continuing to work on bringing the objects up to full Web accessibility standards. 
Consequently, over time, the site will continue to evolve.

### Conclusion
This development project has been demanding and time-consuming, and some of the Learning Objects are still being worked on to improve the user experience.

