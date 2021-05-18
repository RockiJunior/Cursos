"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reader = require("readline-sync");
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dado un valor entero positivo n que se ingresa por teclado, desarrollar un 
// programa que muestre por consola los primeros n numeros primos. 
var arrNumbers = [];
var input = parseInt(reader.question("input a number for calculate Prime..."));
for (var i = 1; i <= input; i++) {
    arrNumbers.push(i);
};
var runArrNumbers = arrNumbers.filter(function(item) { return ejercicio_services_1.isPrime(item); });
console.log(runArrNumbers);



// let retornar() => {
//     if (false) {
//         return 1;
//     }
//     if (true) {
//         return 2
//     }
//     return 3
// };

// let retornar2() => {
//     let result = 3;
//     if (false) {
//         result = 1;
//     }
//     elseif (true) {
//         result = 2;
//     }
//     return result
// };