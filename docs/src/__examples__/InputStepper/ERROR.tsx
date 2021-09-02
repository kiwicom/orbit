import React from "react";
import { InputStepper } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ maxWidth: "11em" }}>
      <InputStepper
        label="Travelers"
        minValue={1}
        defaultValue={12}
        maxValue={10}
        titleIncrement="Add a traveler"
        titleDecrement="Remove a traveler"
        help="At least 1 and no more than 10 travelers"
        error="Decrease the number of travelers to no more than 10"
      />
    </div>
  ),
  info: {
    title: "Error messages",
    description:
      "Include error messages when validation isn't passed, either on change in focus or form submission. Note that an error message will override any help text.",
  },
};
