import React from "react";
import useCounter from "../customHooks/useCounter";

function CounterHooksTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10)

  return (
    <div>
        <h4>Count - {count}</h4>
      <button type="button" onClick={increment}>
        increment
      </button>
      <button type="button" onClick={decrement}>
        decrement
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default CounterHooksTwo;