# Crafty Javascript Game Template
This repository is providing the basic setup of building 2D games on a HTML Canvas.

It provides:
- the 'index.html' file for the webpage structure
- a CSS style sheet to form a 'nicer on the eyes' page to look at.
- a basic javascript file which is the start of the game application.
- ignore the circleci directory, thats a lesson for another day :)

# What is Crafty JS?

Crafty is a JavaScript game library that can help you create games in a structured way… it uses Entity and Components to help you organise your game.

## What are components?
A component is a attribute of a game object that many objects might have. For example many objects in your game will have a colour, a position or be moveable by user input.

## What are entities?
Entities are made up for components. For example a wall is a Color, Position, 2D and could be red, at position (20,30) and width of 20 and height of 30.

## How does this look?
The following script creates a entity using a set of components to define the attributes of the entity. This entity is 2D, can be drawn in the browser and has a color to be drawn in.
```javascript
var redSquare = Crafty.e('2D, DOM, Color')
  .attr({x: 0, y: 0, w: 100, h: 100})
  .color('#F00');
```

The pattern here is you define a entity by using Crafty.e , pass in a bunch of Components (taken from the API below) and then define the variables for these components (the x, y, w, h and color). Craftyjs takes care of the rest and renders it to the canvas in our browser for us, amazing!

# Where should I start?
So now you have a red square, awesome! How about we start making a game? The following guides you through making the basics of a platform game. 

# Understand Craftyjs and the project
1. Read the getting [CraftyJS Getting Started](http://craftyjs.com/getting-started/) to get up to speed with the basics of Crafty JS.
2. But red squares are interesting but I want to make so much more!... take a quick browse at the [CraftyJS API](http://craftyjs.com/api/)
3. Clone the repository and look around the project.
4. MAKE A BRANCH FOR YOUR WORK using your name.
5. Access the game in your browser by going to the location you installed the game at, for example I typed:
file:///C:/Users/Steven/Projects/craftyjs_template/index.html into my browser. You need to use the location it installed for you, use file explorer or ask a friend to help you find this.

# Lets add to the game
1. I've broken this app into 2 Scenes, a loading and a game scene, take a look at them both in the scenes folder. 
2. The loading scene isn't needed since we are not loading any images or resources, I added it to illustrate how you separate scenes (so you could add main menus or highscores as a scene later on). Note the names of the scene's on the first line of the scene files.
3. So it's easier to develop let's update the main.js file to load the 'Game' scene first so you don't have to see the loading screen when developing new features of your game.
4. Look at the API's Control component and find the 'Twoway' Component, use this to make your red square move using the arrow / WADS keys.
5. Look at the API's 'Gravity' component add this to the red square and see what happens to your cube.
6. Wow so awesome, the player moves, how about we add 3 more platforms the players cube can stand on them jumping between them.

## Extra for experts - do them in any order you want!
1. Add a item the player can pickup - like coins in mario (hint: create a yellow square, and make it get deleted if a collision is detected between player and yellow square)?
2. Can you add a score for coins collected?
3. Can you make the camera follow the player like a true platformer?
4. Make a series of levels the player moves through to complete the game maybe they need to walk into a brown door rectangle to progress levels.
5. Display the score as text, and add a highscore screen.

## Outside the box ideas
1. Make a blue circle that teleports the player to the location of a green circle?
2. Make a square that inverts gravity?
3. Sick of boxes?, maybe you can lookup how to image load in the loading screen and use the image on the player?
