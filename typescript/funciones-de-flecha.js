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
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    // console.log(miFuncionF('Normal'))
    // console.log(miFuncionF('Flecha'))
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " Smash!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
