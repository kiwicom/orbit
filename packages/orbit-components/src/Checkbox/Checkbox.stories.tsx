import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tooltip from "../Tooltip";

import Checkbox from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,

  parameters: {
    info: "Additionally you can add tooltip to this component.",
    controls: {
      exclude: ["onChange", "defaultChecked", "readOnly", "value", "name"],
    },
  },

  args: {
    info: "Additional information about this choice",
    value: "value",
    label: "Label",
    checked: false,
    hasError: false,
    disabled: false,
    name: "name",
    onChange: action("onChange"),
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  parameters: {
    info: "Checkbox needs only label and onChange by default.",
    controls: {
      exclude: ["info", "hasError", "disabled", "name", "value", "onChange"],
    },
  },

  args: {
    info: undefined,
  },
};

export const Uncontrolled: Story = {
  parameters: {
    info: `Uncontrolled Checkbox. It doesn't require "checked" prop. Can be used with "defaultChecked" prop.`,
    controls: {
      exclude: ["checked", "info", "hasError", "disabled", "name", "value", "onChange"],
    },
  },

  args: {
    checked: undefined,
    info: undefined,
  },
};

export const WithHelp: Story = {
  parameters: {
    info: "Additional information about this choice",
  },
};

export const WithError: Story = {
  parameters: {
    info: "Show there is an error with the hasError prop. Only displays when checked and disabled are false.",
  },

  args: {
    hasError: true,
  },
};

export const WithTextLinkInLabel: Story = {
  render: args => (
    <Checkbox
      {...args}
      label={
        <Text>
          I instruct Kiwi.com to cancel this booking under the herein specified conditions and to
          process a refund in accordance with Kiwi.com&rsquo;&nbsp;
          <TextLink stopPropagation href="https://kiwi.com" external>
            Terms and Conditions
          </TextLink>
          .
        </Text>
      }
    />
  ),

  parameters: {
    info: "Additionally you can info text and link to this component.",
    controls: {
      exclude: ["onChange", "label"],
    },
  },

  args: {
    checked: true,
  },
};

export const WithTooltip: Story = {
  render: args => {
    return (
      <Checkbox
        {...args}
        tooltip={
          <Tooltip content="There are no results available with this option" placement="top" />
        }
      />
    );
  },

  args: {
    disabled: true,
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Checkbox
        {...args}
        label={
          <Text>
            I instruct Kiwi.com to cancel this booking under the herein specified conditions and to
            process a refund in accordance with Kiwi.com&rsquo;&nbsp;
            <TextLink>Terms and Conditions</TextLink>.
          </Text>
        }
      />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: ["label", "onChange"],
    },
  },
};

export const Playground: Story = {
  parameters: {
    info: "Playground of Checkbox",
  },
};
