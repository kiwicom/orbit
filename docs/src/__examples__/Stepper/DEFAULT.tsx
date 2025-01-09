import React from "react";
import { Heading, Stepper, Stack, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";
import { Passengers } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <Stack align="center" spacing="400" desktop={{ spacing: "600" }}>
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
    </OrbitProvider>
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
      ],
    },
  ],
};
