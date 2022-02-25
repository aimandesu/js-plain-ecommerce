//array for all id

var countBoxes = [];

var pass = [];

function orderitem(type, id) {
  var getProductChoose = JSON.parse(sessionStorage.getItem(type));
  console.log(getProductChoose);
  if (getProductChoose == null) {
    sessionStorage.setItem(type, JSON.stringify([]));
    var getProductChoose = JSON.parse(sessionStorage.getItem(type));
    getProductChoose.push(id);
    sessionStorage.setItem(type, JSON.stringify(getProductChoose));
  } else if (!getProductChoose.includes(id)) {
    getProductChoose.push(id);
    sessionStorage.setItem(type, JSON.stringify(getProductChoose));
  }
  //items, index
  // var toText = String(items);
  // var items = document.forms[index];
  // var txt = [];
  // console.log(toText);
  // for (i = 0; i < items.length; i++) {
  //   if (items[i].checked == true) {
  //     txt[i] = items[i].value;
  //     console.log(txt);
  //   }
  //   sessionStorage.setItem(toText, JSON.stringify(txt.filter((x) => x)));
  // }
  // var lol = [];
  // lol.push(index);
  // console.log(lol);
  // console.log(lol.includes(0));
  // var testing = JSON.parse(sessionStorage.getItem(toText)); //first thing
  // console.log(testing.includes("Bill Book 1")); //return true or false
  // if (!testing.includes("Bill Book 1")) {
  //   testing.push("Bill Book 1");
  //   sessionStorage.setItem(toText, JSON.stringify(testing));
  // }
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

function cartUnableToAdd() {
  var target = document.getElementById("cart-popup");
  target.style.border = "1px solid whitesmoke";
  var cartnoti = document.createElement("div");
  var topCart = document.createElement("h4");
  //topCart.className = "line";
  topCart.innerHTML = "You must add a quantity greater than zero";
  topCart.style.border = "none";
  cartnoti.appendChild(topCart);

  var closeButton = document.createElement("button");
  closeButton.innerHTML = "Okay";
  closeButton.className = "unableToAdd";
  closeButton.onclick = () => {
    setTimeout(function () {
      cartnoti.remove();
      target.style.border = "none";
    }, 500);
  };
  cartnoti.appendChild(closeButton);

  target.appendChild(cartnoti);
}

function getNumProduct(prodPos, type, id) {
  var sentToCart = document.getElementsByClassName("totalWants")[prodPos].value;
  var currentVal = sessionStorage.getItem(type + id + "input");
  console.log(currentVal);
  console.log(type + id + "input");
  if (currentVal == null || currentVal == "deleted") {
    sessionStorage.setItem(type + id + "input", sentToCart);
  } else {
    let x = parseInt(sentToCart) + parseInt(currentVal);
    console.log(x);
    sessionStorage.setItem(type + id + "input", x);
  }
  console.log(currentVal);
  console.log(sentToCart);

  // console.log(
  //   JSON.parse(sessionStorage.getItem(type + id + "input", sentToCart))
  // );
}

function addCart(type, id, src, prodPos) {
  var sentToCart = document.getElementsByClassName("totalWants")[prodPos].value;
  if (sentToCart < 1) {
    cartUnableToAdd();
  } else {
    //document.getElementById(id).checked = true;
    //save();
    orderitem(type, id);
    cartpop(id, src);
    getNumProduct(prodPos, type, id.toLowerCase().split(" ").join(""));
  }

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
