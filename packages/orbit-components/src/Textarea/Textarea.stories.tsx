import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { RESIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import Textarea from ".";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,

  parameters: {
    info: "Textarea component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange"],
    },
  },

  args: {
    label: "Label",
    name: "Textarea",
    value: "Textarea",
    placeholder: "Placeholder",
    onChange: action("onChange"),
  },
};

type Story = StoryObj<typeof Textarea>;

export default meta;

export const Default: Story = {};

export const WithHelp: Story = {
  args: {
    help: "Everything is fine.",
  },
};

export const WithError: Story = {
  args: {
    error: "Something went wrong.",
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultValue: "defaultValue",
    value: undefined,
  },

  parameters: {
    info: "Uncontrolled version of Textarea component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "value"],
    },
  },
};

export const Playground: Story = {
  parameters: {
    info: "Playground of Textarea component. Check Orbit.Kiwi for more detailed guidelines. In case you want try uncontrolled variant of the component, feel free to check Uncontrolled story.",
    controls: {
      exclude: ["onChange", "onFocus", "onBlur"],
    },
  },

  args: {
    ...WithHelp.args,
    ...WithError.args,
    id: "textarea-id",
    fullHeight: true,
    disabled: false,
    readOnly: false,
    resize: RESIZE_OPTIONS.VERTICAL,
    maxLength: Infinity,
    rows: 3,
    required: false,
    spaceAfter: SPACINGS_AFTER.MEDIUM,
    tabIndex: 0,
    dataAttrs: {
      "data-story-example": "Storybook-playground",
    },
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },

  argTypes: {
    resize: {
      options: Object.values(RESIZE_OPTIONS),
      control: { type: "select" },
    },
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: { type: "select" },
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Textarea {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: ["onChange", "onFocus", "onBlur"],
    },
  },

  args: {
    ...Playground.args,
  },

  argTypes: {
    ...Playground.argTypes,
  },
};
