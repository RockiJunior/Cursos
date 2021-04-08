(()=>{
    // Dada una serie de caracteres que conforman una oracion, donde cada palabra esta separada de la
    // siguiente por un caracter blanco y la oracion finaliza con un punto, se pide informar:
    
    // Cantidad de veces que aparecio cada vocal. 
    // Cantidad de palabras que contiene una oracion.
    // Cantidad de letras que posee la palabra mas larga.
    
    
    let texto1 = "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón.";      
    let texto2 = "Fabio me exige, sin tapujos, que añada cerveza al whisky.";
    let texto3 = "Jovencillo emponzoñado de whisky, ¡qué figurota exhibes!";
    let texto4 =  "La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso.";
    let texto5 =  "El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque.";
    
    
    const firstVocal = (vocal:string) =>  {
        return vocal.split("a").length - 1;
    };
    const secondVocal = (vocal:string) =>  {
        return vocal.split("e").length - 1;
    };
    const thirdVocal = (vocal:string) =>  {
        return vocal.split("i").length - 1;
    };
    const fourthVocal = (vocal:string) =>  {
        return vocal.split("o" && "ó").length - 1;
    };
    const fifthVocal = (vocal:string) =>  {
        return vocal.split("u").length - 1;
    };
    
    const countWords = (str:string) => {
        return str.split(" ").length;
    };
    
    console.log("Times the Vowels appear for each Phrase...");
    
    console.log(
        "","Phrase 1...", 
        "a:", firstVocal(texto1),
        "e:",secondVocal(texto1),
        "i:",thirdVocal(texto1),
        "o:",fourthVocal(texto1),
        "u:",fifthVocal(texto1),
        '\n', "Phrase 2...", 
        "a:", firstVocal(texto2),
        "e:",secondVocal(texto2),
        "i:",thirdVocal(texto2),
        "o:",fourthVocal(texto2),
        "u:",fifthVocal(texto2),
        '\n',"Phrase 3...", 
        "a:", firstVocal(texto3),
        "e:",secondVocal(texto3),
        "i:",thirdVocal(texto3),
        "o:",fourthVocal(texto3),
        "u:",fifthVocal(texto3),
        '\n',"Phrase 4...", 
        "a:", firstVocal(texto4),
        "e:",secondVocal(texto4),
        "i:",thirdVocal(texto4),
        "o:",fourthVocal(texto4),
        "u:",fifthVocal(texto4),
        '\n',"Phrase 5...", 
        "a:", firstVocal(texto5),
        "e:",secondVocal(texto5),
        "i:",thirdVocal(texto5),
        "o:",fourthVocal(texto5),
        "u:",fifthVocal(texto5)
        );
        
        
        countWords(texto1);
        console.log(
            "The number of times each word appears...",
            countWords(texto1), 
            countWords(texto2), 
            countWords(texto3), 
            countWords(texto4), 
            countWords(texto5)
            );
            
            
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
            }
            console.log("The Longest Word for each Phrase is...","\n",
                        "Phrase 1...", findLongestWord(texto1),"\n",
                        "Phrase 2...", findLongestWord(texto2),"\n",
                        "Phrase 3...", findLongestWord(texto3),"\n",
                        "Phrase 4...", findLongestWord(texto4),"\n",
                        "Phrase 5...", findLongestWord(texto5),"\n");        
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        })();