import React from "react";
import { Seat } from "@kiwicom/orbit-components";

export default {
  Example: () => <Seat />,
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
