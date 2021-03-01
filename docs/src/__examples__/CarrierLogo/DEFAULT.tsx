import * as React from "react";
import { CarrierLogo } from "@kiwicom/orbit-components";

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
  info: {
    title: "Default carrier logo",
    description:
      "By default, carrier logos present a large version of a single logo. When used alone, be sure to pass the name of the carrier. It's best to include the type of carrier to create the right placeholder for missing logos.",
  },
};
