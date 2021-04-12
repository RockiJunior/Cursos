"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dados dos valores numericos enteros, calcular e informar el producto, mediante sumas sucesivas:
// Imput
var putFirstValue = ejercicio_services_1.reader.question("Put the First value..."); //3
var putSecondValue = ejercicio_services_1.reader.question("Put the Second value..."); //5
// 15
// Data Processing
putFirstValue = parseInt(putFirstValue);
putSecondValue = parseInt(putSecondValue);
var acumulador = 0;
// el for, sirve para ejecutar un codigo una cierta cantidad de veces
for (var i = 0; i < putFirstValue; i++) {
    acumulador = acumulador + putSecondValue;
}
;
// let j = 0;
// while(j < putFirstValue) {
//     acumulador = acumulador + putSecondValue;
//     j++; //# j= j+1;
// }
// Output
console.log("resultado final...", acumulador);
