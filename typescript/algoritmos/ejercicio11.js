"use strict";
(function () {
    // Dados 50 numeros enteros, informar el promedio de los mayores que 100, y la suma de los menores que -10.
    var reader = require("readline-sync");
    // Imput
    var acumulator = new Array(50);
    for (var i = 0; i < acumulator.length; i++) {
        acumulator[i] = i * 4;
        // console.log(acumulator[i]);
    }
    ;
    // Data Processing
    var lessThanTen = acumulator.filter(function (item) { return item < 10; })
        .reduce(function (a, b) { return a + b; }, 0);
    var greaterThanOneHundred = acumulator.filter(function (item) { return item > 100; })
        .reduce(function (a, b) { return a + b; }, 0);
    var divGreater = acumulator.filter(function (item) { return item > 100; })
        .length;
    // Output
    console.log("The sum of the values less than 10 are..." + lessThanTen);
    console.log("The Average of the numbers greater than 100 are..." + greaterThanOneHundred / divGreater);
})();
