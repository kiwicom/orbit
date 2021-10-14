// @flow
import * as React from "react";

import InputField from "../index";

export default {
  Example: (): React.Node => (
    <InputField
      label="Password"
      placeholder="paSsw0rd"
      type="password"
      help="Use at least one uppercase letter and one number"
    />
  ),
  info: {
    title: "Input field help",
    description:
      "Help text can guide users to entering proper data. Note that an error message will override the help text.",
  },
};
