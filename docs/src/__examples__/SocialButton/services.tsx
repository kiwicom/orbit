import React from "react";
import { SocialButton } from "@kiwicom/orbit-components";

export default {
  Example: () => <SocialButton type="apple">Sign in with Apple </SocialButton>,
  exampleVariants: [
    { name: "apple", code: `() => <SocialButton type="apple">Sign in with Apple</SocialButton>` },
    {
      name: "facebook",
      code: `() => <SocialButton type="facebook">Sign in with Facebook</SocialButton>`,
    },
    {
      name: "google",
      code: `() => <SocialButton type="google">Sign in with Google</SocialButton>`,
    },
    {
      name: "twitter",
      code: `() => <SocialButton type="twitter">Sign in with Twitter</SocialButton>`,
    },
  ],
};
