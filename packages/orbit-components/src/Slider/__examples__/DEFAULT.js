// @flow
import * as React from "react";

import Slider from "../index";

export default {
  Example: (): React.Node => <Slider label="Volume" minValue={0} maxValue={100} defaultValue={33} />,
  info: {
    title: "Default slider",
    description:
      "A default slider presents a range in between given minimum and maximum values. Always include a label.",
  },
};
