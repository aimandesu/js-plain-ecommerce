var count = document.getElementsByClassName("also-like-container");
console.log(document.getElementsByClassName("also-like-container")[0]);
console.log(count.length);

var imagesRand = [
  {
    productname: "Black Editon",
    link: "./archfile.html#black",
    img: "./ProductImages/ArchFile/black.png",
  },
  {
    productname: "Fruit Edition",
    link: "./archfile.html#fruit",
    img: "./ProductImages/ArchFile/fruit.png",
  },
  {
    productname: "Dusty Pink Edition",
    link: "./archfile.html#dusty",
    img: "./ProductImages/ArchFile/dusty pink.png",
  },
  {
    productname: "Cupcake Edition",
    link: "./archfile.html#cupcake",
    img: "./ProductImages/ArchFile/cupcake.jpg",
  },
  {
    productname: "Bussiness Card 1",
    link: "./bussinesscard.html#bussiness1",
    img: "./ProductImages/Bussiness card/bussiness.png",
  },
];

// var numbers = [1, 2, 3, 4];

function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

var random = shuffle(imagesRand);
console.log(random);

for (var loop = count.length - 1; loop >= 0; loop--) {
  //get element
  var content = document.getElementsByClassName("also-like-container")[loop];

  //create element
  var a = document.createElement("a");
  var theImg = document.createElement("img");
  var title = document.createElement("p");

  theImg.setAttribute("src", random[loop].img);
  a.setAttribute("href", random[loop].link);
  title.innerHTML = random[loop].productname;

  a.appendChild(theImg);
  content.appendChild(a);
  content.appendChild(title);
}
