import type { Globals, ObjectProperty } from "../../../common/types";

export interface Props extends Globals {
  children: React.ReactNode;
  margin?: React.CSSProperties["margin"] | ObjectProperty;
  padding?: React.CSSProperties["padding"] | ObjectProperty;
}
