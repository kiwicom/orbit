import * as React from "react";
import { SocialButton, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <SocialButton type="apple">Sign in with Apple </SocialButton>
      <SocialButton type="facebook">Sign in with Facebook </SocialButton>
      <SocialButton type="google">Sign in with Google </SocialButton>
      <SocialButton type="twitter">Sign in with Twitter </SocialButton>
    </Stack>
  ),
  info: {
    title: "Types",
    description: "Social buttons automatically display the logo for the selected service.",
  },
};
