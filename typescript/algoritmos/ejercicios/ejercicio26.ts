const reader = require("readline-sync");
import {isPrime} from '../services/ejercicio.services';
// Dado un valor entero positivo n que se ingresa por teclado, desarrollar un 
// programa que muestre por consola los primeros n numeros primos. 

let arrNumbers: number [] = [];
let input = parseInt(reader.question("input a number for calculate Prime..."));

for(let i = 1; i <= input; i++){
        arrNumbers.push(i);
};

let runArrNumbers = arrNumbers.filter(item => isPrime(item));
console.log(runArrNumbers);









