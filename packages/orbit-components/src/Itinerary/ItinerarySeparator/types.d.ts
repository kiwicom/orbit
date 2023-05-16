import type * as React from "react";

import type { Props } from "../../Separator/types";

export interface Props {
  readonly children?: React.ReactNode;
  readonly type?: Props["type"];
  readonly color?: Props["color"];
}
