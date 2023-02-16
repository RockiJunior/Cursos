var traverseDomAndCollectElements = function(matchFunc, startEl) {
    var resultSet = [];

    if (typeof startEl === "undefined") {
        startEl = document.body;
    }
    // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
    // usa matchFunc para identificar elementos que matchien

    // TU CÓDIGO AQUÍ
    if (!matchFunc) matchFunc = matchFunctionMaker;

    if (matchFunc(startEl)) resultSet.push(startEl);

    for (let i = 0; i < startEl.children.length; i++) { //body
        let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
        resultSet = [...resultSet, ...result]
    }
    return resultSet;

    // si matchFunc es false, guardame la funcion matchFunctionMaker en matchFunc;
    // si matchFunc recibe un parametro, y esto es verdadadero, pusheame el valor a resultSet;
    // con el for recorro el body (que en este caso son todos los hijos del elemento que se busca de 'starEl')
    // llamo a la funcion traverseDomAndCollectElements para utilizar recursividad, y guardar los elementos
    // y volver a filtrar los resultados..una vez que se completen...los guardo en result, y concateno con spread operator 
    // en el resultSet (array), y luego lo retorno;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
    // tu código aquí
    if (selector[0] === '#') {
        return 'id'
    }; //si el selector en la posicion 0 es un "#" devuelve 'id'
    if (selector[0] === '.') {
        return 'class'
    }; // si el selector en la posicion 0 es '.' devuelve 'class'
    if (selector.split('.').length > 1) {
        return 'tag.class'
    }
    return 'tag'; // si no es ninguna de las anteriores retorna 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
    var selectorType = selectorTypeMatcher(selector);
    var matchFunction;
    if (selectorType === "id") {
        matchFunction = (el) => { // => el selector es..'#price'
            return (el.id) && (el.id === selector.slice(1));
        };
        // el elemento, es lo que yo tengo que comparar con el selector, en este caso (el) 
        // es 'price', (la etiqueta de la clase price html).
        // lo que sucede aqui, es que..retorno el elemento con una comparacion.
        // la comparacion de la derecha dice, si el id, del elemento, coincide con
        // el elemento que trae el selector, que en este caso, lo corta con slice(), (#'price') => ('price')
        // devolve el true, o el false, de esa comparacion. ya que el ampersand realiza esa comparacion.
        // lo cual, va a retornar false, ya que no son iguales. 
    } else if (selectorType === "class") {
        matchFunction = (el) => {
            return el.className && (el.className.split(' ').includes(selector.slice(1)));
        };
        // comparo el className del 'el' con...la separacion del string del selector por espacios (si es que 
        // hubiesen) y a esto, se le pregunta, si en el total de este "array" (que en realidad es un string), 
        // incluye el selector de clase (separado de su punto '.')
    } else if (selectorType === "tag.class") {
        let [t, c] = selector.split('.');
        matchFunction = (el) => {
            return (el.className.split(' ').includes(c)) && (el.tagName.toLowerCase() === t)
        };
        // primero hago un destructuring del tag.class
        // luego comparamos el classname separado por espacios, y preguntamos si coincide con 'c', 
        // que es 'class';
        // por el lado derecho, preguntamos si el tagName con la aplicacion de lowerCase, es igual a 't'
        // que es 'tag';
    } else if (selectorType === "tag") {
        matchFunction = (el) => {
            return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
        };
        // aca, hago la comparacion del lowerCase del selector, con el lowerCase del tagName 
        // del elemento y retorna esa comparacion de booleanos;
    }
    return matchFunction;
};

var $ = function(selector) {
    var elements;
    var selectorMatchFunc = matchFunctionMaker(selector);
    elements = traverseDomAndCollectElements(selectorMatchFunc);
    return elements;
};