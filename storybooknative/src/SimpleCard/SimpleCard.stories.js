// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";
import Text from "../Text/index";

import SimpleCard from "./index";

storiesOf("SimpleCard", module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <SimpleCard>
      <Text>Simple Card</Text>
    </SimpleCard>
  ))
  .add("Clickable card", () => (
    <SimpleCard onPress={action("clicked")}>
      <Text>Simple Card</Text>
    </SimpleCard>
  ));
