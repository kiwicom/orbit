// @flow
import * as React from "react";

import SocialButton from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
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
