// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";

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
      const selected = boolean("selected", false);
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
    "Playground",
    () => {
      const children = text("Children", "Content");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      const selected = boolean("selected", false);
      return (
        <NavigationLink
          onClick={action("clicked")}
          icon={<Icon />}
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
  );
