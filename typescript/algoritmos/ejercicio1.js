"use strict";
// import { parse } from "path";
(() => {
    const reader = require("readline-sync"); //npm install readline-sync
    // let numero1 = reader.question("Ingrese el numero 1: ");
    // entradas
    let a = reader.question("coloque el primer valor: ");
    let b = reader.question("coloque el segundo valor: ");
    // procesamiento
    // convertir a int
    a = parseInt(a);
    b = parseInt(b);
    // suma
    const sumar = (sumando1, sumando2) => sumando1 + sumando2;
    const resultadoSuma = sumar(a, b);
    // multiplicacion
    const multiplicar = (multiplicar1, multiplicar2) => multiplicar1 * multiplicar2;
    const resultadoMultipliacion = multiplicar(a, b);
    // diferencia / resta
    const diferencia = (diferencia1, diferencia2) => diferencia1 - diferencia2;
    // const resultadoDiferencia = diferencia(a,b);
    // En vez de crear una constante para guardarla en la misma, solo llame a la funcion dentro
    // del console.log en la linea 36
    // salida
    console.log("El resultado de la suma es...", resultadoSuma);
    console.log("El resultado de la multiplicacion es...", resultadoMultipliacion);
    console.log("El resultado de la diferencia es...", diferencia(a, b));
})();