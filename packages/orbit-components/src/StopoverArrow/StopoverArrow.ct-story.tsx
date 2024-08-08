import * as React from "react";

import STOPS from "./consts";

import StopoverArrow from ".";

export default function StopoverArrowStory() {
  return (
    <div className="p-400">
      {Object.values(STOPS).map(stops => (
        <StopoverArrow stops={stops} />
      ))}
    </div>
  );
}
