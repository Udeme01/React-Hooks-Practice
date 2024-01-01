import React, { createContext } from "react";
import ContextC from "./ContextC";

export const HubbyContext = createContext();
export const WifeyContext = createContext();

function ContextE() {
  return (
    <ContextC />
  );
}

export default ContextE;