import {reader,sumar, multiplicar, diferencia} from '../services/ejercicio.services';
// let numero1 = reader.question("Ingrese el numero 1: ");
// entradas
let a  = parseInt(reader.question("coloque el primer valor: "));
let b  = parseInt(reader.question("coloque el segundo valor: "));
// procesamiento
// suma
const resultadoSuma = sumar(a,b);
// multiplicacion
const resultadoMultipliacion = multiplicar(a,b);
// diferencia / resta
// const resultadoDiferencia = diferencia(a,b);
// En vez de crear una constante para guardarla en la misma, solo llame a la funcion dentro
// del console.log en la linea 26
// salida
console.log("El resultado de la suma es...", resultadoSuma);
console.log("El resultado de la multiplicacion es...", resultadoMultipliacion);
console.log("El resultado de la diferencia es...", diferencia(a, b));




