import type { Meta, StoryObj } from "@storybook/react";

import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

import ServiceLogo from ".";

const meta: Meta<typeof ServiceLogo> = {
  title: "ServiceLogo",
  component: ServiceLogo,

  parameters: {
    info: "All possible options for ServiceLogo. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    name: NAME_OPTIONS.AIRHELP,
    size: SIZE_OPTIONS.MEDIUM,
    grayScale: false,
    id: "ID",
  },

  argTypes: {
    name: {
      options: Object.values(NAME_OPTIONS),
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceLogo>;

export const Playground: Story = {};
