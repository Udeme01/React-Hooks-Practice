import React from "react";
import useCounter from "../customHooks/useCounter";

function CounterHook() {
  const [count, increment, decrement, reset] = useCounter(0, 1)

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

export default CounterHook;