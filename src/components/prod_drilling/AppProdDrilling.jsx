import React, { useState } from 'react';
import { HeaderComponent } from '.';
import { increment } from './helpers/increment';

export const AppProdDrilling = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    //setCounter(value=>value+1);
    //setCounter(counter+1)
    //Esta función sobra pero lo utilizamos para probar jest
    const value = increment(counter);
    setCounter(value);
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
