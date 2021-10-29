// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { ButtonCommonProps } from "../../primitives/ButtonPrimitive";

type Type =
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "infoSubtle"
  | "successSubtle"
  | "warningSubtle"
  | "criticalSubtle";

type OmittedButtonCommonProps = Omit<ButtonCommonProps, "size">;

type Props = {
  readonly type?: Type;
} & OmittedButtonCommonProps;

declare const AlertButton: React.FunctionComponent<Props>;
export { AlertButton, AlertButton as default };
