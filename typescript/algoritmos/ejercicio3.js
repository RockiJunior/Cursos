"use strict";
(function () {
    // Dado un valor numerico entero que se ingresa por teclado, se pide informar:
    // la quinta parte del dicho valor,
    // el resto de la division por 5, y
    // la septima parte de la quinta parte. 
    var reader = require("readline-sync"); //npm install readline-sync
    // Entrada
    var a = reader.question("put the value for operation...");
    // Procesamiento
    a = parseInt(a);
    // const div5 = (n1:number) => n1 / 5; es lo mismo que la de abajo, pero sin asignarle una variable o constante.
    var div5 = function (n1) {
        return n1 / 5;
    };
    var restDiv5 = function (n2) {
        return n2 * 5;
    };
    var div7 = function (n3) {
        return n3 / 7;
    };
    // Salida
    console.log(div5(a));
    console.log(restDiv5(div5(a)));
    console.log(div7(div5(a)));
})();
