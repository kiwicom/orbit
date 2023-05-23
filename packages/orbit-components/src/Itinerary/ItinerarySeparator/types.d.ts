import type * as React from "react";

import type { Props as SeparatorProps } from "../../Separator/types";

export interface Props {
  readonly children?: React.ReactNode;
  readonly type?: SeparatorProps["type"];
  readonly color?: SeparatorProps["color"];
}
