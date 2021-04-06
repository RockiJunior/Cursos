"use strict";
(function () {
    // TEORIA DEL MARTIN...
    // Como intanciar un array de formas distintas.
    // instanciar array vacio de strings...
    // let arrayOfStrings:string[] = [];
    // instanciar un array de strings vacio...
    // let arrayOfStrings2: Array<string>;
    // Notese que estos arrays solo aceptan un solo tipo de dato como elemento(string).
    // arrayOfStrings = ["d", "x", 3]; // aqui hay un error en el 3, porque es un elemento del tipo number. 
    // 
    // arrayOfStrings2 = 3;// aqui pasa el mismo error que el array anterior.
    // Forma de instanciar una clase correctamente.
    // (dentro de la clase se instancia un metodo que retorna la edad de la persona.)
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, fechaNac) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaNac = fechaNac;
        }
        Persona.prototype.calcularEdad = function () {
            var fechaActual = new Date();
            var edadMilisegundos = fechaActual.getTime() - this.fechaNac.getTime();
            var convertMilSecToDate = new Date(edadMilisegundos);
            return Math.abs(convertMilSecToDate.getUTCFullYear() - 1970);
        };
        return Persona;
    }());
    ;
    var persona = new Persona("Martin", "Brunori", new Date("1994-10-01"));
    var persona2 = new Persona("Gabriel", "Brunori", new Date("1994-07-03"));
    console.log(persona.calcularEdad());
    console.log(persona2.calcularEdad());
    // Para calcular los milisegundos vividos desde la fecha de nacimiento hasta la fecha actual.
    // public calcularEdad(){
    //     let fechaActual = new Date();
    //     let edadMilisegundos = fechaActual.getTime() - this.fechaNac.getTime();
    //     return edadMilisegundos;
    // } 
})();
