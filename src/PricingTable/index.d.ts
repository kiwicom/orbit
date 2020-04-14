// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";
import { PricingTableItemType } from "./PricingTableItem/index.d.ts";

declare module "@kiwicom/orbit-components/lib/PricingTable";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly activeElement?: number | undefined | null;
  readonly hasError?: boolean;
}

declare const PricingTableItem: PricingTableItemType;

const PricingTable: React.FunctionComponent<Props>;
export { PricingTable, PricingTable as default, PricingTableItem };
