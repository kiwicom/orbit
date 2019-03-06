// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import STOPS from "./consts";

import StopoverArrow from "./";

storiesOf("StopoverArrow", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Playground", () => {
    const stops = select("stops", Object.values(STOPS), STOPS.ZERO);
    const dataTest = text("dataTest", "test");

    return <StopoverArrow stops={stops} dataTest={dataTest} />
  });
