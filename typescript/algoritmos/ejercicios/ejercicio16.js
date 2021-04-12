"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dados N valores numericos, informar el mayor, el menor, y en que posicion del conjunto
// fueron ingresados cada uno de ellos
// Imput
var values = new Array();
var input = parseInt(ejercicio_services_1.reader.question("Put one of 10 values at a time..."));
values.push(input);
console.log(values);
// Data Processing
while (values.length < 10) {
    input = parseInt(ejercicio_services_1.reader.question("Enter one of 10 values at a time... "));
    values.push(input);
    console.log(values);
}
var largestNumber = Math.max.apply(Math, values);
var smallestNumber = Math.min.apply(Math, values);
console.log("The greatest value is..." + largestNumber + " ");
console.log("The smallest value is..." + smallestNumber);
console.log("The greatest value position is..." + values.indexOf(largestNumber));
console.log("The smallest value position is..." + values.indexOf(smallestNumber));
