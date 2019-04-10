# Crafty Javascript Game Template
This repository is providing the basic setup of building 2D games on a HTML Canvas.

It provides:
- 'index.html' file for the webpage structure
- a CSS style sheet to form a 'nicer on the eyes' page to look at.
- a basic javascript file which is the start of the game application.

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

The patten here is you define a entity by using Crafty.e , pass in a bunch of Components (taken from the API below) and then define the variables for these components (the x, y, w, h and color). Craftyjs takes care of the rest and renders it to the canvas in our browser for us, amazing!



# Where should I start?
So now you have a red square, awesome! How about we make a game?

1. Read the [CraftyJS Getting Started](http://craftyjs.com/getting-started/) to get up to speed with the basics of Crafty JS.
2. But we need more than red squares and movement... take a quick browse at the full API [CraftyJS API](http://craftyjs.com/api/)
3. I've broken this app into Loading and Game Scenes, Take a look at them both in the scenes folder. Now update the main.js file to load the 'Game' scene first so you don't have to see the loading screen when developing.
4. Look at the API's Control component and find the Twoway Component, use this to make your square move using the arrow / WADS keys.
5. Look at the API's Gravity component add this and see what happens to your cube.
6. How about we add a more platforms the players cube can stop falling and stand on them. 

## Extra for experts
8. Add a item the player can pickup (hint: Spawn a yellow square, and look up Collision hit checking)?
9. Can you add a score for this?
10. Can you make the camera scroll like a true platformer?
11. Make a series of levels the player moves through to complete the game. 
12. Add a score and highscore screen

