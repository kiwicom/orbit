import React from "react";
import { Slider } from "@kiwicom/orbit-components";

export default {
  Example: () => <Slider label="Volume" minValue={0} maxValue={100} defaultValue={33} />,
  exampleKnobs: [
    {
      component: "Slider",
      knobs: [
        { name: "histogramLoading", type: "boolean", defaultValue: false },
        { name: "histogramLoadingText", type: "text", defaultValue: "" },
        { name: "defaultValue", type: "number", defaultValue: 33 },
        { name: "minValue", type: "number", defaultValue: 0 },
        { name: "maxValue", type: "number", defaultValue: 100 },
      ],
    },
  ],
};
