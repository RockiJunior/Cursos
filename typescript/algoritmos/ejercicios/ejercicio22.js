"use strict";
(function () {
    var reader = require("readline-sync");
    // Se realiza una inspeccion en una fábrica de pinturas, y se detectaron, algunas infracciones. 
    // De cada infracción se tomó nota de los siguientes datos:
    // Tipos de infracción (1, 2, 3, ó 4): tyInfr.
    // Motivo de infraccion: reason.
    // Valor de multa: Value.
    // Gravedad de la infracción(L, M, H): severity.
    // Los datos finalizan cuando se ingrese un tyInfr igual cero. Se pide informar al final del proceso:
    // Los valores totales de la multa a pagar de acuerdo a la gravedad de las infracciones registradas.
    // La leyenda "Clausurar Fábrica" si la cantidad de infracciones de tipo 3 y 4 con la gravedad "H" es mayor a 3.
    // Informar el motivo correspondiente a la infraccion de menor valor.
    var Infraction = /** @class */ (function () {
        function Infraction(tyInfr, reason, valueOfInfr, severity) {
            this.tyInfr = tyInfr;
            this.reason = reason;
            this.valueOfInfr = valueOfInfr;
            this.severity = severity;
        }
        return Infraction;
    }());
    ;
    var arrInfr = [];
    var tyInfr = parseInt(reader.question("Put a number for the type of Infraction..."));
    var reason;
    var valueOfInfr;
    var severity;
    if (tyInfr > 0 && tyInfr < 5) {
        if (tyInfr !== 0) {
            reason = reader.question("Put the reason of the Infraction...");
            valueOfInfr = parseInt(reader.question("Put the Value of the Infraction..."));
            severity = reader.question("Put the Severity of the Infraction...");
            var object1 = new Infraction(tyInfr, reason, valueOfInfr, severity);
            arrInfr.push(object1);
            console.log(arrInfr);
            while (tyInfr > 0 && tyInfr < 5) {
                tyInfr = parseInt(reader.question("Put a number for the type of Infraction..."));
                if (tyInfr !== 0) {
                    reason = reader.question("Put the reason of the Infraction...");
                    valueOfInfr = parseInt(reader.question("Put the Value of the Infraction..."));
                    severity = reader.question("Put the Severity of the Infraction...");
                    var saveINfraction = new Infraction(tyInfr, reason, valueOfInfr, severity);
                    arrInfr.push(saveINfraction);
                    console.log(arrInfr);
                }
                ;
                for (var _i = 0, arrInfr_1 = arrInfr; _i < arrInfr_1.length; _i++) {
                    var item = arrInfr_1[_i];
                    if (arrInfr.length >= 3) {
                        if (item.severity === "H") {
                            if (item.tyInfr >= 3 && item.tyInfr === 4) {
                                console.log("CLOSE FACTORY RIGHT NOW!!!");
                                break;
                            }
                        }
                    }
                }
            }
            ;
        }
        ;
    }
    ;
    var totalValuesInfr = arrInfr.map(function (item) { return item.valueOfInfr; }, 0)
        .reduce(function (accumulator, itemValue) { return accumulator + itemValue; }, 0);
    console.log(totalValuesInfr);
    var accumulator = 0;
    for (var _a = 0, arrInfr_2 = arrInfr; _a < arrInfr_2.length; _a++) {
        var item = arrInfr_2[_a];
        if (item.severity === "L") {
            accumulator = accumulator + 100;
            console.log("The Reason for the lesser offense is...", item.reason);
        }
        ;
        if (item.severity === "M") {
            accumulator = accumulator + 200;
        }
        ;
        if (item.severity === "H") {
            accumulator = accumulator + 400;
        }
        ;
    }
    ;
    console.log("The total of all recorder infractions and for extra severity are...", accumulator + totalValuesInfr);
})();
