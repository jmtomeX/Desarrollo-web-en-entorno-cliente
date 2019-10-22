'use strict'

function cargarImg() {
    console.log("CArgado");
    var fotosArray = ["1", "4", "3", "4", "5", "6", "7", "8", "9"];
    var cont = 0;
    document.write("<div class = 'row'>");
    for (var i = 0; i < fotosArray.length / 3; i += 3) {
        console.log("Cargado for 1");
        for (var item in fotosArray) {
            console.log("Cargado for 2");
            document.write("<div class='col s4'><img src='./img/" + fotosArray[item] + ".jpg' alt=''></div>");
            console.log("item");
        }
    }
    document.write("</div>");
}

function quitarSelecciones() {

}