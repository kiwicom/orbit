// @flow

import { storiesOf } from "@storybook/react";

import * as examples from "./examples";

const getNameWithComponent = key => {
  const names = key.split(/(?<=[a-z])(?=[A-Z])/);
  return `${names[0]} ${names[1]}`;
};

const storyFn = storiesOf("Examples", module);

Object.keys(examples).forEach(key => {
  const {
    Example,
    info: { description },
  } = examples[key];
  storyFn.add(getNameWithComponent(key), Example, {
    info: description,
  });
});
