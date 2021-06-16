import * as React from "react";
import { Button, Checkbox, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [checked, setChecked] = React.useState(false);
    const [saved, setSaved] = React.useState(false);

    React.useEffect(() => {
      let timeout;
      if (saved) timeout = setTimeout(() => setSaved(false), 1500);
      return () => clearTimeout(timeout);
    }, [saved]);

    return (
      <Stack>
        <Checkbox
          label="Allow notifications"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Button disabled={saved} onClick={() => setSaved(true)}>
          {saved ? "Saving" : "Save settings"}
        </Button>
      </Stack>
    );
  },
  info: {
    title: "Default checkbox",
    description: "A default checkbox should have a label to make it clear what it relates to.",
  },
};
