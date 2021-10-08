// @flow
import * as React from "react";

import Slider from "../index";
import type { Value } from "../index";

export default {
  Example: (): React.Node => {
    const [priceRange, setPriceRange] = React.useState([0, 250]);
    return (
      <Slider
        defaultValue={[0, 250]}
        ariaLabel={["Minimum price", "Maximum price"]}
        label="Price"
        minValue={0}
        maxValue={1000}
        valueDescription={`$${priceRange[0]}–$${priceRange[1]}`}
        onChange={(sliderValue: Value) => {
          if (typeof sliderValue === "object") setPriceRange(sliderValue);
        }}
      />
    );
  },
  info: {
    title: "Two handles",
    description:
      "To let users select a range of values, pass an array to the <code>defaultValue</code>. Label both ends by passing an array of strings to <code>ariaLabel</code>.",
  },
};
