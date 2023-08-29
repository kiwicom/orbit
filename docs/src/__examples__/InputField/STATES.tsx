import React from "react";
import { InputField, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <InputField
          error="Please enter your email"
          placeholder="your@email.com"
          label="Email"
          type="email"
          inputMode="email"
        />
      </OrbitProvider>
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
