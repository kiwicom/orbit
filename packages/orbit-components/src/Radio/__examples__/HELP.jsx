// @flow
import * as React from "react";

import Button from "../../Button";
import Radio from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Stack>
        <Radio
          label="Cabin bag"
          checked={checked}
          onChange={() => setChecked(!checked)}
          info="56 × 45 × 25 cm, 8 kg"
        />
        <Button type="secondary" onClick={() => setChecked(false)}>
          Clear
        </Button>
      </Stack>
    );
  },
  info: {
    title: "Help",
    description: "Guide users to the right choice by providing helpful text in the info prop.",
  },
};
