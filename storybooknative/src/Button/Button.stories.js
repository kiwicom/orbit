// @flow

/* eslint-disable jsx-a11y/accessible-emoji, import/no-unresolved, import/extensions */

import React from "react";
import { action } from "@storybook/addon-actions";
import { number, boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import Button from "../../src/Button";
import CenterView from "../../src/CenterView";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Default", () => <Button onPress={action("clicked")}>Default button</Button>)
  .add("Bordered", () => {
    const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
    return (
      <Button bordered onPress={action("clicked")} type={type}>
        {"Default button"}
      </Button>
    );
  })
  .add("Playground", () => {
    const title = text("Title", "Basic button");
    const type = select("Type", [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], "primary");
    const size = select("Size", Object.values(SIZE_OPTIONS), "normal");
    const disabled = boolean("Disabled", false);
    const block = boolean("Block", false);
    const width = number("Width", 0);
    const bordered = boolean("Bordered", false);
    const circled = boolean("Circled", false);

    return (
      <Button
        onPress={action("clicked")}
        type={type}
        size={size}
        disabled={disabled}
        block={block}
        width={width}
        bordered={bordered}
        circled={circled}
      >
        {title}
      </Button>
    );
  });
