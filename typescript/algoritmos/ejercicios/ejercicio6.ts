import { reader } from '../services/ejercicio.services';
// Imput
let firstDate= reader.question("Put the Year, Month & Day of First Date...")
let secondDate= reader.question("Put the Year, Month & Day of Second Date...")
let fecha1: Date = new Date(firstDate);
let fecha2: Date = new Date(secondDate);
if (fecha1 > fecha2) {
    console.log("date1 is most recently than date2")
};
if (fecha2 > fecha1) {
    console.log("date2 is most recently than date1")
};