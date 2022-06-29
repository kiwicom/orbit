// @flow
import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import KeyValue from ".";

export const Default = (): React.Node => {
  const label = text("label", "Key");
  const value = text("value", "Value");
  const size = select("size", ["normal", "large"], "normal");

  return <KeyValue label={label} value={value} size={size} />;
};

export default {
  title: "KeyValue",
};
