import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import STOPS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import StopoverArrow from ".";

const meta: Meta<typeof StopoverArrow> = {
  title: "StopoverArrow",
  component: StopoverArrow,

  args: {
    stops: STOPS.ZERO,
    id: "ID",
  },

  argTypes: {
    stops: {
      options: Object.values(STOPS),
      control: {
        type: "select",
      },
    },
  },
};

type Story = StoryObj<typeof StopoverArrow>;

export default meta;

export const Playground: Story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <StopoverArrow {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of StopoverArrow component in RTL setup.",
  },
};
