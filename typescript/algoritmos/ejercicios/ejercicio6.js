"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejercicio_services_1 = require("../services/ejercicio.services");
// Imput
var firstDate = ejercicio_services_1.reader.question("Put the Year, Month & Day of First Date...");
var secondDate = ejercicio_services_1.reader.question("Put the Year, Month & Day of Second Date...");
var fecha1 = new Date(firstDate);
var fecha2 = new Date(secondDate);
if (fecha1 > fecha2) {
    console.log("date1 is most recently than date2");
}
;
if (fecha2 > fecha1) {
    console.log("date2 is most recently than date1");
}
;
