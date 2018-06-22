function math(a, b) {
  var c = a + b;
  return c;
}
var c = math(1, 5);

if(c == 6) {
  document.write("it was true!");
  do {
    document.write(c);
    c--;
  } while (c > 0);
}
