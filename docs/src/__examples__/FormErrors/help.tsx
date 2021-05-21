import * as React from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";

export default {
  Example: () => (
    <InputField
      help="Enter your email in the format name@example.com"
      label="Email"
      type="email"
      inputMode="email"
    />
  ),
  info: {
    title: "",
    description: "",
  },
};
