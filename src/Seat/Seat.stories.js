// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import Stack from "../Stack";

import Seat from "./index";

storiesOf("Seat", module).add(
  "Playground",
  () => {
    const type = text("Type", null);
    const dataTest = text("dataTest", "test");
    return (
      <Stack direction="row">
        <Seat dataTest={dataTest} />
        <Seat type="legroom" dataTest={dataTest} />
        <Seat type="unavailable" dataTest={dataTest} />
        <Seat type="selected" dataTest={dataTest} />
      </Stack>
    );
  },
  {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
);
