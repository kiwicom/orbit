// @flow

import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../CenterView";
import defaultTokens from "../defaultTokens";

import Icon from "./index";

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Regular Icon", () => (
    <React.Fragment>
      <Icon name="V" />
    </React.Fragment>
  ))
  .add("Custom Icon", () => (
    <React.Fragment>
      <Icon name="V" style={{ color: defaultTokens.orbit.colorIconSuccess, fontSize: 80 }} />
    </React.Fragment>
  ));
