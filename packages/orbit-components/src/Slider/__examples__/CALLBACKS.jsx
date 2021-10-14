// @flow
import * as React from "react";

import type { Value } from "../index";
import Heading from "../../Heading";
import Loading from "../../Loading";
import Slider from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const [flightText, setFlightText] = React.useState("");
    const [priceRange, setPriceRange] = React.useState([50]);

    return (
      <Stack direction="row">
        <Stack>
          <Slider
            label="Price"
            minValue={0}
            maxValue={1000}
            valueDescription={`$0–$${priceRange.toString()}`}
            step={50}
            onChange={(sliderValue: Value) => {
              if (typeof sliderValue === "number") setPriceRange(sliderValue);
            }}
            onChangeBefore={() => setFlightText(<Loading type="searchLoader" />)}
            onChangeAfter={() => setFlightText(Math.floor(Math.random() * 230))}
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
