import * as React from "react";
import { InputStepper } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ maxWidth: "11em" }}>
      <InputStepper
        required
        label="Travelers"
        minValue={1}
        defaultValue={0}
        maxValue={10}
        titleIncrement="Add a traveler"
        titleDecrement="Remove a traveler"
      />
    </div>
  ),
  info: {
    title: "Required",
    description: "To mark an input stepper as required, pass the required prop.",
  },
};
