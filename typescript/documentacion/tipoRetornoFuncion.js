"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Fernando';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Fernando'),
                reject('Gabriel');
        });
    };
    obtenerSalario().then(arg => console.log(arg.toUpperCase)
        .catch(err => console.warn(err)));
})();
