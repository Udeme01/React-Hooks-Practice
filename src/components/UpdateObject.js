import React, { useState } from "react";

function UpdateObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <label for="firstName">firstName</label>
      <input
        type="text"
        id="firstName"
        value={name.firstName}
        onChange={(e) => setName({...name, firstName: e.target.value})}
      />
      <br />
      <label for="lastName">lastName</label>
      <input
        type="text"
        id="lastName"
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value})}
      />s

      <h2>firstName - {name.firstName}</h2>
      <h2>lastName - {name.lastName}</h2>
    </div>
  );
}

export default UpdateObject;
