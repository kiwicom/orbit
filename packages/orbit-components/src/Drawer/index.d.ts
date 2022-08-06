// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

type Position = "left" | "right";

export interface Props extends Common.Globals {
  readonly actions?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly noPadding?: boolean;
  readonly onClose?: Common.Callback;
  readonly fixedHeader?: boolean;
  readonly position?: Position;
  readonly shown: boolean;
  readonly suppressed?: boolean;
  readonly title?: Common.Translation;
  readonly width?: string;
}

declare const Drawer: React.FunctionComponent<Props>;
export { Drawer, Drawer as default };
