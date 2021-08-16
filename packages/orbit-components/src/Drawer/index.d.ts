// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Drawer";

type Position = "left" | "right";

export interface Props extends Common.Global {
  readonly actions?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly noPadding?: boolean;
  readonly onClose?: Common.Callback;
  readonly position?: Position;
  readonly shown: boolean;
  readonly suppressed?: boolean;
  readonly title?: Common.Translation;
  readonly width?: string;
}

declare const Drawer: React.FunctionComponent<Props>;
export { Drawer, Drawer as default };
