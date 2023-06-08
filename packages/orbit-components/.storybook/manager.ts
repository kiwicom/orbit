// eslint-disable-next-line import/no-extraneous-dependencies
import { addons } from "@storybook/addons";

import orbitTheme from "./orbitTheme";

addons.setConfig({
  theme: orbitTheme,
  panelPosition: "bottom",
});
