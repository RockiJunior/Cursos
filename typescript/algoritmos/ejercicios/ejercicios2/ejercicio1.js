"use strict";
var reader = require("readline-sync");
// Input
var a = parseInt(reader.question("Put the first Value..."));
var b = parseInt(reader.question("Put the second Value..."));
// Processing
var suma = a + b;
var resta = a - b;
var product = a / b;
// Output
console.log("the value of the sum is...", suma);
console.log("the value of the sum is...", resta);
console.log("the value of the sum is...", product);
