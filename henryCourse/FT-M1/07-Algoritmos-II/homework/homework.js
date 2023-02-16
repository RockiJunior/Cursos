// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    //caso de corte...
    if (array.length <= 1) { // si fuese == 1, no retorna directamente el array, y nosotros necesitamos
        return array; // iterar incluso si fuese 1, ya que debemos concatenarlos. Si no fuese el caso
    } // va a cortar la iteracion una vez, antes de lo esperado.

    let pivot = array[0]; // el primer valor(aunque podria ser un math.random, pero es un enriedo innecesario)
    let right = []; //
    let left = []; //
    let middle = []; // se guarda el pivot.

    for (let i = 0; i < array.length; i++) { // el for recorre TODOOOOO el array!!!!!!!!!

        if (pivot > array[i]) { //si el pivot es mayor que el valor iterable... 
            left.push(array[i]) //el valor de la iteracion se va a la izquierda (para ordenarlo)
        } else if (pivot < array[i]) { // si el pivot es menor que el valor iterable...
            right.push(array[i]) //el valor de la iteracion se va a la derecha
        } else {
            middle.push(array[i]) //cuando el valor de la iteracion es igual al valor del pivot
        } // este se guarda en el array del medio, (el cual por logica, solo tiene un valor) 
    }
    return [...quickSort(left), ...middle, ...quickSort(right)]
        //ejecuta la funcion nuevamente para recorrer el array left!!!!!
        //y hace lo mismo con el array right!!!!!
        // y en el medio, le concatena el MIDDLE!!!!
        //NUNCA jamas se me hubiese la forma de ejecucion de la recursion, con los arrays left, y right.
        //esto ayuda a que yo pueda entender, que la funcion una vez creada (el for)
        //puede volverse a aplicar con otros elementos a iterar. en este caso, a los arrays left, y right.
}

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (array.length < 2) {
        return array
    }

    function unir(left, right) {
        let arrAux = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arrAux.push(left.shift())
            } else {
                arrAux.push(right.shift())
            }
        }
        return [...arrAux, ...left, ...right]
    }

    const mitad = Math.floor(array.length / 2);
    console.log(mitad);
    const left = array.splice(0, mitad)
    return unir(mergeSort(left), mergeSort(array));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};