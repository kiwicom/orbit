import React from "react";
import { Heading, Stack, Loading, Slider, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [flightText, setFlightText] = React.useState<React.ReactNode>("");
    const [priceRange, setPriceRange] = React.useState<number[]>([50]);

    return (
      <Stack direction="row">
        <Stack>
          <Slider
            label="Price"
            minValue={0}
            maxValue={1000}
            valueDescription={`$0–$${priceRange.toString()}`}
            step={50}
            onChange={sliderValue => {
              // @ts-expect-error type
              if (typeof sliderValue === "number") setPriceRange(sliderValue);
            }}
            onChangeBefore={() => setFlightText(<Loading type="searchLoader" />)}
            onChangeAfter={() => setFlightText(Math.floor(Math.random() * 230).toString())}
          />
        </Stack>
        <Stack>
          <Heading type="title3">Available flights</Heading>
          <Text>{flightText}</Text>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Callbacks",
    description:
      "Use <code>onChange</code> for updating the selected values. If you want to take other actions when the user starts or finishes selecting (such as updating a different part of the UI), use <code>onChangeBefore</code> and <code>onChangeAfter</code>.",
  },
};
