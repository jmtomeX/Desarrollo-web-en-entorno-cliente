"use strict";
var carrusel = document.getElementById("carrusel");
var num_text = document.getElementById("num");
var ultimo = 0;
var array_carrusel = [
  "monos.jpg",
  "mapache.jpg",
  "perezoso.jpg",
  "vaca.jpg",
  "zorros.jpg"
];
var longitud_array = array_carrusel.length;

function pasar_img(valor, es_imagen = false) {
  var text_valor;
  if (es_imagen) {
    carrusel.src = "./img/" + array_carrusel[valor];
    text_valor = valor + 1;
    num_text.innerHTML = text_valor;
    ultimo = valor;
  } else {
    if (valor == "+") {
      ultimo++;
      if (ultimo >= longitud_array) {
        ultimo = longitud_array - 1;
        return;
      } else {
        carrusel.src = "./img/" + array_carrusel[ultimo];
        num_text.innerHTML = parseInt(ultimo) + 1;
      }
    }
    if (valor == "-") {
      ultimo--;
      if (ultimo < 0) {
        ultimo = 0;
        return;
      } else {
        carrusel.src = "./img/" + array_carrusel[ultimo];
        num_text.innerHTML = parseInt(ultimo) + 1;
      }
    }
  }
  console.log(ultimo);
}

function showImage() {
  carrusel.style.visibility = "visible";
}

function hiddenImage() {
  carrusel.style.visibility = "hidden";
}

function moveOpacity() {
  var rango = document.getElementById("rango").value;
  var value_opacity = rango;
  carrusel.style.opacity = rango;
  console.log(rango);
}
/*Un pequeño formulario con dos botones de opción para indicar si te gusta más la música o el deporte,
y luego una barra indicadora para cada opción que vaya creciendo cada vez que le den al botón Votar. */

var valor = 10;
var sumaValor1 = 0;
var sumaValor2 = 0;
var totalVal = 0;
var cont1 = 0;
var cont2 = 0;

function selectOption(barra) {
  var barraDeporte = document.getElementById("barraDep");
  var barraMusica = document.getElementById("barraMusc");
  var caja1 = document.getElementById("caja1");
  var caja2 = document.getElementById("caja2");
  if (barra == 1) {
    sumaValor1 = parseInt(sumaValor1 + valor);
    console.log(sumaValor1);
    cont1 = sumaValor1 / 10;
  } else {
    sumaValor2 = parseInt(sumaValor2) + valor;
    console.log(sumaValor1);
    cont2 = sumaValor2 / 10;
  }
  totalVal = sumaValor1 + sumaValor2;
  var porcVal1 = (sumaValor1 / totalVal) * 500;
  var porcVal2 = (sumaValor2 / totalVal) * 500;
  barraDeporte.style.width = porcVal1 + "px";
  barraMusica.style.width = porcVal2 + "px";
  caja1.innerHTML = cont1;
  caja2.innerHTML = cont2;
}
