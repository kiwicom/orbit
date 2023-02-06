import type { Globals } from "../../../common/types";

export type Type = "default" | "basic" | "medium" | "top";

export interface Props extends Globals {
  children: React.ReactNode;
  type?: Type;
  active?: boolean;
  compact?: boolean;
}
