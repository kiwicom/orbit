// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Checkbox from "./../src/Checkbox";

storiesOf("Checkbox", module)
  .add("default", () => <Checkbox label="Text label" onChange={action("changed")} />)
  .add("checked", () => <Checkbox label="Text label" onChange={action("changed")} checked />);
