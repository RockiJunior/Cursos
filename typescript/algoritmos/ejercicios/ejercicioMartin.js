"use strict";
var Numero = /** @class */ (function () {
    function Numero(x) {
        this.x = x;
    }
    Numero.prototype.suma = function (y) {
        return new Numero(this.x + y);
    };
    return Numero;
}());
var primerNumero = new Numero(5);
var primerNumeroSumado = primerNumero.suma(9);
console.log(primerNumeroSumado);
