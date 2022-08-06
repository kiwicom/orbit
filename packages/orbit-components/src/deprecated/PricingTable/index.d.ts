// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly activeElement?: number | undefined | null;
  readonly hasError?: boolean;
  readonly desktopRadio?: boolean;
}

declare const PricingTable: React.FunctionComponent<Props>;

export { PricingTableItem } from "./PricingTableItem";
export default PricingTable;
