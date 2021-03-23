(()=> {
    // dado dos valores numericos diferentes entre si, informar cual es el mayor.
    const reader = require("readline-sync"); //npm install readline-sync
    
    
    // Imput
    let a = reader.question("Put the First Value... ")
    let b = reader.question("Put the Second Value... ")
    
    a = parseInt(a);
    b = parseInt(b);
    
    // Data Processing
    
    const calcularMayor = (a:number, b:number) => {
        if(a > b) {return (console.log("The First Value is grater than the Second Value"))}
        else if (b > a) {console.log("The Second Value is grater than the First Value")}
        else{ return (console.log("Invalid Values"))}
    };
    

    // Output


    calcularMayor(a, b)
    
    
    
    
    
})();