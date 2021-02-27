"use strict";
(() => {
    const avenger = {
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
    const extraer = (avenger) => {
        console.log(avenger.nombre);
        console.log(avenger.nombreClave);
        console.log(avenger.poder);
    };
    // extraer(avenger);
    const avengers = ['Thor', 'Ironman', 'Spiderman'];
    const [thor, ironman, spiderman] = avengers;
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
})();
