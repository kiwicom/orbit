import * as React from "react";
import { Button, Stack, Radio } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Stack>
        <Radio label="Direct connections" checked={checked} onChange={() => setChecked(!checked)} />
        <Button type="secondary" onClick={() => setChecked(false)}>
          Clear
        </Button>
      </Stack>
    );
  },
  info: {
    title: "Default radio",
    description: "A default radio should have a label to make it clear what it relates to.",
  },
};
