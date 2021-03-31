// @flow
import * as React from "react";

import Checkbox from "../index";
import TextLink from "../../TextLink";

export default {
  Example: (): React.Node => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Accept terms and conditions"
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
        hasError
      />
    );
  },
  info: {
    title: "Errors",
    description:
      "Show users there is an error with a checkbox by passing the hasError prop. Note that the checkbox will show the error only when checked and disabled are false.",
  },
};
