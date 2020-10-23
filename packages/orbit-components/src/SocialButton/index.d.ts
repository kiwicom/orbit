// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { ButtonCommonProps } from "../primitives/ButtonPrimitive/index";

declare module "@kiwicom/orbit-components/lib/Button";

export type Type = "apple" | "facebook" | "google" | "twitter";

type OmittedButtonCommonProps = Omit<ButtonCommonProps, "iconLeft" | "iconRight" | "circled">;

type Props = {
  readonly type?: Type;
} & OmittedButtonCommonProps;

declare const SocialButton: React.RefForwardingComponent<HTMLButtonElement, Props>;
export { SocialButton, SocialButton as default };
