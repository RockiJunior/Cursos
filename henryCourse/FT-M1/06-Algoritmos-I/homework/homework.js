// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let array = [1];
    let n = 2;
    while (num >= n) {
        if (num % n !== 0) {
            n++;
        } else {
            num = num / n;
            array.push(n);
        }
    }
    return array;

}

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:


    //pasos a seguir
    // 1- recorrer el array
    // 2- comparar pos 0 con 1
    // 3- guardar el valor de pos 0, en pos 1
    // 4- guardar el valor de pos 1, en pos 0
    // 5- retornar el array
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    //el insertion saca un elemento y compara con los anteriores.

    for (i = 1; i < array.length; i++) {
        let j = i - 1; //posicion del for menos uno
        let aux = array[i]; //valor de la posicion

        //mayor igual asi jota toma el primer valor del arreglo (pero jota solo es la posicion)
        while (j >= 0 && array[j] > aux) { // mientras j sea mayor que pos 0 y el valor de esa posicion sea mayor que la de adelante...
            array[j + 1] = array[j]; // valor de j, se guarda en la posicion de j + 1, que es el equivalente a la posicion de i, osea, se intercambia
            j--; // es el que va a comparar con la posicion atras de j. para volver a j-1)?
        }
        array[j + 1] = aux; //en caso de no entrar al while, todo sigue igual. "j", es equivalente a "i"
    }
    return array;

    //ejemplo
    //     i
    //[ 1, 3, 2, 7, 4]
    //  j  
}

function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    //Pasos a seguir
    //1- recorrer el array para filtrar cual es el menor
    //2- colocar el valor mas chico de todo el array en la primer posicion del array...math.min()
    //como guardar el numero mas chico, y guardarlo en la posicion donde quiero? 
    //primero...iterar comparando
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            // Swapping the elements
            let aux = array[i];
            array[i] = array[min];
            array[min] = aux;
        }
    }
    return array;
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};