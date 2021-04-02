import { stringify } from "node:querystring";

(()=>{
    
    class Persona{
        private nombre: string;
        public apellido: string;
        private fechaNac: Date;
        
        constructor(nombre:string, apellido:string, fechaNac:Date){
            this.nombre = nombre;
            this.apellido = apellido; 
            this.fechaNac = fechaNac;
        }
        
        public calcularEdad(){
            let fechaActual = new Date();
            let edadMilisegundos = fechaActual.getTime() - this.fechaNac.getTime();
            let convertMilSecToDate = new Date(edadMilisegundos);
            return Math.abs(convertMilSecToDate.getUTCFullYear() - 1970); 
        } 
        
    };
    
    let persona:Persona = new Persona("Martin", "Brunori", new Date("1994-10-01"));
    let persona2:Persona = new Persona("Gabriel", "Brunori", new Date("1994-07-03"));
    
    console.log(persona.calcularEdad());
    console.log(persona2.calcularEdad());
    
    
    
    // public calcularEdad(){
        //     let fechaActual = new Date();
        //     let edadMilisegundos = fechaActual.getTime() - this.fechaNac.getTime();
        //     return edadMilisegundos;
        // } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();