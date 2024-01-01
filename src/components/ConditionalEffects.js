import React, { useState, useEffect } from "react";

function ConditionalEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `You clicked ${count} time!`;
    console.log('updating document title')
  }, [count]);
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Clicked {count} times!
      </button>
    </div>
  );
}

export default ConditionalEffects;