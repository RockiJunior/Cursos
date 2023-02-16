/* ARRAYS FUNCTIONS */

// MENOR

function minimo(arr) {
    var aux = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < aux) {
            aux = arr[i];
        }
    }
    console.log('El minimo es: ', aux);
    return aux;
}

// MAYOR

function mayor(arr) {
    var aux = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > aux) aux = arr[i];
    }
    console.log('El mayor es: ', aux);
    return aux;
}

// TOTAL

function total(arr) {
    var aux = arr.reduce((tot, num) => {
        return tot + num;
    })
    console.log('El total es: ', aux);
    return aux;
}
// total bis es la misma que total, pero generando un acumulador afuera de un for, sin el metodo reduce
function totalBis(arr) {
    var aux = 0;
    for (var i = 0; i < arr.length; i++) {
        aux += arr[i];
    }
    console.log('El total es: ', aux);
    return aux;
}

function countArray(array) {
    let accumulator = 0;
    for (let i = 0; i < array.length; i++) {
        //Si es un arreglo
        if (Array.isArray(array[i])) { //si es true, acumula el valor y vuelve a ejecutar la funcion
            accumulator += countArray(array[i]) // pasando el valor de array[i] a count array
        } else {
            //No es un arreglo
            accumulator += array[i];
        }
    }
    return accumulator;
    //el lexical environment de cada ejecucion recursiva, tiene su propia variable de accumulator,
    //y por cada vez que volvemos a ejecutar la funcion, estas ejecuciones pasan a segundo plano,
    //como si fuesen a una lista de espera, para poder sumarse al final, y recibir el total del accumulator 
}

function countProps(obj) {
    let accumulator = 0;
    for (let property in obj) {
        accumulator++; //por cada iteracion suma 1 a la variable accumulator 
        if (typeof obj[property] === 'object' && !Array.isArray(obj[property])) { // pregunto si es de tipoi objeto, y pido que no sea array
            accumulator += countProps(obj[property]); //acumula y vuelve a ejecutar 
        }
    }
    return accumulator; //0retorna accumulator
}




// PROMEDIO

function promedio(arr) {
    var len = arr.length,
        aux = arr.reduce(function(tot, num) {
            return tot + num;
        })
    console.log('El promedio es: ', aux / len);
    return aux / len;
}

function promedioBis(arr) {
    var aux = 0;
    for (var i = 0; i < arr.length; i++) {
        aux += arr[i];
    }
    console.log('El promedio es: ', aux / i);
    return aux / i;
}

totalBis([1, 5, 8, 4])