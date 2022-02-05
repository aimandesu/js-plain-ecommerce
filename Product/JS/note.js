//array for all id

var countBoxes = [];

var pass = [];

function orderitem(items, index) {
  var toText = String(items);
  var items = document.forms[index];
  var txt = [];
  console.log(toText);

  for (i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      txt[i] = items[i].value;
      console.log(txt);
    }
    sessionStorage.setItem(toText, JSON.stringify(txt.filter((x) => x)));
  }
}

function getCheckboxItems(ArrID) {
  return ArrID.map(function (selector) {
    return {
      selector: selector,
      element: document.getElementById(selector),
    };
  });
}

function serializeCheckboxes(elements) {
  var container = elements.reduce(function (accumulator, item) {
    accumulator[item.selector] = item.element.checked;
    return accumulator;
  }, {});

  sessionStorage.setItem("container", JSON.stringify(container));
}

function readCheckboxes() {
  var itemChecked = [];
  var storage = sessionStorage.getItem("container"), //Your key
    container = storage ? JSON.parse(storage) : {};

  Object.keys(container).forEach(function (key) {
    var element = document.getElementById(key);
    //console.log(key);

    if (element) {
      element.checked = container[key];
      if (element.checked == true) {
        console.log(element.id);
        itemChecked.push(element.id);
      }
    }
  });
  console.log(itemChecked);
  sessionStorage.setItem("checkBoxID", JSON.stringify(itemChecked));
  console.log(JSON.parse(storage));
}

function save() {
  var getBoxes = document.getElementsByClassName("boxes");
  for (i = 0; i < getBoxes.length; i++) {
    var x = document.getElementsByClassName("boxes")[i].id;
    countBoxes[i] = x;
  }
  var passKeyID = countBoxes;
  console.log(passKeyID);
  var elements = getCheckboxItems(passKeyID);
  console.log(elements);
  serializeCheckboxes(elements);
}

function cartpop(productName, src) {
  var target = document.getElementById("cart-popup");
  target.style.border = "1px solid whitesmoke";
  var cartnoti = document.createElement("div");
  var topCart = document.createElement("h4");
  topCart.className = "line";
  topCart.innerHTML = "JUST ADDED TO YOUR CART";
  //var cross = document.createElement("i");
  //cross.className = "fas fa-times";

  //cartimg-container
  var cartimg = document.createElement("div");
  cartimg.className = "cartimg-container";
  var productImg = document.createElement("img");
  productImg.setAttribute("src", src);
  var product = document.createElement("p");
  product.innerHTML = productName;
  cartimg.appendChild(productImg);
  cartimg.appendChild(product);

  /*cart box
  var cartbox = document.createElement("div");
  cartbox.className = "cart-box";
  var aLink = document.createElement("a");
  aLink.setAttribute("href", "../orderpage.html");
  var viewCart = document.createElement("h3");
  viewCart.innerHTML = "View Cart";
  aLink.appendChild(viewCart);
  cartbox.appendChild(aLink);
*/
  //topCart.appendChild(cross);
  cartnoti.appendChild(topCart);
  cartnoti.appendChild(cartimg);
  //cartnoti.appendChild(cartbox);
  target.appendChild(cartnoti);

  setTimeout(function () {
    cartnoti.remove();
    target.style.border = "none";
  }, 1000);
}

function addCart(type, id, num, src) {
  document.getElementById(id).checked = true;
  //save();
  orderitem(type, num);
  cartpop(id, src);
  //alert("Item added to cart");
}

/*
function addCart(type, id, num, src) {
  if (window.innerWidth > 800) {
    document.getElementById(id).checked = true;
    //save();
    orderitem(type, num);
    cartpop(id, src);
  } else {
    document.getElementById(id).checked = true;
    //save();
    orderitem(type, num);

    alert("Item added to cart");
  }
}
*/
