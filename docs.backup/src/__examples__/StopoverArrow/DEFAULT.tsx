import React from "react";
import { OrbitProvider, StopoverArrow, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <StopoverArrow stops="2" />
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "StopoverArrow",
      knobs: [
        {
          name: "stops",
          type: "select",
          defaultValue: "2",
          options: ["0", "1", "2", "3"],
        },
      ],
    },
  ],
};
