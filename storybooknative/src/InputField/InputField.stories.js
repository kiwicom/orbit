// @flow

import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";
import { SIZE_OPTIONS } from "./consts";

import InputField from "./index";

storiesOf("InputField", module)
  .addDecorator(getStory => <CenterView align="flex-start">{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Playground", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const required = boolean("Required", false);
    const inlineLabel = boolean("Inline label", false);
    const disabled = boolean("Disabled", false);
    const size = select("Size", SIZE_OPTIONS, "normal");
    const help = text("Help", "");
    const error = text("Error", "");
    return (
      <InputField
        size={size}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
        disabled={disabled}
        required={required}
        inlineLabel={inlineLabel}
        help={help}
        error={error}
        onFocus={action("focused")}
        onBlur={action("blurred")}
      />
    );
  });
