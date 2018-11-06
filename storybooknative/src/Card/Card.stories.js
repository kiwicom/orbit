// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";
import Text from "../Text/index";

import Card from "./index";

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Card>
      <Text>Card</Text>
    </Card>
  ))
  .add("Clickable card", () => (
    <Card onPress={action("clicked")}>
      <Text>Card</Text>
    </Card>
  ));
