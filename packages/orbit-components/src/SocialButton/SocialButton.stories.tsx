import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import SocialButton from ".";

const meta: Meta<typeof SocialButton> = {
  title: "SocialButton",
  component: SocialButton,

  args: {
    type: TYPE_OPTIONS.APPLE,
    size: "normal",
    fullWidth: false,
    disabled: false,
    onClick: action("clicked"),
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "normal", "large"],
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    controls: { exclude: ["onClick"] },
  },
};

export default meta;
type Story = StoryObj<typeof SocialButton>;

export const Playground: Story = {
  render: ({ type, ...args }) => (
    <SocialButton type={type} {...args}>{`Sign in with ${type}`}</SocialButton>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <SocialButton {...args}>Button</SocialButton>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
