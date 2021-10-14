// @flow
import * as React from "react";

import ServiceLogo from "../index";

export default {
  Example: (): React.Node => <ServiceLogo name="NewYorkTimes" />,
  info: {
    title: "Default service logo",
    description:
      "By default, carrier logos present a medium version of a logo. The name of the service is included as the alternative text.",
  },
};
