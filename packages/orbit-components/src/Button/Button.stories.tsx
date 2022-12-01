import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Button from ".";

const getIcons = (name: string, defaultIcon: string) =>
  select(name, Object.keys(Icons), defaultIcon);

const getIcon = (source: string | null) => (source ? Icons[source] : null);

export default {
  title: "Button",
};

export const Default = () => {
  const children = text("Children", "Default button");
  return <Button onClick={action("clicked")}>{children}</Button>;
};

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const BasicButtons = () => {
  const children = text("Children", "Button");
  const fullWidth = boolean("fullWidth", false);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);

  return (
    <Button onClick={action("clicked")} fullWidth={fullWidth} type={type} size={size}>
      {children}
    </Button>
  );
};

BasicButtons.story = {
  name: "Basic buttons",

  parameters: {
    info:
      "Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const ButtonWithIcons = () => {
  const children = text("Children", "Button");
  const fullWidth = boolean("fullWidth", false);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const IconLeft = getIcon(getIcons("iconLeft", "PlusCircle"));
  const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));
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
    info:
      "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const FullWidthButtons = () => {
  const children = text("Children", "Button");
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const IconLeft = getIcon(getIcons("iconLeft", "PlusCircle"));
  const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));

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
    info:
      "By default, a full width Button renders with the children centered. However, if icons are used, the content will align to the left by default. In such scenario, the centered prop can be used to center everything.",
  },
};

export const SubtleButtons = () => {
  const children = text("Children", "Button");
  const IconLeft = getIcon(getIcons("iconLeft", "CloseCircle"));

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
    info:
      "We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CircledButton = () => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], TYPE_OPTIONS.PRIMARY);
  const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));

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
    info:
      "Button can be also rendered in circled shape, but only when it does have iconLeft and not have children. Use title prop to ensure accessibility.",
  },
};

export const DestructiveButtons = () => {
  const children = text("Children", "Destructive button");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));

  return (
    <Button onClick={action("clicked")} type="critical" size={size} iconLeft={<IconLeft />}>
      {children}
    </Button>
  );
};

DestructiveButtons.story = {
  name: "Destructive buttons",

  parameters: {
    info:
      "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const ButtonAsALink = () => {
  const children = text("Children", "I am a link");
  const href = text("Href", "https://kiwi.com");
  const external = boolean("External", false);
  const disabled = boolean("Disabled", false);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));

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
    info:
      "If you need to, you can pass some href to this component and it will automatically render into anchor.",
  },
};

export const Playground = () => {
  const children = text("Children", "Button");
  const href = text("Href", "");
  const external = boolean("External", false);
  const asComponent = text("asComponent", "button");
  const disabled = boolean("Disabled", false);
  const fullWidth = boolean("fullWidth", false);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const width = number("Width", 0);
  const circled = boolean("Circled", false);
  const loading = boolean("Loading", false);
  const submit = boolean("Submit", false);
  const dataTest = text("dataTest", "test");
  const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));
  const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));
  const ariaExpanded = boolean("Aria expanded", false);
  const ariaControls = text("Aria controls", "element ID");
  const tabIndex = text("tabIndex", "0");
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.SMALL);
  const title = text("Title", "Additional information for accessibility");
  const rel = text("Rel", "nofollow");
  const contentAlign = select(
    "contentAlign",
    ["start", "center", "end", "space-between"],
    "center",
  );
  const contentWidth = text("contentWidth", "100%");

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

export const Accessibility = () => {
  const children = text("Children", "Button");
  const ariaExpanded = boolean("Aria expanded", false);
  const ariaControls = text("Aria controls", "element ID");
  const title = text("Title", "Additional information for accessibility");

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

export const Rtl = () => {
  const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));

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
