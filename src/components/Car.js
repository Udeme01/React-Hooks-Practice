import React, { useState } from 'react';

function Car() {
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        year: 1964,
        color: 'red'
    })
    const updateColor = () => {
        setCar(prevState => {
            return {
                ...prevState, color: 'blue'
            }
        })
    }
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button type='button' onClick={updateColor}>blue</button>
    </div>
  );
}

export default Car;