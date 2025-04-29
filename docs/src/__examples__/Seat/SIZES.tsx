import React from "react";
import { OrbitProvider, Seat, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Seat />
    </OrbitProvider>
  ),
  exampleVariants: [
    {
      name: "small",
      code: `() => <Seat size="small" />`,
    },
    {
      name: "medium",
      code: `() => <Seat size="normal" />`,
    },
  ],
};
