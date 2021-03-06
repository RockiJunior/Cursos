"use strict";
(function () {
    // Dados dos valores numericos enteros, calcular e informar el producto, mediante sumas sucesivas:
    var reader = require("readline-sync");
    // Imput
    var putFirstValue = reader.question("Put the First value..."); //3
    var putSecondValue = reader.question("Put the Second value..."); //5
    // 15
    // // Data Processing
    putFirstValue = parseInt(putFirstValue);
    putSecondValue = parseInt(putSecondValue);
    var acumulador = 0;
    // el for, sirve para ejecutar un codigo una cierta cantidad de veces
    for (var i = 0; i < putFirstValue; i++) {
        acumulador = acumulador + putSecondValue;
    }
    var j = 0;
    while (j < putFirstValue) {
        acumulador = acumulador + putSecondValue;
        j++; //# j= j+1;
    }
    console.log("resultado final...", acumulador);
    // Output
})();
