// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.Global, Common.Ref {
  readonly children: React.ReactNode;
  readonly type?: "colored" | "neutral";
  readonly selected?: boolean;
  readonly dateTag?: boolean;
  readonly size?: Common.InputSize;
  readonly onRemove?: Common.Callback;
  readonly onClick?: Common.Callback;
}

declare const Tag: React.FunctionComponent<Props>;
export { Tag, Tag as default };
