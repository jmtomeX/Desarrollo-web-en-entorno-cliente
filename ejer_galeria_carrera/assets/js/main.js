"use strict";
function cargarImg() {
  var fotosArray = [
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
    "img_4.jpg",
    "img_5.jpg",
    "img_6.jpg",
    "img_7.jpg",
    "img_8.jpg",
    "img_9.jpg"
  ];
  var cont = 0;
  for (var i = 0; i < fotosArray.length / 3; i += 3) {
    document.write("<div class = 'row'>");
    for (var item in fotosArray) {
      document.write(
        "<div class='col s4'><img src='./img/" +
          fotosArray[item] +
          "' alt='' class = 'imgGalery' onclick = 'addBorder(this)'></div>"
      );
    }
    document.write("</div>");
  }
}
var arrayModif  = "";
function addBorder(obj) {
  //obj.style.border = "1px solid red";
  //obj.className = "borderRed";
  obj.classList.add("borderRed");

  /*
  var itemAdd = obj.src.split("/");
  var nameImg = itemAdd[itemAdd.length-1];
  console.log(nameImg);
  arrayModif.push(obj.src);
*/
}

function quitarSelecciones() {
var borderRed = document.getElementsByClassName("borderRed");
console.log(borderRed[0].src);
//console.log(borderRed[1].src + "\n");

var x = document.getElementsByTagName("img"); 
console.log("Clases " + x[0].className);

  for (var item in borderRed){
    console.log("Clases " + x[item].className);
    borderRed[item].classList.remove("borderRed");
    //console.log(borderRed[item].src + "\n");
  }
}
