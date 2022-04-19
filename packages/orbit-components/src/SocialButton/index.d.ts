// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive";

export type Type = "apple" | "facebook" | "google" | "twitter" | "email";

type OmittedButtonCommonProps = Omit<ButtonCommonProps, "iconLeft" | "iconRight" | "circled">;

export type Props = {
  readonly type?: Type;
  readonly size?: Size;
} & OmittedButtonCommonProps;

declare const SocialButton: React.RefForwardingComponent<HTMLButtonElement, Props>;
export { SocialButton, SocialButton as default };
