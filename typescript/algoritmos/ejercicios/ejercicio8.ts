import { reader, howMuchDays } from '../services/ejercicio.services';
// Dados un Mes y el año al que corresponde, informar cuantos dias tiene el mes.
// (la gracia de este ejercicio es el año biciesto)
// Imput
let year=  parseInt(reader.question("Put the Year..."));
let month= parseInt(reader.question("Put the Month..."));
// let fecha1: Date = new Date(year);
console.log(howMuchDays(year, month));