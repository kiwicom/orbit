// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { ButtonCommonProps } from "../primitives/ButtonPrimitive/index.d.ts";

declare module "@kiwicom/orbit-components/lib/Button";

type Type = "apple" | "facebook" | "google";

type OmittedButtonCommonProps = Diff<
  ButtonCommonProps,
  {
    readonly iconLeft?: React.ReactNode;
    readonly iconRight?: React.ReactNode;
    readonly circled?: boolean;
  }
>;

export interface Props extends OmittedButtonCommonProps {
  readonly type?: Type;
}

const SocialButton: React.AbstractComponent<Props, HTMLButtonElement>;
export { SocialButton, SocialButton as default };
