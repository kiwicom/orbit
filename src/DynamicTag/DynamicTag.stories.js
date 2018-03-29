// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";

import Text from "./index";

storiesOf("DynamicTag", module)
  .addDecorator(withKnobs)
  .add("default", () => <Text>children</Text>)
  .add("label", () => <Text tag="div">children</Text>)
  .add("With knobs", () => {
    const tag = select(
      "Tag",
      {
        span: "span",
        div: "div",
        label: "label",
      },
      "span",
    );
    const label = text("Label", "Hello Button");
    return <Text tag={tag}>{label}</Text>;
  });
