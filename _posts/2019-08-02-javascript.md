---
layout: post
title: JavaScript Applications
tags: [language learning, scripting, javascript]
---

Over the years, I have experimented with writing my own Javascript programmes from scratch. This post provides an brief overview of three such examples.

### Pelmanism (Click squares to reveal and match pairs):
A few years ago a colleague wanted an interactive game-like activity for students to test their memory of pairs of synonymous words. So I set about making a simple Pelmanism memory game using Javascript. The basic procedure of the script is as follows: 

#### 1. Set up:
A table of squares is drawn on the page; each square contains a button in disabled state; synonyms are stored in two-dimensional arrays; each item is called from the array and assigned to a random button id. 

#### 2. User Interaction: 
When a button is clicked, the script does the following: gets the id of the button; checks whether it is the first or second button enabled; compares its id with the other button id; if the ids form a synonymous match, it shades the buttons a new colour and preserves the visible state; else, pauses for 1.5 seconds and then hides the button label. 

#### Areas for improvement:
The table layout and page elements are not responsive, so this design feature could be added so that the activity scales to the device screen size automatically. 

The result can be seen here: [Pelmanism](http://qmlanguagecentre.on-rev.com/samples/pelmanism.html)

### Substitution and Synonymy:
On another occasion, I was asked if I could make a set of drag and drop activities for students to practise substitution and synonymy in longer extracts of text. The remit was very specific - chunks of text were to be dragged onto expandable target fields; additionally, the dropped text was to change colour in order to indicate whether it was the correct or incorrect item. 

#### Areas for improvement:
The drag and drop function doesn't work on some touchscreen devices, so an additional script is required to enable this feature.

An example of one of the exercises can be seen here: [Substitution and Synonymy](http://qmlanguagecentre.on-rev.com/substitution-synonymy/subsyn1.html)

### HTML Text Formatter:
Another project I was involved in entailed obtaining academic texts for inclusion on a corpus analyis web engine known as [FLAX](http://flax.nzdl.org/greenstone3/flax). The problem was that obtained texts came in many formats (HTML, PDF, DOC, etc.). The raw text had to then be formatted to HTML with specific information added before it could be uploaded to the platform. I therefore came up with the idea of creating a web-based formatting tool. The purpose of the tool was to enable users to paste in raw text, strip it of prior formatting, and apply HTML formatting without writing any HTML code. A further requirement was for the user to then download the formatted file as an HTML file to upload to the platform. 

#### Areas for improvement:
The interface could be prettier, so some additional css design elements would improve the look and feel of the application.

The product became known as the 'FLAX Formatter', and can be seen here: [Flax Formatter](http://qmlanguagecentre.on-rev.com/flaxapps/flax-formatter-v3/)
