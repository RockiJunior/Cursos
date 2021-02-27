(()=> {

    // para realizar el tipo de dato del retorno de una Funcion, se debe colocar  
    // Promise<type> antes de la flecha de retorno. Por ejemplo....

    const retirarDinero = (montonRetirar: number): Promise<number> => {

        let dineroActual= 1000;

        return new Promise( (resolve, reject)  => {
            if(montonRetirar >= dineroActual){
                reject('No hay fondos suficientes')
            } else{
                dineroActual -= montonRetirar;
                resolve (dineroActual); 
            }
        });


    };
    
    retirarDinero(200).then(montoActual => console.log (`Quedan ${montoActual} en su Cuenta`))
                      .catch(console.warn);








})();