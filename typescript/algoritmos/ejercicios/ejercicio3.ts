import {reader, div5, div7, restDiv5} from '../services/ejercicio.services';
// Dado un valor numerico entero que se ingresa por teclado, se pide informar:
// la quinta parte del dicho valor,
// el resto de la division por 5, y
// la septima parte de la quinta parte. 

// Entrada
let a = parseInt(reader.question("put the value for operation..."));
// Procesamiento
// const div5 = (n1:number) => n1 / 5; es lo mismo que la de abajo, pero sin asignarle una variable o constante.
// Salida
console.log(div5(a));
console.log(restDiv5(div5(a)));
console.log(div7(div5(a)));