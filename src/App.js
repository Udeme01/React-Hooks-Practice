// import React, { createContext, useContext } from "react";
import React from "react";
import "./App.css";
import FavColor from "./components/FavColor";
import UpdateMe from "./components/UpdateMe";
import UpdateObject from "./components/UpdateObject";
import UpdateArray from "./components/UpdateArray";
import ConditionalEffects from "./components/ConditionalEffects";
import RunOnceEffect from "./components/RunOnceEffect";
import DisplayMe from "./components/DisplayMe";
import DataFetching from "./components/DataFetching";
import ContextC from "./components/ContextC";
import { HubbyContext, WifeyContext } from "./components/ContextE";
import SimpleReducer from "./components/SimpleReducer";
import ComplexReducer from "./components/ComplexReducer";
import DataFetchReducerOne from "./components/DataFetchReducerOne";
import DataFetchReducerTwo from "./components/DataFetchReducerTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterHook from "./components/CounterHook";
import CounterHooksTwo from "./components/CounterHooksTwo";
import FormHook from "./components/FormHook";

// export const UserContext = createContext();
// export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <FavColor /> */}
      {/* <UpdateMe /> */}
      {/* <UpdateObject /> */}
      {/* <UpdateArray /> */}
      {/* <ConditionalEffects /> */}
      {/* <RunOnceEffect /> */}
      {/* <DisplayMe /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Udeme"}>
        <ChannelContext.Provider value={"Emmanuel"}>
          <ContextC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <HubbyContext.Provider value={"Udeme Emmanuel"}>
      <WifeyContext.Provider value={"Believe Akogun"}>
        <ContextC />
      </WifeyContext.Provider>
    </HubbyContext.Provider> */}
    {/* <SimpleReducer /> */}
    {/* <ComplexReducer /> */}
    {/* <DataFetchReducerOne /> */}
    {/* <DataFetchReducerTwo /> */}
    {/* <DocTitleOne /> */}
    {/* <DocTitleTwo /> */}
    {/* <CounterHook /> */}
    {/* <CounterHooksTwo /> */}
    <FormHook />
    </div>
  );
}

export default App;
