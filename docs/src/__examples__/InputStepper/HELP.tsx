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
        help="At least 1 and no more than 10 travelers"
      />
    </div>
  ),
};
