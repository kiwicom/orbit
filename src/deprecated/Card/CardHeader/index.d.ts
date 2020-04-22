// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/CardHeader";

export interface Props extends Common.Global {
  readonly icon?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly subTitle?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly dataA11ySection?: string;
}

const CardHeader: React.FunctionComponent<Props>;
export { CardHeader, CardHeader as default };
