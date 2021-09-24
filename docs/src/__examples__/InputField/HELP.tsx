import React from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";

export default {
  Example: () => {
    const [value, setValue] = React.useState("");
    return (
      <InputField
        help="Enter your email in the format name@example.com"
        placeholder="your@email.com"
        label="Email"
        type="email"
        inputMode="email"
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
    );
  },
};
