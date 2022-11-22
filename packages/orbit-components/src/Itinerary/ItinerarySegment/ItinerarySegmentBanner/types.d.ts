import type * as React from "react";

import type * as Common from "../../../common/types";

export interface Props {
  readonly children: React.ReactNode;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLDivElement>>;
}
