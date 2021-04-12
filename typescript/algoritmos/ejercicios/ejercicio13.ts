import { reader } from '../services/ejercicio.services';
// Se ingresa un conjunto de valores reales, cada uno de los cuales representan el sueldo de un empleado, 
// excepto por el ultimo valor que sera 0 para indicar el fin del ingreso de datos.
// Se pide desarrollar un programa que determine e informe:
// Cuantos empleados ganan menos que 2000.
// Cuantos ganan 2000 o mas, pero menos de 3000.
// Cuantos ganan 3000 o mas, pero menos de 5000. 
// Cuantos ganan 5000 o mas. 

// Imput

// el metodo unshift sirve para lo mismo que el push, pero retorna siempre el primer valor, y luego los
// valores que se ingresaron al final del array.

let input = parseInt(reader.question("Put the number..."));
let salary:number[] = new Array(); 
salary.push(input);
while ( input > 0 ){
    input = parseInt(reader.question("put the Number..."))
    if (input !== 0){
        salary.push(input);
    }
    console.log(salary);
}; 
console.log(salary);

// for (let i = 0; i < salary.length; i++) {
//     console.log(salary[i]);
// };

// bueno, creame una variable que empieze en 0. mientras esta variable sea menor que el largo de salary.
// imprimi el valor que esta en la posicion i (que i, varia, y va sumando uno por vez que entra al ciclo)
// LENGTH es cantidad, o largo.

// FORMA DE HACERLO SEGUN MARTIN SIN EL FILTER.
// let contadorMenorDosMil = 0;

// for (let item of salary){
//     if(item < 2000){
//       contadorMenorDosMil++;
//     }
// }

let menorDosMil = salary.filter(item => item < 2000)
let mayorDosMil2 = salary.filter(item => item >= 2000 && item < 3000);
let mayorDosMil3 = salary.filter(item => item >= 3000 && item < 5000);

// let mayorDosMil2 = salary.filter(item => !(item > 3000 || item > 2000)  ) ; 

console.log("menor que 2000...", menorDosMil.length);
console.log("mayor que 2000 pero menor que 3000...", mayorDosMil2.length)
console.log("mayor que 3000 pero menor que 5000...", mayorDosMil3.length)

// DE FORMA PRACTICA...
// const recorrerArray = (array:number[]) => {
//     for (let item of array){
//         console.log(item);
//     }
// }

// recorrerArray(salary);
// recorrerArray(otroArray);