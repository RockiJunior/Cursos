"use strict";
(() => {
    const reader = require("readline-sync"); //npm install readline-sync
    // Entradas
    let year = reader.question("Tape a number for the Year...");
    let month = reader.question("Tape a number for the Month...");
    let day = reader.question("Tape a number for the Day...");
    // let valAño = /^[0-9]{4}$/;
    // Procesamientos
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
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
    const validYear = (vyear) => vyear >= 1000 || vyear <= 9999;
    const validMonth = (vmonth) => {
        if (vmonth < 1 || vmonth > 12) {
            return false;
        }
        else {
            return true;
        }
    };
    const validDay = (vDay) => {
        if (vDay < 1 || vDay > 31) {
            return false;
        }
        else {
            return true;
        }
    };
    // const validDate = (validDay:number ) => {
    // };
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
        console.log(`The date is ${year}${month}${day}`);
    }
})();
