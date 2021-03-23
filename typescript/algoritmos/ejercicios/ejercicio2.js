"use strict";
(function () {
    // Dada una terna de numeros naturales que representan 
    // el dia, el mes y el año de una determinada fecha,
    // informarla como un solo numero natural de 8 digitos (aaaammdd).
    var reader = require("readline-sync"); //npm install readline-sync
    // Entradas
    var year = reader.question("Tape a number for the Year...");
    var month = reader.question("Tape a number for the Month...");
    var day = reader.question("Tape a number for the Day...");
    // let valAño = /^[0-9]{4}$/;
    // Procesamientos
    // const validYear = ( vyear:number ) => {
    //     if(vyear < 1000  || vyear > 9999) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };
    // const validYear = ( vyear:number ) => {
    //     return !(vyear < 1000  || vyear > 9999);
    // };
    // const validYear = ( vyear:number ) => {
    //     return vyear >= 1000  || vyear <= 9999;
    // };
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    var validYear = function (vyear) { return vyear >= 1000 && vyear <= 9999; }; //true??????????
    var validMonth = function (vmonth) { return vmonth >= 1 && vmonth <= 12; };
    var validDay = function (vDay) { return vDay >= 1 && vDay <= 31; };
    // Salidas
    // if (validDay(day) === false)  {
    //     console.log("Invalid Day")
    // }
    if (!validDay(day)) {
        console.log("Invalid Day");
    }
    if (!validMonth(month)) {
        console.log("Invalid month");
    }
    if (!validYear(year)) {
        console.log("Invalid year");
    }
    if (validDay(day) === true && validMonth(month) === true && validYear(year) === true) {
        console.log("The date is " + year + month + day);
    }
})();
