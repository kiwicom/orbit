import React from "react";
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
};
