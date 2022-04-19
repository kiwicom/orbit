// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import SocialButton from ".";

export default {
  title: "SocialButton",
};

export const Apple = (): React.Node => {
  return (
    <SocialButton type={TYPE_OPTIONS.APPLE} onClick={action("clicked")} fullWidth>
      Sign in with Apple{" "}
    </SocialButton>
  );
};

export const Facebook = (): React.Node => {
  return (
    <SocialButton type={TYPE_OPTIONS.FACEBOOK} onClick={action("clicked")} fullWidth>
      Sign in with Facebook{" "}
    </SocialButton>
  );
};

export const Google = (): React.Node => {
  return (
    <SocialButton type={TYPE_OPTIONS.GOOGLE} onClick={action("clicked")}>
      Sign in with Google
    </SocialButton>
  );
};

export const Twitter = (): React.Node => {
  return (
    <SocialButton type={TYPE_OPTIONS.TWITTER} onClick={action("clicked")}>
      Sign in with Twitter{" "}
    </SocialButton>
  );
};

export const Email = (): React.Node => {
  return (
    <SocialButton type={TYPE_OPTIONS.EMAIL} onClick={action("clicked")}>
      Sign in with Email
    </SocialButton>
  );
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <SocialButton type={TYPE_OPTIONS.APPLE} iconRight={<Icons.Airplane />}>
      Button
    </SocialButton>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
