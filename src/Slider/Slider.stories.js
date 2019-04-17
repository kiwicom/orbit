// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { array, text, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Slider from "./index";

const histogramData = {
  "1": 134,
  "2": 110,
  "3": 90,
  "4": 90,
  "5": 90,
  "6": 90,
  "7": 90,
  "8": 90,
  "9": 50,
  "10": 50,
  "11": 30,
  "12": 0,
  "13": 0,
  "14": 0,
  "15": 90,
  "16": 130,
  "17": 156,
  "18": 146,
  "19": 120,
  "20": 10,
  "21": 30,
  "22": 30,
  "23": 30,
};

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
      const defaultValue = array("defaultValue", [100, 250]);
      const min = number("min", 100);
      const max = number("max", 300);
      const step = number("step", 10);
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
      info: "Some description about this type of component.",
    },
  );
