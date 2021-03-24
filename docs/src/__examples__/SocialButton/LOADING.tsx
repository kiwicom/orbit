import * as React from "react";
import { SocialButton } from "@kiwicom/orbit-components";

export default {
  Example: () => <SocialButton loading>Sign in with Apple </SocialButton>,
  info: {
    title: "Loading",
    description:
      "Loading buttons are useful when content needs to be loaded before the user can take an action.",
  },
};
