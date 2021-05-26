const reader = require("readline-sync");
// Input
let a = parseInt(reader.question("Put the first Value..."));
let b = parseInt(reader.question("Put the second Value..."));
// Processing
let suma = a + b;
let resta = a - b;
let product = a / b;
// Output
console.log("the value of the sum is...", suma);
console.log("the value of the sum is...", resta);
console.log("the value of the sum is...", product);