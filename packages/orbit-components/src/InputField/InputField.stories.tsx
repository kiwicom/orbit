import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPE_OPTIONS, INPUTMODE } from "./consts";
import { NAME_OPTIONS } from "../ServiceLogo/consts.mts";
import ButtonLink from "../ButtonLink";
import TextLink from "../TextLink";
import ServiceLogo from "../ServiceLogo";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tag from "../Tag";
import { SPACINGS_AFTER } from "../common/consts";
import type { Name } from "../ServiceLogo/types";

import InputField from ".";

const getIcon = (source: string | null) => source && Icons[source];

type InputFieldPropsAndCustomArgs = React.ComponentProps<typeof InputField> & {
  serviceLogoName?: Name;
  grayScale?: boolean;
};

const meta: Meta<InputFieldPropsAndCustomArgs> = {
  title: "InputField",
  component: InputField,

  parameters: {
    controls: {
      exclude: ["onChange"],
    },
  },

  args: {
    label: "Label",
    value: "",
    placeholder: "Placeholder",
    help: "",
    error: "",
    onChange: action("change"),
    required: false,
    inlineLabel: false,
    type: TYPE_OPTIONS.TEXT,
    disabled: false,
    readOnly: false,
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
    prefix: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
    suffix: {
      options: Object.keys(Icons),
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

export default meta;
type Story = StoryObj<InputFieldPropsAndCustomArgs>;

export const DefaultInput: Story = {
  parameters: {
    controls: {
      exclude: [
        "help",
        "error",
        "onChange",
        "required",
        "inlineLabel",
        "type",
        "disabled",
        "readOnly",
        "spaceAfter",
        "prefix",
        "suffix",
      ],
    },
  },
};

export const NumberInput: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "prefix", "suffix", "type"],
    },
  },

  args: {
    type: TYPE_OPTIONS.NUMBER,
    label: "Number",
    value: "2",
    placeholder: "Number",
    minValue: 1,
    maxValue: 3,
  },
};

export const PasswordInput: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "prefix", "suffix", "type"],
    },
  },

  args: {
    type: TYPE_OPTIONS.PASSWORD,
    label: "Password",
    value: "p422W0rd",
    placeholder: "Password",
  },
};

export const PassportOrIdInput: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "prefix", "suffix", "type"],
    },
  },

  args: {
    type: TYPE_OPTIONS.PASSPORTID,
    label: "Passport or ID number",
    placeholder: "588539238",
  },
};

export const EmailInput: Story = {
  render: args => (
    <InputField
      help={
        <div>
          Did you mean&nbsp;
          <TextLink onClick={action("clicked")}>name@example.com</TextLink>?
        </div>
      }
      {...args}
    />
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "prefix", "suffix", "type"],
    },
  },

  args: {
    type: TYPE_OPTIONS.EMAIL,
    label: "Email",
    value: "name@example.co",
    placeholder: "Email",
  },
};

export const WithTextPrefix: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "suffix"],
    },
  },

  args: {
    label: "Label",
    value: "",
    placeholder: "Placeholder",
    prefix: "$",
  },

  argTypes: {
    prefix: {
      control: {
        type: "text",
      },
    },
  },
};

export const WithTextSuffix: Story = {
  render: ({ suffix, ...args }) => (
    <InputField suffix={<div style={{ paddingRight: "12px" }}>{suffix}</div>} {...args} />
  ),

  parameters: {
    controls: {
      exclude: ["onChange", "prefix"],
    },
  },

  args: {
    suffix: "Some long text",
  },

  argTypes: {
    suffix: {
      control: {
        type: "text",
      },
    },
  },
};

export const CompactInput: Story = {
  parameters: {
    info: "Compact input with FormLabel as prefix",
    controls: {
      exclude: ["onChange", "prefix", "suffix"],
    },
  },

  args: {
    inlineLabel: true,
  },
};

export const CompactInputWithTags: Story = {
  render: args => (
    <InputField
      tags={
        <>
          <Tag selected onRemove={action("onRemove")}>
            Brno
          </Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
        </>
      }
      {...args}
    />
  ),

  parameters: {
    info: "Compact input with FormLabel as prefix",
    controls: {
      exclude: ["onChange", "prefix", "suffix"],
    },
  },

  args: {
    inlineLabel: true,
  },
};

export const RequiredField: Story = {
  parameters: {
    controls: {
      exclude: ["onChange", "prefix", "suffix"],
    },
  },

  args: {
    required: true,
  },
};

export const WithIconPrefix: Story = {
  render: ({ prefix, ...args }) => {
    const Prefix = getIcon(prefix as string);

    return <InputField prefix={Prefix && <Prefix />} {...args} />;
  },

  parameters: {
    info: "Input with Icon as prefix",
    controls: {
      exclude: ["onChange", "suffix"],
    },
  },

  args: {
    prefix: "Search",
  },
};

export const WithButtonLinkSuffix: Story = {
  render: ({ suffix, ...args }) => {
    const Suffix = getIcon(suffix as string);

    return (
      <InputField
        suffix={
          Suffix && (
            <ButtonLink
              aria-label="Show text"
              type="primary"
              compact
              iconLeft={<Suffix />}
              onClick={action("clicked")}
            />
          )
        }
        {...args}
      />
    );
  },

  parameters: {
    info: "Input with ButtonLink as suffix",
    controls: {
      exclude: ["onChange", "prefix"],
    },
  },

  args: {
    label: "Label",
    value: "",
    placeholder: "Placeholder",
    suffix: "Visibility",
  },

  argTypes: {
    suffix: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
};

export const WithServiceLogoSuffix: Story = {
  render: ({ serviceLogoName, grayScale, ...args }) => (
    <InputField
      suffix={<ServiceLogo name={serviceLogoName as Name} grayScale={grayScale} />}
      {...args}
    />
  ),

  parameters: {
    info: "Input with ServiceLogo as suffix",
    controls: {
      exclude: ["onChange", "prefix", "suffix"],
    },
  },

  args: {
    serviceLogoName: NAME_OPTIONS.AIRHELP,
    grayScale: false,
  },

  argTypes: {
    serviceLogoName: {
      options: Object.values(NAME_OPTIONS),
      control: {
        type: "select",
      },
    },
  },
};

export const WithError: Story = {
  render: ({ prefix, suffix, disabled, ...args }) => {
    const Prefix = getIcon(prefix as string);
    const Suffix = getIcon(suffix as string);

    return (
      <InputField
        prefix={Prefix && <Prefix />}
        suffix={
          Suffix && (
            <ButtonLink
              iconLeft={<Suffix />}
              compact
              size="normal"
              onClick={action("clicked")}
              aria-label="Show text"
              disabled={disabled}
            />
          )
        }
        {...args}
      />
    );
  },

  args: {
    label: "",
    inlineLabel: true,
    error: "Please fill out as you have on your passport",
    prefix: "Search",
    suffix: "Visibility",
  },
};

export const WithHelp: Story = {
  render: ({ prefix, suffix, disabled, ...args }) => {
    const Prefix = getIcon(prefix as string);
    const Suffix = getIcon(suffix as string);

    return (
      <InputField
        prefix={Prefix && <Prefix />}
        suffix={
          Suffix && (
            <ButtonLink
              iconLeft={<Suffix />}
              compact
              size="normal"
              onClick={action("clicked")}
              disabled={disabled}
              aria-label="Show text"
            />
          )
        }
        {...args}
      />
    );
  },

  args: {
    label: "Label",
    inlineLabel: true,
    help: "Please fill out as you have on your passport",
    prefix: "Search",
    suffix: "Visibility",
  },
};

export const Playground: Story = {
  render: ({ prefix, suffix, disabled, ...args }) => {
    const Prefix = getIcon(prefix as string);
    const Suffix = getIcon(suffix as string);
    return (
      <InputField
        prefix={Prefix && <Prefix />}
        suffix={
          Suffix && (
            <ButtonLink
              type="primary"
              size="normal"
              iconLeft={<Suffix />}
              onClick={action("clicked")}
              disabled={disabled}
              compact
              aria-label="Show text"
            />
          )
        }
        {...args}
      />
    );
  },

  args: {
    name: "input",
    inlineLabel: true,
    width: "",
    inputMode: INPUTMODE.TEXT,
    dataAttrs: { "data-recording-ignore": true },
    onFocus: action("focus"),
    onBlur: action("blur"),
    onMouseUp: action("onMouseUp"),
    onMouseDown: action("onMouseDown"),
    onSelect: action("onSelect"),
    onKeyDown: action("onKeyDown"),
    maxValue: NaN,
    minValue: NaN,
    maxLength: NaN,
    minLength: NaN,
    prefix: "Search",
    suffix: "Visibility",
    autoComplete: "off",
    id: "ID",
    spaceAfter: SPACINGS_AFTER.MEDIUM,
    ariaLabel: "Input field",
  },

  argTypes: {
    inputMode: {
      options: Object.values(INPUTMODE),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    controls: {
      exclude: [
        "onChange",
        "onFocus",
        "onBlur",
        "onMouseUp",
        "onMouseDown",
        "onSelect",
        "onKeyDown",
      ],
    },
  },
};

export const Rtl: Story = {
  render: ({ suffix, ...args }) => {
    const Suffix = getIcon(suffix as string);

    return (
      <RenderInRtl>
        <InputField
          suffix={<ButtonLink iconLeft={<Suffix />} aria-label="Show text" compact />}
          {...args}
        />
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: ["onChange"],
    },
  },

  args: {
    help: "Please fill out as you have on your passport",
    prefix: "$",
    suffix: "Visibility",
  },

  argTypes: {
    prefix: {
      control: {
        type: "text",
      },
    },
  },
};
