import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { NAMES } from "./consts.mts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";
import IllustrationPrimitiveList from "../primitives/IllustrationPrimitive/IllustrationPrimitiveList";

import Illustration from ".";

const meta: Meta<typeof Illustration> = {
  title: "Illustration",
  component: Illustration,

  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },

  args: {
    size: SIZE_OPTIONS.MEDIUM,
    name: "Accommodation",
    margin: { bottom: 12 },
    alt: "",
    role: "presentation",
  },

  argTypes: {
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: {
        type: "select",
      },
    },
    name: {
      options: NAMES,
      control: {
        type: "select",
      },
    },
    role: {
      options: ["img", "presentation"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Illustration>;

export const Playground: Story = {};

export const ListOfAllIllustrations = {
  render: () => <IllustrationPrimitiveList nameOfComponent="Illustration" images={NAMES} />,

  parameters: {
    controls: {
      disable: true,
    },
  },
};
