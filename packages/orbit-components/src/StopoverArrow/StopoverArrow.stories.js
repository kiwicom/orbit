// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import STOPS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import StopoverArrow from ".";

storiesOf("StopoverArrow", module)
  .add(
    "Playground",
    () => {
      const stops = select("stops", Object.values(STOPS), STOPS.ZERO);
      const dataTest = text("dataTest", "test");

      return <StopoverArrow stops={stops} dataTest={dataTest} />;
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "In RTL",
    () => {
      const stops = select("stops", Object.values(STOPS), STOPS.THREE);
      const dataTest = text("dataTest", "test");
      return (
        <RenderInRtl>
          <StopoverArrow stops={stops} dataTest={dataTest} />
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
