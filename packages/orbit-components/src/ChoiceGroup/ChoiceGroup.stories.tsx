import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react/";
import { FixedSizeList } from "react-window";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { LABEL_ELEMENTS, LABEL_SIZES } from "./consts";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

import ChoiceGroup from ".";

type ChoiceGroupPropsAndCustomArgs = React.ComponentProps<typeof ChoiceGroup> & {
  boxShadowSize: string;
};

const meta: Meta<ChoiceGroupPropsAndCustomArgs> = {
  title: "ChoiceGroup",
  component: ChoiceGroup,

  parameters: {
    controls: {
      exclude: ["onChange", "onOnlySelection"],
    },
  },

  args: {
    label: "What was the reason for your cancellation?",
    onlySelectionText: "Only",
    labelSize: LABEL_SIZES.NORMAL,
    error: "",
    filter: false,
    onChange: action("onChange"),
    onOnlySelection: action("onOnlySelection"),
  },

  argTypes: {
    labelSize: {
      options: Object.values(LABEL_SIZES),
      control: {
        type: "select",
      },
    },
    labelAs: {
      options: ["div", ...Object.values(LABEL_ELEMENTS)],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<ChoiceGroupPropsAndCustomArgs>;

export const Default: Story = {
  render: args => (
    <ChoiceGroup {...args}>
      <Radio name="reason" label="Reason one" value="one" />
      <Radio name="reason" label="Reason two" value="two" />
      <Radio name="reason" label="Reason three" value="three" />
    </ChoiceGroup>
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "onOnlySelection", "onlySelectionText", "filter", "error"],
    },
  },

  args: {
    onlySelectionText: undefined,
    error: undefined,
  },
};

export const Multiple: Story = {
  render: args => (
    <ChoiceGroup {...args}>
      <Checkbox label="Reason one" value="one" />
      <Checkbox label="Reason two" value="two" />
      <Checkbox label="Reason three" value="three" />
    </ChoiceGroup>
  ),
};

export const Filter: Story = {
  render: args => (
    <ChoiceGroup {...args}>
      <Checkbox label="Reason one" value="one" disabled />
      <Checkbox label="Reason two" value="two" />
      <Checkbox label="Reason three" value="three" />
    </ChoiceGroup>
  ),

  args: {
    filter: true,
  },
};

export const WithError: Story = {
  render: args => (
    <ChoiceGroup {...args}>
      <Radio name="reason" label="Reason one" value="one" />
      <Radio name="reason" label="Reason two" value="two" />
      <Radio name="reason" label="Reason three" value="three" />
    </ChoiceGroup>
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "onOnlySelection", "onlySelectionText", "filter"],
    },
  },

  args: {
    error: "Error message (explain how to solve it)",
  },
};

export const RenderProp: Story = {
  render: ({ boxShadowSize, ...args }) => (
    <ChoiceGroup {...args} label="What was the reason for your cancellation?">
      {({ Container, Item, spacing }) => (
        <FixedSizeList
          outerElementType={({ style, ...props }) => (
            <div
              style={{
                // account for extra padding
                top: `-${boxShadowSize}`,
                left: `-${boxShadowSize}`,
                ...style,
              }}
              {...props}
            />
          )}
          innerElementType={Container}
          height={150}
          itemCount={500}
          // computed height + top padding + spacing between items
          itemSize={20 + parseInt(spacing, 10)}
        >
          {({ style, index }) => (
            <div
              style={{
                // don't cut focus box shadow
                paddingTop: boxShadowSize,
                paddingLeft: boxShadowSize,
                ...style,
              }}
            >
              <Item>
                <Radio name="reason" label={`Option ${index}`} value={index} />
              </Item>
            </div>
          )}
        </FixedSizeList>
      )}
    </ChoiceGroup>
  ),

  args: {
    boxShadowSize: "3px",
  },

  parameters: {
    controls: {
      exclude: ["onChange", "onOnlySelection", "onlySelectionText", "filter"],
    },
  },
};

export const Playground: Story = {
  render: args => (
    <ChoiceGroup {...args}>
      <Radio name="reason" label="Reason one" value="one" />
      <Radio name="reason" label="Reason two" value="two" />
      <Radio name="reason" label="Reason three" value="three" />
    </ChoiceGroup>
  ),

  parameters: {
    info: "Playground of ChoiceGroup",
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <ChoiceGroup {...args}>
        <Radio name="reason" label="Reason one" value="one" />
        <Radio name="reason" label="Reason two" value="two" />
        <Radio name="reason" label="Reason three" value="three" />
      </ChoiceGroup>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
