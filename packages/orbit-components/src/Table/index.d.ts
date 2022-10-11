// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import { AnyStyledComponent } from "styled-components";

import * as Common from "../common/common";

export interface SharedProps extends Common.Global {
  readonly children: React.ReactNode;
}

interface Props extends SharedProps {
  readonly type?: "primary" | "secondary";
  readonly striped?: boolean;
  readonly compact?: boolean;
}

declare const StyledTable: AnyStyledComponent;
declare const Table: React.FunctionComponent<Props>;
export { Table, StyledTable, Table as default };
export { TableBody } from "./TableBody";
export { TableCell } from "./TableCell";
export { TableHead } from "./TableHead";
export { TableRow } from "./TableRow";
export { TableFooter } from "./TableFooter";
