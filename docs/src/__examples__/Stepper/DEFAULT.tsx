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
        <Stepper defaultValue={2} maxValue={10} minValue={1} />
      </div>
    </Stack>
  ),
  exampleKnobs: [
    {
      component: "Stepper",
      knobs: [
        { name: "defaultValue", type: "number", defaultValue: 2 },
        { name: "minValue", type: "number", defaultValue: 1 },
        { name: "maxValue", type: "number", defaultValue: 10 },
        { name: "step", type: "number", defaultValue: 1 },
        { name: "disabled", type: "boolean", defaultValue: false },
        {
          name: "size",
          type: "select",
          options: ["small", "normal", "large"],
          defaultValue: "small",
        },
      ],
    },
  ],
};
