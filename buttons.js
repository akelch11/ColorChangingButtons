
// starting colors
var currentTextColor = "red";
var currentBackgroundColor = "a0a0a0";
// options of random colors
colors = ["red", "green", "blue", "yellow", "purple", "pink", "orange", "brown", "magenta", "cyan", "black"];
/*
* generates and returns random integer non-inclusive
  of parameter: [0, max)
 @param max - upper bound of random integer interval
*/
 function randInt(max)
  { return Math.floor(Math.random() * max); }

/*
 changes color of body text
*/
changeTextColor = function() {

  var newColor;  
  var rand; 
  // choose random color
  do { 
    rand = randInt(colors.length);
    newColor = colors[rand];
  } 
   // generate new random color until the color is different than the previous
  // color or the same as the background color
  while(newColor == currentTextColor || newColor == currentBackgroundColor);
    
	document.body.style.color = newColor;
	currentTextColor = newColor;
	return;
}

/*
 changes color of background
*/
function changeBackgroundColor() {
  
  
  var rand; 
  var newColor;
  // choose random color
  do { 
    rand = randInt(colors.length);
    newColor = colors[rand];
  } 
  // generate new random color until the color is different than the previous
  // color or the same as the text color
  while(newColor == currentBackgroundColor || newColor == currentTextColor);
    
	document.body.style.background = newColor;
	currentBackgroundColor = newColor;
	return;
}
  
 


document.getElementById("color").onclick = changeTextColor;
document.getElementById("background").onclick = changeBackgroundColor;