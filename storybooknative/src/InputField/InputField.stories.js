// @flow

import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";
import Text from "../Text";

import InputField from "./index";

storiesOf("InputField", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => {
    const label = <Text>Label</Text>;
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    return (
      <InputField
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
    );
  });
