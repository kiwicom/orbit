// @flow

import { storiesOf } from "@storybook/react";

import * as examples from "./examples";

const storyFn = storiesOf("Examples", module);

// Turned off the docs for Examples, it causes error
Object.keys(examples).forEach(key => {
  const {
    Example,
    info: { description },
  } = examples[key];

  storyFn.add(key, Example, {
    info: description,
    docs: {
      page: null,
    },
  });
});
