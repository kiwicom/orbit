import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import defaultTheme from "../defaultTheme";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import Skeleton from ".";

enum PRESETS {
  List = "List",
  Image = "Image",
  Card = "Card",
  Button = "Button",
  Text = "Text",
}

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,

  args: {
    title: "Loading",
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Custom: Story = {
  render: args => (
    <Skeleton {...args}>
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </Skeleton>
  ),

  args: {
    height: "100px",
    viewBox: "0 0 500 100",
    width: "500px",
  },
};

export const Presets: Story = {
  args: {
    preset: PRESETS.List,
  },

  argTypes: {
    preset: {
      options: Object.values(PRESETS),
      control: {
        type: "select",
      },
    },
  },
};

export const Playground: Story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    ...Custom.args,
    animate: true,
    rowBorderRadius: 3,
    rowHeight: 21,
    rowOffset: 30,
    rows: 10,
    maxHeight: "",
    color: "",
    spaceAfter: SPACINGS_AFTER.NONE,
    id: "ID",
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
    color: {
      options: Object.keys(defaultTheme.orbit).filter(t => t.startsWith("palette")),
      control: {
        type: "select",
      },
    },
  },
};

export const RTL: Story = {
  render: () => (
    <RenderInRtl>
      <Skeleton height="100px" width="500px" viewBox="0 0 500 100">
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
      </Skeleton>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
