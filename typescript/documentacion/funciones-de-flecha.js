"use strict";
(function () {
    // Funcion asignada a una variable (aunque tambien se puede hacer con una constante)....
    // let miFunction = function(a:string){
    // return a
    // }
    // Funcion tradicional
    // function funcion2 (a:string){
    //     return a
    // }
    // const miFuncionF = ( a:string ) => {
    //     return a;
    // }
    // esta misma, es lo mismo que...
    const miFuncionF = (a) => a.toUpperCase();
    // entonces, una funcion de flecha, se escribe asi..
    // const X = (x:string) => {};
    // 
    // 
    // 
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    // console.log(miFuncionF('Normal'))
    // console.log(miFuncionF('Flecha'))
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} Smash!!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
