import * as React from "react";
import { InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <InputField
      label="Password"
      placeholder="paSsw0rd"
      type="password"
      help="Use at least one uppercase letter and one number"
      error="Your password must contain a number"
    />
  ),
  info: {
    title: "Error messages",
    description:
      "Include error messages when validation isn't passed, either on change in focus or form submission. Note that an error message will override any help text.",
  },
};
