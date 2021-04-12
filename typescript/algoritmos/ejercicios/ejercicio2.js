"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dada una terna de numeros naturales que representan 
// el dia, el mes y el año de una determinada fecha,
// informarla como un solo numero natural de 8 digitos (aaaammdd).
// Entradas
var year = ejercicio_services_1.reader.question("Tape a number for the Year...");
var month = ejercicio_services_1.reader.question("Tape a number for the Month...");
var day = ejercicio_services_1.reader.question("Tape a number for the Day...");
// let valAño = /^[0-9]{4}$/;
// Procesamientos
// const validYear = ( vyear:number ) => {
//     if(vyear < 1000  || vyear > 9999) {
//         return false;
//     } else {
//         return true;
//     }
// };
// const validYear = ( vyear:number ) => {
//     return !(vyear < 1000  || vyear > 9999);
// };
// const validYear = ( vyear:number ) => {
//     return vyear >= 1000  || vyear <= 9999;
// };
year = parseInt(year);
month = parseInt(month);
day = parseInt(day);
// Salidas
// if (validDay(day) === false)  {
//     console.log("Invalid Day")
// }
if (!ejercicio_services_1.validDay(day)) {
    console.log("Invalid Day");
}
;
if (!ejercicio_services_1.validMonth(month)) {
    console.log("Invalid month");
}
;
if (!ejercicio_services_1.validYear(year)) {
    console.log("Invalid year");
}
;
if (ejercicio_services_1.validDay(day) === true && ejercicio_services_1.validMonth(month) === true && ejercicio_services_1.validYear(year) === true) {
    console.log("The date is " + year + month + day);
}
;
