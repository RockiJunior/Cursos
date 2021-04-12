"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Se ingresa una edad; mostrar por pantalla alguna de las siguientes leyendas:
// "menor" si la edad es menor o igual a 12.
// "cadete" si la edad esta comprendida entre 13 y 18.
// "juevenil" si la edad es mayor que 18 y no supera los 26.
// "mayor" si no cumple ninguna de las condiciones anteriores.
// Imput
var putAge = parseInt(ejercicio_services_1.reader.question("Put the Year to calculate Age... "));
ejercicio_services_1.calculateAge(putAge);
