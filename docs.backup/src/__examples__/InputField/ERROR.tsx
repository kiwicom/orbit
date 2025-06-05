import React from "react";
import { InputField, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [value, setValue] = React.useState("");
    return (
      <OrbitProvider theme={defaultTheme}>
        <InputField
          error={!value && "Please enter your email"}
          help="Enter your email in the format name@example.com"
          placeholder="your@email.com"
          label="Email"
          type="email"
          inputMode="email"
          value={value}
          onChange={event => setValue(event.currentTarget.value)}
        />
      </OrbitProvider>
    );
  },
};
