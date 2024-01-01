import React, {useState} from 'react';

function UpdateMe() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    // const incrementFive = () => {
    //     for(let i = 0; i < 5; i++) {
    //         setCount(count + 1)
    //     }
    // }
  return (
    <div>
      Count: {count}
      <button type='button' onClick={() => setCount(initialCount)}>Reset</button>
      <button type='button' onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button type='button' onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button type='button' onClick={incrementFive}>increment 5</button>
    </div>
  );
}

export default UpdateMe;