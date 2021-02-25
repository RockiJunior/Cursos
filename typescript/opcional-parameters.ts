(function(){



    function activar(quien : string,
                     objeto: string = 'batiseñal',
                     momento?: string){
        if ( momento ){ 
            console.log(`${quien} activo la ${objeto} en la ${momento}`)
        } else{
            console.log(`${quien} activo la ${objeto} en la ${momento}`)
        }
        
    };



    activar('Gordon', 'batiseñal', 'tarde')
    // activar('Gordon', 'nose');

// aqui se creo una funcion, con parametros, y valores para esos para metros.
// el parametro 'quien' no tiene asignado ningun valor por defecto, en cambio el 
// parametro 'objeto' tiene el valor 'batiseñal', por defecto.
// esto hace que cuando yo llame a activar, y solo le pase un argumento: activar('Gordon),
// éste, va a imprimir batiseñal, por defecto... Gordon batiseñal.
// pero si yo le paso los dos argumentos...'Gordon', 'nose' va a imprimir los dos argumentos. 


// los parametros tienen un orden especifico...
// primero el parametro obligatorio, luego el opcional, y por ultimo, el valor por defecto.
// por supuesto esto depende del equipo de entorno de desarrollo.


})();