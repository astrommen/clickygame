# clickygame
a memory game
an array of images #'d from (0-12) 
  * a for loop randomly generating non repeating numbers between 0-12
randomly placed in a grid or overflow row
  * var x = Math.floor((Math.random() * 12) + 1);

  user clicks an image to increase score
    each clicks shuffles the images around
  user cannot click the same image twice
    game over condition
