import type { Meta, StoryObj } from "@storybook/react";

import { CODES, SIZES } from "./consts";

import CountryFlag from ".";

const meta: Meta<typeof CountryFlag> = {
  title: "CountryFlag",
  component: CountryFlag,

  parameters: {
    info: "Country flag displays one flag of selected country. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    name: "Country",
    code: CODES.ANYWHERE,
    size: SIZES.SMALL,
  },

  argTypes: {
    code: {
      options: Object.values(CODES),
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(SIZES),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CountryFlag>;

export const Playground: Story = {};
