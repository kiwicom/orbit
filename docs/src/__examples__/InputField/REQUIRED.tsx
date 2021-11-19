import React from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";

export default {
  Example: () => {
    return (
      <InputField
        required
        placeholder="your@email.com"
        label="Email"
        type="email"
        inputMode="email"
      />
    );
  },
};