(() => {
    // Dada una terna de numeros naturales que representan 
    // el dia, el mes y el año de una determinada fecha,
    // informarla como un solo numero natural de 8 digitos (aaaammdd).
    
    
    const reader = require("readline-sync"); //npm install readline-sync
    
    // Entradas
    let year = reader.question("Tape a number for the Year...");
    let month = reader.question("Tape a number for the Month...");
    let day = reader.question("Tape a number for the Day...");
    
    
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
    
    
    
    const validYear = ( vyear:number ) => vyear >= 1000 && vyear <= 9999; //true??????????
    
    const validMonth = ( vmonth:number ) => vmonth >= 1  && vmonth <= 12; 
    
    const validDay = ( vDay:number ) => vDay >= 1  && vDay <= 31;
    
    
    
    // Salidas
    
    
    // if (validDay(day) === false)  {
    //     console.log("Invalid Day")
    // }
    
    
    if (!validDay(day)) {
        console.log("Invalid Day")
    }
    
    if (!validMonth(month)) {
        console.log("Invalid month")
    }
    
    if (!validYear(year)) {
        console.log("Invalid year")
    }
    
    if (validDay(day) === true && validMonth(month) === true && validYear(year) === true ) {
        console.log(`The date is ${year}${month}${day}`)
    }
    
    
    
    
})();