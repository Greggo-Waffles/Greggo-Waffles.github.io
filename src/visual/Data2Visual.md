---
layout: base.html
title: Data To Visual Project 1
--- 
<h1> Max Data to Visual Project</h1>
<p>This is a project built in Max 9 that uses Jitter, Node.js, and SQLite.
    It takes a synthetic user database that I use for projects and maps the attributes to position, 
    shape, color, and size. A screen-space trail is made by the object’s movement throughout the 3D space. 
    The colors were chosen to be more friendly to colorblindness.</p>

{% image "./src/visual/VisualImages/DataViz1.png", "Image Data to Visual 1" %}

<p>
The program loop is run by a clock pulse that tells a Node code block to randomly pick a record from the SQLite DB and returns it to the patcher as a Max Dictionary. 
Each of the attributes in the dictionary's attributes are broken out and sent to their corresponding shape attributes. 
Height, stored as centimeters, gets sent to object scale. Age gets sent to object color. 
Gender gets sent to object shape. Street, city, and state get sent to another node box that hashes each string and normalizes the result.
</p>

{% image "./src/visual/VisualImages/DataViz2.png", "Image Data to Visual 2" %}

<p>
This project originally started as an exploration into the data connections I could set up inside of Max/MSP. 
The original intent was to have it create abstract 3D explorable environments where each record had a corresponding object.
</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/CQFcKIwBQug?si=9jCr06jdSHb5HYNH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

