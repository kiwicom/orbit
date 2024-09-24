import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import * as Icons from "../icons";

import Switch from ".";

const getIcon = (source: string) => Icons[source];

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,

  args: {
    checked: false,
    onChange: action("onChange"),
  },

  parameters: {
    info: "Explore Switch component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const CustomIcon: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return <Switch {...args} icon={Icon && <Icon />} />;
  },

  args: {
    checked: true,
    icon: "Lock",
  },

  argTypes: {
    icon: {
      options: [undefined, ...Object.keys(Icons)],
      control: {
        type: "select",
      },
    },
  },
};

export const Playground: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return <Switch {...args} icon={Icon && <Icon />} />;
  },

  args: {
    ...CustomIcon.args,
    id: "switch-id",
    ariaLabelledby: "aria-labelledby",
    disabled: false,
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },

  argTypes: {
    ...CustomIcon.argTypes,
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["onChange", "onFocus", "onBlur"],
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Switch {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
