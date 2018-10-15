// @flow

/* eslint-disable jsx-a11y/accessible-emoji, import/no-unresolved, import/extensions */

import React from "react";
import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import Button from "../../src/Button";
import CenterView from "../../src/CenterView";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Default", () => <Button onPress={action("clicked")}>Default button</Button>)
  .add("Bordered", () => (
    <Button bordered onPress={action("clicked")}>
      {"Default button"}
    </Button>
  ))
  .add("Basic buttons", () => {
    const title = text("Title", "Basic button");
    const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");
    return (
      <Button onPress={action("clicked")} type={type} size={size}>
        {title}
      </Button>
    );
  });
