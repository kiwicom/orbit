// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Popover";

type Position = "top" | "bottom";
type Aligns = "start" | "end" | "center";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly content: React.ReactNode;
  readonly preferredPosition?: Position;
  readonly preferredAlign?: Aligns;
  readonly opened?: boolean;
  readonly width?: string;
  readonly noPadding?: boolean;
  readonly overlapped?: boolean;
  readonly fixed?: boolean;
  readonly actions?: React.ReactNode;
  readonly onOpen?: Common.Callback;
  readonly onClose?: Common.Callback;
}
// eslint-disable-next-line react/prefer-stateless-function
declare class Popover extends React.Component<Props> {}
export { Popover, Popover as default };
