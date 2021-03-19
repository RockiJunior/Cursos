import JasmineExpect from "jasmine-expect"; 

(()=> {
    // Dado un conjunto de valores numericos que finaliza con el ingreso de un valor nulo, 
    // determinar e imprimir:
    // El valor maximo negativo,
    // El valor minimo positivo,
    // El valor minimo dentro del rango -17.3, y 26.9,
    // El promedio de todos los valores ingresados.
    
    
    const reader = require("readline-sync");
    
    // Imput
    let arrNumbers:number[] = new Array();
    let floatNumbers = parseFloat(reader.question("Put one of 6 float numbers at a time..."));
    // Data procesing
    arrNumbers.push(floatNumbers);
    console.log(arrNumbers);
    
    
    
    
    while(arrNumbers.length < 6){
        floatNumbers = parseFloat(reader.question("Put one of 6 float numbers at a time..."));
        arrNumbers.push(floatNumbers);
        console.log(arrNumbers);
    };
    
    
    let positiveNumbers = arrNumbers.filter(item => item > 0);
    let negativeNumbers = arrNumbers.filter(item => item < 0);
    
    let filterRange = arrNumbers.filter(item => item >= -17.3 && item <= 26.9)
    
    const sumar = arrNumbers.reduce((acumulador, item) => acumulador + item, 0);
    
    // Output
    console.log(Math.min.apply(Math, positiveNumbers));
    console.log(Math.max.apply(Math, negativeNumbers));
    
    console.log(Math.min.apply(Math, filterRange));
    
    console.log(sumar / arrNumbers.length);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();