import React from "react";
import { InputField, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <InputField label="Given names" placeholder="Sofia Cruz" />
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "InputField",
      knobs: [
        { name: "error", type: "text", defaultValue: "" },
        { name: "help", type: "text", defaultValue: "" },
        { name: "value", type: "text", defaultValue: "" },
        { name: "required", type: "boolean", defaultValue: false },
        { name: "minValue", type: "number", defaultValue: "" },
        { name: "maxValue", type: "number", defaultValue: "" },
        { name: "minLength", type: "number", defaultValue: "" },
        { name: "maxLength", type: "number", defaultValue: "" },
        { name: "inlineLabel", type: "boolean", defaultValue: false },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "placeholder", type: "text", defaultValue: "Sofia Cruz" },
        { name: "label", type: "text", defaultValue: "Given names" },
        { name: "autoFocus", type: "boolean", defaultValue: false },
        { name: "readOnly", type: "boolean", defaultValue: false },
        {
          name: "inputMode",
          type: "select",
          options: ["numeric", "tel", "decimal", "email", "url", "search", "text", "none"],
          defaultValue: "text",
        },
        {
          name: "type",
          type: "select",
          options: ["text", "number", "email", "password", "passportid"],
          defaultValue: "text",
        },
      ],
    },
  ],
};
