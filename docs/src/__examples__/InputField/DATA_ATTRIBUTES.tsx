import * as React from "react";
import { InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <InputField
      label="Given names"
      placeholder="Sofia Cruz"
      dataAttrs={{ "data-recording-ignore": true }}
    />
  ),
  info: {
    title: "Data attributes",
    description:
      "If you need to pass data attributes to the input field (such as if you need to exclude the entered data from any recording to protect privacy), use the dataAttrs prop.",
  },
};
