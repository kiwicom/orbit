import * as React from "react";
import { InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => <InputField label="Given names" placeholder="Sofia Cruz" required />,
  info: {
    title: "Required input field",
    description: "To mark an input field as required, pass the required prop.",
  },
};
