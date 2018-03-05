// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import InputText from "./index";

storiesOf("InputText", module)
  .add("default", () => <InputText value="" onChange={action("onChange")} />)
  .add("label", () => (
    <InputText label="Text label" value="input value" onChange={action("onChange")} />
  ))
  .add("empty", () => <InputText label="Text label" onChange={action("onChange")} value="" />)
  .add("error", () => (
    <InputText
      label="Text label"
      error="Error message"
      value="input value"
      onChange={action("onChange")}
    />
  ));
