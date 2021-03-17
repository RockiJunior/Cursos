"use strict";
(function () {
    // Dados N valores numericos, informar el mayor, el menor, y en que posicion del conjunto
    // fueron ingresados cada uno de ellos
    var reader = require("readline-sync");
    // Imput
    var values = new Array();
    var input = parseInt(reader.question("Put one of 10 values at a time..."));
    values.push(input);
    console.log(values);
    // Data Processing
    while (values.length < 10) {
        input = parseInt(reader.question("Enter one of 10 values at a time... "));
        values.push(input);
        console.log(values);
    }
    var largestNumber = Math.max.apply(Math, values);
    var smallestNumber = Math.min.apply(Math, values);
    console.log("The greatest value is..." + largestNumber + " ");
    console.log("The smallest value is..." + smallestNumber);
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var item = values_1[_i];
        if (item === largestNumber) {
            console.log("The greatest value position is..." + values.indexOf(largestNumber));
        }
        if (item === smallestNumber) {
            console.log("The smallest value position is..." + values.indexOf(smallestNumber));
        }
    }
})();
