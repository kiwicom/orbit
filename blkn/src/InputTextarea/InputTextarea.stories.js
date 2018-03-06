// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import InputTextarea from "./index";

storiesOf("InputTextarea", module)
  .add("default", () => <InputTextarea value="" onChange={action("onChange")} />)
  .add("label", () => (
    <InputTextarea
      label="Text label"
      value={"First line,\nsecond line,\nthird line..."}
      onChange={action("onChange")}
    />
  ))
  .add("empty", () => <InputTextarea value="" label="Text label" onChange={action("onChange")} />)
  .add("error", () => (
    <InputTextarea
      label="Text label"
      error="Error message"
      value="input value"
      onChange={action("onChange")}
    />
  ));
