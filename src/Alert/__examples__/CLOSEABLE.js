// @flow
import * as React from "react";

import Alert from "../index";
import Button from "../../Button";

export default {
  Example: () => {
    const [opened, setOpened] = React.useState(true);
    return opened ? (
      <Alert icon title="You're got mail" onClose={() => setOpened(false)} />
    ) : (
      <Button type="secondary" onClick={() => setOpened(true)}>
        Open again
      </Button>
    );
  },
  info: {
    title: "Default Alert",
    description:
      "The recommend default use for an Alert is to have an icon and a title no longer than one line.",
  },
};
