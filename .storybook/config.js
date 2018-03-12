/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from "@storybook/react";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
