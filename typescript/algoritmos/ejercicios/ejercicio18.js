"use strict";
(function () {
    // Dado un conjunto de valores numericos que finaliza con el ingreso de un valor nulo, 
    // determinar e imprimir:
    // El valor maximo negativo,
    // El valor minimo positivo,
    // El valor minimo dentro del rango -17.3, y 26.9,
    // El promedio de todos los valores ingresados.
    var reader = require("readline-sync");
    // Imput
    var arrNumbers = new Array();
    var floatNumbers = parseFloat(reader.question("Put one of 6 float numbers at a time..."));
    // Data procesing
    arrNumbers.push(floatNumbers);
    console.log(arrNumbers);
    while (arrNumbers.length < 6) {
        floatNumbers = parseFloat(reader.question("Put one of 6 float numbers at a time..."));
        arrNumbers.push(floatNumbers);
        console.log(arrNumbers);
    }
    ;
    var positiveNumbers = arrNumbers.filter(function (item) { return item > 0; });
    var negativeNumbers = arrNumbers.filter(function (item) { return item < 0; });
    var filterRange = arrNumbers.filter(function (item) { return item >= -17.3 && item <= 26.9; });
    var sumar = arrNumbers.reduce(function (acumulador, item) { return acumulador + item; }, 0);
    // Output
    console.log(Math.min.apply(Math, positiveNumbers));
    console.log(Math.max.apply(Math, negativeNumbers));
    console.log(Math.min.apply(Math, filterRange));
    console.log(sumar / arrNumbers.length);
})();
