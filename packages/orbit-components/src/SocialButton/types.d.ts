// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Ref } from "react";

import type { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";

export type Type = "apple" | "facebook" | "google" | "X" | "email";

type OmittedButtonCommonProps = Omit<ButtonCommonProps, "iconLeft" | "iconRight" | "circled">;

export type Props = {
  readonly ref?: Ref<HTMLButtonElement>;
  readonly type?: Type;
  readonly size?: Size;
} & OmittedButtonCommonProps;
