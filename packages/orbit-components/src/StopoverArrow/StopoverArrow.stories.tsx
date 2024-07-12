import * as React from "react";

import STOPS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import StopoverArrow from ".";

export default {
  title: "StopoverArrow",
};

export const Playground = ({ stops, dataTest, id }) => {
  return <StopoverArrow stops={stops} dataTest={dataTest} id={id} />;
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  stops: STOPS.ZERO,
  dataTest: "test",
  id: "ID",
};

Playground.argTypes = {
  stops: {
    options: Object.values(STOPS),
    control: {
      type: "select",
    },
  },
};

export const InRtl = ({ stops, dataTest }) => {
  return (
    <RenderInRtl>
      <StopoverArrow stops={stops} dataTest={dataTest} />
    </RenderInRtl>
  );
};

InRtl.story = {
  name: "In RTL",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

InRtl.args = {
  stops: STOPS.THREE,
  dataTest: "test",
};

InRtl.argTypes = {
  stops: {
    options: Object.values(STOPS),
    control: {
      type: "select",
    },
  },
};
