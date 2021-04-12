(()=>{
    // Dado un numero entero positivo entre 1 y 3999, informar su correspondiente numero romano. 
    
    const reader = require ("readline-sync");
    const inputInteger = parseInt(reader.question("Put the roman number for the transformation...."));
    
    
    
    
    
    
    
    
    const int2roman = (original: number): string => {
        if (original < 1 || original > 3999) {
            throw new Error('Error: Input integer limited to 1 through 3,999');
        }
        
        const numerals = [
            ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9 //array position 0 
            ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90 // array position 1
            ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
            ['M', 'MM', 'MMM'], // 1000-3000
        ]; // array of array, is a matrix.
        
        // TODO: Could expand to support fractions, simply rounding for now
        const digits = Math.round(original).toString().split('');// split is array whit element for each letter.(in this case)
        //    ['1','5'] 
        
        let position = (digits.length - 1); // returns number for ever and ever EMI ONE
        
        const martinMaestro = (roman:string, digit:string ) => { // 1 iteration roman = ''; digit = '1' position 1,
            // second iteration roman = 'X', digit = '5'; position = 0;
            if (digit !== '0') {
                const digitPosition = parseInt(digit) - 1; 
                roman = roman + numerals[position][digitPosition]; // '' + 'X'; 'X' + 'V';
            }
            position = position -1 ;
            
            return roman; // 'X'; 'XV'
        };
        
        
        return digits.reduce(martinMaestro, ''); // the value of the first interaction is '' (of roman) 
        // and digit is '1'
    };
    
    console.log(int2roman(inputInteger));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();