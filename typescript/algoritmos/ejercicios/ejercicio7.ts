import { reader } from '../services/ejercicio.services';
// Dado un Triangulo representado por sus lado1, lado2, lado3, determinar e indicar
// segun corresponda: "Equilatero" "Isosceles" "Escaleno"
// Imput1
let firstSide =  parseInt(reader.question("Put the First Side of the Triangle... "));
let secondSide = parseInt(reader.question("Put the Seconde Side of the Triangle... "));
let thirdSide =  parseInt(reader.question("Put the Third Side of the Triangle... "));
if (firstSide === secondSide && firstSide === thirdSide) {console.log("The Triangle is Equilateral")};
// que pasa si el tercer valor tambien podria ser un lado igual al primero( que el resultado tambien sea isosceles)..?
// la respuesta es el || (or)
if (firstSide === secondSide || secondSide === thirdSide || firstSide === thirdSide) {
    if(firstSide !== secondSide || firstSide !== thirdSide || secondSide !== thirdSide) {
        console.log("The Triangle is Isosceles")
    }
}

if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide) {console.log("The Triangle is Scalene")};

























