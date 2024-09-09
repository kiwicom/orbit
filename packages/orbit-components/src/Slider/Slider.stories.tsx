import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import type { Value } from "./types";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Slider from ".";

const meta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,

  args: {
    label: "Depart from Prague",
    valueDescription: "01:00 PM – 11:59 PM",
    minValue: 1,
    maxValue: 100,
    step: 1,
    defaultValue: 1,
    onChange: action("onChange"),
    onChangeAfter: action("onChangeAfter"),
    onChangeBefore: action("onChangeBefore"),
  },

  parameters: {
    controls: {
      exclude: ["onChange", "onChangeAfter", "onChangeBefore"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const SliderWithHistogram: Story = {
  render: args => (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider {...args} />
    </div>
  ),

  args: {
    defaultValue: 12,
    maxValue: 24,
    histogramData: [
      11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2,
    ],
    histogramDescription: "20 of 133 flights",
  },
};

export const RangeSlider: Story = {
  render: ({ defaultValue, ...args }) => {
    const [times, setTimes] = React.useState<Value>(defaultValue as Value);
    const valueDescription = `${times[0]}:00 - ${times[1]}:00`;

    return (
      <Slider
        {...args}
        onChange={v => {
          setTimes(v);
          action("onChange")(v);
        }}
        defaultValue={defaultValue}
        valueDescription={valueDescription}
      />
    );
  },

  parameters: {
    controls: {
      exclude: ["onChange", "onChangeAfter", "onChangeBefore", "valueDescription"],
    },
  },

  args: {
    defaultValue: [1, 5],
    maxValue: 24,
  },
};

export const RangeSliderWithHistogram: Story = {
  render: ({ defaultValue, ...args }) => {
    const [times, setTimes] = React.useState<Value>(defaultValue as Value);
    const valueDescription = `${times[0]}:00 - ${times[1]}:00`;

    return (
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider
          {...args}
          onChange={v => {
            setTimes(v);
            action("onChange")(v);
          }}
          defaultValue={defaultValue}
          valueDescription={valueDescription}
        />
      </div>
    );
  },

  parameters: {
    controls: {
      exclude: ["onChange", "onChangeAfter", "onChangeBefore", "valueDescription"],
    },
  },

  args: {
    minValue: 0,
    maxValue: 48,
    step: 2,
    defaultValue: [0, 24],
    histogramData: [
      11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2, 11, 25, 37, 5, 21, 27, 24, 33, 16, 21, 22, 2,
      11,
    ],
    histogramDescription: "20 of 133 flights",
  },
};

export const SliderWithLoadingHistogram: Story = {
  render: args => (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider {...args} />
    </div>
  ),

  args: {
    ...SliderWithHistogram.args,
    histogramLoading: true,
    histogramLoadingText: "Loading connection data...",
  },
};

export const RangeSliderWithLoadingHistogram: Story = {
  render: args => (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider {...args} />
    </div>
  ),

  args: {
    ...SliderWithLoadingHistogram.args,
    defaultValue: [1, 10],
  },
};

export const SliderPlayground: Story = {
  render: args => (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider {...args} />
    </div>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["onChange", "onChangeAfter", "onChangeBefore"],
    },
  },

  args: {
    ...SliderWithLoadingHistogram.args,
    ariaLabel: "Label of handle",
    ariaValueText: "Text alternative of actual value",
    valueDescription: "From midnight to 12:00 pm",
    id: "ID",
  },
};

export const RangeSliderPlayground: Story = {
  render: args => (
    <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
      <Slider {...args} />
    </div>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    ariaLabel: ["First handle", "Second handle"],
    ariaValueText: "Text alternative of actual value",
    defaultValue: [1, 12],
    histogramData: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    ],
    histogramDescription: "28 of 90 flights",
    histogramLoading: false,
    histogramLoadingText: "",
    maxValue: 24,
    valueDescription: "From midnight to 12:00 pm",
    id: "ID",
  },
};

export const RtlDefaultSlider: Story = {
  render: args => (
    <RenderInRtl>
      <Slider {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    defaultValue: 50,
  },
};

export const RtlSliderWithHistogram: Story = {
  render: args => (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider {...args} />
      </div>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    ...SliderWithHistogram.args,
  },
};

export const RtlRangeSliderWithHistogram: Story = {
  render: args => (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider {...args} />
      </div>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    ...RangeSliderWithHistogram.args,
  },
};

export const RtlSliderWithLoadingHistogram: Story = {
  render: args => (
    <RenderInRtl>
      <div style={{ backgroundColor: "#f1f5f7", padding: "24px" }}>
        <Slider {...args} />
      </div>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    ...SliderWithLoadingHistogram.args,
  },
};
