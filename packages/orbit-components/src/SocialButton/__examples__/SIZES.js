// @flow
import * as React from "react";

import SocialButton from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <SocialButton size="small">Sign in with Apple </SocialButton>
      <SocialButton>Sign in with Apple </SocialButton>
      <SocialButton size="large">Sign in with Apple </SocialButton>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Buttons come in three sizes: small, normal, and large.",
  },
};
