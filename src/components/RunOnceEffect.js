import React, { useEffect, useState } from "react";

function RunOnceEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('mouse event')
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('effect hook')
    window.addEventListener("mousemove", logMousePosition);

    // clean up to reduce memory leaks...
    return () => {
      console.log('clean up')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, []);

  return (
    <div>
      <h2>
        X - {x} Y - {y}
      </h2>
    </div>
  );
}

export default RunOnceEffect;