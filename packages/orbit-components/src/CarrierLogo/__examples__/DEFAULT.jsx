// @flow
import * as React from "react";

import CarrierLogo from "../index";

export default {
  Example: (): React.Node => (
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
