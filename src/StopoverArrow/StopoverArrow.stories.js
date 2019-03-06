// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import STOPS from "./consts";

import StopoverArrow from "./";

storiesOf("StopoverArrow", module).add("Playground", () => {
  const stops = select("stops", Object.values(STOPS), STOPS.ZERO);
  const dataTest = text("dataTest", "test");

  return <StopoverArrow stops={stops} dataTest={dataTest} />;
});
