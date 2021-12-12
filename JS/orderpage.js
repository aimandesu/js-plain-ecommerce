var products = [
  {
    product: "archfile",
    name: "Arch File",
    dustypink: 2,
    fruitedition: 1,
    cupcakedesign: 1,
    blackedition: 20,
    dustypinkpic: "./Product/ProductImages/ArchFile/dusty pink.png",
    fruiteditionpic: "./Product/ProductImages/ArchFile/fruit.png",
    cupcakedesignpic: "./Product/ProductImages/ArchFile/cupcake.jpg",
    blackeditionpic: "./Product/ProductImages/ArchFile/black.png",
  },
  {
    product: "billbook",
    name: "Bill Book",
    billbook1: 1,
    billbook2: 1,
    billbook3: 1,
    billbook4: 4,
    billbook1pic: "./Product/ProductImages/Bill Book/billbook1.png",
    billbook2pic: "./Product/ProductImages/Bill Book/billbook2.png",
    billbook3pic: "./Product/ProductImages/Bill Book/billbook3.png",
    billbook4pic: "./Product/ProductImages/Bill Book/billbook4.png",
  },
  {
    product: "bussinesscard",
    name: "Bussiness Card",
    bussinesscard1: 100,
    bussinesscard2: 1,
    bussinesscard3: 1,
    bussinesscard4: 1,
    bussinesscard5: 1,
    bussinesscard6: 1,
  },
  {
    product: "buttonbadge",
    name: "Button Badge",
    circle: 1,
    singular: 1,
    custom: 1,
    midnight: 1,
    rectangle: 1,
    pink: 1,
  },
  {
    product: "booklet",
    name: "Booklet",
    design1: 1,
    design2: 1,
    design3: 1,
    wired: 1,
    custom: 1,
    a4size: 1,
  },
  {
    product: "bookmark",
    name: "Bookmark",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
    design6: 1,
  },
  {
    product: "envelope",
    name: "Envelope",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
    design6: 1,
  },
  { product: "folder", name: "Folder", design1: 1, design2: 1, design3: 1 },
  {
    product: "Lshapefolder",
    name: "L Shape Folder",
    design1: 1,
    design2: 1,
    cupcakedesign: 1,
  },
  {
    product: "magnet",
    name: "Magnet",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
  },
  {
    product: "memobox",
    name: "Memo Box",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
  },
  {
    product: "moneypacket",
    name: "Money Packet",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
  },
  {
    product: "mug",
    name: "Mug",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
  },
  {
    product: "multisticker",
    name: "Multi Sticker",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
  },
  {
    product: "notepad",
    name: "Notepad",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
    design6: 1,
  },
  {
    product: "stamchop",
    name: "Stamchop",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
  },
  {
    product: "tentcard",
    name: "Tent Card",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
    design5: 1,
  },
  {
    product: "wirenotebook",
    name: "Wire Notebook",
    design1: 1,
    design2: 1,
    design3: 1,
    design4: 1,
  },
  { product: "computerform", name: "Computer Form", design1: 7 },
  { product: "handfan", name: "Hand Fan", design1: 6, design2: 8, design3: 5 },
  { product: "hanger", name: "Hanger", design1: 8 },
  { product: "hardcover", name: "Hard Cover", design1: 90 },
  { product: "letterhead", name: "Letter Head", design1: 89 },
  { product: "maskkeeper", name: "Mask Keeper", design1: 34 },
  { product: "nonwovenbag", name: "Non Woven Bag" },
  { product: "paperbag", name: "Paper Bag" },
  { product: "sachet", name: "Sachet" },
  { product: "voucher", name: "Voucher", design1: 8 },
  { product: "wobbler", name: "Wobbler", design1: 4 },
  { product: "labelsticker", name: "Label Sticker", design1: 4 },
  { product: "carsticker", name: "Car Sticker" },
  { product: "thankyoucard", name: "Thank You Card" },
  { product: "tissuebox", name: "Tissue Box" },
  { product: "weddingcard", name: "Wedding Card" },
  { product: "weddinggoodies", name: "Wedding Goodies" },
  { product: "windowsticker", name: "Window Sticker" },
];

function order() {
  var arrCopy = [];
  let eachCart = [];
  let eachItem = [];
  var price = 0;
  var priceEach = 0;
  console.log(products.length);
  for (let num = 0; num < products.length; num++) {
    var product = JSON.parse(
      sessionStorage.getItem(products[num].product.toString())
    );
    console.log(product);

    if (product == 0 || product == null) {
      var zeroVal = [];
      document.getElementById(products[num].product.toString()).innerHTML = "";
      sessionStorage.setItem(
        products[num].product.toString(),
        JSON.stringify(zeroVal)
      );
    } else {
      const itemsBought = product.map((x) =>
        x.toLowerCase().split(" ").join("")
      );
      console.log(products[num].product.toString());
      for (let item = 0; item < itemsBought.length; item++) {
        var illiterateItem = itemsBought[item];
        var cartItem = product[item];
        var priceChanges = products[num][illiterateItem];
        console.log(priceChanges);

        eachItem.push(priceChanges);
        var initialItem = JSON.parse(
          sessionStorage.getItem(
            products[num].product + illiterateItem + "input"
          )
        );
        if (initialItem == null || initialItem == 0) {
          //eachCart.push(""); //cartItem
        } else if (initialItem == 1) {
          eachCart.push(cartItem + "(" + initialItem + " item)");
        } else {
          eachCart.push(cartItem + "(" + initialItem + " items)");
        }

        var price = (price += priceChanges);
        console.log(price);
        var priceEach = (priceEach += priceChanges);
        console.log(priceEach);
      }
      console.log(eachCart);
      console.log(priceEach);

      if (priceEach > 0) {
        var sendText = (document.getElementById(
          products[num].product.toString()
        ).innerHTML = products[num].name + ": " + eachCart);
      }

      priceEach = 0;
      eachItem = [];
      eachCart = [];

      arrCopy.push(sendText);
      sessionStorage.setItem("notecopy", arrCopy.join("\r\n"));
      document.getElementById("copybutton").style.display = "block";
      document.getElementById("orderdetails").style.display = "block";
    }
  }
}

function copy() {
  var theTarget;
  const el = document.createElement("textarea");
  theTarget = sessionStorage.getItem("notecopy");
  el.value = theTarget;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

//not used probably
function viewPrice() {
  let eachItem = [];
  var price = 0;
  var priceEach = 0;

  for (let num = 0; num < products.length; num++) {
    var product = JSON.parse(
      sessionStorage.getItem(products[num].product.toString())
    );
    const itemsBought = product.map((x) => x.toLowerCase().split(" ").join(""));

    for (let item = 0; item < itemsBought.length; item++) {
      var illiterateItem = itemsBought[item];

      var priceChanges = products[num][illiterateItem];

      eachItem.push(priceChanges);
      var price = (price += priceChanges);
      var priceEach = (priceEach += priceChanges);
    }

    if (priceEach > 0) {
      document.getElementById(
        products[num].product.toString() + "items"
      ).innerHTML = products[num].name + "<br>" + product.join("<br>");
      document.getElementById(
        products[num].product.toString() + "price"
      ).innerHTML = "<br>RM" + eachItem.join("<br>RM");
    } else if (product.length == 0) {
      document.getElementById(
        products[num].product.toString() + "details"
      ).style.display = "none";
    }

    priceEach = 0;
    eachItem = [];

    if (price == 0) {
      document.getElementById("order-price").innerHTML = "";
    } else {
      document.getElementById("order-price").innerHTML = "RM" + price;
    }
  }
}

function cart() {
  let eachCart = [];
  let eachItem = [];
  var price = 0;
  var priceEach = 0;
  var u = document.getElementById("cart-overflow");
  document.getElementById("no-order").innerHTML =
    "<h1>No order has been recorded. Please go to shop to note your order.</h1>";

  for (let num = 0; num < products.length; num++) {
    var product = JSON.parse(
      sessionStorage.getItem(products[num].product.toString())
    );
    console.log(product);

    if (product == 0 || product == null) {
      var zeroVal = [];
      document.getElementById(
        products[num].product.toString() + "details"
      ).style.display = "none";

      sessionStorage.setItem(
        products[num].product.toString(),
        JSON.stringify(zeroVal)
      );
    } else {
      const itemsBought = product.map((x) =>
        x.toLowerCase().split(" ").join("")
      );

      document.getElementById("no-order").style.display = "none";

      //let display available
      document.getElementById("order-display").style.display = "table-row";
      document.getElementById("cart-display").style.display = "table-row";
      document.getElementById("order-page-title").style.display = "table-row";

      //create dynimacally content inside product details
      var takeTrID = document.getElementById(
        products[num].product.toString() + "details"
      );
      var tdFirst = document.createElement("td");
      var tdSecond = document.createElement("td");
      var tdThird = document.createElement("td");
      var br = document.createElement("br");
      var tdItems = document.createElement("div");
      tdItems.id = products[num].product + "items";
      var tdCart = document.createElement("div");
      tdCart.id = products[num].product + "cart";
      var tdPrice = document.createElement("div");
      tdPrice.id = products[num].product + "price";

      //append the child
      tdFirst.appendChild(tdItems);
      tdSecond.appendChild(br);
      tdSecond.appendChild(tdCart);
      tdThird.appendChild(tdPrice);
      takeTrID.appendChild(tdFirst);
      takeTrID.appendChild(tdSecond);
      takeTrID.appendChild(tdThird);
      console.log(takeTrID);

      for (let item = 0; item < itemsBought.length; item++) {
        var illiterateItem = itemsBought[item];
        console.log(illiterateItem);
        var cartItem = product[item];
        var priceChanges = products[num][illiterateItem];
        var objTo = document.getElementById(
          products[num].product.toString() + "cart"
        );

        //create outer div element into the html
        var div = document.createElement("div");
        div.className = "DivOuter";
        //create button add
        var buttonAdd = document.createElement("button");
        buttonAdd.id = products[num].product + illiterateItem + "add";
        buttonAdd.innerHTML = "+";
        buttonAdd.onclick = function () {
          add(this.id, this.parentNode.childNodes[1].id);
        };

        //create input
        var input = document.createElement("input");
        input.id = products[num].product + illiterateItem + "input";
        input.type = "number";
        input.disabled = "true";
        input.value =
          JSON.parse(
            sessionStorage.getItem(
              products[num].product + illiterateItem + "input"
            )
          ) + 0;
        //create button substract
        var buttonMinus = document.createElement("button");
        buttonMinus.id = products[num].product + illiterateItem + "subtract";
        buttonMinus.innerHTML = "-";
        buttonMinus.onclick = function () {
          substract(this.id, this.parentNode.childNodes[1].id);
        };

        //create image
        var innerCart = document.createElement("div");
        innerCart.className = "inner-cart";
        var imageArr = products[num][illiterateItem + "pic"];
        var innerImage = document.createElement("img");
        innerImage.setAttribute("src", imageArr);
        var productName = document.createElement("h1");
        productName.appendChild(document.createTextNode(illiterateItem));
        //innerImage.id = products[num].product + illiterateItem + "pic";

        innerCart.appendChild(innerImage);
        innerCart.appendChild(productName);

        //appendchild to the element

        div.appendChild(buttonMinus);
        div.appendChild(input);
        div.appendChild(buttonAdd);
        objTo.appendChild(div);
        u.appendChild(innerCart);
        console.log(u);

        //here need something confirmation if nk add product sama or not, priceChanges ni

        eachItem.push(priceChanges * input.value);
        eachCart.push(
          cartItem
          /*+
            " x " +
            JSON.parse(sessionStorage.getItem(illiterateItem + "input"))*/
        );
        var price = (price += eachItem[item]);
        var priceEach = (priceEach += priceChanges);
      }

      if (priceEach > 0) {
        document.getElementById(
          products[num].product.toString() + "items"
        ).innerHTML = products[num].name + "<br>" + eachCart.join("<br>");
        document.getElementById(
          products[num].product.toString() + "price"
        ).innerHTML = "<br>RM" + eachItem.join("<br>RM");
      } else if (product.length == 0) {
        document.getElementById(
          products[num].product.toString() + "details"
        ).style.display = "none";
      }

      priceEach = 0;
      eachItem = [];
      eachCart = [];

      if (price == 0) {
        document.getElementById("order-price").innerHTML = "";
      } else {
        document.getElementById("order-price").innerHTML = "RM" + price;
      }
    }
  }
}

//var url = "orderpage.html";, pass html and id to use this

function add(buttonID, inputID) {
  let input = document.querySelector("#" + inputID);
  //let btnadd = document.querySelector("#" + buttonID);
  input.value = parseInt(input.value) + 1;
  sessionStorage.setItem(inputID.toString(), input.value);

  /*
  fetch(url).then((res) => {
    element.innerHTML = res;
  });
  */
}

function substract(buttonID, inputID) {
  let input = document.querySelector("#" + inputID);
  //let btnsubs = document.querySelector("#" + buttonID);

  if (input.value == 0 || input.value == null) {
    input.value = 0;
  } else {
    input.value = parseInt(input.value) - 1;
    sessionStorage.setItem(inputID.toString(), input.value);
  }
}
