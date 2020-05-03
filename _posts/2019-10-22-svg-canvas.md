---
layout: post
title: Using SVG and Canvas to divide a circle
tags: [svg, canvas, graphics, coordinates]
---

I wanted to create a graphic consisting of a circle divided precisely into three segments of equal size. I wanted to learn some of the basic drawing commands native to SVG (Scalable Vector Graphics) and HTML5 Canvas, to compare the procedure. 

<h2>SVG</h2>
Drawing graphics with SVG is quite straightforward. Rather like the HTML5 canvas element, the SVG tag requires height and width properties with numerical values to set the drawing area.

In the examples that follow (see below), I set the SVG area to 400 x 400.

The circle requires an (x,y) origin, or centre point, specified as cx and cy coordinates, with a numerical value for each. It also requires a radius (r) with a numerical value.

As I want my circle to use the maximum size of the SVG area, I set the x,y origin of the circle to 200,200. And I set the radius to 200. 

To make my circle easy to see, I set the fill colour, using a hexadecimal value: ``` fill="#6a29ea" ```

So far, the result is this:

<svg height="400" width="400">
  <circle cx="200" cy="200" r="200" stroke="black" stroke-width="0" fill="#6a29ea" />
  Sorry, your browser does not support inline SVG.  
</svg> 

Now to divide my circle into three equal segments, using three lines to mark the divisions. 

Drawing a line is easy enough: we specify the start point coordinates as x1,y1 and the end point coordinates as x2,y2 , and supply the values we need. 

I know that each line has to begin at the centre of the circle, which is 200,200. So my three lines each begin with:

```
x1="200" y1="200" 

```

Next, I need to determine the end point of each line as a pair of coordinates on the edge of the circle. To do this, I need to make some cosine and sine calculations. The forumlas I need for the end-point coordinates of a line: 

<blockquote>
  <p> x = ((cosine * degree of angle) * radius) + radius</p>
  <p> y = ((sine * degree of angle) * radius) + radius</p>
</blockquote>

<strong>Explanation:</strong>

Whatever angle I choose for my line, I use cosine and sine to plot the final point x,y coordinates at the edge of the circle. However, the area of a computer screen or web page does not use standard Cartesian coordinates, so I have to compensate by adding the radius to the result of each sine and cosine computation.

To divide the circle (360 degrees) into three, I will divide the circle into 3 x 120 degrees. Whatever first angle I choose for my first line, I then add 120 to each subsequent calculation for the other two lines.

I want my first line to be vertical, so I use 90 degrees as my starting angle. 

To get the line's end position x coordinate: ((cos90 * 200) + 200). The result is 200.

To get the line's end position y coordinate: ((sin90 * 200) + 200). This equals 400.

So I know my first line x2,y2 coordinates are 200,400. 

Thus, my first line entry is:  

```

<line x1="200" y1="200" x2="200" y2="400" style="stroke:rgb(255,255,255);stroke-width:6" /> 

```


<svg height="400" width="400">
  <circle cx="200" cy="200" r="200" stroke="black" stroke-width="0" fill="#6a29ea" />
  <line x1="200" y1="200" x2="200" y2="400" style="stroke:rgb(255,255,255);stroke-width:6" />
  Sorry, your browser does not support inline SVG.  
</svg> 

I then repeat this process twice more, using the angles of (90+120) = 210; and (210+120) =  330.

The result looks like this:

<svg height="400" width="400">
  <circle cx="200" cy="200" r="200" stroke="black" stroke-width="0" fill="#6a29ea" />
  <line x1="200" y1="200" x2="200" y2="400" style="stroke:rgb(255,255,255);stroke-width:6" />
  
  <line x1="200" y1="200" x2="27" y2="100" style="stroke:rgb(255,255,255);stroke-width:6" />
  
  <line x1="200" y1="200" x2="373" y2="100" style="stroke:rgb(255,255,255);stroke-width:6" />
  
  Sorry, your browser does not support inline SVG.  
</svg> 

<h3>More to do</h3>

Javascript can be implemented with SVG to calculate the coordinates for each line, rather than inputting the pre-calculated values.

Here is the code to do this for the above example:
  
```
<svg height="400" width="400">
  <circle cx="200" cy="200" r="200" stroke="black" stroke-width="0" fill="#6a29ea" />
  <line id="line0" x1="200" y1="200" x2="0" y2="0" style="stroke:rgb(255,255,255);stroke-width:6" />
  <line id="line1" x1="200" y1="200" x2="0" y2="0" style="stroke:rgb(255,255,255);stroke-width:6" />
  <line id="line2" x1="200" y1="200" x2="0" y2="0" style="stroke:rgb(255,255,255);stroke-width:6" />
  Sorry, your browser does not support inline SVG.  
</svg>

<script>
var angles = [90, 210, 330];
var i;
var radians;
var x;
var y;
function drawCircle() {
  for(i = 0; i < angles.length; i+=1){
  radians = angles[i] / 180 * Math.PI;
  x = Math.cos(radians);
  x = (x * 200) + 200;
  y = Math.sin(radians);
  y = (y * 200) + 200;
  document.getElementById("line"+i).setAttribute("x2", x );
  document.getElementById("line"+i).setAttribute("y2", y );
  }
}
drawCircle();
</script>

```
As can be noted in the above code extract, I have set the initial x2,y2 coordinates for each line to 0. The Javascript function then computes the x,y values, using Math.cos() and Math.sin() methods, then assigns the values to the x2,y2 attributes of each line, using a loop control structure.

To conclude, SVG works nicely with JavaScript. 
<hr>

<h2>HTML5 Canvas</h2>

HTML5 canvas creates bitmap (raster) images, rather than scalable vectors. The pros and cons of each are complex and not within the scope of this simple introduction. However, to illustrate, here is a similar result using the HTML5 canvas object.

<canvas id="myCanvas" width="400" height="400"
style="border:1px solid #d3d3d3;">
Your browser does not support the canvas element.
</canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(200,200,200,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

function drawCircle() {
var angles = [1*(360 / 3), 2*(360 / 3), 3*(360 / 3)];

for (i=0; i < angles.length; i++){
  var radians = angles[i] / 180 * Math.PI;
  
  var x = Math.cos(radians);
  var x = (x * 200) + 200;
  var y = Math.sin(radians);
  var y = (y * 200) + 200;
  
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.moveTo(200, 200);
  ctx.lineTo(x, y);
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'white';
  ctx.stroke(); 
}
}
drawCircle();

</script>

The code for the HTML5 Canvas image above is:

```

<canvas id="myCanvas" width="400" height="400"
style="border:1px solid #d3d3d3;">
Your browser does not support the canvas element.
</canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(200,200,200,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

function drawCircle() {
var angles = [1*(360 / 3), 2*(360 / 3), 3*(360 / 3)];

for (i=0; i < angles.length; i++){
  var radians = angles[i] / 180 * Math.PI;
  
  var x = Math.cos(radians);
  var x = (x * 200) + 200;
  var y = Math.sin(radians);
  var y = (y * 200) + 200;
  
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.moveTo(200, 200);
  ctx.lineTo(x, y);
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'white';
  ctx.stroke(); 
}
}
drawCircle();

</script>

```
