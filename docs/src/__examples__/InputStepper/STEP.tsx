import * as React from "react";
import { InputStepper } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ maxWidth: "11em" }}>
      <InputStepper
        step={15}
        defaultValue={30}
        maxValue={180}
        minValue={15}
        label="Minutes between journeys"
        titleIncrement="Add 15 minutes"
        titleDecrement="Subtract 15 minutes"
      />
    </div>
  ),
  info: {
    title: "Step",
    description: "To increment by a number other than 1, use the <code>step</code> prop.",
  },
};
