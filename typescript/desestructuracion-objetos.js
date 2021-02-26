"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        nombreClave: 'Capitan America',
        poder: 'Fuerza'
    };
    // console.log( avenger.nombre)
    // console.log( avenger.nombreClave)
    // console.log( avenger.poder)
    // para no tener que poner multiples lineas....
    // const { nombre, nombreClave, poder} = avenger;
    // en este tipo de desestructuracion, no importa el orden.
    var extraer = function (avenger) {
        console.log(avenger.nombre);
        console.log(avenger.nombreClave);
        console.log(avenger.poder);
    };
    // extraer(avenger);
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    var thor = avengers[0], ironman = avengers[1], spiderman = avengers[2];
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
})();
