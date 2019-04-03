// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";

import Button from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Button", module)
  .add(
    "Default",
    () => {
      const title = text("Title", "Default button");
      return <Button onClick={action("clicked")}>{title}</Button>;
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Basic buttons",
    () => {
      const title = text("Title", "Button");
      const block = boolean("Block", false);
      const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
      const size = select("Size", Object.values(SIZE_OPTIONS), "normal");

      return (
        <Button onClick={action("clicked")} block={block} type={type} size={size}>
          {title}
        </Button>
      );
    },
    {
      info:
        "Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Button with icons",
    () => {
      const title = text("Title", "Button");
      const block = boolean("Block", false);
      const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
      const size = select("Size", Object.values(SIZE_OPTIONS), "small");
      const IconLeft = getIcon(getIcons("iconLeft", "PlusCircle"));
      const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));
      return (
        <Button
          onClick={action("clicked")}
          block={block}
          type={type}
          size={size}
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
        >
          {title}
        </Button>
      );
    },
    {
      info:
        "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Facebook button",
    () => (
      <Button onClick={action("clicked")} type="facebook" iconLeft={<Icons.Facebook />} bordered>
        Sign in with Facebook
      </Button>
    ),
    {
      info: "We use social buttons only in normal size.",
    },
  )
  .add(
    "Google button",
    () => (
      <Button onClick={action("clicked")} type="google" iconLeft={<Icons.Google />} bordered>
        Sign in with Google
      </Button>
    ),
    {
      info: "We use social buttons only in normal size.",
    },
  )
  .add(
    "Status buttons",
    () => {
      const title = text("Title", "Button");
      const IconLeft = getIcon(getIcons("iconLeft", "CloseCircle"));

      return (
        <Stack>
          <Button
            onClick={action("clicked")}
            type="info"
            size="small"
            iconLeft={IconLeft && <IconLeft />}
          >
            {title}
          </Button>
          <Button
            onClick={action("clicked")}
            type="success"
            size="small"
            iconLeft={IconLeft && <IconLeft />}
          >
            {title}
          </Button>
          <Button
            onClick={action("clicked")}
            type="warning"
            size="small"
            iconLeft={IconLeft && <IconLeft />}
          >
            {title}
          </Button>
          <Button
            onClick={action("clicked")}
            type="critical"
            size="small"
            iconLeft={IconLeft && <IconLeft />}
          >
            {title}
          </Button>
        </Stack>
      );
    },
    {
      info:
        "We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Circled button",
    () => {
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const type = select(
        "Type",
        [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY],
        TYPE_OPTIONS.PRIMARY,
      );
      const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));

      return (
        <Button
          onClick={action("clicked")}
          size={size}
          type={type}
          iconLeft={IconLeft && <IconLeft />}
          circled
        />
      );
    },
    {
      info:
        "Button can be also rendered in circled shape, but only when it does have iconLeft and not have children.",
    },
  )
  .add(
    "Destructive buttons",
    () => {
      const title = text("Title", "Destructive button");
      const bordered = boolean("Bordered", false);
      const size = select("Size", Object.values(SIZE_OPTIONS), "normal");

      return (
        <Button
          onClick={action("clicked")}
          bordered={bordered}
          type="critical"
          size={size}
          iconLeft={<Icons.Remove />}
        >
          {title}
        </Button>
      );
    },
    {
      info:
        "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Button as a link",
    () => {
      const title = text("Title", "I am a link");
      const href = text("Href", "https://kiwi.com");
      const external = boolean("External", false);
      const disabled = boolean("Disabled", false);
      const size = select("Size", Object.values(SIZE_OPTIONS), "normal");

      return (
        <Button
          onClick={action("clicked")}
          href={href}
          external={external}
          size={size}
          disabled={disabled}
          bordered
          iconLeft={<Icons.Airplane />}
        >
          {title}
        </Button>
      );
    },
    {
      info:
        "If you need to, you can pass some href to this component and it will automatically render into anchor.",
    },
  )
  .add(
    "Playground",
    () => {
      const title = text("Title", "Button");
      const href = text("Href", undefined);
      const external = boolean("External", false);
      const component = text("Component", "button");
      const disabled = boolean("Disabled", false);
      const block = boolean("Block", false);
      const type = select("Type", Object.values(TYPE_OPTIONS), "primary");
      const size = select("Size", Object.values(SIZE_OPTIONS), "normal");
      const width = number("Width", 0);
      const bordered = boolean("Bordered", false);
      const circled = boolean("Circled", false);
      const loading = boolean("Loading", false);
      const submit = boolean("Submit", false);
      const dataTest = text("dataTest", "test");
      const IconLeft = getIcon(getIcons("iconLeft", "Airplane"));
      const IconRight = getIcon(getIcons("iconRight", "ChevronDown"));
      const ariaExpanded = boolean("Aria expanded", false);
      const ariaControls = text("Aria controls", "element ID");

      return (
        <Button
          onClick={action("clicked")}
          component={component}
          href={href}
          external={external}
          disabled={disabled}
          circled={circled}
          block={block}
          bordered={bordered}
          loading={loading}
          dataTest={dataTest}
          type={type}
          size={size}
          iconLeft={IconLeft && <IconLeft />}
          iconRight={IconRight && <IconRight />}
          submit={submit}
          width={width}
          ariaControls={ariaControls}
          ariaExpanded={ariaExpanded}
        >
          {title}
        </Button>
      );
    },
    {
      info: "Some description about this type of component. ",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Button type="info" icon={<Icons.Airplane />}>
          Button
        </Button>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
