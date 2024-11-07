import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { SIZE_OPTIONS, TYPES } from "./consts";
import SeatLegend from "./components/SeatLegend";

import Seat from ".";

const meta: Meta<typeof Seat> = {
  title: "Seat",
  component: Seat,

  parameters: {
    info: "Seat components stories. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick", "aria-labelledby"],
    },
  },

  args: {
    label: "XY",
    type: TYPES.DEFAULT,
  },

  argTypes: {
    type: {
      options: Object.values(TYPES),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Seat>;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: ["aria-labelledby", "type", "size", "selected"],
    },
  },
};

export const Playground: Story = {
  args: {
    id: "seat-id",
    size: SIZE_OPTIONS.MEDIUM,
    price: "$12",
    selected: false,
    title: "25D",
    description: "Extra legroom seat",
    onClick: action("onClick"),
  },

  argTypes: {
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export const Legend: Story = {
  render: args => <SeatLegend {...args} />,

  parameters: {
    info: "SeatLegend component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["size", "selected", "aria-labelledby"],
    },
  },

  args: {
    label: "Extra legroom ($ 5.99 – $ 12.98)",
  },
};
