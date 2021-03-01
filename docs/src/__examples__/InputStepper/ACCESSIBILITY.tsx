import * as React from "react";
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
    title: "Accessibilty",
    description:
      "Include a label with the input stepper so it's clear what is being incremented. Include titles for the increment and decrement buttons so everyone will know what they do.",
  },
};
