"use strict";
(function () {
    // Se dispone de un conjunto de valores enteros positivos que finaliza con el ingreso
    // de un número negativo.
    // El conjunto está dividido en subconjuntos mediante valores 0(cero).
    // Se pide desarrollar un programa que determine e informe...
    // Por cada subconjunto, el promedio de valores que lo componen.
    // El total de subconjuntos procesados.
    // El valor máximo del conjunto, indicando en qué subconjunto se encontró el valor y su
    // posicion relativa dentro del mismo.
    // El valor mínimo de cada subconjunto.
    // Nota: el lote puede estar vacío(el primer valor ingresado será negativo), o bien
    // puede contener uno, varios o todos los sublotes vacíos(ceros consecutivos).
    var reader = require("readline-sync");
    var arreglo = new Array();
    var arrNumbers = [];
    var inputNumber = 1;
    // while(inputNumber >= 0){
    //     arrNumbers = [];
    //     inputNumber = 1;
    //     while(inputNumber !== 0){
    //         inputNumber = parseInt(reader.question("Put the values of the array one at a time..."));
    //         if(inputNumber == 0){
    //             arreglo.push(arrNumbers);
    //             console.log(arreglo);
    //         }
    //         else{
    //             arrNumbers.push(inputNumber);
    //         }
    //     }
    // }
    var createArrayNumbers = function () {
        var inputNumber;
        var arrNumbers = [];
        do {
            inputNumber = parseInt(reader.question("Put the values of the array one at a time..."));
            if (inputNumber == 0) {
                return arrNumbers;
            }
            else if (inputNumber == -1) {
                return inputNumber;
            }
            else {
                arrNumbers.push(inputNumber);
            }
        } while (inputNumber !== 0);
    };
    var arrayFather = new Array();
    while (true) {
        var xd = createArrayNumbers();
        if (xd === -1)
            break;
        arrayFather.push(xd);
    }
    ;
    console.log(arrayFather);
    // let arrNumbers:number[] = new Array();
    // let ziro:number = 0;
    // let inputValues = parseInt(reader.question("Put the Values one at a time up to the negative value..."));
    // arrNumbers.push(inputValues);
    // arrNumbers.push(ziro);
    // console.log(arrNumbers);
    // while(inputValues >= 1 ){
    //     inputValues = parseInt(reader.question("Put the Values one at a time up to the negative value..."));
    //     arrNumbers.push(inputValues);
    //     arrNumbers.push(ziro);
    //     console.log(arrNumbers);
    //     if(inputValues <= -1){
    //         arrNumbers.push(inputValues);
    //     }
    // };
    // let filtrar = arrNumbers.filter(item => item > 0);
    // console.log(filtrar);
    // let suma = arrNumbers.reduce((a, b) => a + b, 0);
    // console.log(`The average of all values is...`, filtrar.length / suma); 
})();
