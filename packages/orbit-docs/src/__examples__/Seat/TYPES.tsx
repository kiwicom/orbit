import React from "react";
import { Seat } from "@kiwicom/orbit-components";

export default {
  Example: () => <Seat />,
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
