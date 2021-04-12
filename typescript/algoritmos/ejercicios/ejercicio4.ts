import { reader, calcularMayor } from '../services/ejercicio.services';
// dado dos valores numericos diferentes entre si, informar cual es el mayor.
// Imput
let a = parseInt(reader.question("Put the First Value... "));
let b = parseInt(reader.question("Put the Second Value... "));
calcularMayor(a, b);