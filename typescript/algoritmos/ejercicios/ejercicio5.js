"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// dado dos valores numericos, informar cual es el mayor y cual es el menor, 
// o si ambos valores son iguales.
var reader = require("readline-sync");
// Imput
var a = parseInt(reader.question("Put the First Value... "));
var b = parseInt(reader.question("Put the Second Value... "));
// Output
ejercicio_services_1.calculateValue(a, b);
