// import { parse } from "path";

(() => {
    
    const reader = require("readline-sync"); //npm install readline-sync
    // let numero1 = reader.question("Ingrese el numero 1: ");
        
    // entradas
    let a  = reader.question("coloque el primer valor: ")
    let b  = reader.question("coloque el segundo valor: ")
    

    // procesamiento
    
    // convertir a int
    a = parseInt(a); 
    b = parseInt(b); 


    // suma
    const sumar = (sumando1:number, sumando2:number) => sumando1 + sumando2;
    const resultadoSuma = sumar(a,b);

    // multiplicacion
    const multiplicar = (multiplicar1:number, multiplicar2:number) => multiplicar1 * multiplicar2; 
    const resultadoMultipliacion = multiplicar(a,b);
    
    // diferencia / resta
    const diferencia = (diferencia1:number, diferencia2:number) => diferencia1 - diferencia2;
    const resultadoDiferencia = diferencia(a,b);
    



    // salida
    console.log("El resultado de la suma es...", resultadoSuma);
    console.log("El resultado de la multiplicacion es...", resultadoMultipliacion);
    console.log("El resultado de la diferencia es...", resultadoDiferencia);

})();
