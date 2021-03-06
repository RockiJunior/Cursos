"use strict";
(function () {
    // Dados un Mes y el año al que corresponde, informar cuantos dias tiene el mes.
    // (la gracia de este ejercicio es el año biciesto)
    var reader = require("readline-sync");
    // Imput
    var year = reader.question("Put the Year...");
    var month = reader.question("Put the Month...");
    // let fecha1: Date = new Date(year);
    year = parseInt(year);
    month = parseInt(month);
    var howMuchDays = function (year, month) { return new Date(year, month, 0).getDate(); };
    console.log(howMuchDays(year, month));
    // Data Processing 
    // Output
})();
