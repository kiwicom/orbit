import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import TYPE_OPTIONS from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Text from "../Text";
import type { Props } from "./types";

import Loading from ".";

const meta: Meta<typeof Loading> = {
  title: "Loading",
  component: Loading,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    loading: true,
    type: TYPE_OPTIONS.PAGE_LOADER,
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },

  args: {
    title: "Please wait, page is loading...",
  },
};

export const DefaultWithChildren: Story = {
  render: args => (
    <Loading {...args}>
      <Text>Loading prop is false.</Text>
    </Loading>
  ),

  parameters: {
    controls: {
      exclude: ["children", "customSize", "type", "asComponent", "title", "ariaHidden"],
    },
  },

  args: {
    text: "Please wait, content is loading...",
  },

  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

type PlaygroundProps = Omit<Props, "text" | "title" | "ariaHidden"> & {
  accessibilityMode: "text" | "title" | "ariaHidden";
  textValue: string;
  titleValue: string;
};

export const Playground: StoryObj<PlaygroundProps> = {
  render: ({ customSize, accessibilityMode, textValue, titleValue, ...args }) => {
    const accessibilityProps = {
      text: { text: textValue },
      title: { title: titleValue },
      ariaHidden: { ariaHidden: true as const },
    }[accessibilityMode];

    return (
      <div className="stroke-blue-dark">
        <Loading
          {...args}
          {...accessibilityProps}
          customSize={customSize === 0 ? undefined : customSize}
        />
      </div>
    );
  },

  args: {
    asComponent: "div",
    customSize: 50,
    id: "loader-id",
    accessibilityMode: "title",
    textValue: "Loading content...",
    titleValue: "Content is loading",
  },

  argTypes: {
    asComponent: {
      control: {
        type: "text",
      },
    },
    accessibilityMode: {
      control: "radio",
      options: ["text", "title", "ariaHidden"],
      description: "Select how to handle accessibility",
    },
    textValue: {
      control: "text",
      if: { arg: "accessibilityMode", eq: "text" },
    },
    titleValue: {
      control: "text",
      if: { arg: "accessibilityMode", eq: "title" },
    },
  },

  parameters: {
    info: "Playground of Loading component. Type buttonLoader inherits parent's stroke color. For visualisation of undefined value for customSize arg, set value number 0. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["children", "loading"],
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Loading {...args} />
    </RenderInRtl>
  ),

  args: {
    type: TYPE_OPTIONS.INLINE_LOADER,
    title: "Loading in RTL",
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
