import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/ButtonPrimitive/common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import ButtonLink from ".";

const meta: Meta<typeof ButtonLink> = {
  title: "ButtonLink",
  component: ButtonLink,

  parameters: {
    info: "Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.",
  },

  args: {
    children: "ButtonLink",
    disabled: false,
    fullWidth: false,
    type: TYPES.PRIMARY,
    size: SIZE_OPTIONS.NORMAL,
    width: "",
    href: "https://kiwi.com",
    external: false,
    compact: false,
    circled: false,
    submit: false,
    spaceAfter: SPACINGS_AFTER.NORMAL,
  },

  argTypes: {
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
    type: {
      options: Object.values(TYPES),
      control: {
        type: "select",
      },
    },
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

export default meta;
type Story = StoryObj<typeof ButtonLink>;

const getIcon = (source: string | null) => (source ? Icons[source] : null);

export const Default: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <ButtonLink
        {...args}
        iconLeft={iconLeft && <IconLeft />}
        iconRight={iconRight && <IconRight />}
      >
        {children}
      </ButtonLink>
    );
  },
};

export const Secondary: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <ButtonLink
        {...args}
        iconLeft={iconLeft && <IconLeft />}
        iconRight={iconRight && <IconRight />}
      >
        {children}
      </ButtonLink>
    );
  },

  args: { type: TYPES.SECONDARY },
};

export const Critical: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <ButtonLink
        {...args}
        iconLeft={iconLeft && <IconLeft />}
        iconRight={iconRight && <IconRight />}
        onClick={action("onClick")}
      >
        {children}
      </ButtonLink>
    );
  },

  args: { type: TYPES.CRITICAL },
};

export const Circled: Story = {
  render: ({ iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconLeft as string);

    return (
      <ButtonLink
        {...args}
        iconLeft={iconLeft && <IconLeft />}
        iconRight={iconRight && <IconRight />}
        onClick={action("clicked")}
      />
    );
  },

  parameters: { controls: { exclude: ["iconRight", "children"] } },

  args: {
    children: undefined,
    circled: true,
    type: TYPES.SECONDARY,
    size: SIZE_OPTIONS.LARGE,
    iconLeft: "Airplane",
  },
};

export const Playground: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <ButtonLink
        {...args}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
        onClick={action("clicked")}
      >
        {children}
      </ButtonLink>
    );
  },

  args: {
    type: TYPES.SECONDARY,
    size: SIZE_OPTIONS.LARGE,
    iconLeft: "Airplane",
    iconRight: "ChevronDown",
    ariaExpanded: false,
    ariaControls: "element ID",
    tabIndex: "0",
    title: "Additional information for accessibility",
    rel: "nofollow",
  },
};

export const Accessibility: Story = {
  render: ({ children, ariaExpanded, ariaControls, title }) => {
    return (
      <ButtonLink ariaExpanded={ariaExpanded} ariaControls={ariaControls} title={title}>
        {children}
      </ButtonLink>
    );
  },

  parameters: {
    info: "This is a preview of component accessibility props",
  },

  args: {
    children: "ButtonLink",
    ariaExpanded: false,
    ariaControls: "element ID",
    title: "Additional information for accessibility",
  },
};

export const Rtl: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <RenderInRtl>
        <ButtonLink
          {...args}
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {children}
        </ButtonLink>
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
