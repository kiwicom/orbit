// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import { SharedProps } from "../index";

declare module "@kiwicom/orbit-components/lib/Table/TableCell";

type Align = "left" | "center" | "right";
type As = "th" | "td";
type Scope = "col" | "row" | "colgroup" | "rowgroup";

interface Props extends SharedProps {
  readonly align?: Align;
  readonly as?: As;
  readonly scope?: Scope;
}

declare const TableCell: React.FunctionComponent<Props>;
export { TableCell, TableCell as default };
