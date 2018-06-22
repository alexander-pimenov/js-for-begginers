var times = 10;

function apple() {
  document.write("I'm an apple fucntion.<br>");
  orange();
}

function orange() {
  document.write("I'm an orange function.");
  if(times > 0) {
    apple();
    times--;  
  }
}

function fruits() {
  apple();
  orange();
}

apple();
