// @flow
import * as React from "react";

import Alert, { AlertButton } from "../index";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Alert
      icon={<Icons.Airplane />}
      inlineActions={
        <AlertButton href="#" size="small" type="info">
          I am a link
        </AlertButton>
      }
      title="You can change the title by changing the Title knob"
    />
  ),
  info: {
    title: "Inline actions",
    description:
      "Passing a inlineActions will cause children to be ignored. inlineActions should be used for displaying buttons inside short alerts which only have a title.",
  },
};
