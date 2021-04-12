"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dados 10 valores numericos, informar cual es el mayor.
var calculateNumber = new Array();
var input = parseInt(ejercicio_services_1.reader.question("Enter one of 10 values at a time... "));
calculateNumber.push(input);
console.log(calculateNumber);
// el largo del array tiene que ser de 10
while (calculateNumber.length < 10) {
    input = parseInt(ejercicio_services_1.reader.question("Enter one of 10 values at a time... "));
    calculateNumber.push(input);
    console.log(calculateNumber);
}
console.log(Math.max.apply(Math, calculateNumber));
