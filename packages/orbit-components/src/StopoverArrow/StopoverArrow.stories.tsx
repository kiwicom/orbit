import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import STOPS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import StopoverArrow from ".";

export default {
  title: "StopoverArrow",
};

export const Playground = () => {
  const stops = select("stops", Object.values(STOPS), STOPS.ZERO);
  const dataTest = text("dataTest", "test");

  return <StopoverArrow stops={stops} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const InRtl = () => {
  const stops = select("stops", Object.values(STOPS), STOPS.THREE);
  const dataTest = text("dataTest", "test");
  return (
    <RenderInRtl>
      <StopoverArrow stops={stops} dataTest={dataTest} />
    </RenderInRtl>
  );
};

InRtl.story = {
  name: "In RTL",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
