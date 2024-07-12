import * as React from "react";
import { action } from "@storybook/addon-actions";

import type { Value } from "./types";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Slider from ".";

export default {
  title: "Slider",
};

export const Default = ({ label, valueDescription, minValue, maxValue, dataTest }) => {
  return (
    <Slider
      onChange={action("onChange")}
      label={label}
      valueDescription={valueDescription}
      dataTest={dataTest}
      minValue={minValue}
      maxValue={maxValue}
    />
  );
};

Default.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Default.args = {
  label: "Depart from Prague",
  valueDescription: "01:00 PM – 11:59 PM",
  minValue: 1,
  maxValue: 100,
  dataTest: "01:00 PM – 11:59 PM",
};

export const SliderWithHistogram = ({
  label,
  valueDescription,
  histogramDescription,
  defaultValue,
  minValue,
  maxValue,
  histogramData,
}) => {
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        onChange={action("onChange")}
        label={label}
        valueDescription={valueDescription}
        histogramDescription={histogramDescription}
        defaultValue={defaultValue}
        maxValue={maxValue}
        minValue={minValue}
        histogramData={histogramData.map(v => parseInt(v, 10))}
      />
    </div>
  );
};

SliderWithHistogram.story = {
  name: "Slider with Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

SliderWithHistogram.args = {
  label: "Depart from Prague",
  valueDescription: "01:00 PM – 11:59 PM",
  defaultValue: 12,
  minValue: 1,
  maxValue: 24,
  histogramData: [
    11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2,
  ].map(v => v.toString()),
  histogramDescription: "20 of 133 flights",
};

export const RangeSlider = ({ label, defaultValue, minValue, maxValue, step }) => {
  const [times, setTimes] = React.useState<Value>(defaultValue);
  const valueDescription = `${times[0]}:00 - ${times[1]}:00`;

  return (
    <Slider
      onChangeAfter={action("onChangeAfter")}
      onChange={v => {
        setTimes(v);
        action("onChange")(v);
      }}
      label={label}
      valueDescription={valueDescription}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
    />
  );
};

RangeSlider.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RangeSlider.args = {
  label: "Depart from Prague",
  defaultValue: ["1", "5"].map(v => parseInt(v, 10)),
  minValue: 1,
  maxValue: 24,
  step: 1,
};

export const RangeSliderWithHistogram = ({
  label,
  defaultValue,
  histogramData,
  histogramDescription,
  minValue,
  maxValue,
  step,
}) => {
  const [times, setTimes] = React.useState<Value>(defaultValue);
  const valueDescription = `${times[0]}:00 - ${times[1]}:00`;
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        onChange={v => {
          setTimes(v);
          action("onChange")(v);
        }}
        label={label}
        valueDescription={valueDescription}
        histogramDescription={histogramDescription}
        defaultValue={defaultValue}
        histogramData={histogramData.map(v => parseInt(v, 10))}
        minValue={minValue}
        maxValue={maxValue}
        step={step}
      />
    </div>
  );
};

RangeSliderWithHistogram.story = {
  name: "Range Slider with Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RangeSliderWithHistogram.args = {
  label: "Depart from Prague",
  defaultValue: ["0", "24"].map(v => parseInt(v, 10)),
  minValue: 0,
  maxValue: 48,
  step: 2,
  histogramData: [
    11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11,
  ].map(v => v.toString()),
  histogramDescription: "20 of 133 flights",
};

export const SliderWithLoadingHistogram = ({
  histogramDescription,
  histogramLoading,
  histogramLoadingText,
}) => {
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
        minValue={1}
        maxValue={24}
      />
    </div>
  );
};

SliderWithLoadingHistogram.story = {
  name: "Slider with loading Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

SliderWithLoadingHistogram.args = {
  histogramDescription: "20 of 133 flights",
  histogramLoading: true,
  histogramLoadingText: "Loading connection data...",
};

export const RangeSliderWithLoadingHistogram = ({
  histogramDescription,
  histogramLoading,
  histogramLoadingText,
}) => {
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
        minValue={1}
        maxValue={24}
      />
    </div>
  );
};

RangeSliderWithLoadingHistogram.story = {
  name: "Range Slider with loading Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RangeSliderWithLoadingHistogram.args = {
  histogramDescription: "20 of 133 flights",
  histogramLoading: true,
  histogramLoadingText: "Loading connection data...",
};

export const SliderPlayground = ({
  ariaLabel,
  ariaValueText,
  dataTest,
  defaultValue,
  label,
  maxValue,
  minValue,
  step,
  valueDescription,
}) => {
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        ariaLabel={ariaLabel}
        ariaValueText={ariaValueText}
        dataTest={dataTest}
        defaultValue={defaultValue}
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        onChange={action("onChange")}
        onChangeBefore={action("onChangeBefore")}
        onChangeAfter={action("onChangeAfter")}
        valueDescription={valueDescription}
      />
    </div>
  );
};

SliderPlayground.story = {
  name: "Slider playground",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

SliderPlayground.args = {
  ariaLabel: "Label of handle",
  ariaValueText: "Text alternative of actual value",
  dataTest: "test",
  defaultValue: 12,
  label: "Depart from Prague",
  maxValue: 24,
  minValue: 1,
  step: 1,
  valueDescription: "From midnight to 12:00 pm",
};

export const RangeSliderPlayground = ({
  ariaLabel,
  ariaValueText,
  dataTest,
  defaultValue,
  histogramData,
  histogramDescription,
  histogramLoading,
  histogramLoadingText,
  label,
  maxValue,
  minValue,
  step,
  valueDescription,
}) => {
  return (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider
        ariaLabel={ariaLabel}
        ariaValueText={ariaValueText}
        dataTest={dataTest}
        defaultValue={defaultValue.map(v => parseInt(v, 10))}
        histogramData={histogramData.map(v => parseInt(v, 10))}
        histogramDescription={histogramDescription}
        histogramLoading={histogramLoading}
        histogramLoadingText={histogramLoadingText}
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        onChange={action("onChange")}
        onChangeBefore={action("onChangeBefore")}
        onChangeAfter={action("onChangeAfter")}
        valueDescription={valueDescription}
      />
    </div>
  );
};

RangeSliderPlayground.story = {
  name: "Range Slider playground",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RangeSliderPlayground.args = {
  ariaLabel: ["First handle", "Second handle"],
  ariaValueText: "Text alternative of actual value",
  dataTest: "test",
  defaultValue: [1, 12].map(v => v.toString()),
  histogramData: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  ].map(v => v.toString()),
  histogramDescription: "28 of 90 flights",
  histogramLoading: false,
  histogramLoadingText: "",
  label: "Depart from Prague",
  maxValue: 24,
  minValue: 1,
  step: 1,
  valueDescription: "From midnight to 12:00 pm",
};

export const RtlDefaultSlider = () => {
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
};

RtlDefaultSlider.story = {
  name: "RTL default Slider",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlSliderWithHistogram = () => {
  return (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider
          onChange={action("onChange")}
          label="Depart from Prague"
          valueDescription="01:00 PM – 11:59 PM"
          histogramDescription="20 of 133 flights"
          defaultValue={1}
          maxValue={24}
          minValue={1}
          histogramData={[
            11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22,
            2,
          ]}
        />
      </div>
    </RenderInRtl>
  );
};

RtlSliderWithHistogram.story = {
  name: "RTL Slider with Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlRangeSliderWithHistogram = () => {
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
            11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22,
            2,
          ]}
          minValue={1}
          maxValue={24}
        />
      </div>
    </RenderInRtl>
  );
};

RtlRangeSliderWithHistogram.story = {
  name: "RTL Range Slider with Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlSliderWithLoadingHistogram = ({
  histogramDescription,
  histogramLoading,
  histogramLoadingText,
}) => {
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
          minValue={1}
          maxValue={24}
        />
      </div>
    </RenderInRtl>
  );
};

RtlSliderWithLoadingHistogram.story = {
  name: "RTL Slider with loading Histogram",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RtlSliderWithLoadingHistogram.args = {
  histogramDescription: "20 of 133 flights",
  histogramLoading: true,
  histogramLoadingText: "Loading connection data...",
};
