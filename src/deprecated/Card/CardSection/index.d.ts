// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/CardSection";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly expandable?: boolean;
  readonly initialExpanded?: boolean;
  readonly onClose?: Common.Callback;
  readonly onExpand?: Common.Callback;
}

const CardSection: React.FunctionComponent<Props>;
export { CardSection, CardSection as default };
