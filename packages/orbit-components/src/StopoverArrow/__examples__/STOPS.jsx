// @flow
import * as React from "react";

import StopoverArrow from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <StopoverArrow stops="0" />
      <StopoverArrow stops="1" />
      <StopoverArrow stops="2" />
      <StopoverArrow stops="3" />
    </Stack>
  ),
  info: {
    title: "Stops",
    description: "Stopover arrows can display from 0 to 3 stops.",
  },
};
