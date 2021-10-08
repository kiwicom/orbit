// @flow
import * as React from "react";

import Alert, { AlertButton } from "../index";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Alert
      icon={<Icons.Airplane />}
      inlineActions={
        <AlertButton href="#" type="info">
          Open link
        </AlertButton>
      }
      title="Fly with us and earn rewards"
    />
  ),
  info: {
    title: "Inline actions",
    description:
      "Passing inlineActions will cause children to be ignored. inlineActions should be used to display buttons inside short alerts that only have a title.",
  },
};
