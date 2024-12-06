import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import CountryFlag from "../CountryFlag";
import { CODES } from "../CountryFlag/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import Select from ".";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

type SelectPropsAndCustomArgs = React.ComponentProps<typeof Select> & {
  code: string;
  icon: string;
};

const meta: Meta<SelectPropsAndCustomArgs> = {
  title: "Select",
  component: Select,

  args: {
    options: objectOptions,
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
  },

  parameters: {
    info: "Select component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "onChange",
        "onBlur",
        "onFocus",
        "help",
        "error",
        "placeholder",
        "inlineLabel",
        "disabled",
        "name",
        "prefix",
        "label",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<SelectPropsAndCustomArgs>;

const getIcon = (source: string | null) => source && Icons[source];

export const Default: Story = {
  parameters: {
    info: "Default setup of Select component. Check Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithPrefixAndLabel: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return <Select {...args} prefix={<Icon />} />;
  },

  args: {
    icon: "Airplane",
    label: "Select box",
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    info: "Select component with prefix icon and label. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onBlur", "onFocus", "help", "error", "placeholder", "inlineLabel"],
    },
  },
};

export const WithCountryFlagPrefix: Story = {
  render: ({ code, ...args }) => {
    const Icon = <CountryFlag code={code} />;

    return <Select {...args} prefix={Icon} />;
  },

  args: {
    code: CODES.ANYWHERE,
  },

  argTypes: {
    code: {
      options: Object.values(CODES),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    info: "Select component with country flag icon as a prefix. Check Orbit.Kiwi for more detailed guidelines.",
  },
};

export const WithLongLabel: Story = {
  args: {
    label: "Select box (very long label)",
    inlineLabel: true,
  },

  parameters: {
    info: "Select component with a long label truncate automatically when inline. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onBlur", "onFocus", "help", "error", "placeholder"],
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Select value from list",
  },

  parameters: {
    info: "Select component with placeholder set up. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onBlur", "onFocus", "help", "error", "inlineLabel"],
    },
  },
};

export const WithHelpMessage: Story = {
  args: {
    label: "Select with help message",
    help: "Most common choice is Booking cancellation",
    helpClosable: true,
  },

  parameters: {
    info: "Select component with help message tooltip. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onBlur", "onFocus", "placeholder", "error", "inlineLabel"],
    },
  },
};

export const WithErrorMessage: Story = {
  args: {
    label: "Select with error message",
    error: "You need to select some value.",
  },

  parameters: {
    info: "Select component with error message tooltip. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onBlur", "onFocus", "placeholder", "help", "inlineLabel"],
    },
  },
};

export const Playground: Story = {
  render: ({ icon, ...args }) => {
    const Icon = typeof icon === "string" && getIcon(icon);

    return <Select {...args} prefix={<Icon />} />;
  },

  args: {
    ...WithPrefixAndLabel.args,
    ariaLabel: "Select box",
    inlineLabel: false,
    placeholder: "Select value from list",
    value: undefined,
    disabled: false,
    error: "",
    help: "",
    name: "name",
    width: "50%",
    tabIndex: 0,
    required: false,
    helpClosable: true,
    spaceAfter: SPACINGS_AFTER.SMALL,
    customValueText: "",
    insideInputGroup: false,
    id: "select-id",
    dataAttrs: {
      "data-story-example": "Storybook-playground",
    },
  },

  argTypes: {
    ...WithPrefixAndLabel.argTypes,
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },

    value: {
      options: objectOptions.map(opt => opt.value),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    info: "Playground of select component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange", "onBlur", "onFocus"],
    },
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <Select placeholder="My placeholder" options={objectOptions} label="My label" />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
