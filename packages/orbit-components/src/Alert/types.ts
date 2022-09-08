// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Type = "info" | "success" | "warning" | "critical";
export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly type?: Type;
  readonly children?: React.ReactNode;
  readonly title?: Common.Translation;
  readonly icon?: boolean | React.ReactElement;
  readonly closable?: boolean;
  readonly inlineActions?: React.ReactNode;
  readonly onClose?: Common.Callback;
  readonly suppressed?: boolean;
}
