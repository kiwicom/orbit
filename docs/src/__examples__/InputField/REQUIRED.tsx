import React from "react";
import { InputField, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <OrbitProvider theme={defaultTheme}>
        <InputField
          required
          placeholder="your@email.com"
          label="Email"
          type="email"
          inputMode="email"
        />
      </OrbitProvider>
    );
  },
};
