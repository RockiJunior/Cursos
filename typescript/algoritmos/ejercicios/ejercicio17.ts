import { reader } from '../services/ejercicio.services';
// Dado un conjunto de nombres y fechas de nacimiento con formato ddmmaaaa, 
// que finaliza cuando se ingrese un nombre igual a "fin", informar el nombre de la
// persona con mayor de edad y el de la mas jóven.
let arrUsers:any[] = new Array(); 
let inputName = reader.question("Put the Full Name...");
arrUsers.push(inputName);
let inputAge = parseInt(reader.question("Put the Age..."));
arrUsers.push(inputAge);
console.log(arrUsers);

while( inputName !== "fin"){
    inputName = reader.question("Put the Full Name...");
    arrUsers.push(inputName);
    inputAge = parseInt(reader.question("Put the Age..."));
    arrUsers.push(inputAge);
    console.log(arrUsers);
    if(inputName === "fin"){
        console.log("FINNNNN")
    }
    else(console.log("FINNNN"))
};