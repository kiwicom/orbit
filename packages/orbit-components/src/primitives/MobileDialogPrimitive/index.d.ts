// @noflow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly enabled?: boolean;
  readonly lockScrolling?: boolean;
  readonly tabIndex?: string | number;
  readonly renderInPortal?: boolean;
  readonly content: React.ReactNode;
  readonly stopPropagation?: boolean;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
}

export const MobileDialogPrimitive: React.FunctionComponent<Props>;
