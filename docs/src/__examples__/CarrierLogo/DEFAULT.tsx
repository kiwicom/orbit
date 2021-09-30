import React from "react";
import { CarrierLogo } from "@kiwicom/orbit-components";

/* prettier-ignore */
export default {
  Example: () => (
    <CarrierLogo
      carriers={[
        {
          code: "OK",
          type: "airline",
          name: "Czech Airlines",
        },
      ]}
    />
  ),
  exampleKnobs: [
    {
      component: "CarrierLogo",
      knobs: [
        {
          name: "carriers",
          type: "object",
          defaultValue: [{
            "code": "OK",
            "type": "airline",
            "name": "Czech Airlines",
          }],
        },
      ],
    },
  ],
};
