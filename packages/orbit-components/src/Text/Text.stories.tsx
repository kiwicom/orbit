import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS_AFTER } from "../common/consts";
import {
  TYPE_OPTIONS,
  SIZE_OPTIONS,
  WEIGHT_OPTIONS,
  ALIGN_OPTIONS,
  ELEMENT_OPTIONS,
} from "./consts";
import Box from "../Box";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Text from ".";

const customText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor, ut vestibulum nisi sodales et. Suspendisse molestie felis sit amet dui viverra volutpat sed sit amet lacus. Quisque sapien dolor, blandit ut sodales id, dictum sit amet purus. Nulla facilisi. Nulla eleifend, sem sed fermentum feugiat, eros ligula semper nulla, sit amet semper purus risus nec lorem.";

Box.displayName = "Box";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,

  args: {
    children: customText,
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const DefaultText: Story = {
  render: ({ children }) => <Text>{children}</Text>,

  parameters: {
    info: "The most basic component for rendering text blocks. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["type", "size", "weight", "align", "as"],
    },
  },
};

export const LinkInText: Story = {
  render: () => (
    <Text>
      {customText} <a href="http://kiwi.com">Kiwi.com</a>
    </Text>
  ),

  parameters: {
    info: "An example of link included in Text component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ type, children, ...args }) => (
    <Box padding="300" background={type === TYPE_OPTIONS.WHITE ? "inkLight" : "cloudLight"}>
      <Text {...args} type={type}>
        {children}
      </Text>
    </Box>
  ),

  parameters: {
    info: "Playground of Text component. Check Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    type: TYPE_OPTIONS.PRIMARY,
    as: ELEMENT_OPTIONS.P,
    size: SIZE_OPTIONS.NORMAL,
    weight: WEIGHT_OPTIONS.NORMAL,
    align: ALIGN_OPTIONS.LEFT,
    margin: "5px",
    uppercase: false,
    strikeThrough: false,
    italic: false,
    withBackground: false,
    id: "ID",
    spaceAfter: "none",
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
    as: {
      options: Object.values(ELEMENT_OPTIONS),
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
    weight: {
      options: Object.values(WEIGHT_OPTIONS),
      control: {
        type: "select",
      },
    },
    align: {
      options: Object.values(ALIGN_OPTIONS),
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

export const Rtl: Story = {
  render: ({ children, ...args }) => (
    <RenderInRtl>
      <Text {...args}>{children}</Text>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: ["type", "size", "weight", "as"],
    },
  },

  args: {
    align: ALIGN_OPTIONS.LEFT,
  },

  argTypes: {
    align: { ...Playground.argTypes?.align },
  },
};
