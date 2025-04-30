import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import * as Icons from "../icons";
import Text from "../Text";
import Box from "../Box";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import TextLink from ".";

const validate = (rel: string) => (rel !== "" ? rel : undefined);

const getIcon = (source: string) => Icons[source];

const meta: Meta<typeof TextLink> = {
  title: "TextLink",
  component: TextLink,

  args: {
    children: "Link text",
    href: "https://kiwi.com",
    onClick: action("onClick"),
  },

  parameters: {
    info: "TextLink component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick", "type", "external", "asComponent", "stopPropagation"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  render: ({ children, ...args }) => <TextLink {...args}>{children}</TextLink>,

  parameters: {
    info: "Default configuration of TextLink component. Check Orbit.Kiwi for more detailed guidelines.",
  },
};

export const LinkWithLeftIcon: Story = {
  render: ({ children, iconLeft, ...args }) => {
    const Icon = typeof iconLeft === "string" && getIcon(iconLeft);

    return (
      <TextLink {...args} iconLeft={Icon && <Icon />}>
        {children}
      </TextLink>
    );
  },

  args: {
    iconLeft: "ChevronBackward",
  },

  argTypes: {
    iconLeft: {
      options: [undefined, ...Object.keys(Icons)],
      control: {
        type: "select",
      },
    },
  },
};

export const LinkWithRightIcon: Story = {
  render: ({ children, iconRight, ...args }) => {
    const Icon = typeof iconRight === "string" && getIcon(iconRight);

    return (
      <TextLink {...args} iconRight={Icon && <Icon />}>
        {children}
      </TextLink>
    );
  },

  args: {
    iconRight: "ChevronForward",
  },

  argTypes: {
    iconRight: {
      ...LinkWithLeftIcon.argTypes?.iconLeft,
    },
  },
};

export const TextLinkInText: Story = {
  render: ({ children, ...args }) => {
    return (
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dapibus fermentum ipsum.
        Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.{" "}
        <TextLink {...args}>{children}</TextLink>, fermentum vitae, sagittis id, malesuada in, quam.
        Vivamus luctus egestas leo. Integer imperdiet lectus quis justo. Duis condimentum augue id
        magna semper rutrum. Quisque porta. Sed elit dui, pellentesque a, faucibus vel, interdum
        nec, diam.
      </Text>
    );
  },

  parameters: {
    info: "An example of usage of TextLink in Text component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick", "external", "asComponent", "stopPropagation"],
    },
  },

  args: {
    type: TYPE_OPTIONS.SUCCESS,
    size: SIZE_OPTIONS.NORMAL,
    standAlone: false,
    noUnderline: false,
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
    },
    size: {
      options: [undefined, ...Object.values(SIZE_OPTIONS)],
      control: {
        type: "select",
      },
    },
  },
};

export const Playground: Story = {
  render: ({ rel, type, children, iconRight, iconLeft, ...args }) => {
    const IconRight = typeof iconRight === "string" && getIcon(iconRight);
    const IconLeft = typeof iconLeft === "string" && getIcon(iconLeft);

    return (
      <Box padding="300" background={type === TYPE_OPTIONS.WHITE ? "inkLight" : "cloudLight"}>
        <TextLink
          {...args}
          type={type}
          rel={validate(rel!)}
          iconRight={IconRight && <IconRight />}
          iconLeft={IconLeft && <IconLeft />}
        >
          {children}
        </TextLink>
      </Box>
    );
  },

  args: {
    ...LinkWithLeftIcon.args,
    ...LinkWithRightIcon.args,
    ...TextLinkInText.args,
    external: true,
    rel: "",
    tabIndex: "",
    stopPropagation: false,
    title: "link title",
    ariaCurrent: "text-link",
    id: "link-id",
  },

  argTypes: {
    ...LinkWithLeftIcon.argTypes,
    ...LinkWithRightIcon.argTypes,
    ...TextLinkInText.argTypes,
  },

  parameters: {
    info: "Playground of TextLink component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onClick", "asComponent"],
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <TextLink {...args} iconRight={<Icons.ChevronForward reverseOnRtl />}>
        Link
      </TextLink>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
