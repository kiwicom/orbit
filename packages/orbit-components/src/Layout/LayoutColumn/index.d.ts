// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";
import { Devices } from "../../utils/mediaQuery/index.d";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly as?: string;
  readonly hideOn?: Devices[];
  readonly spanEntireRow?: boolean;
}

declare const LayoutColumn: React.FunctionComponent<Props>;
export { LayoutColumn, LayoutColumn as default };
