(()=>{
    // Se dispone de un conjunto de valores enteros positivos que finaliza con el ingreso
    // de un número negativo.
    // El conjunto está dividido en subconjuntos mediante valores 0(cero).
    // Se pide desarrollar un programa que determine e informe...
    
    // Por cada subconjunto, el promedio de valores que lo componen.
    // El total de subconjuntos procesados.
    // El valor máximo del conjunto, indicando en qué subconjunto se encontró el valor y su
    // posicion relativa dentro del mismo.
    // El valor mínimo de cada subconjunto.
    
    // Nota: el lote puede estar vacío(el primer valor ingresado será negativo), o bien
    // puede contener uno, varios o todos los sublotes vacíos(ceros consecutivos).
    
    const reader = require("readline-sync");
    
    
    // let arreglo:any[] = new Array();
    // let arrNumbers:number[] = [];
    // let inputNumber =  1;
    
    // UNA FORMA DE HACERLO...
    // (IGUAL NO ANDUVO...)
    // let arreglo:any[] = new Array();
    // let arrNumbers:number[] = [];
    // let inputNumber =  1;
    // while(inputNumber >= 0){
    //     arrNumbers = [];
    //     inputNumber = 1;
    //     while(inputNumber !== 0){
    //         inputNumber = parseInt(reader.question("Put the values of the array one at a time..."));
    //         if(inputNumber == 0){
    //             arreglo.push(arrNumbers);
    //             console.log(arreglo);
    //         }
    //         else{
    //             arrNumbers.push(inputNumber);
    //         }
    //     }
    // }
    
    
    const createArrayNumbers = () => {
        let inputNumber :number;
        let arrNumbers = [];
        
        do{
            inputNumber = parseInt(reader.question("Put the values of the array one at a time..."));
            if(inputNumber == 0){
                return arrNumbers;
            }
            else if(inputNumber == -1){
                return inputNumber;
            }
            else{
                arrNumbers.push(inputNumber);
            }
            console.log(arrNumbers);
        }
        while(inputNumber !== 0);
    };
    
    let arrayFather = new Array();
    
    while(true){
        let xd = createArrayNumbers();
        if (xd === -1) break;
        arrayFather.push(xd);
        console.log(arrayFather)
    };
    
    console.log(arrayFather);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();