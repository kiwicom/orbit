// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";

import NavigationLink from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("NavigationLink", module).add(
  "Playground",
  () => {
    const children = text("Children", "Content");
    const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
    const selected = boolean("selected", false);
    return (
      <NavigationLink onClick={action("clicked")} icon={<Icon />} selected={selected}>
        {children}
      </NavigationLink>
    );
  },
  {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
);
