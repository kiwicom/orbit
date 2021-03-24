import * as React from "react";
import { Checkbox } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox checked={checked} onChange={() => setChecked(!checked)} />;
  },
  info: {
    title: "Shape only",
    description:
      "In some cases, you may want to include only the shape of the checkbox. Make sure any visual information about the checkbox is accessible to everyone.",
  },
};
