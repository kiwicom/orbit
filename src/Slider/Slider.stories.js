// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { array, text, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import calculateCountOf from "./utils/calculateCountOf";

import Slider from "./index";

storiesOf("Slider", module)
  .add(
    "Default",
    () => {
      const label = text("label", "Depart from Prague");
      const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
      const min = number("min", 1);
      const max = number("max", 24);
      return (
        <Slider
          onChange={action("onChange")}
          label={label}
          valueDescription={valueDescription}
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
      const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
      const defaultValue = number("defaultValue", 12);
      const min = number("min", 1);
      const max = number("max", 24);
      const histogramData = array("histogramData", [
        11,
        25,
        37,
        5,
        21,
        27,
        24,
        33,
        16,
        21,
        22,
        2,
        11,
        25,
        37,
        5,
        21,
        27,
        24,
        33,
        16,
        21,
        22,
        2,
      ]);
      const histogramDescription = text("histogramDescription", "20 of 133 flights");
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            label={label}
            valueDescription={valueDescription}
            histogramDescription={histogramDescription}
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
      const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
      const defaultValue = array("defaultValue", [1, 5]);
      const min = number("min", 1);
      const max = number("max", 24);
      const step = number("step", 1);
      return (
        <Slider
          onChange={action("onChange")}
          label={label}
          valueDescription={valueDescription}
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
      const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
      const defaultValue = array("defaultValue", [12, 24]);
      const min = number("min", 1);
      const max = number("max", 24);
      const step = number("step", 1);
      const histogramData = array("histogramData", [
        11,
        25,
        37,
        5,
        21,
        27,
        24,
        33,
        16,
        21,
        22,
        2,
        11,
        25,
        37,
        5,
        21,
        27,
        24,
        33,
        16,
        21,
        22,
        2,
      ]);
      const histogramDescription = text("histogramDescription", "20 of 133 flights");
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            label={label}
            valueDescription={valueDescription}
            histogramDescription={histogramDescription}
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
  )
  .add(
    "Slider with loading Histogram",
    () => {
      const histogramDescription = text("histogramDescription", "20 of 133 flights");
      const histogramLoading = boolean("histogramLoading", true);
      const histogramLoadingText = text("histogramLoadingText", "Loading connection data...");

      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            label="Depart from Prague"
            valueDescription="01:00 PM – 11:59 PM"
            histogramDescription={histogramDescription}
            defaultValue={5}
            histogramLoading={histogramLoading}
            histogramLoadingText={histogramLoadingText}
            min={1}
            max={24}
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
    "Range Slider with loading Histogram",
    () => {
      const histogramDescription = text("histogramDescription", "20 of 133 flights");
      const histogramLoading = boolean("histogramLoading", true);
      const histogramLoadingText = text("histogramLoadingText", "Loading connection data...");

      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            onChange={action("onChange")}
            label="Depart from Prague"
            valueDescription="01:00 PM – 11:59 PM"
            histogramDescription={histogramDescription}
            defaultValue={[1, 10]}
            histogramLoading={histogramLoading}
            histogramLoadingText={histogramLoadingText}
            min={1}
            max={24}
          />
        </div>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
