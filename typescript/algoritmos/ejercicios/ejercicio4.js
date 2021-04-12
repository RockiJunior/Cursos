"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// dado dos valores numericos diferentes entre si, informar cual es el mayor.
// Imput
var a = parseInt(ejercicio_services_1.reader.question("Put the First Value... "));
var b = parseInt(ejercicio_services_1.reader.question("Put the Second Value... "));
ejercicio_services_1.calcularMayor(a, b);
