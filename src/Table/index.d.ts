// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Table";

export interface SharedProps extends Common.Global {
  readonly children: React.ReactNode;
}

interface Props extends SharedProps {
  readonly type?: "primary" | "secondary";
  readonly striped?: boolean;
  readonly compact?: boolean;
}

export const Table: React.FunctionComponent<Props>;

export { TableBody } from "./TableBody/index";
export { TableCell } from "./TableCell/index";
export { TableHead } from "./TableHead/index";
export { TableRow } from "./TableRow/index";
export { TableFooter } from "./TableFooter/index";
