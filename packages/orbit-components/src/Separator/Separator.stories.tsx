import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import defaultTheme from "../defaultTheme";

import Separator from ".";

const kebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

const meta: Meta<typeof Separator> = {
  title: "Separator",
  component: Separator,

  parameters: {
    info: "Separator component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    align: "left",
    sideOffset: "none",
    type: "solid",
    spaceAfter: "none",
    color: "border-cloud-normal",
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
    align: {
      options: ["left", "right", "center"],
      control: {
        type: "select",
      },
    },
    sideOffset: {
      options: ["none", "small", "medium", "large", "XLarge", "XXLarge"],
      control: {
        type: "select",
      },
    },
    type: {
      options: ["solid", "dashed", "dotted", "double", "none"],
      control: {
        type: "select",
      },
    },
    color: {
      options: Object.keys(defaultTheme.orbit)
        .filter(t => t.startsWith("palette"))
        .map(c => kebabCase(c.replace("palette", "border"))),
      control: {
        type: "select",
      },
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Separator {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup. Check Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    ...Playground.args,
  },

  argTypes: {
    ...Playground.argTypes,
  },
};
