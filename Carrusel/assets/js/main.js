'use strict'
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
    console.log(ultimo)
}

function showImage() {
    carrusel.style.visibility = 'visible';
}

function hiddenImage() {
    carrusel.style.visibility = 'hidden';
}

function moveOpacity() {
    var rango = document.getElementById("rango").value;
    var value_opacity = rango;
    carrusel.style.opacity = rango;
    console.log(rango);
}