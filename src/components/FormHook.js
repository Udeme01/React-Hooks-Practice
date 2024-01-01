import React, { useState } from "react";
import useFormHook from "../customHooks/useFormHook";

function FormHook() {
  const [firstName, bindFirstName, resetFirstName] = useFormHook("");
  const [lastName, bindLastName, resetLastName] = useFormHook("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>firstName</label>
          <input
            type="text"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
          />
        </div>
        <div>
          <label>lastName</label>
          <input
            type="text"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FormHook;
