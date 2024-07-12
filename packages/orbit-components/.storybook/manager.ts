import { addons } from "@storybook/manager-api";

import orbitTheme from "./orbitTheme";

addons.setConfig({
  theme: orbitTheme,
  panelPosition: "bottom",
});
