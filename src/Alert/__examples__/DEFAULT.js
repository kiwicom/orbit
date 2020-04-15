// @flow
import * as React from "react";

import Alert from "../index";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Alert icn={<Icons.ChevronRight />} title="The quick, brown fox jumps over a lazy dog." />
  ),
  info: {
    title: "Default state",
    description:
      "The default usage for Alert component is with an icon and title that should be longer than one line.",
  },
};
