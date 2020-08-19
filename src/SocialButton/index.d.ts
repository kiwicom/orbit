// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { ButtonCommonProps } from "../primitives/ButtonPrimitive/index";

declare module "@kiwicom/orbit-components/lib/Button";

type Type = "apple" | "facebook" | "google" | "twitter";

type OmittedButtonCommonProps = Exclude<
  ButtonCommonProps,
  {
    readonly iconLeft?: React.ReactNode;
    readonly iconRight?: React.ReactNode;
    readonly circled?: boolean;
  }
>;

type Props = {
  readonly type?: Type;
} & OmittedButtonCommonProps;

declare const SocialButton: React.RefForwardingComponent<HTMLButtonElement, Props>;
export { SocialButton, SocialButton as default };
