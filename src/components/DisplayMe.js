import React, { useState } from 'react';
import RunOnceEffect from './RunOnceEffect';

function DisplayMe() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
      <button type='button' onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <RunOnceEffect/>}
    </div>
  );
}

export default DisplayMe;