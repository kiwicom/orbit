// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";
import { TYPES } from "./consts";

import NavigationLink from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("NavigationLink", module)
  .add(
    "Horizontal variant",
    () => {
      const children = text("Children", "Content");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      const selectable = boolean("selectable", true);
      const selected = boolean("selected", true);
      return (
        <NavigationLink
          onClick={action("clicked")}
          icon={<Icon />}
          selectable={selectable}
          selected={selected}
          type="horizontal"
        >
          {children}
        </NavigationLink>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Multiple horizontal",
    () => {
      const children = text("Children", "Content");
      return (
        <Stack direction="row" shrink spacing="none">
          <NavigationLink onClick={action("clicked")} selectable type="horizontal">
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} selectable selected type="horizontal">
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} selectable type="horizontal">
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} selectable type="horizontal">
            {children}
          </NavigationLink>
        </Stack>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Vertical variant",
    () => {
      const children = text("Children", "Content");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      const selectable = boolean("selectable", true);
      const selected = boolean("selected", false);
      return (
        <NavigationLink
          onClick={action("clicked")}
          icon={<Icon />}
          selectable={selectable}
          selected={selected}
          type="vertical"
        >
          {children}
        </NavigationLink>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Multiple vertical",
    () => {
      const children = text("Children", "Content");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      return (
        <Stack direction="column" shrink spacing="none">
          <NavigationLink onClick={action("clicked")} icon={<Icon />} type="vertical">
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} icon={<Icon />} type="vertical">
            {children}
          </NavigationLink>
          <NavigationLink
            onClick={action("clicked")}
            icon={<Icon />}
            type="vertical"
            selected
            selectable
          >
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} icon={<Icon />} type="vertical">
            {children}
          </NavigationLink>
        </Stack>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const children = text("Children", "Content");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      const selectable = boolean("selectable", true);
      const selected = boolean("selected", false);
      const ariaLabel = text("ariaLabel", null);
      const dataTest = text("dataTest", "test");
      const href = text("href", null);
      const external = boolean("external", false);
      const tabIndex = text("tabIndex", null);
      const type = select("type", Object.values(TYPES), TYPES.HORIZONTAL);
      return (
        <NavigationLink
          type={type}
          onClick={action("clicked")}
          icon={<Icon />}
          ariaLabel={ariaLabel}
          dataTest={dataTest}
          href={href}
          external={external}
          tabIndex={tabIndex}
          selectable={selectable}
          selected={selected}
        >
          {children}
        </NavigationLink>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );
