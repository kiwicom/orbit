import React from "react";
import { CarrierLogo, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
        ]}
      />
    </OrbitProvider>
  ),
};
