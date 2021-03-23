(() => {
    // Dado un Triangulo representado por sus lado1, lado2, lado3, determinar e indicar
    // segun corresponda: "Equilatero" "Isosceles" "Escaleno"
    const reader = require("readline-sync");
    
    // Imput1
    let firstSide = reader.question("Put the First Side of the Triangle... ")
    let secondSide = reader.question("Put the Seconde Side of the Triangle... ")
    let thirdSide = reader.question("Put the Third Side of the Triangle... ")
    
    
    // Data Processing1
    
    firstSide  = parseInt(firstSide);
    secondSide = parseInt(secondSide);
    thirdSide  = parseInt(thirdSide);
    
    // Se podria hacer el calculo con las formulas matematicas....(pero es she contra complicao guach)
    
    // const calculateIsoscelesHeight = (a: number, b: number) => Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2)/ 4);
    
    // const calculateIsocelesArea = (a:number, h:number) => (a * h)/2;
    
    // const calculateEquilateralHeight = (a:number) => (Math.pow(a, 2) * Math.sqrt(3)) / 4;
    
    // const calculateEquilateralArea = (a: number, h:number) => (a * h)/2;
    
    // const calculateScaleneArea = (a:number, b:number, c:number) => {};
    
    // const calculateScaleneHeight = (a:number, h:number) => { (a * h)/2};
    
    
    // Output1
    
    
    if (firstSide === secondSide && firstSide === thirdSide) {console.log("The Triangle is Equilateral")};
    // que pasa si el tercer valor tambien podria ser un lado igual al primero( que el resultado tambien sea isosceles)..?
    // la respuesta es el || (or)
    if (firstSide === secondSide || secondSide === thirdSide || firstSide === thirdSide) {
       if(firstSide !== secondSide || firstSide !== thirdSide || secondSide !== thirdSide) {
           console.log("The Triangle is Isosceles")
        }
    }

    if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide) {console.log("The Triangle is Scalene")};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();