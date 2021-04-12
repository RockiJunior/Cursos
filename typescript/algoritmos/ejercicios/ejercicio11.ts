// Dados 50 numeros enteros, informar el promedio de los mayores que 100, y la suma de los menores que -10.
// Imput
let acumulator:number[] = new Array(50);
for (let i = 0; i < acumulator.length; i++) {
    acumulator[i] = i * 4;
    // console.log(acumulator[i]);
};
// Data Processing
const lessThanTen = acumulator.filter(item => item < 10 )
.reduce((a, b) => a + b, 0);
const greaterThanOneHundred = acumulator.filter( item => item > 100)
.reduce((a, b) => a + b, 0);
const divGreater = acumulator.filter(item => item > 100)
.length
// Output
console.log(`The sum of the values less than 10 are...${lessThanTen}`);
console.log(`The Average of the numbers greater than 100 are...${greaterThanOneHundred / divGreater}`);