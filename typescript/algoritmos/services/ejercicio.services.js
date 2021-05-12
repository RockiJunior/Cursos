"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = exports.calculateAge = exports.howMuchDays = exports.calculateValue = exports.calcularMayor = exports.div7 = exports.restDiv5 = exports.div5 = exports.validDay = exports.validMonth = exports.validYear = exports.diferencia = exports.multiplicar = exports.sumar = exports.reader = void 0;
exports.reader = require("readline-sync");
// Ejercicio 1.
var sumar = function (sumando1, sumando2) { return sumando1 + sumando2; };
exports.sumar = sumar;
var multiplicar = function (multiplicar1, multiplicar2) { return multiplicar1 * multiplicar2; };
exports.multiplicar = multiplicar;
var diferencia = function (diferencia1, diferencia2) { return diferencia1 - diferencia2; };
exports.diferencia = diferencia;
// Ejercicio 2.
var validYear = function (vyear) { return vyear >= 1000 && vyear <= 9999; }; //true??????????
exports.validYear = validYear;
var validMonth = function (vmonth) { return vmonth >= 1 && vmonth <= 12; };
exports.validMonth = validMonth;
var validDay = function (vDay) { return vDay >= 1 && vDay <= 31; };
exports.validDay = validDay;
// Ejercicio 3.
var div5 = function (n1) {
    return n1 / 5;
};
exports.div5 = div5;
var restDiv5 = function (n2) {
    return n2 * 5;
};
exports.restDiv5 = restDiv5;
var div7 = function (n3) {
    return n3 / 7;
};
exports.div7 = div7;
// Ejercicio 4.
var calcularMayor = function (a, b) {
    if (a > b) {
        return (console.log("The First Value is grater than the Second Value"));
    }
    else if (b > a) {
        console.log("The Second Value is grater than the First Value");
    }
    else {
        return (console.log("Invalid Values"));
    }
};
exports.calcularMayor = calcularMayor;
// Ejercicio 5.
var calculateValue = function (a, b) {
    if (a > b) {
        console.log("The First Value is grater than the Second");
    }
    else if (b > a) {
        console.log("The Second Value is grater than the First");
    }
    else {
        console.log("Both values are equals");
    }
    ;
};
exports.calculateValue = calculateValue;
// Ejercicio 8
var howMuchDays = function (year, month) { return new Date(year, month, 0).getDate(); };
exports.howMuchDays = howMuchDays;
// Ejercicio 9
var calculateAge = function (a) {
    if (a <= 12) {
        console.log("Younger");
    }
    else if (a >= 13 && a <= 17) {
        console.log("Cadet");
    }
    else if (a >= 18 && a <= 26) {
        console.log("Youth");
    }
    else {
        console.log("Major");
    }
};
exports.calculateAge = calculateAge;
// Ejercicio 10.
// Ejercicio 26.
var isPrime = function (num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
};
exports.isPrime = isPrime;
