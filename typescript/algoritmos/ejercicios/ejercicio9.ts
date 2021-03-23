(()=> {
    // Se ingresa una edad; mostrar por pantalla alguna de las siguientes leyendas:
    // "menor" si la edad es menor o igual a 12.
    // "cadete" si la edad esta comprendida entre 13 y 18.
    // "juevenil" si la edad es mayor que 18 y no supera los 26.
    // "mayor" si no cumple ninguna de las condiciones anteriores.
    const reader = require("readline-sync");
    
    // Imput
    
    
    let putAge = reader.question("Put the Year to calculate Age... ")
    putAge = parseInt(putAge)
    
    
    
    // Data Processing
    
    
    let calculateAge = (a:number) => {
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


    // Output
    
    
      calculateAge(putAge);
    
})();