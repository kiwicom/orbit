import React from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";

export default {
  Example: () => {
    return (
      <InputField
        error="Please enter your email"
        placeholder="your@email.com"
        label="Email"
        type="email"
        inputMode="email"
      />
    );
  },
  exampleVariants: [
    {
      name: "Error",
      code: `
      () => <InputField
      error="Please enter your email"
      placeholder="your@email.com"
      label="Email"
      type="email"
      inputMode="email"
    />
  `,
    },
    {
      name: "Help",
      code: `
      () => <InputField
      help="Enter your email in the format name@example.com"
      placeholder="your@email.com"
      label="Email"
      type="email"
      inputMode="email"
    />
  `,
    },
  ],
};
