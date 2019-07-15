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
      const defaultValue = number("defaultValue", 10);
      return (
        <Slider
          onChange={action("onChange")}
          onChangeAfter={action("onChangeAfter")}
          onBeforeChange={action("onBeforeChange")}
          label={label}
          description={description}
          defaultValue={defaultValue}
        />
      );
    },
    {
      info: "Some description about this type of component.",
    },
  )
  .add(
    "Slider with Histogram",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const defaultValue = number("defaultValue", 10);
      const min = number("min", 1);
      const max = number("max", 24);
      const histogramData = createHistogramData(min, max);
      const [chosenFrom, chosenTo] = calculateCountOf(histogramData, defaultValue, min);
      const chosenText = `${chosenFrom} of ${chosenTo} flights`;
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            onChangeAfter={action("onChangeAfter")}
            onBeforeChange={action("onBeforeChange")}
            label={label}
            description={description}
            chosenText={chosenText}
            defaultValue={defaultValue}
            max={max}
            min={min}
            histogramData={histogramData}
          />
        </div>
      );
    },
    {
      info: "Some description about this type of component.",
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
          onChangeAfter={action("onChangeAfter")}
          onBeforeChange={action("onBeforeChange")}
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
      info: "Some description about this type of component.",
    },
  )
  .add(
    "Range Slider with Histogram",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const defaultValue = array("defaultValue", [110, 115]);
      const min = number("min", 110);
      const max = number("max", 134);
      const step = number("step", 1);
      const histogramData = createHistogramData(min, max);
      const [chosenFrom, chosenTo] = calculateCountOf(histogramData, defaultValue, min);
      const chosenText = `${chosenFrom} of ${chosenTo} flights`;
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            onChangeAfter={action("onChangeAfter")}
            onBeforeChange={action("onBeforeChange")}
            label={label}
            description={description}
            chosenText={chosenText}
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
      info: "Some description about this type of component.",
    },
  );
