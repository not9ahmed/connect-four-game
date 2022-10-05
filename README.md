# Connect Four Game

## App Description
### The following game goal is to have 4 similar colored circles in color red or blue in either horizontal, vertical, and diagonal line. The red player is user and the blue player a computer.


---
## The Game can be Accessed Through this Link
### [GitHub Pages Link](https://not9ahmed.github.io/connect-four-game/)


---
## Approach Taken
Before implementing the project a research was done to find an overall idea of how the game should work and what are the winning conditions for the game. Then, the wireframe was designed to facilitate the design on HTML and CSS. The wireframe was done using Figma tool.

The HTML contained the div with a display of grid, then inside of it there is a 42 divs of circle shape which are organized as 7 columns and 6 row. The divs represent each possible positon possible and it is by default in the color of white. Until a player choose that place. However, the last empty circle in the selected column will be marked. Each game circle has an id that maps to the position in terms of a matrix. So a game circle with id of row-0-col-3 will be mapped to position in the matrix[0][3] and this will simplify the tracking of winning conditions. The matrix will be named as gameTable.

The winning conditions will be as a horizonal, vertical, and diagonal in each possible position. The winning conditions will be checked after each player move. Once a player wins, the scoreboard will increase the number of wins of that player.
<br>

---
## Technologies Used
The project was done using HTML, CSS and JavaScript. For the code editor, I have used VS Code as it offers a lot of functionalites to debug the code. For the wireframe design, Figma deisgn tool was used design all the elements and background colors. In addition, Replit was used relatively to debug some algorithms and functions quickly.
<br>

---
## Wireframe
The below image is the wireframe of the project to be implemented and it was using Figma. Some elements such as the game board, game circles, results div, and scoreboard design was copied from Figma as CSS which helped in lowering the difficultly of designing the elements directly on CSS and HTML.
<br>

![Tux, the Linux mascot](/Wireframe.jpg)

---

## Post-Project Reflection
I have found the project simpler after finishing from Tic-Tac-Toe since it helped me to understand the logic and sequencing of games which it was for helpful. The connect four had a similar functionalities it was somewhat tricky, but I eventually understood what was required. I also believe that my design can be improved an I can more cool effect such as animations. Moreoever, I believe that the computer can be more intelligent instead of selecting random places in the connect four board.
<br>

---
## Sources Used
1. [Stack OverFlow Website](https://stackoverflow.com)
2. [W3Schools Website](https://www.w3schools.com)
3. [Connect Four Game Website](https://www.mathsisfun.com/games/connect4.html)
<br>