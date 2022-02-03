//input id, value, and array ni semua kena sama reference

var products = [
  {
    product: "archfile",
    name: "Arch File",
    dustypink: 2,
    fruitedition: 1,
    cupcakedesign: 1,
    blackedition: 20,
    dustypinkpic: "../Product/ProductImages/ArchFile/dusty pink.png",
    fruiteditionpic: "../Product/ProductImages/ArchFile/fruit.png",
    cupcakedesignpic: "../Product/ProductImages/ArchFile/cupcake.jpg",
    blackeditionpic: "../Product/ProductImages/ArchFile/black.png",
  },
  {
    product: "billbook",
    name: "Bill Book",
    billbook1: 1,
    billbook2: 1,
    billbook3: 1,
    billbook4: 4,
    billbook1pic: "../Product/ProductImages/Bill Book/billbook1.png",
    billbook2pic: "../Product/ProductImages/Bill Book/billbook2.png",
    billbook3pic: "../Product/ProductImages/Bill Book/billbook3.png",
    billbook4pic: "../Product/ProductImages/Bill Book/billbook4.png",
  },
  {
    product: "bussinesscard",
    name: "Bussiness Card",
    bussinesscard1: 10,
    bussinesscard2: 1,
    bussinesscard3: 1,
    bussinesscard4: 1,
    bussinesscard5: 1,
    bussinesscard6: 1,
    bussinesscard1pic: "./Product/ProductImages/Bussiness card/bussiness.png",
    bussinesscard2pic: "./Product/ProductImages/Bussiness card/bussiness2.png",
    bussinesscard3pic: "./Product/ProductImages/Bussiness card/bussiness3.png",
    bussinesscard4pic: "./Product/ProductImages/Bussiness card/bussiness4.png",
    bussinesscard5pic: "./Product/ProductImages/Bussiness card/bussiness5.png",
    bussinesscard6pic: "./Product/ProductImages/Bussiness card/card.jpg",
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
    circlepic: "./Product/ProductImages/Badge/circle button badge.jpg",
    singularpic: "./Product/ProductImages/Badge/singular button.png",
    custompic: "./Product/ProductImages/Badge/custom.png",
    midnightpic: "./Product/ProductImages/Badge/midnight.png",
    rectanglepic: "./Product/ProductImages/Badge/rectangle.png",
    pinkpic: "./Product/ProductImages/Badge/pink.png",
  },
  {
    product: "booklet",
    name: "Booklet",
    booklet1: 1,
    booklet2: 1,
    booklet3: 1,
    wired: 1,
    bookletcustom: 1,
    a4size: 1,
    booklet1pic: "./Product/ProductImages/Booklet/booklet1.png",
    booklet2pic: "./Product/ProductImages/Booklet/booklet2.png",
    booklet3pic: "./Product/ProductImages/Booklet/booklet3.png",
    wiredpic: "./Product/ProductImages/Booklet/wired.png",
    bookletcustompic: "./Product/ProductImages/Booklet/custom.png",
    a4sizepic: "./Product/ProductImages/Booklet/a4.png",
  },
  {
    product: "bookmark",
    name: "Bookmark",
    bookmark1: 1,
    bookmark2: 1,
    bookmark3: 1,
    bookmark4: 1,
    bookmark5: 1,
    bookmark6: 1,
    bookmark1pic: "./Product/ProductImages/Bookmark/bookmark1.png",
    bookmark2pic: "./Product/ProductImages/Bookmark/bookmark2.png",
    bookmark3pic: "./Product/ProductImages/Bookmark/bookmark3.png",
    bookmark4pic: "./Product/ProductImages/Bookmark/bookmark4.png",
    bookmark5pic: "./Product/ProductImages/Bookmark/bookmark5.png",
    bookmark6pic: "./Product/ProductImages/Bookmark/bookmark6.png",
  },
  {
    product: "envelope",
    name: "Envelope",
    envelope1: 1,
    envelope2: 1,
    envelope3: 1,
    envelope4: 1,
    envelope5: 1,
    envelope6: 1,
    envelope1pic: "./Product/ProductImages/Envelope/envelope1.png",
    envelope2pic: "./Product/ProductImages/Envelope/envelope2.png",
    envelope3pic: "./Product/ProductImages/Envelope/envelope3.png",
    envelope4pic: "./Product/ProductImages/Envelope/envelope4.png",
    envelope5pic: "./Product/ProductImages/Envelope/envelope5.png",
    envelope6pic: "./Product/ProductImages/Envelope/envelope6.png",
  },
  {
    product: "folder",
    name: "Folder",
    folder1: 1,
    folder2: 1,
    folder3: 1,
    folder1pic: "./Product/ProductImages/Folder/folder1.png",
    folder2pic: "./Product/ProductImages/Folder/folder2.png",
    folder3pic: "./Product/ProductImages/Folder/folder3.png",
  },
  {
    product: "Lshapefolder",
    name: "L Shape Folder",
    lshapefolder1: 1,
    lshapefolder2: 1,
    lshapefolder3: 1,
    lshapefolder1pic: "./Product/ProductImages/LshapeFolder/folder1.png",
    lshapefolder2pic: "./Product/ProductImages/LshapeFolder/folder2.png",
    lshapefolder3pic: "./Product/ProductImages/LshapeFolder/folder3.png",
  },
  {
    product: "magnet",
    name: "Magnet",
    magnet1: 1,
    magnet2: 1,
    magnet3: 1,
    magnet4: 1,
    magnet1pic: "./Product/ProductImages/Magnet/magnet1.png",
    magnet2pic: "./Product/ProductImages/Magnet/magnet2.png",
    magnet3pic: "./Product/ProductImages/Magnet/magnet3.png",
    magnet4pic: "./Product/ProductImages/Magnet/magnet4.png",
  },
  {
    product: "memobox",
    name: "Memo Box",
    memobox1: 1,
    memobox2: 1,
    memobox3: 1,
    memobox4: 1,
    memobox5: 1,
    memobox1pic: "./Product/ProductImages/Memobox/memobox1.png",
    memobox2pic: "./Product/ProductImages/Memobox/memobox2.png",
    memobox3pic: "./Product/ProductImages/Memobox/memobox3.png",
    memobox4pic: "./Product/ProductImages/Memobox/memobox4.png",
    memobox5pic: "./Product/ProductImages/Memobox/memobox5.png",
  },
  {
    product: "moneypacket",
    name: "Money Packet",
    moneypacket1: 1,
    moneypacket2: 1,
    moneypacket3: 1,
    moneypacket4: 1,
    moneypacket5: 1,
    moneypacket1pic: "./Product/ProductImages/MoneyPacket/design1.png",
    moneypacket2pic: "./Product/ProductImages/MoneyPacket/design2.png",
    moneypacket3pic: "./Product/ProductImages/MoneyPacket/design3.png",
    moneypacket4pic: "./Product/ProductImages/MoneyPacket/design4.png",
    moneypacket5pic: "./Product/ProductImages/MoneyPacket/design5.png",
  },
  {
    product: "mug",
    name: "Mug",
    mug1: 1,
    mug2: 1,
    mug3: 1,
    mug4: 1,
    mug5: 1,
    mug1pic: "./Product/ProductImages/Mug/design1.png",
    mug2pic: "./Product/ProductImages/Mug/design2.png",
    mug3pic: "./Product/ProductImages/Mug/design3.png",
    mug4pic: "./Product/ProductImages/Mug/design4.png",
    mug5pic: "./Product/ProductImages/Mug/design5.png",
  },
  {
    product: "multisticker",
    name: "Multi Sticker",
    multisticker1: 1,
    multisticker2: 1,
    multisticker3: 1,
    multisticker4: 1,
    multisticker1pic: "/Product/ProductImages/MultiSticker/design1.png",
    multisticker2pic: "/Product/ProductImages/MultiSticker/design2.png",
    multisticker3pic: "/Product/ProductImages/MultiSticker/design3.png",
    multisticker4pic: "/Product/ProductImages/MultiSticker/design4.png",
  },
  {
    product: "notepad",
    name: "Notepad",
    notepad1: 1,
    notepad2: 1,
    notepad3: 1,
    notepad4: 1,
    notepad5: 1,
    notepad6: 1,
    notepad1pic: "./Product/ProductImages/Notepad/design1.png",
    notepad2pic: "./Product/ProductImages/Notepad/design2.png",
    notepad3pic: "./Product/ProductImages/Notepad/design3.png",
    notepad4pic: "./Product/ProductImages/Notepad/design4.png",
    notepad5pic: "./Product/ProductImages/Notepad/design5.png",
    notepad6pic: "./Product/ProductImages/Notepad/design6.png",
  },
  {
    product: "stamchop",
    name: "Stamchop",
    stamchop1: 1,
    stamchop2: 1,
    stamchop3: 1,
    stamchop4: 1,
    stamchop1pic: "./Product/ProductImages/StampChop/design1.png",
    stamchop2pic: "./Product/ProductImages/StampChop/design2.png",
    stamchop3pic: "./Product/ProductImages/StampChop/design3.png",
    stamchop4pic: "./Product/ProductImages/StampChop/design4.png",
  },
  {
    product: "tentcard",
    name: "Tent Card",
    tentcard1: 1,
    tentcard2: 1,
    tentcard3: 1,
    tentcard4: 1,
    tentcard5: 1,
    tentcard1pic: "./Product/ProductImages/TentCard/design1.png",
    tentcard2pic: "./Product/ProductImages/TentCard/design2.png",
    tentcard3pic: "./Product/ProductImages/TentCard/design3.png",
    tentcard4pic: "./Product/ProductImages/TentCard/design4.png",
    tentcard5pic: "./Product/ProductImages/TentCard/design5.png",
  },
  {
    product: "wirenotebook",
    name: "Wire Notebook",
    wirenotebook1: 1,
    wirenotebook2: 1,
    wirenotebook3: 1,
    wirenotebook4: 1,
    wirenotebook1pic: "./Product/ProductImages/WireNotebook/design1.png",
    wirenotebook2pic: "./Product/ProductImages/WireNotebook/design2.png",
    wirenotebook3pic: "./Product/ProductImages/WireNotebook/design3.png",
    wirenotebook4pic: "./Product/ProductImages/WireNotebook/design4.png",
  },
  { product: "computerform", name: "Computer Form", design1: 7 }, //none
  {
    product: "handfan",
    name: "Hand Fan",
    handfan1: 6,
    handfan2: 8,
    handfan3: 5,
    handfan1pic: "/Product/ProductImages/HandFan/design1.png",
    handfan2pic: "/Product/ProductImages/HandFan/design2.png",
    handfan3pic: "/Product/ProductImages/HandFan/design3.png",
  },
  { product: "hanger", name: "Hanger", design1: 8 }, //none
  { product: "hardcover", name: "Hard Cover", design1: 90 }, //none
  { product: "letterhead", name: "Letter Head", design1: 89 }, //none
  { product: "maskkeeper", name: "Mask Keeper", design1: 34 }, //none
  {
    product: "nonwovenbag",
    name: "Non Woven Bag",
    nonwovenbag1: 1,
    nonwovenbag2: 2,
    nonwovenbag3: 3,
    nonwovenbag4: 4,
    nonwovenbag1pic: "./Product/ProductImages/NonWovenBag/design1.png",
    nonwovenbag2pic: "./Product/ProductImages/NonWovenBag/design2.png",
    nonwovenbag3pic: "./Product/ProductImages/NonWovenBag/design3.png",
    nonwovenbag4pic: "./Product/ProductImages/NonWovenBag/design4.png",
  },
  {
    product: "paperbag",
    name: "Paper Bag",
    paperbag1: 1,
    paperbag2: 2,
    paperbag3: 3,
    paperbag4: 4,
    paperbag5: 5,
    paperbag1pic: "./Product/ProductImages/paperbag/design1.png",
    paperbag2pic: "./Product/ProductImages/paperbag/design2.png",
    paperbag3pic: "./Product/ProductImages/paperbag/design3.png",
    paperbag4pic: "./Product/ProductImages/paperbag/design4.png",
    paperbag5pic: "./Product/ProductImages/paperbag/design5.png",
  },
  {
    product: "sachet",
    name: "Sachet",
    sachet1: 1,
    sachet2: 2,
    sachet3: 3,
    sachet4: 4,
    sachet5: 5,
    sachet1pic: "./Product/ProductImages/SachetBoard/design1.png",
    sachet2pic: "./Product/ProductImages/SachetBoard/design2.png",
    sachet3pic: "./Product/ProductImages/SachetBoard/design3.png",
    sachet4pic: "./Product/ProductImages/SachetBoard/design4.png",
    sachet5pic: "./Product/ProductImages/SachetBoard/design5.png",
  },
  { product: "voucher", name: "Voucher", design1: 8 }, //none
  { product: "wobbler", name: "Wobbler", design1: 4 }, //none
  {
    product: "labelsticker",
    name: "Label Sticker",
    design1: 4,
    labelsticker1: 1,
    labelsticker2: 2,
    labelsticker3: 3,
    labelsticker4: 4,
    labelsticker1pic: "./Product/ProductImages/LabelSticker/design1.png",
    labelsticker2pic: "./Product/ProductImages/LabelSticker/design2.png",
    labelsticker3pic: "./Product/ProductImages/LabelSticker/design3.png",
    labelsticker4pic: "./Product/ProductImages/LabelSticker/design4.png",
  },
  { product: "carsticker", name: "Car Sticker" }, //none
  { product: "thankyoucard", name: "Thank You Card" }, //none
  {
    product: "tissuebox",
    name: "Tissue Box",
    tissuebox1: 1,
    tissuebox2: 2,
    tissuebox3: 3,
    tissuebox4: 4,
    tissuebox5: 5,
    tissuebox6: 6,
    tissuebox1pic: "./Product/ProductImages/TissueBox/design1.png",
    tissuebox2pic: "./Product/ProductImages/TissueBox/design2.png",
    tissuebox3pic: "./Product/ProductImages/TissueBox/design3.png",
    tissuebox4pic: "./Product/ProductImages/TissueBox/design4.png",
    tissuebox5pic: "./Product/ProductImages/TissueBox/design5.png",
    tissuebox6pic: "./Product/ProductImages/TissueBox/design6.png",
  },
  { product: "weddingcard", name: "Wedding Card" }, //none
  { product: "weddinggoodies", name: "Wedding Goodies" }, //none
  {
    product: "windowsticker",
    name: "Window Sticker",
    windowsticker1: 1,
    windowsticker2: 2,
    windowsticker3: 3,
    windowsticker4: 4,
    windowsticker1pic: "./Product/ProductImages/WindowSticker/design1.png",
    windowsticker2pic: "./Product/ProductImages/WindowSticker/design2.png",
    windowsticker3pic: "./Product/ProductImages/WindowSticker/design3.png",
    windowsticker4pic: "./Product/ProductImages/WindowSticker/design4.png",
  },
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
      //document.getElementById("copybutton").style.display = "block";
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
  test(el.value);
}

function test(k) {
  document.getElementById("input-order").value = k;
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

  //console.log(sessionStorage.getItem("checkBoxID"));

  here = document.getElementById("no-order");
  here.innerHTML =
    "<br><h1>Empty Cart.</h1><br><p>Looks like you haven't added anything to your cart yet.</p><br>";

  var noOrderImage = document.createElement("img");
  noOrderImage.setAttribute("src", "../Logo/trolley.png");
  here.appendChild(noOrderImage);
  noOrderImage.style.width = "100px";

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

      const bought = product.map((y) => y.split(" ").join(" "));

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

      var tdItems = document.createElement("div");

      var tdCart = document.createElement("div");
      tdCart.id = products[num].product + "cart";
      var tdPrice = document.createElement("div");
      tdPrice.id = products[num].product + "price";

      tdSecond.appendChild(tdCart);
      tdThird.appendChild(tdPrice);
      takeTrID.appendChild(tdFirst);
      takeTrID.appendChild(tdSecond);
      takeTrID.appendChild(tdThird);
      console.log(takeTrID);

      for (let item = 0; item < itemsBought.length; item++) {
        var illiterateItem = itemsBought[item];
        var testbor = bought[item];
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
          ) + 1;

        if (input.value > 1) {
          input.value = JSON.parse(
            sessionStorage.getItem(
              products[num].product + illiterateItem + "input"
            )
          );
        } else if (input.value == 1) {
          sessionStorage.setItem(
            products[num].product + illiterateItem + "input",
            input.value
          );
        }

        //create button substract
        var buttonMinus = document.createElement("button");
        buttonMinus.id = products[num].product + illiterateItem + "subtract";
        buttonMinus.innerHTML = "-";
        buttonMinus.onclick = function () {
          substract(this.id, this.parentNode.childNodes[1].id);
        };

        //create delete button
        var deleteButton = document.createElement("button");
        deleteButton.id = products[num].product + illiterateItem + "delete";
        deleteButton.name = testbor;
        console.log(illiterateItem);
        deleteButton.innerHTML = "Remove";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = function () {
          document.getElementById(itemsBought[item]).checked = false;
          save();
          deleteOrder(this.name, products[num].product);
          window.location.reload();
        };

        //create hidden checkbox
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "boxes";
        checkBox.id = illiterateItem;
        checkBox.style.display = "none";

        //create image
        var innerCart = document.createElement("div");
        innerCart.className = "inner-cart";
        var imageArr = products[num][illiterateItem + "pic"];
        var innerImage = document.createElement("img");
        innerImage.setAttribute("src", imageArr);
        innerImage.style.width = "80px";
        innerImage.style.height = "80px";
        var productName = document.createElement("h1");
        productName.appendChild(document.createTextNode(illiterateItem));
        //innerImage.id = products[num].product + illiterateItem + "pic";

        innerCart.appendChild(innerImage);
        innerCart.appendChild(productName);

        //appendchild to the element

        div.appendChild(buttonMinus);
        div.appendChild(input);
        div.appendChild(buttonAdd);
        div.appendChild(deleteButton);
        div.appendChild(checkBox);
        div.style.paddingTop = "81px";
        objTo.appendChild(div);
        tdFirst.appendChild(innerCart);
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
          products[num].product.toString() + "price"
        ).innerHTML =
          "<br><br><br>RM" + eachItem.join("<br><br><br><br><br>RM");
      } else if (product.length == 0) {
        document.getElementById(
          products[num].product.toString() + "details"
        ).style.display = "none";
      }

      priceEach = 0;
      eachItem = [];
      eachCart = [];

      if (price == 0) {
        document.getElementById("order-price").innerHTML = "RM 0";
      } else {
        document.getElementById("order-price").innerHTML = "RM" + price;
        //guna session utk tarik data from here, price value then guna this for form submit tu lol
        sessionStorage.setItem("total-order", JSON.stringify(price));
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

  document.getElementById("go-order").style.display = "none";

  /*
  fetch(url).then((res) => {
    element.innerHTML = res;
  });
  */
}

function substract(buttonID, inputID) {
  let input = document.querySelector("#" + inputID);
  //let btnsubs = document.querySelector("#" + buttonID);

  if (input.value == 1) {
    input.value = 1;
  } else {
    input.value = parseInt(input.value) - 1;
    sessionStorage.setItem(inputID.toString(), input.value);
  }

  document.getElementById("go-order").style.display = "none";
}

function deleteOrder(orderId, productName) {
  console.log(productName);
  var getLol = JSON.parse(sessionStorage.getItem(productName));
  console.log(orderId);
  console.log(getLol);
  let pos = getLol.indexOf(orderId);
  console.log(pos);
  let removedItem = getLol.splice(pos, 1);
  console.log(getLol);
  sessionStorage.setItem(productName, JSON.stringify(getLol.filter((x) => x)));
}
