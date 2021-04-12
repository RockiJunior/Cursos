import { reader } from '../services/ejercicio.services';
// Dados dos valores numericos enteros, calcular e informar el producto, mediante sumas sucesivas:
// Imput
let putFirstValue = reader.question("Put the First value..."); //3
let putSecondValue = reader.question("Put the Second value..."); //5
// 15
// Data Processing
putFirstValue = parseInt(putFirstValue);
putSecondValue = parseInt(putSecondValue);
let acumulador = 0;
// el for, sirve para ejecutar un codigo una cierta cantidad de veces

for (let i = 0; i < putFirstValue; i++) {
  acumulador = acumulador + putSecondValue; 
};
// let j = 0;
// while(j < putFirstValue) {
//     acumulador = acumulador + putSecondValue;
//     j++; //# j= j+1;
// }
// Output
console.log("resultado final...", acumulador)