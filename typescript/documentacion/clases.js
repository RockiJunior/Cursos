"use strict";
(() => {
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
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('antman', 'Capi');
    // const antman: new Avenger;
    // si yo quisiera cambiar el argumento de la propiedad equipo.
    // antman.equipo = 'Ironman'; 
    console.log(antman);
})();
