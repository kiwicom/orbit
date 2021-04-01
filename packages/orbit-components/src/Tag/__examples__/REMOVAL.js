// @flow
import * as React from "react";

import Button from "../../Button";
import Tag from "../index";

export default {
  Example: (): React.Node => {
    const [tag, setTag] = React.useState(true);
    return (
      <>
        {tag && <Tag onRemove={() => setTag(false)}>Bags</Tag>}
        {!tag && <Button onClick={() => setTag(true)}>Bring tag back</Button>}
      </>
    );
  },
  info: {
    title: "Removing tags",
    description: "Passing a function in <code>onRemove</code> adds a close button to the tag.",
  },
};
