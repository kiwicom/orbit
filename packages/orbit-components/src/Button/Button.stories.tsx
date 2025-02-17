import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import { SPACINGS_AFTER } from "../common/consts";

import Button from ".";

const getIcon = (source: string) => (source in Icons ? Icons[source] : null);

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,

  args: {
    children: "Button",
    href: "",
    external: false,
    asComponent: "button",
    disabled: false,
    fullWidth: false,
    type: TYPE_OPTIONS.PRIMARY,
    size: SIZE_OPTIONS.NORMAL,
    width: "auto",
    circled: false,
    loading: false,
    submit: false,
    iconLeft: "Airplane",
    iconRight: "ChevronDown",
    tabIndex: "0",
    spaceAfter: SPACINGS_AFTER.SMALL,
    rel: "nofollow",
    contentAlign: "center",
    contentWidth: "100%",
  },

  argTypes: {
    type: {
      options: Object.values(TYPE_OPTIONS),
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Button
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
        {...args}
        onClick={action("clicked")}
      >
        {children}
      </Button>
    );
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    children: "Default button",
    iconLeft: undefined,
    iconRight: undefined,
  },
};

export const MultipleFullWidthButtonsInContainer: Story = {
  render: ({ iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <div style={{ width: 300, backgroundColor: "lightgray" }}>
        Your privacy, your choice
        <Stack direction="row">
          <Button
            iconLeft={IconLeft && <IconLeft />}
            iconRight={IconRight && <IconRight />}
            {...args}
            type="secondary"
          >
            Customize
          </Button>
          <Button
            iconLeft={IconLeft && <IconLeft />}
            iconRight={IconRight && <IconRight />}
            {...args}
            type="secondary"
          >
            Reject all
          </Button>
          <Button
            iconLeft={IconLeft && <IconLeft />}
            iconRight={IconRight && <IconRight />}
            {...args}
          >
            Accept
          </Button>
        </Stack>
      </div>
    );
  },

  parameters: {
    controls: { exclude: ["type "] },
  },

  args: {
    iconLeft: undefined,
    iconRight: undefined,
    spaceAfter: SPACINGS_AFTER.NONE,
    fullWidth: true,
  },
};

export const ButtonWithIcons: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);
    return (
      <Button
        onClick={action("clicked")}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
        {...args}
      >
        {children}
      </Button>
    );
  },

  parameters: {
    info: "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    iconLeft: "PlusCircle",
    iconRight: "ChevronDown",
  },
};

export const FullWidthButtons: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Stack spacing="300" direction="column">
        <Button
          {...args}
          onClick={action("clicked")}
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {children}
        </Button>
        <Button
          {...args}
          onClick={action("clicked")}
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {children}
        </Button>
      </Stack>
    );
  },

  parameters: {
    info: "By default, a full width Button renders with the children centered. However, if icons are used, the content will align to the left by default. In such scenario, the centered prop can be used to center everything.",
  },

  args: {
    iconLeft: "PlusCircle",
    iconRight: "ChevronDown",
    fullWidth: true,
  },
};

export const SubtleButtons: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Stack direction="column">
        <Button
          {...args}
          onClick={action("clicked")}
          type="primarySubtle"
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {children}
        </Button>
        <Button
          {...args}
          onClick={action("clicked")}
          type="criticalSubtle"
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {children}
        </Button>
      </Stack>
    );
  },

  parameters: {
    info: "We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: { exclude: ["type"] },
  },

  args: {
    iconLeft: "CloseCircle",
    size: SIZE_OPTIONS.SMALL,
  },
};

export const CircledButton: Story = {
  render: ({ iconLeft, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);

    return (
      <Button
        {...args}
        onClick={action("clicked")}
        iconLeft={IconLeft && <IconLeft />}
        title="Button"
      />
    );
  },

  parameters: {
    info: "Button can be also rendered in circled shape, but only when it does have iconLeft and not have children. Use title prop to ensure accessibility.",
    controls: { exclude: ["iconRight", "children"] },
  },

  args: {
    iconRight: undefined,
    children: undefined,
    circled: true,
  },
};

export const DestructiveButtons: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Button
        {...args}
        onClick={action("clicked")}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        {children}
      </Button>
    );
  },

  parameters: {
    info: "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    children: "Destructive button",
    size: SIZE_OPTIONS.NORMAL,
    iconLeft: "Airplane",
    iconRight: undefined,
    type: TYPE_OPTIONS.CRITICAL,
  },
};

export const ButtonAsALink: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Button
        {...args}
        onClick={action("clicked")}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        {children}
      </Button>
    );
  },

  parameters: {
    info: "If you need to, you can pass some href to this component and it will automatically render into anchor.",
  },

  args: {
    children: "I am a link",
    href: "https://kiwi.com",
    iconRight: undefined,
  },
};

export const Playground: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Button
        {...args}
        onClick={action("clicked")}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        {children}
      </Button>
    );
  },

  parameters: {
    info: "Some description about this type of component.",
  },
};

export const Accessibility: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <Button
        {...args}
        onClick={action("clicked")}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        {children}
      </Button>
    );
  },

  parameters: {
    info: "This is a preview of component accessibility props",
  },

  args: {
    title: "Additional information for accessibility",
    ariaLabelledby: "labelledby-id",
    ariaExpanded: false,
    ariaCurrent: "false",
    ariaControls: "element-id",
  },
};

export const Rtl: Story = {
  render: ({ children, iconLeft, iconRight, ...args }) => {
    const IconLeft = getIcon(iconLeft as string);
    const IconRight = getIcon(iconRight as string);

    return (
      <RenderInRtl>
        <Button
          {...args}
          type="primary"
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {children}
        </Button>
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
