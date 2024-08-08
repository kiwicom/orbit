import type { Meta, StoryObj } from "@storybook/react";

import { NAME_OPTIONS } from "./consts";

import FeatureIcon from ".";

const meta: Meta<typeof FeatureIcon> = {
  title: "FeatureIcon",
  component: FeatureIcon,

  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    name: NAME_OPTIONS.TICKETFLEXI,
    alt: "Ticket Flexi",
  },

  argTypes: {
    name: {
      options: Object.values(NAME_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureIcon>;

export const Playground: Story = {};
