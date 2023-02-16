import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <nav>
    <input type="text" placeholder="Ciudad..."/>
    <button onClick={ (e) => props.onSearch('Buscando...' + e.target.value)}>Agregar</button>
    </nav>
  </div>
};