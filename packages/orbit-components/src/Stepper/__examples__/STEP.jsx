// @flow
import * as React from "react";

import Stack from "../../Stack";
import Stepper from "../index";
import Heading from "../../Heading";

export default {
  Example: (): React.Node => (
    <Stack flex align="center">
      <Heading type="title4">Minutes between journeys</Heading>
      <div style={{ maxWidth: "10em" }}>
        <Stepper
          step={15}
          defaultValue={30}
          maxValue={180}
          minValue={15}
          titleIncrement="Add 15 minutes"
          titleDecrement="Subtract 15 minutes"
        />
      </div>
    </Stack>
  ),
  info: {
    title: "Step",
    description: "To increment by a number other than 1, use the <code>step</code> prop.",
  },
};
