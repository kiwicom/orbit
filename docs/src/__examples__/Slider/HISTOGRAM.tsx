import React from "react";
import { calculateCountOf, Slider } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    // the numbers are just random so no need to make them pretty
    // eslint-disable-next-line prettier/prettier
    const availableFlights = [
      5,
      29,
      28,
      7,
      13,
      7,
      16,
      12,
      8,
      39,
      13,
      7,
      20,
      38,
      15,
      18,
      28,
      14,
      23,
      24,
      10,
    ];

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
        onChange={sliderValue => {
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
