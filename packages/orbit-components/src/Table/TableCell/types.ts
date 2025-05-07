// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { SharedProps } from "../types";

export type Align = "start" | "end" | "left" | "center" | "right";
export type Scope = "col" | "row" | "colgroup" | "rowgroup";
export type WhiteSpace = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
export type VerticalAlign = "baseline" | "middle" | "top" | "bottom";

export type Props = SharedProps & {
  readonly align?: Align;
  readonly whiteSpace?: WhiteSpace;
  readonly verticalAlign?: VerticalAlign;
} & (
    | {
        readonly as?: "th";
        readonly scope?: Scope;
      }
    | {
        readonly as?: "td";
      }
  );
