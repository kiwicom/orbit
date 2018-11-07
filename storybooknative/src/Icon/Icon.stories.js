// @flow

import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../CenterView";
import defaultTokens from "../defaultTokens";
import IconsList from "./IconsList";

import Icon from "./index";

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Regular Icon", () => (
    <React.Fragment>
      <Icon name="check" />
    </React.Fragment>
  ))
  .add("Custom Icon", () => (
    <React.Fragment>
      <Icon name="check" style={{ color: "#46B655", fontSize: 80 }} />
    </React.Fragment>
  ))
  .add("All Icons list", () => (
    <React.Fragment>
      <IconsList />
    </React.Fragment>
  ));
