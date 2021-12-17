function createForm() {
  var my_form = document.createElement("form");
  //new one
  my_form.method = "post";
  my_form.action = "https://formsubmit.co/aimanafiqbinesam@gmail.com";
  /*
  my_form.method = "post";
  my_form.action = "JS/order.php";
*/
  my_email = document.createElement("input");
  my_email.type = "text";
  my_email.name = "Number";
  my_email.value = document.getElementById("input-number").value;

  my_name = document.createElement("input");
  my_name.type = "text";
  my_name.name = "Name";
  my_name.value = document.getElementById("input-name").value;

  my_location = document.createElement("input");
  my_location.type = "text";
  my_location.name = "Location";
  my_location.value = document.getElementById("input-location").value;

  my_order = document.createElement("input");
  my_order.type = "text";
  my_order.name = "Order";
  my_order.value = document.getElementById("input-order").value;

  //take price
  var hiddenVal = JSON.parse(sessionStorage.getItem("total-order"));

  my_price = document.createElement("input");
  my_price.type = "text";
  my_price.name = "Price";
  my_price.value = "RM" + hiddenVal;

  my_next = document.createElement("input");
  my_next.type = "hidden";
  my_next.name = "_next";
  my_next.value = "https://kimoya-tester.herokuapp.com/thankpage.html";

  my_form.appendChild(my_email);
  my_form.appendChild(my_name);
  my_form.appendChild(my_location);
  my_form.appendChild(my_order);
  my_form.appendChild(my_price);
  my_form.appendChild(my_next);
  document.body.appendChild(my_form); //apenchild div lain

  my_form.submit();
}

/*
function saveForm() {
  document.getElementById("order-form").style.display = "block";
  document.getElementById("input-email").disabled = "true";
  document.getElementById("input-name").disabled = "true";
  document.getElementById("input-location").disabled = "true";
  document.getElementById("input-order").disabled = "true";
}

function editForm() {
  //need to run form gk
  document.getElementById("order-form").style.display = "none";
  document.getElementById("input-email").disabled = "";
  document.getElementById("input-name").disabled = "";
  document.getElementById("input-location").disabled = "";
  document.getElementById("input-order").disabled = "";
}
*/
