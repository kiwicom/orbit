// @flow

import * as React from "react";
import { View } from "react-native";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import { ALIGN_OPTIONS, SIZE_OPTIONS, TYPE_OPTIONS, WEIGHT_OPTIONS } from "./consts";
import CenterView from "../../src/CenterView";

import Text from "./index";

const customText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, nulla at luctus ultrices, dolor.";

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Primary text", () => <Text>{customText}</Text>)
  .add("Secondary text", () => <Text type="secondary">{customText}</Text>)
  .add("Attention text", () => <Text type="attention">{customText}</Text>)
  .add("Status text", () => (
    <React.Fragment>
      <Text type="info">{customText}</Text>
      <Text type="success">{customText}</Text>
      <Text type="warning">{customText}</Text>
      <Text type="critical">{customText}</Text>
    </React.Fragment>
  ))
  .add("White text", () => (
    <View style={{ backgroundColor: "#46515e", padding: 10 }}>
      <Text type="white">{customText}</Text>
    </View>
  ))
  .add("Playground", () => {
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PRIMARY);
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
    const weight = select("Weight", Object.values(WEIGHT_OPTIONS), WEIGHT_OPTIONS.NORMAL);
    const align = select("Align", Object.values(ALIGN_OPTIONS), ALIGN_OPTIONS.LEFT);
    const uppercase = boolean("Uppercase", false);
    const italic = boolean("Italic", false);

    return (
      <Text
        type={type}
        size={size}
        weight={weight}
        align={align}
        uppercase={uppercase}
        italic={italic}
      >
        {customText}
      </Text>
    );
  });
