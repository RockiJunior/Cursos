"use strict";
(function () {
    // Dado un numero entero positivo entre 1 y 3999, informar su correspondiente numero romano. 
    var reader = require("readline-sync");
    var inputInteger = parseInt(reader.question("Put the roman number for the transformation...."));
    var int2roman = function (original) {
        if (original < 1 || original > 3999) {
            throw new Error('Error: Input integer limited to 1 through 3,999');
        }
        var numerals = [
            ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            ['M', 'MM', 'MMM'], // 1000-3000
        ]; // array of array, is a matrix.
        // TODO: Could expand to support fractions, simply rounding for now
        var digits = Math.round(original).toString().split(''); // split is array whit element for each letter.(in this case)
        //    ['1','5'] 
        var position = (digits.length - 1); // returns number for ever and ever EMI ONE
        var martinMaestro = function (roman, digit) {
            // second iteration roman = 'X', digit = '5'; position = 0;
            if (digit !== '0') {
                var digitPosition = parseInt(digit) - 1;
                roman = roman + numerals[position][digitPosition]; // '' + 'X'; 'X' + 'V';
            }
            position = position - 1;
            return roman; // 'X'; 'XV'
        };
        return digits.reduce(martinMaestro, ''); // the value of the first interaction is '' (of roman) 
        // and digit is '1'
    };
    console.log(int2roman(inputInteger));
})();
