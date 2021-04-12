"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// let numero1 = reader.question("Ingrese el numero 1: ");
// entradas
var a = parseInt(ejercicio_services_1.reader.question("coloque el primer valor: "));
var b = parseInt(ejercicio_services_1.reader.question("coloque el segundo valor: "));
// procesamiento
// suma
var resultadoSuma = ejercicio_services_1.sumar(a, b);
// multiplicacion
var resultadoMultipliacion = ejercicio_services_1.multiplicar(a, b);
// diferencia / resta
// const resultadoDiferencia = diferencia(a,b);
// En vez de crear una constante para guardarla en la misma, solo llame a la funcion dentro
// del console.log en la linea 26
// salida
console.log("El resultado de la suma es...", resultadoSuma);
console.log("El resultado de la multiplicacion es...", resultadoMultipliacion);
console.log("El resultado de la diferencia es...", ejercicio_services_1.diferencia(a, b));
