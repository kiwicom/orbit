import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import { SPACINGS_AFTER } from "../common/consts";

import Button from ".";

const getIcon = (source: string) => (source in Icons ? Icons[source] : null);

export default {
  title: "Button",
};

export const Default = ({ children }) => {
  return <Button onClick={action("clicked")}>{children}</Button>;
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  children: "Default button",
};

export const BasicButtons = ({ children, fullWidth, type, size }) => {
  return (
    <Button onClick={action("clicked")} fullWidth={fullWidth} type={type} size={size}>
      {children}
    </Button>
  );
};

BasicButtons.story = {
  name: "Basic buttons",

  parameters: {
    info: "Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

BasicButtons.args = {
  children: "Button",
  fullWidth: false,
  type: TYPE_OPTIONS.PRIMARY,
  size: SIZE_OPTIONS.NORMAL,
};

BasicButtons.argTypes = {
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
};

export const MultipleFullWidthButtonsInContainer = () => {
  return (
    <div style={{ width: 300, backgroundColor: "lightgray" }}>
      Your privacy, your choice
      <Stack direction="row">
        <Button type="secondary" fullWidth>
          Customize
        </Button>
        <Button type="secondary" fullWidth>
          Reject all
        </Button>
        <Button fullWidth>Accept</Button>
      </Stack>
    </div>
  );
};

export const ButtonWithIcons = ({ children, fullWidth, type, size, iconLeft, iconRight }) => {
  const IconLeft = getIcon(iconLeft);
  const IconRight = getIcon(iconRight);
  return (
    <Button
      onClick={action("clicked")}
      fullWidth={fullWidth}
      type={type}
      size={size}
      iconLeft={IconLeft && <IconLeft />}
      iconRight={IconRight && <IconRight />}
    >
      {children}
    </Button>
  );
};

ButtonWithIcons.story = {
  name: "Button with icons",

  parameters: {
    info: "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

ButtonWithIcons.args = {
  children: "Button",
  fullWidth: false,
  type: TYPE_OPTIONS.PRIMARY,
  size: SIZE_OPTIONS.NORMAL,
  iconLeft: "PlusCircle" as string,
  iconRight: "ChevronDown",
};

ButtonWithIcons.argTypes = {
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
};

export const FullWidthButtons = ({ children, type, size, iconLeft, iconRight }) => {
  const IconLeft = getIcon(iconLeft);
  const IconRight = getIcon(iconRight);

  return (
    <Stack spacing="small" direction="column">
      <Button
        onClick={action("clicked")}
        fullWidth
        type={type}
        size={size}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        {children}
      </Button>
      <Button
        onClick={action("clicked")}
        centered
        fullWidth
        type={type}
        size={size}
        iconLeft={IconLeft && <IconLeft />}
        iconRight={IconRight && <IconRight />}
      >
        {children}
      </Button>
    </Stack>
  );
};

FullWidthButtons.story = {
  name: "Full width buttons",

  parameters: {
    info: "By default, a full width Button renders with the children centered. However, if icons are used, the content will align to the left by default. In such scenario, the centered prop can be used to center everything.",
  },
};

FullWidthButtons.args = {
  children: "Button",
  type: TYPE_OPTIONS.PRIMARY,
  size: SIZE_OPTIONS.NORMAL,
  iconLeft: "PlusCircle",
  iconRight: "ChevronDown",
};

FullWidthButtons.argTypes = {
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
};

export const SubtleButtons = ({ children, iconLeft }) => {
  const IconLeft = getIcon(iconLeft);

  return (
    <Stack>
      <Button
        onClick={action("clicked")}
        type="primarySubtle"
        size="small"
        iconLeft={IconLeft && <IconLeft />}
      >
        {children}
      </Button>
      <Button
        onClick={action("clicked")}
        type="criticalSubtle"
        size="small"
        iconLeft={IconLeft && <IconLeft />}
      >
        {children}
      </Button>
    </Stack>
  );
};

SubtleButtons.story = {
  name: "Subtle buttons",

  parameters: {
    info: "We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

SubtleButtons.args = {
  children: "Button",
  iconLeft: "CloseCircle",
};

SubtleButtons.argTypes = {
  iconLeft: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const CircledButton = ({ size, type, iconLeft }) => {
  const IconLeft = getIcon(iconLeft);

  return (
    <Button
      onClick={action("clicked")}
      size={size}
      type={type}
      iconLeft={IconLeft && <IconLeft />}
      circled
      title="Button"
    />
  );
};

CircledButton.story = {
  name: "Circled button",

  parameters: {
    info: "Button can be also rendered in circled shape, but only when it does have iconLeft and not have children. Use title prop to ensure accessibility.",
  },
};

CircledButton.args = {
  size: SIZE_OPTIONS.NORMAL,
  type: TYPE_OPTIONS.PRIMARY,
  iconLeft: "Airplane",
};

CircledButton.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  type: {
    options: [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY],
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
};

export const DestructiveButtons = ({ children, size, iconLeft }) => {
  const IconLeft = getIcon(iconLeft);

  return (
    <Button onClick={action("clicked")} type="critical" size={size} iconLeft={<IconLeft />}>
      {children}
    </Button>
  );
};

DestructiveButtons.story = {
  name: "Destructive buttons",

  parameters: {
    info: "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

DestructiveButtons.args = {
  children: "Destructive button",
  size: SIZE_OPTIONS.NORMAL,
  iconLeft: "Airplane",
};

DestructiveButtons.argTypes = {
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
};

export const ButtonAsALink = ({ children, href, external, disabled, size, iconLeft }) => {
  const IconLeft = getIcon(iconLeft);

  return (
    <Button
      onClick={action("clicked")}
      href={href}
      external={external}
      size={size}
      disabled={disabled}
      iconLeft={<IconLeft />}
    >
      {children}
    </Button>
  );
};

ButtonAsALink.story = {
  name: "Button as a link",

  parameters: {
    info: "If you need to, you can pass some href to this component and it will automatically render into anchor.",
  },
};

ButtonAsALink.args = {
  children: "I am a link",
  href: "https://kiwi.com",
  external: false,
  disabled: false,
  size: SIZE_OPTIONS.NORMAL,
  iconLeft: "Airplane",
};

ButtonAsALink.argTypes = {
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
};

export const Playground = ({
  children,
  href,
  external,
  asComponent,
  disabled,
  fullWidth,
  type,
  size,
  width,
  circled,
  loading,
  submit,
  dataTest,
  iconLeft,
  iconRight,
  ariaExpanded,
  ariaControls,
  tabIndex,
  spaceAfter,
  title,
  rel,
  contentAlign,
  contentWidth,
}) => {
  const IconLeft = getIcon(iconLeft);
  const IconRight = getIcon(iconRight);

  return (
    <Button
      onClick={action("clicked")}
      asComponent={asComponent}
      href={href}
      contentAlign={contentAlign}
      contentWidth={contentWidth}
      external={external}
      disabled={disabled}
      circled={circled}
      fullWidth={fullWidth}
      loading={loading}
      dataTest={dataTest}
      type={type}
      size={size}
      iconLeft={IconLeft && <IconLeft />}
      iconRight={IconRight && <IconRight />}
      submit={submit}
      width={String(width)}
      ariaControls={ariaControls}
      ariaExpanded={ariaExpanded}
      tabIndex={tabIndex}
      spaceAfter={spaceAfter}
      title={title}
      rel={rel}
    >
      {children}
    </Button>
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of component. ",
  },
};

Playground.args = {
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
  dataTest: "test",
  iconLeft: "Airplane",
  iconRight: "ChevronDown",
  ariaExpanded: false,
  ariaControls: "element ID",
  tabIndex: "0",
  spaceAfter: SPACINGS_AFTER.SMALL,
  title: "Additional information for accessibility",
  rel: "nofollow",
  contentAlign: "center",
  contentWidth: "100%",
};

Playground.argTypes = {
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
};

export const Accessibility = ({ children, ariaExpanded, ariaControls, title }) => {
  return (
    <Button
      onClick={action("clicked")}
      ariaControls={ariaControls}
      ariaExpanded={ariaExpanded}
      title={title}
    >
      {children}
    </Button>
  );
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

Accessibility.args = {
  children: "Button",
  ariaExpanded: false,
  ariaControls: "element ID",
  title: "Additional information for accessibility",
};

export const Rtl = ({ iconLeft }) => {
  const IconLeft = getIcon(iconLeft);

  return (
    <RenderInRtl>
      <Button type="primary" iconLeft={<IconLeft />}>
        Button
      </Button>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  iconLeft: "Airplane",
};

Rtl.argTypes = {
  iconLeft: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};
