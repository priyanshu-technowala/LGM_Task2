var form = document.getElementById("form");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value
  };

  // Display the data on the page
  var div = document.getElementById("data");
  div.innerHTML = JSON.stringify(data);
});
