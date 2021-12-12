function createForm() {
  var my_form = document.createElement("form");
  //new one
  my_form.method = "post";
  my_form.action = "/https://formsubmit.co/05c22619658c8b6061476942f1a51a84";
  /*
  my_form.method = "post";
  my_form.action = "JS/order.php";
*/
  my_email = document.createElement("input");
  my_email.type = "email";
  my_email.name = "email";
  my_email.value = document.getElementById("input-email").value;

  my_name = document.createElement("input");
  my_name.type = "text";
  my_name.name = "name";
  my_name.value = document.getElementById("input-name").value;

  my_location = document.createElement("input");
  my_location.type = "text";
  my_location.name = "Location";
  my_location.value = document.getElementById("input-location").value;

  my_order = document.createElement("input");
  my_order.type = "text";
  my_order.name = "message";
  my_order.value = document.getElementById("input-order").value;

  my_form.appendChild(my_email);
  my_form.appendChild(my_name);
  my_form.appendChild(my_location);
  my_form.appendChild(my_order);
  document.body.appendChild(my_form); //apenchild div lain

  my_form.submit();
}

function saveForm() {
  document.getElementById("order-form").style.display = "block";
}

function editForm() {
  //need to run form gk
  document.getElementById("order-form").style.display = "none";
  document.getElementById("input-email").disabled = "";
  document.getElementById("input-name").disabled = "";
  document.getElementById("input-location").disabled = "";
  document.getElementById("input-order").disabled = "";
}
