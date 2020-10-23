// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Drawer";

type Position = "left" | "right";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly onClose?: Common.Callback;
  readonly shown: boolean;
  readonly width?: string;
  readonly position?: Position;
  readonly noPadding?: boolean;
  readonly suppressed?: boolean;
  readonly title?: Common.Translation;
  readonly actions?: React.ReactNode;
}

declare const Drawer: React.FunctionComponent<Props>;
export { Drawer, Drawer as default };
