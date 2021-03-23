import * as React from "react";
import { InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => <InputField inlineLabel label="Given names" placeholder="Sofia Cruz" />,
  info: {
    title: "Input field with inline label",
    description:
      "In contexts with less space, use the inlineLabel prop to move the label into the field to make it more compact.",
  },
};
