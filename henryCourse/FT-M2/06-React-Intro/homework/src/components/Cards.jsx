import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(props.cities){
    return (
      <div>{
        props.cities.map(c => 
          <Card 
            key = {c.id}
            max={c.main.temp_max}
            min={c.main.temp_min}
            name={c.name}
            img={c.weather[0].icon}
            onClose={() => alert(c.name)}
          />)
        }
      </div>
    )
  }else{
    return (
      <h4>No hay Ciudades</h4>
    )
  }
  
};