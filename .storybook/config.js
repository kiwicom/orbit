/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, setAddon } from "@storybook/react";
import 'loki/configure-react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

setDefaults({
  sectionOptions: {
    showSource: true,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false,
  }
});
setAddon(chaptersAddon);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
