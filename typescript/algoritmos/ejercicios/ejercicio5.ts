import { calculateValue } from '../services/ejercicio.services';
// dado dos valores numericos, informar cual es el mayor y cual es el menor, 
// o si ambos valores son iguales.
const reader = require("readline-sync"); 
// Imput
let a = parseInt(reader.question("Put the First Value... "));
let b = parseInt(reader.question("Put the Second Value... "));
// Output
calculateValue( a, b );