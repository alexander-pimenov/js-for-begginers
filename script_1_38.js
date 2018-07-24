// Date objects:
function time() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  document.write(hours + ":" + minutes + ":" + seconds + "<br>");
}

// specific function. 1st function name, 2nd time each.
setInterval("time()", 1000);
