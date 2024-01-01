import React, {useState} from 'react';
import Car from './Car';

function FavColor() {
    const [color, setColor] = useState('red');
  return (
    <div>
      <h1>My FavColor is {color}</h1>
      <button type='button' onClick={() => setColor('blue')}>blue</button>
      <button type='button' onClick={() => setColor('pink')}>pink</button>
      <button type='button' onClick={() => setColor('orange')}>orange</button>
      <Car />
    </div>
  );
}

export default FavColor;