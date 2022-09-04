// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import { SharedProps } from "../index.d";

export type Align = "left" | "center" | "right";
export type As = "th" | "td";
export type Scope = "col" | "row" | "colgroup" | "rowgroup";
export type WhiteSpace = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
export type VerticalAlign = "baseline" | "middle" | "top" | "bottom";

export interface Props extends SharedProps {
  readonly as?: As;
  readonly scope?: Scope;
  readonly align?: Align;
  readonly whiteSpace?: WhiteSpace;
  readonly verticalAlign?: VerticalAlign;
}

declare const TableCell: React.FunctionComponent<Props>;
export { TableCell, TableCell as default };
