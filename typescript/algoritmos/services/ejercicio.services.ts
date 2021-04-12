
export const reader = require("readline-sync");

// Ejercicio 1.
export const sumar = (sumando1:number, sumando2:number) => sumando1 + sumando2;
export const multiplicar = (multiplicar1:number, multiplicar2:number) => multiplicar1 * multiplicar2; 
export const diferencia = (diferencia1:number, diferencia2:number) => diferencia1 - diferencia2;

// Ejercicio 2.
export const validYear = ( vyear:number ) => vyear >= 1000 && vyear <= 9999; //true??????????
export const validMonth = ( vmonth:number ) => vmonth >= 1  && vmonth <= 12; 
export const validDay = ( vDay:number ) => vDay >= 1  && vDay <= 31;

// Ejercicio 3.
export let div5 = function(n1:number) {
    return n1 / 5 
};
export let restDiv5 = function(n2:number) {
    return n2 * 5
};
export let div7 = function(n3:number) {
    return n3 / 7
};
// Ejercicio 4.
export const calcularMayor = (a:number, b:number) => {
    if(a > b) {return (console.log("The First Value is grater than the Second Value"))}
    else if (b > a) {console.log("The Second Value is grater than the First Value")}
    else{ return (console.log("Invalid Values"))}
};
// Ejercicio 5.
export const calculateValue = (a:number, b:number) => {
    if (a > b) {console.log("The First Value is grater than the Second")}
    else if (b > a) {console.log("The Second Value is grater than the First")}
    else {console.log("Both values are equals")};
};

// Ejercicio 8
export const howMuchDays = (year:number, month:number) => new Date(year, month, 0).getDate();

// Ejercicio 9
export const calculateAge = (a:number) => {
    let putAge = parseInt(reader.question("Put the Year to calculate Age... "));
    if ( a <= 12 ) {
        console.log("Younger")
    }
    else if( a >= 13 && putAge <= 17 ) {
        console.log("Cadet")
    }
    else if( a >= 18 && putAge <= 26){
        console.log("Youth")
    }
    else {
        console.log("Major")
    }
};

// Ejercicio 10.








































// Ejercicio 26.

export const isPrime = (num:number) => {
    for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
};






