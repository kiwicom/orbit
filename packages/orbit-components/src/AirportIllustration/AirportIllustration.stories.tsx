import type { Meta, StoryObj } from "@storybook/react";

import { NAMES } from "./consts.mts";
import { SIZE_OPTIONS } from "../primitives/IllustrationPrimitive";
import { SPACINGS_AFTER } from "../common/consts";

import AirportIllustration from ".";

const meta: Meta<typeof AirportIllustration> = {
  title: "AirportIllustration",
  component: AirportIllustration,

  parameters: {
    info: "Explore our new set of Airport Illustrations for Kiwi.com.",
  },

  args: {
    size: SIZE_OPTIONS.MEDIUM,
    name: "BGYFastTrack",
    spaceAfter: SPACINGS_AFTER.SMALL,
    alt: "Airport illustration",
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
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AirportIllustration>;

export const Playground: Story = {};
