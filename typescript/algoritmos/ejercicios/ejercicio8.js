"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Dados un Mes y el año al que corresponde, informar cuantos dias tiene el mes.
// (la gracia de este ejercicio es el año biciesto)
// Imput
var year = parseInt(ejercicio_services_1.reader.question("Put the Year..."));
var month = parseInt(ejercicio_services_1.reader.question("Put the Month..."));
// let fecha1: Date = new Date(year);
console.log(ejercicio_services_1.howMuchDays(year, month));
