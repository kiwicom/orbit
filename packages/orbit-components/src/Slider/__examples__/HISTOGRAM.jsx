// @flow
import * as React from "react";

import Slider from "../index";
import calculateCountOf from "../utils/calculateCountOf";
import type { Value } from "../index";

const randomArray =
  process.env.NODE_ENV === "loki"
    ? // in visual regression testing we need to always use the same array to avoid flakiness
      [12, 23, 29, 11, 12, 11, 22, 39, 25, 31, 22, 36, 14, 39, 37, 14, 1, 24, 23, 21]
    : Array.from({ length: 20 }, () => Math.floor(Math.random() * 40));
const availableFlights = [0, ...randomArray];

export default {
  Example: (): React.Node => {
    const [priceRange, setPriceRange] = React.useState([50, 250]);
    const step = 50;
    const [selectedFlights, totalFlights] = calculateCountOf(
      availableFlights,
      priceRange.map(x => x / step),
      0,
    );
    return (
      <Slider
        histogramData={availableFlights}
        histogramDescription={`${selectedFlights} of ${totalFlights} flights`}
        defaultValue={[50, 250]}
        ariaLabel={["Minimum price", "Maximum price"]}
        label="Price"
        minValue={0}
        step={step}
        maxValue={1000}
        valueDescription={`$${priceRange[0]}–$${priceRange[1]}`}
        onChange={(sliderValue: Value) => {
          if (typeof sliderValue === "object") setPriceRange(sliderValue);
        }}
      />
    );
  },
  info: {
    title: "Histogram",
    description:
      "To let users see how much is contained within their selected range, use a histogram to display it visually. Just remember to include non-visual information as well. Use <code>calculatedCountOf</code> to help generate the selected results.",
  },
};
