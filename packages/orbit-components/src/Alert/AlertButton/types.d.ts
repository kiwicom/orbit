// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import type { ButtonCommonProps } from "../../primitives/ButtonPrimitive/types";

export type Type =
  | "info"
  | "secondary"
  | "success"
  | "warning"
  | "critical"
  | "infoSubtle"
  | "successSubtle"
  | "warningSubtle"
  | "criticalSubtle";

type OmittedButtonCommonProps = Omit<ButtonCommonProps, "size">;

export type Props = {
  readonly type?: Type;
} & OmittedButtonCommonProps;
