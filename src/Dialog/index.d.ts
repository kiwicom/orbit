// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Dialog";

export interface Props extends Common.Global {
  readonly title: React$Node;
  readonly description?: React.ReactNode;
  readonly illustration?: React.ReactNode;
  readonly primaryAction: React.ReactNode;
  readonly secondaryAction?: React.ReactNode;
  readonly onClose?: Common.Callback;
}

const Dialog: React.FunctionComponent<Props>;
export { Dialog, Dialog as default };
