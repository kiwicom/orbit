// @flow
import { addDecorator, addParameters } from "@storybook/react";

import "loki/configure-react";
import orbitTheme from "./orbitTheme";
import orbitDecorator from "./orbitDecorator";

addParameters({
  options: {
    panelPosition: "bottom",
    theme: orbitTheme,
  },
});

addDecorator(orbitDecorator);
