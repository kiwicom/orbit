// @flow
import * as React from "react";

import Stack from "../../Stack";
import Stepper from "../index";
import Heading from "../../Heading";

export default {
  Example: () => (
    <Stack flex align="center">
      <Heading type="title4">Travelers</Heading>
      <div style={{ maxWidth: "10em" }}>
        <Stepper
          defaultValue={2}
          maxValue={10}
          minValue={1}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    </Stack>
  ),
  info: {
    title: "Accessibilty",
    description:
      "Include titles for the increment and decrement buttons so everyone will know what they do.",
  },
};
