function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        console.log(min);
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
            console.log(array)
        }
        if (min !== i) {
            // Swapping the elements
            let aux = array[i];
            array[i] = array[min];
            array[min] = aux;
            console.log(array)
        }
    }
    return array;
};

console.log(selectionSort([5, 1, 4, 2, 8]));