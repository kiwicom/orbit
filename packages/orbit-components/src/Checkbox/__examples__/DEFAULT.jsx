// @flow
import * as React from "react";

import Checkbox from "../index";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Allow notifications"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
  info: {
    title: "Default checkbox",
    description: "A default checkbox should have a label to make it clear what it relates to.",
  },
};
