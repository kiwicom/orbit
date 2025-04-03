import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Radio from ".";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,

  parameters: {
    info: "Radio component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "defaultChecked", "value", "name"],
    },
  },

  args: {
    name: "Name",
    label: "Label",
    value: "value",
    info: "Additional information about this choice",
    checked: false,
    disabled: false,
    hasError: false,
    tabIndex: 0,
    onChange: action("changed"),
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  parameters: {
    info: "Default settings of component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["info", "hasError", "disabled", "onChange", "tabIndex", "value", "name"],
    },
  },

  args: {
    info: undefined,
  },
};

export const Uncontrolled: Story = {
  parameters: {
    info: `Uncontrolled Radio. It doesn't require "checked" prop. Can be used with "defaultChecked" prop.`,
    controls: {
      exclude: ["checked", "info", "hasError", "disabled", "onChange", "tabIndex", "value", "name"],
    },
  },

  args: {
    checked: undefined,
    info: undefined,
  },
};

export const WithError: Story = {
  args: {
    hasError: true,
  },

  parameters: {
    info: "Error state of Radio component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["disabled", "onChange", "tabIndex"],
    },
  },
};

export const WithTextLinkInLabel: Story = {
  render: args => (
    <Radio
      {...args}
      label={
        <Text>
          Lorem ipsum dolor sit&nbsp;
          <TextLink>amet</TextLink>.
        </Text>
      }
    />
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "hasError", "disabled", "label", "tabIndex"],
    },
  },
};

export const Playground: Story = {
  parameters: {
    info: "Playground of Radio button component.",
  },

  args: {
    id: "radio-id",
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Radio
        {...args}
        label={
          <Text>
            Lorem ipsum dolor sit&nbsp;
            <TextLink>amet</TextLink>.
          </Text>
        }
      />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
