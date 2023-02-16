function BinarioADecimal(num) {
    // tu codigo aca

    // return parseInt(num, 2);
    let numberToArray = num.split("").reverse();
    // let accumulator = 0;
    // let potencia = numberToArray.length - 1;
    // for (let i = 0; i < numberToArray.length; i++) {
    //     accumulator += parseInt(numberToArray[i]) * Math.pow(2, potencia);
    //     potencia--;
    // }
    // return accumulator;

    return numberToArray.reduce(function(result, item, i) {
        const potencia = Math.pow(2, i);
        result = result + item * potencia;
        return result;
    }, 0)
}

function DecimalABinario(num) {
    // tu codigo aca

    // return num.toString(2);

    // let resto = 0;
    // let binary = [];
    // while (num > 0) {
    //     resto = num % 2;
    //     if (resto === 0) {
    //         binary.push(resto);
    //         num = num / 2;
    //     } else {
    //         binary.push(resto);
    //         num = num / 2 - 0.5;
    //     }
    // }
    // return binary.reverse().join("");

    //Lo que tengo que hacer es...num / 2 => resto, => resultado
    let result = []
    while (num > 0) {
        result.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    return result.join('');

}



module.exports = {
    BinarioADecimal,
    DecimalABinario,
}