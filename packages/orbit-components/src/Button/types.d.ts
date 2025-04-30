// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Ref } from "react";

import type {
  ButtonCommonProps,
  DownloadWithHrefConditionalProps,
  FullWidthConditionalProps,
  Size,
} from "../primitives/ButtonPrimitive/types";

export type Type =
  | "primary"
  | "secondary"
  | "critical"
  | "primarySubtle"
  | "criticalSubtle"
  | "white"
  | "bundleBasic"
  | "bundleMedium"
  | "bundleTop";

export type ButtonStates = "default" | "hover" | "active" | "focus";
type OmittedButtonCommonProps = Omit<ButtonCommonProps, "className">;

interface ButtonProps extends OmittedButtonCommonProps {
  readonly type?: Type;
  readonly size?: Size;
  readonly ref?: Ref<HTMLButtonElement>;
}

export type Props = ButtonProps & FullWidthConditionalProps & DownloadWithHrefConditionalProps;
