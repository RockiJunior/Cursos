(()=>{
    // Desarrollar un programa tal que, dado un valor entero positivo que se ingresa por teclado, 
    // indique si se trata de un numero primo o no.
    // Nota: los numeros primos son aquellos valores enteros positivos que solo son divisibles por si mismos 
    // y por la unidad.
    const reader = require("readline-sync");

    let calculatePrimeNumber = parseInt(reader.question("Put a number to calculate if this is a Prime Number...")); 
    
    
    
    const isPrime = (num:number) => {
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                console.log("Isn't a Prime Number.")
            };
            return num > 1;
        }
    };
    
    console.log(isPrime(calculatePrimeNumber));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();