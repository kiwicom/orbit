// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { array, text, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";

import Slider from "./index";

storiesOf("Slider", module)
  .add(
    "Default",
    () => {
      const label = text("label", "Depart from Prague");
      const valueDescription = text("valueDescription", "01:00 PM – 11:59 PM");
      const min = number("min", 1);
      const max = number("max", 100);
      const dataTest = text("dataTest", "01:00 PM – 11:59 PM");
      return (
        <Slider
          onChange={action("onChange")}
          label={label}
          valueDescription={valueDescription}
          dataTest={dataTest}
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
      const defaultValue = array("defaultValue", [0, 24]);
      const min = number("min", 0);
      const max = number("max", 48);
      const step = number("step", 2);
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
        11,
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
  )
  .add(
    "Slider playground",
    () => {
      const ariaLabel = text("ariaLabel", "Label of handle");
      const ariaValueText = text("ariaValueText", "Text alternative of actual value");
      const dataTest = text("dataTest", "test");
      const defaultValue = number("defaultValue", 12);
      const label = text("label", "Depart from Prague");
      const max = number("max", 24);
      const min = number("min", 1);
      const step = number("step", 1);
      const histogramData = array("histogramData", [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ]);
      const valueDescription = text("valueDescription", "From midnight to 12:00 pm");
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            ariaLabel={ariaLabel}
            ariaValueText={ariaValueText}
            dataTest={dataTest}
            defaultValue={defaultValue}
            label={label}
            max={max}
            min={min}
            step={step}
            onChange={action("onChange")}
            valueDescription={valueDescription}
          />
          <Slider
            ariaLabel={ariaLabel}
            ariaValueText={ariaValueText}
            dataTest={dataTest}
            defaultValue={defaultValue}
            label={label}
            max={max}
            min={min}
            step={step}
            onChange={action("onChange")}
            valueDescription={valueDescription}
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
    "Range Slider playground",
    () => {
      const ariaLabel = array("ariaLabel", ["First handle", "Second handle"]);
      const ariaValueText = text("ariaValueText", "Text alternative of actual value");
      const dataTest = text("dataTest", "test");
      const defaultValue = number("defaultValue", [1, 12]);
      const histogramData = array("histogramData", [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ]);
      const histogramDescription = text("histogramDescription", "28 of 90 flights");
      const histogramLoading = boolean("histogramLoading", false);
      const histogramLoadingText = text("histogramLoadingText", undefined);
      const label = text("label", "Depart from Prague");
      const max = number("max", 24);
      const min = number("min", 1);
      const step = number("step", 1);
      const valueDescription = text("valueDescription", "From midnight to 12:00 pm");
      return (
        <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
          <Slider
            ariaLabel={ariaLabel}
            ariaValueText={ariaValueText}
            dataTest={dataTest}
            defaultValue={defaultValue}
            histogramData={histogramData}
            histogramDescription={histogramDescription}
            histogramLoading={histogramLoading}
            histogramLoadingText={histogramLoadingText}
            label={label}
            max={max}
            min={min}
            step={step}
            onChange={action("onChange")}
            valueDescription={valueDescription}
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
    "RTL default Slider",
    () => {
      return (
        <RenderInRtl>
          <Slider
            onChange={action("onChange")}
            label="Depart from Prague"
            valueDescription="01:00 PM – 11:59 PM"
            defaultValue={50}
          />
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL Slider with Histogram",
    () => {
      return (
        <RenderInRtl>
          <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
            <Slider
              onChange={action("onChange")}
              label="Depart from Prague"
              valueDescription="01:00 PM – 11:59 PM"
              histogramDescription="20 of 133 flights"
              defaultValue={1}
              max={24}
              min={1}
              histogramData={[
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
              ]}
            />
          </div>
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL Range Slider with Histogram",
    () => {
      return (
        <RenderInRtl>
          <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
            <Slider
              onChange={action("onChange")}
              label="Depart from Prague"
              valueDescription="01:00 PM – 11:59 PM"
              histogramDescription="20 of 133 flights"
              defaultValue={[1, 24]}
              histogramData={[
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
              ]}
              min={1}
              max={24}
            />
          </div>
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL Slider with loading Histogram",
    () => {
      const histogramDescription = text("histogramDescription", "20 of 133 flights");
      const histogramLoading = boolean("histogramLoading", true);
      const histogramLoadingText = text("histogramLoadingText", "Loading connection data...");

      return (
        <RenderInRtl>
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
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
