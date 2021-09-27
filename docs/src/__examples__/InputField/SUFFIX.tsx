import React from "react";
import { InputField, ButtonLink, Stack } from "@kiwicom/orbit-components";
import { Visibility, VisibilityOff } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <Stack direction="column">
        <InputField
          label="Maximum price"
          type="number"
          suffix={<div style={{ paddingRight: "12px" }}>Kč</div>}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          suffix={
            <ButtonLink
              type="primary"
              iconLeft={
                showPassword ? (
                  <VisibilityOff ariaLabel="Hide password" />
                ) : (
                  <Visibility ariaLabel="Show password" />
                )
              }
              compact
              onClick={() => setShowPassword(!showPassword)}
            />
          }
        />
      </Stack>
    );
  },
};
