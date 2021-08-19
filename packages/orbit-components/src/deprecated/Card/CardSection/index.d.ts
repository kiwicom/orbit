// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../../common/common";

declare module "@kiwicom/orbit-components/lib/deprecated/CardSection";

interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly expandable?: boolean;
  readonly initialExpanded?: boolean;
  readonly onClose?: Common.Callback;
  readonly onExpand?: Common.Callback;
}

declare const DeprecatedCardSection: React.FunctionComponent<Props>;
export { DeprecatedCardSection, DeprecatedCardSection as default };
