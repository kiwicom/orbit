import React from "react";
import { Slider } from "@kiwicom/orbit-components";

export default {
  Example: () => <Slider label="Volume" minValue={0} maxValue={100} defaultValue={33} />,
  exampleKnobs: [
    {
      component: "Slider",
      knobs: [
        { name: "ariaLabel", type: "text", defaultValue: "Volume" },
        { name: "ariaValueText", type: "text", defaultValue: "" },
        { name: "histogramLoading", type: "boolean", defaultValue: false },
        { name: "histogramLoadingText", type: "text", defaultValue: "" },
        { name: "minValue", type: "number", defaultValue: 0 },
        { name: "maxValue", type: "number", defaultValue: 100 },
        { name: "valueDescription", type: "text", defaultValue: "" },
      ],
    },
  ],
};
