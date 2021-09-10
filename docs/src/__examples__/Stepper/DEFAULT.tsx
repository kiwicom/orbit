import React from "react";
import { Heading, Stepper, Stack } from "@kiwicom/orbit-components";
import { Passengers } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack align="center">
      <Heading type="title4">
        <Stack align="center">
          <Passengers />
          Travelers
        </Stack>
      </Heading>
      <div style={{ maxWidth: "8em" }}>
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
    title: "Default stepper",
    description:
      "By default, steppers allow users to go up to their maximums and down to their minimum and then disables the buttons. It displays the <code>defaultValue</code> on initial mount.",
  },
};
