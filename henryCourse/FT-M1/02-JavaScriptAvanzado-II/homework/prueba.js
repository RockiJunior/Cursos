// EJEMPLOS GENERALES 

// var creaFuncion = function() {
//     var arreglo = [];
//     for (var i = 0; i < 3; i++) {
//         arreglo.push(function() {
//             console.log(i)
//         })

//     }
//     return arreglo;

// }
// var arr = creaFuncion();
// arr[0]() // 3 sale un 3, qué esperaban ustedes??
// arr[1]() // 3
// arr[2]() // 3




// var arreglo = [1, 1, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
// var set1 = new Set(arreglo); // =>  {1, 3, 4, 5, 6, 7, 8, 9}

// console.log(arreglo);
// console.log(set1);



// //Clousure
// function xasd() {
//     let x = 1;
//     return function(y) {
//         console.log(y + x)
//     }
// }

// let u = xasd();
// u()
// obj.funcioncasd()
//     //Una idea clousure pasada a la idea de un objeto
// let obj = {
//     x: 1,
//     funcioncasd: function(y) {
//         console.log(y + this.x)
//     }
// };

// function xD() {
//     // function pepe(atr) {
//     //     console.log('asjdasd', atr);
//     // }
//     //    ----->
//     class pepe {
//         //let this = {};
//         constructor(atr) {
//                 console.log('asjdasd', atr);
//             }
//             // return this
//     }
//     // el new instancia el this por detras
//     // y retorna el this al final de la clase.
//     console.log(new pepe('raul'));
// }



function nFactorial(n) {

    if (n === 0) {
        return 1
    }
    return n * nFactorial(n - 1); // i-- 
}
nFactorial(10);