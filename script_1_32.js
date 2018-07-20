//Pop and Join methods with Arrays.

var people = new Array("jey",
                       "ronnie",
                       "kai",
                       "arnold",
                       "frank",
                       "markus");

// it makes one String with all array's elements joining with ", ".
// jey, ronnie, kai, arnold, frank, markus
var persons = people.join(", ");
document.write(persons);
document.write("<br>");
document.write(people[5] + "<br>");
// method pop() removing last element in Array.
people.pop();
// it will 'underfined'
document.write(people[5] + "<br>")
