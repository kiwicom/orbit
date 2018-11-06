// @flow

import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";
import { SIZE_OPTIONS } from "./consts";

import InputField from "./index";

class InputFiledWithState extends React.Component<{}, { text: string }> {
  state = {
    text: "",
  };

  onChange = value => {
    this.setState({ text: value });
    action("change")(value);
  };
  render() {
    return (
      <InputField
        size={select("Size", SIZE_OPTIONS, "normal")}
        label={text("Label", "Label")}
        value={this.state.text}
        placeholder={text("Placeholder", "Placeholder")}
        onChangeText={this.onChange}
        disabled={boolean("Disabled", false)}
        required={boolean("Required", false)}
        inlineLabel={boolean("Inline label", false)}
        help={text("Help", "")}
        error={text("Error", "")}
        onFocus={action("focused")}
        onBlur={action("blurred")}
      />
    );
  }
}

storiesOf("InputField", module)
  .addDecorator(getStory => <CenterView align="flex-start">{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Playground", () => <InputFiledWithState />);
