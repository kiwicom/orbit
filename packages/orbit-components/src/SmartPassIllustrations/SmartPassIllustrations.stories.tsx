import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import type { Props } from "./types";

import * as SmartPassIllustrations from ".";

const SIZE_OPTIONS = {
  EXTRASMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  DISPLAY: "display",
};

type SmartPassPropsAndCustomArgs = Props & { illustration: string };

const meta: Meta<SmartPassPropsAndCustomArgs> = {
  title: "SmartPassIllustration",

  args: {
    size: SIZE_OPTIONS.MEDIUM as Props["size"],
    title: "title",
    description: "description",
    primary: "white",
    secondary: "black",
    ariaLabelledby: "id",
    illustration: "SmartPassV1",
    id: "ID",
  },

  argTypes: {
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: {
        type: "select",
      },
    },
    illustration: {
      options: Object.keys(SmartPassIllustrations),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<SmartPassPropsAndCustomArgs>;

export const Playground: Story = {
  render: ({ illustration, ...args }) => {
    const Component = SmartPassIllustrations[illustration];

    return <Component {...args} />;
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
