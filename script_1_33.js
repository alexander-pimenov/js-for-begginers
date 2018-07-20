// Sort, Reverse, Push methos with Arrays

var people = new Array("jay",
                       "ronnie",
                       "arnold",
                       "frank",
                       "markus");

// reverse all elements.
document.write(people.reverse().join(", ") + "<br>");

// added new element to an array.
people.push("roman");

// sort in natural order( from a to z);
document.write(people.sort().join(", "));
