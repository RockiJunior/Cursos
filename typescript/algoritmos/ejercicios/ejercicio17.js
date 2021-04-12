"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dado un conjunto de nombres y fechas de nacimiento con formato ddmmaaaa, 
// que finaliza cuando se ingrese un nombre igual a "fin", informar el nombre de la
// persona con mayor de edad y el de la mas jóven.
var arrUsers = new Array();
var inputName = ejercicio_services_1.reader.question("Put the Full Name...");
arrUsers.push(inputName);
var inputAge = parseInt(ejercicio_services_1.reader.question("Put the Age..."));
arrUsers.push(inputAge);
console.log(arrUsers);
while (inputName !== "fin") {
    inputName = ejercicio_services_1.reader.question("Put the Full Name...");
    arrUsers.push(inputName);
    inputAge = parseInt(ejercicio_services_1.reader.question("Put the Age..."));
    arrUsers.push(inputAge);
    console.log(arrUsers);
    if (inputName === "fin") {
        console.log("FINNNNN");
    }
    else
        (console.log("FINNNN"));
}
;
