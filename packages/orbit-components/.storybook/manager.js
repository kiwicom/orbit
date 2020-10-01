// @flow
import { create } from "@storybook/theming";
import "@storybook/addon-knobs/register";
import "@storybook/addon-actions/register";

export default create({
  brandTitle: "Orbit",
  brandUrl: "https://orbit.kiwi",
  brandImage: "https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png",
});
