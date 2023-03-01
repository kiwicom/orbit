import type React from "react";

import type { Globals, ObjectProperty } from "../../../common/types";
import type { Spacing } from "../../../Stack/types";
import type { ObjectProperty } from "../../../utils/common";

export interface Props extends Globals {
  children: React.ReactNode;
  spacing?: Spacing;
  compact?: boolean;
  margin?: React.CSSProperties["margin"] | ObjectProperty;
  padding?: React.CSSProperties["padding"] | ObjectProperty;
}
