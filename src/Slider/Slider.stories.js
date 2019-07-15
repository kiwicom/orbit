// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { array, text, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Slider from "./index";

const histogramData = [
  0,
  0,
  10,
  0,
  20,
  0,
  0,
  73,
  6,
  51,
  35,
  11,
  36,
  0,
  3,
  0,
  0,
  2,
  0,
  0,
  114,
  0,
  0,
  80,
];

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
          step={5}
        />
      );
    },
    {
      info: "Some description about this type of component.",
    },
  )
  .add(
    "Range",
    () => {
      const label = text("label", "Depart from Prague");
      const description = text("description", "01:00 PM – 11:59 PM");
      const chosenText = text("chosenText", "86 of 97 flights");
      const defaultValue = array("defaultValue", [1, 12, 20]);
      const min = number("min", 1);
      const max = number("max", 24);
      const step = number("step", 1);
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
