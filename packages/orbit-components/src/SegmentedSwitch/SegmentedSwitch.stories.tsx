import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import SegmentedSwitch from ".";

const meta: Meta<typeof SegmentedSwitch> = {
  title: "SegmentedSwitch",
  component: SegmentedSwitch,

  parameters: {
    info: "SegmentedSwitch component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onFocus", "ariaLabel", "ariaLabelledby"],
    },
  },

  args: {
    label: "Gender",
    help: "When Chuck Norris plays dodgeball, the balls dodge him.",
    error: "Chuck Norris makes onions cry.",
    maxWidth: "20%",
    showTooltip: false,
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
    ],
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    spaceAfter: SPACINGS_AFTER.NORMAL,
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SegmentedSwitch>;

export const Playground: Story = {};

export const Rtl: Story = {
  render: args => {
    return (
      <RenderInRtl>
        <SegmentedSwitch {...args} />
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
