import React, { useReducer } from "react";

// "initialState" is gonna be equated to being an "object"
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  // action here having a "action.type" is gonna now access the entire object that has a property of type.
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* render the count property in the JSX below to be "count.firstCounter;" */}
      <h1>Count : {count.firstCounter}</h1>
      <h1>Count : {count.secondCounter}</h1>
      {/* convert the "string actions" below into an "object" having a "type" property. */}
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        increment 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        decrement 5
      </button>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment2", value: 10 })}
        >
          increment 10
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement2", value: 10 })}
        >
          decrement 10
        </button>
      </div>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
}

export default ComplexReducer;

// Making the component's "state and action" to be "objects"
// "useReducer" with "state and action" as "objects"

// ACTION AS AN OBJECT...
// By making use of "action" as an "object", we can use additional data in the Reducer function

// STATE AS AN OBJECT...
// By using "state" as an "object", I'm able to keep track of 2 different counters...