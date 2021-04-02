// @flow
import * as React from "react";

import FeatureIcon from "../index";

export default {
  Example: (): React.Node => <FeatureIcon name="TicketStandard" />,
  info: {
    title: "Default feature icon",
    description:
      "By default, the icon is displayed with the name of the feature as the alternative text.",
  },
};
