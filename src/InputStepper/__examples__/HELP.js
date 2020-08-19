// @flow
import * as React from "react";

import InputStepper from "../index";

export default {
  Example: () => (
    <div style={{ maxWidth: "11em" }}>
      <InputStepper
        label="Travelers"
        minValue={1}
        defaultValue={2}
        maxValue={10}
        titleIncrement="Add a traveler"
        titleDecrement="Remove a traveler"
        help="At least 1 and no more than 10 travelers"
      />
    </div>
  ),
  info: {
    title: "Help",
    description:
      "Help text can guide users to making the right choice. Note that an error message will override the help text.",
  },
};
