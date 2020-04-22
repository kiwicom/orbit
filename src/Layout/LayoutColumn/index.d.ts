// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";
import { Devices } from "../../utils/mediaQuery/index.d.ts";

declare module "@kiwicom/orbit-components/lib/LayoutColumn";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly element?: string;
  readonly hideOn?: Devices[];
}

const LayoutColumn: React.FunctionComponent<Props>;
export { LayoutColumn, LayoutColumn as default };
