import type * as React from "react";

import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly type: "checkbox" | "radio";
  readonly inline?: boolean;
  readonly title?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly label?: React.ReactNode;
  readonly selected?: boolean;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
  readonly children?: React.ReactNode;
}
