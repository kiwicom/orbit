// @flow
import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

import orbitTheme from "./orbitTheme";

export default create({
  brandTitle: "Orbit",
  brandUrl: "https://orbit.kiwi",
  brandImage: "https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png",
});

addons.setConfig({
  theme: orbitTheme,
  panelPosition: "bottom",
});
