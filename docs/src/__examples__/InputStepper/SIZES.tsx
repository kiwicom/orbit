import React from "react";
import { InputStepper, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
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
      <div style={{ maxWidth: "11em" }}>
        <InputStepper
          size="small"
          label="Travelers"
          minValue={1}
          defaultValue={2}
          maxValue={10}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Input steppers can be either normal sized or small.",
  },
};
