import React, { useState } from "react";
import useDocumentTitle from "../customHooks/useDocumentTitle";

function DocTitleOne() {
  // created a new state variable and initialized it to zero(0);
  const [count, setCount] = useState(0);

  // I then called a function which is the custom hook, passing in the count state variable.
  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleOne;