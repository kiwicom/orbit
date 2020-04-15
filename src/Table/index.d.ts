// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { TableBodyType } from "./TableBody/index.d.ts";
import { TableCellType } from "./TableCell/index.d.ts";
import { TableHeadType } from "./TableHead/index.d.ts";
import { TableRowType } from "./TableRow/index.d.ts";
import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Table";

export interface SharedProps extends Common.Global {
  readonly children: React.ReactNode;
}

interface Props extends SharedProps {
  readonly compact?: boolean;
}

const Table: React.FunctionComponent<Props>;

declare const TableBody: TableBodyType;
declare const TableCell: TableCellType;
declare const TableHead: TableHeadType;
declare const TableRow: TableRowType;

export { Table, Table as default, TableBody, TableCell, TableHead, TableRow };
