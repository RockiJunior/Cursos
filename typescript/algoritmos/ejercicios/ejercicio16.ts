import { reader } from '../services/ejercicio.services';
// Dados N valores numericos, informar el mayor, el menor, y en que posicion del conjunto
// fueron ingresados cada uno de ellos
// Imput
let values:number[] = new Array();
let input = parseInt(reader.question("Put one of 10 values at a time..."));
values.push(input);
console.log(values)
// Data Processing
while(values.length < 10){
    input = parseInt(reader.question("Enter one of 10 values at a time... "));
    values.push(input);
    console.log(values);
}
const largestNumber = Math.max.apply(Math, values);
const smallestNumber = Math.min.apply(Math, values);
console.log(`The greatest value is...${largestNumber} `);
console.log(`The smallest value is...${smallestNumber}`);
console.log(`The greatest value position is...${values.indexOf(largestNumber)}`)
console.log(`The smallest value position is...${values.indexOf(smallestNumber)}`)