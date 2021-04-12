(()=>{
    // Dada una serie de caracteres que conforman una oracion, donde cada palabra esta separada de la
    // siguiente por un caracter blanco y la oracion finaliza con un punto, se pide informar:
    
    // Cantidad de veces que aparecio cada vocal. 
    // Cantidad de palabras que contiene una oracion.
    // Cantidad de letras que posee la palabra mas larga.
    
    const findVocals = (texto:string, vocal:string) =>  {
        return texto.split(vocal).length - 1;
    };
    
    const countWords = (str:string) => {
        return str.split(" ").length;
    };
    
    const findLongestWord = (str:string) => {
        //split string into array
        const splitStrArray = str.split(" ");
        
        //find the length of each item in the string
        const lengthofStringArray = splitStrArray.map(item => item.length);
        
        //find the max length
        const maxLengthinArr = Math.max(...lengthofStringArray);
        
        //match the word with the length
        const result = splitStrArray.find(item => item.length === maxLengthinArr);
        return result;
    };
    
    
    let texto1 = "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón.";      
    let texto2 = "Fabio me exige, sin tapujos, que añada cerveza al whisky.";
    let texto3 = "Jovencillo emponzoñado de whisky, ¡qué figurota exhibes!";
    let texto4 =  "La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso.";
    let texto5 =  "El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque.";
    
    console.log("Times the Vowels appear for each Phrase...");
    
    
    const textos = [
        texto1,
        texto2,
        texto3, 
        texto4, 
        texto5
    ];
    
    const arrVocals = [
        "a",
        "e",
        "i",
        "o",
        "u"
    ];
    
    for(let texto of textos){
        console.log(texto);
        for(let vocal of arrVocals){
            console.log(`${vocal}:`, findVocals(texto, vocal))
        }
    };
    
    
    countWords(texto1);
    
    console.log("The number of times each word appears...",
    countWords(texto1), 
    countWords(texto2), 
    countWords(texto3), 
    countWords(texto4), 
    countWords(texto5)
    );    
    
    
    
    console.log("The Longest Word for each Phrase is...","\n",
    "Phrase 1...", findLongestWord(texto1),"\n",
    "Phrase 2...", findLongestWord(texto2),"\n",
    "Phrase 3...", findLongestWord(texto3),"\n",
    "Phrase 4...", findLongestWord(texto4),"\n",
    "Phrase 5...", findLongestWord(texto5),"\n");        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();