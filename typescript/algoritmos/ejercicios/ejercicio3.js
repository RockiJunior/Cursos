"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dado un valor numerico entero que se ingresa por teclado, se pide informar:
// la quinta parte del dicho valor,
// el resto de la division por 5, y
// la septima parte de la quinta parte. 
// Entrada
var a = parseInt(ejercicio_services_1.reader.question("put the value for operation..."));
// Procesamiento
// const div5 = (n1:number) => n1 / 5; es lo mismo que la de abajo, pero sin asignarle una variable o constante.
// Salida
console.log(ejercicio_services_1.div5(a));
console.log(ejercicio_services_1.restDiv5(ejercicio_services_1.div5(a)));
console.log(ejercicio_services_1.div7(ejercicio_services_1.div5(a)));
