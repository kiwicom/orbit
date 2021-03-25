import * as React from "react";
import { Tag } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [selected, setSelected] = React.useState(false);
    return (
      <Tag selected={selected} onClick={() => setSelected(!selected)}>
        Bags
      </Tag>
    );
  },
  info: {
    title: "Selected",
    description:
      "To show tags that users have selected, use the <code>selected</code> prop. Often best combined with <code>onClick</code>.",
  },
};
