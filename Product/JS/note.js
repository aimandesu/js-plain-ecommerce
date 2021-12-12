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
  var storage = sessionStorage.getItem("container"), //Your key
    container = storage ? JSON.parse(storage) : {};

  Object.keys(container).forEach(function (key) {
    var element = document.getElementById(key);

    if (element) {
      element.checked = container[key];
    }
  });
}

function save() {
  var getBoxes = document.getElementsByClassName("boxes");
  for (i = 0; i < getBoxes.length; i++) {
    var x = document.getElementsByClassName("boxes")[i].id;
    countBoxes[i] = x;
  }
  var passKeyID = countBoxes;
  var elements = getCheckboxItems(passKeyID);
  serializeCheckboxes(elements);
}
