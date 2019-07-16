// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { array, text, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import calculateCountOf from "./utils/calculateCountOf";

import Slider from "./index";

const createHistogramData = (min, max) =>
  Array(...Array(max - min + 1)).map(() => Math.floor(Math.random() * 40));

storiesOf("Slider", module)
  .add(
    "Default",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const min = number("min", 1);
      const max = number("max", 24);
      return (
        <Slider
          onChange={action("onChange")}
          label={label}
          description={description}
          min={min}
          max={max}
        />
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Slider with Histogram",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const defaultValue = number("defaultValue", 12);
      const min = number("min", 1);
      const max = number("max", 24);
      const histogramData = createHistogramData(min, max);
      const [chosenFrom, chosenTo] = calculateCountOf(histogramData, defaultValue, min);
      const leftDescription = `${chosenFrom} of ${chosenTo} flights`;
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            label={label}
            description={description}
            leftDescription={leftDescription}
            defaultValue={defaultValue}
            max={max}
            min={min}
            histogramData={histogramData}
          />
        </div>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Range Slider",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const defaultValue = array("defaultValue", [110, 115]);
      const min = number("min", 110);
      const max = number("max", 134);
      const step = number("step", 1);
      return (
        <Slider
          onChange={action("onChange")}
          label={label}
          description={description}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
        />
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Range Slider with Histogram",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const defaultValue = array("defaultValue", [12, 24]);
      const min = number("min", 1);
      const max = number("max", 24);
      const step = number("step", 1);
      const histogramData = createHistogramData(min, max);
      const [chosenFrom, chosenTo] = calculateCountOf(histogramData, defaultValue, min);
      const leftDescription = `${chosenFrom} of ${chosenTo} flights`;
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            onChangeAfter={action("onChangeAfter")}
            onBeforeChange={action("onBeforeChange")}
            label={label}
            description={description}
            leftDescription={leftDescription}
            defaultValue={defaultValue}
            histogramData={histogramData}
            min={min}
            max={max}
            step={step}
          />
        </div>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
