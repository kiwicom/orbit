import * as React from "react";
import { action } from "@storybook/addon-actions";

import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import SocialButton from ".";

export default {
  title: "SocialButton",
};

export const Apple = () => {
  return (
    <SocialButton type={TYPE_OPTIONS.APPLE} onClick={action("clicked")} fullWidth>
      Sign in with Apple{" "}
    </SocialButton>
  );
};

export const Facebook = () => {
  return (
    <SocialButton type={TYPE_OPTIONS.FACEBOOK} onClick={action("clicked")} fullWidth>
      Sign in with Facebook{" "}
    </SocialButton>
  );
};

export const Google = () => {
  return (
    <SocialButton type={TYPE_OPTIONS.GOOGLE} onClick={action("clicked")}>
      Sign in with Google
    </SocialButton>
  );
};

export const Twitter = () => {
  return (
    <SocialButton type={TYPE_OPTIONS.TWITTER} onClick={action("clicked")}>
      Sign in with Twitter{" "}
    </SocialButton>
  );
};

export const Email = () => {
  return (
    <SocialButton type={TYPE_OPTIONS.EMAIL} onClick={action("clicked")}>
      Sign in with Email
    </SocialButton>
  );
};

export const Rtl = () => (
  <RenderInRtl>
    <SocialButton type={TYPE_OPTIONS.APPLE}>Button</SocialButton>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
