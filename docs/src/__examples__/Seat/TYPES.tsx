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
      name: "default",
      code: "() => <Seat />",
    },
    {
      name: "legroom",
      code: `() => <Seat type="legroom" />`,
    },
    {
      name: "unavailable",
      code: `() => <Seat type="unavailable" />`,
    },
  ],
};
