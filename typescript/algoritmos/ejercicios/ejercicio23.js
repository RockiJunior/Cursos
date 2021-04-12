"use strict";
(function () {
    // Dada una serie de caracteres que conforman una oracion, donde cada palabra esta separada de la
    // siguiente por un caracter blanco y la oracion finaliza con un punto, se pide informar:
    // Cantidad de veces que aparecio cada vocal. 
    // Cantidad de palabras que contiene una oracion.
    // Cantidad de letras que posee la palabra mas larga.
    var findVocals = function (texto, vocal) {
        return texto.split(vocal).length - 1;
    };
    var countWords = function (str) {
        return str.split(" ").length;
    };
    var findLongestWord = function (str) {
        //split string into array
        var splitStrArray = str.split(" ");
        //find the length of each item in the string
        var lengthofStringArray = splitStrArray.map(function (item) { return item.length; });
        //find the max length
        var maxLengthinArr = Math.max.apply(Math, lengthofStringArray);
        //match the word with the length
        var result = splitStrArray.find(function (item) { return item.length === maxLengthinArr; });
        return result;
    };
    var texto1 = "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón.";
    var texto2 = "Fabio me exige, sin tapujos, que añada cerveza al whisky.";
    var texto3 = "Jovencillo emponzoñado de whisky, ¡qué figurota exhibes!";
    var texto4 = "La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso.";
    var texto5 = "El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque.";
    console.log("Times the Vowels appear for each Phrase...");
    var textos = [
        texto1,
        texto2,
        texto3,
        texto4,
        texto5
    ];
    var arrVocals = [
        "a",
        "e",
        "i",
        "o",
        "u"
    ];
    for (var _i = 0, textos_1 = textos; _i < textos_1.length; _i++) {
        var texto = textos_1[_i];
        console.log(texto);
        for (var _a = 0, arrVocals_1 = arrVocals; _a < arrVocals_1.length; _a++) {
            var vocal = arrVocals_1[_a];
            console.log(vocal + ":", findVocals(texto, vocal));
        }
    }
    ;
    countWords(texto1);
    console.log("The number of times each word appears...", countWords(texto1), countWords(texto2), countWords(texto3), countWords(texto4), countWords(texto5));
    console.log("The Longest Word for each Phrase is...", "\n", "Phrase 1...", findLongestWord(texto1), "\n", "Phrase 2...", findLongestWord(texto2), "\n", "Phrase 3...", findLongestWord(texto3), "\n", "Phrase 4...", findLongestWord(texto4), "\n", "Phrase 5...", findLongestWord(texto5), "\n");
})();
