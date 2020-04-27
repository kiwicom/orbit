// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import SocialButton from "./index";

storiesOf("SocialButton", module)
  .add("Apple", () => {
    const children = text("Children", "Sign in with Apple");
    return (
      <SocialButton type={TYPE_OPTIONS.APPLE} onClick={action("clicked")}>
        {children}
      </SocialButton>
    );
  })
  .add("Facebook", () => {
    const children = text("Children", "Sign in with Facebook");
    return (
      <SocialButton type={TYPE_OPTIONS.FACEBOOK} onClick={action("clicked")}>
        {children}
      </SocialButton>
    );
  })
  .add("Google", () => {
    const children = text("Children", "Sign in with Google");
    return (
      <SocialButton type={TYPE_OPTIONS.GOOGLE} onClick={action("clicked")}>
        {children}
      </SocialButton>
    );
  })
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <SocialButton type={TYPE_OPTIONS.APPLE} iconRight={<Icons.Airplane />}>
          Button
        </SocialButton>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
