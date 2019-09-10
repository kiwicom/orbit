// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";

import NavigationLink from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("NavigationLink", module)
  .add(
    "Default",
    () => {
      const children = text("Children", "Content");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      return (
        <NavigationLink onClick={action("clicked")} icon={<Icon />}>
          {children}
        </NavigationLink>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Multiple links",
    () => {
      const children = text("Children", "Content");
      return (
        <Stack direction="column" shrink spacing="none">
          <NavigationLink onClick={action("clicked")} selectable>
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} selectable selected>
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} selectable>
            {children}
          </NavigationLink>
          <NavigationLink onClick={action("clicked")} selectable>
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
      return (
        <NavigationLink
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
