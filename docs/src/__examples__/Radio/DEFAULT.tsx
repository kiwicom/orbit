import React from "react";
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
  exampleKnobs: [
    {
      component: "Radio",
      knobs: [
        { name: "label", type: "text", defaultValue: "Direct connections" },
        { name: "info", type: "text", defaultValue: "" },
        { name: "value", type: "text", defaultValue: "" },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "hasError", type: "boolean", defaultValue: false },
        { name: "checked", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
