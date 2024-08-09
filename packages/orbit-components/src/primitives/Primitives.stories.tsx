import React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import ButtonPrimitiveComponent from "./ButtonPrimitive";
import * as Icons from "../icons";
import { SPACINGS_AFTER } from "../common/consts";
import BadgePrimitiveComponent from "./BadgePrimitive";
import IllustrationPrimitiveComponent, { SIZE_OPTIONS } from "./IllustrationPrimitive";

const getIcon = source => Icons[source];

type MixedPropsAndArgs = React.ComponentProps<typeof BadgePrimitiveComponent> &
  React.ComponentProps<typeof IllustrationPrimitiveComponent> &
  React.ComponentProps<typeof ButtonPrimitiveComponent>;

const meta: Meta<MixedPropsAndArgs> = {
  title: "Primitives",
};

export default meta;

type Story = StoryObj<MixedPropsAndArgs>;

export const BadgePrimitive: Story = {
  render: ({ icon, className }) => {
    const Icon = getIcon(icon);

    return (
      <BadgePrimitiveComponent className={className} icon={Icon && <Icon />}>
        BadgePrimitive
      </BadgePrimitiveComponent>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },

  args: {
    icon: "Airplane",
    className: "bg-gradient-to-r from-[#fd1d1d] to-[#ffae28] text-white-normal",
  },

  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
};

export const IllustrationPrimitive: Story = {
  render: ({ size, spaceAfter }) => (
    <IllustrationPrimitiveComponent size={size} name="Accommodation" spaceAfter={spaceAfter} />
  ),

  parameters: {
    info: "Explore our new set of illustrations for Kiwi.com.",
  },

  args: {
    size: SIZE_OPTIONS.MEDIUM,
    spaceAfter: SPACINGS_AFTER.SMALL,
  },

  argTypes: {
    size: {
      options: Object.values(SIZE_OPTIONS),
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

export const ButtonPrimitive: Story = {
  render: ({ children, ...args }) => {
    const { iconLeft, iconRight } = args;
    const IconLeft = getIcon(iconLeft);
    const IconRight = getIcon(iconRight);

    return (
      <ButtonPrimitiveComponent
        {...args}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
        onClick={action("onClick")}
      >
        {children}
      </ButtonPrimitiveComponent>
    );
  },

  args: {
    asComponent: "button",
    ariaControls: "",
    ariaExpanded: false,
    background: "#d63737",
    backgroundHover: "#da0a0a",
    backgroundActive: "#da0a0a",
    backgroundFocus: "#da0a0a",
    boxShadow: "0 8px 8px -6px rgba(0,0,0,.25)",
    boxShadowHover: "0 8px 8px -6px rgba(0,0,0,.25)",
    boxShadowActive: "0 8px 8px -6px rgba(0,0,0,.25)",
    boxShadowFocus: "0 8px 8px -6px rgba(0,0,0,.25)",
    children: "ButtonPrimitive",
    circled: false,
    disabled: false,
    external: false,
    fontSize: "14px",
    fontWeight: "bold",
    foreground: "#faf333",
    foregroundHover: "#faf333",
    foregroundActive: "#faf333",
    foregroundFocus: "#faf333",
    fullWidth: false,
    height: "46px",
    href: "",
    iconLeft: "",
    iconRight: "ChevronForward",
    icons: {
      width: "16px",
      height: "16px",
      leftMargin: "2px",
      rightMargin: "2px",
      foreground: "#faf333",
      foregroundHover: "#faf333",
      foregroundActive: "#faf333",
    },
    loading: false,
    padding: "0 10px 0 10px",
    role: "",
    spaceAfter: SPACINGS_AFTER.SMALL,
    submit: false,
    title: "",
    tabIndex: 0,
    width: "",
    contentAlign: "center",
    contentWidth: "100%",
  },

  argTypes: {
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
    contentAlign: {
      options: ["start", "center", "end", "space-between"],
      control: {
        type: "select",
      },
    },
    iconLeft: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
    iconRight: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
};
