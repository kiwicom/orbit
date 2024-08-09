import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { ALIGNS as ALIGN, JUSTIFY } from "./consts";
import { SPACINGS as SPACING } from "../utils/layout/consts";

import Inline from ".";

const PlaceHolder = ({ height = 50 }) => {
  return <div style={{ width: "50px", height: `${height}px`, background: "grey" }} />;
};

const TestChildren = () => {
  return (
    <>
      <PlaceHolder />
      <PlaceHolder height={60} />
      <PlaceHolder height={70} />
      <PlaceHolder height={80} />
      <PlaceHolder height={90} />
      <PlaceHolder height={100} />
    </>
  );
};

const meta: Meta<typeof Inline> = {
  title: "Inline",
  component: Inline,

  argTypes: {
    align: {
      options: Object.values(ALIGN),
      control: {
        type: "select",
      },
    },
    justify: {
      options: Object.values(JUSTIFY),
      control: {
        type: "select",
      },
    },
    spacing: {
      options: Object.values(SPACING),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Inline>;

export const Default: Story = {
  render: args => (
    <Inline {...args}>
      <TestChildren />
    </Inline>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: args => (
    <Inline {...args}>
      <TestChildren />
    </Inline>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    as: "div",
    spacing: SPACING.FIFTY,
    align: ALIGN.START,
    justify: JUSTIFY.START,
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Inline {...args}>
        <TestChildren />
      </Inline>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    ...Playground.args,
  },
};
