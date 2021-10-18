// @flow
import * as React from "react";

import StopoverArrow from "../index";

export default {
  Example: (): React.Node => <StopoverArrow stops="2" />,
  info: {
    title: "Default stopover arrow",
    description: "Stopover arrows only require the number of stops.",
  },
};
