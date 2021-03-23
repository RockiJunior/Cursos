"use strict";
// import { parse } from "path";
(function () {
    var reader = require("readline-sync"); //npm install readline-sync
    // let numero1 = reader.question("Ingrese el numero 1: ");
    // entradas
    var a = reader.question("coloque el primer valor: ");
    var b = reader.question("coloque el segundo valor: ");
    // procesamiento
    // convertir a int
    a = parseInt(a);
    b = parseInt(b);
    // suma
    var sumar = function (sumando1, sumando2) { return sumando1 + sumando2; };
    var resultadoSuma = sumar(a, b);
    // multiplicacion
    var multiplicar = function (multiplicar1, multiplicar2) { return multiplicar1 * multiplicar2; };
    var resultadoMultipliacion = multiplicar(a, b);
    // diferencia / resta
    var diferencia = function (diferencia1, diferencia2) { return diferencia1 - diferencia2; };
    // const resultadoDiferencia = diferencia(a,b);
    // En vez de crear una constante para guardarla en la misma, solo llame a la funcion dentro
    // del console.log en la linea 36
    // salida
    console.log("El resultado de la suma es...", resultadoSuma);
    console.log("El resultado de la multiplicacion es...", resultadoMultipliacion);
    console.log("El resultado de la diferencia es...", diferencia(a, b));
})();
