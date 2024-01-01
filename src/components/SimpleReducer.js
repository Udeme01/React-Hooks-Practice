import React, { useReducer } from "react";

// the useReducer() Hook arguments are defined here below... "initialState & reducer() function..!"
const initialState = 0;
const reducer = (state, action) => {
    // based on the action(increment, decrement, & reset), the newState is returned... the func() will either increment, decrement or reset the counter value..!
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function SimpleReducer() {
    // useReducer() returns the current state as "count" paired with a dispatch() method{allows us to execute code corresponding to an action}
  const [count, dispatch] = useReducer(reducer, initialState); // the useReducer() Hook accepts 2 arguments...(reducer & initialState)...
  return (
    <div>
      <h1>Count : {count}</h1>
      <button type="button" onClick={() => dispatch("increment")}>
        increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        decrement
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
}

export default SimpleReducer;
