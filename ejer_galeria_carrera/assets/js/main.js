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
  for (var i = 0; i < fotosArray.length; i++) {
    if (i % 3 == 0) {
      document.write("<div class = 'row'>");
    }
    document.write(
      "<div class='col s12  xl4 popshadow'><img src='./img/" +
        fotosArray[i] +
        "' alt='' class = 'imgGallery' onclick = 'addBorder(this)'></div>"
    );
    if (i % 3 == 2) {
      document.write("</div>");
    }
  }
}
var arrayModif = "";
var imgSeleccionadas = [];

function addBorder(obj) {
  obj.classList.add("borderRed");

  var url = obj.src.split("/");
  var nameImg = url[url.length - 1];
  imgSeleccionadas.push(nameImg);
  console.log(nameImg);

  //obj.className = "borderRed";
  //obj.style.border = "1px solid red";
  //obj.class = "borderRed";
}

function quitarSelecciones() {
  var borderRed = document.getElementsByClassName("borderRed");

  console.log("Elementos array " + borderRed.length);

  var todos = document.getElementsByTagName("img");

  for (var i = 0; i < todos.length; i++) {
    console.log("Contador " + i);

    todos[i].className = "imgGallery";
    //? borderRed[i].classList.remove("borderRed");


    // Eliminar elemento del array  imgSeleccionadas
    imgSeleccionadas.shift();
  }
}

function hacerPedido() {
  var cadena = "";
  for (var i = 0; i < imgSeleccionadas.length; i++) {
    cadena += imgSeleccionadas[i] + "<br>";
  }

  document.getElementById("imgModal").innerHTML = cadena;
  console.log("casdena" + cadena);
  quitarSelecciones();
}

// Modal
document.addEventListener("DOMContentLoaded", function() {
  hacerPedido();
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
  var instance = M.Modal.getInstance(elem);
  instance.open();
});
