(()=>{
    
    // Dados un Mes y el año al que corresponde, informar cuantos dias tiene el mes.
    // (la gracia de este ejercicio es el año biciesto)
    
    const reader = require("readline-sync");
    
    
    // Imput
    let year= reader.question("Put the Year...")
    let month= reader.question("Put the Month...")
    
    
    // let fecha1: Date = new Date(year);
    
    year = parseInt(year);
    month = parseInt(month);
    

    const howMuchDays = (year:number, month:number) => new Date(year, month, 0).getDate();


    console.log(howMuchDays(year, month));

    
    
    
    
    
    // Data Processing 
    
    
    
    
    
    
    
    
    
    // Output
    
    
    


})()

