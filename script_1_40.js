// Accesing the form.

// looking for From Object.
var form = document.forms[0].elements[0].type;

// or get form by name.
// It means that it finds form only by name in document.
var form2 = document.form1.password.type;
document.write(form);
document.write("<br>");
document.write(form2);
