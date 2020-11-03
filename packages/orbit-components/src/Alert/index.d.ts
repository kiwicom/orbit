// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import AlertButton from "./AlertButton";

type Type = "info" | "success" | "warning" | "critical";

declare module "@kiwicom/orbit-components/lib/Alert";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly type?: Type;
  readonly children?: React.ReactNode;
  readonly title?: Common.Translation;
  readonly icon?: boolean | React.ReactElement;
  readonly closable?: boolean;
  readonly inlineActions?: React.ReactNode;
  readonly onClose?: Common.Callback;
}

declare const Alert: React.FunctionComponent<Props>;
export { Alert, Alert as default, AlertButton };
