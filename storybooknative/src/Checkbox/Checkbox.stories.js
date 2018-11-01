// @flow

/* eslint-disable jsx-a11y/accessible-emoji, import/no-unresolved, import/extensions */

import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";

import Checkbox from "./index";

storiesOf("Checkbox", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const label = text("Label", "Label");
    const info = text("Info", "help text here");
    const checked = boolean("Checked", false);
    const disabled = boolean("Disabled", false);
    const hasError = boolean("Has error", false);
    return (
      <Checkbox
        label={label}
        checked={checked}
        onChange={action("checked")}
        info={info}
        disabled={disabled}
        hasError={hasError}
      />
    );
  });
