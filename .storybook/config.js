/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { initScreenshot } from "storybook-chrome-screenshot";

addDecorator(initScreenshot());

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
