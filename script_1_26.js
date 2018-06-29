function  person(name, age) {
  // this - works with person
  this.name = name;
  this.age = age;
}

// first creating an object.
var jay = new person("Jay Cutler", 25);

var ronnie = new person("Ronnie Coleman", 50);

document.write(jay.name + " " + jay.age +"<br>");
document.write(ronnie.name + " " + ronnie.age);
