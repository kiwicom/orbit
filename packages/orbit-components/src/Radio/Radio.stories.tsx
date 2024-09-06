import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Text from "../Text";
import TextLink from "../TextLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tooltip from "../Tooltip";

import Radio from ".";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,

  parameters: {
    info: "Radio component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange"],
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
    readOnly: false,
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
      exclude: ["info", "hasError", "disabled", "readOnly", "onChange", "tabIndex"],
    },
  },

  args: {
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
      exclude: ["disabled", "readOnly", "onChange", "tabIndex"],
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
      exclude: ["onChange", "hasError", "disabled", "label", "readOnly", "tabIndex"],
    },
  },
};

export const WithTooltip: Story = {
  render: args => (
    <Radio
      {...args}
      tooltip={
        <Tooltip content="There are no results available with this option" placement="top" />
      }
    />
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "hasError", "disabled", "readOnly", "tabIndex"],
    },
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },

  parameters: {
    controls: {
      exclude: ["onChange", "hasError", "disabled", "tabIndex"],
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
