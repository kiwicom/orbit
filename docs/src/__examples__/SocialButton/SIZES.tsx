import * as React from "react";
import { SocialButton, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
