"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
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
    // public calcularEdad(){
    //     let fechaActual = new Date();
    //     let edadMilisegundos = fechaActual.getTime() - this.fechaNac.getTime();
    //     return edadMilisegundos;
    // } 
})();
