import React from "react";
import { Button, Checkbox, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [checked, setChecked] = React.useState(false);
    const [saving, setSaving] = React.useState(false);

    React.useEffect(() => {
      let timeout;
      if (saving) timeout = setTimeout(() => setSaving(false), 1500);
      return () => clearTimeout(timeout);
    }, [saving]);

    return (
      <Stack>
        <Checkbox
          label="Allow notifications"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Button disabled={saving} onClick={() => setSaving(true)}>
          {saving ? "Saving" : "Save settings"}
        </Button>
      </Stack>
    );
  },
  info: {
    title: "Default checkbox",
    description: "A default checkbox should have a label to make it clear what it relates to.",
  },
};
