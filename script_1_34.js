// Creating an array using for loop.

// prompt it's a new optioan for JS - adding new variable
// before page is loaded.
var apple = prompt("Put your variable here");

document.write("your variable is " + apple + "<br>");

// For loops and arrays:
var fruits = new Array(3);

var way1 = true;

for(i = 0; i < 3; i++) {
  if(way1) {
    fruits[i] = prompt("Put one of your favorite Fruits. DRY.");
  } else {
    fruits.push(prompt("Put one of your favorite Fruits. DRY."));
  }
}

document.write("Your favorite fruits are " + fruits[0] + ", " + fruits[1] + ", " + fruits[2]);
