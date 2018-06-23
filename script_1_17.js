var firstName = "Jay";
var lastName = "Cutler";

if(firstName == "Jay") {
  if(lastName == "Cutler") {
    document.write("It's a " + firstName + " " + lastName);
  } else {
    document.write("It's a " + firstName + " without lastName");
  }
}

// when variable is not empty -> it's true.
if(firstName && lastName) {
  document.write("firstName and lastName are not empty.");
}
