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
        <Radio checked={checked} onChange={() => setChecked(!checked)} />
        <Button type="secondary" onClick={() => setChecked(false)}>
          Clear
        </Button>
      </Stack>
    );
  },
  info: {
    title: "Shape only",
    description:
      "In some cases, you may want to include only the shape of the radio. Make sure any visual information about the radio is accessible to everyone.",
  },
};
