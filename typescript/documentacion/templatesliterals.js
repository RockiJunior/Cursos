"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    const nombre = 'Gabriel';
    const apellido = 'Villarroel';
    const edad = 26;
    // Gabriel Villarroel (Edad: 26)
    // de la manera mas larga....
    // const salida = nombre +" " + apellido + " (" + edad + ")";
    // de la manera mas corta...
    // const salida = `${ nombre } ${ apellido } (${edad}) `
    // const salida = `${ nombre } \n ${ apellido } \n (${edad}) ` # se usa para saltar a la otra linea.
    // se puede traer una funcion...
    const salida = ` ${nombre} ${apellido} (${getEdad()})`;
    console.log(salida);
})();
