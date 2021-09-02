import React from "react";
import { Button, Stack, Radio } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Stack>
        <Radio
          label="Cabin bag"
          checked={checked}
          onChange={() => setChecked(!checked)}
          info="56 × 45 × 25 cm, 8 kg"
          hasError
        />
        <Button type="secondary" onClick={() => setChecked(false)}>
          Clear
        </Button>
      </Stack>
    );
  },
  info: {
    title: "Errors",
    description:
      "Show users there is an error with a radio by passing the hasError prop. Note that the radio will show the error only when checked and disabled are false.",
  },
};
