function createForm() {
  var my_form = document.createElement("form");
  my_form.method = "post";
  my_form.action = "order.php";

  my_email = document.createElement("input");
  my_email.type = "email";
  my_email.name = "my-email";
  my_email.value = document.getElementById("input-email").value;

  my_name = document.createElement("input");
  my_name.type = "text";
  my_name.name = "my-name";
  my_name.value = document.getElementById("input-name").value;

  my_location = document.createElement("input");
  my_location.type = "text";
  my_location.name = "my-location";
  my_location.value = document.getElementById("input-location").value;

  my_order = document.createElement("input");
  my_order.type = "text";
  my_order.name = "my-order";
  my_order.value = document.getElementById("input-order").value;

  my_form.appendChild(my_email);
  my_form.appendChild(my_name);
  my_form.appendChild(my_location);
  my_form.appendChild(my_order);
  document.body.appendChild(my_form);

  my_form.submit();
}
