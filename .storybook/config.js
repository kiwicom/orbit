/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, setAddon } from "@storybook/react";
import 'loki/configure-react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
