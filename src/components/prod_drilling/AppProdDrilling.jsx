import React, { useState } from 'react';
import { HeaderComponent } from '.';

export const AppProdDrilling = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter+1);
  }
  return (
    <div style={{backgroundColor: 'tomato'}}>
      <h1>Prod Drilling</h1>
      <h2>Papá</h2>
      <code>
      const [counter, setCounter] = useState({counter})
      </code>

      {/* Pasando los datos a través de atributos */}
      <HeaderComponent counter={counter} onIncrement={handleIncrement}  />
    </div>
  )
}
