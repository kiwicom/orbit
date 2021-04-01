// @flow
import * as React from "react";

import type { Value } from "../index";
import Slider from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const [priceRange, setPriceRange] = React.useState([50, 250]);
    const [timeRange, setTimeRange] = React.useState([0, 24]);
    return (
      <Stack direction="column">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            <code>ariaLabel</code>
          </Heading>
          <Text>
            The <code>ariaLabel</code> prop adds a label to the controls for the slider so it is
            accessible to those who get only text. If you have two handles, pass an array of
            strings. If you have only one, pass just a string (not an array).
          </Text>
          <Stack direction="column">
            <Stack>
              <Slider
                label="Volume"
                ariaLabel="Volume level"
                minValue={0}
                maxValue={100}
                defaultValue={33}
              />
              <Slider
                label="Price"
                ariaLabel={["Minimum price", "Maximum price"]}
                minValue={0}
                maxValue={1000}
                defaultValue={[50, 250]}
                valueDescription={`$${priceRange[0]}–$${priceRange[1]}`}
                onChange={(sliderValue: Value) => {
                  if (typeof sliderValue === "object") setPriceRange(sliderValue);
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            <code>ariaValueText</code>
          </Heading>
          <Text>
            When you have values that cannot be represented as a pure number (such as a range of
            times of day), use <code>ariaValueText</code> to make that value accessible to everyone.
          </Text>
          <Stack>
            <Slider
              ariaValueText={`${timeRange[0]}:00–${timeRange[1]}:00`}
              label="Departure time"
              ariaLabel={["Earliest departure", "Latest departure"]}
              minValue={0}
              maxValue={24}
              step={1}
              defaultValue={[0, 24]}
              valueDescription={`${timeRange[0]}:00–${timeRange[1]}:00`}
              onChange={(sliderValue: Value) => {
                if (typeof sliderValue === "object") setTimeRange(sliderValue);
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Accessibility",
    description:
      'See your options for making sure all of your sliders are accessible to everyone. Read <a href="https://orbit.kiwi/accessibility/accessibility/">more about accessibility</a>. Always include a label.',
  },
};
