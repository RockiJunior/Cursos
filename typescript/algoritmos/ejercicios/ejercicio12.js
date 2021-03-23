"use strict";
(function () {
    // En un torneo de futbol participan k equipos. El torneo se juega con el sistema de "todos contra todos".
    // Por cada partido en el que participa un equipo, se dispone de la siguiente formacion:
    // codigo de equipo (codEq)
    // codigo de resultado ("P" = perdido, "E" = empatado, "G" = ganado)
    // Se dispone de un lote de datos conteniendo todos los resultados del torneo, agrupados por codEq.
    // Desarrollar el programa que imprima, por cada equipo, su codigo y el puntaje total que obtuvo, 
    // considerando que suma 3 puntos por cada partido ganado, y 1 punto por cada partido empatado.
    // k = 8 equipos
    var reader = require("readline-sync");
    // Data Processing
    var resE1 = ["G", "E", "G", "E", "P", "G", "G"];
    var acumE1 = 0;
    // for (let res of resE1) {
    //     if (res === "G") {acumE1 = acumE1+3}
    //     if (res === "E") {acumE1 = acumE1+1}
    // }
    // console.log(acumE1);
    // for (let res of resE1) {
    //     switch (res) {
    //         case "G": {
    //             acumE1 = acumE1+3;
    //             break;
    //         }
    //         case "E": {   
    //             acumE1 = acumE1+1;
    //             break;
    //         }
    //     }
    // }
    // console.log(acumE1);
    var puntosPorResultado = {
        G: 3,
        E: 1,
        P: 0
    };
    for (var _i = 0, resE1_1 = resE1; _i < resE1_1.length; _i++) {
        var res = resE1_1[_i];
        acumE1 = acumE1 + puntosPorResultado[res];
    }
    console.log(acumE1);
    // Output
})();
