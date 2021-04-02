(() => {
    
    const reader = require("readline-sync");
    
    // Se realiza una inspeccion en una fábrica de pinturas, y se detectaron, algunas infracciones. 
    // De cada infracción se tomó nota de los siguientes datos:
    
    // Tipos de infracción (1, 2, 3, ó 4): tyInfr.
    // Motivo de infraccion: reason.
    // Valor de multa: Value.
    // Gravedad de la infracción(L, M, H): severity.
    
    // Los datos finalizan cuando se ingrese un tyInfr igual cero. Se pide informar al final del proceso:
    
    // Los valores totales de la multa a pagar de acuerdo a la gravedad de las infracciones registradas.
    // La leyenda "Clausurar Fábrica" si la cantidad de infracciones de tipo 3 y 4 con la gravedad "H" es mayor a 3.
    // Informar el motivo correspondiente a la infraccion de menor valor.
    
    
    
    class Infraction{
        public tyInfr: number;
        public reason?:string;
        public valueOfInfr?: number;
        public severity?: string;
        
        constructor(tyInfr:number, reason:string, valueOfInfr:number, severity:string){
            this.tyInfr = tyInfr;
            this.reason = reason;
            this.valueOfInfr = valueOfInfr;
            this.severity = severity;
        }
        
    };
    
    
    let arrInfr:Array<Infraction> = [];
    

    let tyInfr = parseInt(reader.question("Put a number for the type of Infraction..."));
    let reason : string;
    let valueOfInfr : number;
    let severity : string;
    
    
    if(tyInfr !== 0){
        reason = reader.question("Put the reason of the Infraction...");
        valueOfInfr = parseInt(reader.question("Put the Value of the Infraction..."));
        severity = reader.question("Put the Severity of the Infraction...");
       
        let object1 = new Infraction(tyInfr, reason, valueOfInfr, severity);
        arrInfr.push(object1);
        console.log(arrInfr);
        
        
        while(tyInfr > 0 && tyInfr < 4){
            tyInfr = parseInt(reader.question("Put a number for the type of Infraction..."));
            if(tyInfr !== 0){
                reason = reader.question("Put the reason of the Infraction...");
                valueOfInfr = parseInt(reader.question("Put the Value of the Infraction..."));
                severity = reader.question("Put the Severity of the Infraction...");
                let saveINfraction = new Infraction(tyInfr, reason, valueOfInfr, severity);
                arrInfr.push(saveINfraction);
                console.log(arrInfr);  
            };  
        };
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();