// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface SharedProps extends Common.Globals {
  readonly children: React.ReactNode;
}

export type Type = "primary" | "secondary";

export interface Props extends SharedProps {
  readonly type?: Type;
  readonly striped?: boolean;
  readonly compact?: boolean;
}

declare const Table: React.FunctionComponent<Props>;
export { Table, Table as default };
export { TableBody } from "./TableBody/index.d";
export { TableCell } from "./TableCell/index.d";
export { TableHead } from "./TableHead/index.d";
export { TableRow } from "./TableRow/index.d";
export { TableFooter } from "./TableFooter/index.d";
