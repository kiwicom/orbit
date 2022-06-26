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
  exampleKnobs: [
    {
      component: "Checkbox",
      knobs: [
        { name: "checked", type: "boolean", defaultValue: false },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "hasError", type: "boolean", defaultValue: false },
        { name: "info", type: "text", defaultValue: "" },
        { name: "label", type: "text", defaultValue: "Allow notifications" },
      ],
    },
  ],
};
