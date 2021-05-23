class Numero {
  private x: number;
  
  constructor(x: number) {
    this.x = x;
  }

  suma(y: number): Numero {
    return new Numero(this.x + y);        
  }

}


const primerNumero = new Numero(5);
const primerNumeroSumado = primerNumero.suma(9);
console.log(primerNumeroSumado);

