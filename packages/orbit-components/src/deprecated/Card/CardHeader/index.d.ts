// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../../common/common";

declare module "@kiwicom/orbit-components/lib/deprecated/CardHeader";

interface Props extends Common.Global {
  readonly icon?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly subTitle?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly dataA11ySection?: string;
}

declare const DeprecatedCardHeader: React.FunctionComponent<Props>;
export { DeprecatedCardHeader, DeprecatedCardHeader as default };
