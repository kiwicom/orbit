/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
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
addDecorator(withKnobs);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
