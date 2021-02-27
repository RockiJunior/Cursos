(()=> {



const sumar = (a: number, b: number):number => a +b ;

const nombre = ():string => 'Hola Fernando'; 

const obtenerSalario = ():Promise<string> => {

    return new Promise( (resolve, reject) => {
        resolve('Fernando'), 
        reject('Gabriel');
    });
};

obtenerSalario().then(arg => console.log(arg.toUpperCase)
                .catch(err => console.warn (err));


})();