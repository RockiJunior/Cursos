(() => {
// dado dos valores numericos, informar cual es el mayor y cual es el menor, 
// o si ambos valores son iguales.
const reader = require("readline-sync"); 


// Imput

let a = reader.question("Put the First Value... ")
let b = reader.question("Put the Second Value... ")

a = parseInt(a);
b = parseInt(b);

// Data Processing

const calculateValue = (a:number, b:number) => {
    if (a > b) {console.log("The First Value is grater than the Second")}
    else if (b > a) {console.log("The Second Value is grater than the First")}
    else {console.log("Both values are equals")};
};

// Output
calculateValue( a, b );





} )();