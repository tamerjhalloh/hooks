import React, {useContext} from "react";
import { UserContext , ChannelContext} from "../../App";

function ComponentF() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
      <div>User context value: {user} {channel}</div>
    </div>
  );
}

export default ComponentF;
