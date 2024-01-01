import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

// declare the reducer state & define the reducer function...
const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Oops!, Something went wrong!",
      };
    default:
      return state;
  }
};

// invoking "useReducer" & "useEffect" to "fetch" the "data" and set the "state"
function DataFetchReducerTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // when the data fecting is successful, we dispatch an action...
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchReducerTwo;
