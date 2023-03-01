import type React from "react";

import type { Globals, ObjectProperty } from "../../../common/types";

export interface Props extends Globals {
  children: React.ReactNode;
  active?: boolean;
  margin?: React.CSSProperties["margin"] | ObjectProperty;
  padding?: React.CSSProperties["padding"] | ObjectProperty;
}
