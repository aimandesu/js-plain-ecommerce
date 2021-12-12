//array for all id

var pass = [];

function orderitem(items, index) {
  var toText = String(items);
  var items = document.forms[index];
  var txt = [];

  for (i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      txt[i] = items[i].value;
    }
    sessionStorage.setItem(toText, JSON.stringify(txt));
  }
}

function getCheckboxItems() {
  return ["fruitedition", "cupcakedesign", "dustypink", "blackedition"].map(
    function (selector) {
      return {
        selector: selector,
        element: document.getElementById(selector),
      };
    }
  );
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
  var elements = getCheckboxItems();
  serializeCheckboxes(elements);
}
