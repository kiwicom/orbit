// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "./consts";
import Stack from "../Stack";

import Seat from "./index";

storiesOf("Seat", module)
  .add(
    "Default",
    () => {
      return <Seat />;
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const dataTest = text("dataTest", "test");
      const size = select("Size", Object.values(SIZE_OPTIONS), "medium");
      return (
        <Stack direction="row">
          <Seat size={size} dataTest={dataTest} />
          <Seat size={size} type="legroom" dataTest={dataTest} />
          <Seat size={size} type="unavailable" dataTest={dataTest} />
          <Seat size={size} type="selected" dataTest={dataTest} />
        </Stack>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );
