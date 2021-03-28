(()=>{
  // Un buque de carga traslada 100 contenedores a 3 diferentes puertos del país, identificados como 1, 2 y 3.
  // Por cada uno de los contenedores trasladados por el buque se registran los siguientes datos:
  // Identificacion del contenedor: idCont.
  // Peso del contenedor(en kilos): peso.
  // Puerto de arribo(un valor del 1 al 3): idPuerto.
  
  // Se pide calcular e informar:
  // El peso total que el buque debe trasladar. 
  // El contenedor de mayor peso.
  // La cantidad de contenedores que se trasladarán a cada puerto.
  
  interface Container {
    idCont: string,
    peso: number,
    idPuerto: number
  }

  
  const arraContainer: Array<Container> = [
    {
      idCont : "Buenos Aires",
      peso : 5568,
      idPuerto : 3,
    },
    {
      idCont : "Hong Kong",
      peso : 20476,
      idPuerto : 1
    },
    {
      idCont : "Beijing",
      peso : 36867,
      idPuerto : 2
    },
    {
      idCont : "Shanghai",
      peso : 32571,
      idPuerto : 3
    },
    {
      idCont : "Malaysia",
      peso : 16435,
      idPuerto : 1
    },
    {
      idCont : "Tokio",
      peso : 8532,
      idPuerto : 1
    },
    {
      idCont : "Indonesia",
      peso : 54792,
      idPuerto : 2
    },
    {
      idCont : "Singapore",
      peso : 80325,
      idPuerto : 2
    },
    
  ];
  
  let acumulator = 0;

  for(let item of arraContainer){
   acumulator += item.peso;
  };
  console.log(acumulator);
  
  let reducir = arraContainer.reduce(
    (accumulator:number, itemValue:any) => accumulator + itemValue.peso, 0);
  console.log(reducir)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})();