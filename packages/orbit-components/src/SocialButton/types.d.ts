// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";

export type Type = "apple" | "facebook" | "google" | "twitter" | "email";

type OmittedButtonCommonProps = Omit<ButtonCommonProps, "iconLeft" | "iconRight" | "circled">;

export type Props = {
  readonly type?: Type;
  readonly size?: Size;
} & OmittedButtonCommonProps;
