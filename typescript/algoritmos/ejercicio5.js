"use strict";
(function () {
    // dado dos valores numericos, informar cual es el mayor y cual es el menor, 
    // o si ambos valores son iguales.
    var reader = require("readline-sync");
    // Imput
    var a = reader.question("Put the First Value... ");
    var b = reader.question("Put the Second Value... ");
    a = parseInt(a);
    b = parseInt(b);
    // Data Processing
    var calculateValue = function (a, b) {
        if (a > b) {
            console.log("The First Value is grater than the Second");
        }
        else if (b > a) {
            console.log("The Second Value is grater than the First");
        }
        else {
            console.log("Both values are equals");
        }
        ;
    };
    // Output
    calculateValue(a, b);
})();
