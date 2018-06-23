var apple = 12;
var orange = 20;
var orangeStr = "20";

var bool = orange == orangeStr; // it's true.
var bool2 = orange === orangeStr; // it's false.
document.write(bool + " " + bool2 + " ");

function word() {
  alert("It's a good day, men!")
}

// less than
// grater than
// equal
// less than or equal
// grater than or equal
// we could use:
/*
  <
  >
  >=
  <=
  == it means equal without types.
  !=
  === equal only by types.
  !(true) == false.
  the same as for Java.
*/
if(apple < orange) {
  document.write("apple < orange     ");
}

if(!(apple > orange)) {
  document.write("!(true) == false");
}
