// array:
Jay = {
  name: "Jat Cutler",
  age: 40
}

Ronnie = {
  name: "Ronnie Coleman",
  age: 50
}

var people = new Array(Jay, Ronnie);

for(i = 0; i< people.length; i++) {
  document.write(people[i].name + "<br>");
}
