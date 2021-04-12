"use strict";
// Dado un valor numérico entero m, determinar e imprimir un listado con los m 
// primeros múltiplos de 3 que no sean multiplos de 5.
for (var i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
        console.log(i);
    }
}
