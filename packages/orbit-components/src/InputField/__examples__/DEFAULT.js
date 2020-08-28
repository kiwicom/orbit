// @flow
import * as React from "react";

import InputField from "../index";

export default {
  Example: () => <InputField label="Given names" placeholder="Sofia Cruz" />,
  info: {
    title: "Default input field",
    description:
      "By default, the input field offers a place to enter generic text with a clearly defined focus state. Labels and placeholders help guide users with what to input.",
  },
};
