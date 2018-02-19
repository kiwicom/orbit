import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../src/Input";

storiesOf("Input", module)
  .add("default", () => <Input value="" onChange={action("onChange")} />)
  .add("label", () => (
    <Input label="Text label" value="input value" onChange={action("onChange")} />
  ))
  .add("error", () => (
    <Input
      label="Text label"
      error="Error message"
      value="input value"
      onChange={action("onChange")}
    />
  ));
