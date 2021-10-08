// @flow
import * as React from "react";

import Checkbox from "../index";
import TextLink from "../../TextLink";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Accept notifications"
        checked={checked}
        onChange={() => setChecked(!checked)}
        info={
          <div>
            You must accept the{" "}
            <TextLink type="secondary" stopPropagation href="https://orbit.kiwi" external>
              Terms and Conditions
            </TextLink>{" "}
            before continuing. .
          </div>
        }
      />
    );
  },
  info: {
    title: "Help",
    description: "Guide users to the right choice by providing helpful text in the info prop.",
  },
};
