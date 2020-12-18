// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/Card/CardSection";

export interface Props extends Common.Global {
  readonly title?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly expandable?: boolean;
  readonly initialExpanded?: boolean;
  readonly actions?: React.ReactNode;
  readonly expanded?: boolean;
  readonly noSeparator?: boolean;
  readonly onClose?: Common.Callback;
  readonly onExpand?: Common.Callback;
  readonly onClick?: Common.Callback;
  readonly header?: React.ReactNode;
}

declare const CardSection: React.FunctionComponent<Props>;
export { CardSection, CardSection as default };
