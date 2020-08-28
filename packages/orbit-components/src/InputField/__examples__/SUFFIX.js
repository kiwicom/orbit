// @flow
import * as React from "react";

import InputField from "../index";
import ButtonLink from "../../ButtonLink";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <Stack direction="column">
        <InputField label="Maximum price" type="number" suffix="Kč" />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          suffix={
            <ButtonLink
              type="inline"
              iconLeft={
                showPassword ? (
                  <Icons.VisibilityOff ariaLabel="Hide password" />
                ) : (
                  <Icons.Visibility ariaLabel="Show password" />
                )
              }
              onClick={() => setShowPassword(!showPassword)}
            />
          }
        />
      </Stack>
    );
  },
  info: {
    title: "Suffixes",
    description:
      "You can add context to an input field with a text suffix. To add an action, use a button link as the suffix.",
  },
};
