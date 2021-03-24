import * as React from "react";
import { Slider } from "@kiwicom/orbit-components";

export default {
  Example: () => <Slider label="Volume" minValue={0} maxValue={100} defaultValue={33} />,
  info: {
    title: "Default slider",
    description:
      "A default slider presents a range in between given minimum and maximum values. Always include a label.",
  },
};
