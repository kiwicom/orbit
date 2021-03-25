// @flow
import { storiesOf } from "@storybook/react";

import * as examples from "./examples";

const storyFn = storiesOf("Examples", module);

Object.keys(examples).forEach(key => {
  const {
    Example,
    info: { description },
  } = examples[key];
  storyFn.add(key, Example, {
    info: description,
  });
});
