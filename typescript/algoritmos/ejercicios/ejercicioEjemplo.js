const lista = [345, 987, 234, 1, 98, 4, 1234];

for (let i1 = 0; i1 < lista.length; i1++) {
    for (let i2 = 0; i2 < lista.length; i2++) {
        const esMayor = lista[i2] > lista[i2 + 1];
        if (esMayor) {
            var aux = lista[i2 + 1];
            lista[i2 + 1] = lista[i2];
            lista[i2] = aux;
        }
    }
}

console.log(lista);