"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
(function () {
    // Un buque de carga traslada 100 contenedores a 3 diferentes puertos del país, identificados como 1, 2 y 3.
    // Por cada uno de los contenedores trasladados por el buque se registran los siguientes datos:
    // Identificacion del contenedor: idCont.
    // peso del contenedor(en kilos): weight.
    // Puerto de arribo(un valor del 1 al 3): idPort.
    ;
    var arraContainer = [
        {
            idCont: "Buenos Aires",
            weight: 5568,
            idPort: 3,
        },
        {
            idCont: "Hong Kong",
            weight: 20476,
            idPort: 1
        },
        {
            idCont: "Beijing",
            weight: 104867,
            idPort: 2
        },
        {
            idCont: "Shanghai",
            weight: 32571,
            idPort: 3
        },
        {
            idCont: "Malaysia",
            weight: 16435,
            idPort: 1
        },
        {
            idCont: "Tokio",
            weight: 8532,
            idPort: 1
        },
        {
            idCont: "Indonesia",
            weight: 54792,
            idPort: 2
        },
        {
            idCont: "Singapore",
            weight: 80325,
            idPort: 2
        },
    ];
    // Two ways to do this...
    // let acumulador = 0;
    // This is one of them...
    // for(let item of arraContainer){
    //   acumulador += item.weight; // acumulador = acumulador + item.weight;
    // };
    // console.log(acumulador);
    // This is the other one...
    var reducir = arraContainer.reduce(function (accumulator, itemValue) { return accumulator + itemValue.weight; }, 0);
    console.log("The total of all values is...", reducir);
    // SECOND POINT
    // two ways to do this...
    // One is...
    // const max = data.reduce(function(prev, current) {
    //   return (prev.y > current.y) ? prev : current
    // }) //returns object
    // the other way is...
    // let max = arraContainer.reduce((acumulador, weightDelObjeto) => ( acumulador.weight > weightDelObjeto.weight ) ? acumulador : weightDelObjeto);
    // console.log(max);
    // Other better way to do this, is...
    // console.log(arraContainer.map(item => item.weight, 0)); // this returns *.weight of *objets.
    // and the below, returns and calculate the max weight with Math.max. 
    var maxValueOfY = Math.max.apply(Math, __spreadArray(__spreadArray([], arraContainer.map(function (o) { return o.weight; })), [0]));
    console.log("The Max Value is...", maxValueOfY);
    // POINT 3!!!
    console.log("Returning the port in a grouped and encapsulated way...");
    var returnEntireObject3 = arraContainer.filter(function (item) { return item.idPort === 3; });
    console.log(returnEntireObject3);
    var returnEntireObject2 = arraContainer.filter(function (item) { return item.idPort === 2; });
    console.log(returnEntireObject2);
    var returnEntireObject1 = arraContainer.filter(function (item) { return item.idPort === 1; });
    console.log(returnEntireObject1);
    console.log("Returning in order the sum of the objects for each port...");
    var filteringidPort3 = arraContainer.filter(function (item) { return item.idPort === 3; })
        .length;
    var filteringidPort2 = arraContainer.filter(function (item) { return item.idPort === 2; })
        .length;
    var filteringidPort1 = arraContainer.filter(function (item) { return item.idPort === 1; })
        .length;
    console.log(filteringidPort3, filteringidPort2, filteringidPort1);
})();
