import React from "react";
import { InputStepper } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ maxWidth: "11em" }}>
      <InputStepper
        label="Travelers"
        minValue={1}
        defaultValue={2}
        maxValue={10}
        titleIncrement="Add a traveler"
        titleDecrement="Remove a traveler"
      />
    </div>
  ),
  info: {
    title: "Default input stepper",
    description:
      "By default, input steppers allow users to go up to their maximums and down to their minimum and then disables the buttons. It displays the <code>defaultValue</code> on initial mount.",
  },
};
