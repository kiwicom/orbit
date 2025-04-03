import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import InputFile from ".";

const meta: Meta<typeof InputFile> = {
  title: "InputFile",
  component: InputFile,

  parameters: {
    controls: {
      exclude: ["onChange", "onFocus", "onBlur", "onRemoveFile"],
    },
  },

  args: {
    label: "Label",
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
    onRemoveFile: action("removeFile"),
  },
};

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Default: Story = {};

export const FilledWithFile: Story = {
  args: {
    fileName: "file.png",
    labelRemove: "Remove file",
  },
};

export const WithHelp: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "onFocus", "onBlur", "onRemoveFile", "help"],
    },
  },

  args: {
    help: (
      <div>
        Supported files: <strong>PNG, JPG, PDF</strong>
      </div>
    ),
  },
};

export const WithError: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "onFocus", "onBlur", "onRemoveFile", "error"],
    },
  },

  args: {
    error: (
      <div>
        <strong>Error message</strong> (explain how to solve it)
      </div>
    ),
  },
};

export const Playground: Story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    multiple: false,
    disabled: false,
    buttonLabel: "Please select file",
    name: "fileInput",
    placeholder: "No file has been selected yet",
    fileName: "",
    error: "No file has been selected yet",
    help: "",
    allowedFileTypes: ["media/*", "image/*"].join(","),
    spaceAfter: SPACINGS_AFTER.SMALL,
    required: false,
    width: "",
    tabIndex: "",
    insideInputGroup: false,
    id: "",
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <InputFile {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    error: "Error message (explain how to solve it)",
    help: "",
  },
};
