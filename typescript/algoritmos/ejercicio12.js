"use strict";
(function () {
    // En un torneo de futbol participan k equipos. El torneo se juega con el sistema de "todos contra todos".
    // Por cada partido en el que participa un equipo, se dispone de la siguiente formacion:
    // codigo de equipo (codEq)
    // codigo de resultado ("P" = perdido, "E" = empatado, "G" = ganado)
    // Se dispone de un lote de datos conteniendo todos los resultados del torneo, agrupados por codEq.
    //Desarrollar el programa que imprima, por cada equipo, su codigo y el puntaje total que obtuvo, 
    // considerando que suma 3 puntos por cada partido ganado, y 1 punto por cada partido empatado.
    // k = 8 equipos
    var reader = require("readline-sync");
    var eq1 = {
        codEq: ["3", "4", "4"],
        codRs: ["G", "E", "G", "E", "P", "G", "G"]
    };
    var eq2 = {
        codEq: ["4", "3", "3"],
        codRs: ["E", "E", "G", "G", "G", "P", "P"]
    };
    var eq3 = {
        codEq: ["2", "4", "3", "3"],
        codRs: ["E", "P", "G", "E", "P", "P", "P"]
    };
    var eq4 = {
        codEq: ["2", "5", "3"],
        codRs: "E"
    };
    var eq5 = {
        codEq: ["4", "4", "2"],
        codRs: "P"
    };
    var eq6 = {
        codEq: ["4", "2", "4"],
        codRs: "G"
    };
    var eq7 = {
        codEq: ["4", "3", "2", "1"],
        codRs: "P"
    };
    var eq8 = {
        codEq: ["4", "2", "4", "2"],
        codRs: "G"
    };
})();
