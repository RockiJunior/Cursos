( ()=> {


// class Avenger{


//     nombre: string;
//     equipo: string;
//     nombreReal: string;
//     puedePelear: boolean;
//     peleasGanadas: number;


//     constructor(nombre:string){
//         this.nombre = nombre;
//         this.equipo = equipo;
//         this.nombreReal = nombreReal;
//         this.puedePelear = puedePelear ;
//         this.peleasGanadas = peleasGanadas ;
        
//     }


// }


class Avenger{


    // nombre: string;
    // equipo: string;
    // nombreReal: string;
    // puedePelear: boolean;
    // peleasGanadas: number;


    constructor( public nombre:string,
                 public equipo:string,
                 public nombreReal?:string,
                 public puedePelear: boolean = true,
                 public peleasGanadas:number = 0){}


}

const antman: Avenger = new Avenger('antman', 'Capi');
// const antman: new Avenger;


// si yo quisiera cambiar el argumento de la propiedad equipo.
// antman.equipo = 'Ironman'; 

console.log(antman)


})();