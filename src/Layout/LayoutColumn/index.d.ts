// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common";
import { Devices } from "../../utils/mediaQuery/index";

declare module "@kiwicom/orbit-components/lib/LayoutColumn";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly as?: string;
  readonly hideOn?: Devices[];
}

declare const LayoutColumn: React.FunctionComponent<Props>;
export { LayoutColumn, LayoutColumn as default };
