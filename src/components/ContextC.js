import React, { useContext } from "react";
// import { UserContext, ChannelContext } from "../App";
import { HubbyContext, WifeyContext } from "./ContextE";

function ContextC() {
  //   const user = useContext(UserContext);
  //   const channel = useContext(ChannelContext);

  const hubby = useContext(HubbyContext);
  const wifey = useContext(WifeyContext);
  return (
    <div>
      {/* {user} - {channel} */}
      {hubby} - {wifey}
    </div>
  );
}

export default ContextC;
